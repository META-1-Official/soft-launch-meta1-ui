import React from 'react';
import axios from 'axios';
import BindToChainState from 'components/Utility/BindToChainState';
import DepositWithdrawAssetSelector from '../DepositWithdraw/DepositWithdrawAssetSelector';
import Translate from 'react-translate-component';
import ExchangeInput from 'components/Exchange/ExchangeInput';
import AssetName from '../Utility/AssetName';
import {extend} from 'lodash-es';
import GatewayStore from 'stores/GatewayStore';
import AssetStore from 'stores/AssetStore';
import MarketsStore from 'stores/MarketsStore';
import MarketsActions from 'actions/MarketsActions';
import {connect} from 'alt-react';
import SettingsStore from 'stores/SettingsStore';
import Immutable from 'immutable';
import {Asset, Price} from 'common/MarketClasses';
import utils from 'common/utils';
import MarketUtils from 'common/market_utils';
import BalanceWrapper from '../Account/BalanceWrapper';
import AccountActions from 'actions/AccountActions';
import AccountStore from 'stores/AccountStore';
import ChainTypes from '../Utility/ChainTypes';
import FormattedAsset from '../Utility/FormattedAsset';
import BalanceComponent from '../Utility/BalanceComponent';
import QRScanner from '../QRAddressScanner';
import {Modal, Button, Select, Input, ConfigProvider} from 'antd';
import CAValidator from 'multicoin-address-validator';
import WalletUnlockActions from 'actions/WalletUnlockActions';
import counterpart from 'counterpart';
import {
	gatewaySelector,
	_getNumberAvailableGateways,
	_onAssetSelected,
	_getCoinToGatewayMapping,
} from 'lib/common/assetGatewayMixin';
import {getGatewayStatusByAsset} from 'common/gatewayUtils';
import {availableGateways} from 'common/gateways';
import {
	nudgeWithdrawal,
	validateAddress as blocktradesValidateAddress,
	WithdrawAddresses,
} from 'lib/common/gatewayMethods';
import FeeAssetSelector from 'components/Utility/FeeAssetSelector';
import {checkBalance} from 'common/trxHelper';
import AccountSelector from 'components/Account/AccountSelector';
import {ChainStore} from 'meta1-vision-js';
import {getAssetAndGateway, getIntermediateAccount} from 'common/gatewayUtils';
import TransactionConfirmStore from '../../stores/TransactionConfirmStore';
import ls from '../../lib/common/localStorage';
import {toast} from 'react-toastify';

const gatewayBoolCheck = 'withdrawalAllowed';
const STORAGE_KEY = '__AuthData__';
const ss = new ls(STORAGE_KEY);

