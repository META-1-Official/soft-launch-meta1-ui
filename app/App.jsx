import React from 'react';
import {ChainStore} from 'meta1-vision-js';
import AccountStore from 'stores/AccountStore';
import NotificationStore from 'stores/NotificationStore';
import {withRouter} from 'react-router-dom';
import SyncError from './components/SyncError';
import LoadingIndicator from './components/LoadingIndicator';
import ReactTooltip from 'react-tooltip';
import NotificationSystem from 'react-notification-system';
import TransactionConfirm from './components/Blockchain/TransactionConfirm';
import WalletUnlockModal from './components/Wallet/WalletUnlockModal';
import PasswordlessLoginModal from './components/Wallet/PasswordlessLoginModal';
import BrowserSupportModal from './components/Modal/BrowserSupportModal';
import Deprecate from './Deprecate';
import Incognito from './components/Layout/Incognito';
import {isIncognito} from 'feature_detect';
import titleUtils from 'common/titleUtils';
import {notification} from 'antd';
import {DEFAULT_NOTIFICATION_DURATION} from 'services/Notification';
import Loadable from 'react-loadable';
import NewsHeadline from 'components/Layout/NewsHeadline';
import Onramperwallet from 'components/Wallet/Onramperwallet';
import Login from './components/Login/Login';
import WalletRegistration from './components/Registration/WalletRegistration';
import AccountRegistration from './components/Registration/AccountRegistration';
import {CreateWalletFromBrainkey} from './components/Wallet/WalletCreate';
import PriceAlertNotifications from './components/PriceAlertNotifications';
import {updateGatewayBackers} from 'common/gatewayUtils';
import WalletUnlockActions from 'actions/WalletUnlockActions';
import WalletManagerStore from 'stores/WalletManagerStore';

import {Route, Switch, Redirect} from 'react-router-dom';
// Nested route components
import Page404 from './components/Page404/Page404';
import AppLayout from 'components/Layout/Layout';
import BodyClassName from 'components/BodyClassName';
import AssetExplorerDetails from './components/Exchange/AssetExplorerDetails';
import {Worker} from '@react-pdf-viewer/core';
import {toast} from 'react-toastify';
import Utils from 'lib/common/utils';

import axios from 'axios';
import ls from './lib/common/localStorage';

const STORAGE_KEY = '__AuthData__';
const ss = new ls(STORAGE_KEY);
const ss_graphene = new ls('__graphene__');

// for the cache purpose
import AppStore from './assets/app-store.png';
import GooglePlay from './assets/google-play.png';
import OfflineIcon from './assets/offline.png';

const Invoice = Loadable({
	loader: () =>
		import(/* webpackChunkName: "exchange" */ './components/Transfer/Invoice'),
	loading: LoadingIndicator,
});

const assetExplorer = Loadable({
	loader: () =>
		import(
			/* webpackChunkName: "exchange" */ './components/Exchange/AssetExplorer'
		),
	loading: LoadingIndicator,
});

const Exchange = Loadable({
	loader: () =>
		import(
			/* webpackChunkName: "exchange" */ './components/Exchange/ExchangeContainer'
		),
	loading: LoadingIndicator,
});

const ClaimWallet = Loadable({
	loader: () =>
		import(/* webpackChunkName: "ClaimWallet" */ './components/ClaimWallet/'),
	loading: LoadingIndicator,
});

const Explorer = Loadable({
	loader: () =>
		import(/* webpackChunkName: "explorer" */ './components/Explorer/Explorer'),
	loading: LoadingIndicator,
});

const PredictionMarketsPage = Loadable({
	loader: () =>
		import(
			/* webpackChunkName: "pm" */ './components/PredictionMarkets/PredictionMarkets'
		),
	loading: LoadingIndicator,
});

const AccountPage = Loadable({
	loader: () =>
		import(
			/* webpackChunkName: "account" */ './components/Account/AccountPage'
		),
	loading: LoadingIndicator,
});

