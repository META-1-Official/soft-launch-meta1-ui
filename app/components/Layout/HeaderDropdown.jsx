import React from "react";
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
                            active: active.indexOf("/registration/") !== -1
                        })}
                        onClick={this.props.onNavigate.bind(
                            this,
                            "/registration/"
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
                {/*Send modal */}
                {[
                    {
                        disabled: !showAccountLinks,
                        mainText: "header.payments",
                        mainCallback: this.props.showSend,
                        subURL: "/transfer"
                    }
                ].map(
                    (
                        {subURL, disabled, mainText, subText, mainCallback},
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
                {/*Withdrawal modal */}
                {[
                    {
                        disabled: true,
                        mainText: "header.withdraw",
                        subURL: "/transfer"
                    }
                ].map(
                    (
                        {subURL, disabled, mainText, subText, mainCallback},
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
                            active: active.indexOf("/settings") !== -1,
                            disabled: !showAccountLinks
                        },
                        "mobile-desktop-only",
                        "has-submenu"
                    )}
                    onClick={
                        !showAccountLinks
                            ? event => {
                                  event.stopPropagation();
                              }
                            : this.props.toggleDropdownSubmenuDeposit
                    }
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
                    onClick={this.props.toggleDropdownSubmenuAdvanced}
                >
                    <div className="table-cell">
                        <Translate content="account.advanced" />{" "}
                    </div>
                </li>
            </ul>
        );
    }
}
