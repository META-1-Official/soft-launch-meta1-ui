import React from "react";
import Translate from "react-translate-component";
import AccountStore from "stores/AccountStore";
import counterpart from "counterpart";
import {connect} from "alt-react";
import {Form, Modal, Button, Input, Select} from "bitshares-ui-style-guide";
import axios from "axios";

class Withdraw extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState(props);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onAccountNameChange = this.onAccountNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onWithdrawalAddressChange = this.onWithdrawalAddressChange.bind(
            this
        );
        this.onAmountChange = this.onAmountChange.bind(this);
        this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
        this.currencies = {
            eth: "ETH",
            usdt: "USDT"
        };
    }

    showModal() {
        this.setState({
            isModalVisible: true
        });
    }

    hideModal() {
        this.setState({
            isModalVisible: false
        });
    }

    getInitialState() {
        return {
            isModalVisible: false,
            hidden: false,
            accountName: "",
            email: "",
            withdrawalAddress: "",
            accountError: null,
            amount: "",
            amountError: null,
            currency: "eth"
        };
    }

    show() {
        this.setState({open: true, hidden: false}, () => {
            this.showModal();
        });
    }

    onClose(publishClose = true) {
        this.setState(
            {
                open: false,
                accountName: "",
                email: "",
                withdrawalAddress: "",
                accountError: null,
                amount: "",
                amountError: null,
                currency: "eth"
            },
            () => {
                if (publishClose) this.hideModal();
            }
        );
    }

    async onSubmit(e) {
        e.preventDefault();
        const {
            amount,
            currency: crypto,
            accountName: walletName,
            email,
            withdrawalAddress
        } = this.state;
        // console.log("data", email, amount, crypto, walletName, withdrawalAddress);
        const payload = {
            amount,
            crypto,
            walletName,
            withdrawalAddress,
            email
        };
        try {
            const resp2 = await axios.post(
                "https://humankyc.cryptomailsvc.io/apiewallet/withdraw/email",
                {...payload}
            );
            console.log("Resp: ", resp2);
            this.setState({hidden: true});
            this.onClose();
        } catch (err) {
            alert("Error in request");
            console.log(err);
        }
    }

    onAccountNameChange(e) {
        const val = e.target.value;
        this.setState({
            accountName: val,
            accountError: val ? null : "Please enter Wallet Name"
        });
    }

    onEmailChange(e) {
        const val = e.target.value;
        this.setState({
            email: val
        });
    }

    onWithdrawalAddressChange(e) {
        const val = e.target.value;
        this.setState({
            withdrawalAddress: val
        });
    }

    onAmountChange(e) {
        let input = "";
        if (parseFloat(e.target.value) == e.target.value) {
            input = e.target.value.trim();
        } else {
            input =
                parseFloat(e.target.value.trim().replace(/[^\d.-]/g, "")) || "";
        }
        this.setState({
            amount: input,
            amountError: input ? null : "Please enter a valid amount"
        });
    }

    handleCurrencyChange(key) {
        this.setState({currency: key});
    }

    render() {
        let {
            hidden,
            accountName,
            email,
            withdrawalAddress,
            amount,
            accountError,
            amountError
        } = this.state;

        const isSubmitNotValid =
            accountError || amountError || !amount || !accountName;

        let tabIndex = this.props.tabIndex; // Continue tabIndex on props count

        return !this.state.open ? null : (
            <div
                id="withdraw_modal_wrapper"
                className={hidden || !this.state.open ? "hide" : ""}
            >
                <Modal
                    visible={this.state.isModalVisible}
                    id={this.props.id}
                    overlay={true}
                    onCancel={this.hideModal}
                    footer={[
                        <Button
                            key={"withdraw"}
                            disabled={isSubmitNotValid}
                            onClick={
                                !isSubmitNotValid
                                    ? this.onSubmit.bind(this)
                                    : null
                            }
                        >
                            {counterpart.translate("transfer.withdraw")}
                        </Button>,
                        <Button
                            key="Cancel"
                            tabIndex={tabIndex++}
                            onClick={this.onClose}
                        >
                            <Translate
                                component="span"
                                content="transfer.cancel"
                            />
                        </Button>
                    ]}
                >
                    <div className="grid-block vertical no-overflow">
                        {this.state.open ? (
                            <Form className="full-width" layout="vertical">
                                <Form.Item
                                    label={counterpart.translate(
                                        "account.meta_name"
                                    )}
                                    validateStatus={
                                        accountError ? "error" : null
                                    }
                                    help={accountError ? accountError : null}
                                >
                                    <Input
                                        value={accountName}
                                        onChange={this.onAccountNameChange}
                                    />
                                </Form.Item>
                                <Form.Item
                                    label={counterpart.translate(
                                        "account.email_address"
                                    )}
                                >
                                    <Input
                                        value={email}
                                        onChange={this.onEmailChange}
                                    />
                                </Form.Item>
                                <Form.Item
                                    label={counterpart.translate(
                                        "account.withdrawal_address"
                                    )}
                                >
                                    <Input
                                        value={withdrawalAddress}
                                        onChange={
                                            this.onWithdrawalAddressChange
                                        }
                                    />
                                </Form.Item>
                                <Form.Item
                                    label={counterpart.translate(
                                        "transfer.amount"
                                    )}
                                    validateStatus={
                                        amountError ? "error" : null
                                    }
                                    help={amountError ? amountError : null}
                                >
                                    <Input.Group compact={true}>
                                        <Input
                                            value={amount}
                                            onChange={this.onAmountChange}
                                        />
                                        <Select
                                            value={
                                                this.currencies[
                                                    this.state.currency
                                                ]
                                            }
                                            style={{width: "100px"}}
                                            onChange={this.handleCurrencyChange}
                                        >
                                            {Object.keys(this.currencies).map(
                                                key => (
                                                    <Select.Option
                                                        value={key}
                                                        key={key}
                                                    >
                                                        {[this.currencies[key]]}
                                                    </Select.Option>
                                                )
                                            )}
                                        </Select>
                                    </Input.Group>
                                </Form.Item>
                            </Form>
                        ) : null}
                        <div>
                            <strong>Note:</strong> Please send the amount you
                            are requesting to the following address meta1cold.
                            Please note your withdrawal cannot be processed
                            until you send the required amount. For a tutorial
                            on how to send from the lite wallet please click
                            here (link behind text{" "}
                            <a href="https://support.meta1.io/how-to-send-to-another-wallet-on-the-meta-blockchain">
                                https://support.meta1.io/how-to-send-to-another-wallet-on-the-meta-blockchain
                            </a>
                            )
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

class WithdrawConnectWrapper extends React.Component {
    render() {
        return <Withdraw {...this.props} ref={this.props.refCallback} />;
    }
}

WithdrawConnectWrapper = connect(WithdrawConnectWrapper, {
    listenTo() {
        return [AccountStore];
    },
    getProps(props) {
        return {
            // currentAccount: AccountStore.getState().currentAccount,
            // passwordAccount: AccountStore.getState().passwordAccount,
            tabIndex: props.tabIndex || 0
        };
    }
});

export default WithdrawConnectWrapper;