const Settings = Loadable({
	loader: () =>
		import(
			/* webpackChunkName: "settings" */ './components/Settings/SettingsContainer'
		),
	loading: LoadingIndicator,
});

const AddContact = Loadable({
	loader: () =>
		import(
			/* webpackChunkName: "Add Contact" */ './components/Contact/AddContact'
		),
	loading: LoadingIndicator,
});

const Help = Loadable({
	loader: () => import(/* webpackChunkName: "help" */ './components/Help'),
	loading: LoadingIndicator,
});
const Confirm = Loadable({
	loader: () =>
		import(/* webpackChunkName: "confirm" */ './components/Confirm'),
	loading: LoadingIndicator,
});

const Asset = Loadable({
	loader: () =>
		import(/* webpackChunkName: "asset" */ './components/Blockchain/Asset'),
	loading: LoadingIndicator,
});

const Block = Loadable({
	loader: () =>
		import(
			/* webpackChunkName: "block" */ './components/Blockchain/BlockContainer'
		),
	loading: LoadingIndicator,
});

const DashboardAccountsOnly = Loadable({
	loader: () =>
		import(
			/* webpackChunkName: "dashboard-accounts" */ './components/Dashboard/DashboardAccountsOnly'
		),
	loading: LoadingIndicator,
});

const DashboardPage = Loadable({
	loader: () =>
		import(
			/* webpackChunkName: "dashboard" */ './components/Dashboard/DashboardPage'
		),
	loading: LoadingIndicator,
});

const WalletManager = Loadable({
	loader: () =>
		import(
			/* webpackChunkName: "wallet" */ './components/Wallet/WalletManager'
		),
	loading: LoadingIndicator,
});

const ExistingAccount = Loadable({
	loader: () =>
		import(
			/* webpackChunkName: "existing-account" */ './components/Wallet/ExistingAccount'
		),
	loading: LoadingIndicator,
});

const CreateWorker = Loadable({
	loader: () =>
		import(
			/* webpackChunkName: "create-worker" */ './components/Account/CreateWorker'
		),
	loading: LoadingIndicator,
});

const Barter = Loadable({
	loader: () =>
		import(/* webpackChunkName: "settings" */ './components/Showcases/Barter'),
	loading: LoadingIndicator,
});

const Borrow = Loadable({
	loader: () =>
		import(/* webpackChunkName: "settings" */ './components/Showcases/Borrow'),
	loading: LoadingIndicator,
});

const Htlc = Loadable({
	loader: () =>
		import(/* webpackChunkName: "settings" */ './components/Showcases/Htlc'),
	loading: LoadingIndicator,
});

const DirectDebit = Loadable({
	loader: () =>
		import(
			/* webpackChunkName: "settings" */ './components/Showcases/DirectDebit'
		),
	loading: LoadingIndicator,
});

const AuthRedirect = Loadable({
	loader: () =>
		import(/* webpackChunkName: "auth" */ './components/AuthRedirect'),
	loading: LoadingIndicator,
});

