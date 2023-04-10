import React from 'react';
import {connect} from 'alt-react';
import ZfApi from 'react-foundation-apps/src/utils/foundation-api';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import ReactTooltip from 'react-tooltip';
import {withRouter, Link} from 'react-router-dom';
import {withTheme} from '@emotion/react';
import {isEmpty} from 'lodash-es';

// Custom components
import SendModal from '../Modal/SendModal';
import WithdrawModal from '../Modal/WithdrawModal';
import DepositModal from '../Modal/DepositModal';
import Icon from '../Icon/Icon';
import StyledButton from 'components/Button/Button';
import {getLogo} from 'branding';

// Antd
import {CaretDownOutlined, QuestionCircleOutlined} from '@ant-design/icons';
import {
	Layout,
	Menu,
	Row,
	Col,
	Dropdown,
	Typography,
	Avatar,
	Drawer,
	notification,
} from 'antd';

// Actions & Stores - Flux
import AccountActions from 'actions/AccountActions';
import SettingsActions from 'actions/SettingsActions';
import AccountStore from 'stores/AccountStore';
import SettingsStore from 'stores/SettingsStore';
import GatewayStore from 'stores/GatewayStore';
import WalletDb from 'stores/WalletDb';
import WalletUnlockStore from 'stores/WalletUnlockStore';
import WalletUnlockActions from 'actions/WalletUnlockActions';
import WalletManagerStore from 'stores/WalletManagerStore';

// API Services
import migrationService from 'services/migration.service';

// Meta1 SDKs
import {Apis} from 'meta1-vision-ws';
import {ChainStore} from 'meta1-vision-js';

// Storage
import ls from '../../lib/common/localStorage';
const STORAGE_KEY = '__AuthData__';
const ss = new ls(STORAGE_KEY);

// Global constants
const {Header: AntdHeader} = Layout;
const {Text} = Typography;
const logo = getLogo();
const sun = require('assets/sun.png');
const moon = require('assets/moon.png');
const hamburger = require('assets/hambuger.png');

class Header extends React.Component {
	constructor(props) {
		super();
		this.state = {
			active: props.location.pathname,
			accountsListDropdownActive: false,
			isDepositModalVisible: false,
			isWithdrawModalVisible: false,
			hasWithdrawalModalBeenShown: false,
			migratable: false,
			oldUser: false,
			drawerOpen: false,
		};

		this._accountNotificationActiveKeys = [];
		this.unlisten = null;
		this._toggleAccountDropdownMenu =
			this._toggleAccountDropdownMenu.bind(this);
		this._closeAccountsListDropdown =
			this._closeAccountsListDropdown.bind(this);
		this._closeAccountNotifications =
			this._closeAccountNotifications.bind(this);

		this.showDepositModal = this.showDepositModal.bind(this);
		this.hideDepositModal = this.hideDepositModal.bind(this);

		this.showWithdrawModal = this.showWithdrawModal.bind(this);
		this.hideWithdrawModal = this.hideWithdrawModal.bind(this);

		this.onBodyClick = this.onBodyClick.bind(this);
	}

	async checkTransferableAccount(acc_name) {
		const response = await migrationService.checkMigrationable(acc_name);

		if (
			response?.snapshot?.transfer_status === 'PENDING' ||
			response?.snapshot?.transfer_status === 'PARTIALLY_DONE'
		) {
			this.setState({migratable: true});
		} else {
			this.setState({migratable: false});
		}
	}

	async checkOldUser(acc_name) {
		const response = await migrationService.checkOldUser(acc_name);

		if (response?.found === true) {
			this.setState({oldUser: true});
		} else {
			this.setState({oldUser: false});
		}
	}

	showWithdrawModal() {
		this.setState({
			isWithdrawModalVisible: true,
			hasWithdrawalModalBeenShown: true,
		});
	}

	hideWithdrawModal() {
		this.setState({
			isWithdrawModalVisible: false,
		});
	}

	showDrawerMenu = () => {
		this.setState({drawerOpen: true});
	};

	hideDrawerMenu = () => {
		this.setState({drawerOpen: false});
	};

	UNSAFE_componentWillMount() {
		this.unlisten = this.props.history.listen((newState) => {
			if (this.unlisten && this.state.active !== newState.pathname) {
				this.setState({
					active: newState.pathname,
				});
			}
		});
	}

