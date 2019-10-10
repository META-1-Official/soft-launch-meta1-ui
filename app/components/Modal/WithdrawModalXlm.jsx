import React from "react";
import utils from "common/utils";
import {DecimalChecker} from "../Utility/DecimalChecker";
import WalletUnlockActions from "actions/WalletUnlockActions";
import counterpart from "counterpart";
import ReactTooltip from "react-tooltip";
import {Modal, Button} from "bitshares-ui-style-guide";
import AccountStore from "stores/AccountStore";
import WalletUnlockStore from "stores/WalletUnlockStore";
import WalletDb from "stores/WalletDb";
import PrivateKeyStore from "stores/PrivateKeyStore";
import CAValidator from "cryptocurrency-address-validator";
import swal from "sweetalert";

class WithdrawModalContent extends DecimalChecker {
    constructor() {
        super();

        this.state = {
            depositAddress: "",
            wif: "",
            amount: "",
            address: "",
            memo: "",
            submitted: "Empty Address Field"
        };
    }

    onClose() {
        this.props.hideModal();
    }

    withdrawBtc(e) {
        e.preventDefault();
        WalletUnlockActions.unlock()
            .then(() => {
                ReactTooltip.rebuild();
            })
            .then(() => {
                const keys = PrivateKeyStore.getState().keys;
                let private_key = WalletDb.getPrivateKey(
                    keys._root.entries[0][0]
                );
                let privatekey = private_key.toWif();
                fetch("https://asterope.meta-exchange.info/wxlm", {
                    method: "POST",
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json",
                        "X-Requested-With": "XMLHttpRequest"
                    },
                    body: JSON.stringify({
                        account: {
                            amount: this.state.amount,
                            btsid: AccountStore.getState().currentAccount,
                            address: this.state.address,
                            memo: this.state.memo,
                            privatekey
                        }
                    })
                })
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        swal("Oops!", error, "error");
                    });
            })
            .then(() => {
                swal("Success!", "Submitted to the server!", "success");
            })
            .catch(error => {
                swal("Oops!", error, "error");
            });
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

    handleAmount(event) {
        this.setState({
            amount: event.target.value
        });
    }

    handleAddress = evt => {
        evt.preventDefault();

        this.setState(
            {
                address: evt.target.value
            },
            function() {
                if (this.state.address !== "") {
                    let valid = CAValidator.validate(
                        this.state.address,
                        "XLM",
                        "testnet"
                    );
                    if (valid) {
                        this.setState({submitted: "Correct!"});
                    } else {
                        this.setState({submitted: "Incorrect!"});
                    }
                }
            }
        );
    };

    handleMemo(event) {
        this.setState({
            memo: event.target.value
        });
    }

    componentDidMount() {
        if (!WalletUnlockStore.getState().locked) {
            const keys = PrivateKeyStore.getState().keys;
            let private_key = WalletDb.getPrivateKey(keys._root.entries[0][0]);
            this.setState({wif: private_key.toWif()});
        }
    }

    shouldComponentUpdate(np, ns) {
        return !utils.are_equal_shallow(ns, this.state);
    }

    render() {
        return (
            <div>
                <h1>Withdraw (beta)</h1>
                <br />
                <form onSubmit={this.withdrawBtc.bind(this)}>
                    <div>Amount of Stellar</div>
                    <br />
                    <input
                        onChange={this.handleAmount.bind(this)}
                        type="number"
                        min="0.01"
                        max="7500"
                        step="0.000001"
                        required
                    />
                    <br />
                    <div>Your Stellar address to withdraw</div>
                    <br />
                    <input
                        onChange={this.handleAddress.bind(this)}
                        type="text"
                        placeholder="Address...."
                        required
                    />
                    <span>
                        <b>{this.state.submitted}</b>
                    </span>
                    <br />
                    <div>MEMO</div>
                    <br />
                    <input
                        onChange={this.handleMemo.bind(this)}
                        type="text"
                        required
                    />
                    <br />
                    <div>Fee</div>
                    <br />
                    <input
                        style={{color: "silver"}}
                        value="0.02 META1"
                        type="text"
                        readOnly
                    />
                    <br />
                    <button className="button" type="submit">
                        Withdraw
                    </button>
                </form>
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
                        ? counterpart.translate("modal.deposit.header_w", {
                              account_name: this.props.account
                          })
                        : counterpart.translate("modal.deposit.header_short_w")
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
                <WithdrawModalContent
                    hideModal={this.props.hideModalMeta}
                    {...this.props}
                    open={this.props.visibleMeta}
                />
            </Modal>
        );
    }
}
