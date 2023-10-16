import {hot} from 'react-hot-loader';
import React from 'react';
import App from './App';
import IntlActions from 'actions/IntlActions';
import AccountActions from 'actions/AccountActions';
import WalletUnlockActions from 'actions/WalletUnlockActions';
import WalletManagerStore from 'stores/WalletManagerStore';
import AccountStore from 'stores/AccountStore';
import SettingsStore from 'stores/SettingsStore';
import IntlStore from 'stores/IntlStore';
import intlData from 'constants/intlData';
import alt from 'alt-instance';
import {connect, supplyFluxContext} from 'alt-react';
import {IntlProvider} from 'react-intl';
import willTransitionTo from './routerTransition';
import LoadingIndicator from './components/LoadingIndicator';
import DisconnectedInternet from './components/DisconnectedInternet';
import InitError from './components/InitError';
import SyncError from './components/SyncError';
import counterpart from 'counterpart';
import LogsActions from 'actions/LogsActions';
import axios from 'axios';
import ls from './lib/common/localStorage';
/*
 * Electron does not support browserHistory, so we need to use hashHistory.
 * The same is true for servers without configuration options, such as Github Pages
 */
import {Router} from 'react-router-dom';
import history from 'lib/common/history';
import BodyClassName from 'components/BodyClassName';
import * as Sentry from '@sentry/react';
import {toast} from 'react-toastify';

// for the cache purpose
import AppStore from './assets/app-store.png';
import GooglePlay from './assets/google-play.png';
import OfflineIcon from './assets/offline.png';

const STORAGE_KEY = '__AuthData__';
const ss = new ls(STORAGE_KEY);
const ss_graphene = new ls('__graphene__');

class RootIntl extends React.Component {
	UNSAFE_componentWillMount() {
		IntlActions.switchLocale(this.props.locale);
	}

	render() {
		return (
			<IntlProvider
				locale={this.props.locale}
				formats={intlData.formats}
				initialNow={Date.now()}
			>
				<Router history={history}>
					<App {...this.props} />
				</Router>
			</IntlProvider>
		);
	}
}

class AppInit extends React.Component {
	constructor() {
		super();

		this.state = {
			apiConnected: false,
			apiError: false,
			syncError: null,
			status: '',
			extendeLogText: [], // used to cache logs when not mounted
			isOnline: navigator.onLine,
		};
		this.mounted = true;
		this.persistentLogEnabled = false;

		// Bind this to storageChanged()
		this.handleStatusChange = this.handleStatusChange.bind(this);
	}

	handleStatusChange() {
		this.setState({isOnline: navigator.onLine});
	}

	componentDidUpdate(nextProps, nextState) {
		LogsActions.setLog(nextState.extendeLogText);
	}

	saveExtendedLog(type, logText) {
		const maxlogslength = 19;
		const logState = this.state.extendeLogText;
		var text = '';

		for (const value of logText) {
			text += value;
		}
		text = [type, ': ', text].join('');
		if (logState.length > maxlogslength) {
			logState.splice(0, 1);
		}
		if (text.indexOf(logState[logState.length - 1])) {
			logState.push(text);
			if (this.mounted) {
				this.setState({extendeLogText: logState});
			} else {
				LogsActions.setLog(logState);
			}
		}
	}

	_enablePersistingLog() {
		if (this.persistentLogEnabled) return;

		if (!this.state.extendeLogText.length) {
			LogsActions.getLogs().then((data) => {
				if (data) {
					this.setState({extendeLogText: data});
				}
			});
		}

		const thiz = this;
		const saveLog = (type, log) => {
			if (typeof log[0] === 'object') Sentry.captureException(log[0]);
			else if (typeof log[0] === 'string') {
				const errorMessage = JSON.stringify(
					Array.from(log).join(' ')
				).replaceAll('"', '');
				if (
					type === 'error' ||
					log[0].toLowerCase().indexOf('error') > -1 ||
					log[0].toLowerCase().indexOf('fail') > -1
				)
					if (log.length > 1)
						if (typeof log[1] === 'object') {
							Sentry.captureException(log[1]);
						} else Sentry.captureMessage(errorMessage, 'error');
					else Sentry.captureMessage(errorMessage, 'error');
				else Sentry.captureMessage(errorMessage);
			}

			if (
				log.length > 1 &&
				typeof log[1] === 'string' &&
				log[1] === 'html2canvas:'
			) {
				return;
			}
			// thiz.saveExtendedLog(type, Array.from(log));
			if (thiz.mounted) {
				console[`str${type}`].apply(console, log);
			}
		};

		// see https://www.sitepoint.com/javascript-decorators-what-they-are/ for decorator

		// see https://stackoverflow.com/questions/9559725/extending-console-log-without-affecting-log-line for line numbers

		console.strlog = console.log.bind(console);
		console.strerror = console.error.bind(console);
		console.strwarn = console.warn.bind(console);
		console.strinfo = console.info.bind(console);
		console.strtimeEnd = console.timeEnd.bind(console);
		console.strdebug = console.debug.bind(console);

		console.log = function () {
			saveLog('log', arguments);
		};
		console.warn = function () {
			saveLog('warn', arguments);
		};
		console.error = function () {
			saveLog('error', arguments);
		};
		console.info = function () {
			saveLog('info', arguments);
		};
		console.timeEnd = function () {
			saveLog('timeEnd', arguments);
		};
		console.debug = function () {
			saveLog('debug', arguments);
		};

		this.persistentLogEnabled = true;
	}

