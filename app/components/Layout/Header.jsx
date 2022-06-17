import React from 'react';
import {connect} from 'alt-react';
import {
	CaretDownOutlined,
	ConsoleSqlOutlined,
	QuestionCircleOutlined,
	UserOutlined,
} from '@ant-design/icons';
import {
	Layout,
	Menu,
	Row,
	Col,
	Dropdown,
	Typography,
	Avatar,
	notification,
} from 'antd';
import AccountActions from 'actions/AccountActions';
import AccountStore from 'stores/AccountStore';
import SettingsStore from 'stores/SettingsStore';
import GatewayStore from 'stores/GatewayStore';
import SettingsActions from 'actions/SettingsActions';
import ZfApi from 'react-foundation-apps/src/utils/foundation-api';
import SendModal from '../Modal/SendModal';
import WithdrawModal from '../Modal/WithdrawModalNew';
import DepositModal from '../Modal/DepositModal';
import Icon from '../Icon/Icon';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import WalletDb from 'stores/WalletDb';
import WalletUnlockStore from 'stores/WalletUnlockStore';
import WalletUnlockActions from 'actions/WalletUnlockActions';
import WalletManagerStore from 'stores/WalletManagerStore';
import cnames from 'classnames';
import TotalBalanceValue from '../Utility/TotalBalanceValue';
import ReactTooltip from 'react-tooltip';
import {Apis} from 'meta1js-ws';
import AccountImage from '../Account/AccountImage';
import {ChainStore} from 'meta1js';
import {List} from 'immutable';
import {withRouter} from 'react-router-dom';
import AccountBrowsingMode from '../Account/AccountBrowsingMode';
import {setLocalStorageType, isPersistantType} from 'lib/common/localStorage';
import chainIds from 'chain/chainIds';

import {getLogo} from 'branding';
import StyledButton from 'components/Button/Button';
import theme from 'lib/styles/themeDark';

var logo = getLogo();
const CHAINID_SHORT = chainIds[process.env.CURRENT_NET].substr(0, 8);

