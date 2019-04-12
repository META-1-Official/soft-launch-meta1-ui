import React from "react";
import Icon from "../Icon/Icon";
import Translate from "react-translate-component";
import cnames from "classnames";
import AccountActions from "actions/AccountActions";
import AccountStore from "stores/AccountStore";

export default class DropDownMenu extends React.Component {
    shouldComponentUpdate(np) {
        let shouldUpdate = false;
        for (let key in np) {
            if (typeof np[key] === "function") continue;
            shouldUpdate = shouldUpdate || np[key] !== this.props[key];
        }
        return shouldUpdate;
    }

    _onAddContact() {
        AccountActions.addAccountContact(this.props.currentAccount);
    }

    _onRemoveContact() {
        AccountActions.removeAccountContact(this.props.currentAccount);
    }

    render() {
        const {
            dropdownActive,
            toggleLock,
            maxHeight,
            locked,
            active,
            passwordLogin,
            isMyAccount,
            showAccountLinks,
            tradeUrl,
            enableDepositWithdraw,
            currentAccount,
            contacts
        } = this.props;

        let isContact = contacts.has(currentAccount);

        return (
            <ul
                className="dropdown header-menu"
                style={{
                    left: -200,
                    top: 64,
                    maxHeight: !dropdownActive ? 0 : maxHeight,
                    overflowY: "auto"
                }}
            >
                <li className="divider" onClick={toggleLock}>
                    <div className="table-cell">
                        <Icon size="2x" name="power" title="icons.power" />
                    </div>
                    <div className="table-cell">
                        <Translate
                            content={`header.${
                                this.props.locked
                                    ? "unlock_short"
                                    : "lock_short"
                            }`}
                        />
                    </div>
                </li>

                {locked ? (
                    <li
                        className={cnames({
                            active:
                                active.indexOf(
                                    `/create-account/${
                                        !passwordLogin ? "wallet" : "password"
                                    }`
                                ) !== -1
                        })}
                        onClick={this.props.onNavigate.bind(
                            this,
                            `/create-account/${
                                !passwordLogin ? "wallet" : "password"
                            }`
                        )}
                    >
                        <div className="table-cell">
                            <Icon
                                size="2x"
                                name="user"
                                title="icons.user.create_account"
                            />
                        </div>
                        <div className="table-cell">
                            <Translate content="header.create_account" />
                        </div>
                    </li>
                ) : null}

                {!this.props.locked ? (
                    <li
                        className={cnames({
                            active: active.indexOf("/account") !== -1
                        })}
                        onClick={this.props.onNavigate.bind(
                            this,
                            `/account/${currentAccount}`
                        )}
                    >
                        <div className="table-cell">
                            <Icon
                                size="2x"
                                name="dashboard"
                                title="icons.dasboard"
                            />
                        </div>
                        <div className="table-cell">
                            <Translate content="header.dashboard" />
                        </div>
                    </li>
                ) : null}

                {!isMyAccount && showAccountLinks ? (
                    <li
                        className="divider"
                        onClick={this[
                            isContact ? "_onRemoveContact" : "_onAddContact"
                        ].bind(this)}
                    >
                        <div className="table-cell">
                            <Icon
                                size="2x"
                                name={`${isContact ? "minus" : "plus"}-circle`}
                                title={
                                    isContact
                                        ? "icons.minus_circle.remove_contact"
                                        : "icons.plus_circle.add_contact"
                                }
                            />
                        </div>
                        <div className="table-cell">
                            <Translate
                                content={`account.${
                                    isContact ? "unfollow" : "follow"
                                }`}
                            />
                        </div>
                    </li>
                ) : null}

                <li
                    className={cnames(
                        {
                            active: active.indexOf("/market/") !== -1
                        },
                        "column-show-small"
                    )}
                    onClick={this.props.onNavigate.bind(this, tradeUrl)}
                >
                    <div className="table-cell">
                        <Icon
                            size="2x"
                            name="trade"
                            title="icons.trade.exchange"
                        />
                    </div>
                    <div className="table-cell">
                        <Translate content="header.exchange" />
                    </div>
                </li>

                <li
                    className={cnames(
                        {
                            active: active.indexOf("/explorer") !== -1
                        },
                        "column-show-small"
                    )}
                    onClick={this.props.onNavigate.bind(
                        this,
                        "/explorer/blocks"
                    )}
                >
                    <div className="table-cell">
                        <Icon size="2x" name="server" title="icons.server" />
                    </div>
                    <div className="table-cell">
                        <Translate content="header.explorer" />
                    </div>
                </li>

                <li
                    className={cnames(
                        {
                            active: active.indexOf("/arts") !== -1
                        },
                        "column-show-small"
                    )}
                    onClick={this.props.onNavigate.bind(this, "/arts")}
                >
                    <div className="table-cell">
                        <Icon size="2x" name="showcases" title="icons.arts" />
                    </div>
                    <div className="table-cell">
                        <Translate content="header.arts" />
                    </div>
                </li>
                <li
                    className={cnames(
                        {
                            active: active.indexOf("/settings") !== -1
                        },
                        "mobile-desktop-only",
                        "has-submenu"
                    )}
                    onClick={this.props.toggleDropdownSubmenuDeposit}
                >
                    <div className="table-cell">
                        <Icon
                            size="2x"
                            name="deposit"
                            title="icons.deposit.deposit"
                        />
                    </div>
                    <div className="table-cell">
                        <Translate content="modal.deposit.header_short" />{" "}
                    </div>
                </li>
                <li
                    className={cnames(
                        {
                            active: active.indexOf("/settings") !== -1
                        },
                        "mobile-desktop-only",
                        "has-submenu"
                    )}
                    onClick={this.props.toggleDropdownSubmenuWithdraw}
                >
                    <div className="table-cell">
                        <Icon
                            size="2x"
                            name="withdraw"
                            title="icons.withdraw.withdraw"
                        />
                    </div>
                    <div className="table-cell">
                        <Translate content="modal.deposit.header_short_w" />{" "}
                    </div>
                </li>
                {[
                    {
                        icon: {
                            name: "transfer",
                            title: "icons.transfer"
                        },
                        disabled: !showAccountLinks,
                        mainText: "header.payments",
                        mainCallback: this.props.showSend,
                        subURL: "/transfer"
                    }
                ].map(
                    (
                        {
                            icon,
                            subURL,
                            disabled,
                            mainText,
                            subText,
                            mainCallback
                        },
                        index
                    ) => (
                        <li
                            key={index}
                            className={cnames({
                                active: active.indexOf(subURL) !== -1,
                                disabled
                            })}
                            onClick={
                                disabled
                                    ? event => {
                                          event.stopPropagation();
                                      }
                                    : mainCallback
                            }
                        >
                            <div className="table-cell">
                                <Icon size="2x" {...icon} />
                            </div>
                            <div className="table-cell">
                                <Translate content={mainText} />{" "}
                                <span
                                    onClick={
                                        disabled
                                            ? () => {}
                                            : event => {
                                                  event.stopPropagation();
                                                  this.props.onNavigate.bind(
                                                      this,
                                                      subURL
                                                  )(event);
                                              }
                                    }
                                    className={cnames(
                                        "header-dropdown-sub-link",
                                        {enabled: !disabled}
                                    )}
                                >
                                    <Translate content={subText} />
                                </span>
                            </div>
                        </li>
                    )
                )}

                <li
                    className={cnames(
                        {
                            active: active.indexOf("/settings") !== -1
                        },
                        "divider",
                        "desktop-only"
                    )}
                    onClick={this.props.onNavigate.bind(this, "/settings")}
                >
                    <div className="table-cell">
                        <Icon size="2x" name="cogs" title="icons.cogs" />
                    </div>
                    <div className="table-cell">
                        <Translate content="header.settings" />
                    </div>
                </li>

                <li
                    className={cnames(
                        {
                            active: active.indexOf("/spotlight") !== -1
                        },
                        "divider"
                    )}
                    onClick={this.props.onNavigate.bind(this, "/spotlight")}
                >
                    <div className="table-cell">
                        <Icon
                            size="2x"
                            name="showcases"
                            title="icons.showcases"
                        />
                    </div>
                    <div className="table-cell">
                        <Translate content="header.showcases" />
                    </div>
                </li>

                <li
                    className={cnames(
                        {
                            active: active.indexOf("/settings") !== -1
                        },
                        "divider",
                        "mobile-only",
                        "has-submenu"
                    )}
                    onClick={this.props.toggleDropdownSubmenu}
                >
                    <div className="table-cell">
                        <Icon size="2x" name="cogs" title="icons.cogs" />
                    </div>
                    <div className="table-cell">
                        <Translate content="header.settings" />{" "}
                    </div>
                </li>

                <li
                    className={cnames(
                        {
                            active:
                                active.indexOf(
                                    "/help/introduction/bitshares"
                                ) !== -1
                        },
                        "divider"
                    )}
                    onClick={this.props.onNavigate.bind(
                        this,
                        "/help/introduction/bitshares"
                    )}
                >
                    <div className="table-cell">
                        <Icon
                            size="2x"
                            name="question-circle"
                            title="icons.question_circle"
                        />
                    </div>
                    <div className="table-cell">
                        <Translate content="header.help" />
                    </div>
                </li>

                <li
                    className={cnames({
                        active: active.indexOf("/voting") !== -1,
                        disabled: !showAccountLinks
                    })}
                    onClick={this.props.onNavigate.bind(
                        this,
                        `/account/${currentAccount}/voting`
                    )}
                >
                    <div className="table-cell">
                        <Icon
                            size="2x"
                            name="thumbs-up"
                            title="icons.thumbs_up"
                        />
                    </div>
                    <div className="table-cell">
                        <Translate content="account.voting" />
                    </div>
                </li>
                <li
                    className={cnames({
                        active:
                            active.indexOf("/trezor") !== -1 &&
                            active.indexOf("/account/") !== -1,
                        disabled: !showAccountLinks
                    })}
                    onClick={() =>
                        window.open(
                            "https://beta-wallet.trezor.io/next/#/",
                            "_blank"
                        )
                    }
                >
                    <div className="table-cell">
                        <Icon size="2x" name="shuffle" title="icons.voting" />
                    </div>
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
                    onClick={() =>
                        window.open(
                            "https://shop.ledger.com/pages/ledger-live",
                            "_blank"
                        )
                    }
                >
                    <div className="table-cell">
                        <Icon size="2x" name="voting" title="icons.voting" />
                    </div>
                    <div className="table-cell">
                        <Translate content="explorer.assets.ledger" />
                    </div>
                </li>
                {AccountStore.getState().currentAccount === "meta1" && (
                    <li
                        className={cnames({
                            active:
                                active.indexOf("/assets") !== -1 &&
                                active.indexOf("/account/") !== -1,
                            disabled: !showAccountLinks
                        })}
                        onClick={this.props.onNavigate.bind(
                            this,
                            `/account/${currentAccount}/assets`
                        )}
                    >
                        <div className="table-cell">
                            <Icon
                                size="2x"
                                name="assets"
                                title="icons.assets"
                            />
                        </div>
                        <div className="table-cell">
                            <Translate content="explorer.assets.title" />
                        </div>
                    </li>
                )}
                <li
                    className={cnames({
                        active: active.indexOf("/signedmessages") !== -1,
                        disabled: !showAccountLinks
                    })}
                    onClick={this.props.onNavigate.bind(
                        this,
                        `/account/${currentAccount}/signedmessages`
                    )}
                >
                    <div className="table-cell">
                        <Icon
                            size="2x"
                            name="text"
                            title="icons.text.signed_messages"
                        />
                    </div>
                    <div className="table-cell">
                        <Translate content="account.signedmessages.menuitem" />
                    </div>
                </li>

                <li
                    className={cnames({
                        active: active.indexOf("/member-stats") !== -1,
                        disabled: !showAccountLinks
                    })}
                    onClick={this.props.onNavigate.bind(
                        this,
                        `/account/${currentAccount}/member-stats`
                    )}
                >
                    <div className="table-cell">
                        <Icon
                            size="2x"
                            name="text"
                            title="icons.text.membership_stats"
                        />
                    </div>
                    <div className="table-cell">
                        <Translate content="account.member.stats" />
                    </div>
                </li>

                {isMyAccount ? (
                    <li
                        className={cnames({
                            active: active.indexOf("/vesting") !== -1
                        })}
                        onClick={this.props.onNavigate.bind(
                            this,
                            `/account/${currentAccount}/vesting`
                        )}
                    >
                        <div className="table-cell">
                            <Icon
                                size="2x"
                                name="hourglass"
                                title="icons.hourglass"
                            />
                        </div>
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
                    onClick={this.props.onNavigate.bind(
                        this,
                        `/account/${currentAccount}/whitelist`
                    )}
                >
                    <div className="table-cell">
                        <Icon size="2x" name="list" title="icons.list" />
                    </div>
                    <div className="table-cell">
                        <Translate content="account.whitelist.title" />
                    </div>
                </li>

                <li
                    className={cnames("divider", {
                        active: active.indexOf("/permissions") !== -1,
                        disabled: !showAccountLinks
                    })}
                    onClick={this.props.onNavigate.bind(
                        this,
                        `/account/${currentAccount}/permissions`
                    )}
                >
                    <div className="table-cell">
                        <Icon size="2x" name="warning" title="icons.warning" />
                    </div>
                    <div className="table-cell">
                        <Translate content="account.permissions" />
                    </div>
                </li>

                {showAccountLinks ? (
                    <li
                        className={cnames(
                            {
                                active: active.indexOf("/accounts") !== -1
                            },
                            "divider"
                        )}
                        onClick={this.props.onNavigate.bind(this, "/accounts")}
                    >
                        <div className="table-cell">
                            <Icon
                                size="2x"
                                name="folder"
                                title="icons.folder"
                            />
                        </div>
                        <div className="table-cell">
                            <Translate content="explorer.accounts.title" />
                        </div>
                    </li>
                ) : null}
            </ul>
        );
    }
}