class WithdrawModalNew extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedAsset: '',
			selectedAssetId: '',
			selectedGateway: '',
			fee: 0,
			feeAmount: new Asset({amount: 0}),
			hasBalance: null,
			hasPoolBalance: null,
			feeError: null,
			fee_asset_id: '1.3.0',
			gateFee: 0,
			quantity: 0,
			address: '',
			memo: '',
			withdraw_publicKey: '',
			withdraw_publicKey_not_empty: false,
			userEstimate: null,
			addressError: false,
			gatewayStatus: availableGateways,
			withdrawalCurrencyId: '',
			withdrawalCurrencyBalance: null,
			withdrawalCurrencyBalanceId: '',
			withdrawalCurrencyPrecision: '',
			preferredCurrencyPrecision: '',
			precisionDifference: '',
			coreAsset: '',
			convertedBalance: '',
			estimatedValue: '',
			options_is_valid: false,
			btsAccountName: '',
			btsAccount: '',
			submitted: false,
			minWithdraw: 0,
		};

		this.handleQrScanSuccess = this.handleQrScanSuccess.bind(this);
		this.onTrxIncluded = this.onTrxIncluded.bind(this);
		this.onClose = this.onClose.bind(this);
	}

	UNSAFE_componentWillMount() {
		let initialState = {};

		let coinToGatewayMapping = _getCoinToGatewayMapping.call(
			this,
			gatewayBoolCheck
		);
		initialState.coinToGatewayMapping = coinToGatewayMapping;

		if (this.props.initialSymbol) {
			initialState = extend(
				initialState,
				this._getAssetAndGatewayFromInitialSymbol(this.props.initialSymbol)
			);

			initialState.gatewayStatus = getGatewayStatusByAsset.call(
				this,
				initialState.selectedAsset,
				gatewayBoolCheck
			);
		}

		this.setState(initialState);
		this.setState(this._getAssetPairVariables(this.props, initialState));
	}

	_getAssetAndGatewayFromInitialSymbol(initialSymbol) {
		let {selectedAsset, selectedGateway} = getAssetAndGateway(initialSymbol);
		let gateFee = 0;

		if (selectedGateway) {
			this.props.backedCoins.get(selectedGateway).forEach((item) => {
				if (
					item.symbol == [selectedGateway, selectedAsset].join('.') ||
					item.backingCoinType == selectedAsset
				) {
					gateFee = item.gateFee;
				}
			});
		}

		return {selectedAsset, selectedGateway, gateFee};
	}

	UNSAFE_componentWillReceiveProps(np) {
		this.setState(this._getAssetPairVariables(np));

		if (this.state.address != '') {
			this.onAddressSelected(this.state.address);
		}

		if (np.initialSymbol !== this.props.initialSymbol) {
			let newState = this._getAssetAndGatewayFromInitialSymbol(
				np.initialSymbol
			);
			newState.gatewayStatus = getGatewayStatusByAsset.call(
				this,
				newState.selectedAsset,
				gatewayBoolCheck
			);
			newState.address = '';
			newState.quantity = 0;
			this.setState(newState);
		}
	}

	UNSAFE_componentWillUpdate(nextProps, nextState) {
		const {preferredCurrency, assets} = nextProps;
		const {selectedAsset, quantity, selectedGateway} = nextState;

		if (preferredCurrency && selectedAsset && quantity) {
			if (
				preferredCurrency === this.props.preferredCurrency &&
				selectedAsset === this.state.selectedAsset &&
				quantity === this.state.quantity
			)
				return;
			let toAsset = null;
			let fromAsset = null;
			let fullFromAssetSymbol = selectedGateway + '.' + selectedAsset;

			assets.forEach((item) => {
				item = item.get ? item : Immutable.fromJS(item);
				if (item.get('symbol') === preferredCurrency) toAsset = item;
				if (item.get('symbol') === fullFromAssetSymbol) fromAsset = item;
			});

			if (fromAsset && toAsset) {
				MarketsActions.getMarketStats(toAsset, fromAsset, true);
			}
		}
	}

	_getAssetPairVariables(props = this.props, state = this.state) {
		let {assets, marketStats, balances, preferredCurrency} = props;
		let {selectedAsset, quantity, selectedGateway, gateFee} = state;
		if (isNaN(gateFee)) gateFee = 0;
		quantity = Number(quantity);
		if (isNaN(quantity)) quantity = 0;
		gateFee = Number(gateFee);
		let fullSymbol = selectedGateway
			? selectedGateway + '.' + selectedAsset
			: selectedAsset;

		if (
			selectedGateway === 'META1' &&
			(selectedAsset === 'BTC' ||
				selectedAsset === 'LTC' ||
				selectedAsset === 'ETH' ||
				selectedAsset === 'XLM' ||
				selectedAsset === 'BNB' ||
				selectedAsset === 'EOS' ||
				selectedAsset === 'USDT')
		)
			fullSymbol = selectedAsset;

		let withdrawalCurrencyBalance = 0;
		let withdrawalCurrencyBalanceId = null;
		let withdrawalCurrencyPrecision = null;
		let preferredCurrencyPrecision = null;
		let precisionDifference = 0;
		let coreAsset = null;
		let convertedBalance = null;
		let estimatedValue = 0;

		let withdrawalCurrency = assets.find((item) => {
			return item.symbol === fullSymbol;
		});

		let withdrawBalance, fromAsset;

		if (balances) {
			balances.forEach((balance) => {
				if (balance && balance.toJS) {
					if (
						withdrawalCurrency &&
						balance.get('asset_type') == withdrawalCurrency.id
					) {
						withdrawBalance = balance;
						withdrawalCurrencyBalanceId = balance.get('id');
						withdrawalCurrencyBalance = balance.get('balance');
					}
				}
			});
		}

		if (!withdrawalCurrencyBalance) {
			//In case does not exist in balances
			withdrawalCurrencyBalance = 0;
		}

		if (preferredCurrency && selectedAsset) {
			let toAsset = null;

			assets.forEach((item) => {
				item = item.get ? item : Immutable.fromJS(item);
				if (item.get('id') == '1.3.0') coreAsset = item;
				if (item.get('symbol') == preferredCurrency) {
					toAsset = item;
					preferredCurrencyPrecision = item.get('precision');
				}
				if (item.get('symbol') == selectedGateway + '.' + selectedAsset) {
					fromAsset = item;
					withdrawalCurrencyPrecision = item.get('precision');
				}
				if (item.get('symbol') == selectedAsset) {
					fromAsset = item;
					withdrawalCurrencyPrecision = item.get('precision');
				}
			});

			if (preferredCurrencyPrecision && withdrawalCurrencyPrecision) {
				precisionDifference =
					withdrawalCurrencyPrecision - preferredCurrencyPrecision;
			}

			if (quantity && fromAsset && toAsset) {
				estimatedValue =
					quantity *
					MarketUtils.getFinalPrice(
						coreAsset,
						fromAsset,
						toAsset,
						marketStats,
						true,
						true
					);
				if (precisionDifference > 0) {
					//Need to compensate for different precisions between currencies
					estimatedValue = estimatedValue * Math.pow(10, precisionDifference);
				} //No need to compensate for precision difference < 0
			}
		}

		if (
			Number.isFinite(withdrawalCurrencyBalance) &&
			withdrawalCurrencyPrecision
		) {
			let withdrawalCurrencyBalanceString = String(withdrawalCurrencyBalance);
			let l = withdrawalCurrencyBalanceString.length;

			while (l < withdrawalCurrencyPrecision) {
				//Zero pad
				withdrawalCurrencyBalanceString = '0' + withdrawalCurrencyBalanceString;
				++l;
			}

			let decimalPart = withdrawalCurrencyBalanceString.substr(
				0,
				l - withdrawalCurrencyPrecision
			);
			let mantissa = withdrawalCurrencyBalanceString.substr(
				l - withdrawalCurrencyPrecision
			);

			if (!decimalPart) {
				decimalPart = '0';
				mantissa = withdrawalCurrencyBalanceString;
			}

			convertedBalance = Number(decimalPart + '.' + mantissa);
		}

		let nAvailableGateways = _getNumberAvailableGateways.call(this);
		let assetAndGateway = selectedAsset && selectedGateway;

		let isMeta1 = false;
		if (coreAsset) {
			if (selectedAsset == coreAsset.get('symbol')) isMeta1 = true;
		} else if (selectedAsset == 'META1') {
			isMeta1 = true;
		}

		let canCoverWithdrawal =
			quantity === 0
				? true
				: checkBalance(
						quantity,
						fromAsset,
						this.state.feeAmount,
						withdrawBalance
				  );

		let {fee_asset_types} = this._getAvailableAssets();
		return {
			withdrawalCurrency,
			withdrawalCurrencyId: withdrawalCurrency ? withdrawalCurrency.id : null,
			withdrawalCurrencyBalance,
			withdrawalCurrencyBalanceId,
			withdrawalCurrencyPrecision,
			preferredCurrencyPrecision,
			precisionDifference,
			coreAsset,
			convertedBalance,
			estimatedValue,
			nAvailableGateways,
			assetAndGateway,
			isMeta1,
			canCoverWithdrawal,
			fee_asset_types,
		};
	}

	_getAvailableAssets(state = this.state) {
		let btsAccount = this.props.account;
		let fee_asset_types = [];
		if (!(btsAccount && btsAccount.get('balances'))) {
			return {fee_asset_types};
		}
		let account_balances = btsAccount.get('balances').toJS();
		fee_asset_types = Object.keys(account_balances).sort(utils.sortID);
		for (let key in account_balances) {
			let asset = ChainStore.getObject(key);
			let balanceObject = ChainStore.getObject(account_balances[key]);
			if (balanceObject && balanceObject.get('balance') === 0) {
				if (fee_asset_types.indexOf(key) !== -1) {
					fee_asset_types.splice(fee_asset_types.indexOf(key), 1);
				}
			}

			if (asset) {
				// Remove any assets that do not have valid core exchange rates
				let priceIsValid = false,
					p;
				try {
					p = new Price({
						base: new Asset(
							asset.getIn(['options', 'core_exchange_rate', 'base']).toJS()
						),
						quote: new Asset(
							asset.getIn(['options', 'core_exchange_rate', 'quote']).toJS()
						),
					});
					priceIsValid = p.isValid();
				} catch (err) {
					priceIsValid = false;
				}

				if (asset.get('id') !== '1.3.0' && !priceIsValid) {
					fee_asset_types.splice(fee_asset_types.indexOf(key), 1);
				}
			}
		}
		return {fee_asset_types};
	}

	_getBindingHelpers() {
		let onFocus = this.onFocusAmount.bind(this);
		let onBlur = this.onBlurAmount.bind(this);

		return {onFocus, onBlur};
	}

	onFeeChanged(asset) {
		this.setState({
			fee_asset_id: asset.asset_id,
			feeAmount: asset,
		});
	}

	onAssetSelected(asset) {
		let {selectedAsset, selectedGateway} = _onAssetSelected.call(
			this,
			asset.id,
			gatewayBoolCheck
		);
		let address = WithdrawAddresses.getLast(asset.id.toLowerCase());
		this.setState(
			{
				selectedAsset,
				selectedGateway,
				gateFee: asset.gateFee,
				address,
				isMeta1: false,
				quantity: '',
			},
			() => {
				this.setState(this._getAssetPairVariables(), this.updateFee);
			}
		);
	}

	onAssetChanged(value) {
		value = value.toUpperCase();

		let stateObj = {};

		if (value == 'META1') {
			stateObj = {isMeta1: true};
		}

		if (!value) {
			stateObj = {
				selectedAsset: '',
				selectedGateway: '',
				addressError: false,
				fee: 0,
				isMeta1: false,
			};
		}

		stateObj.estimatedValue = 0;
		stateObj.memo = '';
		stateObj.address = '';

		if (value) {
			// fetch(`${process.env.GATEWAY_URL}/api/currency/${value}`)
			// 	.then(async (res) => {
			// 		let minWithdraw = (await res.json()).minWithdrawal;
			// 		this.setState({minWithdraw: minWithdraw});
			// 	})
			// 	.catch((err) => {
			// 		console.log('ERR', err);
			// 	});
			if (value === 'ETH') {
				this.setState({minWithdraw: 0.02});
			} else if (value === 'USDT') {
				this.setState({minWithdraw: 25});
			}
		}

		this.setState(stateObj);
	}

	onGatewayChanged(selectedGateway) {
		this.setState({selectedGateway}, () => {
			this.setState(this._getAssetPairVariables());
			this.updateGatewayFee();
		});
	}

	onQuantityChanged(e) {
		var input = null;
		if (parseFloat(e.target.value) == e.target.value) {
			input = e.target.value.trim();
		} else {
			var pasteValue = e.target.value.trim().replace(/[^\d.,-]/g, '');
			var decimal = pasteValue.match(/(\,\d{1,2})$/g);
			var decimalCount = decimal ? decimal.length : 0;
			if (decimal && decimalCount) {
				pasteValue = pasteValue.replace(',', '.');
			}
			input = parseFloat(pasteValue.replace(',', '')) || 0;
		}
		this.setState({quantity: input}, () => {
			this.setState(this._getAssetPairVariables());
		});
	}

	onFocusAmount(e) {
		let {value} = e.target;

		if (String(value) == '0') {
			e.target.value = '';
		}
	}

	onBlurAmount(e) {
		let {value} = e.target;

		if (value == '') {
			e.target.value = 0;
		}
	}

	// Don't validate address on change.
	// Validation is done when address is selected
	onAddressChanged(inputAddress) {
		this.setState({address: inputAddress});
	}

	onAddressSelected(inputAddress) {
		this.validateAddress(inputAddress);
		this.setState({address: inputAddress});
		this.setState(this._getAssetPairVariables());
	}

	_getBackingAssetProps() {
		let {selectedGateway, selectedAsset} = this.state;
		return this.props.backedCoins
			.get(selectedGateway.toUpperCase(), [])
			.find((c) => {
				let backingCoin = c.backingCoinType || c.backingCoin;

				// Gateway has EOS.* asset names
				if (backingCoin.toUpperCase().indexOf('EOS.') !== -1) {
					let [_network, _coin] = backingCoin.split('.');
					backingCoin = _coin;
				}

				return backingCoin === selectedAsset;
			});
	}

	updateGatewayFee() {
		const {selectedGateway, selectedAsset} = this.state;
		let gateFee = 0;

		if (selectedGateway && selectedAsset) {
			this.props.backedCoins.get(selectedGateway).forEach((item) => {
				if (
					item.symbol === [selectedGateway, selectedAsset].join('.') ||
					item.backingCoinType === selectedAsset
				) {
					gateFee = item.gateFee || 0;
				}
			});
		}

		this.setState({gateFee});
	}

	validateAddress(address) {
		let {selectedGateway, gatewayStatus} = this.state;

		// Get Backing Asset Details for Gateway
		let backingAsset = this._getBackingAssetProps();

		let valid = false;
		if (process.env.MAIN_NET_PREFIX === 'DEV11') {
			valid = CAValidator.validate(address, backingAsset.walletType, 'testnet');
		} else {
			valid = CAValidator.validate(address, backingAsset.walletType);
		}

		this.setState({addressError: !valid});

		// blocktradesValidateAddress({
		// 	url: gatewayStatus[selectedGateway].baseAPI.BASE,
		// 	walletType: backingAsset.walletType,
		// 	newAddress: address,
		// 	output_coin_type: gatewayStatus[selectedGateway].addressValidatorAsset
		// 		? this.state.selectedGateway.toLowerCase() +
		// 		  '.' +
		// 		  this.state.selectedAsset.toLowerCase()
		// 		: null,
		// 	method: gatewayStatus[selectedGateway].addressValidatorMethod || null,
		// }).then((json) => {
		// 	if (typeof json === 'undefined') {
		// 		json = {isValid: false};
		// 	}

		// 	this.setState({addressError: json.isValid ? false : true});
		// 	this.setState({
		// 		withdraw_publicKey: json.hasOwnProperty('publicKey')
		// 			? json.publicKey
		// 			: '',
		// 		withdraw_publicKey_not_empty: json.hasOwnProperty('publicKey')
		// 			? true
		// 			: false,
		// 	});
		// });
	}

	onSelectedAddressChanged(address) {
		let {state} = this;
		let {selectedAsset} = state;
		let walletType = selectedAsset.toLowerCase();
		WithdrawAddresses.setLast({wallet: walletType, address});

		this.validateAddress(address);
		this.setState({address});
	}

	onMemoChanged(e) {
		this.setState({memo: e.target.value});
	}

	onWithdrawPublicKeyChanged(e) {
		let new_withdraw_publicKey = e.target.value.trim();
		this.setState({
			withdraw_publicKey: new_withdraw_publicKey,
			withdraw_publicKey_not_empty: new_withdraw_publicKey != '' ? true : false,
		});
	}

	onClickAvailableBalance(available) {
		this.setState({quantity: available});
	}

	onDropDownList() {
		let hasAsset = WithdrawAddresses.has(
			this.state.selectedAsset.toLowerCase()
		);
		if (hasAsset) {
			if (this.state.options_is_valid === false) {
				this.setState({options_is_valid: true});
			}

			if (this.state.options_is_valid === true) {
				this.setState({options_is_valid: false});
			}
		}
	}

	onTrxIncluded(confirm_store_state) {
		if (
			confirm_store_state.included &&
			confirm_store_state.broadcast &&
			confirm_store_state.broadcasted_transaction
		) {
			nudgeWithdrawal(
				'1.3.' +
					confirm_store_state.transaction.operations[0][1].amount.asset_id,
				confirm_store_state.trx_block_num,
				confirm_store_state.trx_in_block,
				0
			);
			TransactionConfirmStore.unlisten(this.onTrxIncluded);
		}
	}

	onSubmit() {
		const {
			withdrawalCurrencyId,
			withdrawalCurrencyBalance,
			withdrawalCurrencyPrecision,
			quantity,
			withdrawalCurrency,
			selectedGateway,
			selectedAsset,
			address,
			isMeta1,
			gateFee,
			memo,
			btsAccount,
			feeAmount,
			email,
			username,
		} = this.state;

		let gatewayStatus = this.state.gatewayStatus[selectedGateway];
		let assetName = !!gatewayStatus.assetWithdrawlAlias
			? gatewayStatus.assetWithdrawlAlias[selectedAsset.toLowerCase()] ||
			  selectedAsset.toLowerCase()
			: selectedAsset.toLowerCase();

		const intermediateAccountNameOrId = getIntermediateAccount(
			withdrawalCurrency.symbol,
			this.props.backedCoins
		);
		const intermediateAccount = this.props.intermediateAccounts.find((a) => {
			return (
				a &&
				(a.get('id') === intermediateAccountNameOrId ||
					a.get('name') === intermediateAccountNameOrId)
			);
		});
		if (!intermediateAccount)
			throw new Error('Unable to find intermediateAccount');
		if (!WithdrawAddresses.has(assetName)) {
			let withdrawals = [];
			withdrawals.push(address);
			WithdrawAddresses.set({wallet: assetName, addresses: withdrawals});
		} else {
			let withdrawals = WithdrawAddresses.get(assetName);
			if (withdrawals.indexOf(address) == -1) {
				withdrawals.push(address);
				WithdrawAddresses.set({
					wallet: assetName,
					addresses: withdrawals,
				});
			}
		}
		WithdrawAddresses.setLast({wallet: assetName, address});

		let sendAmount = new Asset({
			asset_id: withdrawalCurrencyId,
			precision: withdrawalCurrencyPrecision,
			real: quantity,
		});

		let balanceAmount = new Asset({
			asset_id: withdrawalCurrencyId,
			precision: withdrawalCurrencyPrecision,
			real: 0,
		});

		if (withdrawalCurrencyBalance != null) {
			balanceAmount = sendAmount.clone(withdrawalCurrencyBalance);
		}

		const gateFeeAmount = new Asset({
			asset_id: withdrawalCurrencyId,
			precision: withdrawalCurrencyPrecision,
			real: gateFee,
		});

		sendAmount.plus(gateFeeAmount);

		/* Insufficient balance */
		if (balanceAmount.lt(sendAmount)) {
			sendAmount = balanceAmount;
		}

		let descriptor = '';
		let to = '';

		if (isMeta1) {
			descriptor = memo ? new Buffer(memo, 'utf-8') : '';
			to = btsAccount.get('id');
		} else {
			assetName = gatewayStatus.useFullAssetName
				? selectedGateway.toLowerCase() + '.' + assetName
				: assetName;
			descriptor =
				assetName +
				':' +
				address +
				(this.state.withdraw_publicKey_not_empty
					? ':' + this.state.withdraw_publicKey
					: '') +
				(memo ? ':' + new Buffer(memo, 'utf-8') : '');
			to = intermediateAccount.get('id');
		}

		let args = [
			this.props.account.get('id'),
			to,
			sendAmount.getAmount(),
			withdrawalCurrencyId,
			descriptor,
			null,
			feeAmount ? feeAmount.asset_id : '1.3.0',
		];

		const emailType = 'withdraw';
		const emailData = {
			accountName: this.props.account.get('name'),
			name: username,
			emailAddress: email,
			asset: selectedAsset,
			amount: quantity,
			toAddress: address,
		};

		WalletUnlockActions.unlock()
			.then(() => {
				this.setState({submitted: true});
				const token = ss.get('account_login_token', '');
				const config = {
					headers: {
						Authorization: 'Bearer ' + token,
					},
				};
				axios
					.post(
						`${process.env.LITE_WALLET_URL}/sendEmail`,
						{emailType, emailData},
						config
					)
					.then((result) => {
						toast('Email sent successfully!');
						this.setState({submitted: false});
						this.props.hideModal();
					})
					.catch((error) => {
						toast('Failed to send email!');
					});
			})
			.finally(() => {
				WalletUnlockActions.lock();
			});

		// TransactionConfirmStore.unlisten(this.onTrxIncluded);
		// TransactionConfirmStore.listen(this.onTrxIncluded);
		// AccountActions.transfer(...args).then(() => {
		// 	this.setState({submitted: false});
		// 	this.props.hideModal();
		// });
	}

	onInputChanged(e) {
		const name = e.target.name;

		if (name === 'username') this.setState({username: e.target.value});
		else if (name === 'email') this.setState({email: e.target.value});
	}

	onBTSAccountNameChanged(btsAccountName) {
		if (!btsAccountName) this.setState({btsAccount: null});
		this.setState({btsAccountName, btsAccountError: null});
	}

	onBTSAccountChanged(btsAccount) {
		this.setState({btsAccount, btsAccountError: null});
	}

	_renderStoredAddresses() {
		const {state} = this;
		let {selectedAsset, address} = state;
		let storedAddresses = WithdrawAddresses.get(selectedAsset.toLowerCase());

		if (storedAddresses.length > 1 && state.options_is_valid) {
			return (
				<div
					className={
						!storedAddresses.length
							? 'blocktrades-disabled-options'
							: 'blocktrades-options'
					}
				>
					{storedAddresses
						.filter((item) => {
							return item != address;
						})
						.map(function (name, index) {
							return (
								<a
									key={index}
									onClick={this.onSelectedAddressChanged.bind(this, name)}
								>
									{name}
								</a>
							);
						}, this)}
				</div>
			);
		}
	}

	handleQrScanSuccess(data) {
		// if user don't put quantity on field by himself
		// use amount detected on QR code
		if (!this.state.quantity) {
			this.setState({
				address: data.address,
				quantity: data.amount,
			});
		} else {
			this.setState({
				address: data.address,
			});
		}

		this.onAddressSelected(data.address);
	}

	onClose() {
		this.props.hideModal();
		this.setState({
			submitted: false,
		});
	}

	render() {
		const {state, props} = this;
		let {preferredCurrency, assets, balances} = props;
		let {
			username,
			email,
			selectedAsset,
			selectedGateway,
			gatewayStatus,
			addressError,
			gateFee,
			withdrawalCurrencyBalanceId,
			convertedBalance,
			nAvailableGateways,
			assetAndGateway,
			isMeta1,
			canCoverWithdrawal,
			fee_asset_types,
			quantity,
			address,
			btsAccount,
			coinToGatewayMapping,
		} = this.state;
		let symbolsToInclude = [];

		// Get Backing Asset for Gateway
		let backingAsset = this._getBackingAssetProps();

		let minWithdraw = this.state.minWithdraw;
		let maxWithdraw = null;

		// if (backingAsset && backingAsset.minAmount) {
		// 	minWithdraw = !!backingAsset.precision
		// 		? utils.format_number(
		// 				backingAsset.minAmount /
		// 					utils.get_asset_precision(backingAsset.precision),
		// 				backingAsset.precision,
		// 				false
		// 		  )
		// 		: backingAsset.minAmount;
		// } else if (backingAsset) {
		// 	minWithdraw =
		// 		'gateFee' in backingAsset
		// 			? backingAsset.gateFee * 2 || 0 + backingAsset.transactionFee || 0
		// 			: 0;
		// }

		if (backingAsset && backingAsset.maxAmount) {
			maxWithdraw = backingAsset.maxAmount;
		}

		balances.forEach((item) => {
			let id = item.get('asset_type');
			let asset = assets.get(id);

			if (asset && item.get('balance') > 0) {
				let [_gateway, _asset] = asset.symbol.split('.');
				let find = !!_asset ? _asset : _gateway;
				symbolsToInclude.push(find);
			}
		});

		let {onFocus, onBlur} = this._getBindingHelpers();

		const shouldDisable =
			this.state.submitted ||
			(isMeta1
				? !quantity || !btsAccount
				: !assetAndGateway ||
				  !quantity ||
				  !address ||
				  !canCoverWithdrawal ||
				  !email ||
				  !username ||
				  addressError ||
				  quantity < minWithdraw);

		let storedAddresses = WithdrawAddresses.get(selectedAsset.toLowerCase());

		let maxAvailable =
			convertedBalance && this.state.withdrawalCurrency
				? new Asset({
						real: convertedBalance,
						asset_id: this.state.withdrawalCurrency.id,
						precision: this.state.withdrawalCurrency.precision,
				  })
				: new Asset({
						amount: 0,
						asset_id: this.state.withdrawalCurrency
							? this.state.withdrawalCurrency.id
							: undefined,
				  });
		if (this.state.feeAmount.asset_id === maxAvailable.asset_id) {
			maxAvailable.minus(this.state.feeAmount);
		}

		return (
			<Modal
				destroyOnClose={true}
				title={counterpart.translate('modal.withdraw.header')}
				visible={this.props.visible}
				closeable={false}
				wrapClassName={this.props.modalId}
				onCancel={this.onClose}
				id={this.props.modalId}
				footer={[
					<Button
						key={'submit'}
						onClick={this.onSubmit.bind(this)}
						disabled={shouldDisable}
					>
						{this.state.submitted
							? 'Please wait ...'
							: counterpart.translate('modal.withdraw.withdraw')}
					</Button>,
					<Button key={'cancel'} onClick={this.onClose}>
						{counterpart.translate('modal.withdraw.cancel')}
					</Button>,
				]}
			>
				<div className="withdraw-modal-body">
					<div className="account-selector-wrapper">
						<span className="selector-label">Name</span>
						<Input
							type="text"
							value={username}
							name="username"
							onChange={(e) => this.onInputChanged(e)}
							placeholder="Enter name"
						/>
					</div>

					<div className="account-selector-wrapper">
						<span className="selector-label">EMAIL</span>
						<Input
							type="text"
							value={email}
							name="email"
							onChange={(e) => this.onInputChanged(e)}
							placeholder="Enter email"
						/>
					</div>

					<div className="account-selector-wrapper">
						<span className="selector-label">ASSET</span>
						{/*ASSET SELECTION*/}
						<DepositWithdrawAssetSelector
							onSelect={this.onAssetSelected.bind(this)}
							onChange={this.onAssetChanged.bind(this)}
							include={symbolsToInclude}
							selectOnBlur
							defaultValue={selectedAsset}
							includeBTS={false}
							usageContext="withdraw"
						/>
					</div>

					{!isMeta1 && selectedAsset && !selectedGateway ? (
						<Translate content="modal.withdraw.no_gateways" />
					) : null}

					{/*GATEWAY SELECTION*/}
					<div className="account-selector-wrapper">
						{selectedGateway && <span className="selector-label">GATEWAY</span>}
						{selectedGateway &&
							gatewaySelector.call(this, {
								selectedGateway,
								gatewayStatus,
								nAvailableGateways,
								availableGateways: coinToGatewayMapping[selectedAsset],
								error: false,
								onGatewayChanged: this.onGatewayChanged.bind(this),
								selectedAsset,
								balances,
								assets,
							})}
					</div>

					{/*QUANTITY*/}
					{assetAndGateway || isMeta1 ? (
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								position: 'relative',
								marginTop: '19px',
							}}
						>
							{preferredCurrency ? (
								<div
									style={{
										fontSize: 13,
										float: 'right',
										color: 'white',
										textAlign: 'right',
									}}
								>
									<Translate content="modal.withdraw.available" />
									<span
										style={{
											color: canCoverWithdrawal ? null : 'red',
											cursor: 'pointer',
											textDecoration: 'underline',
										}}
										onClick={this.onClickAvailableBalance.bind(
											this,
											maxAvailable.getAmount({
												real: true,
											})
										)}
									>
										{/*Some currencies do not appear in balances, display zero balance if not found*/}
										{withdrawalCurrencyBalanceId ? (
											<BalanceComponent balance={withdrawalCurrencyBalanceId} />
										) : (
											<span>
												0.00{' '}
												<FormattedAsset
													hide_amount
													amount={0}
													asset={maxAvailable.asset_id}
												/>
											</span>
										)}
									</span>
								</div>
							) : null}
							<div className="account-selector-wrapper">
								<span className="selector-label">QUANTITY</span>
								<ExchangeInput
									value={quantity ? quantity : ''}
									onChange={this.onQuantityChanged.bind(this)}
									onFocus={onFocus}
									onBlur={onBlur}
									allowNaN={true}
									placeholder={counterpart.translate(
										'gateway.limit_withdraw_asset_min',
										{
											min: !minWithdraw ? 0 : minWithdraw,
											coin: selectedAsset,
										}
									)}
									// placeholder={counterpart.translate(
									// 	'gateway.limit_withdraw_asset',
									// 	{
									// 		min: !minWithdraw ? 0 : minWithdraw,
									// 		max: !maxWithdraw
									// 			? counterpart.translate(
									// 					'gateway.limit_withdraw_asset_none'
									// 			  )
									// 			: maxWithdraw,
									// 	}
									// )}
								/>
							</div>
							{canCoverWithdrawal &&
							minWithdraw &&
							quantity &&
							+quantity < +minWithdraw ? (
								<Translate
									component="div"
									className="error-msg"
									style={{
										position: 'absolute',
										left: 0,
										textTransform: 'uppercase',
										fontSize: 13,
									}}
									content="gateway.limit_withdraw_asset_min"
									min={minWithdraw}
									coin={selectedGateway + '.' + selectedAsset}
								/>
							) : null}
							{canCoverWithdrawal &&
							maxWithdraw &&
							quantity &&
							+quantity > +maxWithdraw ? (
								<Translate
									component="div"
									className="error-msg"
									style={{
										position: 'absolute',
										right: 0,
										textTransform: 'uppercase',
										fontSize: 13,
									}}
									content="gateway.limit_withdraw_asset_max"
									max={maxWithdraw}
									coin={selectedGateway + '.' + selectedAsset}
								/>
							) : null}
							{(assetAndGateway || isMeta1) && !canCoverWithdrawal ? (
								<Translate
									content="modal.withdraw.cannot_cover"
									component="div"
									className="error-msg"
									style={{
										position: 'absolute',
										textTransform: 'uppercase',
										fontSize: 13,
									}}
								/>
							) : null}
						</div>
					) : null}

					{/*WITHDRAW ADDRESS*/}
					{assetAndGateway && !isMeta1 ? (
						<div className="address-form">
							<div className="error-qr-wrapper">
								<div style={{color: 'red', textTransform: 'uppercase'}}>
									{addressError && (
										<Translate content="modal.withdraw.address_not_valid" />
									)}
								</div>
								<QRScanner
									label="Scan"
									onSuccess={this.handleQrScanSuccess}
									submitBtnText={counterpart.translate(
										'qr_address_scanner.use_address'
									)}
									dataFoundText={
										counterpart.translate('qr_address_scanner.address_found') +
										':'
									}
								/>
							</div>
							<div className="account-selector-wrapper">
								<span className="selector-label">Address</span>
								<ConfigProvider renderEmpty={() => 'No address found'}>
									<Select
										showSearch
										value={address === '' ? undefined : address}
										onSearch={this.onAddressChanged.bind(this)}
										onSelect={this.onAddressSelected.bind(this)}
										getPopupContainer={(triggerNode) => triggerNode.parentNode}
									>
										{address && storedAddresses.indexOf(address) == -1 ? (
											<Select.Option value={address}>{address}</Select.Option>
										) : null}
										{storedAddresses.map((address) => (
											<Select.Option value={address}>{address}</Select.Option>
										))}
									</Select>
								</ConfigProvider>
							</div>
						</div>
					) : null}

					{isMeta1 ? (
						<div style={{marginBottom: '1em'}}>
							<AccountSelector
								label="transfer.to"
								accountName={state.btsAccountName}
								onChange={this.onBTSAccountNameChanged.bind(this)}
								onAccountChanged={this.onBTSAccountChanged.bind(this)}
								account={state.btsAccountName}
								size={60}
								error={state.btsAccountError}
							/>
						</div>
					) : null}

					{/*PUBLIC key - custom field (PRIZM) */}
					{backingAsset && backingAsset.supportsPublicKey !== undefined ? (
						<div style={{marginBottom: '1em'}}>
							<label className="left-label">
								<Translate content="modal.withdraw.public_key" />
							</label>
							{
								<Input.TextArea
									value={state.withdraw_publicKey}
									onChange={this.onWithdrawPublicKeyChanged.bind(this)}
									onInput={this.onWithdrawPublicKeyChanged.bind(this)}
								/>
							}
						</div>
					) : null}

					{/*MEMO*/}
					{isMeta1 || (backingAsset && backingAsset.supportsMemos) ? (
						<div style={{marginBottom: '1em'}}>
							<label className="left-label">
								<Translate content="modal.withdraw.memo" />
							</label>
							<Input.TextArea
								value={state.memo}
								onChange={this.onMemoChanged.bind(this)}
							/>
						</div>
					) : null}

					{/*FEE & GATEWAY FEE*/}
					{assetAndGateway || isMeta1 ? (
						<div className="grid-block no-overflow wrap shrink">
							<div
								className="small-12 medium-6 withdraw-fee-selector"
								style={{paddingRight: 5}}
							>
								<FeeAssetSelector
									account={this.props.account}
									label="transfer.fee"
									transaction={{
										type: 'transfer',
										options: ['price_per_kbyte'],
										data: {
											type: 'memo',
											content:
												this.state.selectedAsset.toLowerCase() +
												':' +
												this.state.address +
												(this.state.memo ? ':' + this.state.memo : ''),
										},
									}}
									onChange={this.onFeeChanged.bind(this)}
								/>
							</div>
							<div
								className="small-12 medium-6 ant-form-item-label withdraw-fee-selector"
								style={{paddingTop: '8px'}}
							>
								<label className="amount-selector-field--label">
									<Translate content="gateway.fee" />
								</label>
								<div className="grid-block no-overflow wrap shrink">
									<ExchangeInput
										placeholder="0.0"
										id="baseMarketFee"
										value={
											!!backingAsset && 'gateFee' in backingAsset
												? backingAsset.gateFee
												: 0
										}
										disabled
										addonAfter={
											<span>
												<AssetName noTip name={backingAsset.symbol} />
											</span>
										}
									/>
								</div>
							</div>
						</div>
					) : null}
				</div>
			</Modal>
		);
	}
}