	componentDidMount() {
		setTimeout(() => {
			ReactTooltip.rebuild();
		}, 1250);

		document.body.addEventListener('click', this.onBodyClick, {
			capture: false,
			passive: true,
		});

		const accountName = ss.get('account_login_name', null);
		if (accountName && !this.props.locked_v2) {
			this.checkTransferableAccount(accountName);
			this.checkOldUser(accountName);
		}
	}

	componentWillUnmount() {
		if (this.unlisten) {
			this.unlisten();
			this.unlisten = null;
		}

		document.body.removeEventListener('click', this.onBodyClick);
	}

	UNSAFE_componentWillReceiveProps(np) {
		if (
			np.passwordLogin !== this.props.passwordLogin &&
			this.state.active.includes('/settings/')
		) {
			this.props.history.push('/settings/general');
		}

		const accountName = ss.get('account_login_name', null);
		if (
			(this.props.locked_v2 !== np.locked_v2 && !np.locked_v2) ||
			(this.props.location.pathname != np.location.pathname &&
				this.props.location.pathname === '/claimWallet')
		) {
			this.checkTransferableAccount(accountName);
			this.checkOldUser(accountName);
		}
	}

	showDepositModal() {
		this.setState({
			isDepositModalVisible: true,
		});
	}

	_showDeposit() {
		this.showDepositModal();
	}

	shouldComponentUpdate(nextProps, nextState) {
		return (
			nextProps.myActiveAccounts !== this.props.myActiveAccounts ||
			nextProps.currentAccount !== this.props.currentAccount ||
			nextProps.passwordLogin !== this.props.passwordLogin ||
			nextProps.locked !== this.props.locked ||
			nextProps.locked_v2 !== this.props.locked_v2 ||
			nextProps.current_wallet !== this.props.current_wallet ||
			nextProps.lastMarket !== this.props.lastMarket ||
			nextProps.starredAccounts !== this.props.starredAccounts ||
			nextProps.currentLocale !== this.props.currentLocale ||
			nextState.active !== this.state.active ||
			nextState.hiddenAssets !== this.props.hiddenAssets ||
			nextState.accountsListDropdownActive !==
				this.state.accountsListDropdownActive ||
			nextProps.height !== this.props.height ||
			nextProps.location.pathname !== this.props.location.pathname
		);
	}

	_showSend() {
		if (WalletDb.isLocked_v2()) {
			WalletUnlockActions.unlock_v2()
				.then(() => {
					if (this.send_modal) this.send_modal.show();
				})
				.catch(() => {});
		} else {
			if (this.send_modal) this.send_modal.show();
		}
	}

	_showWithdraw(e, fromMenu) {
		!fromMenu && e.preventDefault();
		this.showWithdrawModal();
	}
	hideDepositModal() {
		this.setState({
			isDepositModalVisible: false,
		});
	}

	_triggerMenu(e) {
		e.preventDefault();
		ZfApi.publish('mobile-menu', 'toggle');
	}

	_toggleLock(e, fromMenu) {
		!fromMenu && e.preventDefault();

		if (WalletDb.isLocked_v2()) {
			WalletUnlockActions.unlock_v2()
				.then(() => {})
				.catch(() => {});
		} else {
			WalletUnlockActions.lock_v2();
		}

		this._closeAccountNotifications();
	}

	_toggleTheme() {
		const currentTheme = SettingsStore.getState().settings.get('themes');

		SettingsActions.changeSetting({
			setting: 'themes',
			value: currentTheme === 'darkTheme' ? 'lightTheme' : 'darkTheme',
		});
	}

	_onNavigate(route, e, fromMenu, claimWalletFlag = false) {
		!fromMenu && e.preventDefault();

		// Set Accounts Tab as active tab
		if (route == '/accounts') {
			SettingsActions.changeViewSetting({
				dashboardEntry: 'accounts',
			});
		}
		if (claimWalletFlag) {
			this.props.history.push({
				pathname: route,
				state: {passwordAccount: this.props.passwordAccount},
			});
		} else {
			this.props.history.push(route);
		}
	}

	_closeAccountsListDropdown() {
		if (this.state.accountsListDropdownActive) {
			this.setState({
				accountsListDropdownActive: false,
			});
		}
	}

