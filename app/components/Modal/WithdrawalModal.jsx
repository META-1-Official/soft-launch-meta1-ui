import React from "react";
import ZfApi from "react-foundation-apps/src/utils/foundation-api";
import Translate from "react-translate-component";
import {ChainStore} from "meta1js";
import AmountSelector from "../Utility/AmountSelectorStyleGuide";
import AccountStore from "stores/AccountStore";
import TransactionConfirmStore from "stores/TransactionConfirmStore";
import {Asset} from "common/MarketClasses";
import {isNaN} from "lodash-es";
import {checkBalance} from "common/trxHelper";
import BalanceComponent from "../Utility/BalanceComponent";
import utils from "common/utils";
import counterpart from "counterpart";
import {connect} from "alt-react";
import {
    Form,
    Modal,
    Button,
    Tooltip,
    Input,
    Notification
} from "bitshares-ui-style-guide";
import WalletUnlockActions from "actions/WalletUnlockActions";
import ReactTooltip from "react-tooltip";
import WalletDb from "stores/WalletDb";
import PrivateKeyStore from "stores/PrivateKeyStore";
import WAValidator from "@swyftx/api-crypto-address-validator";
import swal from "sweetalert";
import LoadingIndicator from "../LoadingIndicator";

const getUninitializedFeeAmount = () =>
    new Asset({amount: 0, asset_id: "1.3.1"});

class WithdrawalModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState(props);
        this.nestedRef = null;

        this.onTrxIncluded = this.onTrxIncluded.bind(this);
        this._checkBalance = this._checkBalance.bind(this);

        ZfApi.subscribe("transaction_confirm_actions", (name, msg) => {
            if (msg == "close") {
                this.setState({hidden: false});
                this.hideModal();
            }
        });

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.onClose = this.onClose.bind(this);
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
            loading: false,
            isModalVisible: false,
            from_name: "",
            from_account: null,
            orig_account: null,
            amount: "",
            asset_id: null,
            asset: null,
            memo: "",
            error: null,
            knownScammer: null,
            propose: false,
            propose_account: "",
            feeAmount: getUninitializedFeeAmount(),
            maxAmount: false,
            hidden: false,
            depositAddress: "",
            wif: "",
            address: "",
            submitted: "Empty Address Field",
            code: ""
        };
    }

    show() {
        this.setState({open: true, hidden: false}, () => {
            this.showModal();
            this._initForm();
        });
    }

    onClose(publishClose = true) {
        ZfApi.unsubscribe("transaction_confirm_actions");
        this.setState(
            {
                loading: false,
                open: false,
                from_name: "",
                from_account: null,
                orig_account: null,
                amount: "",
                asset_id: null,
                asset: null,
                memo: "",
                error: null,
                knownScammer: null,
                propose: false,
                propose_account: "",
                feeAmount: getUninitializedFeeAmount(),
                maxAmount: false,
                hidden: false,
                depositAddress: "",
                wif: "",
                address: "",
                submitted: "Empty Address Field",
                code: ""
            },
            () => {
                if (publishClose) this.hideModal();
            }
        );
    }

    withdraw(e) {
        e.preventDefault();
        let {from_account, asset, amount} = this.state;

        const sendAmount = new Asset({
            real: amount,
            asset_id: asset.get("id"),
            precision: asset.get("precision")
        });

        let amountToSend =
            (sendAmount.getAmount() * 1) / Math.pow(10, sendAmount.precision);

        const minWithdrawal = {
            BTC: 0.001,
            ETH: 0.02,
            LTC: 0.002,
            EOS: 0.2,
            XLM: 0.02,
            BNB: 0.002,
            USDT: 2
        };

        if (amountToSend < minWithdrawal[asset.get("symbol")]) {
            swal(
                "Amount is too small",
                asset.get("symbol") +
                    " Minimum Withdrawal: " +
                    minWithdrawal[asset.get("symbol")],
                "error"
            );
            return;
        }

        const withdrawalFee = {
            BTC: 0.0005,
            ETH: 0.01,
            LTC: 0.001,
            EOS: 0.1,
            XLM: 0.01,
            BNB: 0.001,
            USDT: 1
        };
        let fee = withdrawalFee[asset.get("symbol")];

        let account_balances = from_account.get("balances").toJS();
        let balance_id = account_balances[asset.get("id")];
        let balanceObject = ChainStore.getObject(balance_id);
        let transferAsset = ChainStore.getObject(asset.get("id"));
        let balance = new Asset({
            amount: balanceObject.get("balance"),
            asset_id: transferAsset.get("id"),
            precision: transferAsset.get("precision")
        });
        let totalBalance = balance.getAmount({real: true});

        if (amountToSend > totalBalance - fee) {
            amountToSend -= fee;
        }

        WalletUnlockActions.unlock()
            .then(() => {
                ReactTooltip.rebuild();
            })
            .then(() => {
                this.setState({loading: true});
                const keys = PrivateKeyStore.getState().keys;
                let key = "";

                keys._root.entries.every(element => {
                    key = element[0];
                    if (
                        element[1].import_account_names[0] ==
                        from_account.get("name")
                    )
                        return false;
                    else return true;
                });

                let private_key = WalletDb.getPrivateKey(key);

                let privatekey = private_key.toWif();

                var url = "";
                if (asset.get("symbol") == "USDT")
                    url = "https://gateway.dev.meta1.io/usdt";
                else
                    url =
                        "https://api.dev.meta1.io/api/withdraw/" +
                        asset.get("symbol");

                fetch(url, {
                    method: "POST",
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json",
                        "X-Requested-With": "XMLHttpRequest"
                    },
                    body: JSON.stringify({
                        account: {
                            amount: amountToSend,
                            metaId: AccountStore.getState().currentAccount,
                            address: this.state.address,
                            memo: this.state.memo,
                            privatekey
                        }
                    })
                })
                    .then(res => {
                        return res.json();
                    })
                    .then(data => {
                        console.log(data);
                        this.setState({loading: false});
                        if (data.txid === undefined)
                            swal("Oops!", "Something went wrong!", "error", {
                                customClass: "swal-modal"
                            }).then(() => this.onClose());
                        else
                            swal("Success!", "TxID: " + data.txid, "success", {
                                customClass: "swal-modal"
                            }).then(() => this.onClose());
                    })
                    .catch(error => {
                        swal("Oops!", error, "error", {
                            customClass: "swal-modal"
                        });
                    });
            })
            .catch(error => {
                swal("Oops!", error, "error", {
                    customClass: "swal-modal"
                });
            });
    }

    handleAddress = evt => {
        evt.preventDefault();

        const {asset} = this.state;
        this.setState(
            {
                address: evt.target.value
            },
            function() {
                if (this.state.address !== "") {
                    if (
                        asset.get("symbol") == "LTC" &&
                        this.state.address.match(
                            /^[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}$/
                        )
                        //this.state.address.match(/^tltc.*$/)
                    )
                        return this.setState({submitted: "Correct!"});
                    if (
                        asset.get("symbol") == "BNB" &&
                        this.state.address.match(/^(bnb)([a-z0-9]{39})$/)
                    )
                        return this.setState({submitted: "Correct!"});
                    let valid = WAValidator.validate(
                        this.state.address,
                        asset.get("symbol"),
                        "mainnet"
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

    _initForm() {
        if (this.props.from_name) {
            this.setState({
                from_name: this.props.from_name,
                from_account: ChainStore.getAccount(this.props.from_name)
            });
        }

        let {currentAccount} = this.props;
        if (!this.state.from_name) {
            this.setState({from_name: currentAccount});
        }

        if (
            this.props.asset_id &&
            this.state.asset_id !== this.props.asset_id
        ) {
            let asset = ChainStore.getAsset(this.props.asset_id);
            if (asset) {
                this.setState({
                    asset_id: this.props.asset_id,
                    asset
                });
            }
        }
    }

    shouldComponentUpdate(np, ns) {
        let {asset_types: current_types} = this._getAvailableAssets();
        let {asset_types: next_asset_types} = this._getAvailableAssets(ns);

        if (next_asset_types.length === 1) {
            let asset = ChainStore.getAsset(next_asset_types[0]);
            if (current_types.length !== 1) {
                this.onAmountChanged({amount: ns.amount, asset});
            }
        }

        if (ns.open && !this.state.open) this._checkBalance(ns);
        if (!ns.open && !this.state.open) return false;
        return true;
    }

    componentWillReceiveProps(np) {
        if (
            np.currentAccount !== this.state.from_name &&
            np.currentAccount !== this.props.currentAccount
        ) {
            this.setState({
                from_name: np.from_name,
                from_account: ChainStore.getAccount(np.from_name),
                feeAmount: getUninitializedFeeAmount()
            });
        }
    }

    _checkBalance() {
        const {feeAmount, amount, from_account, asset} = this.state;
        if (!asset || !from_account) return;
        const balanceID = from_account.getIn(["balances", asset.get("id")]);
        const feeBalanceID = from_account.getIn([
            "balances",
            feeAmount.asset_id
        ]);
        if (!asset || !from_account) return;
        if (!balanceID) return this.setState({balanceError: true});
        let balanceObject = ChainStore.getObject(balanceID);
        let feeBalanceObject = feeBalanceID
            ? ChainStore.getObject(feeBalanceID)
            : null;
        if (!feeBalanceObject || feeBalanceObject.get("balance") === 0) {
            this.setState({feeAmount: getUninitializedFeeAmount()});
        }
        if (!balanceObject || !feeAmount) return;
        if (!amount) return this.setState({balanceError: false});
        const hasBalance = checkBalance(
            amount,
            asset,
            feeAmount,
            balanceObject
        );
        if (hasBalance === null) return;
        this.setState({balanceError: !hasBalance});
    }

    _setTotal(asset_id, balance_id) {
        const {feeAmount} = this.state;
        let balanceObject = ChainStore.getObject(balance_id);
        let transferAsset = ChainStore.getObject(asset_id);

        if (balanceObject) {
            let balance = new Asset({
                amount: balanceObject.get("balance"),
                asset_id: transferAsset.get("id"),
                precision: transferAsset.get("precision")
            });
            if (feeAmount.asset_id === balance.asset_id) {
                balance.minus(feeAmount);
            }
            this.setState(
                {maxAmount: true, amount: balance.getAmount({real: true})},
                this._checkBalance
            );
        }
    }

    _getAvailableAssets(state = this.state) {
        const {from_account, from_error} = state;
        let asset_types = [];
        if (!(from_account && from_account.get("balances") && !from_error)) {
            return {asset_types};
        }
        let account_balances = state.from_account.get("balances").toJS();
        asset_types = Object.keys(account_balances).sort(utils.sortID);
        for (let key in account_balances) {
            let balanceObject = ChainStore.getObject(account_balances[key]);
            if (balanceObject && balanceObject.get("balance") === 0) {
                asset_types.splice(asset_types.indexOf(key), 1);
            }
        }
        var indexOfMeta1 = asset_types.indexOf("1.3.0");
        if (indexOfMeta1 > -1) {
            asset_types.splice(indexOfMeta1, 1);
        }
        return {asset_types};
    }

    setNestedRef(ref) {
        this.nestedRef = ref;
    }

    fromChanged(from_name) {
        this.setState({from_name});
    }

    onFromAccountChanged(from_account) {
        this.setState({from_account});
    }

    onAmountChanged({amount, asset}) {
        if (!asset) return;

        if (typeof asset !== "object") {
            asset = ChainStore.getAsset(asset);
        }

        this.setState(
            {
                amount,
                asset,
                asset_id: asset.get("id"),
                error: null,
                maxAmount: false
            },
            function() {
                //this._checkBalance,
                const {feeAmount, amount, from_account, asset} = this.state;
                if (!asset || !from_account) return;
                const balanceID = from_account.getIn([
                    "balances",
                    asset.get("id")
                ]);
                const feeBalanceID = from_account.getIn([
                    "balances",
                    feeAmount.asset_id
                ]);
                if (!asset || !from_account) return;
                if (!balanceID) return this.setState({balanceError: true});
                let balanceObject = ChainStore.getObject(balanceID);
                let feeBalanceObject = feeBalanceID
                    ? ChainStore.getObject(feeBalanceID)
                    : null;
                if (
                    !feeBalanceObject ||
                    feeBalanceObject.get("balance") === 0
                ) {
                    this.setState({feeAmount: getUninitializedFeeAmount()});
                }
                if (!balanceObject || !feeAmount) return;
                if (!amount) return this.setState({balanceError: false});
                const hasBalance = checkBalance(
                    amount,
                    asset,
                    feeAmount,
                    balanceObject
                );
                if (hasBalance === null) return;
                this.setState({balanceError: !hasBalance});

                //this.handleAddress
                if (this.state.address !== "") {
                    let valid = WAValidator.validate(
                        this.state.address,
                        asset.get("symbol"),
                        "mainnet"
                    );
                    if (valid) {
                        this.setState({submitted: "Correct!"});
                    } else {
                        this.setState({submitted: "Incorrect!"});
                    }
                }
            }
        );
    }

    onCodeChange(e) {
        const value = e.currentTarget.value;
        this.setState({code: value});
    }

    onMemoChanged(e) {
        let {asset_types} = this._getAvailableAssets();
        let {from_account, from_error, maxAmount} = this.state;
        if (
            from_account &&
            from_account.get("balances") &&
            !from_error &&
            maxAmount
        ) {
            let account_balances = from_account.get("balances").toJS();
            let current_asset_id = asset_types[0];
        }
        this.setState({memo: e.target.value}, this._checkBalance);
    }

    onTrxIncluded(confirm_store_state) {
        if (
            confirm_store_state.included &&
            confirm_store_state.broadcasted_transaction
        ) {
            TransactionConfirmStore.unlisten(this.onTrxIncluded);
            TransactionConfirmStore.reset();
        } else if (confirm_store_state.closed) {
            TransactionConfirmStore.unlisten(this.onTrxIncluded);
            TransactionConfirmStore.reset();
        }
    }

    onPropose = () => {
        let {propose, orig_account, from_account, from_name} = this.state;

        // Store Original Account
        if (!propose) {
            this.setState({orig_account: from_account});
        }

        // ReStore Original Account
        if (propose) {
            from_account = orig_account;
            from_name = orig_account.get("name");
        }

        // toggle switch
        propose = propose ? false : true;

        this.setState({
            propose,
            propose_account: propose ? from_account : null,
            from_account: propose ? null : from_account,
            from_name: propose ? "" : from_name
        });
    };

    onProposeAccount(propose_account) {
        this.setState({propose_account});
    }

    render() {
        let {
            propose,
            from_account,
            asset,
            asset_id,
            propose_account,
            feeAmount,
            amount,
            from_name,
            memo,
            balanceError,
            hidden,
            address,
            submitted,
            code,
            loading
        } = this.state;

        const memoAssets = ["EOS", "XLM", "BNB"];

        let from_my_account =
            AccountStore.isMyAccount(from_account) ||
            from_name === this.props.passwordAccount;
        let from_error =
            from_account && !from_my_account && !propose ? true : false;

        let {asset_types} = this._getAvailableAssets();
        let balance = null;

        if (from_account && from_account.get("balances") && !from_error) {
            let account_balances = from_account.get("balances").toJS();
            let _error = this.state.balanceError ? "has-error" : "";
            if (asset_types.length === 1)
                asset = ChainStore.getAsset(asset_types[0]);
            if (asset_types.length > 0) {
                let current_asset_id = asset ? asset.get("id") : asset_types[0];

                balance = (
                    <span>
                        <Translate
                            component="span"
                            content="transfer.available"
                        />
                        :{" "}
                        <span
                            className={_error}
                            style={{
                                borderBottom: "#A09F9F 1px dotted",
                                cursor: "pointer"
                            }}
                            onClick={this._setTotal.bind(
                                this,
                                current_asset_id,
                                account_balances[current_asset_id],
                                feeAmount.getAmount({real: true}),
                                feeAmount.asset_id
                            )}
                        >
                            <BalanceComponent
                                balance={account_balances[current_asset_id]}
                            />
                        </span>
                    </span>
                );
            } else {
                balance = (
                    <span>
                        <span className={_error}>
                            <Translate content="transfer.errors.noFunds" />
                        </span>
                    </span>
                );
            }
        }

        let propose_incomplete = propose && !propose_account;
        const amountValue = parseFloat(
            String.prototype.replace.call(amount, /,/g, "")
        );
        const isAmountValid = amountValue && !isNaN(amountValue);
        const isCodeValid = true;

        const isSubmitNotValid =
            !from_account ||
            !isAmountValid ||
            !asset ||
            from_error ||
            propose_incomplete ||
            balanceError ||
            !address ||
            submitted == "Incorrect!" ||
            !isCodeValid ||
            loading;

        let tabIndex = this.props.tabIndex; // Continue tabIndex on props count

        //console.log(this.state.loading);

        return !this.state.open ? null : (
            <div
                id="send_modal_wrapper"
                className={hidden || !this.state.open ? "hide" : ""}
            >
                <Modal
                    visible={this.state.isModalVisible}
                    title={
                        from_account && from_account.get("name")
                            ? counterpart.translate("modal.deposit.header_w", {
                                  account_name: from_account.get("name")
                              })
                            : counterpart.translate(
                                  "modal.deposit.header_short_w"
                              )
                    }
                    id={this.props.id}
                    overlay={true}
                    onCancel={this.hideModal}
                    footer={[
                        <Button
                            key={"send"}
                            disabled={isSubmitNotValid}
                            onClick={
                                !isSubmitNotValid
                                    ? this.withdraw.bind(this)
                                    : null
                            }
                        >
                            {propose
                                ? counterpart.translate("propose")
                                : counterpart.translate("transfer.withdraw")}
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
                    {this.state.loading ? (
                        <div
                            style={{
                                display: "inline-flex",
                                marginBottom: "15px"
                            }}
                        >
                            <span>
                                <LoadingIndicator type="three-bounce" />
                            </span>
                            <span
                                style={{marginLeft: "10px", color: "#00a9e9"}}
                            >
                                (Pending Transaction)
                            </span>
                        </div>
                    ) : null}
                    <div className="grid-block vertical no-overflow">
                        {this.state.open ? (
                            <Form className="full-width" layout="vertical">
                                <AmountSelector
                                    label="transfer.amount"
                                    amount={amount}
                                    onChange={this.onAmountChanged.bind(this)}
                                    asset={
                                        asset_types.length > 0 && asset
                                            ? asset.get("id")
                                            : asset_id
                                            ? asset_id
                                            : asset_types[0]
                                    }
                                    assets={asset_types}
                                    display_balance={balance}
                                    tabIndex={tabIndex++}
                                    allowNaN={true}
                                />

                                <Form.Item
                                    label={
                                        this.state.submitted == "Incorrect!" ? (
                                            <b
                                                className="has-error"
                                                style={{fontWeight: "normal"}}
                                            >
                                                {"Address " +
                                                    this.state.submitted}
                                            </b>
                                        ) : (
                                            counterpart.translate(
                                                "transfer.withdrawal_address"
                                            )
                                        )
                                    }
                                >
                                    <Input
                                        onChange={this.handleAddress.bind(this)}
                                        placeholder="Your address to withdraw"
                                    />
                                </Form.Item>

                                {asset_types.length > 0 &&
                                asset &&
                                memoAssets.includes(asset.get("symbol")) ? (
                                    <Form.Item
                                        label={counterpart.translate(
                                            "transfer.memo"
                                        )}
                                        validateStatus={
                                            memo && propose ? "warning" : ""
                                        }
                                        help={
                                            memo && propose
                                                ? counterpart.translate(
                                                      "transfer.warn_name_unable_read_memo"
                                                  )
                                                : ""
                                        }
                                    >
                                        <Tooltip
                                            placement="top"
                                            title={counterpart.translate(
                                                "tooltip.memo_tip"
                                            )}
                                        >
                                            <Input.TextArea
                                                style={{marginBottom: 0}}
                                                rows={3}
                                                value={memo}
                                                tabIndex={tabIndex++}
                                                onChange={this.onMemoChanged.bind(
                                                    this
                                                )}
                                            />
                                        </Tooltip>
                                    </Form.Item>
                                ) : null}
                            </Form>
                        ) : null}
                    </div>
                </Modal>
            </div>
        );
    }
}

class WithdrawalModalConnectWrapper extends React.Component {
    render() {
        return <WithdrawalModal {...this.props} ref={this.props.refCallback} />;
    }
}

WithdrawalModalConnectWrapper = connect(WithdrawalModalConnectWrapper, {
    listenTo() {
        return [AccountStore];
    },
    getProps(props) {
        return {
            currentAccount: AccountStore.getState().currentAccount,
            passwordAccount: AccountStore.getState().passwordAccount,
            tabIndex: props.tabIndex || 0
        };
    }
});

export default WithdrawalModalConnectWrapper;
