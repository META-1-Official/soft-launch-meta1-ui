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
import DepositModalBtc from '../Modal/DepositModalBtc';
import DepositModalEth from '../Modal/DepositModalEth';
import DepositModalUsdt from '../Modal/DepositModalUsdt';
// import DepositModalEos from "../Modal/DepositModalEos";
// import DepositModalXlm from "../Modal/DepositModalXlm";
// import DepositModalBnb from "../Modal/DepositModalBnb";
import DepositModalLtc from '../Modal/DepositModalLtc';
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
const MAIN_NET_CHAINID_SHORT = chainIds.MAIN_NET.substr(0, 8);

const {Header: AntdHeader} = Layout;
const {Text} = Typography;
class Header extends React.Component {
	constructor(props) {
		super();
		this.state = {
			active: props.location.pathname,
			accountsListDropdownActive: false,
			dropdownActive: false,
			dropdownSubmenuActive: false,
			dropdownSubmenuActiveAdvanced: false,
			dropdownSubmenuActiveDeposit: false,
			isDepositModalVisible: false,
			hasDepositModalBeenShown: false,
			isDepositModalVisibleBtc: false,
			isWithdrawModalVisible: false,
			hasWithdrawalModalBeenShown: false,
		};

		console.log('PROPS', this.props);
		this._accountNotificationActiveKeys = [];
		this.unlisten = null;
		this._toggleAccountDropdownMenu =
			this._toggleAccountDropdownMenu.bind(this);
		this._toggleDropdownMenu = this._toggleDropdownMenu.bind(this);
		this._closeDropdown = this._closeDropdown.bind(this);
		this._closeDropdownSubmenu = this._closeDropdownSubmenu.bind(this);
		this._closeDropdownSubmenuAdvanced =
			this._closeDropdownSubmenuAdvanced.bind(this);
		this._closeDropdownSubmenuDeposit =
			this._closeDropdownSubmenuDeposit.bind(this);
		this._toggleDropdownSubmenu = this._toggleDropdownSubmenu.bind(this);
		this._toggleDropdownSubmenuAdvanced =
			this._toggleDropdownSubmenuAdvanced.bind(this);
		this._toggleDropdownSubmenuDeposit =
			this._toggleDropdownSubmenuDeposit.bind(this);
		this._closeMenuDropdown = this._closeMenuDropdown.bind(this);
		this._closeAccountsListDropdown =
			this._closeAccountsListDropdown.bind(this);
		this._closeAccountNotifications =
			this._closeAccountNotifications.bind(this);

		this.showDepositModalBtc = this.showDepositModalBtc.bind(this);
		this.hideDepositModalBtc = this.hideDepositModalBtc.bind(this);

		this.showDepositModalEth = this.showDepositModalEth.bind(this);
		this.hideDepositModalEth = this.hideDepositModalEth.bind(this);

		this.showDepositModalUsdt = this.showDepositModalUsdt.bind(this);
		this.hideDepositModalUsdt = this.hideDepositModalUsdt.bind(this);

		// this.showDepositModalEos = this.showDepositModalEos.bind(this);
		// this.hideDepositModalEos = this.hideDepositModalEos.bind(this);

		// this.showDepositModalXlm = this.showDepositModalXlm.bind(this);
		// this.hideDepositModalXlm = this.hideDepositModalXlm.bind(this);

		// this.showDepositModalBnb = this.showDepositModalBnb.bind(this);
		// this.hideDepositModalBnb = this.hideDepositModalBnb.bind(this);

		this.showDepositModalLtc = this.showDepositModalLtc.bind(this);
		this.hideDepositModalLtc = this.hideDepositModalLtc.bind(this);

		this.showDepositModal = this.showDepositModal.bind(this);
		this.hideDepositModal = this.hideDepositModal.bind(this);

		this.showWithdrawModal = this.showWithdrawModal.bind(this);
		this.hideWithdrawModal = this.hideWithdrawModal.bind(this);

		this.onBodyClick = this.onBodyClick.bind(this);
	}

