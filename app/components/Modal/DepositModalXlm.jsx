import React from "react";
import utils from "common/utils";
import {DecimalChecker} from "../Utility/DecimalChecker";
import counterpart from "counterpart";
import {Modal, Button} from "bitshares-ui-style-guide";
import CopyButton from "../Utility/CopyButton";
import AccountStore from "stores/AccountStore";

class DepositModalContent extends React.Component {
    constructor() {
        super();
    }

    onClose() {
        this.props.hideModal();
    }

    _copy(e) {
        try {
            if (this.props.depositAddress)
                e.clipboardData.setData(
                    "text/plain",
                    this.props.depositAddress
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

    render() {
        return (
            <div>
                <h5>Minimum deposit: 0.1 XLM</h5>
                <div
                    className="grid-block container-row"
                    style={{paddingBottom: "1rem"}}
                >
                    <div style={{paddingRight: "1rem"}}>
                        <CopyButton
                            text={this.props.depositAddress}
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
                            Your deposit address for XLM:
                        </div>
                        {this.props.depositAddress == "Gateway is down" ? (
                            <div
                                className="modal__highlight"
                                style={{
                                    fontSize: "0.9rem",
                                    wordBreak: "break-all",
                                    color: "#ff9900",
                                    fontWeight: "bold"
                                }}
                            >
                                {this.props.depositAddress}
                            </div>
                        ) : (
                            <div
                                className="modal__highlight"
                                style={{
                                    fontSize: "0.9rem",
                                    wordBreak: "break-all"
                                }}
                            >
                                {this.props.depositAddress}
                            </div>
                        )}
                    </div>
                </div>
                <div className="grid-block container-row">
                    <div style={{paddingRight: "1rem"}}>
                        <CopyButton
                            text={this.props.depositMemo}
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
                            {this.props.depositMemo}
                        </div>
                    </div>
                </div>
                <h6>
                    <b>IMPORTANT:</b> Send only XLM to this deposit address.
                    Sending less than 0.1 XLM or any other currency to this
                    address may result in the loss of your deposit.
                </h6>
            </div>
        );
    }
}

export default class DepositModal extends React.Component {
    constructor() {
        super();

        this.state = {
            open: false,
            depositAddress: "",
            depositMemo: ""
        };
    }

    show() {
        this.setState({open: true}, () => {
            this.props.hideModalMeta();
        });
    }

    getDepositAddress() {
        fetch("https://api.meta1.io/api")
            .then(response => {
                fetch("https://api.meta1.io/api/wallet/init/xlm", {
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
            })
            .catch(error => {
                this.setState({depositAddress: "Gateway is down"});
            });
    }

    componentDidMount() {
        this.getDepositAddress();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.account !== this.props.account) this.getDepositAddress();
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
                    account={this.props.account}
                    depositAddress={this.state.depositAddress}
                    depositMemo={this.state.depositMemo}
                    hideModal={this.props.hideModalMeta}
                    {...this.props}
                    open={this.props.visibleMeta}
                />
            </Modal>
        );
    }
}
