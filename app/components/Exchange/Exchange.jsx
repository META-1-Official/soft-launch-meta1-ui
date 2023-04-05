import React from 'react';
import cnames from 'classnames';
import {debounce} from 'lodash-es';
import moment from 'moment';
import Ps from 'perfect-scrollbar';
import PropTypes from 'prop-types';
import counterpart from 'counterpart';

// Actions & Store
import SettingsActions from 'actions/SettingsActions';
import MarketsActions from 'actions/MarketsActions';

// Common funs
import market_utils from 'common/market_utils';
import {
	Asset,
	Price,
	LimitOrderCreate,
	LimitOrder,
	CallOrder,
} from 'common/MarketClasses';
import {checkFeeStatusAsync} from 'common/trxHelper';
import utils from 'common/utils';

// Custom components
import BuySell from './BuySell';
import ScaledOrderTab from './ScaledOrderTab';
import MarketOrderTab from './MarketOrderTab';
import ExchangeHeader from './ExchangeHeader';
import {MarketOrders} from './MyOpenOrders';
import {OrderBook} from './OrderBook';
import MyMarkets from './MyMarkets';
import MarketHistory from './MarketHistory';
import MyTrade from './MyTrade';
import MarketPicker from './MarketPicker';
import ConfirmOrderModal from './ConfirmOrderModal';
import TradingViewPriceChart from './TradingViewPriceChart';
import LoadingIndicator from '../LoadingIndicator';
import BorrowModal from '../Modal/BorrowModal';
import AccountNotifications from '../Notifier/NotifierContainer';
import PriceAlert from './PriceAlert';
import AssetsPairTabs from './AssetsPairTabs';

// Antd
import {Tabs, Collapse, notification} from 'antd';

// Meta1 SDKs
import {Apis} from 'meta1-vision-ws';
import {ChainStore, FetchChain} from 'meta1-vision-js';

class Exchange extends React.Component {
	static propTypes = {
		activeMarketHistory: PropTypes.object.isRequired,
		viewSettings: PropTypes.object.isRequired,
	};

	static defaultProps = {
		activeMarketHistory: {},
		viewSettings: {},
	};

	constructor(props) {
		super();
		this.state = {
			...this._initialState(props),
			expirationType: {
				bid: props.exchange.getIn(['lastExpiration', 'bid']) || 'YEAR',
				ask: props.exchange.getIn(['lastExpiration', 'ask']) || 'YEAR',
			},
			expirationCustomTime: {
				bid: 'Specific',
				ask: 'Specific',
			},
			feeStatus: {},
			backingAssetValue: 0,
			backingAssetPolarity: true,
		};

		this._getWindowSize = debounce(this._getWindowSize.bind(this), 150);
		this._checkFeeStatus = this._checkFeeStatus.bind(this);

		this._handleExpirationChange = this._handleExpirationChange.bind(this);
		this._handleCustomExpirationChange =
			this._handleCustomExpirationChange.bind(this);

		this.showConfirmSellOrderModal = this.showConfirmSellOrderModal.bind(this);
		this.hideConfirmSellOrderModal = this.hideConfirmSellOrderModal.bind(this);

		this.showConfirmBuyOrderModal = this.showConfirmBuyOrderModal.bind(this);
		this.hideConfirmBuyOrderModal = this.hideConfirmBuyOrderModal.bind(this);

		this.showMarketPickerModal = this.showMarketPickerModal.bind(this);
		this.hideMarketPickerModal = this.hideMarketPickerModal.bind(this);

		this.showDepositBridgeModal = this.showDepositBridgeModal.bind(this);
		this.hideDepositBridgeModal = this.hideDepositBridgeModal.bind(this);

		this.showDepositModal = this.showDepositModal.bind(this);
		this.hideDepositModal = this.hideDepositModal.bind(this);

		this.showBorrowQuoteModal = this.showBorrowQuoteModal.bind(this);
		this.hideBorrowQuoteModal = this.hideBorrowQuoteModal.bind(this);

		this.showBorrowBaseModal = this.showBorrowBaseModal.bind(this);
		this.hideBorrowBaseModal = this.hideBorrowBaseModal.bind(this);

		this.showPriceAlertModal = this.showPriceAlertModal.bind(this);
		this.hidePriceAlertModal = this.hidePriceAlertModal.bind(this);

		this.showScaledOrderModal = this.showScaledOrderModal.bind(this);
		this.hideScaledOrderModal = this.hideScaledOrderModal.bind(this);

		this.handlePriceAlertSave = this.handlePriceAlertSave.bind(this);
		this._createScaledOrder = this._createScaledOrder.bind(this);

		this.psInit = true;
	}

	// ******************** //
	// Life Cycle Functions //
	// ******************** //

	UNSAFE_componentWillMount() {
		window.addEventListener('resize', this._setDimensions, {
			capture: false,
			passive: true,
		});
		// updateGatewayBackers();
		this._checkFeeStatus();
	}

	componentDidMount() {
		MarketsActions.getTrackedGroupsConfig();

		SettingsActions.changeViewSetting.defer({
			[this._getLastMarketKey()]:
				this.props.quoteAsset.get('symbol') +
				'_' +
				this.props.baseAsset.get('symbol'),
		});

		window.addEventListener('resize', this._getWindowSize, {
			capture: false,
			passive: true,
		});

		if (
			this.props.quoteAsset.get('symbol') === 'META1' ||
			this.props.baseAsset.get('symbol') === 'META1'
		) {
			this.calcBackingAssetValue();
		} else {
			this.setState({backingAssetValue: 0, backingAssetPolarity: true});
		}
	}

	// Force Render
	_forceRender(np, ns) {
		if (this.state.forceReRender) {
			this.setState({
				forceReRender: false,
			});
		}

		if (
			!utils.are_equal_shallow(this.state.activePanels, ns.activePanels) ||
			np.quoteAsset !== this.props.quoteAsset ||
			np.baseAsset !== this.props.baseAsset
		) {
			this.setState({
				forceReRender: true,
			});
		}
	}

	shouldComponentUpdate(np, ns) {
		let {expirationType} = this.state;
		this._forceRender(np, ns);

		if (!np.marketReady && !this.props.marketReady) {
			return false;
		}
		let propsChanged = false;
		let stateChanged = false;

		if (
			np.quoteAsset !== this.props.quoteAsset ||
			np.baseAsset !== this.props.baseAsset
		) {
			this.setState({
				expirationType: {
					bid:
						expirationType['bid'] == 'SPECIFIC'
							? expirationType['bid']
							: 'YEAR',
					ask:
						expirationType['ask'] == 'SPECIFIC'
							? expirationType['ask']
							: 'YEAR',
				},
			});
		}

		for (let key in np) {
			if (np.hasOwnProperty(key)) {
				propsChanged =
					propsChanged || !utils.are_equal_shallow(np[key], this.props[key]);
				if (propsChanged) break;
			}
		}
		for (let key in ns.panelTabsActive) {
			stateChanged = !utils.are_equal_shallow(
				ns.panelTabsActive[key],
				this.state.panelTabsActive[key]
			);
		}
		return (
			propsChanged || stateChanged || !utils.are_equal_shallow(ns, this.state)
		);
	}

	_checkFeeStatus(
		assets = [
			this.props.coreAsset,
			this.props.baseAsset,
			this.props.quoteAsset,
		],
		account = this.props.currentAccount
	) {
		let feeStatus = {};
		let p = [];
		assets.forEach((a) => {
			p.push(
				checkFeeStatusAsync({
					accountID: account.get('id'),
					feeID: a.get('id'),
					type: 'limit_order_create',
				})
			);
		});
		Promise.all(p)
			.then((status) => {
				assets.forEach((a, idx) => {
					feeStatus[a.get('id')] = status[idx];
				});

				if (!utils.are_equal_shallow(this.state.feeStatus, feeStatus)) {
					this.setState({feeStatus});
				}
			})
			.catch((err) => {
				console.error('checkFeeStatusAsync error', err);
				this.setState({feeStatus: {}});
			});
	}

	_getWindowSize() {
		let {innerHeight, innerWidth} = window;
		if (innerHeight !== this.state.height || innerWidth !== this.state.width) {
			this.setState({
				height: innerHeight,
				width: innerWidth,
			});
			let centerContainer = this.refs.center;
			if (centerContainer) {
				Ps.update(centerContainer);
			}
		}
	}