	_onGoBack(e) {
		e.preventDefault();
		window.history.back();
	}

	_onGoForward(e) {
		e.preventDefault();
		window.history.forward();
	}

	_accountClickHandler(account_name, e) {
		e.preventDefault();
		ZfApi.publish('account_drop_down', 'close');
		if (account_name !== this.props.currentAccount) {
			AccountActions.setCurrentAccount.defer(account_name);
			const key = `account-notification-${Date.now()}`;
			notification.success({
				message: counterpart.translate('header.account_notify', {
					account: account_name,
				}),
				key,
				onClose: () => {
					// Remove key of notification from notificationKeys array after close
					this._accountNotificationActiveKeys =
						this._accountNotificationActiveKeys.filter((el) => el !== key);
				},
			});

			this._accountNotificationActiveKeys.push(key);
		}
	}

	_toggleAccountDropdownMenu() {
		// prevent state toggling if user cannot have multiple accounts

		const hasLocalWallet = !!WalletDb.getWallet();

		if (!hasLocalWallet) return false;
		this._closeAccountNotifications();
		this.setState({
			accountsListDropdownActive: !this.state.accountsListDropdownActive,
		});
	}

	_closeAccountNotifications() {
		this._accountNotificationActiveKeys.map((key) => notification.close(key));
		this._accountNotificationActiveKeys = [];
	}

	onBodyClick(e) {
		let el = e.target;
		let insideAccountDropdown = false;

		do {
			if (el.classList && el.classList.contains('account-dropdown-wrapper')) {
				insideAccountDropdown = true;
				break;
			}
		} while ((el = el.parentNode));

		if (!insideAccountDropdown) this._closeAccountsListDropdown();
	}

	handleHeaderLink = (e) => {
		const {lastMarket, currentAccount} = this.props;
		const {key} = e;

		// Need refactor
		const accountName = ss.get('account_login_name', null);

		if (key === 'auth') {
			this._toggleLock(this, true);
		} else if (key === 'dashboard') {
			if (accountName || !isEmpty(currentAccount)) {
				this._onNavigate(
					`/account/${accountName || currentAccount}`,
					this,
					true
				);
			} else {
				this._onNavigate(`/learn`, this, true);
			}
		} else if (key === 'createAccount') {
			this._onNavigate('/registration/', this, true);
		} else if (key === 'market') {
			const tradeUrl = lastMarket
				? `/market/${lastMarket}`
				: '/market/META1_USDT';
			this._onNavigate(`${tradeUrl}`, this, true);
		} else if (key === 'explorer') {
			this._onNavigate('/explorer/blocks', this, true);
		} else if (key === 'get-help') {
			window.open('https://support.meta1coin.vision');
		} else if (key === 'withdraw') {
			if (!this.props.locked_v2) {
				this._showWithdraw(this, true);
			}
		} else if (key === 'claimWallet') {
			if (!this.props.locked_v2) {
				this._onNavigate('/claimWallet', this, true, true);
			}
		} else if (key === 'send') {
			if (!this.props.locked_v2) {
				this._showSend();
			}
		} else if (key === 'deposit') {
			if (!this.props.locked_v2) {
				this._showDeposit();
			}
		} else if (key === 'advanced-trezor') {
			window.open('https://beta-wallet.trezor.io/next/#/', '_blank');
		} else if (key === 'advanced-ledger-nano') {
			window.open('https://shop.ledger.com/pages/ledger-live', '_blank');
		} else if (key === 'advanced-signed-messages') {
			currentAccount &&
				this._onNavigate(
					`/account/${currentAccount}/signedmessages`,
					this,
					true
				);
		} else if (key === 'advanced-membership-stats') {
			currentAccount &&
				this._onNavigate(`/account/${currentAccount}/member-stats`, this, true);
		} else if (key === 'advanced-vesting-balance') {
			currentAccount &&
				this._onNavigate(`/account/${currentAccount}/vesting`, this, true);
		} else if (key === 'advanced-whitelist') {
			currentAccount &&
				this._onNavigate(`/account/${currentAccount}/whitelist`, this, true);
		} else if (key === 'advanced-permissions') {
			currentAccount &&
				this._onNavigate(`/account/${currentAccount}/permissions`, this, true);
		} else if (key === 'advanced-accounts') {
			this._onNavigate('/accounts', this, true);
		} else if (key === 'addContact') {
			this._onNavigate('/contact/add', this, true);
		}

		this.setState({headerMenu: key});
		if (this.state.drawerOpen === true) {
			this.setState({drawerOpen: false});
		}
	};

