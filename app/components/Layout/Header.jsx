import React from "react";
import {Link} from "react-router-dom";
import {connect} from "alt-react";
import AccountActions from "actions/AccountActions";
import AccountStore from "stores/AccountStore";
import SettingsStore from "stores/SettingsStore";
import SettingsActions from "actions/SettingsActions";
import ZfApi from "react-foundation-apps/src/utils/foundation-api";
import SendModal from "../Modal/SendModal";
import DepositModalBtc from "../Modal/DepositModalBtc";
import DepositModalEth from "../Modal/DepositModalEth";
import DepositModalUsdt from "../Modal/DepositModalUsdt";
// import DepositModalEos from "../Modal/DepositModalEos";
// import DepositModalXlm from "../Modal/DepositModalXlm";
// import DepositModalBnb from "../Modal/DepositModalBnb";
import DepositModalLtc from "../Modal/DepositModalLtc";
import Icon from "../Icon/Icon";
import Translate from "react-translate-component";
import counterpart from "counterpart";
import WalletDb from "stores/WalletDb";
import WalletUnlockStore from "stores/WalletUnlockStore";
import WalletUnlockActions from "actions/WalletUnlockActions";
import WalletManagerStore from "stores/WalletManagerStore";
import cnames from "classnames";
import TotalBalanceValue from "../Utility/TotalBalanceValue";
import ReactTooltip from "react-tooltip";
import {Apis} from "meta1js-ws";
import AccountImage from "../Account/AccountImage";
import {ChainStore} from "meta1js";
import {List} from "immutable";
import DropDownMenu from "./HeaderDropdown";
import {withRouter} from "react-router-dom";
import {Notification} from "bitshares-ui-style-guide";
import AccountBrowsingMode from "../Account/AccountBrowsingMode";
import {setLocalStorageType, isPersistantType} from "lib/common/localStorage";

import {getLogo} from "branding";
var logo = getLogo();

