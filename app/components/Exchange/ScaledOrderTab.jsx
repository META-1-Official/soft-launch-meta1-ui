import React, {Component} from 'react';
import moment from 'moment';
import {Input, Form, Select, Radio} from 'antd';
import AssetNameWrapper from '../Utility/AssetName';
import {SCALED_ORDER_ACTION_TYPES} from '../../services/Exchange';
import {Asset} from '../../lib/common/MarketClasses';
import ChainStore from 'meta1-vision-js/es/chain/src/ChainStore';
import counterpart from 'counterpart';
import {Validation} from '../../services/Validation/Validation';
import assetUtils from '../../lib/common/asset_utils';
import {checkFeeStatusAsync} from '../../lib/common/trxHelper';
import PriceText from '../Utility/PriceText';
import AssetName from '../Utility/AssetName';
import {
	preciseAdd,
	preciseDivide,
	preciseMultiply,
	preciseMinus,
} from '../../services/Math';
import {DatePicker} from 'antd';
import ExchangeInput from './ExchangeInput';

class ScaledOrderForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			orderCount: 1,
			feeAssets: [],
			forceReRender: false,
			total: 0,
		};

		this.handleClickBalance = this.handleClickBalance.bind(this);
		this.handleCurrentPriceClick = this.handleCurrentPriceClick.bind(this);
		this.formRef = React.createRef();
	}

	_forceRender(np) {
		if (this.state.forceReRender) {
			this.setState({
				forceReRender: false,
			});
		}

		if (this.props.parentWidth !== np.parentWidth) {
			this.setState({
				forceReRender: true,
			});
		}
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (
			nextProps.quoteAsset.get('symbol') !==
				this.props.quoteAsset.get('symbol') ||
			nextProps.baseAsset.get('symbol') !== this.props.baseAsset.get('symbol')
		) {
			this.formRef.current?.setFieldsValue({
				priceLower: 0,
				priceUpper: 0,
				amount: 0,
				orderCount: 0,
				total: 0,
			});
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		this._forceRender(nextProps, nextState);

		return (
			nextState.forceReRender !== this.state.forceReRender ||
			nextState.total !== this.state.total ||
			nextState.orderCount !== this.state.orderCount ||
			nextProps.baseAsset !== this.props.baseAsset ||
			nextProps.quoteAsset !== this.props.quoteAsset ||
			nextProps.locked_v2 !== this.props.locked_v2
		);
	}

	componentDidMount() {
		this._checkFeeAssets();
	}

	isFormValid() {
		const formValues = this._getFormValues();

		if (!formValues) return false;

		if (
			!formValues.priceLower ||
			isNaN(Number(formValues.priceLower)) ||
			Number(formValues.priceLower) <= 0
		)
			return false;

		if (
			!formValues.amount ||
			isNaN(Number(formValues.amount)) ||
			Number(formValues.amount) <= 0
		)
			return false;

		if (
			!formValues.priceUpper ||
			isNaN(Number(formValues.priceUpper)) ||
			Number(formValues.priceUpper) <= 0 ||
			Number(formValues.priceUpper) <= Number(formValues.priceLower)
		)
			return false;

		if (
			!formValues.orderCount ||
			isNaN(Number(formValues.orderCount)) ||
			Number(formValues.orderCount) <= 1
		)
			return false;

		const isBid = this.props.type === 'bid';
		let hasBalance = isBid
			? this.props.baseAssetBalance >= parseFloat(this.state.total)
			: this.props.quoteAssetBalance >= parseFloat(formValues.amount);

		if (!hasBalance || this.props.locked_v2) return false;

		const pathUrl = this.props.historyUrl.pathname;
		if (pathUrl) {
			const pathUrlArr = pathUrl.split('/');
			if (Array.isArray(pathUrlArr) && pathUrlArr.length === 3) {
				if (
					!pathUrlArr[2].toLowerCase().includes('usdt') &&
					!pathUrlArr[2].toLowerCase().includes('meta1')
				) {
					return false;
				}
			}
		}

		this._forceReRender;

		return true;
	}

	_getBaseAssetFlags() {
		return assetUtils.getFlagBooleans(
			this.props.baseAsset.getIn(['options', 'flags']),
			this.props.baseAsset.has('bitasset_data_id')
		);
	}

	_getQuoteAssetFlags() {
		return assetUtils.getFlagBooleans(
			this.props.quoteAsset.getIn(['options', 'flags']),
			this.props.quoteAsset.has('bitasset_data_id')
		);
	}

	_isMarketFeeVisible() {
		const baseAssetFlagBooleans = this._getBaseAssetFlags();

		const quoteAssetFlagBooleans = this._getQuoteAssetFlags();

		if (
			this._getFormValues().action === SCALED_ORDER_ACTION_TYPES.SELL &&
			baseAssetFlagBooleans.charge_market_fee
		) {
			return true;
		}

		if (
			this._getFormValues().action === SCALED_ORDER_ACTION_TYPES.BUY &&
			quoteAssetFlagBooleans.charge_market_fee
		) {
			return true;
		}

		return false;
	}

	_getFormValues() {
		if (this.formRef && this.formRef.current) {
			return this.formRef.current.getFieldsValue();
		}
		return {};
	}

	_filterFeeStatuses(feeStatuses) {
		return feeStatuses
			.filter((feeStatus) => {
				return feeStatus && feeStatus.hasPoolBalance && feeStatus.hasBalance;
			})
			.map((feeStatus) => {
				return {
					fee: feeStatus,
					amount:
						feeStatus.fee.getAmount() / Math.pow(10, feeStatus.fee.precision),
					asset: ChainStore.getAsset(feeStatus.fee.asset_id),
				};
			});
	}

	_checkFeeAssets() {
		// get account balances, check is each balance available to pay fee
		// for limit_order, filter only available assets and put it to local state

		this._getAccountAssetsFeeStatus().then((feeStatuses) => {
			let assets = this._filterFeeStatuses(feeStatuses);

			this.setState({
				feeAssets: assets,
			});
		});
	}

	_getAccountAssetsFeeStatus() {
		const {currentAccount} = this.props;

		const {orderCount} = this._getFormValues();

		if (
			!currentAccount ||
			!currentAccount.get ||
			!currentAccount.get('balances')
		) {
			return false;
		}

		return new Promise((resolve) => {
			let promises = [];

			currentAccount.get('balances').forEach((balance) => {
				let balanceObj = ChainStore.getObject(balance);

				let promise = checkFeeStatusAsync({
					accountID: currentAccount.get('id'),
					feeID: balanceObj.get('asset_type'),
					type: 'limit_order_create',
					operationsCount: orderCount,
				});

				promises.push(promise);
			});

			Promise.all(promises).then((feesStatuses) => {
				resolve(feesStatuses);
			});
		});
	}

	_getFee() {
		const formValues = this._getFormValues();

		let amount = 0;

		if (formValues && formValues.feeCurrency) {
			this.state.feeAssets.forEach((feeAsset) => {
				if (
					feeAsset &&
					feeAsset.asset &&
					feeAsset.asset.get('symbol') === formValues.feeCurrency
				) {
					amount = feeAsset.amount;
				}
			});
		}

		return amount;
	}

	_getMarketFee() {
		const formValues = this._getFormValues();

		const base = this.props.baseAsset;
		const quote = this.props.quoteAsset;

		const quantity = Number(this._getTotal());
		const action = formValues.action;

		if (isNaN(quantity)) return null;

		let asset = null;

		if (action === SCALED_ORDER_ACTION_TYPES.SELL) asset = base;

		if (action === SCALED_ORDER_ACTION_TYPES.BUY) asset = quote;

		if (!asset || !asset.get || !asset.getIn) return null;

		const maxMarketFee = new Asset({
			amount: asset.getIn(['options', 'max_market_fee']),
			asset_id: asset.get('asset_id'),
			precision: asset.get('precision'),
		});

		const marketFeePercent = this._getMarketFeePercentage();

		return !quantity
			? 0
			: Math.min(
					maxMarketFee.getAmount({real: true}),
					(quantity / 100) * marketFeePercent
			  ).toFixed(maxMarketFee.precision);
	}

	_getMarketFeePercentage() {
		const {action} = this._getFormValues();

		const base = this.props.baseAsset;
		const quote = this.props.quoteAsset;

		let asset = null;

		if (action === SCALED_ORDER_ACTION_TYPES.SELL) asset = base;

		if (action === SCALED_ORDER_ACTION_TYPES.BUY) asset = quote;

		return Number(asset.getIn(['options', 'market_fee_percent']) / 100);
	}

	_getTotal() {
		const formValues = this._getFormValues() || {};

		const amount = Number(formValues.amount) || 0;
		const priceLower = Number(formValues.priceLower) || 0;
		const priceUpper = Number(formValues.priceUpper) || 0;
		const orderCount = Number(formValues.orderCount) || 0;

		let total = 0;

		const isCorrect = (value) => !isNaN(value);

		if (
			!isCorrect(priceLower) ||
			!isCorrect(priceUpper) ||
			!isCorrect(amount) ||
			!isCorrect(orderCount) ||
			orderCount <= 1 ||
			orderCount <= 0 ||
			priceLower >= priceUpper
		)
			total = 0;

		const step = preciseDivide(
			preciseMinus(priceUpper, priceLower),
			Math.max(preciseMinus(orderCount, 1), 1)
		);

		const amountPerOrder = preciseDivide(amount, orderCount);

		for (let i = 0; i < orderCount; i += 1) {
			total = preciseAdd(
				total,
				preciseMultiply(
					amountPerOrder,
					preciseAdd(priceLower, preciseMultiply(step, i))
				)
			);
		}

		this.formRef?.current?.setFieldsValue({
			total: total,
		});
		this.setState({total});

		if (this.state.orderCount != orderCount) {
			this.setState({orderCount});
		}
	}

	_getQuantityFromTotal(total) {
		const formValues = this._getFormValues();

		const priceLower = Number(formValues.priceLower);
		const priceUpper = Number(formValues.priceUpper);
		const orderCount = Number(formValues.orderCount);

		const isCorrect = (value) => !isNaN(value);

		if (
			!isCorrect(priceLower) ||
			!isCorrect(priceUpper) ||
			!isCorrect(total) ||
			!isCorrect(orderCount) ||
			orderCount <= 0 ||
			priceLower >= priceUpper
		)
			return 0;

		const step = preciseDivide(
			preciseMinus(priceUpper, priceLower),
			preciseMinus(orderCount, 1)
		);

		let sum = 0;

		for (let i = 0; i < orderCount; i += 1) {
			sum = preciseAdd(
				sum,
				Number(
					preciseDivide(
						preciseAdd(priceLower, preciseMultiply(step, i)),
						orderCount
					)
				)
			);
		}

		return preciseDivide(total, sum);
	}

	_getPreviewDataSource() {
		const formValues = this._getFormValues();

		const dataSource = [];

		const action = formValues.action;
		const amount = Number(formValues.amount);
		const priceLower = Number(formValues.priceLower);
		const priceUpper = Number(formValues.priceUpper);
		const orderCount = Number(formValues.orderCount);

		const isCorrect = (value) => !isNaN(value);

		if (
			!isCorrect(priceLower) ||
			!isCorrect(priceUpper) ||
			!isCorrect(amount) ||
			!isCorrect(orderCount) ||
			orderCount <= 0 ||
			priceLower >= priceUpper
		)
			return [];

		const step = ((priceUpper - priceLower) / (orderCount - 1)).toFixed(6);

		const amountPerOrder = amount / orderCount;

		for (let i = 0; i < orderCount; i += 1) {
			dataSource.push({
				quote: amountPerOrder.toFixed(6),
				base: (amountPerOrder * (priceLower + step * i)).toFixed(6),
				price: (priceLower + step * i).toFixed(6),
			});
		}

		return action === SCALED_ORDER_ACTION_TYPES.BUY
			? dataSource.reverse()
			: dataSource;
	}

	getDatePickerRef = (node) => {
		this.datePricker = node;
	};

	handleClickBalance() {
		if (this.props.type === 'bid') {
			this.formRef.current?.setFieldsValue({
				amount: this._getQuantityFromTotal(this.props.baseAssetBalance),
			});
		} else {
			this.formRef.current?.setFieldsValue({
				amount: this.props.quoteAssetBalance,
			});
		}
	}

	handleCurrentPriceClick() {
		this.formRef.current?.setFieldsValue({
			priceLower: this.props.currentPrice,
		});
	}

	prepareOrders(values) {
		const orders = [];

		const amount = Number(values.amount);
		const priceLower = Number(values.priceLower);
		const priceUpper = Number(values.priceUpper);
		const orderCount = Number(values.orderCount);

		const isBid = this.props.type === 'bid';

		let expirationTime = null;
		if (this.props.expirationType === 'SPECIFIC') {
			expirationTime = this.props.expirations[this.props.expirationType].get(
				this.props.type
			);
		} else {
			expirationTime = this.props.expirations[this.props.expirationType].get(
				this.props.type
			);
		}

		const isCorrect = (value) => !isNaN(value);

		if (
			!isCorrect(priceLower) ||
			!isCorrect(priceUpper) ||
			!isCorrect(amount) ||
			!isCorrect(orderCount) ||
			orderCount <= 0 ||
			priceLower >= priceUpper
		)
			return [];

		const step = ((priceUpper - priceLower) / (orderCount - 1)).toPrecision(5);

		const sellAsset = !isBid ? this.props.quoteAsset : this.props.baseAsset;
		const buyAsset = isBid ? this.props.quoteAsset : this.props.baseAsset;

		const sellAmount = (i, scaledAmount, amountPerOrder) => {
			return isBid
				? Number(
						scaledAmount.toPrecision(5) *
							Math.pow(10, sellAsset.get('precision'))
				  ).toPrecision(5)
				: Number(amountPerOrder.toPrecision(5)) *
						Math.pow(10, sellAsset.get('precision'));
		};

		const buyAmount = (i, scaledAmount, amountPerOrder) => {
			return !isBid
				? Number(
						scaledAmount.toPrecision(5) *
							Math.pow(10, buyAsset.get('precision'))
				  ).toPrecision(5)
				: Number(amountPerOrder.toPrecision(5)) *
						Math.pow(10, buyAsset.get('precision'));
		};

		Number.prototype.countDecimals = function () {
			if (Math.floor(this.valueOf()) === this.valueOf()) return 0;
			return this.toString().split('.')[1].length || 0;
		};

		let amountPerOrder = amount / orderCount;

		const minMaxDivider = Math.pow(
			10,
			Math.max(Math.floor(Math.log10(orderCount)), 1)
		);
		const minAssetPrecision = Math.min(
			buyAsset.get('precision'),
			sellAsset.get('precision')
		);
		for (let i = 0; i < orderCount; i += 1) {
			if ((amount / orderCount).countDecimals() > minAssetPrecision) {
				amountPerOrder = ((2 / minMaxDivider) * amount) / (orderCount - 2);
				if (i == 0 || i == orderCount - 1) {
					amountPerOrder = (1 / minMaxDivider) * amount;
				}
			}

			const scaledAmount = amountPerOrder * (priceLower + step * i);

			orders.push({
				for_sale: new Asset({
					asset_id: sellAsset.get('id'),
					precision: sellAsset.get('precision'),
					amount: sellAmount(i, scaledAmount, amountPerOrder),
				}),
				to_receive: new Asset({
					asset_id: buyAsset.get('id'),
					precision: buyAsset.get('precision'),
					amount: buyAmount(i, scaledAmount, amountPerOrder),
				}),
				expirationTime: expirationTime,
			});
		}

		this.props
			.createScaledOrder(orders, ChainStore.getAsset('META1').get('id'))
			.then((res) => {
				this.formRef.current.resetFields();
			})
			.catch((err) => {});
	}

	handleSubmit() {
		if (this.formRef && this.formRef.current) {
			this.prepareOrders(this._getFormValues());
		}
	}

	onExpirationSelectChange = (e) => {
		if (e.target.value === 'SPECIFIC') {
			this.datePricker.picker.handleOpenChange(true);
		} else {
			this.datePricker.picker.handleOpenChange(false);
		}

		this.props.onExpirationTypeChange(e);
	};

	onExpirationSelectClick = (e) => {
		if (e.target.value === 'SPECIFIC') {
			if (this.firstClick) {
				this.secondClick = true;
			}
			this.firstClick = true;
			if (this.secondClick) {
				this.datePricker.picker.handleOpenChange(true);
				this.firstClick = false;
				this.secondClick = false;
			}
		}
	};

	onExpirationSelectBlur = () => {
		this.firstClick = false;
		this.secondClick = false;
	};

	render() {
		const {type, quoteAsset, baseAsset, expirationCustomTime} = this.props;

		const isBid = type === 'bid';

		const quote = quoteAsset;
		const base = baseAsset;

		const marketFeeSymbol = (
			<AssetNameWrapper name={this.props.quoteAsset.get('symbol')} />
		);

		const quantitySymbol = (
			<AssetNameWrapper name={this.props.quoteAsset.get('symbol')} />
		);

		const totalSymbol = (
			<AssetNameWrapper name={this.props.baseAsset.get('symbol')} />
		);

		const priceSymbol = (
			<span>
				<AssetName dataPlace="right" name={baseAsset.get('symbol')} />
				&nbsp;/&nbsp;
				<AssetName dataPlace="right" name={quoteAsset.get('symbol')} />
			</span>
		);

		const formItemProps = {
			labelCol: {span: 6},
			wrapperCol: {span: 16, offset: 2},
		};

		// const actionRadio = getFieldDecorator('action', {
		// 	initialValue: isBid
		// 		? SCALED_ORDER_ACTION_TYPES.BUY
		// 		: SCALED_ORDER_ACTION_TYPES.SELL,
		// })(
		// 	<Radio.Group>
		// 		<Radio value={SCALED_ORDER_ACTION_TYPES.BUY}>
		// 			{counterpart.translate('scaled_orders.action.buy')}
		// 		</Radio>
		// 		<Radio value={SCALED_ORDER_ACTION_TYPES.SELL}>
		// 			{counterpart.translate('scaled_orders.action.sell')}
		// 		</Radio>
		// 	</Radio.Group>
		// );

		const priceLowerInput = () => (
			<ExchangeInput
				placeholder="0.0"
				style={{width: '100%'}}
				autoComplete="off"
				addonAfter={priceSymbol}
				onChange={this._getTotal.bind(this)}
			/>
		);

		const formValues = this._getFormValues();

		const priceLower = Number((formValues && formValues.priceLower) || 0);

		const priceUpperInput = () => (
			<ExchangeInput
				placeholder="0.0"
				style={{width: '100%'}}
				autoComplete="off"
				addonAfter={priceSymbol}
				onChange={this._getTotal.bind(this)}
			/>
		);

		// To do: Check functionality
		const feeCurrencySelect = () => (
			<Select
				showSearch
				dropdownMatchSelectWidth={false}
				style={{minWidth: '80px', maxWidth: '120px'}}
				initialValue={
					ChainStore.getAsset('1.3.0') &&
					ChainStore.getAsset('1.3.0').get &&
					ChainStore.getAsset('1.3.0').get('symbol')
				}
				getPopupContainer={(triggerNode) => triggerNode.parentNode}
			>
				{this.state.feeAssets &&
					this.state.feeAssets.map &&
					this.state.feeAssets.map((feeAsset) => {
						return (
							<Select.Option
								key={feeAsset.asset.get('symbol')}
								value={`${feeAsset.asset.get('symbol')}`}
							>
								<AssetNameWrapper
									name={feeAsset.asset.get('symbol')}
									noTip={true}
								/>
							</Select.Option>
						);
					})}
			</Select>
		);

		const feeInput = () => {
			if (this.formRef) {
				return (
					<ExchangeInput
						disabled
						placeholder="0.0"
						style={{width: '100%'}}
						autoComplete="off"
						addonAfter={() => feeCurrencySelect()}
						value={this._getFee()}
					/>
				);
			}
			return <></>;
		};

		const marketFeeInput = (
			<ExchangeInput
				disabled
				style={{width: '100%'}}
				autoComplete="off"
				addonAfter={marketFeeSymbol}
				value={this._getMarketFee()}
			/>
		);

		const totalInput = () => {
			if (this.formRef) {
				return (
					<Input
						placeholder="0.0"
						disabled
						style={{width: '100%'}}
						autoComplete="off"
						addonAfter={totalSymbol}
					/>
				);
			}
			return <></>;
		};

		const totalInputValidation = Validation.Rules.balance({
			balance: this.props.baseAssetBalance,
			symbol: this.props.baseAsset.get('symbol'),
		});

		const totalInputValidator = totalInputValidation.validator(
			null,
			this._getTotal(),
			(a) => a === undefined
		);
		const totalInputHelp =
			isBid && !totalInputValidator ? totalInputValidation.message : null;
		const totalInputStatus = isBid && !totalInputValidator ? 'error' : '';

		const quantityRules = [
			Validation.Rules.required(),
			Validation.Rules.number(),
			Validation.Rules.min({min: 0, higherThan: true, name: 'Quantity'}),
		];

		if (!isBid) {
			quantityRules.push(
				Validation.Rules.balance({
					balance: this.props.quoteAssetBalance,
					symbol: this.props.quoteAsset.get('symbol'),
				})
			);
		}

		const quantityInput = () => (
			<ExchangeInput
				placeholder="0.0"
				style={{width: '100%'}}
				autoComplete="off"
				addonAfter={quantitySymbol}
				onChange={this._getTotal.bind(this)}
			/>
		);

		const orderCountInput = () => (
			<ExchangeInput
				style={{width: '100%'}}
				placeholder="0"
				autoComplete="off"
				addonAfter={
					<span>{counterpart.translate('scaled_orders.order_s')}</span>
				}
				onChange={this._getTotal.bind(this)}
			/>
		);

		const lastPriceLabel = counterpart.translate(
			isBid ? 'exchange.lowest_ask' : 'exchange.highest_bid'
		);

		let expirationTip;

		if (this.props.expirationType !== 'SPECIFIC') {
			expirationTip = this.props.expirations[this.props.expirationType].get();
		}

		const expirationsOptionsList = Object.keys(this.props.expirations).map(
			(key) => (
				<option value={key} key={key}>
					{key === 'SPECIFIC' && expirationCustomTime !== 'Specific'
						? moment(expirationCustomTime).format('Do MMM YYYY hh:mm A')
						: this.props.expirations[key].title}
				</option>
			)
		);

		let buyButton = {
			backgroundColor: '#FFC000',
			marginTop: '10px',
			width: '100%',
			height: '46px',
			color: '#330000',
			borderRadius: '5px',
		};
		let buyButtonDisabled = {
			backgroundColor: '#FFC000',
			marginTop: '10px',
			width: '100%',
			height: '46px',
			color: '#330000',
			opacity: '0.5',
			borderRadius: '5px',
			cursor: 'not-allowed',
		};
		let sellButton = {
			backgroundColor: '#FF2929',
			marginTop: '10px',
			width: '100%',
			height: '46px',
			color: 'white',
			borderRadius: '5px',
		};
		let sellButtonDisabled = {
			backgroundColor: '#FF2929',
			marginTop: '10px',
			width: '100%',
			height: '46px',
			color: 'white',
			opacity: '0.5',
			borderRadius: '5px',
			cursor: 'not-allowed',
		};

		return (
			<div className="buy-sell-container" style={{padding: '5px'}}>
				<Form
					className="order-form"
					layout="horizontal"
					hideRequiredMark={true}
					style={{padding: '0px 0px'}}
					ref={this.formRef}
				>
					<Form.Item
						{...formItemProps}
						name="priceLower"
						label={counterpart.translate('scaled_orders.price_lower')}
						validateFirst={true}
						validateTrigger="onBlur"
						rules={[
							Validation.Rules.required(),
							Validation.Rules.number(),
							Validation.Rules.min({min: 0, name: 'Price', higherThan: true}),
						]}
					>
						{priceLowerInput()}
					</Form.Item>

					<Form.Item
						{...formItemProps}
						name="priceUpper"
						label={counterpart.translate('scaled_orders.price_upper')}
						validateFirst={true}
						validateTrigger="onBlur"
						rules={[
							Validation.Rules.required(),
							Validation.Rules.number(),
							Validation.Rules.min({
								min: priceLower,
								name: 'Price',
								higherThan: true,
							}),
						]}
					>
						{priceUpperInput()}
					</Form.Item>

					<Form.Item
						{...formItemProps}
						label={counterpart.translate('scaled_orders.quantity')}
						name="amount"
						validateFirst={true}
						validateTrigger={'onBlur'}
						rules={quantityRules}
					>
						{quantityInput()}
					</Form.Item>

					<Form.Item
						{...formItemProps}
						label={counterpart.translate('scaled_orders.order_count')}
						name="orderCount"
						validateFirst={true}
						rules={[
							Validation.Rules.required(),
							Validation.Rules.number(),
							Validation.Rules.min({
								min: 1,
								name: 'Orders Count',
								higherThan: true,
							}),
						]}
					>
						{orderCountInput()}
					</Form.Item>

					<Form.Item
						{...formItemProps}
						help={totalInputHelp}
						validateStatus={totalInputStatus}
						label={counterpart.translate('scaled_orders.total')}
						name="total"
					>
						{totalInput()}
					</Form.Item>

					{/* <Form.Item
						{...formItemProps}
						label={counterpart.translate('scaled_orders.fee')}
						name="feeCurrency"
						initialValue={
							ChainStore.getAsset('1.3.0') &&
							ChainStore.getAsset('1.3.0').get &&
							ChainStore.getAsset('1.3.0').get('symbol')
						}
					>
						{feeInput()}
					</Form.Item>

					{this._isMarketFeeVisible() && (
						<Form.Item
							{...formItemProps}
							label={`${counterpart.translate(
								'scaled_orders.market_fee'
							)} ${this._getMarketFeePercentage()}%`}
						>
							{marketFeeInput}
						</Form.Item>
					)} */}

					{/* <Form.Item
						style={{marginBottom: '6px'}}
						label={counterpart.translate('transaction.expiration')}
						{...formItemProps}
					>
						<div className="expiration-datetime-picker scaled-orders">
							<DatePicker
								ref={this.getDatePickerRef}
								className="expiration-datetime-picker--hidden"
								showTime
								showToday={false}
								disabledDate={(current) =>
									current < moment().add(59, 'minutes')
								}
								value={
									expirationCustomTime !== 'Specific'
										? expirationCustomTime
										: moment().add(1, 'hour')
								}
								onChange={this.props.onExpirationCustomChange}
							/>
							<select
								className="cursor-pointer"
								onChange={this.onExpirationSelectChange}
								onClick={this.onExpirationSelectClick}
								onBlur={this.onExpirationSelectBlur}
								data-tip={
									expirationTip &&
									moment(expirationTip).format('Do MMM YYYY hh:mm A')
								}
								value={this.props.expirationType}
							>
								{expirationsOptionsList}
							</select>
						</div>
					</Form.Item> */}

					{/* <Form.Item
						style={{marginTop: '7px'}}
						label={lastPriceLabel}
						{...formItemProps}
					>
						<span
							style={{
								borderBottom: '#A09F9F 1px dotted',
								cursor: 'pointer',
							}}
							onClick={this.handleCurrentPriceClick}
						>
							<PriceText
								price={this.props.currentPrice}
								quote={quote}
								base={base}
							/>{' '}
							<AssetNameWrapper name={base.get('symbol')} noTip />
							/
							<AssetNameWrapper name={quote.get('symbol')} noTip />
						</span>
					</Form.Item>

					<Form.Item
						style={{marginTop: '7px'}}
						label={counterpart.translate('exchange.balance')}
						{...formItemProps}
					>
						<span
							style={{
								borderBottom: '#A09F9F 1px dotted',
								cursor: 'pointer',
							}}
							onClick={this.handleClickBalance}
						>
							{!isBid
								? this.props.quoteAssetBalance
								: this.props.baseAssetBalance}{' '}
							<AssetNameWrapper
								name={!isBid ? quote.get('symbol') : base.get('symbol')}
								noTip
							/>
						</span>
					</Form.Item> */}

					<button
						style={
							isBid
								? !this.isFormValid()
									? buyButtonDisabled
									: buyButton
								: !this.isFormValid()
								? sellButtonDisabled
								: sellButton
						}
						onClick={this.handleSubmit.bind(this)}
						type="primary"
						disabled={!this.isFormValid()}
					>
						<div
							style={{
								fontWeight: 600,
								fontSize: '18px',
								textTransform: 'uppercase',
								color: isBid ? '#330000' : 'white',
							}}
						>
							{isBid ? 'BUY' : 'SELL'}&nbsp;
							{this.props.quoteAsset.get('symbol')}
						</div>
					</button>
					<div style={{fontSize: 12, marginTop: 10}}>
						<span style={{color: '#ffc000'}}>Fee:</span>
						&nbsp;
						{Math.max(
							0.00002,
							(0.00002 * this.state.orderCount).toFixed(6)
						)}{' '}
						Meta1
					</div>
				</Form>
			</div>
		);
	}
}

class ScaledOrderTab extends Component {
	constructor(props) {
		super(props);

		this.handleCancel = this.handleCancel.bind(this);
	}

	handleCancel() {
		this.props.hideModal();
	}

	_getBalanceByAssetId(assetId, precision) {
		let balance = 0;

		let balances = this.props.currentAccount.get('balances');

		if (balances.get(assetId) !== undefined) {
			let balanceObj = ChainStore.getObject(balances.get(assetId));

			balance = balanceObj.get('balance') / Math.pow(10, precision);
		}

		return balance;
	}

	render() {
		let baseAssetBalance = this._getBalanceByAssetId(
			this.props.baseAsset.get('id'),
			this.props.baseAsset.get('precision')
		);
		let quoteAssetBalance = this._getBalanceByAssetId(
			this.props.quoteAsset.get('id'),
			this.props.quoteAsset.get('precision')
		);

		return (
			<ScaledOrderForm
				{...this.props}
				baseAssetBalance={baseAssetBalance}
				quoteAssetBalance={quoteAssetBalance}
			/>
		);
	}
}

export default ScaledOrderTab;
