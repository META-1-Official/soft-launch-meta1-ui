import React from "react";
import Icon from "../Icon/Icon";
import Translate from "react-translate-component";
import cnames from "classnames";
import AccountActions from "actions/AccountActions";

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
            currentAccount,
            contacts
        } = this.props;

        let isContact = contacts.has(currentAccount);

        return (
            <ul
                className="dropdown header-menu"
                style={{
                    left: -200,
                    top: 40,
                    maxHeight: !dropdownActive ? 0 : maxHeight,
                    overflowY: "auto"
                }}
            >
                <li className="divider" onClick={toggleLock}>
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
                        <Translate content="header.arts" />
                    </div>
                </li>

                {[
                    {
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
                                <Translate content={mainText} />{" "}
                                {subText && (
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
                                )}
                            </div>
                        </li>
                    )
                )}
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
                        <Translate content="modal.deposit.header_short_w" />{" "}
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
                    onClick={this.props.toggleDropdownSubmenuAdvanced}
                >
                    <div className="table-cell">
                        <Translate content="account.advanced" />{" "}
                    </div>
                </li>
                {/* <li
                    style={{flexFlow: "row"}}
                    className={cnames(
                        active.indexOf("arts") !== -1 ? null : "column-hide-xs",
                        {
                            active: active.indexOf("arts") !== -1
                        }
                    )}
                    onClick={this.props.onNavigate.bind(this, "/arts")}
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
                        active.indexOf("help") !== -1 ? null : "column-hide-xs",
                        {
                            active: active.indexOf("help") !== -1
                        }
                    )}
                    onClick={this.props.onNavigate.bind(this, "/help")}
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
                        {
                            active: active.indexOf("/settings") !== -1
                        },
                        "divider",
                        "desktop-only"
                    )}
                    onClick={this.props.onNavigate.bind(this, "/settings")}
                >
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
                        <Translate content="header.settings" />{" "}
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
                        <Translate content="explorer.assets.ledger" />
                    </div>
                </li>
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
                            <Translate content="explorer.accounts.title" />
                        </div>
                    </li> 
                ) : null} */}
            </ul>
        );
    }
}