const ConnectedWithdrawModal = connect(WithdrawModalNew, {
	listenTo() {
		return [GatewayStore, AssetStore, SettingsStore, MarketsStore];
	},
	getProps() {
		return {
			backedCoins: GatewayStore.getState().backedCoins,
			preferredCurrency: SettingsStore.getSetting('unit'),
			marketStats: MarketsStore.getState().allMarketStats,
		};
	},
});

class WithdrawModalWrapper extends React.Component {
	static propTypes = {
		account: ChainTypes.ChainAccount.isRequired,
		withdrawAssets: ChainTypes.ChainAssetsList,
		intermediateAccounts: ChainTypes.ChainAccountsList,
	};

	static defaultProps = {
		account: '',
		withdrawAssets: Immutable.List(),
		intermediateAccounts: Immutable.List(),
	};

	render() {
		const {props} = this;

		if (!props.account) return null;

		let balances = props.account.get('balances');
		let assets = Immutable.fromJS({});
		balances.forEach((item, id) => {
			try {
				let asset = ChainStore.getAsset(id).toJS();
				assets = assets.set(id, asset);
			} catch (e) {
				console.error(e);
			}
		});

		props.backedCoins.forEach((gateway) => {
			gateway.forEach((coin) => {
				if (coin.withdrawalAllowed) {
					try {
						let asset = ChainStore.getAsset(coin.symbol).toJS();
						if (!assets.has(asset.id)) assets = assets.set(asset.id, asset);
					} catch (e) {}
				}
			});
		});

		return (
			<BalanceWrapper
				wrap={ConnectedWithdrawModal}
				{...props}
				balances={props.account.get('balances')}
				assets={assets}
			/>
		);
	}
}

const ConnectedWrapper = connect(BindToChainState(WithdrawModalWrapper), {
	listenTo() {
		return [AccountStore];
	},
	getProps() {
		return {
			account: AccountStore.getState().currentAccount,
		};
	},
});

export default class WithdrawModal extends React.Component {
	shouldComponentUpdate(np, ns) {
		if (!this.props.visible && !np.visible) return false;
		return true;
	}

	render() {
		let withdrawAssets = Immutable.List();
		let intermediateAccounts = Immutable.List();
		this.props.backedCoins.forEach((gateway) => {
			gateway.forEach((coin) => {
				if (coin.withdrawalAllowed) {
					withdrawAssets.push(coin.symbol);
					let withdrawAccount = getIntermediateAccount(
						coin.symbol,
						this.props.backedCoins
					);
					if (
						withdrawAccount &&
						!intermediateAccounts.includes(withdrawAccount)
					)
						intermediateAccounts = intermediateAccounts.push(withdrawAccount);
				}
			});
		});

		return (
			<ConnectedWrapper
				{...this.props}
				id={this.props.modalId}
				withdrawAssets={withdrawAssets}
				intermediateAccounts={intermediateAccounts}
			/>
		);
	}
}