	showDepositModal() {
		this.setState({
			isDepositModalVisible: true,
			hasDepositModalBeenShown: true,
		});
	}

	hideDepositModal() {
		this.setState({
			isDepositModalVisible: false,
		});
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
	showDepositModalBtc() {
		this.setState({
			isDepositModalVisibleBtc: true,
		});
	}

	showDepositModalEth() {
		this.setState({
			isDepositModalVisibleEth: true,
		});
	}

	showDepositModalUsdt() {
		this.setState({
			isDepositModalVisibleUsdt: true,
		});
	}

	showDepositModalEos() {
		this.setState({
			isDepositModalVisibleEos: true,
		});
	}

	showDepositModalBnb() {
		this.setState({
			isDepositModalVisibleBnb: true,
		});
	}

	showDepositModalXlm() {
		this.setState({
			isDepositModalVisibleXlm: true,
		});
	}

	showDepositModalLtc() {
		this.setState({
			isDepositModalVisibleLtc: true,
		});
	}

	_showDepositBtc(e) {
		e.preventDefault();
		this.showDepositModalBtc();
		this._closeDropdown();
	}

	_showDepositEth(e) {
		e.preventDefault();
		this.showDepositModalEth();
		this._closeDropdown();
	}

	_showDepositUsdt(e) {
		e.preventDefault();
		this.showDepositModalUsdt();
		this._closeDropdown();
	}

	_showDepositEos(e) {
		e.preventDefault();
		this.showDepositModalEos();
		this._closeDropdown();
	}

	_showDepositBnb(e) {
		e.preventDefault();
		this.showDepositModalBnb();
		this._closeDropdown();
	}

	_showDepositXlm(e) {
		e.preventDefault();
		this.showDepositModalXlm();
		this._closeDropdown();
	}

	_showDepositLtc(e) {
		e.preventDefault();
		this.showDepositModalLtc();
		this._closeDropdown();
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
			nextState.dropdownActive !== this.state.dropdownActive ||
			nextState.dropdownSubmenuActive !== this.state.dropdownSubmenuActive ||
			nextState.dropdownSubmenuActiveAdvanced !==
				this.state.dropdownSubmenuActiveAdvanced ||
			nextState.dropdownSubmenuActiveDeposit !==
				this.state.dropdownSubmenuActiveDeposit ||
			nextState.accountsListDropdownActive !==
				this.state.accountsListDropdownActive ||
			nextProps.height !== this.props.height ||
			nextProps.location.pathname !== this.props.location.pathname
		);
	}

	_showSend(e) {
		e.preventDefault();
		if (this.send_modal) this.send_modal.show();
		this._closeDropdown();
	}

	hideDepositModalBtc() {
		this.setState({
			isDepositModalVisibleBtc: false,
		});
	}

	hideDepositModalEth() {
		this.setState({
			isDepositModalVisibleEth: false,
		});
	}
	_showWithdraw(e, fromMenu) {
		!fromMenu && e.preventDefault();
		this._closeDropdown();
		this.showWithdrawModal();
	}

	hideDepositModalUsdt() {
		this.setState({
			isDepositModalVisibleUsdt: false,
		});
	}

	hideDepositModalEos() {
		this.setState({
			isDepositModalVisibleEos: false,
		});
	}

	hideDepositModalBnb() {
		this.setState({
			isDepositModalVisibleBnb: false,
		});
	}

	hideDepositModalXlm() {
		this.setState({
			isDepositModalVisibleXlm: false,
		});
	}

	hideDepositModalLtc() {
		this.setState({
			isDepositModalVisibleLtc: false,
		});
	}

	_showDeposit(e) {
		e.preventDefault();
		this.showDepositModal();
		this._closeDropdown();
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
		this._closeDropdown();
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
		this._closeDropdown();
	}

	_closeAccountsListDropdown() {
		if (this.state.accountsListDropdownActive) {
			this.setState({
				accountsListDropdownActive: false,
			});
		}
	}