	UNSAFE_componentWillMount() {
		if (!__DEV__) {
			this._enablePersistingLog();
		}

		// Reset BackingAssetCalc Interval
		ss.set('backing_asset_calc_interval', null);

		const openRoutes = [
			'/login',
			'/registration',
			'/create-account',
			'/registration/local',
			'/registration/cloud',
			'/learn',
			'/asset-explorer',
			'/asset-explorer-details',
			'market/META1_USDT',
			'auth-proceed',
		];
		const pathname = window.location.pathname.toLowerCase();
		const accountName = ss.get('account_login_name', null);
		const accountToken = ss.get('account_login_token', null);
		const currentAccount = ss_graphene.get('currentAccount', null);
		const passwordlessAccount = ss_graphene.get('passwordlessAccount', null);
		let contains = false;

		const registering = window.location.pathname
			.toLowerCase()
			.includes('registration');
		if (registering) {
			WalletUnlockActions.lock_v2();
		}

		if (
			(accountName && accountName !== passwordlessAccount) ||
			accountName !== currentAccount
		) {
			ss_graphene.set('currentAccount', accountName);
			ss_graphene.set('passwordlessAccount', accountName);
		}

		if (accountName) {
			if (pathname.includes('account') || pathname.includes('currentDisplay')) {
				contains = true;
			}
		}

		if (!contains) {
			contains = openRoutes.some((element) => {
				return pathname.includes(element.toLowerCase());
			});
		}

		const self = this;
		if ((!contains && accountToken) || (accountName && accountToken)) {
			axios
				.post(process.env.LITE_WALLET_URL + '/check_token', {
					token: accountToken,
				})
				.then((res) => {
					if (res.data.accountName !== accountName) {
						toast('User token is invalid or expired. Please login again.');
						ss_graphene.remove('currentAccount');
						ss_graphene.remove('passwordlessAccount');
						ss_graphene.remove('currentAccount_1e265722');
						ss_graphene.remove('passwordlessAccount_1e265722');
						ss.remove('account_login_name');
						ss.remove('account_login_token');
						const isIncludes = history?.location?.pathname.includes('explorer');
						if (!isIncludes) {
							history.replace('/market/META1_USDT');
						}
					}
				})
				.catch((error) => {
					toast('User token is invalid or expired. Please login again.');
					WalletUnlockActions.lock_v2().finally(() => {
						const isIncludes = history?.location?.pathname.includes('explorer');
						if (!isIncludes) {
							history.replace('/market/META1_USDT');
						}
					});
				})
				.finally(function () {
					self.transit();
				});
		} else {
			this.transit();
		}
	}

	transit() {
		willTransitionTo(true, this._statusCallback.bind(this))
			.then(() => {
				this.setState({
					apiConnected: true,
					apiError: false,
					syncError: null,
				});

				const accountName = ss.get('account_login_name', null);
				if (accountName) AccountActions.setCurrentAccount.defer(accountName);
			})
			.catch((err) => {
				console.log('willTransitionTo err:', err);
				this.setState({
					apiConnected: false,
					apiError: true,
					syncError: !err
						? null
						: (err && err.message).indexOf('ChainStore sync error') !== -1,
				});
			});
	}
	componentDidMount() {
		this.mounted = true;
		let platform =
			navigator?.userAgentData?.platform || navigator?.platform || 'unknown';

		// Detect OS for platform specific fixes
		if (platform.indexOf('Win') > -1) {
			var main = document.getElementById('content');
			var windowsClass = 'windows';
			if (main.className.indexOf('windows') === -1) {
				main.className =
					main.className + (main.className.length ? ' ' : '') + windowsClass;
			}
		}

		// Listen to the online status
		window.addEventListener('online', this.handleStatusChange);

		// Listen to the offline status
		window.addEventListener('offline', this.handleStatusChange);
	}

	_statusCallback(status) {
		this.setState({status});
	}

	render() {
		const {theme, apiServer} = this.props;
		const {apiConnected, apiError, syncError, status, isOnline} = this.state;
		if (!isOnline) {
			return (
				<DisconnectedInternet
					appStoreIcon={AppStore}
					googlePlayIcon={GooglePlay}
					offlineIcon={OfflineIcon}
				/>
			);
		}
		if (!apiConnected) {
			let server = apiServer;
			if (!!!server) {
				server = '';
			}
			return (
				<div
					css={(theme) => ({
						backgroundColor: theme.colors.background,
					})}
					className={theme}
				>
					{!apiError ? (
						<LoadingIndicator
							loadingText={
								status ||
								counterpart.translate('app_init.connecting', {
									server: server,
								})
							}
						/>
					) : syncError ? (
						<SyncError />
					) : (
						<BodyClassName className={theme}>
							<InitError />
						</BodyClassName>
					)}
				</div>
			);
		}
		return <RootIntl {...this.props} {...this.state} />;
	}
}

AppInit = connect(AppInit, {
	listenTo() {
		return [IntlStore, WalletManagerStore, SettingsStore, AccountStore];
	},
	getProps() {
		return {
			locale: IntlStore.getState().currentLocale,
			walletMode:
				!SettingsStore.getState().settings.get('passwordLogin') ||
				!!WalletManagerStore.getState().current_wallet,
			theme: SettingsStore.getState().settings.get('themes'),
			apiServer: SettingsStore.getState().settings.get('activeNode', ''),
			currentAccount: AccountStore.getState().currentAccount,
		};
	},
});
AppInit = supplyFluxContext(alt)(AppInit);
export default hot(module)(AppInit);
