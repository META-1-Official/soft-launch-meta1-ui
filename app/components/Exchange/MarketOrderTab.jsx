import React, {useEffect, useState} from 'react';
import {Input, Form} from 'antd';
import AssetNameWrapper from '../Utility/AssetName';
import {Asset} from '../../lib/common/MarketClasses';
import ChainStore from 'meta1-vision-js/es/chain/src/ChainStore';
import {Validation} from '../../services/Validation/Validation';
import AssetName from '../Utility/AssetName';
import {Apis} from 'meta1-vision-ws';
import walletIcon from '../../assets/icons/walleticon.png';
import {BalanceValueComponent} from 'components/Utility/EquivalentValueComponent';
import ExchangeInput from './ExchangeInput';
import {toast} from 'react-toastify';
import {ceilFloat, floorFloat} from '../../services/Math';
import counterpart from 'counterpart';

const MarketOrderForm = (props) => {
	const [usdPrice, setUsdPrice] = useState(0.0);
	const [amount, setAmount] = useState(0.0);
	const [totalPercent, setTotalPercent] = useState(100);
	const [sellBalance, setSellBalance] = useState(null);
	const [balanceData, setBalanceData] = useState(null);
	const [form] = Form.useForm();

	const total = Number(amount) * Number(props.price);
	const usdVal = (Number(amount) * Number(usdPrice)).toFixed(2);
	const isBid = props.type === 'bid';

	useEffect(async () => {
		_setUsdPrice();
		form.setFieldsValue({
			price: props.price,
			usd: usdVal,
			total: total,
			totalBalance: total,
		});
	}, []);

	useEffect(() => {
		form.setFieldsValue({
			price: props.price,
			usd: usdVal,
			total: total,
			totalBalance: total,
			amount,
		});
	}, [amount]);

	useEffect(() => {
		form.setFieldsValue({
			price: props.price,
		});
	}, [props.price]);

	useEffect(() => {
		form.setFieldsValue({
			price: props.price,
			usd: 0,
			total: 0,
			totalBalance: 0,
			amount: 0,
		});
	}, [props.quoteAsset.get('symbol')]);

	useEffect(() => {
		if (props.type === 'ask') {
			let account_balances = props.currentAccount.get('balances');

			var symbolType = new Map();

			symbolType.set('META1', '1.3.0');
			symbolType.set('USDT', '1.3.1');
			symbolType.set('BTC', '1.3.5');
			symbolType.set('ETH', '1.3.4');
			symbolType.set('EOS', '1.3.3');
			symbolType.set('XLM', '1.3.6');
			symbolType.set('BNB', '1.3.7');
			symbolType.set('LTC', '1.3.2');

			const tradeSymbol = {};
			if (props.historyUrl) {
				tradeSymbol.currencyId = symbolType.get(
					props.historyUrl.pathname.split('/')[2].split('_')[0]
				);
				tradeSymbol.symbol = props.historyUrl.pathname
					.split('/')[2]
					.split('_')[0];
				tradeSymbol.id = account_balances.get(
					symbolType.get(
						props.type === 'bid'
							? props.historyUrl.pathname.split('/')[2].split('_')[1]
							: props.historyUrl.pathname.split('/')[2].split('_')[0]
					)
				);
			}
			setBalanceData(
				<BalanceValueComponent
					balance={tradeSymbol?.id}
					toAsset={props.historyUrl.pathname.split('/')[2].split('_')[1]}
					balanceHandler={(data) => {
						setSellBalance(data);
					}}
					hide_asset
					fromExchange={true}
				/>
			);
		}
	}, [props.quoteAssetBalance]);

	const _setUsdPrice = async () => {
		let symbol =
			props.type === 'bid'
				? props.quoteAsset.get('symbol')
				: props.baseAsset.get('symbol');

		let usd_price = 0.0;

		if (symbol === undefined) usd_price = 0.0;
		else {
			let usd_price_ratio = await Apis.db.get_published_asset_price(symbol);
			usd_price = usd_price_ratio.numerator / usd_price_ratio.denominator;
		}

		setUsdPrice(usd_price);
	};

	const isFormValid = () => {
		let hasBalance = isBid
			? props.baseAssetBalance >= parseFloat(total)
			: props.quoteAssetBalance >= parseFloat(amount);

		if (
			!props.price ||
			isNaN(Number(props.price)) ||
			Number(props.price) <= 0 ||
			!hasBalance ||
			props.locked_v2
		)
			return false;

		if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) return false;

		const pathUrl = props.historyUrl.pathname;
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

		return true;
	};

	const prepareOrders = (amount) => {
		const orders = [];

		const price = Number(props.price);
		const isBid = props.type === 'bid';

		const expirationTime = props.expirations[props.expirationType].get(
			props.type
		);
		const sellAsset = !isBid ? props.quoteAsset : props.baseAsset;
		const buyAsset = isBid ? props.quoteAsset : props.baseAsset;

		const sellAmount = () => {
			let scaledAmount = amount * price;

			console.log(
				'PRE',
				scaledAmount,
				Math.pow(10, sellAsset.get('precision'))
			);
			return isBid
				? Number(scaledAmount) * Math.pow(10, sellAsset.get('precision'))
				: Number(amount) * Math.pow(10, sellAsset.get('precision'));
		};

		const buyAmount = () => {
			let scaledAmount = amount * price;
			return !isBid
				? Number(scaledAmount) * Math.pow(10, buyAsset.get('precision'))
				: Number(amount) * Math.pow(10, buyAsset.get('precision'));
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
			.then(() => {
				setAmount(0.0);
				form.setFieldsValue({
					amount: 0,
				});
			})
			.catch(() => {});
	};

	const handleSubmit = (amount) => {
		const liquidty = floorFloat(props.liquidity, 6);

		// Liquidity check
		if (amount > liquidty) {
			const msg = `Current available liquidity is ${liquidty} ${props.quoteAsset.get(
				'symbol'
			)}, please adjust amount to ${liquidty} ${props.quoteAsset.get(
				'symbol'
			)} or below.`;
			toast(msg);
			return;
		}

		prepareOrders(Number(amount));
	};

	const onChangeTotalPercentHandler = (percent) => {
		if (!Number(props.price)) {
			setTotalPercent(0);
			toast('No liquidty!');
			return;
		}

		const isBid = props.type === 'bid';
		let amount = 0;

		if (isBid) {
			amount = Number(props.baseAssetBalance) / Number(props.price);
		} else if (!isBid && props.quoteAssetBalance) {
			amount = Number(props.quoteAssetBalance);
		}

		setAmount((amount * percent) / 100);
		setTotalPercent(percent);
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
			<div style={{display: 'none'}}>{balanceData}</div>
			<Form
				className="order-form"
				layout="horizontal"
				hideRequiredMark={true}
				style={{padding: '0px 0px'}}
				form={form}
			>
				{/* <Form.Item
					{...formItemProps}
					name="price"
					label="Market Price"
					style={{display: 'none'}}
				>
					<Input
						style={{width: '100'}}
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
				</Form.Item> */}

				<Form.Item
					{...formItemProps}
					label={counterpart.translate('transaction.trxTypes.amount')}
					name="amount"
					// validateFirst={true}
					// validateTrigger={'onBlur'}
					// rules={quantityRules}
				>
					<ExchangeInput
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

				<Form.Item
					{...formItemProps}
					name="totalBalance"
					label="Total"
					style={{display: 'none'}}
				>
					<Input
						style={{width: '100%'}}
						autoComplete="off"
						addonAfter={
							<span>
								<AssetName
									dataPlace="right"
									name={props.baseAsset.get('symbol')}
								/>
							</span>
						}
						value={100}
						disabled
					/>
				</Form.Item>

				<div className="amount_footer">
					<div className="left_footer_sec">
						<img className="wallet_img" src={walletIcon} alt="img" />
						<span>
							{Number(
								props.type === 'bid'
									? props.baseAssetBalance
									: props.quoteAssetBalance
									? props.quoteAssetBalance
									: ''
							).toFixed(6)}{' '}
							{props.type === 'bid'
								? props.baseAsset.get('symbol')
								: props.quoteAsset.get('symbol')}
						</span>
					</div>
					<div className="right_footer_sec">
						<span
							onClick={() => onChangeTotalPercentHandler(25)}
							className={`per_item ${totalPercent === 25 ? 'active_item' : ''}`}
						>
							25%
						</span>
						<span
							onClick={() => onChangeTotalPercentHandler(50)}
							className={`per_item ${totalPercent === 50 ? 'active_item' : ''}`}
						>
							50%
						</span>
						<span
							onClick={() => onChangeTotalPercentHandler(75)}
							className={`per_item ${totalPercent === 75 ? 'active_item' : ''}`}
						>
							75%
						</span>
						<span
							onClick={() => onChangeTotalPercentHandler(100)}
							className={`per_item ${
								totalPercent === 100 ? 'active_item' : ''
							}`}
						>
							100%
						</span>
					</div>
				</div>

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
						{isBid
							? counterpart.translate('exchange.buy')
							: counterpart.translate('exchange.sell')}
						&nbsp;{props.quoteAsset.get('symbol')}
					</div>
				</button>
				<div
					css={(theme) => ({
						fontSize: 12,
						marginTop: 10,
						color: theme.colors.textColor,
					})}
				>
					<span style={{color: '#ffc000'}}>
						{counterpart.translate('account.transactions.fee')}:
					</span>{' '}
					0.00002 Meta1 | Incl.
					{counterpart.translate('exchange.all_applicable_taxes')}
				</div>
			</Form>
		</div>
	);
};

const MarketOrderTab = (props) => {
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
