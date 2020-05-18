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
            fetch("https://api.meta1.io/api/wallet/init/eos", {
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
                <h5>Minimum deposit: 0.1 EOS</h5>
                <div
                    className="grid-block container-row"
                    style={{paddingBottom: "1rem"}}
                >
                    <div style={{paddingRight: "1rem"}}>
                        <CopyButton
                            text={this.state.depositAddress}
                            className={"copyIcon"}
                        />
                    </div>
                    <div style={{wordBreak: "break-word"}}>
                        <div
                            style={{
                                fontSize: "0.8rem",
                                fontWeight: "bold",
                                paddingBottom: "0.3rem"
                            }}
                        >
                            Your deposit address for EOS:
                        </div>
                        <div
                            className="modal__highlight"
                            style={{
                                fontSize: "0.9rem",
                                wordBreak: "break-all"
                            }}
                        >
                            {this.state.depositAddress}
                        </div>
                    </div>
                </div>
                <div className="grid-block container-row">
                    <div style={{paddingRight: "1rem"}}>
                        <CopyButton
                            text={this.state.depositMemo}
                            className={"copyIcon"}
                        />
                    </div>
                    <div style={{wordBreak: "break-word"}}>
                        <div
                            style={{
                                fontSize: "0.8rem",
                                fontWeight: "bold",
                                paddingBottom: "0.3rem"
                            }}
                        >
                            Memo required for proper routing to your account
                        </div>
                        <div
                            className="modal__highlight"
                            style={{
                                fontSize: "0.9rem",
                                wordBreak: "break-all"
                            }}
                        >
                            {this.state.depositMemo}
                        </div>
                    </div>
                </div>
                <h6>
                    <b>IMPORTANT:</b> Send only EOS to this deposit address.
                    Sending less than 0.1 EOS or any other currency to this
                    address may result in the loss of your deposit.
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
