import React from "react";
import utils from "common/utils";
import {DecimalChecker} from "../Utility/DecimalChecker";
import counterpart from "counterpart";
import {Modal, Button} from "bitshares-ui-style-guide";
import CopyButton from "../Utility/CopyButton";
import AccountStore from "stores/AccountStore";

class DepositModalContent extends DecimalChecker {
    constructor() {
        super();

        this.state = {
            depositAddress: "",
            depositMemo: ""
        };
    }

    onClose() {
        this.props.hideModal();
    }

    _copy(e) {
        try {
            if (this.state.depositAddress)
                e.clipboardData.setData(
                    "text/plain",
                    this.state.depositAddress
                );
            else
                e.clipboardData.setData(
                    "text/plain",
                    counterpart
                        .translate("gateway.use_copy_button")
                        .toUpperCase()
                );
            e.preventDefault();
        } catch (err) {
            console.error(err);
        }
    }

    componentWillUnmount() {
        document.removeEventListener("copy", this._copy);
    }

    toClipboard(clipboardText) {
        try {
            this.setState({clipboardText}, () => {
                document.execCommand("copy");
            });
        } catch (err) {
            console.error(err);
        }
    }

    componentDidMount() {
        (() => {
            fetch("https://asterope.meta-exchange.info/api/wallet/init/eos", {
                method: "POST",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest"
                },
                body: JSON.stringify({
                    metaId: AccountStore.getState().currentAccount
                })
            })
                .then(res => res.json())
                .then(response => {
                    let address = response.address;
                    let memo = response.memo;
                    console.log(address);
                    console.log(memo);
                    this.setState({depositAddress: address});
                    this.setState({depositMemo: memo});
                });
        })();
    }

    shouldComponentUpdate(np, ns) {
        return !utils.are_equal_shallow(ns, this.state);
    }

    render() {
        return (
            <div>
                <h5>Your deposit address for EOS:</h5>
                <div
                    style={{
                        display: "flex",
                        color: "black",
                        marginTop: "-15px",
                        marginBottom: "-15px"
                    }}
                >
                    <input
                        readOnly
                        style={{height: "46px", width: "100%"}}
                        value={this.state.depositAddress}
                    />
                    <CopyButton text={this.state.depositAddress} />
                </div>
                <h5>MEMO:</h5>
                <div
                    style={{
                        display: "flex",
                        color: "black",
                        marginTop: "-15px"
                    }}
                >
                    <input
                        readOnly
                        style={{height: "46px", width: "100%"}}
                        value={this.state.depositMemo}
                    />
                    <CopyButton text={this.state.depositMemo} />
                </div>
                <h6>
                    <b>IMPORTANT:</b> Deposits without MEMO will not be
                    credited! Send only EOS to this deposit address. Sending
                    less than 0.01 EOS or any other currency to this address may
                    result in the loss of your deposit.
                </h6>
            </div>
        );
    }
}

export default class DepositModal extends React.Component {
    constructor() {
        super();

        this.state = {open: false};
    }

    show() {
        this.setState({open: true}, () => {
            this.props.hideModalMeta();
        });
    }

    onClose() {
        this.props.hideModalMeta();
        this.setState({open: false});
    }

    render() {
        return (
            <Modal
                title={
                    this.props.account
                        ? counterpart.translate("modal.deposit.header", {
                              account_name: this.props.account
                          })
                        : counterpart.translate("modal.deposit.header_short")
                }
                id={this.props.modalId}
                className={this.props.modalId}
                onCancel={this.onClose.bind(this)}
                overlay={true}
                footer={[
                    <Button key="cancel" onClick={this.props.hideModalMeta}>
                        {counterpart.translate("modal.close")}
                    </Button>
                ]}
                visible={this.props.visibleMeta}
                noCloseBtn
            >
                <DepositModalContent
                    hideModal={this.props.hideModalMeta}
                    {...this.props}
                    open={this.props.visibleMeta}
                />
            </Modal>
        );
    }
}