class App extends React.Component {
	constructor() {
		super();

		let syncFail =
			ChainStore.subError &&
			ChainStore.subError.message ===
				'ChainStore sync error, please check your system clock'
				? true
				: false;
		this.state = {
			isBrowserSupportModalVisible: false,
			loading: false,
			synced: this._syncStatus(),
			syncFail,
			incognito: false,
			incognitoWarningDismissed: false,
			height: window && window.innerHeight,
		};

		this._rebuildTooltips = this._rebuildTooltips.bind(this);
		this._chainStoreSub = this._chainStoreSub.bind(this);
		this._syncStatus = this._syncStatus.bind(this);
		this._getWindowHeight = this._getWindowHeight.bind(this);

		this.showBrowserSupportModal = this.showBrowserSupportModal.bind(this);
		this.hideBrowserSupportModal = this.hideBrowserSupportModal.bind(this);

		notification.config({
			duration: DEFAULT_NOTIFICATION_DURATION,
			top: 90,
		});
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this._getWindowHeight);
		NotificationStore.unlisten(this._onNotificationChange);
		ChainStore.unsubscribe(this._chainStoreSub);
		clearInterval(this.syncCheckInterval);
	}

	/**
	 * Returns the current blocktime, or exception if not yet available
	 * @returns {Date}
	 */
	getBlockTime() {
		let dynGlobalObject = ChainStore.getObject('2.1.0');
		if (dynGlobalObject) {
			let block_time = dynGlobalObject.get('time');
			if (!/Z$/.test(block_time)) {
				block_time += 'Z';
			}
			return new Date(block_time);
		} else {
			throw new Error('Blocktime not available right now');
		}
	}

	/**
	 * Returns the delta between the current time and the block time in seconds, or -1 if block time not available yet
	 *
	 * Note: Could be integrating properly with BlockchainStore to send out updates, but not necessary atp
	 */
	getBlockTimeDelta() {
		try {
			let bt =
				(this.getBlockTime().getTime() +
					ChainStore.getEstimatedChainTimeOffset()) /
				1000;
			let now = new Date().getTime() / 1000;
			return Math.abs(now - bt);
		} catch (err) {
			return -1;
		}
	}

	hideBrowserSupportModal() {
		this.setState({
			isBrowserSupportModalVisible: false,
		});
	}

	showBrowserSupportModal() {
		this.setState({
			isBrowserSupportModalVisible: true,
		});
	}

	_syncStatus(setState = false) {
		let synced = this.getBlockTimeDelta() < 5;
		if (setState && synced !== this.state.synced) {
			this.setState({synced});
		}
		return synced;
	}

	_setListeners() {
		try {
			window.addEventListener('resize', this._getWindowHeight, {
				capture: false,
				passive: true,
			});
			NotificationStore.listen(this._onNotificationChange.bind(this));
			ChainStore.subscribe(this._chainStoreSub);
			AccountStore.tryToSetCurrentAccount();
		} catch (e) {
			console.error('e:', e);
		}
	}

	componentDidMount() {
		this._setListeners();
		this._initNotificationConfig();
		this.syncCheckInterval = setInterval(
			this._syncStatus.bind(this, true),
			5000
		);
		const user_agent = navigator.userAgent.toLowerCase();

		if (
			!(
				window.electron ||
				user_agent.indexOf('firefox') > -1 ||
				user_agent.indexOf('chrome') > -1 ||
				user_agent.indexOf('edge') > -1 ||
				user_agent.indexOf('safari') > -1
			)
		) {
			this.showBrowserSupportModal();
		}

		this.props.history.listen(this._rebuildTooltips);

		this._rebuildTooltips();

		isIncognito(
			function (incognito) {
				this.setState({incognito});
			}.bind(this)
		);
		updateGatewayBackers();
	}

	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			this.onRouteChanged();
		}
	}

	onRouteChanged() {
		document.title = titleUtils.GetTitleByPath(this.props.location.pathname);

		const accountName = ss.get('account_login_name', null);
		const accountToken = ss.get('account_login_token', null);

		accountName &&
			accountToken &&
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

						const isIncludes =
							this.props.history?.location?.pathname.includes('explorer');
						if (!isIncludes) {
							this.props.history.replace('/market/META1_USDT');
						}
					}
				})
				.catch((error) => {
					toast('User token is invalid or expired. Please login again.');
					WalletUnlockActions.lock_v2().finally(() => {
						const isIncludes =
							this.props.history?.location?.pathname.includes('explorer');
						if (!isIncludes) {
							this.props.history.replace('/market/META1_USDT');
						}
					});
				});
	}

	_onIgnoreIncognitoWarning() {
		this.setState({incognitoWarningDismissed: true});
	}

	_initNotificationConfig() {
		console.log('@@@@@@notif');
		var conf = JSON.parse(localStorage.getItem('noti_conf'));
		if (!conf) {
			conf = {
				specNotification: [
					// { events: true },
					// { announcements: true },
					// { deposits: true },
					{send: true},
					{receive: true},
					// { tradeExcuted: true },
					// { tradeCanceled: true },
				],
				coinMovements: [],
			};
		}
		localStorage.setItem('noti_conf', JSON.stringify(conf));
	}

	_rebuildTooltips() {
		if (this.rebuildTimeout) return;
		ReactTooltip.hide();

		this.rebuildTimeout = setTimeout(() => {
			if (this.refs.tooltip) {
				this.refs.tooltip.globalRebuild();
			}
			this.rebuildTimeout = null;
		}, 1500);
	}

	_chainStoreSub() {
		let synced = this._syncStatus();
		if (synced !== this.state.synced) {
			this.setState({synced});
		}
		if (ChainStore.subscribed !== this.state.synced || ChainStore.subError) {
			let syncFail =
				ChainStore.subError &&
				ChainStore.subError.message ===
					'ChainStore sync error, please check your system clock'
					? true
					: false;
			this.setState({
				syncFail,
			});
		}
	}

	/** Usage: NotificationActions.[success,error,warning,info] */
	_onNotificationChange() {
		let notification = NotificationStore.getState().notification;
		if (notification.autoDismiss === void 0) {
			notification.autoDismiss = 10;
		}
		if (this.refs.notificationSystem)
			this.refs.notificationSystem.addNotification(notification);
	}

	_getWindowHeight() {
		this.setState({height: window && window.innerHeight});
	}

	_onSetupWebSocket(accountName) {
		if (this.ws) return;
		try {
			const webSocketFactory = {
				connectionTries: 5,
				connect: function (url) {
					let ws = new WebSocket(url);
					ws.onerror = (error) => {
						console.log('websocket error', error);
					};
					ws.onopen = () => {
						console.log('setup notification websocket');
						webSocketFactory.connectionTries = 5;
					};
					return ws;
				},
			};

			this.ws = new webSocketFactory.connect(
				`${process.env.NOTIFICATION_WS_URL}?account=${accountName}`
			);
			this.ws.onclose = (event) => {
				if (event.code > 1001) {
					webSocketFactory.connectionTries =
						webSocketFactory.connectionTries - 1;

					if (webSocketFactory.connectionTries > 0) {
						this.ws = null;
						setTimeout(() => this._onSetupWebSocket(accountName), 5000);
					} else {
						throw new Error(
							'Maximum number of connection trials has been reached'
						);
					}
				}
			};

			this.ws.onmessage = (message) => {
				console.log('notification arrived', message);
				var filter = Utils.filterNotifications(
					[JSON.parse(message.data)],
					accountName
				);
				if (message && message.data && filter.length > 0) {
					const content = JSON.parse(message.data).content;
					toast(<p dangerouslySetInnerHTML={{__html: content}} />);
				}
			};
		} catch (e) {
			console.log('notification connection error', e);
		}
	}

	render() {
		let {incognito, incognitoWarningDismissed} = this.state;
		let {walletMode, theme, location, ...others} = this.props;
		let content = null;
		if (this.state.syncFail) {
			content = <SyncError />;
		} else if (this.state.loading) {
			content = (
				<div className="grid-frame vertical">
					<LoadingIndicator
						loadingText={'Connecting to APIs and starting app'}
					/>
				</div>
			);
		} else if (__DEPRECATED__) {
			content = <Deprecate {...this.props} />;
		} else {
			let accountName =
				AccountStore.getState().currentAccount ||
				AccountStore.getState().passwordAccount;

			if (accountName) this._onSetupWebSocket(accountName);

			accountName =
				accountName && accountName !== 'null'
					? accountName
					: 'committee-account';

			content = (
				<div className="grid-frame vertical">
					<NewsHeadline />
					<Switch>
						<Route exact path="/">
							<Redirect to="/market/META1_USDT" />
						</Route>
						<Route path="/account/:account_name" component={AccountPage} />
						<Route path="/accounts" component={DashboardAccountsOnly} />
						<Route path="/market/:marketID" component={Exchange} />
						<Route path="/settings/:tab" component={Settings} />
						<Route path="/settings" component={Settings} />
						<Route path="/contact/add" component={AddContact} />

						<Route path="/invoice/:data" component={Invoice} />
						<Route path="/registration" exact component={AccountRegistration} />
						<Route path="/auth-proceed" component={AuthRedirect} />
						{/* <Route
							path="/registration/local"
							exact
							component={WalletRegistration}
						/>
						<Route
							path="/registration/cloud"
							exact
							component={AccountRegistration}
						/> */}
						{/* Explorer routes */}
						<Route path="/explorer/:tab" component={Explorer} />
						<Route path="/explorer" component={Explorer} />
						<Route path="/asset/:symbol" component={Asset} />
						<Route exact path="/block/:height" component={Block} />
						<Route exact path="/block/:height/:txIndex" component={Block} />
						<Route path="/borrow" component={Borrow} />

						<Route path="/barter" component={Barter} />
						<Route path="/direct-debit" component={DirectDebit} />

						{/* <Route
								path="/spotlight"
								component={ShowcaseGrid}
							/>*/}

						{/* Wallet backup/restore routes */}
						{/* <Route path="/wallet" component={WalletManager} /> */}
						{/* <Route
							path="/create-wallet-brainkey"
							component={CreateWalletFromBrainkey}
						/> */}
						{/* <Route path="/existing-account" component={ExistingAccount} /> */}

						<Route path="/create-worker" component={CreateWorker} />
						<Route path="/onramperwallet" component={Onramperwallet} />

						<Route
							exact
							path="/asset-explorer"
							component={assetExplorer}
							{...this.props}
						/>
						<Route
							exact
							path="/asset-explorer-details"
							component={AssetExplorerDetails}
							{...this.props}
						/>
						<Route exact path="/confirm" component={Confirm} />
						<Route exact path="/confirm/:confirmCode" component={Confirm} />
						{/* Help routes */}
						<Route exact path="/learn" component={Help} />
						<Route exact path="/learn/:path1" component={Help} />
						<Route exact path="/learn/:path1/:path2" component={Help} />
						<Route exact path="/learn/:path1/:path2/:path3" component={Help} />
						{/* <Route path="/htlc" component={Htlc} />
						<Route path="/prediction" component={PredictionMarketsPage} /> */}
						<Route path="/claimWallet" component={ClaimWallet} />
						<Redirect
							path={'/voting'}
							to={{
								pathname: `/account/${accountName}/voting`,
							}}
						/>
						<Route path="*" component={Page404} />
					</Switch>
					<ReactTooltip
						ref="tooltip"
						place="top"
						type={theme === 'lightTheme' ? 'dark' : 'light'}
						event="mouseover mouseenter"
						eventOff="mouseleave mouseout scroll mousewheel blur"
						effect="solid"
					/>
				</div>
			);
		}

		return (
			<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.8.162/build/pdf.worker.min.js">
				<AppLayout location={location} height={this.state.height} {...others}>
					<div
						style={{backgroundColor: !theme ? '#2a2a2a' : null}}
						className={theme}
					>
						<BodyClassName className={theme}>
							{walletMode && incognito && !incognitoWarningDismissed ? (
								<Incognito
									onClickIgnore={this._onIgnoreIncognitoWarning.bind(this)}
								/>
							) : null}

							<div className="content-wrapper" id="content-wrapper">
								{content}
								<NotificationSystem
									ref="notificationSystem"
									allowHTML={true}
									css={(theme) => ({
										Containers: {
											DefaultStyle: {
												width: '100%',
											},
										},
									})}
								/>
								<TransactionConfirm />
								<PriceAlertNotifications />
								<WalletUnlockModal />
								<PasswordlessLoginModal />
								<BrowserSupportModal
									visible={this.state.isBrowserSupportModalVisible}
									hideModal={this.hideBrowserSupportModal}
									showModal={this.showBrowserSupportModal}
								/>

								<img src={AppStore} style={{display: 'none'}} />
								<img src={GooglePlay} style={{display: 'none'}} />
								<img src={OfflineIcon} style={{display: 'none'}} />
							</div>
						</BodyClassName>
					</div>
				</AppLayout>
			</Worker>
		);
	}
}

export default withRouter(App);