	render() {
		let {currentAccount, starredAccounts} = this.props;

		let tradingAccounts = AccountStore.getMyAccounts();

		const a = ChainStore.getAccount(currentAccount);
		const showAccountLinks = !!a;

		if (starredAccounts.size) {
			for (let i = tradingAccounts.length - 1; i >= 0; i--) {
				if (!starredAccounts.has(tradingAccounts[i])) {
					tradingAccounts.splice(i, 1);
				}
			}
			starredAccounts.forEach((account) => {
				if (tradingAccounts.indexOf(account.name) === -1) {
					tradingAccounts.push(account.name);
				}
			});
		}

		const avatarMenu = (
			<Menu
				onClick={this.handleHeaderLink}
				selectedKeys={[this.state.headerMenu]}
				className="header-menu"
				triggerSubMenuAction="click"
			>
				<Menu.Item key="auth" className="level-1">
					<Text>
						<Translate
							content={`header.${
								this.props.locked_v2 ? 'unlock_short' : 'lock_short'
							}`}
						/>
					</Text>
				</Menu.Item>
				<Menu.Item key="createAccount" className="level-2">
					<Text>
						<Translate content="header.create_account" />
					</Text>
				</Menu.Item>
				<Menu.Item key="addContact" className="level-2">
					<Translate content="header.add_contact" />
				</Menu.Item>
				{!this.props.locked_v2 &&
					this.state.migratable &&
					this.state.oldUser && (
						<Menu.Item key="claimWallet">
							<Translate content="header.claim_legacy_wallet" />
						</Menu.Item>
					)}
				<Menu.Item
					key="send"
					style={this.props.locked_v2 ? {cursor: 'not-allowed'} : {}}
					className={this.props.locked_v2 ? 'disable-li-text' : ''}
				>
					<Translate content="transfer.send" />
				</Menu.Item>
				<Menu.Item
					key="withdraw"
					style={this.props.locked_v2 ? {cursor: 'not-allowed'} : {}}
					className={this.props.locked_v2 ? 'disable-li-text' : ''}
				>
					<Translate content="header.withdraw" />
				</Menu.Item>
				<Menu.Item
					key="deposit"
					style={this.props.locked_v2 ? {cursor: 'not-allowed'} : {}}
					className={this.props.locked_v2 ? 'disable-li-text' : ''}
				>
					<Translate content="exchange.deposit" />
				</Menu.Item>
				<Menu.SubMenu
					key="submenu"
					popupClassName="advanced-submenu"
					title={<Translate content="account.advanced" />}
					disabled={!currentAccount}
					popupOffset={[0, 0]}
				>
					<Menu.Item
						key="comment-menu"
						className="comment none"
						style={{width: window.innerWidth}}
					>
						<Text>
							/* No hardware wallet support at this time, remove to reduce
							questions */
						</Text>
					</Menu.Item>
					<Menu.Item
						key="comment-no-hardware-wallet-support"
						className="comment none"
					>
						<Text>
							/* End no hardware wallet support at this time, remove to reduce
							questions */
						</Text>
					</Menu.Item>
					<Menu.Item key="advanced-signed-messages">
						<Translate content="account.signedmessages.title" />
					</Menu.Item>

					<Menu.Item key="advanced-membership-stats">
						<Translate content="account.member.stats" />
					</Menu.Item>

					<Menu.Item key="advanced-vesting-balance">
						<Translate content="account.vesting.title" />
					</Menu.Item>
					<Menu.Item key="advanced-whitelist">
						<Translate content="account.whitelist.title" />
					</Menu.Item>
					<Menu.Item key="advanced-permissions">
						<Translate content="account.permissions" />
					</Menu.Item>
					<Menu.Item key="advanced-accounts">
						<Translate content="account.accounts" />
					</Menu.Item>
				</Menu.SubMenu>
			</Menu>
		);

		const renderMenu = (mode) => (
			<Menu
				mode={mode}
				onClick={this.handleHeaderLink}
				selectedKeys={[this.props.currentLink]}
			>
				<Menu.Item key="dashboard">
					<Translate component="span" content="header.dashboard" />
				</Menu.Item>
				<Menu.Item key="market">
					<Translate component="span" content="header.exchange" />
				</Menu.Item>
				<Menu.Item key="explorer">
					<Translate component="span" content="header.explorer" />
				</Menu.Item>
				<Menu.Item key="explorer2">
					<Link
						to={{pathname: process.env.EXPLORER_META1_URL}}
						target="_blank"
						style={{color: this.props.theme.mode === 'dark' ? '#fff' : '#000'}}
					>
						<Translate component="span" content="header.explorer2" />
					</Link>
				</Menu.Item>
			</Menu>
		);

		const menuDrawer = (
			<Drawer
				title="Menu"
				placement="right"
				closable={true}
				onClose={this.hideDrawerMenu}
				open={this.state.drawerOpen}
				key="right"
			>
				{renderMenu('vertical')}
			</Drawer>
		);

		const {headerMenu} = this.state;

		const horizontalDivider = (
			<div
				css={(theme) => ({
					width: '1px',
					background: theme.colors.borderColor,
					marginLeft: '10px',
					marginRight: '10px',
					height: '40px',
				})}
			/>
		);

		return (
			<>
				<AntdHeader>
					<Row
						css={{width: '100%'}}
						justify="space-between"
						type="flex"
						align="middle"
					>
						<Col xs={12} sm={12} md={10} lg={12}>
							<Row align={'middle'}>
								<div
									style={{
										width: '1.5rem',
										height: '1.5rem',
										cursor: 'pointer',
										alignSelf: 'center',
										marginTop: '0.5rem',
										marginRight: '0.5rem',
									}}
									onClick={this.showDrawerMenu}
									css={(theme) => ({
										[`@media (min-width: 794px)`]: {
											display: 'none',
										},
									})}
								>
									<img src={hamburger} alt="menu" />
								</div>
								<Col lg={5} className="logo-wrapper">
									<a
										href="/home"
										onClick={this._onNavigate.bind(this, '/home/')}
									>
										<img style={{height: 35}} src={logo} />
									</a>
								</Col>
								<Col
									xs={17}
									sm={19}
									md={17}
									lg={19}
									css={(theme) => ({
										[`@media (max-width: ${theme.sizes.md})`]: {
											display: 'none',
										},
									})}
								>
									{renderMenu('horizontal')}
								</Col>
								{menuDrawer}
							</Row>
						</Col>

						<Col xs={12} sm={12} md={14} lg={12}>
							<div
								css={{
									display: 'flex',
									justifyContent: 'flex-end',
									alignItems: 'center',
								}}
							>
								<Text
									css={(theme) => ({
										color:
											headerMenu === 'help'
												? theme.colors.primaryColor
												: theme.colors.white,
										cursor: 'pointer',
										[`@media (min-width: ${theme.sizes.md})`]: {
											marginRight: '15px',
										},
									})}
									onClick={() => this.handleHeaderLink({key: 'get-help'})}
								>
									<QuestionCircleOutlined
										css={(theme) => ({
											color: theme.colors.themeOpositeColor,
											marginRight: '10px',
											[`@media (max-width: ${theme.sizes.md})`]: {
												color: theme.colors.primaryColor,
												marginRight: 0,
												svg: {
													width: '30px',
													height: '30px',
												},
											},
										})}
									/>
									<span
										css={(theme) => ({
											color: theme.colors.themeOpositeColor,
											[`@media (max-width: ${theme.sizes.md})`]: {
												display: 'none',
											},
										})}
									>
										<Translate content="header.get_help" />
									</span>
								</Text>
								<div
									css={(theme) => ({
										[`@media (max-width: ${theme.sizes.md})`]: {
											display: 'none',
										},
									})}
								>
									<StyledButton
										buttonType="primary"
										disabled={!showAccountLinks}
										style={{marginRight: '15px'}}
										onClick={() =>
											this.props.history.push('/market/META1_USDT')
										}
									>
										<Translate content="exchange.buy" /> /{' '}
										<Translate content="exchange.sell" />
									</StyledButton>
								</div>

								<div
									css={(theme) => ({
										[`@media (max-width: ${theme.sizes.md})`]: {
											display: 'none',
										},
									})}
								>
									<StyledButton
										buttonType="transparent"
										onClick={this._showSend.bind(this)}
									>
										<Translate content="transfer.send" /> /{' '}
										<Translate content="exchange.receive" />
									</StyledButton>
								</div>
								<div css={{marginRight: '10px', display: 'none'}}>
									{this.props.currentAccount == null ? null : (
										<span
											onClick={this._toggleLock.bind(this)}
											style={{cursor: 'pointer'}}
										>
											<Icon
												className="lock-unlock"
												size="2x"
												name={this.props.locked ? 'locked' : 'unlocked'}
												title={
													this.props.locked
														? 'icons.locked.common'
														: 'icons.unlocked.common'
												}
											/>
										</span>
									)}
								</div>
								{horizontalDivider}
								<Dropdown overlay={avatarMenu} trigger="click">
									<span
										style={{
											display: 'flex',
											alignItems: 'center',
											cursor: 'pointer',
										}}
									>
										<Icon
											className="lock-unlock"
											size="2x"
											name="avatar"
											title="icons.avatar.common"
										/>
										<CaretDownOutlined
											css={(theme) => ({
												color: theme.colors.themeOpositeColor,
												fontSize: '11px',
												opacity: '50%',
												marginLeft: '0.5rem',
											})}
										/>
									</span>
								</Dropdown>
								{horizontalDivider}
								<div
									style={{
										width: '1.5rem',
										height: '1.5rem',
										cursor: 'pointer',
									}}
									onClick={this._toggleTheme}
								>
									<img
										src={this.props.theme.mode === 'dark' ? sun : moon}
										alt={
											this.props.theme.mode === 'dark'
												? 'light theme'
												: 'dark theme'
										}
									/>
								</div>
							</div>
						</Col>
					</Row>

					<SendModal
						id="send_modal_header"
						refCallback={(e) => {
							if (e) this.send_modal = e;
						}}
						from_name={currentAccount}
					/>
					{this.state.hasWithdrawalModalBeenShown && (
						<WithdrawModal
							visible={this.state.isWithdrawModalVisible}
							hideModal={this.hideWithdrawModal}
							showModal={this.showWithdrawModal}
							ref="withdraw_modal_new"
							modalId="withdraw_modal_new"
							backedCoins={this.props.backedCoins}
						/>
					)}
					<DepositModal
						visibleMeta={this.state.isDepositModalVisible}
						hideModalMeta={this.hideDepositModal}
						showModalMeta={this.showDepositModal}
						ref="deposit_modal_new11"
						modalId="deposit_modal_new11"
						account={currentAccount}
					/>
				</AntdHeader>
			</>
		);
	}
}