	_closeMenuDropdown() {
		if (this.state.dropdownActive) {
			this.setState({
				dropdownActive: false,
			});
		}
	}

	_closeDropdownSubmenu() {
		if (this.state.dropdownSubmenuActive) {
			this.setState({
				dropdownSubmenuActive: false,
			});
		}
	}

	_closeDropdownSubmenuAdvanced() {
		if (this.state.dropdownSubmenuActiveAdvanced) {
			this.setState({
				dropdownSubmenuActiveAdvanced: false,
			});
		}
	}

	_closeDropdownSubmenuDeposit() {
		if (this.state.dropdownSubmenuActiveDeposit) {
			this.setState({
				dropdownSubmenuActiveDeposit: false,
			});
		}
	}

	_closeDropdown() {
		this._closeMenuDropdown();
		this._closeAccountsListDropdown();
		this._closeDropdownSubmenu();
		this._closeDropdownSubmenuAdvanced();
		this._closeDropdownSubmenuDeposit();
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

			this._closeDropdown();
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

	_toggleDropdownSubmenu(item = this.state.dropdownSubmenuActiveItem, e) {
		if (e) e.stopPropagation();

		this.setState({
			dropdownSubmenuActive: !this.state.dropdownSubmenuActive,
			dropdownSubmenuActiveItem: item,
		});
	}

	_toggleDropdownSubmenuDeposit(
		item = this.state.dropdownSubmenuActiveItemDeposit,
		e
	) {
		if (e) e.stopPropagation();

		this.setState({
			dropdownSubmenuActiveDeposit: !this.state.dropdownSubmenuActiveDeposit,
			dropdownSubmenuActiveItemDeposit: item,
		});
	}

	_toggleDropdownSubmenuAdvanced(
		item = this.state.dropdownSubmenuActiveItemAdvanced,
		e
	) {
		if (e) e.stopPropagation();

		this.setState({
			dropdownSubmenuActiveAdvanced: !this.state.dropdownSubmenuActiveAdvanced,
			dropdownSubmenuActiveItemAdvanced: item,
		});
	}

	_toggleDropdownMenu() {
		console.log('^^^ clicked');
		this.setState({
			dropdownActive: !this.state.dropdownActive,
		});
		this._closeAccountNotifications();
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
		if (!insideMenuDropdown) {
			this._closeMenuDropdown();
			this._closeDropdownSubmenu();
			this._closeDropdownSubmenuAdvanced();
			this._closeDropdownSubmenuDeposit();
		}
	}

	handleHeaderLink = (e) => {
		const {lastMarket, currentAccount} = this.props;
		const {key} = e;
		if (key === 'auth') {
			this._toggleLock(this, true);
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
		}
		this.setState({
			headerMenu: key,
		});
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
			Apis.instance().chain_id.substr(0, 8) === MAIN_NET_CHAINID_SHORT;

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
				css={(theme) => ({
					width: 245,
					padding: 0,
				})}
			>
				<Menu.Item
					key="auth"
					css={(theme) => ({
						background: '#21252F',
						paddingTop: '10px',
						paddingBottom: '10px',
					})}
				>
					<Text style={{color: '#FFC000', fontSize: '15px'}}>
						<Translate
							content={`header.${
								this.props.locked ? 'unlock_short' : 'lock_short'
							}`}
						/>
					</Text>
				</Menu.Item>
				<Menu.Item
					key="createAccount"
					css={(theme) => ({
						background: '#282D3A',
						paddingTop: '10px',
						paddingBottom: '10px',
					})}
				>
					<Text style={{color: '#FFFFFF', fontSize: '15px'}}>
						<Translate content="header.create_account" />
					</Text>
				</Menu.Item>
				<Menu.Item
					key="addContact"
					css={(theme) => ({
						background: '#282D3A',
						paddingTop: '10px',
						paddingBottom: '10px',
					})}
				>
					<Text style={{color: '#FFFFFF', fontSize: '15px'}}>Add Contact</Text>
				</Menu.Item>
				<Menu.Item
					key="send"
					css={(theme) => ({
						background: '#2E3445',
						paddingTop: '10px',
						paddingBottom: '10px',
					})}
				>
					<Text style={{color: '#FFFFFF', fontSize: '15px'}}>Send</Text>
				</Menu.Item>
				<Menu.Item
					key="getHelp"
					css={(theme) => ({
						[`@media (min-width: ${theme.sizes.lg})`]: {
							display: 'none',
						},
					})}
				>
					<Text>Get help</Text>
				</Menu.Item>
				<Menu.Item
					key="buySell"
					css={(theme) => ({
						[`@media (min-width: ${theme.sizes.lg})`]: {
							display: 'none',
						},
					})}
				>
					<Text style={{color: '#FFFFFF', fontSize: '15px'}}>Buy / Sell</Text>
				</Menu.Item>
				<Menu.Item
					key="sendReceive"
					css={(theme) => ({
						[`@media (min-width: ${theme.sizes.lg})`]: {
							display: 'none',
						},
					})}
				>
					<Text style={{color: '#FFFFFF', fontSize: '15px'}}>
						Send / Recieve
					</Text>
				</Menu.Item>
				<Menu.Item
					key="withdraw"
					css={(theme) => ({
						background: '#2E3445',
						paddingTop: '10px',
						paddingBottom: '10px',
					})}
				>
					<Text style={{color: '#FFFFFF', fontSize: '15px'}}>Withdraw</Text>
				</Menu.Item>

				<Menu.Item
					key="send"
					css={(theme) => ({
						background: '#2E3445',
						paddingTop: '10px',
						paddingBottom: '10px',
					})}
				>
					<Text style={{color: '#FFFFFF', fontSize: '15px'}}>Deposit</Text>
				</Menu.Item>
				<Menu.Item
					key="send"
					css={(theme) => ({
						background: '#2E3445',
						paddingTop: '10px',
						paddingBottom: '10px',
					})}
				>
					<Text style={{color: '#FFFFFF', fontSize: '15px'}}>Advanced</Text>
				</Menu.Item>
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
								<Col xs={6} sm={5}>
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
										<Menu.Item key="dashboard">Dashboard</Menu.Item>
										<Menu.Item key="market">
											<Translate component="span" content="header.exchange" />
										</Menu.Item>
										<Menu.Item key="explorer">
											<Translate component="span" content="header.explorer" />
										</Menu.Item>
										<Menu.Item key="funds">Funds</Menu.Item>
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
								<div
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
										Send / Recieve
									</StyledButton>
								</div>

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
					<DepositModalBtc
						visibleMeta={this.state.isDepositModalVisibleBtc}
						hideModalMeta={this.hideDepositModalBtc}
						showModalMeta={this.showDepositModalBtc}
						ref="deposit_modal_new1"
						modalId="deposit_modal_new1"
						account={currentAccount}
					/>
					<DepositModalEth
						visibleMeta={this.state.isDepositModalVisibleEth}
						hideModalMeta={this.hideDepositModalEth}
						showModalMeta={this.showDepositModalEth}
						ref="deposit_modal_new11"
						modalId="deposit_modal_new11"
						account={currentAccount}
					/>
					<DepositModalUsdt
						visibleMeta={this.state.isDepositModalVisibleUsdt}
						hideModalMeta={this.hideDepositModalUsdt}
						showModalMeta={this.showDepositModalUsdt}
						ref="deposit_modal_new1331"
						modalId="deposit_modal_new1331"
						account={currentAccount}
					/>
					<DepositModalLtc
						visibleMeta={this.state.isDepositModalVisibleLtc}
						hideModalMeta={this.hideDepositModalLtc}
						showModalMeta={this.showDepositModalLtc}
						ref="deposit_modal_new112"
						modalId="deposit_modal_new122"
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
