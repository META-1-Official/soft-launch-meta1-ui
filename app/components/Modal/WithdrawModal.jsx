import React from "react";
import Translate from "react-translate-component";
import {ChainStore} from "meta1js";
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
        this.onAmountChange = this.onAmountChange.bind(this);
        this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
        this.currencies = {
            eth: "ETH",
            usdt: "USDT",
            btc: "BTC"
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
        const {amount, currency: crypto, accountName: walletName} = this.state;
        console.log("Value of form", amount, crypto, walletName);
        const payload = {
            amount,
            crypto,
            walletName
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
            alert(Error in request);
            console.log(err);
        }
    }

    onAmountChanged({amount, asset}) {
        if (!asset) return;

        if (typeof asset !== "object") {
            asset = ChainStore.getAsset(asset);
        }

        this.setState({
            amount,
            asset,
            asset_id: asset.get("id"),
            error: null,
            maxAmount: false
        });
    }

    onAccountNameChange(e) {
        const val = e.target.value;
        this.setState({
            accountName: val,
            accountError: val ? null : "Please enter account Nname"
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
                                        "account.name"
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
