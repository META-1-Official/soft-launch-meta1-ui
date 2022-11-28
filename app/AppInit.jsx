import {hot} from 'react-hot-loader';
import React from 'react';
import App from './App';
import IntlActions from 'actions/IntlActions';
import WalletUnlockActions from 'actions/WalletUnlockActions';
import WalletManagerStore from 'stores/WalletManagerStore';
import AccountStore from 'stores/AccountStore';
import SettingsStore from 'stores/SettingsStore';
import IntlStore from 'stores/IntlStore';
import intlData from './components/Utility/intlData';
import alt from 'alt-instance';
import {connect, supplyFluxContext} from 'alt-react';
import {IntlProvider} from 'react-intl';
import willTransitionTo from './routerTransition';
import LoadingIndicator from './components/LoadingIndicator';
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

const STORAGE_KEY = '__AuthData__';
const ss = new ls(STORAGE_KEY);

class RootIntl extends React.Component {
	componentWillMount() {
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
		};
		this.mounted = true;
		this.persistentLogEnabled = false;
	}

	/**
	 * Global error catching and forwarding to log handler
	 * @param error
	 */
	componentDidCatch(error) {
		// this.saveExtendedLog('error', [error]);
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
			if (
				log.length > 1 &&
				typeof log[1] === 'string' &&
				log[1] === 'html2canvas:'
			) {
				return;
			}
			thiz.saveExtendedLog(type, Array.from(log));
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

	componentWillMount() {
		// if (!__DEV__) {
		// 	this._enablePersistingLog();
		// }

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

		const contains = openRoutes.some((element) => {
			if (
				window.location.pathname.toLowerCase().includes(element.toLowerCase())
			) {
				return true;
			}
			return false;
		});

		const self = this;
		if (!contains) {
			const token = ss.get('account_login_token');
			const config = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};
			axios
				.post(process.env.LITE_WALLET_URL + '/verifyToken', {}, config)
				.then((response) => {})
				.catch((error) => {
					console.log('error', error);
					WalletUnlockActions.lock_v2().finally(() => {
						history.replace('/market/META1_USDT');
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
	}

	// componentWillUnmount() {
	// 	this.mounted = false;
	// }

	_statusCallback(status) {
		this.setState({status});
	}

	render() {
		const {theme, apiServer} = this.props;
		const {apiConnected, apiError, syncError, status} = this.state;
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
