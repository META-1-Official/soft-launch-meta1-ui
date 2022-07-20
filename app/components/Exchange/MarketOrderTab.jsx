import React, {useEffect, useState} from 'react';
import moment from 'moment';
import {Input, Form, Select, Radio} from 'antd';
import AssetNameWrapper from '../Utility/AssetName';
import {Asset} from '../../lib/common/MarketClasses';
import ChainStore from 'meta1-vision-js/es/chain/src/ChainStore';
import counterpart from 'counterpart';
import {Validation} from '../../services/Validation/Validation';
import assetUtils from '../../lib/common/asset_utils';
import {checkFeeStatusAsync} from '../../lib/common/trxHelper';
import AssetName from '../Utility/AssetName';
import {DatePicker} from 'antd';
import {Apis} from 'meta1-vision-ws';

const MarketOrderForm = (props) => {
	const [feeAssets, setFeeAssets] = useState([]);
	const [usdPrice, setUsdPrice] = useState(0.0);
	const [amount, setAmount] = useState(0.0);

	const total = Number(amount) * Number(props.price);
	const usdVal = Number(amount) * Number(usdPrice);
	const isBid = props.type === 'bid';
	const [form] = Form.useForm();

	useEffect(async () => {
		_setUsdPrice();
		form.setFieldsValue({
			price: props.price,
			usd: usdVal,
			total: total,
		});
	}, []);

	useEffect(() => {
		form.setFieldsValue({
			price: props.price,
			usd: usdVal,
			total: total,
		});
	}, [amount]);

	useEffect(() => {
		form.setFieldsValue({
			price: props.price,
		});
	}, [props.price]);

	const _setUsdPrice = async () => {
		let symbol =
			props.type === 'bid'
				? props.quoteAsset.get('symbol')
				: props.baseAsset.get('symbol');

		let usd_price = 0.0;
		if (symbol === 'META1') usd_price = 350.7914;
		else if (symbol === undefined) usd_price = 0.0;
		else {
			let usd_price_ratio = await Apis.db.get_published_asset_price(symbol);
			usd_price = usd_price_ratio.numerator / usd_price_ratio.denominator;
		}

		setUsdPrice(usd_price);
	};

	const isFormValid = () => {
		if (!props.price || isNaN(Number(props.price)) || Number(props.price) <= 0)
			return false;

		if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) return false;

		return true;
	};

	const _getBaseAssetFlags = () => {
		return assetUtils.getFlagBooleans(
			props.baseAsset.getIn(['options', 'flags']),
			props.baseAsset.has('bitasset_data_id')
		);
	};

	const _getQuoteAssetFlags = () => {
		return assetUtils.getFlagBooleans(
			props.quoteAsset.getIn(['options', 'flags']),
			props.quoteAsset.has('bitasset_data_id')
		);
	};

	const _onTotalChange = () => {
		setAmount(Number(total) / Number(props.price));
	};

	const getDatePickerRef = (node) => {
		datePricker = node;
	};

	const onExpirationSelectChange = (e) => {
		if (e.target.value === 'SPECIFIC') {
			datePricker.picker.handleOpenChange(true);
		} else {
			datePricker.picker.handleOpenChange(false);
		}

		props.onExpirationTypeChange(e);
	};

	const prepareOrders = (amount) => {
		const orders = [];

		const price = Number(props.price);
		const isBid = props.type === 'bid';

		let expirationTime = null;
		if (props.expirationType === 'SPECIFIC') {
			expirationTime = props.expirations[props.expirationType].get(props.type);
		} else {
			expirationTime = props.expirations[props.expirationType].get(props.type);
		}

		const sellAsset = !isBid ? props.quoteAsset : props.baseAsset;
		const buyAsset = isBid ? props.quoteAsset : props.baseAsset;

		const sellAmount = () => {
			let scaledAmount = amount * price;

			return isBid
				? Number(scaledAmount.toPrecision(5)) *
						Math.pow(10, sellAsset.get('precision'))
				: Number(amount.toPrecision(5)) *
						Math.pow(10, sellAsset.get('precision'));
		};

		const buyAmount = () => {
			let scaledAmount = amount * price;
			return !isBid
				? Number(scaledAmount.toPrecision(5)) *
						Math.pow(10, buyAsset.get('precision'))
				: Number(amount.toPrecision(5)) *
						Math.pow(10, buyAsset.get('precision'));
		};

		orders.push({
			for_sale: new Asset({
				asset_id: sellAsset.get('id'),
				precision: sellAsset.get('precision'),
				amount: sellAmount(),
			}),
			to_receive: new Asset({
				asset_id: buyAsset.get('id'),
				precision: buyAsset.get('precision'),
				amount: buyAmount(),
			}),
			expirationTime: expirationTime,
		});

		props
			.createMarketOrder(orders, ChainStore.getAsset('META1').get('id'))
			.then((res) => {
				setAmount(0.0);
				form.setFieldsValue({
					amount: 0,
				});
			})
			.catch((err) => {});
	};

	const handleSubmit = (amount) => {
		prepareOrders(Number(amount));
	};

	const onExpirationSelectClick = (e) => {
		if (e.target.value === 'SPECIFIC') {
			if (firstClick) {
				secondClick = true;
			}
			firstClick = true;
			if (secondClick) {
				datePricker.picker.handleOpenChange(true);
				firstClick = false;
				secondClick = false;
			}
		}
	};

	const onExpirationSelectBlur = () => {
		firstClick = false;
		secondClick = false;
	};

	const formItemProps = {
		labelCol: {span: 6},
		wrapperCol: {span: 16, offset: 2},
	};

	const quantityRules = [
		Validation.Rules.required(),
		Validation.Rules.number(),
		Validation.Rules.min({min: 0, higherThan: true, name: 'Quantity'}),
	];

	if (!isBid) {
		quantityRules.push(
			Validation.Rules.balance({
				balance: props.quoteAssetBalance,
				symbol: props.quoteAsset.get('symbol'),
			})
		);
	}

	let expirationTip;

	if (props.expirationType !== 'SPECIFIC') {
		expirationTip = props.expirations[props.expirationType].get();
	}

	const expirationsOptionsList = Object.keys(props.expirations).map((key) => (
		<option value={key} key={key}>
			{key === 'SPECIFIC' && props.expirationCustomTime !== 'Specific'
				? moment(props.expirationCustomTime).format('Do MMM YYYY hh:mm A')
				: props.expirations[key].title}
		</option>
	));

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
				form={form}
			>
				<Form.Item {...formItemProps} name="price" label="Market Price">
					<Input
						style={{width: '100%'}}
						autoComplete="off"
						addonAfter={
							<span>
								<AssetName
									dataPlace="right"
									name={props.baseAsset.get('symbol')}
								/>
								&nbsp;/&nbsp;
								<AssetName
									dataPlace="right"
									name={props.quoteAsset.get('symbol')}
								/>
							</span>
						}
						value={props.price}
						disabled
					/>
				</Form.Item>

				<Form.Item
					{...formItemProps}
					label="Amount"
					name="amount"
					validateFirst={true}
					validateTrigger={'onBlur'}
					rules={quantityRules}
				>
					<Input
						placeholder="0.0"
						style={{width: '100%'}}
						autoComplete="off"
						addonAfter={
							<AssetNameWrapper name={props.quoteAsset.get('symbol')} />
						}
						value={10}
						onChange={(e) => setAmount(Number(e.target.value))}
					/>
				</Form.Item>

				<button
					style={
						isBid
							? !isFormValid()
								? buyButtonDisabled
								: buyButton
							: !isFormValid()
							? sellButtonDisabled
							: sellButton
					}
					disabled={!isFormValid()}
					onClick={() => handleSubmit(amount)}
					type="primary"
				>
					<div
						style={{
							fontWeight: 600,
							fontSize: '18px',
							textTransform: 'uppercase',
							color: isBid ? '#330000' : 'white',
						}}
					>
						{isBid ? 'BUY' : 'SELL'}&nbsp;{props.quoteAsset.get('symbol')}
					</div>
				</button>
				<div style={{fontSize: 12, marginTop: 10}}>
					<span style={{color: '#ffc000'}}>Fee:</span> 0.00002 Meta1 | Incl. of
					all applicable taxes
				</div>
			</Form>
		</div>
	);
};

const MarketOrderTab = (props) => {
	const handleCancel = () => {
		props.hideModal();
	};

	const _getBalanceByAssetId = (assetId, precision) => {
		let balance = 0;

		let balances = props.currentAccount.get('balances');

		if (balances.get(assetId) !== undefined) {
			let balanceObj = ChainStore.getObject(balances.get(assetId));

			balance = balanceObj.get('balance') / Math.pow(10, precision);
		}

		return balance;
	};

	let baseAssetBalance = _getBalanceByAssetId(
		props.baseAsset.get('id'),
		props.baseAsset.get('precision')
	);
	let quoteAssetBalance = _getBalanceByAssetId(
		props.quoteAsset.get('id'),
		props.quoteAsset.get('precision')
	);

	return (
		<MarketOrderForm
			{...props}
			baseAssetBalance={baseAssetBalance}
			quoteAssetBalance={quoteAssetBalance}
		/>
	);
};

export default MarketOrderTab;