Header = connect(Header, {
	listenTo() {
		return [
			AccountStore,
			WalletUnlockStore,
			WalletManagerStore,
			SettingsStore,
			GatewayStore,
		];
	},
	getProps() {
		const chainID = Apis.instance().chain_id;
		return {
			backedCoins: GatewayStore.getState().backedCoins,
			myActiveAccounts: AccountStore.getState().myActiveAccounts,
			currentAccount:
				AccountStore.getState().currentAccount ||
				AccountStore.getState().passwordAccount ||
				ss.get('account_login_name', ''),
			passwordAccount: AccountStore.getState().passwordAccount,
			locked: WalletUnlockStore.getState().locked,
			locked_v2: WalletUnlockStore.getState().locked_v2,
			current_wallet: WalletManagerStore.getState().current_wallet,
			lastMarket: SettingsStore.getState().viewSettings.get(
				`lastMarket${chainID ? '_' + chainID.substr(0, 8) : ''}`
			),
			starredAccounts: AccountStore.getState().starredAccounts,
			passwordLogin: SettingsStore.getState().settings.get('passwordLogin'),
			currentLocale: SettingsStore.getState().settings.get('locale'),
			hiddenAssets: SettingsStore.getState().hiddenAssets,
			settings: SettingsStore.getState().settings,
			locales: SettingsStore.getState().defaults.locale,
			contacts: AccountStore.getState().accountContacts,
		};
	},
});

export default withRouter(withTheme(Header));
