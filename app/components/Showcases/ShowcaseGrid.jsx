import React, {Component} from "react";
import {connect} from "alt-react";
import {ChainStore} from "meta1js";
import {createPaperWalletAsPDF} from "common/paperWallet";
import Showcase from "./Showcase";
import AccountStore from "../../stores/AccountStore";

class ShowcaseGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {currentAccount: null};
    }

    componentWillMount() {
        this.setState({
            currentAccount: ChainStore.getAccount(this.props.currentAccount)
        });
    }

    componentWillReceiveProps(np) {
        if (np.currentAccount !== this.props.currentAccount) {
            this.setState({
                currentAccount: ChainStore.getAccount(np.currentAccount)
            });
        }
    }

    render() {
        const {history} = this.props;
        const {currentAccount} = this.state;
        let hasAccount = this.state.currentAccount !== null;

        const tiles = [
            {
                title: "showcases.paper_wallet.title",
                target: () => {
                    if (hasAccount) {
                        createPaperWalletAsPDF(currentAccount);
                    }
                },
                description: "showcases.paper_wallet.description",
                icon: "wallet", // see Icons app/compoentns/Icon/Icon
                disabled: hasAccount
                    ? false
                    : "Please login to use this functionality"
            },
            {
                title: "showcases.barter.title",
                target: () => history.push("/barter"),
                description: "showcases.barter.description",
                icon: "barter",
                disabled: hasAccount
                    ? false
                    : "Please login to use this functionality"
            },
            {
                title: "showcases.borrow.title",
                target: () => {
                    if (hasAccount) {
                        history.push("/borrow");
                    }
                },
                description: "showcases.borrow.description",
                icon: "borrow",
                disabled: hasAccount
                    ? false
                    : "Please login to use this functionality"
            },
            {
                title: "showcases.direct_debit.title",
                target: () => history.push("/direct-debit"),
                description: "showcases.direct_debit.description",
                icon: "htlc",
                disabled: hasAccount
                    ? false
                    : "Please login to use this functionality"
            },
            {
                title: "showcases.htlc.title",
                target: () => history.push("/htlc"),
                description: "showcases.htlc.description",
                icon: "direct_debit",
                disabled: hasAccount
                    ? false
                    : "Please login to use this functionality"
            },
            {
                title: "showcases.prediction_market.title",
                target: () => history.push("/prediction"),
                description: "showcases.prediction_market.description",
                icon: "prediction",
                disabled: hasAccount
                    ? false
                    : "Please login to use this functionality"
            },
            {
                title: "showcases.timed_transfer.title",
                target: () => {},
                description: "showcases.timed_transfer.description",
                icon: "alarm",
                disabled: true,
                comingSoon: true
            }
            // .... even more tiles in this list
        ];

        return (
            <div
                className="overflow-visible showcases-grid"
                style={{
                    align: "center"
                }}
            >
                <div className="showcases-grid--wrapper">
                    {tiles.map(
                        ({
                            target,
                            title,
                            description,
                            icon,
                            disabled,
                            comingSoon
                        }) => {
                            return (
                                <div
                                    key={title}
                                    className="showcases-grid--wrapper--item"
                                >
                                    {!!disabled ? (
                                        <Showcase
                                            target={target}
                                            title={title}
                                            description={description}
                                            icon={icon}
                                            disabled={disabled}
                                            comingSoon={comingSoon || false}
                                        />
                                    ) : (
                                        <Showcase
                                            target={target}
                                            title={title}
                                            description={description}
                                            icon={icon}
                                        />
                                    )}
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        );
    }
}

ShowcaseGrid = connect(ShowcaseGrid, {
    listenTo() {
        return [AccountStore];
    },
    getProps() {
        return {
            currentAccount:
                AccountStore.getState().currentAccount ||
                AccountStore.getState().passwordAccount
        };
    }
});

export default ShowcaseGrid;