	_initPsContainer() {
		if (this.refs.center && this.psInit) {
			let centerContainer = this.refs.center;
			if (centerContainer) {
				Ps.initialize(centerContainer);
				this.psInit = false;
			}
		}
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		this._initPsContainer();

		if (
			nextProps.quoteAsset !== this.props.quoteAsset ||
			nextProps.baseAsset !== this.props.baseAsset ||
			nextProps.currentAccount !== this.props.currentAccount
		) {
			this._checkFeeStatus(
				[nextProps.coreAsset, nextProps.baseAsset, nextProps.quoteAsset],
				nextProps.currentAccount
			);

			if (
				nextProps.quoteAsset.get('symbol') === 'META1' ||
				nextProps.baseAsset.get('symbol') === 'META1'
			) {
				this.calcBackingAssetValue();
			} else {
				this.setState({backingAssetValue: 0, backingAssetPolarity: true});
			}
		}

		if (
			nextProps.quoteAsset.get('symbol') !==
				this.props.quoteAsset.get('symbol') ||
			nextProps.baseAsset.get('symbol') !== this.props.baseAsset.get('symbol')
		) {
			this.setState(this._initialState(nextProps));

			return SettingsActions.changeViewSetting({
				[this._getLastMarketKey()]:
					nextProps.quoteAsset.get('symbol') +
					'_' +
					nextProps.baseAsset.get('symbol'),
			});
		}

		if (
			nextProps.viewSettings.get('currentSection') !==
			this.props.viewSettings.get('currentSection')
		) {
			this.setState({
				currentSection: nextProps.viewSettings.get('currentSection'),
			});
		}
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this._getWindowSize);
	}

	/*
	 * Only check when selling or buying META1
	 */
	calcBackingAssetValue() {
		Apis.db.get_asset_limitation_value('META1').then((price) => {
			const meta1_usdt = price / 1000000000;
			let asset_usdt;

			const quoteAssetSymbol = this.props.quoteAsset.get('symbol');
			const baseAssetSymbol = this.props.baseAsset.get('symbol');
			const isQuoting = quoteAssetSymbol === 'META1';

			Apis.db
				.get_ticker('USDT', isQuoting ? baseAssetSymbol : quoteAssetSymbol)
				.then((res) => {
					asset_usdt = parseFloat(res.latest) || 1;
					const ratio = isQuoting
						? (meta1_usdt + 0.01) / asset_usdt
						: asset_usdt / (meta1_usdt + 0.01);

					this.setState({
						backingAssetValue: ratio,
						backingAssetPolarity: isQuoting,
					});
				});
		});
	}

	_getFeeAssets(quote, base, coreAsset) {
		let {currentAccount} = this.props;
		const {feeStatus} = this.state;

		function addMissingAsset(target, asset) {
			if (target.indexOf(asset) === -1) {
				target.push(asset);
			}
		}

		function hasFeePoolBalance(id) {
			return feeStatus[id] && feeStatus[id].hasPoolBalance;
		}

		function hasBalance(id) {
			return feeStatus[id] && feeStatus[id].hasBalance;
		}

		let sellAssets = [coreAsset, quote === coreAsset ? base : quote];
		addMissingAsset(sellAssets, quote);
		addMissingAsset(sellAssets, base);

		let buyAssets = [coreAsset, base === coreAsset ? quote : base];
		addMissingAsset(buyAssets, quote);
		addMissingAsset(buyAssets, base);

		let balances = {};

		currentAccount
			.get('balances', [])
			.filter((balance, id) => {
				return ['1.3.0', quote.get('id'), base.get('id')].indexOf(id) >= 0;
			})
			.forEach((balance, id) => {
				let balanceObject = ChainStore.getObject(balance);
				balances[id] = {
					balance: balanceObject
						? parseInt(balanceObject.get('balance'), 10)
						: 0,
					fee: this._getFee(ChainStore.getAsset(id)),
				};
			});

		function filterAndDefault(assets, balances, idx) {
			let asset;
			/* Only keep assets for which the user has a balance larger than the fee, and for which the fee pool is valid */
			assets = assets.filter((a) => {
				if (!balances[a.get('id')]) {
					return false;
				}
				return hasFeePoolBalance(a.get('id')) && hasBalance(a.get('id'));
			});

			/* If the user has no valid balances, default to core fee */
			if (!assets.length) {
				asset = coreAsset;
				assets.push(coreAsset);
				/* If the user has balances, use the stored idx value unless that asset is no longer available*/
			} else {
				asset = assets[Math.min(assets.length - 1, idx)];
			}

			return {assets, asset};
		}

		let {assets: sellFeeAssets, asset: sellFeeAsset} = filterAndDefault(
			sellAssets,
			balances,
			this.state.sellFeeAssetIdx
		);
		let {assets: buyFeeAssets, asset: buyFeeAsset} = filterAndDefault(
			buyAssets,
			balances,
			this.state.buyFeeAssetIdx
		);

		let sellFee = this._getFee(sellFeeAsset);
		let buyFee = this._getFee(buyFeeAsset);

		return {
			sellFeeAsset,
			sellFeeAssets,
			sellFee,
			buyFeeAsset,
			buyFeeAssets,
			buyFee,
		};
	}

	// ******************** //
	//       Handlers       //
	// ******************** //
	handleOrderTypeTabChange(type, value) {
		SettingsActions.changeViewSetting({
			[`order-form-${type}`]: value,
		});
	}

	handlePriceAlertSave(savedRules = []) {
		// add info about market asset pair
		savedRules = savedRules.map((rule) => ({
			type: rule.type,
			price: rule.price,
			baseAssetSymbol: this.props.baseAsset.get('symbol'),
			quoteAssetSymbol: this.props.quoteAsset.get('symbol'),
		}));

		// drop old rules for current market pair
		let rules = this.props.priceAlert.filter((rule) => {
			return (
				rule &&
				this.props.baseAsset &&
				this.props.quoteAsset &&
				(rule.get('baseAssetSymbol') !== this.props.baseAsset.get('symbol') ||
					rule.get('quoteAssetSymbol') !== this.props.quoteAsset.get('symbol'))
			);
		});

		// pushing new rules
		rules = [...rules, ...savedRules];

		// saving rules
		SettingsActions.setPriceAlert(rules);

		this.hidePriceAlertModal();
	}

	getPriceAlertRules() {
		// getting rules based on market pairs

		let rules = this.props.priceAlert.filter((rule) => {
			return (
				rule &&
				this.props.baseAsset &&
				this.props.quoteAsset &&
				rule.get('baseAssetSymbol') === this.props.baseAsset.get('symbol') &&
				rule.get('quoteAssetSymbol') === this.props.quoteAsset.get('symbol')
			);
		});

		return rules.toJS();
	}

	_handleExpirationChange(type, value) {
		let expirationType = {
			...this.state.expirationType,
			[type]: value,
		};

		if (value !== 'SPECIFIC') {
			SettingsActions.setExchangeLastExpiration({
				...((this.props.exchange.has('lastExpiration') &&
					this.props.exchange.get('lastExpiration').toJS()) ||
					{}),
				[type]: value,
			});
		}

		this.setState({
			expirationType: expirationType,
		});
	}

	_handleCustomExpirationChange(type, time) {
		let expirationCustomTime = {
			...this.state.expirationCustomTime,
			[type]: time,
		};

		this.setState({
			expirationCustomTime: expirationCustomTime,
		});
	}

	EXPIRATIONS = {
		HOUR: {
			title: '1 hour',
			get: () => moment().add(1, 'hour').valueOf(),
		},
		'12HOURS': {
			title: '12 hours',
			get: () => moment().add(12, 'hour').valueOf(),
		},
		'24HOURS': {
			title: '24 hours',
			get: () => moment().add(1, 'day').valueOf(),
		},
		'7DAYS': {
			title: '7 days',
			get: () => moment().add(7, 'day').valueOf(),
		},
		MONTH: {
			title: '30 days',
			get: () => moment().add(30, 'day').valueOf(),
		},
		YEAR: {
			title: '1 year',
			get: () => moment().add(1, 'year').valueOf(),
		},
		SPECIFIC: {
			title: 'Specific',
			get: (type) => {
				return this.state.expirationCustomTime[type].valueOf();
			},
		},
	};

	_initialOrderState(props) {
		let bid = {
			forSaleText: '',
			toReceiveText: '',
			priceText: '',
			for_sale: new Asset({
				asset_id: props.baseAsset.get('id'),
				precision: props.baseAsset.get('precision'),
			}),
			to_receive: new Asset({
				asset_id: props.quoteAsset.get('id'),
				precision: props.quoteAsset.get('precision'),
			}),
		};
		bid.price = new Price({base: bid.for_sale, quote: bid.to_receive});
		let ask = {
			forSaleText: '',
			toReceiveText: '',
			priceText: '',
			for_sale: new Asset({
				asset_id: props.quoteAsset.get('id'),
				precision: props.quoteAsset.get('precision'),
			}),
			to_receive: new Asset({
				asset_id: props.baseAsset.get('id'),
				precision: props.baseAsset.get('precision'),
			}),
		};
		ask.price = new Price({base: ask.for_sale, quote: ask.to_receive});

		return {ask, bid};
	}

	_initialState(props) {
		console.log('_initialState');
		let ws = props.viewSettings;
		let {ask, bid} = this._initialOrderState(props);

		let chart_height = ws.get('chartHeight', 500);
		if (chart_height == 620 && window.innerWidth < 640) {
			// assume user is on default setting, use smaller for mobile
			chart_height = 425;
		}

		return {
			isDepositBridgeModelLoaded: false,
			isDepositModalLoaded: false,
			isMarketPickerModalLoaded: false,
			isBorrowQuoteModalLoaded: false,
			isBorrowBaseModalLoaded: false,
			isDepositBridgeModalVisible: false,
			isDepositModalVisible: false,
			isMarketPickerModalVisible: false,
			isBorrowQuoteModalVisible: false,
			isBorrowBaseModalVisible: false,
			history: [],
			isConfirmBuyOrderModalVisible: false,
			isConfirmBuyOrderModalLoaded: false,
			isConfirmSellOrderModalVisible: false,
			isPriceAlertModalVisible: false,
			isScaledOrderModalVisible: false,
			isConfirmSellOrderModalLoaded: false,
			tabBuySell: ws.get('tabBuySell', 'buy'),
			buySellOpen: ws.get('buySellOpen', true),
			bid,
			ask,
			height: window.innerHeight,
			width: window.innerWidth,
			favorite: false,
			buyDiff: false,
			sellDiff: false,
			buyFeeAssetIdx: ws.get('buyFeeAssetIdx', 0),
			sellFeeAssetIdx: ws.get('sellFeeAssetIdx', 0),
			hidePanel: ws.get('hidePanel', false),
			hideScrollbars: ws.get('hideScrollbars', false),
			singleColumnOrderForm: ws.get('singleColumnOrderForm', true),
			chartType: ws.get('chartType', 'price_chart'),
			chartHeight: chart_height,
			chartZoom: ws.get('chartZoom', true),
			chartTools: ws.get('chartTools', true),
			hideFunctionButtons: ws.get('hideFunctionButtons', true),
			currentPeriod: ws.get('currentPeriod', 3600 * 24 * 30 * 3), // 3 months
			showMarketPicker: false,
			activePanels: ws.get('activePanels', ['left']),
			forceReRender: 0,
			panelWidth: 0,
			mirrorPanels: ws.get('mirrorPanels', false),
			panelTabs: ws.get('panelTabs', {
				my_history: 1,
				history: 1,
				my_orders: 2,
				open_settlement: 2,
			}),
			panelTabsActive: ws.get('panelTabsActive', {
				1: 'my_history',
				2: 'my_orders',
			}),
			currentSection: ws.get('currentSection', 'chart'),
		};
	}

	showMarketPickerModal() {
		this.setState({
			isMarketPickerModalVisible: true,
			isMarketPickerModalLoaded: true,
		});
	}

	hideMarketPickerModal() {
		this.setState({
			isMarketPickerModalVisible: false,
		});
	}

	showPriceAlertModal() {
		this.setState({
			isPriceAlertModalVisible: true,
		});
	}

	hidePriceAlertModal() {
		this.setState({
			isPriceAlertModalVisible: false,
		});
	}

	showScaledOrderModal() {
		this.setState({
			isScaledOrderModalVisible: true,
		});
	}

	hideScaledOrderModal() {
		this.setState({
			isScaledOrderModalVisible: false,
		});
	}

	showBorrowQuoteModal() {
		this.setState({
			isBorrowQuoteModalVisible: true,
			isBorrowQuoteModalLoaded: true,
		});
	}

	hideBorrowQuoteModal() {
		this.setState({
			isBorrowQuoteModalVisible: false,
		});
	}

	showBorrowBaseModal() {
		this.setState({
			isBorrowBaseModalVisible: true,
			isBorrowBaseModalLoaded: true,
		});
	}

	hideBorrowBaseModal() {
		this.setState({
			isBorrowBaseModalVisible: false,
		});
	}

	showDepositBridgeModal() {
		this.setState({
			isDepositBridgeModalVisible: true,
			isDepositBridgeModalLoaded: true,
		});
	}

	hideDepositBridgeModal() {
		this.setState({
			isDepositBridgeModalVisible: false,
		});
	}

	showDepositModal() {
		this.setState({
			isDepositModalVisible: true,
			isDepositModalLoaded: true,
		});
	}

	hideDepositModal() {
		this.setState({
			isDepositModalVisible: false,
		});
	}

	_getLastMarketKey() {
		const chainID = Apis.instance().chain_id;
		return `lastMarket${chainID ? '_' + chainID.substr(0, 8) : ''}`;
	}

	showConfirmBuyOrderModal() {
		this.setState({
			isConfirmBuyOrderModalVisible: true,
			isConfirmBuyOrderModalLoaded: true,
		});
	}

	hideConfirmBuyOrderModal() {
		this.setState({
			isConfirmBuyOrderModalVisible: false,
		});
	}

	showConfirmSellOrderModal() {
		this.setState({
			isConfirmSellOrderModalVisible: true,
			isConfirmSellOrderModalLoaded: true,
		});
	}

	hideConfirmSellOrderModal() {
		this.setState({
			isConfirmSellOrderModalVisible: false,
		});
	}

	_getFee(asset = this.props.coreAsset) {
		return (
			this.state.feeStatus[asset.get('id')] &&
			this.state.feeStatus[asset.get('id')].fee
		);
	}

	_verifyFee(fee, sell, sellBalance, coreBalance) {
		let coreFee = this._getFee();

		if (fee.asset_id === '1.3.0') {
			if (coreFee.getAmount() <= coreBalance) {
				return '1.3.0';
			} else {
				return null;
			}
		} else {
			let sellSum =
				sell.asset_id === fee.asset_id
					? fee.getAmount() + sell.getAmount()
					: sell.getAmount();
			if (sellSum <= sellBalance) {
				// Sufficient balance in asset to pay fee
				return fee.asset_id;
			} else if (
				coreFee.getAmount() <= coreBalance &&
				fee.asset_id !== '1.3.0'
			) {
				// Sufficient balance in core asset to pay fee
				return '1.3.0';
			} else {
				return null; // Unable to pay fee
			}
		}
	}

	_createLimitOrderConfirm(
		buyAsset,
		sellAsset,
		sellBalance,
		coreBalance,
		feeAsset,
		type,
		short = true,
		e
	) {
		e.preventDefault();
		let {highestBid, lowestAsk} = this.props.marketData;
		const {backingAssetValue, backingAssetPolarity} = this.state;
		let current = this.state[type === 'sell' ? 'ask' : 'bid'];

		sellBalance = current.for_sale.clone(
			sellBalance
				? parseInt(ChainStore.getObject(sellBalance).toJS().balance, 10)
				: 0
		);
		coreBalance = new Asset({
			amount: coreBalance
				? parseInt(ChainStore.getObject(coreBalance).toJS().balance, 10)
				: 0,
		});

		let fee = this._getFee(feeAsset);
		let feeID = this._verifyFee(
			fee,
			current.for_sale,
			sellBalance.getAmount(),
			coreBalance.getAmount()
		);

		if (!feeID) {
			return notification.error({
				message: counterpart.translate(
					'notifications.exchange_insufficient_funds_for_fees'
				),
			});
		}

		if (backingAssetValue) {
			let price;

			if (type === 'buy') {
				price = this.state.bid.price.toReal();
			} else {
				price = this.state.ask.price.toReal();
			}

			if (backingAssetPolarity) {
				if (price <= backingAssetValue) {
					return notification.error({
						message: `Price should be higher than ${backingAssetValue}`,
					});
				}
			} else {
				if (price >= backingAssetValue) {
					return notification.error({
						message: `Price should be lower than ${backingAssetValue}`,
					});
				}
			}
		}

		if (type === 'buy' && lowestAsk) {
			let diff = this.state.bid.price.toReal() / lowestAsk.getPrice();
			if (diff > 1.2) {
				this.showConfirmBuyOrderModal();
				return this.setState({
					buyDiff: diff,
				});
			}
		} else if (type === 'sell' && highestBid) {
			let diff = 1 / (this.state.ask.price.toReal() / highestBid.getPrice());
			if (diff > 1.2) {
				this.showConfirmSellOrderModal();
				return this.setState({
					sellDiff: diff,
				});
			}
		}

		let isPredictionMarket = sellAsset.getIn([
			'bitasset',
			'is_prediction_market',
		]);

		if (current.for_sale.gt(sellBalance) && !isPredictionMarket) {
			return notification.error({
				message: counterpart.translate(
					'notifications.exchange_insufficient_funds_to_place_order',
					{
						amount: current.for_sale.getAmount({real: true}),
						symbol: sellAsset.get('symbol'),
					}
				),
			});
		}
		//
		if (
			!(current.for_sale.getAmount() > 0 && current.to_receive.getAmount() > 0)
		) {
			return notification.warning({
				message: counterpart.translate(
					'notifications.exchange_enter_valid_values'
				),
			});
		}
		//
		if (type === 'sell' && isPredictionMarket && short) {
			return this._createPredictionShort(feeID);
		}

		this._createLimitOrder(type, feeID);
	}

	_createScaledOrder(orders, feeID) {
		const limitOrders = orders.map((order) => {
			return new LimitOrderCreate({
				for_sale: order.for_sale,
				expiration: new Date(order.expirationTime || false),
				to_receive: order.to_receive,
				seller: this.props.currentAccount.get('id'),
				fee: {
					asset_id: feeID,
					amount: 0,
				},
			});
		});

		return MarketsActions.createLimitOrder2(limitOrders)
			.then((result) => {
				if (result.error) {
					if (result.error.message !== 'wallet locked')
						notification.error({
							message: counterpart.translate(
								'notifications.exchange_unknown_error_place_scaled_order'
							),
						});
				}
			})
			.catch((e) => {
				console.log('order failed:', e);
			});
	}

	_createLimitOrder(type, feeID) {
		let actionType = type === 'sell' ? 'ask' : 'bid';

		let current = this.state[actionType];

		let expirationTime = null;
		if (this.state.expirationType[actionType] === 'SPECIFIC') {
			expirationTime =
				this.EXPIRATIONS[this.state.expirationType[actionType]].get(actionType);
		} else {
			expirationTime =
				this.EXPIRATIONS[this.state.expirationType[actionType]].get();
		}

		const order = new LimitOrderCreate({
			for_sale: current.for_sale,
			expiration: new Date(expirationTime || false),
			to_receive: current.to_receive,
			seller: this.props.currentAccount.get('id'),
			fee: {
				asset_id: feeID,
				amount: 0,
			},
		});
		const {marketName, first} = market_utils.getMarketName(
			this.props.baseAsset,
			this.props.quoteAsset
		);
		const inverted = this.props.marketDirections.get(marketName);
		const shouldFlip =
			(inverted && first.get('id') !== this.props.baseAsset.get('id')) ||
			(!inverted && first.get('id') !== this.props.baseAsset.get('id'));
		if (shouldFlip) {
			let setting = {};
			setting[marketName] = !inverted;
			SettingsActions.changeMarketDirection(setting);
		}
		if (__DEV__) 'order:', JSON.stringify(order.toObject());

		return MarketsActions.createLimitOrder2(order)
			.then((result) => {
				if (result.error) {
					if (result.error.message !== 'wallet locked')
						console.log(result.error);
					notification.error({
						message: counterpart.translate(
							'notifications.exchange_unknown_error_place_order',
							{
								amount: current.to_receive.getAmount({
									real: true,
								}),
								symbol: current.to_receive.asset_id,
							}
						),
					});
				} else {
					this._clearForms(type === 'sell' ? 'ask' : 'bid');
				}
			})
			.catch((e) => {
				console.error('order failed:', e);
			});
	}

	/***
	 * Clear forms
	 * @string: type
	 */
	_clearForms(type) {
		let {ask, bid} = this._initialOrderState(this.props);

		if (!type) {
			this.setState({
				bid,
				ask,
			});
		} else if (type == 'ask') {
			this.setState({ask});
		} else if (type == 'bid') {
			this.setState({bid});
		}
	}

	_createPredictionShort(feeID) {
		let current = this.state.ask;
		const order = new LimitOrderCreate({
			for_sale: current.for_sale,
			to_receive: current.to_receive,
			seller: this.props.currentAccount.get('id'),
			fee: {
				asset_id: feeID,
				amount: 0,
			},
		});

		Promise.all([
			FetchChain(
				'getAsset',
				this.props.quoteAsset.getIn([
					'bitasset',
					'options',
					'short_backing_asset',
				])
			),
		]).then((assets) => {
			let [backingAsset] = assets;
			let collateral = new Asset({
				amount: order.amount_for_sale.getAmount(),
				asset_id: backingAsset.get('id'),
				precision: backingAsset.get('precision'),
			});

			MarketsActions.createPredictionShort(order, collateral).then((result) => {
				if (result.error) {
					if (result.error.message !== 'wallet locked')
						notification.error({
							message: counterpart.translate(
								'notifications.exchange_unknown_error_place_order',
								{
									amount: buyAssetAmount,
									symbol: buyAsset.symbol,
								}
							),
						});
				}
			});
		});
	}

	_forceBuy(type, feeAsset, sellBalance, coreBalance) {
		let current = this.state[type === 'sell' ? 'ask' : 'bid'];
		// Convert fee to relevant asset fee and check if user has sufficient balance
		sellBalance = current.for_sale.clone(
			sellBalance
				? parseInt(ChainStore.getObject(sellBalance).get('balance'), 10)
				: 0
		);
		coreBalance = new Asset({
			amount: coreBalance
				? parseInt(ChainStore.getObject(coreBalance).toJS().balance, 10)
				: 0,
		});
		let fee = this._getFee(feeAsset);
		let feeID = this._verifyFee(
			fee,
			current.for_sale,
			sellBalance.getAmount(),
			coreBalance.getAmount()
		);

		if (feeID) {
			this._createLimitOrder(type, feeID);
		} else {
			console.error('Unable to pay fees, aborting limit order creation');
		}
	}

	_forceSell(type, feeAsset, sellBalance, coreBalance) {
		let current = this.state[type === 'sell' ? 'ask' : 'bid'];
		// Convert fee to relevant asset fee and check if user has sufficient balance
		sellBalance = current.for_sale.clone(
			sellBalance
				? parseInt(ChainStore.getObject(sellBalance).get('balance'), 10)
				: 0
		);
		coreBalance = new Asset({
			amount: coreBalance
				? parseInt(ChainStore.getObject(coreBalance).toJS().balance, 10)
				: 0,
		});
		let fee = this._getFee(feeAsset);
		let feeID = this._verifyFee(
			fee,
			current.for_sale,
			sellBalance.getAmount(),
			coreBalance.getAmount()
		);

		if (feeID) {
			this._createLimitOrder(type, feeID);
		} else {
			console.error('Unable to pay fees, aborting limit order creation');
		}
	}

	_cancelLimitOrder(orderID, e) {
		e.preventDefault();
		let {currentAccount} = this.props;
		MarketsActions.cancelLimitOrder(
			currentAccount.get('id'),
			orderID // order id to cancel
		);
	}

	_changeZoomPeriod(size, e) {
		e.preventDefault();
		if (size !== this.state.currentPeriod) {
			this.setState({
				currentPeriod: size,
			});
			SettingsActions.changeViewSetting({
				currentPeriod: size,
			});
		}
	}

	_onGroupOrderLimitChange(e) {
		let groupLimit;

		if (typeof e == 'object') {
			e.preventDefault();
			groupLimit = parseInt(e.target.value);
		}

		if (typeof e == 'number') groupLimit = parseInt(e);

		MarketsActions.changeCurrentGroupLimit(groupLimit);

		if (groupLimit !== this.props.currentGroupOrderLimit) {
			MarketsActions.changeCurrentGroupLimit(groupLimit);
			let currentSub = this.props.sub.split('_');
			MarketsActions.unSubscribeMarket(currentSub[0], currentSub[1]).then(
				() => {
					this.props.subToMarket(this.props, this.props.bucketSize, groupLimit);
				}
			);
		}
	}

	_setTabBuySell(tab) {
		this.setState({
			tabBuySell: tab,
		});
		SettingsActions.changeViewSetting({
			tabBuySell: tab,
		});
	}

	_setPanelTabInGroup(group, activetab) {
		let {panelTabsActive} = this.state;

		Object.keys(panelTabsActive).map((a) => {
			if (a == group) {
				panelTabsActive[a] = activetab;
			}
		});

		this.setState({
			panelTabsActive: panelTabsActive,
			forceReRender: true, // Requires to forcefully re-render for tab to stick
		});

		SettingsActions.changeViewSetting({
			panelTabsActive: panelTabsActive,
		});
	}

	_setPanelTabs(panelName, newTabsId) {
		let {panelTabs, panelTabsActive} = this.state;

		let newState = {
			panelTabs: panelTabs,
			panelTabsActive: panelTabsActive,
		};

		// Set new Tabs ID for Panel
		Object.keys(panelTabs).map((thisPanelName) => {
			newState.panelTabs[thisPanelName] =
				thisPanelName == panelName ? newTabsId : panelTabs[thisPanelName];
		});

		// Reset all Active Panel Tabs
		Object.keys(panelTabsActive).map((thisTabId) => {
			newState.panelTabsActive[thisTabId] = '';
		});

		this.setState({
			newState,
		});

		SettingsActions.changeViewSetting({
			...newState,
		});
	}

	/**
	 *
	 * @param {string} panel - Panel to toggle
	 */
	_togglePanel(panel) {
		if (!panel) return;

		let newState = [];

		this.state.activePanels.forEach((a) => {
			if (a !== panel) {
				newState.push(a);
			}
		});

		if (!this.state.activePanels.includes(panel)) {
			newState.push(panel);
		}

		this.setState({
			activePanels: newState,
		});

		SettingsActions.changeViewSetting({
			activePanels: newState,
		});
	}

	_chartZoom = () => {
		SettingsActions.changeViewSetting({
			chartZoom: !this.state.chartZoom,
		});

		let chartType = this.state.chartType;
		this.setState({
			chartZoom: !this.state.chartZoom,
			chartType: 'hidden_chart',
		});
		// force reload
		setTimeout(() => {
			this.setState({
				chartType: chartType,
			});
		}, 100);
	};

	_chartTools = () => {
		SettingsActions.changeViewSetting({
			chartTools: !this.state.chartTools,
		});

		let chartType = this.state.chartType;
		this.setState({
			chartTools: !this.state.chartTools,
			chartType: 'hidden_chart',
		});
		// force reload
		setTimeout(() => {
			this.setState({
				chartType: chartType,
			});
		}, 100);
	};

	_hideFunctionButtons = () => {
		SettingsActions.changeViewSetting({
			hideFunctionButtons: !this.state.hideFunctionButtons,
		});

		this.setState({
			hideFunctionButtons: !this.state.hideFunctionButtons,
		});
	};

	_toggleMarketPicker(asset) {
		let showMarketPicker = !!asset ? true : false;

		if (showMarketPicker) {
			this.showMarketPickerModal();
		}

		this.setState({
			showMarketPicker,
			marketPickerAsset: asset,
		});
	}

	_currentPriceClick(type, price) {
		const isBid = type === 'bid';
		let current = this.state[type];
		current.price = price[isBid ? 'invert' : 'clone']();
		current.priceText = current.price.toReal();
		if (isBid) {
			this._setForSale(current, isBid) || this._setReceive(current, isBid);
		} else {
			this._setReceive(current, isBid) || this._setForSale(current, isBid);
		}
		this.forceUpdate();
	}

	_orderbookClick(order) {
		const isBid = order.isBid();
		let forSale = order.totalToReceive({noCache: true});
		// let toReceive = order.totalForSale({noCache: true});
		let toReceive = forSale.times(order.sellPrice());

		let newPrice = new Price({
			base: isBid ? toReceive : forSale,
			quote: isBid ? forSale : toReceive,
		});

		let current = this.state[isBid ? 'bid' : 'ask'];
		current.price = newPrice;
		current.priceText = newPrice.toReal();

		let newState = {
			// If isBid is true, newState defines a new ask order and vice versa
			[isBid ? 'ask' : 'bid']: {
				for_sale: forSale,
				forSaleText: forSale.getAmount({real: true}),
				to_receive: toReceive,
				toReceiveText: toReceive.getAmount({real: true}),
				price: newPrice,
				priceText: newPrice.toReal(),
			},
		};

		if (isBid) {
			this._setForSale(current, isBid) || this._setReceive(current, isBid);
		} else {
			this._setReceive(current, isBid) || this._setForSale(current, isBid);
		}
		this.setState(newState);
	}

	_borrowQuote() {
		this.showBorrowQuoteModal();
	}

	_borrowBase() {
		this.showBorrowBaseModal();
	}

	_onDeposit(type) {
		this.setState({
			depositModalType: type,
		});

		this.showDepositModal();
	}

	_onBuy(type) {
		this.setState({
			buyModalType: type,
		});
		this.showDepositBridgeModal();
	}

	_getSettlementInfo() {
		let {lowestCallPrice, feedPrice, quoteAsset} = this.props;

		let showCallLimit = false;
		if (feedPrice) {
			if (feedPrice.inverted) {
				showCallLimit = lowestCallPrice <= feedPrice.toReal();
			} else {
				showCallLimit = lowestCallPrice >= feedPrice.toReal();
			}
		}
		return !!(
			showCallLimit &&
			lowestCallPrice &&
			!quoteAsset.getIn(['bitasset', 'is_prediction_market'])
		);
	}

	onChangeFeeAsset(type, value) {
		if (type === 'buy') {
			this.setState({
				buyFeeAssetIdx: value,
			});

			SettingsActions.changeViewSetting({
				buyFeeAssetIdx: value,
			});
		} else {
			this.setState({
				sellFeeAssetIdx: value,
			});

			SettingsActions.changeViewSetting({
				sellFeeAssetIdx: value,
			});
		}
	}

	onChangeChartHeight({value, increase}) {
		let newHeight = value
			? value
			: this.state.chartHeight + (increase ? 20 : -20);
		if (newHeight < 425) {
			newHeight = 425;
		}
		if (newHeight > 1000) {
			newHeight = 1000;
		}

		this.setState({
			chartHeight: newHeight,
		});

		SettingsActions.changeViewSetting({
			chartHeight: newHeight,
		});
	}

	_setReceive(state, isBid, value, isPercent100 = false) {
		if (state.price.isValid() && state.for_sale.hasAmount()) {
			state.to_receive = state.for_sale.times(state.price);
			if (isPercent100) {
				state.toReceiveText = Number(
					Number(value) * this.state.ask.priceText
				).toFixed(6);
			} else {
				state.toReceiveText = state.to_receive
					.getAmount({real: true})
					.toString();
			}
			return true;
		} else {
			state.toReceiveText = '';
		}
		return false;
	}

	_setForSale(state, isBid, value, isPercent100 = false) {
		if (state.price.isValid() && state.to_receive.hasAmount()) {
			state.for_sale = state.to_receive.times(state.price, true);
			if (isPercent100) {
				state.forSaleText = Number(
					Number(value) * this.state.bid.priceText
				).toFixed(6);
			} else {
				state.forSaleText = state.for_sale.getAmount({real: true}).toString();
			}
			return true;
		} else {
			state.forSaleText = '';
		}
		return false;
	}

	_setPrice(state) {
		if (state.for_sale.hasAmount() && state.to_receive.hasAmount()) {
			state.price = new Price({
				base: state.for_sale,
				quote: state.to_receive,
			});
			state.priceText = state.price.toReal().toString();
			return true;
		}
		return false;
	}

	_setPriceText(state, isBid) {
		const currentBase = state[isBid ? 'for_sale' : 'to_receive'];
		const currentQuote = state[isBid ? 'to_receive' : 'for_sale'];
		if (currentBase.hasAmount() && currentQuote.hasAmount()) {
			state.priceText = new Price({
				base: currentBase,
				quote: currentQuote,
			})
				.toReal()
				.toString();
		}
	}

	_onInputPrice(type, e) {
		let current = this.state[type];
		const isBid = type === 'bid';
		current.price = new Price({
			base: current[isBid ? 'for_sale' : 'to_receive'],
			quote: current[isBid ? 'to_receive' : 'for_sale'],
			real: parseFloat(e.target.value) || 0,
		});
		if (isBid) {
			this._setForSale(current, isBid) || this._setReceive(current, isBid);
		} else {
			this._setReceive(current, isBid) || this._setForSale(current, isBid);
		}

		current.priceText = e.target.value;
		this.forceUpdate();
	}

	_onInputPricePercent(type, value) {
		let current = this.state[type];
		const isBid = type === 'bid';
		current.price = new Price({
			base: current[isBid ? 'for_sale' : 'to_receive'],
			quote: current[isBid ? 'to_receive' : 'for_sale'],
			real: parseFloat(value) || 0,
		});
		if (isBid) {
			this._setForSale(current, isBid) || this._setReceive(current, isBid);
		} else {
			this._setReceive(current, isBid) || this._setForSale(current, isBid);
		}

		current.priceText = value;
		this.forceUpdate();
	}

	_onInputSell(type, isBid, e) {
		let current = this.state[type];
		// const isBid = type === "bid";
		current.for_sale.setAmount({real: parseFloat(e.target.value) || 0});
		if (current.price.isValid()) {
			this._setReceive(current, isBid);
		}
		// else {
		// 	this._setPrice(current);
		// }

		current.forSaleText = e.target.value;
		// this._setPriceText(current, type === 'bid');

		this.forceUpdate();
	}

	_onInputSellPercent(type, isBid, value, isPercent100) {
		let current = this.state[type];
		current.for_sale.setAmount({real: parseFloat(value) || 0});
		if (current.price.isValid()) {
			this._setReceive(current, isBid, value, isPercent100);
		}
		current.forSaleText = value;
		this.forceUpdate();
	}

	_onInputReceive(type, isBid, e) {
		let current = this.state[type];
		// const isBid = type === "bid";
		current.to_receive.setAmount({real: parseFloat(e.target.value) || 0});

		if (current.price.isValid()) {
			this._setForSale(current, isBid);
		}
		// else {
		// 	this._setPrice(current);
		// }

		current.toReceiveText = e.target.value;
		// this._setPriceText(current, type === 'bid');
		this.forceUpdate();
	}

	_onInputReceivePercent(type, isBid, value, isPercent100 = false) {
		let current = this.state[type];
		current.to_receive.setAmount({real: parseFloat(value) || 0});
		if (current.price.isValid()) {
			this._setForSale(current, isBid, value, isPercent100);
		}
		current.toReceiveText = value;
		this.forceUpdate();
	}

	isMarketFrozen() {
		let {baseAsset, quoteAsset} = this.props;

		let baseWhiteList = baseAsset
			.getIn(['options', 'whitelist_markets'])
			.toJS();
		let quoteWhiteList = quoteAsset
			.getIn(['options', 'whitelist_markets'])
			.toJS();
		let baseBlackList = baseAsset
			.getIn(['options', 'blacklist_markets'])
			.toJS();
		let quoteBlackList = quoteAsset
			.getIn(['options', 'blacklist_markets'])
			.toJS();

		if (
			quoteWhiteList.length &&
			quoteWhiteList.indexOf(baseAsset.get('id')) === -1
		) {
			return {isFrozen: true, frozenAsset: quoteAsset.get('symbol')};
		}
		if (
			baseWhiteList.length &&
			baseWhiteList.indexOf(quoteAsset.get('id')) === -1
		) {
			return {isFrozen: true, frozenAsset: baseAsset.get('symbol')};
		}

		if (
			quoteBlackList.length &&
			quoteBlackList.indexOf(baseAsset.get('id')) !== -1
		) {
			return {isFrozen: true, frozenAsset: quoteAsset.get('symbol')};
		}
		if (
			baseBlackList.length &&
			baseBlackList.indexOf(quoteAsset.get('id')) !== -1
		) {
			return {isFrozen: true, frozenAsset: baseAsset.get('symbol')};
		}

		return {isFrozen: false};
	}

	_getOrders() {
		const {currentAccount, baseAsset, quoteAsset, feedPrice} = this.props;
		const orders = currentAccount.get('orders'),
			call_orders = currentAccount.get('call_orders');

		const baseID = baseAsset.get('id'),
			quoteID = quoteAsset.get('id');
		const assets = {
			[baseAsset.get('id')]: {precision: baseAsset.get('precision')},
			[quoteAsset.get('id')]: {precision: quoteAsset.get('precision')},
		};

		let limitOrders = orders
			.toArray()
			.map((order) => {
				let o = ChainStore.getObject(order);
				if (!o) return null;
				let sellBase = o.getIn(['sell_price', 'base', 'asset_id']),
					sellQuote = o.getIn(['sell_price', 'quote', 'asset_id']);

				if (
					(sellBase === baseID && sellQuote === quoteID) ||
					(sellBase === quoteID && sellQuote === baseID)
				) {
					return new LimitOrder(o.toJS(), assets, quoteAsset.get('id'));
				}
			})
			.filter((a) => !!a);

		let callOrders = call_orders
			.toArray()
			.map((order) => {
				try {
					let o = ChainStore.getObject(order);
					if (!o) return null;
					let sellBase = o.getIn(['call_price', 'base', 'asset_id']),
						sellQuote = o.getIn(['call_price', 'quote', 'asset_id']);
					if (
						(sellBase === baseID && sellQuote === quoteID) ||
						(sellBase === quoteID && sellQuote === baseID)
					) {
						return feedPrice
							? new CallOrder(o.toJS(), assets, quoteAsset.get('id'), feedPrice)
							: null;
					}
				} catch (e) {
					return null;
				}
			})
			.filter((a) => !!a)
			.filter((a) => {
				try {
					return a.isMarginCalled();
				} catch (err) {
					return false;
				}
			});
		return limitOrders.concat(callOrders);
	}

	render() {
		let {
			currentAccount,
			marketLimitOrders,
			marketData,
			activeMarketHistory,
			invertedCalls,
			starredMarkets,
			quoteAsset,
			baseAsset,
			lowestCallPrice,
			marketStats,
			marketReady,
			marketSettleOrders,
			bucketSize,
			totals,
			feedPrice,
			buckets,
			coreAsset,
			trackedGroupsConfig,
			currentGroupOrderLimit,
		} = this.props;

		const {
			combinedBids,
			combinedAsks,
			lowestAsk,
			highestAsk,
			highestBid,
			lowestBid,
			flatBids,
			flatAsks,
			flatCalls,
			flatSettles,
			groupedBids,
			groupedAsks,
		} = marketData;

		let {
			bid,
			ask,
			chartHeight,
			chartType,
			buyDiff,
			sellDiff,
			width,
			tabBuySell,
			hidePanel,
			hideScrollbars,
			activePanels,
			mirrorPanels,
			panelTabsActive,
			panelTabs,
			singleColumnOrderForm,
			chartZoom,
			chartTools,
			hideFunctionButtons,
			backingAssetValue,
			backingAssetPolarity,
			currentSection,
		} = this.state;
		const {isFrozen} = this.isMarketFrozen();

		let centerContainerWidth = width;
		if (this.refs.center) {
			centerContainerWidth = this.refs.center.clientWidth;
		}

		let base = null,
			quote = null,
			accountBalance = null,
			quoteBalance = null,
			baseBalance = null,
			coreBalance = null,
			quoteSymbol,
			baseSymbol,
			showCallLimit = false,
			latest,
			changeClass;

		const showVolumeChart = this.props.viewSettings.get(
			'showVolumeChart',
			true
		);

		if (quoteAsset.size && baseAsset.size && currentAccount.size) {
			base = baseAsset;
			quote = quoteAsset;

			baseSymbol = base.get('symbol');
			quoteSymbol = quote.get('symbol');

			accountBalance = currentAccount.get('balances').toJS();

			if (accountBalance) {
				for (let id in accountBalance) {
					if (id === quote.get('id')) {
						quoteBalance = accountBalance[id];
					}
					if (id === base.get('id')) {
						baseBalance = accountBalance[id];
					}
					if (id === '1.3.0') {
						coreBalance = accountBalance[id];
					}
				}
			}

			showCallLimit = this._getSettlementInfo();
		}

		let quoteIsBitAsset = quoteAsset.get('bitasset_data_id') ? true : false;
		let baseIsBitAsset = baseAsset.get('bitasset_data_id') ? true : false;

		let spread =
			lowestAsk && highestBid
				? lowestAsk.getPrice() - highestBid.getPrice()
				: 0;

		// Latest price
		if (activeMarketHistory.size) {
			let latest_two = activeMarketHistory.take(2);
			latest = latest_two.first();
			let second_latest = latest_two.last();

			changeClass =
				latest.getPrice() === second_latest.getPrice()
					? ''
					: latest.getPrice() - second_latest.getPrice() > 0
					? 'change-up'
					: 'change-down';
		}

		// Fees
		if (!coreAsset || !Object.keys(this.state.feeStatus).length) {
			return null;
		}

		let {
			sellFeeAsset,
			sellFeeAssets,
			sellFee,
			buyFeeAsset,
			buyFeeAssets,
			buyFee,
		} = this._getFeeAssets(quote, base, coreAsset);

		// Decimals
		let hasPrediction =
			base.getIn(['bitasset', 'is_prediction_market']) ||
			quote.getIn(['bitasset', 'is_prediction_market']);

		let expirationType = this.state.expirationType;
		let expirationCustomTime = this.state.expirationCustomTime;

		let isPanelActive = activePanels.length >= 1 ? true : false;

		// Market Order Tab Price calc
		let buyMarketPrice = highestAsk?.getPrice();
		let sellMarketPrice = lowestBid?.getPrice();
		if (backingAssetValue) {
			if (buyMarketPrice) {
				if (backingAssetPolarity) {
					buyMarketPrice =
						backingAssetValue > buyMarketPrice
							? backingAssetValue
							: buyMarketPrice;
				} else {
					buyMarketPrice =
						backingAssetValue < buyMarketPrice
							? backingAssetValue
							: buyMarketPrice;
				}
			}

			if (sellMarketPrice) {
				if (backingAssetPolarity) {
					sellMarketPrice =
						backingAssetValue > sellMarketPrice
							? backingAssetValue
							: sellMarketPrice;
				} else {
					sellMarketPrice =
						backingAssetValue < sellMarketPrice
							? backingAssetValue
							: sellMarketPrice;
				}
			}
		}

		/***
		 * Generate layout cards
		 */
		let actionCardIndex = 0;

		let buyForm = (
			<Tabs
				animated={false}
				activeKey={this.props.viewSettings.get('order-form-bid') || 'limit'}
				style={{
					flexGrow: 1,
					minWidth: '290px',
				}}
				onChange={this.handleOrderTypeTabChange.bind(this, 'bid')}
				defaultActiveKey={'limit'}
				className="buy-form"
			>
				<Tabs.TabPane
					style={{fontSize: '10px'}}
					tab={counterpart.translate('exchange.market')}
					key={'market'}
				>
					<MarketOrderTab
						expirationType={expirationType['bid']}
						expirations={this.EXPIRATIONS}
						expirationCustomTime={expirationCustomTime['bid']}
						onExpirationTypeChange={this._handleExpirationChange.bind(
							this,
							'bid'
						)}
						onExpirationCustomChange={this._handleCustomExpirationChange.bind(
							this,
							'bid'
						)}
						currentAccount={currentAccount}
						createMarketOrder={this._createScaledOrder}
						type={'bid'}
						quoteAsset={quote}
						baseAsset={base}
						historyUrl={this.props.history.location}
						price={buyMarketPrice}
						locked_v2={this.props.locked_v2}
						total={totals.ask}
					/>
				</Tabs.TabPane>
				<Tabs.TabPane
					tab={counterpart.translate('exchange.limit')}
					key={'limit'}
				>
					<BuySell
						showScaledOrderModal={this.showScaledOrderModal}
						key={`actionCard_${actionCardIndex++}`}
						onBorrow={baseIsBitAsset ? this._borrowBase.bind(this) : null}
						onBuy={this._onBuy.bind(this, 'bid')}
						onDeposit={this._onDeposit.bind(this, 'bid')}
						currentAccount={currentAccount}
						isOpen={this.state.buySellOpen}
						parentWidth={centerContainerWidth}
						styles={{
							padding: 5,
							paddingRight: mirrorPanels ? 15 : 5,
						}}
						type="bid"
						hideHeader={true}
						expirationType={expirationType['bid']}
						expirations={this.EXPIRATIONS}
						expirationCustomTime={expirationCustomTime['bid']}
						onExpirationTypeChange={this._handleExpirationChange.bind(
							this,
							'bid'
						)}
						onExpirationCustomChange={this._handleCustomExpirationChange.bind(
							this,
							'bid'
						)}
						amount={bid.toReceiveText}
						price={bid.priceText}
						total={bid.forSaleText}
						quote={quote}
						base={base}
						amountChange={this._onInputReceive.bind(this, 'bid', true)}
						amountChangePercent={this._onInputReceivePercent.bind(this)}
						priceChange={this._onInputPrice.bind(this, 'bid')}
						priceChangePercent={this._onInputPricePercent.bind(this)}
						setPrice={this._currentPriceClick.bind(this)}
						totalChange={this._onInputSell.bind(this, 'bid', false)}
						clearForm={this._clearForms.bind(this, 'bid')}
						balance={baseBalance}
						balanceId={base.get('id')}
						onSubmit={this._createLimitOrderConfirm.bind(
							this,
							quote,
							base,
							baseBalance,
							coreBalance,
							buyFeeAsset,
							'buy'
						)}
						balancePrecision={base.get('precision')}
						quotePrecision={quote.get('precision')}
						totalPrecision={base.get('precision')}
						currentPrice={lowestAsk.getPrice()}
						currentPriceObject={lowestAsk}
						account={currentAccount.get('name')}
						fee={buyFee}
						hasFeeBalance={this.state.feeStatus[buyFee.asset_id].hasBalance}
						feeAssets={buyFeeAssets}
						feeAsset={buyFeeAsset}
						onChangeFeeAsset={this.onChangeFeeAsset.bind(this, 'buy')}
						isPredictionMarket={base.getIn([
							'bitasset',
							'is_prediction_market',
						])}
						isPanelActive={isPanelActive}
						activePanels={activePanels}
						singleColumnOrderForm={singleColumnOrderForm}
						hideFunctionButtons={hideFunctionButtons}
						historyUrl={this.props.history.location}
						marketPrice={latest && latest.getPrice()}
						locked_v2={this.props.locked_v2}
					/>
				</Tabs.TabPane>
				<Tabs.TabPane
					style={{fontSize: '10px'}}
					tab={counterpart.translate('exchange.scaled')}
					key={'scaled'}
				>
					<ScaledOrderTab
						expirationType={expirationType['bid']}
						expirations={this.EXPIRATIONS}
						expirationCustomTime={expirationCustomTime['bid']}
						onExpirationTypeChange={this._handleExpirationChange.bind(
							this,
							'bid'
						)}
						onExpirationCustomChange={this._handleCustomExpirationChange.bind(
							this,
							'bid'
						)}
						currentPrice={lowestAsk.getPrice()}
						lastClickedPrice={this.state.ask && this.state.ask.priceText}
						currentAccount={currentAccount}
						createScaledOrder={this._createScaledOrder}
						type={'bid'}
						quoteAsset={quote}
						baseAsset={base}
						historyUrl={this.props.history.location}
						locked_v2={this.props.locked_v2}
					/>
				</Tabs.TabPane>
			</Tabs>
		);

		let sellForm = (
			<Tabs
				activeKey={this.props.viewSettings.get('order-form-ask') || 'limit'}
				onChange={this.handleOrderTypeTabChange.bind(this, 'ask')}
				animated={false}
				defaultActiveKey={'limit'}
				className="sell-form"
			>
				<Tabs.TabPane
					tab={counterpart.translate('exchange.market')}
					key={'market'}
				>
					<MarketOrderTab
						expirationType={expirationType['ask']}
						expirations={this.EXPIRATIONS}
						expirationCustomTime={expirationCustomTime['ask']}
						onExpirationTypeChange={this._handleExpirationChange.bind(
							this,
							'ask'
						)}
						onExpirationCustomChange={this._handleCustomExpirationChange.bind(
							this,
							'ask'
						)}
						lastClickedPrice={this.state.ask && this.state.ask.priceText}
						currentAccount={currentAccount}
						createMarketOrder={this._createScaledOrder}
						type="ask"
						baseAsset={base}
						quoteAsset={quote}
						historyUrl={this.props.history.location}
						price={sellMarketPrice}
						locked_v2={this.props.locked_v2}
						total={totals.bid}
					/>
				</Tabs.TabPane>
				<Tabs.TabPane
					tab={counterpart.translate('exchange.limit')}
					key={'limit'}
				>
					<BuySell
						showScaledOrderModal={this.showScaledOrderModal}
						key={`actionCard_${actionCardIndex++}`}
						onBorrow={quoteIsBitAsset ? this._borrowQuote.bind(this) : null}
						onBuy={this._onBuy.bind(this, 'ask')}
						onDeposit={this._onDeposit.bind(this, 'ask')}
						currentAccount={currentAccount}
						isOpen={this.state.buySellOpen}
						parentWidth={centerContainerWidth}
						styles={{
							padding: 5,
							paddingRight: mirrorPanels ? 15 : 5,
						}}
						type="ask"
						hideHeader={true}
						amount={ask.forSaleText}
						price={ask.priceText}
						total={ask.toReceiveText}
						quote={quote}
						base={base}
						expirationType={expirationType['ask']}
						expirations={this.EXPIRATIONS}
						expirationCustomTime={expirationCustomTime['ask']}
						onExpirationTypeChange={this._handleExpirationChange.bind(
							this,
							'ask'
						)}
						onExpirationCustomChange={this._handleCustomExpirationChange.bind(
							this,
							'ask'
						)}
						amountChange={this._onInputSell.bind(this, 'ask', false)}
						amountChangePercent={this._onInputSellPercent.bind(this)}
						priceChange={this._onInputPrice.bind(this, 'ask')}
						priceChangePercent={this._onInputPricePercent.bind(this)}
						setPrice={this._currentPriceClick.bind(this)}
						totalChange={this._onInputReceive.bind(this, 'ask', true)}
						clearForm={this._clearForms.bind(this, 'ask')}
						balance={quoteBalance}
						balanceId={quote.get('id')}
						onSubmit={this._createLimitOrderConfirm.bind(
							this,
							base,
							quote,
							quoteBalance,
							coreBalance,
							sellFeeAsset,
							'sell'
						)}
						balancePrecision={quote.get('precision')}
						quotePrecision={quote.get('precision')}
						totalPrecision={base.get('precision')}
						currentPrice={highestBid.getPrice()}
						currentPriceObject={highestBid}
						account={currentAccount.get('name')}
						fee={sellFee}
						hasFeeBalance={this.state.feeStatus[sellFee.asset_id].hasBalance}
						feeAssets={sellFeeAssets}
						feeAsset={sellFeeAsset}
						onChangeFeeAsset={this.onChangeFeeAsset.bind(this, 'sell')}
						isPredictionMarket={quote.getIn([
							'bitasset',
							'is_prediction_market',
						])}
						isPanelActive={isPanelActive}
						activePanels={activePanels}
						singleColumnOrderForm={singleColumnOrderForm}
						hideFunctionButtons={hideFunctionButtons}
						historyUrl={this.props.history.location}
						marketPrice={latest && latest.getPrice()}
						locked_v2={this.props.locked_v2}
					/>
				</Tabs.TabPane>

				<Tabs.TabPane
					tab={counterpart.translate('exchange.scaled')}
					key={'scaled'}
				>
					<ScaledOrderTab
						expirationType={expirationType['ask']}
						expirations={this.EXPIRATIONS}
						expirationCustomTime={expirationCustomTime['ask']}
						onExpirationTypeChange={this._handleExpirationChange.bind(
							this,
							'ask'
						)}
						onExpirationCustomChange={this._handleCustomExpirationChange.bind(
							this,
							'ask'
						)}
						currentPrice={highestBid.getPrice()}
						lastClickedPrice={this.state.ask && this.state.ask.priceText}
						currentAccount={currentAccount}
						createScaledOrder={this._createScaledOrder}
						type="ask"
						baseAsset={base}
						quoteAsset={quote}
						historyUrl={this.props.history.location}
						locked_v2={this.props.locked_v2}
					/>
				</Tabs.TabPane>
			</Tabs>
		);

		let myMarkets = (
			<MyMarkets
				key={`actionCard_${actionCardIndex++}`}
				className="left-order-book no-overflow order-9"
				style={{
					minWidth: 350,
					height: 'calc(100vh - 167px)',
					padding: 0,
				}}
				headerStyle={{
					width: '100%',
				}}
				noHeader={true}
				listHeight={this.state.height - 450}
				columns={[
					{name: 'star', index: 1},
					{name: 'market', index: 2},
					{name: 'vol', index: 3},
					{name: 'price', index: 4},
					{name: 'change', index: 5},
				]}
				findColumns={[
					{name: 'market', index: 1},
					{name: 'issuer', index: 2},
					{name: 'vol', index: 3},
					{name: 'add', index: 4},
				]}
				current={`${quoteSymbol}_${baseSymbol}`}
				location={this.props.location}
				history={this.props.history}
				activeTab={'my-market'}
			/>
		);

		let orderBook = (
			<OrderBook
				ref="order_book"
				key={`actionCard_${actionCardIndex++}`}
				latest={latest && latest.getPrice()}
				changeClass={changeClass}
				orders={marketLimitOrders}
				invertedCalls={invertedCalls}
				combinedBids={combinedBids}
				combinedAsks={combinedAsks}
				highestBid={highestBid}
				chartHeight={chartHeight}
				lowestAsk={lowestAsk}
				totalBids={totals.bid}
				totalAsks={totals.ask}
				base={base}
				quote={quote}
				baseSymbol={baseSymbol}
				quoteSymbol={quoteSymbol}
				onClick={this._orderbookClick.bind(this)}
				horizontal={true}
				marketReady={marketReady}
				marketStats={marketStats}
				currentAccount={this.props.currentAccount.get('id')}
				handleGroupOrderLimitChange={this._onGroupOrderLimitChange.bind(this)}
				trackedGroupsConfig={trackedGroupsConfig}
				currentGroupOrderLimit={currentGroupOrderLimit}
				groupedBids={groupedBids}
				groupedAsks={groupedAsks}
				isPanelActive={activePanels.length >= 1}
				hideScrollbars={hideScrollbars}
				hideFunctionButtons={hideFunctionButtons}
			/>
		);

		let marketHistory = (
			<MarketHistory
				key={`actionCard_${actionCardIndex++}`}
				noHeader={panelTabs['history'] == 0 ? false : true}
				history={activeMarketHistory}
				currentAccount={currentAccount}
				myHistory={currentAccount.get('history')}
				base={base}
				quote={quote}
				chartHeight={chartHeight}
				baseSymbol={baseSymbol}
				quoteSymbol={quoteSymbol}
				activeTab={'history'}
				isPanelActive={isPanelActive}
				hideScrollbars={hideScrollbars}
				feedPrice={this.props.feedPrice}
			/>
		);

		let myMarketHistory = (
			<MarketHistory
				key={`actionCard_${actionCardIndex++}`}
				className="no-padding no-overflow"
				noHeader={panelTabs['my_history'] == 0 ? false : true}
				history={activeMarketHistory}
				currentAccount={currentAccount}
				myHistory={currentAccount.get('history')}
				base={base}
				quote={quote}
				baseSymbol={baseSymbol}
				quoteSymbol={quoteSymbol}
				activeTab={'my_history'}
				isPanelActive={isPanelActive}
				hideScrollbars={hideScrollbars}
			/>
		);

		let myTrade = (
			<MyTrade
				key={`actionCard_${actionCardIndex++}`}
				className="no-padding no-overflow"
				noHeader={panelTabs['my_trade'] == 0 ? false : true}
				currentAccount={currentAccount}
				base={base}
				quote={quote}
				baseSymbol={baseSymbol}
				quoteSymbol={quoteSymbol}
				activeTab={'my_trade'}
				isPanelActive={isPanelActive}
				hideScrollbars={hideScrollbars}
				myHistory={currentAccount.get('history')}
				settings={this.props.settings}
				history={this.props.history}
			/>
		);

		let myFund = (
			<MyTrade
				key={`actionCard_${actionCardIndex++}`}
				className="no-padding no-overflow"
				noHeader={panelTabs['my_trade'] == 0 ? false : true}
				currentAccount={currentAccount}
				base={base}
				quote={quote}
				baseSymbol={baseSymbol}
				quoteSymbol={quoteSymbol}
				activeTab={'my_trade'}
				isPanelActive={isPanelActive}
				hideScrollbars={hideScrollbars}
				myHistory={currentAccount.get('history')}
				settings={this.props.settings}
				history={this.props.history}
			/>
		);

		let myOpenOrders = (
			<MarketOrders
				key={`actionCard_${actionCardIndex++}`}
				style={{marginBottom: 0}}
				className="no-padding no-overflow small-12 order-7"
				noHeader={panelTabs['my_orders'] == 0 ? false : true}
				orders={marketLimitOrders}
				settleOrders={marketSettleOrders}
				currentAccount={currentAccount}
				base={base}
				quote={quote}
				baseSymbol={baseSymbol}
				quoteSymbol={quoteSymbol}
				activeTab={'my_orders'}
				onCancel={this._cancelLimitOrder.bind(this)}
				feedPrice={this.props.feedPrice}
				hidePanel={hidePanel}
				isPanelActive={isPanelActive}
				hideScrollbars={hideScrollbars}
			/>
		);

		let settlementOrders =
			marketSettleOrders.size === 0 ? null : (
				<MarketOrders
					key={`actionCard_${actionCardIndex++}`}
					className="no-padding no-overflow small-12 order-8"
					noHeader={panelTabs['open_settlement'] == 0 ? false : true}
					orders={marketLimitOrders}
					settleOrders={marketSettleOrders}
					currentAccount={currentAccount}
					base={base}
					quote={quote}
					baseSymbol={baseSymbol}
					quoteSymbol={quoteSymbol}
					activeTab={'open_settlement'}
					onCancel={this._cancelLimitOrder.bind(this)}
					feedPrice={this.props.feedPrice}
					hidePanel={hidePanel}
					isPanelActive={isPanelActive}
					hideScrollbars={hideScrollbars}
				/>
			);

		let tradingViewChart = (
			<TradingViewPriceChart
				locale={this.props.locale}
				dataFeed={this.props.dataFeed}
				baseSymbol={baseSymbol}
				quoteSymbol={quoteSymbol}
				marketReady={marketReady}
				theme={this.props.settings.get('themes')}
				buckets={buckets}
				bucketSize={bucketSize}
				currentPeriod={this.state.currentPeriod}
				chartHeight={chartHeight + 22}
				chartZoom={chartZoom}
				chartTools={chartTools}
				mobile={false}
			/>
		);

		/***
		 * Generate tabs based on Layout
		 *
		 */
		let buySellTab = (
			<div key={`actionCard_${actionCardIndex++}`} className="buy-sell-tab">
				<Tabs
					defaultActiveKey="buy"
					activeKey={tabBuySell}
					onChange={this._setTabBuySell.bind(this)}
				>
					<Tabs.TabPane
						tab={counterpart.translate('exchange.buy').toUpperCase()}
						key="buy"
					>
						{buyForm}
					</Tabs.TabPane>
					<Tabs.TabPane
						tab={counterpart.translate('exchange.sell').toUpperCase()}
						key="sell"
					>
						{sellForm}
					</Tabs.TabPane>
				</Tabs>
			</div>
		);

		// Generate Tabbed Groups
		let groupTabs = {1: [], 2: []};
		let groupStandalone = [];

		Object.keys(panelTabs)
			.sort()
			.map((a) => {
				if (a == 'history') {
					groupTabs[panelTabs[a]].push(
						<div key="history" style={{height: '100%'}}>
							{marketHistory}
						</div>
					);
				}

				if (a == 'my_orders') {
					groupTabs[panelTabs[a]].push(
						<Tabs.TabPane
							tab={`${counterpart.translate(
								'exchange.settings.title.open_orders'
							)} (${this._getOrders().length})`}
							key="my_orders"
						>
							{myOpenOrders}
						</Tabs.TabPane>
					);
					groupTabs[panelTabs[a]].push(
						<Tabs.TabPane
							tab={`${counterpart.translate(
								'exchange.settings.title.execution_history'
							)}`}
							key="execution_history"
						>
							{myMarketHistory}
						</Tabs.TabPane>
					);
					groupTabs[panelTabs[a]].push(
						<Tabs.TabPane
							tab={counterpart.translate('exchange.settings.title.my_trades')}
							key="my_trade"
						>
							{myTrade}
						</Tabs.TabPane>
					);
					groupTabs[panelTabs[a]].push(
						<Tabs.TabPane
							tab={`${counterpart.translate('exchange.settings.title.fund')}`}
							key="fund"
						>
							{myFund}
						</Tabs.TabPane>
					);
				}

				if (a == 'open_settlement' && settlementOrders !== null) {
					groupTabs[panelTabs[a]].push(
						<Tabs.TabPane
							tab={counterpart.translate('exchange.settle_orders')}
							key="open_settlement"
						>
							{settlementOrders}
						</Tabs.TabPane>
					);
				}
			});

		Object.keys(panelTabsActive).map((thisTabsId) => {
			Object.keys(panelTabs).map((thisPanelName) => {
				let stop = false;
				if (!stop && thisTabsId == panelTabs[thisPanelName]) {
					panelTabsActive[thisTabsId] = !panelTabsActive[thisTabsId]
						? thisPanelName
						: panelTabsActive[thisTabsId];
					stop = true;
				}
			});
		});

		let groupTabsCount = groupStandalone.length;

		Object.keys(groupTabs).map((tab) => {
			if (groupTabs[tab].length) {
				groupTabsCount++;
			}
		});
		let groupTabbed2 =
			groupTabs[2].length > 0 ? (
				<div
					key={`actionCard_${actionCardIndex++}`}
					className="my-open-orders-res"
				>
					<Tabs
						activeKey={panelTabsActive[2]}
						onChange={this._setPanelTabInGroup.bind(this, 2)}
					>
						{groupTabs[2]}
					</Tabs>
				</div>
			) : null;

		let emptyDiv =
			groupTabsCount > 2 ? null : (
				<div
					className="small-12 orderbook no-padding align-spaced no-overflow wrap"
					key={`actionCard_${actionCardIndex++}`}
					style={{height: '100%'}}
				>
					&nbsp;
				</div>
			);

		/**
		 * Generate layout grid based on Screen Size
		 */
		let actionCards = [];
		actionCards.push(groupTabbed2);

		return (
			<div
				css={(theme) => ({
					padding: '10px',
					display: 'flex',
					height: '100%',
				})}
			>
				{!this.props.marketReady ? <LoadingIndicator /> : null}
				<div
					className="assets-layout"
					css={() => ({
						[`@media (max-width: 768px)`]: {
							display: this.state.currentSection !== 'market' ? 'none' : 'flex',
							width: '100%',
						},
					})}
				>
					<div className="asset-pair-tabs-wrapper">
						<AssetsPairTabs account={this.props.currentAccount} />
					</div>
				</div>
				<div
					className="info-layout"
					css={() => ({
						[`@media (max-width: 768px)`]: {
							display:
								this.state.currentSection !== 'chart' &&
								this.state.currentSection !== 'orders'
									? 'none'
									: 'unset',
						},
					})}
				>
					<div
						css={() => ({
							[`@media (max-width: 768px)`]: {
								display:
									this.state.currentSection !== 'chart' ? 'none' : 'flex',
							},
						})}
					>
						<ExchangeHeader
							hasAnyPriceAlert={this.props.hasAnyPriceAlert}
							showPriceAlertModal={this.showPriceAlertModal}
							account={this.props.currentAccount}
							quoteAsset={quoteAsset}
							baseAsset={baseAsset}
							hasPrediction={hasPrediction}
							starredMarkets={starredMarkets}
							lowestAsk={lowestAsk}
							highestBid={highestBid}
							lowestCallPrice={lowestCallPrice}
							showCallLimit={showCallLimit}
							feedPrice={feedPrice}
							marketReady={marketReady}
							latestPrice={latest && latest.getPrice()}
							marketStats={marketStats}
							selectedMarketPickerAsset={this.state.marketPickerAsset}
							onToggleMarketPicker={this._toggleMarketPicker.bind(this)}
							showVolumeChart={showVolumeChart}
						/>
					</div>
					{this.state.isMarketPickerModalVisible ||
					this.state.isMarketPickerModalLoaded ? (
						<MarketPicker
							visible={this.state.isMarketPickerModalVisible}
							showModal={this.showMarketPickerModal}
							hideModal={this.hideMarketPickerModal}
							marketPickerAsset={this.state.marketPickerAsset}
							onToggleMarketPicker={this._toggleMarketPicker.bind(this)}
							{...this.props}
						/>
					) : null}
					<AccountNotifications />

					<div
						css={(theme) => ({
							height: 'calc(100% - 45px)',
							display: 'flex',
							justifyContent: 'space-between',
							flexDirection: 'column',
							width: '100%',
							[`@media (max-width: 1443px)`]: {
								height: 'calc(100% - 85px)',
							},
							[`@media (max-width: 768px)`]: {
								height:
									this.state.currentSection === 'chart'
										? 'calc(100% - 45px)'
										: '100%',
								display:
									this.state.currentSection !== 'chart' &&
									this.state.currentSection !== 'orders'
										? 'none'
										: 'flex',
							},
							[`@media (max-width: 520px)`]: {
								height:
									this.state.currentSection === 'chart'
										? 'calc(100% - 85px)'
										: '100%',
								display:
									this.state.currentSection !== 'chart' &&
									this.state.currentSection !== 'orders'
										? 'none'
										: 'flex',
							},
						})}
					>
						<div
							className="trade-view-chart-wrapper"
							css={(theme) => ({
								[`@media (max-width: 768px)`]: {
									display:
										this.state.currentSection !== 'chart' ? 'none' : 'unset',
								},
							})}
						>
							{tradingViewChart}
						</div>
						<div
							className="action-cards"
							css={(theme) => ({
								[`@media (max-width: 768px)`]: {
									display:
										this.state.currentSection !== 'orders' ? 'none' : 'unset',
								},
							})}
						>
							{actionCards}
						</div>
					</div>
				</div>
				<div
					className="control-layout"
					css={(theme) => ({
						[`@media (max-width: 768px)`]: {
							display:
								this.state.currentSection !== 'trade' &&
								this.state.currentSection !== 'buy-sell'
									? 'none'
									: 'flex',
						},
					})}
				>
					<div
						className="orders-and-trade"
						css={(theme) => ({
							[`@media (max-width: 768px)`]: {
								display:
									this.state.currentSection !== 'trade' ? 'none' : 'flex',
							},
						})}
					>
						<div className="orders-trade-form">{orderBook}</div>
						<div className="orders-trade-form">{groupTabs[1]}</div>
					</div>
					<div
						css={(theme) => ({
							[`@media (max-width: 768px)`]: {
								display:
									this.state.currentSection !== 'buy-sell' ? 'none' : 'unset',
							},
						})}
					>
						{buySellTab}
					</div>
				</div>

				{quoteIsBitAsset &&
				(this.state.isBorrowQuoteModalVisible ||
					this.state.isBorrowQuoteModalLoaded) ? (
					<BorrowModal
						visible={this.state.isBorrowQuoteModalVisible}
						hideModal={this.hideBorrowQuoteModal}
						quoteAssetObj={quoteAsset.get('id')}
						backingAssetObj={quoteAsset.getIn([
							'bitasset',
							'options',
							'short_backing_asset',
						])}
						accountObj={currentAccount}
					/>
				) : null}
				{baseIsBitAsset &&
				(this.state.isBorrowBaseModalVisible ||
					this.state.isBorrowBaseModalLoaded) ? (
					<BorrowModal
						visible={this.state.isBorrowBaseModalVisible}
						hideModal={this.hideBorrowBaseModal}
						quoteAssetObj={baseAsset.get('id')}
						backingAssetObj={baseAsset.getIn([
							'bitasset',
							'options',
							'short_backing_asset',
						])}
						accountObj={currentAccount}
					/>
				) : null}

				{/* Confirm Modal */}
				{this.state.isConfirmBuyOrderModalVisible ||
				this.state.isConfirmBuyOrderModalLoaded ? (
					<ConfirmOrderModal
						visible={this.state.isConfirmBuyOrderModalVisible}
						hideModal={this.hideConfirmBuyOrderModal}
						type="buy"
						onForce={this._forceBuy.bind(
							this,
							'buy',
							buyFeeAsset,
							baseBalance,
							coreBalance
						)}
						diff={buyDiff}
						hasOrders={combinedAsks.length > 0}
					/>
				) : null}

				{this.state.isConfirmSellOrderModalVisible ||
				this.state.isConfirmSellOrderModalLoaded ? (
					<ConfirmOrderModal
						visible={this.state.isConfirmSellOrderModalVisible}
						hideModal={this.hideConfirmSellOrderModal}
						type="sell"
						onForce={this._forceSell.bind(
							this,
							'sell',
							sellFeeAsset,
							quoteBalance,
							coreBalance
						)}
						diff={sellDiff}
						hasOrders={combinedBids.length > 0}
					/>
				) : null}

				<PriceAlert
					onSave={this.handlePriceAlertSave}
					rules={this.getPriceAlertRules()}
					latestPrice={latest && latest.getPrice()}
					quoteAsset={this.props.quoteAsset.get('id')}
					baseAsset={this.props.baseAsset.get('id')}
					visible={this.state.isPriceAlertModalVisible}
					showModal={this.showPriceAlertModal}
					hideModal={this.hidePriceAlertModal}
				/>
			</div>
		);
	}
}

export default Exchange;