const SUBMENUS = {
    SETTINGS: "SETTINGS",
    DEPOSIT: "DEPOSIT"
};

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
            isDepositModalVisibleBtc: false
        };

        this._accountNotificationActiveKeys = [];
        this.unlisten = null;
        this._toggleAccountDropdownMenu = this._toggleAccountDropdownMenu.bind(
            this
        );
        this._toggleDropdownMenu = this._toggleDropdownMenu.bind(this);
        this._closeDropdown = this._closeDropdown.bind(this);
        this._closeDropdownSubmenu = this._closeDropdownSubmenu.bind(this);
        this._closeDropdownSubmenuAdvanced = this._closeDropdownSubmenuAdvanced.bind(
            this
        );
        this._closeDropdownSubmenuDeposit = this._closeDropdownSubmenuDeposit.bind(
            this
        );
        this._toggleDropdownSubmenu = this._toggleDropdownSubmenu.bind(this);
        this._toggleDropdownSubmenuAdvanced = this._toggleDropdownSubmenuAdvanced.bind(
            this
        );
        this._toggleDropdownSubmenuDeposit = this._toggleDropdownSubmenuDeposit.bind(
            this
        );
        this._closeMenuDropdown = this._closeMenuDropdown.bind(this);
        this._closeAccountsListDropdown = this._closeAccountsListDropdown.bind(
            this
        );
        this._closeAccountNotifications = this._closeAccountNotifications.bind(
            this
        );

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

        this.onBodyClick = this.onBodyClick.bind(this);
    }

    showDepositModal() {
        this.setState({
            isDepositModalVisible: true,
            hasDepositModalBeenShown: true
        });
    }

    hideDepositModal() {
        this.setState({
            isDepositModalVisible: false
        });
    }

    componentWillMount() {
        this.unlisten = this.props.history.listen(newState => {
            if (this.unlisten && this.state.active !== newState.pathname) {
                this.setState({
                    active: newState.pathname
                });
            }
        });
    }

    componentDidMount() {
        setTimeout(() => {
            ReactTooltip.rebuild();
        }, 1250);

        document.body.addEventListener("click", this.onBodyClick, {
            capture: false,
            passive: true
        });
    }

    componentWillUnmount() {
        if (this.unlisten) {
            this.unlisten();
            this.unlisten = null;
        }

        document.body.removeEventListener("click", this.onBodyClick);
    }

    componentWillReceiveProps(np) {
        if (
            np.passwordLogin !== this.props.passwordLogin &&
            this.state.active.includes("/settings/")
        ) {
            this.props.history.push("/settings/general");
        }
    }
    showDepositModalBtc() {
        this.setState({
            isDepositModalVisibleBtc: true
        });
    }

    showDepositModalEth() {
        this.setState({
            isDepositModalVisibleEth: true
        });
    }

    showDepositModalUsdt() {
        this.setState({
            isDepositModalVisibleUsdt: true
        });
    }

    showDepositModalEos() {
        this.setState({
            isDepositModalVisibleEos: true
        });
    }

    showDepositModalBnb() {
        this.setState({
            isDepositModalVisibleBnb: true
        });
    }

    showDepositModalXlm() {
        this.setState({
            isDepositModalVisibleXlm: true
        });
    }

    showDepositModalLtc() {
        this.setState({
            isDepositModalVisibleLtc: true
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
            nextState.dropdownSubmenuActive !==
                this.state.dropdownSubmenuActive ||
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
            isDepositModalVisibleBtc: false
        });
    }

    hideDepositModalEth() {
        this.setState({
            isDepositModalVisibleEth: false
        });
    }

    hideDepositModalUsdt() {
        this.setState({
            isDepositModalVisibleUsdt: false
        });
    }

    hideDepositModalEos() {
        this.setState({
            isDepositModalVisibleEos: false
        });
    }

    hideDepositModalBnb() {
        this.setState({
            isDepositModalVisibleBnb: false
        });
    }

    hideDepositModalXlm() {
        this.setState({
            isDepositModalVisibleXlm: false
        });
    }

    hideDepositModalLtc() {
        this.setState({
            isDepositModalVisibleLtc: false
        });
    }

    _showDeposit(e) {
        e.preventDefault();
        this.showDepositModal();
        this._closeDropdown();
    }

    _triggerMenu(e) {
        e.preventDefault();
        ZfApi.publish("mobile-menu", "toggle");
    }

    _toggleLock(e) {
        e.preventDefault();
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
                    setLocalStorageType("persistant");
                }
                AccountActions.setPasswordAccount(null);
                AccountStore.tryToSetCurrentAccount();
            }
        }
        this._closeDropdown();
        this._closeAccountNotifications();
    }

    _onNavigate(route, e) {
        e.preventDefault();

        // Set Accounts Tab as active tab
        if (route == "/accounts") {
            SettingsActions.changeViewSetting({
                dashboardEntry: "accounts"
            });
        }

        this.props.history.push(route);
        this._closeDropdown();
    }

    _closeAccountsListDropdown() {
        if (this.state.accountsListDropdownActive) {
            this.setState({
                accountsListDropdownActive: false
            });
        }
    }

    _closeMenuDropdown() {
        if (this.state.dropdownActive) {
            this.setState({
                dropdownActive: false
            });
        }
    }

    _closeDropdownSubmenu() {
        if (this.state.dropdownSubmenuActive) {
            this.setState({
                dropdownSubmenuActive: false
            });
        }
    }

    _closeDropdownSubmenuAdvanced() {
        if (this.state.dropdownSubmenuActiveAdvanced) {
            this.setState({
                dropdownSubmenuActiveAdvanced: false
            });
        }
    }

    _closeDropdownSubmenuDeposit() {
        if (this.state.dropdownSubmenuActiveDeposit) {
            this.setState({
                dropdownSubmenuActiveDeposit: false
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
        ZfApi.publish("account_drop_down", "close");
        if (account_name !== this.props.currentAccount) {
            AccountActions.setCurrentAccount.defer(account_name);
            const key = `account-notification-${Date.now()}`;
            Notification.success({
                message: counterpart.translate("header.account_notify", {
                    account: account_name
                }),
                key,
                onClose: () => {
                    // Remove key of notification from notificationKeys array after close
                    this._accountNotificationActiveKeys = this._accountNotificationActiveKeys.filter(
                        el => el !== key
                    );
                }
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
            accountsListDropdownActive: !this.state.accountsListDropdownActive
        });
    }

    _toggleDropdownSubmenu(item = this.state.dropdownSubmenuActiveItem, e) {
        if (e) e.stopPropagation();

        this.setState({
            dropdownSubmenuActive: !this.state.dropdownSubmenuActive,
            dropdownSubmenuActiveItem: item
        });
    }

    _toggleDropdownSubmenuDeposit(
        item = this.state.dropdownSubmenuActiveItemDeposit,
        e
    ) {
        if (e) e.stopPropagation();

        this.setState({
            dropdownSubmenuActiveDeposit: !this.state
                .dropdownSubmenuActiveDeposit,
            dropdownSubmenuActiveItemDeposit: item
        });
    }

    _toggleDropdownSubmenuAdvanced(
        item = this.state.dropdownSubmenuActiveItemAdvanced,
        e
    ) {
        if (e) e.stopPropagation();

        this.setState({
            dropdownSubmenuActiveAdvanced: !this.state
                .dropdownSubmenuActiveAdvanced,
            dropdownSubmenuActiveItemAdvanced: item
        });
    }

    _toggleDropdownMenu() {
        this.setState({
            dropdownActive: !this.state.dropdownActive
        });
        this._closeAccountNotifications();
    }

    _closeAccountNotifications() {
        this._accountNotificationActiveKeys.map(key => Notification.close(key));
        this._accountNotificationActiveKeys = [];
    }

    onBodyClick(e) {
        let el = e.target;
        let insideMenuDropdown = false;
        let insideAccountDropdown = false;

        do {
            if (
                el.classList &&
                el.classList.contains("account-dropdown-wrapper")
            ) {
                insideAccountDropdown = true;
                break;
            }

            if (
                el.classList &&
                el.classList.contains("menu-dropdown-wrapper")
            ) {
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

    render() {
        let {active} = this.state;
        let {
            currentAccount,
            starredAccounts,
            passwordLogin,
            passwordAccount,
            height
        } = this.props;

        let tradingAccounts = AccountStore.getMyAccounts();
        let maxHeight = Math.max(40, height - 67 - 36) + "px";

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
            Apis.instance().chain_id.substr(0, 8) === "9e40bec4";

        if (starredAccounts.size) {
            for (let i = tradingAccounts.length - 1; i >= 0; i--) {
                if (!starredAccounts.has(tradingAccounts[i])) {
                    tradingAccounts.splice(i, 1);
                }
            }
            starredAccounts.forEach(account => {
                if (tradingAccounts.indexOf(account.name) === -1) {
                    tradingAccounts.push(account.name);
                }
            });
        }

        let myAccounts = AccountStore.getMyAccounts();
        let myAccountCount = myAccounts.length;

        let walletBalance =
            myAccounts.length && this.props.currentAccount ? (
                <div
                    className="total-value"
                    onClick={this._toggleAccountDropdownMenu}
                >
                    <TotalBalanceValue.AccountWrapper
                        hiddenAssets={this.props.hiddenAssets}
                        accounts={List([this.props.currentAccount])}
                        noTip
                        style={{minHeight: 15}}
                    />
                </div>
            ) : null;

        let dashboard = (
            <a
                href="/home"
                className={cnames("logo")}
                onClick={this._onNavigate.bind(this, "/home/")}
            >
                <img
                    style={{marginTop: -11, height: 35, width: 89}}
                    src={logo}
                />
            </a>
        );

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
            : "/market/META1_USDT";

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
                    .filter(name => name !== currentAccount)
                    .map(name => {
                        return (
                            <li
                                key={name}
                                className={cnames({
                                    active:
                                        active
                                            .replace("/account/", "")
                                            .indexOf(name) === 0
                                })}
                                onClick={this._accountClickHandler.bind(
                                    this,
                                    name
                                )}
                            >
                                <div
                                    style={{paddingTop: 0}}
                                    className="table-cell"
                                >
                                    <AccountImage
                                        style={{position: "relative", top: 4}}
                                        size={{height: 20, width: 20}}
                                        account={name}
                                    />
                                </div>
                                <div
                                    className="table-cell"
                                    style={{paddingLeft: 10}}
                                >
                                    <a
                                        className={
                                            "text lower-case" +
                                            (name === account_display_name
                                                ? " current-account"
                                                : "")
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

        let hamburger = this.state.dropdownActive ? (
            <Icon
                className="icon-17px"
                name="hamburger-x"
                title="icons.hamburger_x"
            />
        ) : (
            <Icon
                className="icon-17px"
                name="hamburger"
                title="icons.hamburger"
            />
        );
        const hasLocalWallet = !!WalletDb.getWallet();

        /* Dynamic Menu Item */
        let dynamicMenuItem;
        if (active.indexOf("transfer") !== -1) {
            dynamicMenuItem = (
                <a style={{flexFlow: "row"}} className={cnames({active: true})}>
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="transfer"
                        title="icons.transfer"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="header.payments"
                    />
                </a>
            );
        }
        {
            /*if (active.indexOf("spotlight") !== -1) {
            dynamicMenuItem = (
                <a style={{flexFlow: "row"}} className={cnames({active: true})}>
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="showcases"
                        title="icons.showcases"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="header.showcases"
                    />
                </a>
            );
        }*/
        }
        if (active.indexOf("settings") !== -1) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({
                        active: active.indexOf("settings") !== -1
                    })}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="cogs"
                        title="icons.cogs"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="header.settings"
                    />
                </a>
            );
        }
        if (active.indexOf("deposit-withdraw") !== -1) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({
                        active: active.indexOf("deposit-withdraw") !== -1
                    })}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="deposit"
                        title="icons.deposit.deposit_withdraw"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="header.deposit-withdraw"
                    />
                </a>
            );
        }
        if (active.indexOf("help") !== -1) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({active: active.indexOf("help") !== -1})}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="question-circle"
                        title="icons.question_circle"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="header.help"
                    />
                </a>
            );
        }
        if (
            active.indexOf("/assets") !== -1 &&
            active.indexOf("explorer") === -1
        ) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({
                        active: active.indexOf("/assets") !== -1
                    })}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="assets"
                        title="icons.assets"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="explorer.assets.title"
                    />
                </a>
            );
        }
        if (active.indexOf("/signedmessages") !== -1) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({
                        active: active.indexOf("/signedmessages") !== -1
                    })}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="text"
                        title="icons.text.signed_messages"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="account.signedmessages.menuitem"
                    />
                </a>
            );
        }
        if (active.indexOf("/member-stats") !== -1) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({
                        active: active.indexOf("/member-stats") !== -1
                    })}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="text"
                        title="icons.text.membership_stats"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="account.member.stats"
                    />
                </a>
            );
        }
        if (active.indexOf("/vesting") !== -1) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({
                        active: active.indexOf("/vesting") !== -1
                    })}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="hourglass"
                        title="icons.hourglass"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="account.vesting.title"
                    />
                </a>
            );
        }
        if (active.indexOf("/whitelist") !== -1) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({
                        active: active.indexOf("/whitelist") !== -1
                    })}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="list"
                        title="icons.list"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="account.whitelist.title"
                    />
                </a>
            );
        }
        if (active.indexOf("/permissions") !== -1) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({
                        active: active.indexOf("/permissions") !== -1
                    })}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="warning"
                        title="icons.warning"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="account.permissions"
                    />
                </a>
            );
        }

        if (active.indexOf("/borrow") !== -1) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({
                        active: active.indexOf("/borrow") !== -1
                    })}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="borrow"
                        title="icons.borrow"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="showcases.borrow.title"
                    />
                </a>
            );
        }

        if (active.indexOf("/barter") !== -1) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({
                        active: active.indexOf("/barter") !== -1
                    })}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="barter"
                        title="icons.barter"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="showcases.barter.title"
                    />
                </a>
            );
        }

        if (active.indexOf("/direct-debit") !== -1) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({
                        active: active.indexOf("/direct-debit") !== -1
                    })}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="htlc"
                        title="icons.htlc"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="showcases.direct_debit.title"
                    />
                </a>
            );
        }

        if (active.indexOf("/prediction") !== -1) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({
                        active: active.indexOf("/prediction") !== -1
                    })}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="prediction-large"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="showcases.prediction_market.title"
                    />
                </a>
            );
        }

        if (active.indexOf("/htlc") !== -1) {
            dynamicMenuItem = (
                <a
                    style={{flexFlow: "row"}}
                    className={cnames({
                        active: active.indexOf("/htlc") !== -1
                    })}
                >
                    <Icon
                        size="1_5x"
                        style={{position: "relative", top: 0, left: -8}}
                        name="htlc"
                        title="icons.htlc"
                    />
                    <Translate
                        className="column-hide-small"
                        component="span"
                        content="showcases.htlc.title_short"
                    />
                </a>
            );
        }

        const submenus = {
            [SUBMENUS.SETTINGS]: (
                <ul
                    className="dropdown header-menu header-submenu"
                    style={{
                        left: -200,
                        top: 64,
                        maxHeight: !this.state.dropdownActive ? 0 : maxHeight,
                        overflowY: "auto"
                    }}
                >
                    <li
                        className="divider parent-item"
                        onClick={this._toggleDropdownSubmenu.bind(
                            this,
                            undefined
                        )}
                    >
                        <div className="table-cell">
                            <span className="parent-item-icon">&lt;</span>
                            <Translate
                                content="header.settings"
                                component="span"
                                className="parent-item-name"
                            />
                        </div>
                    </li>
                    <li
                        onClick={this._onNavigate.bind(
                            this,
                            "/settings/general"
                        )}
                    >
                        <Translate
                            content="settings.general"
                            component="div"
                            className="table-cell"
                        />
                    </li>
                    {!this.props.settings.get("passwordLogin") && (
                        <li
                            onClick={this._onNavigate.bind(
                                this,
                                "/settings/wallet"
                            )}
                        >
                            <Translate
                                content="settings.wallet"
                                component="div"
                                className="table-cell"
                            />
                        </li>
                    )}
                    <li
                        onClick={this._onNavigate.bind(
                            this,
                            "/settings/accounts"
                        )}
                    >
                        <Translate
                            content="settings.accounts"
                            component="div"
                            className="table-cell"
                        />
                    </li>

                    {!this.props.settings.get("passwordLogin") && [
                        <li
                            key={"settings.password"}
                            onClick={this._onNavigate.bind(
                                this,
                                "/settings/password"
                            )}
                        >
                            <Translate
                                content="settings.password"
                                component="div"
                                className="table-cell"
                            />
                        </li>,
                        <li
                            key={"settings.backup"}
                            onClick={this._onNavigate.bind(
                                this,
                                "/settings/backup"
                            )}
                        >
                            <Translate
                                content="settings.backup"
                                component="div"
                                className="table-cell"
                            />
                        </li>,
                        <li
                            key={"settings.restore"}
                            onClick={this._onNavigate.bind(
                                this,
                                "/settings/restore"
                            )}
                        >
                            <Translate
                                content="settings.restore"
                                component="div"
                                className="table-cell"
                            />
                        </li>
                    ]}

                    <li
                        onClick={this._onNavigate.bind(
                            this,
                            "/settings/access"
                        )}
                    >
                        <Translate
                            content="settings.access"
                            component="div"
                            className="table-cell"
                        />
                    </li>
                    <li
                        onClick={this._onNavigate.bind(
                            this,
                            "/settings/faucet_address"
                        )}
                    >
                        <Translate
                            content="settings.faucet_address"
                            component="div"
                            className="table-cell"
                        />
                    </li>
                    <li
                        onClick={this._onNavigate.bind(this, "/settings/reset")}
                    >
                        <Translate
                            content="settings.reset"
                            component="div"
                            className="table-cell"
                        />
                    </li>
                </ul>
            )
        };

        const advanced = {
            [SUBMENUS.ADVANCED]: (
                <ul
                    className="dropdown header-menu header-submenu"
                    style={{
                        left: -200,
                        top: 40,
                        maxHeight: !this.state.dropdownActive ? 0 : maxHeight,
                        overflowY: "auto"
                    }}
                >
                    <li
                        className="divider parent-item"
                        onClick={this._toggleDropdownSubmenuAdvanced.bind(
                            this,
                            undefined
                        )}
                    >
                        <div className="table-cell">
                            <span className="parent-item-icon">&lt;</span>
                            <Translate
                                content="account.advanced"
                                component="span"
                                className="parent-item-name"
                            />
                        </div>
                    </li>
                    <li
                        style={{flexFlow: "row"}}
                        className={cnames(
                            active.indexOf("arts") !== -1
                                ? null
                                : "column-hide-xs",
                            {
                                active: active.indexOf("arts") !== -1
                            }
                        )}
                        onClick={this._onNavigate.bind(this, "/asset-explorer")}
                    >
                        <div className="table-cell">
                            <Translate
                                className="column-hide-small"
                                component="span"
                                content="header.arts"
                            />
                        </div>
                    </li>
                    <li
                        style={{flexFlow: "row"}}
                        className={cnames(
                            active.indexOf("help") !== -1
                                ? null
                                : "column-hide-xs",
                            {
                                active: active.indexOf("help") !== -1
                            }
                        )}
                        onClick={this._onNavigate.bind(this, "/help")}
                    >
                        <div className="table-cell">
                            <Translate
                                className="column-hide-small"
                                component="span"
                                content="header.help"
                            />
                        </div>
                    </li>
                    <li
                        className={cnames(
                            {active: active.indexOf("/settings") !== -1},
                            "divider",
                            "desktop-only"
                        )}
                        onClick={this._onNavigate.bind(this, "/settings")}
                    >
                        <div className="table-cell">
                            <Translate content="header.settings" />
                        </div>
                    </li>

                    {/*<li
                        className={cnames(
                            {active: active.indexOf("/spotlight") !== -1},
                            "divider"
                        )}
                        onClick={this._onNavigate.bind(this, "/spotlight")}
                    >
                        <div className="table-cell">
                            <Translate content="header.showcases" />
                        </div>
                    </li>*/}

                    <li
                        className={cnames(
                            {active: active.indexOf("/settings") !== -1},
                            "divider",
                            "mobile-only",
                            "has-submenu"
                        )}
                        onClick={this.props.toggleDropdownSubmenu}
                    >
                        <div className="table-cell">
                            <Translate content="header.settings" />{" "}
                        </div>
                    </li>

                    /* no hardware wallet support at this time, remove to reduce questions
                    <li
                        className={cnames({
                            active:
                                active.indexOf("/trezor") !== -1 &&
                                active.indexOf("/account/") !== -1,
                            disabled: !showAccountLinks
                        })}
                        onClick={
                            !showAccountLinks
                                ? event => {
                                      event.stopPropagation();
                                  }
                                : () =>
                                      window.open(
                                          "https://beta-wallet.trezor.io/next/#/",
                                          "_blank"
                                      )
                        }
                    >
                        <div className="table-cell">
                            <Translate content="explorer.assets.trezor" />
                        </div>
                    </li>
                    <li
                        className={cnames({
                            active:
                                active.indexOf("/ledger") !== -1 &&
                                active.indexOf("/account/") !== -1,
                            disabled: !showAccountLinks
                        })}
                        onClick={
                            !showAccountLinks
                                ? event => {
                                      event.stopPropagation();
                                  }
                                : () =>
                                      window.open(
                                          "https://shop.ledger.com/pages/ledger-live",
                                          "_blank"
                                      )
                        }
                    >
                        <div className="table-cell">
                            <Translate content="explorer.assets.ledger" />
                        </div>
                    </li>
                    *** end no hardware wallet support at this time, remove to reduce questions */
                    <li
                        className={cnames({
                            active: active.indexOf("/signedmessages") !== -1,
                            disabled: !showAccountLinks
                        })}
                        onClick={
                            !showAccountLinks
                                ? event => {
                                      event.stopPropagation();
                                  }
                                : this._onNavigate.bind(
                                      this,
                                      `/account/${currentAccount}/signedmessages`
                                  )
                        }
                    >
                        <div className="table-cell">
                            <Translate content="account.signedmessages.menuitem" />
                        </div>
                    </li>

                    <li
                        className={cnames({
                            active: active.indexOf("/member-stats") !== -1,
                            disabled: !showAccountLinks
                        })}
                        onClick={
                            !showAccountLinks
                                ? event => {
                                      event.stopPropagation();
                                  }
                                : this._onNavigate.bind(
                                      this,
                                      `/account/${currentAccount}/member-stats`
                                  )
                        }
                    >
                        <div className="table-cell">
                            <Translate content="account.member.stats" />
                        </div>
                    </li>

                    {isMyAccount ? (
                        <li
                            className={cnames({
                                active: active.indexOf("/vesting") !== -1
                            })}
                            onClick={this._onNavigate.bind(
                                this,
                                `/account/${currentAccount}/vesting`
                            )}
                        >
                            <div className="table-cell">
                                <Translate content="account.vesting.title" />
                            </div>
                        </li>
                    ) : null}

                    <li
                        className={cnames({
                            active: active.indexOf("/whitelist") !== -1,
                            disabled: !showAccountLinks
                        })}
                        onClick={
                            !showAccountLinks
                                ? event => {
                                      event.stopPropagation();
                                  }
                                : this._onNavigate.bind(
                                      this,
                                      `/account/${currentAccount}/whitelist`
                                  )
                        }
                    >
                        <div className="table-cell">
                            <Translate content="account.whitelist.title" />
                        </div>
                    </li>

                    <li
                        className={cnames("divider", {
                            active: active.indexOf("/permissions") !== -1,
                            disabled: !showAccountLinks
                        })}
                        onClick={
                            !showAccountLinks
                                ? event => {
                                      event.stopPropagation();
                                  }
                                : this._onNavigate.bind(
                                      this,
                                      `/account/${currentAccount}/permissions`
                                  )
                        }
                    >
                        <div className="table-cell">
                            <Translate content="account.permissions" />
                        </div>
                    </li>

                    {showAccountLinks ? (
                        <li
                            className={cnames(
                                {active: active.indexOf("/accounts") !== -1},
                                "divider"
                            )}
                            onClick={this._onNavigate.bind(this, "/accounts")}
                        >
                            <div className="table-cell">
                                <Translate content="explorer.accounts.title" />
                            </div>
                        </li>
                    ) : null}
                </ul>
            )
        };

        const deposit = {
            [SUBMENUS.DEPOSIT]: (
                <ul
                    className="dropdown header-menu header-submenu"
                    style={{
                        left: -200,
                        top: 40,
                        maxHeight: !this.state.dropdownActive ? 0 : maxHeight,
                        overflowY: "auto"
                    }}
                >
                    <li
                        className="divider parent-item"
                        onClick={this._toggleDropdownSubmenuDeposit.bind(
                            this,
                            undefined
                        )}
                    >
                        <div className="table-cell">
                            <span className="parent-item-icon">&lt;</span>
                            <Translate
                                content="modal.deposit.header_short"
                                component="span"
                                className="parent-item-name"
                            />
                        </div>
                    </li>
                    <li onClick={this._showDepositBtc.bind(this)}>
                        <Translate
                            content="modal.deposit.btc"
                            component="div"
                            className="table-cell"
                        />
                    </li>
                    <li onClick={this._showDepositEth.bind(this)}>
                        <Translate
                            content="modal.deposit.eth"
                            component="div"
                            className="table-cell"
                        />
                    </li>
                    <li onClick={this._showDepositUsdt.bind(this)}>
                        <Translate
                            content="modal.deposit.usdt"
                            component="div"
                            className="table-cell"
                        />
                    </li>
                    <li onClick={this._showDepositLtc.bind(this)}>
                        <Translate
                            content="modal.deposit.ltc"
                            component="div"
                            className="table-cell"
                        />
                    </li>
                </ul>
            )
        };

        return (
            <div className="header-container" style={{minHeight: "38px"}}>
                <div>
                    <div
                        className="header menu-group primary"
                        style={{flexWrap: "nowrap", justifyContent: "none"}}
                    >
                        {__ELECTRON__ ? (
                            <div className="grid-block show-for-medium shrink electron-navigation">
                                <ul className="menu-bar">
                                    <li>
                                        <div
                                            style={{
                                                marginLeft: "1rem",
                                                height: "3rem"
                                            }}
                                        >
                                            <div
                                                style={{marginTop: "0.5rem"}}
                                                onClick={this._onGoBack.bind(
                                                    this
                                                )}
                                                className="button outline small"
                                            >
                                                {"<"}
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div
                                            style={{
                                                height: "3rem",
                                                marginLeft: "0.5rem",
                                                marginRight: "0.75rem"
                                            }}
                                        >
                                            <div
                                                style={{marginTop: "0.5rem"}}
                                                onClick={this._onGoForward.bind(
                                                    this
                                                )}
                                                className="button outline small"
                                            >
                                                >
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        ) : null}

                        <ul className="menu-bar">
                            <li>{dashboard}</li>
                            {!currentAccount || !!createAccountLink ? null : (
                                <li className="column-hide-small">
                                    <Link
                                        style={{flexFlow: "row"}}
                                        to={`/account/${currentAccount}`}
                                        className={cnames({
                                            active:
                                                active.indexOf("/account/") !==
                                                    -1 &&
                                                active.indexOf("/account/") !==
                                                    -1 &&
                                                active.indexOf("/assets") ===
                                                    -1 &&
                                                active.indexOf("/voting") ===
                                                    -1 &&
                                                active.indexOf(
                                                    "/signedmessages"
                                                ) === -1 &&
                                                active.indexOf(
                                                    "/member-stats"
                                                ) === -1 &&
                                                active.indexOf("/vesting") ===
                                                    -1 &&
                                                active.indexOf("/whitelist") ===
                                                    -1 &&
                                                active.indexOf(
                                                    "/permissions"
                                                ) === -1
                                        })}
                                    >
                                        <Translate
                                            className="column-hide-small"
                                            content="header.dashboard"
                                        />
                                    </Link>
                                </li>
                            )}
                            <li className="column-hide-small">
                                <a
                                    style={{flexFlow: "row"}}
                                    className={cnames(
                                        active.indexOf("market/") !== -1
                                            ? null
                                            : "column-hide-xxs",
                                        {
                                            active:
                                                active.indexOf("market/") !== -1
                                        }
                                    )}
                                    onClick={this._onNavigate.bind(
                                        this,
                                        tradeUrl
                                    )}
                                >
                                    <Translate
                                        className="column-hide-small"
                                        component="span"
                                        content="header.exchange"
                                    />
                                </a>
                            </li>
                            <li className="column-hide-small">
                                <a
                                    style={{flexFlow: "row"}}
                                    className={cnames(
                                        active.indexOf("explorer") !== -1
                                            ? null
                                            : "column-hide-xs",
                                        {
                                            active:
                                                active.indexOf("explorer") !==
                                                -1
                                        }
                                    )}
                                    onClick={this._onNavigate.bind(
                                        this,
                                        "/explorer/blocks"
                                    )}
                                >
                                    <Translate
                                        className="column-hide-small"
                                        component="span"
                                        content="header.explorer"
                                    />
                                </a>
                            </li>
                            {/* Dynamic Menu Item */}
                            <li className="column-hide-small">
                                {dynamicMenuItem}
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    className="truncated active-account"
                    style={{cursor: "pointer"}}
                >
                    <AccountBrowsingMode location={this.props.location} />
                    {this.props.locked == true ? null : (
                        <div>
                            <div className="text account-name">
                                <span onClick={this._toggleAccountDropdownMenu}>
                                    {currentAccount}
                                </span>
                                <AccountBrowsingMode
                                    location={this.props.location}
                                    usernameViewIcon
                                />
                            </div>
                            {walletBalance}
                        </div>
                    )}
                    {hasLocalWallet && (
                        <ul
                            className="dropdown header-menu local-wallet-menu"
                            style={{
                                right: 0,
                                maxHeight: !this.state
                                    .accountsListDropdownActive
                                    ? 0
                                    : maxHeight,
                                overflowY: "auto",
                                position: "absolute",
                                width: "20em"
                            }}
                        >
                            <li
                                className={cnames(
                                    {
                                        active:
                                            active.indexOf("/accounts") !== -1
                                    },
                                    "divider"
                                )}
                                onClick={this._onNavigate.bind(
                                    this,
                                    "/accounts"
                                )}
                            >
                                <div className="table-cell">
                                    <Icon
                                        size="2x"
                                        name="people"
                                        title="icons.manage_accounts"
                                    />
                                </div>
                                <div className="table-cell">
                                    <Translate content="header.accounts_manage" />
                                </div>
                            </li>
                            {accountsList}
                        </ul>
                    )}
                </div>
                <div>
                    {this.props.currentAccount == null ? null : (
                        <span
                            onClick={this._toggleLock.bind(this)}
                            style={{cursor: "pointer"}}
                        >
                            <Icon
                                className="lock-unlock"
                                size="2x"
                                name={this.props.locked ? "locked" : "unlocked"}
                                title={
                                    this.props.locked
                                        ? "icons.locked.common"
                                        : "icons.unlocked.common"
                                }
                            />
                        </span>
                    )}
                </div>
                <div className="app-menu">
                    <div
                        onClick={this._toggleDropdownMenu}
                        className={cnames(
                            "menu-dropdown-wrapper dropdown-wrapper",
                            {active: this.state.dropdownActive}
                        )}
                    >
                        <div className="hamburger">{hamburger}</div>

                        {(this.state.dropdownSubmenuActive &&
                            submenus[this.state.dropdownSubmenuActiveItem] &&
                            submenus[this.state.dropdownSubmenuActiveItem]) ||
                            (this.state.dropdownSubmenuActiveDeposit &&
                                deposit[
                                    this.state.dropdownSubmenuActiveItemDeposit
                                ] &&
                                deposit[
                                    this.state.dropdownSubmenuActiveItemDeposit
                                ]) ||
                            (this.state.dropdownSubmenuActiveAdvanced &&
                                advanced[
                                    this.state.dropdownSubmenuActiveItemAdvanced
                                ] &&
                                advanced[
                                    this.state.dropdownSubmenuActiveItemAdvanced
                                ]) || (
                                <DropDownMenu
                                    dropdownActive={this.state.dropdownActive}
                                    toggleLock={this._toggleLock.bind(this)}
                                    maxHeight={maxHeight}
                                    locked={this.props.locked}
                                    active={active}
                                    passwordLogin={passwordLogin}
                                    onNavigate={this._onNavigate.bind(this)}
                                    isMyAccount={isMyAccount}
                                    contacts={this.props.contacts}
                                    showAccountLinks={showAccountLinks}
                                    tradeUrl={tradeUrl}
                                    currentAccount={currentAccount}
                                    enableDepositWithdraw={
                                        enableDepositWithdraw
                                    }
                                    showDeposit={this._showDeposit.bind(this)}
                                    showSend={this._showSend.bind(this)}
                                    toggleDropdownSubmenu={this._toggleDropdownSubmenu.bind(
                                        this,
                                        SUBMENUS.SETTINGS
                                    )}
                                    toggleDropdownSubmenuAdvanced={this._toggleDropdownSubmenuAdvanced.bind(
                                        this,
                                        SUBMENUS.ADVANCED
                                    )}
                                    toggleDropdownSubmenuDeposit={this._toggleDropdownSubmenuDeposit.bind(
                                        this,
                                        SUBMENUS.DEPOSIT
                                    )}
                                />
                            )}
                    </div>
                </div>
                <SendModal
                    id="send_modal_header"
                    refCallback={e => {
                        if (e) this.send_modal = e;
                    }}
                    from_name={currentAccount}
                />
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
                {/* <DepositModalEos
                    visibleMeta={this.state.isDepositModalVisibleEos}
                    hideModalMeta={this.hideDepositModalEos}
                    showModalMeta={this.showDepositModalEos}
                    ref="deposit_modal_newfsdfs11"
                    modalId="deposit_modal_newfsdfs11"
                    account={currentAccount}
                />
                <DepositModalBnb
                    visibleMeta={this.state.isDepositModalVisibleBnb}
                    hideModalMeta={this.hideDepositModalBnb}
                    showModalMeta={this.showDepositModalBnb}
                    ref="deposit_modal_newfsdfs11"
                    modalId="deposit_modal_newfsdfs11"
                    account={currentAccount}
                />
                <DepositModalXlm
                    visibleMeta={this.state.isDepositModalVisibleXlm}
                    hideModalMeta={this.hideDepositModalXlm}
                    showModalMeta={this.showDepositModalXlm}
                    ref="deposit_modal_newfsdfs1sd1"
                    modalId="deposit_modal_newfsdfs1sd1"
                    account={currentAccount}
                /> */}
                <DepositModalLtc
                    visibleMeta={this.state.isDepositModalVisibleLtc}
                    hideModalMeta={this.hideDepositModalLtc}
                    showModalMeta={this.showDepositModalLtc}
                    ref="deposit_modal_new112"
                    modalId="deposit_modal_new122"
                    account={currentAccount}
                />
            </div>
        );
    }
}

Header = connect(Header, {
    listenTo() {
        return [
            AccountStore,
            WalletUnlockStore,
            WalletManagerStore,
            SettingsStore
        ];
    },
    getProps() {
        const chainID = Apis.instance().chain_id;
        return {
            myActiveAccounts: AccountStore.getState().myActiveAccounts,
            currentAccount:
                AccountStore.getState().currentAccount ||
                AccountStore.getState().passwordAccount,
            passwordAccount: AccountStore.getState().passwordAccount,
            locked: WalletUnlockStore.getState().locked,
            current_wallet: WalletManagerStore.getState().current_wallet,
            lastMarket: SettingsStore.getState().viewSettings.get(
                `lastMarket${chainID ? "_" + chainID.substr(0, 8) : ""}`
            ),
            starredAccounts: AccountStore.getState().starredAccounts,
            passwordLogin: SettingsStore.getState().settings.get(
                "passwordLogin"
            ),
            currentLocale: SettingsStore.getState().settings.get("locale"),
            hiddenAssets: SettingsStore.getState().hiddenAssets,
            settings: SettingsStore.getState().settings,
            locales: SettingsStore.getState().defaults.locale,
            contacts: AccountStore.getState().accountContacts
        };
    }
});

export default withRouter(Header);