const {Header: AntdHeader} = Layout;
const {Text} = Typography;
class Header extends React.Component {
	constructor(props) {
		super();
		this.state = {
			active: props.location.pathname,
			accountsListDropdownActive: false,
			isDepositModalVisible: false,
			isWithdrawModalVisible: false,
			hasWithdrawalModalBeenShown: false,
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

	componentWillMount() {
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
	}

	componentWillUnmount() {
		if (this.unlisten) {
			this.unlisten();
			this.unlisten = null;
		}

		document.body.removeEventListener('click', this.onBodyClick);
	}

	componentWillReceiveProps(np) {
		if (
			np.passwordLogin !== this.props.passwordLogin &&
			this.state.active.includes('/settings/')
		) {
			this.props.history.push('/settings/general');
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
		if (this.send_modal) this.send_modal.show();
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
		if (WalletDb.isLocked()) {
			WalletUnlockActions.unlock()
				.then(() => {
					AccountActions.tryToSetCurrentAccount();
				})
				.catch(() => {});
		} else {
			WalletUnlockActions.lock();
			if (!WalletUnlockStore.getState().rememberMe) {
				if (!isPersistantType()) {
					setLocalStorageType('persistant');
				}
				AccountActions.setPasswordAccount(null);
				AccountStore.tryToSetCurrentAccount();
			}
		}

		this._closeAccountNotifications();
	}

	_onNavigate(route, e, fromMenu) {
		!fromMenu && e.preventDefault();

		// Set Accounts Tab as active tab
		if (route == '/accounts') {
			SettingsActions.changeViewSetting({
				dashboardEntry: 'accounts',
			});
		}
		this.props.history.push(route);
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
		let insideMenuDropdown = false;
		let insideAccountDropdown = false;

		do {
			if (el.classList && el.classList.contains('account-dropdown-wrapper')) {
				insideAccountDropdown = true;
				break;
			}

			if (el.classList && el.classList.contains('menu-dropdown-wrapper')) {
				insideMenuDropdown = true;
				break;
			}
		} while ((el = el.parentNode));

		if (!insideAccountDropdown) this._closeAccountsListDropdown();
	}

	handleRefresh = () => {
		// by calling this method react re-renders the component
		console.log('handle refresh');
		this.setState({});
	};

	handleHeaderLink = (e) => {
		const {lastMarket, currentAccount, passwordLogin} = this.props;
		const {key} = e;
		let isLogged = false;

		if (key === 'auth') {
			//this._toggleLock(this, true);
			// DEBUG only
			/*
			console.log("current user:" + currentAccount);
			console.log("password login:" + passwordLogin);
			console.log("1 isLogged:" + isLogged);
			*/

			if (currentAccount && passwordLogin && !isLogged) {
				this._toggleLock(this, true);
				isLogged = true;
				//console.log("2 isLogged:" + isLogged);
				this._onNavigate(`/account/${currentAccount}`, this, true);
			} else {
				this._toggleLock(this, true);
				isLogged = false;
				//console.log("3 isLogged:" + isLogged);
				this._onNavigate('/account/null', this, true);
			}
			this._toggleLock(this, true);
			//
			// note: consider changing default redirection to /account, not previous user when logout
			// but, this depends on Remember Me logic, too
			//
		} else if (key === 'dashboard') {
			this._onNavigate(`/account/${currentAccount}`, this, true);
		} else if (key === 'createAccount') {
			this._onNavigate('/registration/', this, true);
		} else if (key === 'market') {
			const tradeUrl = lastMarket
				? `/market/${lastMarket}`
				: '/market/META1_USDT';
			this._onNavigate(`${tradeUrl}`, this, true);
		} else if (key === 'explorer') {
			this._onNavigate('/explorer/blocks', this, true);
		} else if (key === 'help') {
			this._onNavigate('/help', this, true);
		} else if (key === 'withdraw') {
			this._showWithdraw(this, true);
		} else if (key === 'send') {
			this._showSend();
		} else if (key === 'deposit') {
			this._showDeposit();
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
		}

		this.setState({headerMenu: key});
	};

	render() {
		let {active} = this.state;
		let {
			currentAccount,
			starredAccounts,
			passwordLogin,
			passwordAccount,
			height,
		} = this.props;

		let tradingAccounts = AccountStore.getMyAccounts();
		let maxHeight = Math.max(40, height - 67 - 36) + 'px';

		const a = ChainStore.getAccount(currentAccount);
		const showAccountLinks = !!a;
		const isMyAccount = !a
			? false
			: AccountStore.isMyAccount(a) ||
			  (passwordLogin && currentAccount === passwordAccount);
		const enableDepositWithdraw =
			!!a &&
			Apis.instance() &&
			Apis.instance().chain_id &&
			Apis.instance().chain_id.substr(0, 8) === CHAINID_SHORT;

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

		let myAccounts = AccountStore.getMyAccounts();
		let myAccountCount = myAccounts.length;

		let walletBalance =
			myAccounts.length && this.props.currentAccount ? (
				<div className="total-value" onClick={this._toggleAccountDropdownMenu}>
					<TotalBalanceValue.AccountWrapper
						hiddenAssets={this.props.hiddenAssets}
						accounts={List([this.props.currentAccount])}
						noTip
						style={{minHeight: 15}}
					/>
				</div>
			) : null;

		let createAccountLink = myAccountCount === 0 ? true : null;

		// let lock_unlock = ((!!this.props.current_wallet) || passwordLogin) ? (
		//     <div className="grp-menu-item" >
		//     { this.props.locked ?
		//         <a style={{padding: "1rem"}} href onClick={this._toggleLock.bind(this)} data-class="unlock-tooltip" data-offset="{'left': 50}" data-tip={locked_tip} data-place="bottom" data-html><Icon className="icon-14px" name="locked" title="icons.locked.common" /></a>
		//         : <a style={{padding: "1rem"}} href onClick={this._toggleLock.bind(this)} data-class="unlock-tooltip" data-offset="{'left': 50}" data-tip={unlocked_tip} data-place="bottom" data-html><Icon className="icon-14px" name="unlocked" title="icons.unlocked.common" /></a> }
		//     </div>
		// ) : null;

		let tradeUrl = this.props.lastMarket
			? `/market/${this.props.lastMarket}`
			: '/market/META1_USDT';

		// Account selector: Only active inside the exchange
		let account_display_name, accountsList;
		if (currentAccount) {
			account_display_name =
				currentAccount.length > 20
					? `${currentAccount.slice(0, 20)}..`
					: currentAccount;
			if (tradingAccounts.indexOf(currentAccount) < 0 && isMyAccount) {
				tradingAccounts.push(currentAccount);
			}
			if (tradingAccounts.length >= 1) {
				accountsList = tradingAccounts
					.sort()
					.filter((name) => name !== currentAccount)
					.map((name) => {
						return (
							<li
								key={name}
								className={cnames({
									active: active.replace('/account/', '').indexOf(name) === 0,
								})}
								onClick={this._accountClickHandler.bind(this, name)}
							>
								<div style={{paddingTop: 0}} className="table-cell">
									<AccountImage
										style={{position: 'relative', top: 4}}
										size={{height: 20, width: 20}}
										account={name}
									/>
								</div>
								<div className="table-cell" style={{paddingLeft: 10}}>
									<a
										className={
											'text lower-case' +
											(name === account_display_name ? ' current-account' : '')
										}
									>
										{name}
									</a>
								</div>
							</li>
						);
					});
			}
		}

		const avatarMenu = (
			<Menu
				onClick={this.handleHeaderLink}
				selectedKeys={[this.state.headerMenu]}
				className="header-menu"
			>
				<Menu.Item key="auth" className="level-1">
					<Text>
						<Translate
							content={`header.${
								this.props.locked ? 'unlock_short' : 'lock_short'
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
					<Text>Add Contact</Text>
				</Menu.Item>
				<Menu.Item key="send">
					<Text>Send</Text>
				</Menu.Item>
				<Menu.Item
					key="buySell"
					css={(theme) => ({
						[`@media (min-width: ${theme.sizes.lg})`]: {
							display: 'none',
						},
					})}
				>
					<Text>Buy / Sell</Text>
				</Menu.Item>
				<Menu.Item
					key="sendReceive"
					css={(theme) => ({
						[`@media (min-width: ${theme.sizes.lg})`]: {
							display: 'none',
						},
					})}
				>
					<Text>Send / Receive</Text>
				</Menu.Item>
				<Menu.Item key="withdraw">
					<Text>Withdraw</Text>
				</Menu.Item>
				<Menu.Item key="deposit">
					<Text>Deposit</Text>
				</Menu.Item>
				<Menu.SubMenu
					key="submenu"
					popupClassName="advanced-submenu"
					title={<Text>Advanced</Text>}
					disabled={!currentAccount}
				>
					<Menu.Item key="comment-menu" className="comment">
						<Text>
							/* No hardware wallet support at this time, remove to reduce
							questions */
						</Text>
					</Menu.Item>
					<Menu.Item key="advanced-trezor">
						<Text>Connect with Trezor</Text>
					</Menu.Item>
					<Menu.Item key="advanced-ledger-nano">
						<Text>Connect with Ledger Nano</Text>
					</Menu.Item>
					<Menu.Item
						key="comment-no-hardware-wallet-support"
						className="comment"
					>
						<Text>
							/* End no hardware wallet support at this time, remove to reduce
							questions */
						</Text>
					</Menu.Item>
					<Menu.Item key="advanced-signed-messages">
						<Text>Signed Messages</Text>
					</Menu.Item>

					{/* <Menu.Item key="advanced-membership-stats">
						<Text>Membership Stats</Text>
					</Menu.Item> */}

					<Menu.Item key="advanced-vesting-balance">
						<Text>Vesting Balance</Text>
					</Menu.Item>
					<Menu.Item key="advanced-whitelist">
						<Text>Whitelist</Text>
					</Menu.Item>
					<Menu.Item key="advanced-permissions">
						<Text>Permissions</Text>
					</Menu.Item>
					<Menu.Item key="advanced-accounts">
						<Text>Accounts</Text>
					</Menu.Item>
				</Menu.SubMenu>
			</Menu>
		);

		const {headerMenu} = this.state;
		return (
			<>
				<AntdHeader>
					<Row
						css={{width: '100%'}}
						justify="space-between"
						type="flex"
						align="middle"
					>
						<Col xs={20} sm={12}>
							<Row>
								<Col xs={6} sm={5} className="logo-wrapper">
									<a
										href="/home"
										onClick={this._onNavigate.bind(this, '/home/')}
									>
										<img style={{height: 35}} src={logo} />
									</a>
								</Col>
								<Col xs={17} sm={19}>
									<Menu
										mode="horizontal"
										onClick={this.handleHeaderLink}
										selectedKeys={[this.props.currentLink]}
									>
										{passwordLogin && passwordAccount && (
											<Menu.Item key="dashboard">Dashboard</Menu.Item>
										)}

										<Menu.Item key="market">
											<Translate component="span" content="header.exchange" />
										</Menu.Item>
										<Menu.Item key="explorer">
											<Translate component="span" content="header.explorer" />
										</Menu.Item>
									</Menu>
								</Col>
							</Row>
						</Col>

						<Col xs={4} sm={12}>
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
										marginRight: '15px',
										cursor: 'pointer',
										[`@media (max-width: ${theme.sizes.lg})`]: {
											display: 'none',
										},
									})}
									onClick={() => this.handleHeaderLink({key: 'help'})}
								>
									<QuestionCircleOutlined
										css={{color: theme.colors.white, marginRight: '10px'}}
									/>
									Get help
								</Text>
								<div css={{marginRight: '15px'}}>
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
								{/* <div
									css={(theme) => ({
										[`@media (max-width: ${theme.sizes.lg})`]: {
											display: 'none',
										},
									})}
								>
									<StyledButton
										buttonType="primary"
										disabled={!showAccountLinks}
										style={{marginRight: '15px'}}
									>
										Buy / Sell
									</StyledButton>
								</div>

								<div
									css={(theme) => ({
										[`@media (max-width: ${theme.sizes.lg})`]: {
											display: 'none',
										},
									})}
								>
									<StyledButton
										buttonType="transparent"
										style={{marginRight: '10px'}}
									>
										Send / Receive
									</StyledButton>
								</div> */}

								<Dropdown overlay={avatarMenu}>
									<span>
										<Avatar
											css={{
												'&& .ant-avatar': {
													backgroundColor: theme.colors.primaryColor,
													cursor: 'pointer',
												},
											}}
											src="https://cdn.vectorstock.com/i/1000x1000/19/45/user-avatar-icon-sign-symbol-vector-4001945.webp"
										/>
										<CaretDownOutlined
											style={{
												color: '#fff',
												fontSize: '11px',
												cursor: 'pointer',
												opacity: '50%',
												marginLeft: '0.5rem',
											}}
										/>
									</span>
								</Dropdown>
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
				AccountStore.getState().passwordAccount,
			passwordAccount: AccountStore.getState().passwordAccount,
			locked: WalletUnlockStore.getState().locked,
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

export default withRouter(Header);
