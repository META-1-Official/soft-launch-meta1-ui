import React from 'react';
import {connect} from 'alt-react';
import moment from 'moment';
import {ChainStore} from 'meta1-vision-js';
import {Map, List} from 'immutable';
import SettingsActions from 'actions/SettingsActions';
import SettingsStore from 'stores/SettingsStore';
import AssetStore from 'stores/AssetStore';
import AssetActions from 'actions/AssetActions';
import {Table, Select} from 'antd';
import {
	ArrowRightOutlined,
	ArrowUpOutlined,
	ArrowDownOutlined,
	StarOutlined,
	CaretUpFilled,
	CaretDownFilled,
	CaretRightFilled,
} from '@ant-design/icons';
import AltContainer from 'alt-container';
import AssetWrapper from '../Utility/AssetWrapper';
import PageHeader from 'components/PageHeader/PageHeader';
import SearchInput from '../Utility/SearchInput';
import Translate from 'react-translate-component';
import Icon from '../Icon/Icon';
import MarketsActions from 'actions/MarketsActions';
import MarketsStore from 'stores/MarketsStore';
import marketUtils from 'common/market_utils';
import utils from 'common/utils';
import ChartjsAreaChart from '../Graph/Graph';
import ls from '../../lib/common/localStorage';
import history from 'lib/common/history';

const STORAGE_KEY = '__AuthData__';
const ss = new ls(STORAGE_KEY);

const bnbIcon = require('assets/explorer/BNB_new.png');
const eosIcon = require('assets/explorer/EOS_new.png');
const ltcIcon = require('assets/explorer/LTC_new.png');
const xlmIcon = require('assets/explorer/XLM_new.png');
const btcIcon = require('assets/explorer/BTC_new.png');
const ethIcon = require('assets/explorer/ETH_new.png');
const usdtIcon = require('assets/explorer/USDT_new.png');
const meta1Icon = require('assets/explorer/marketCap.png');

class AssetsPairTabs extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: '',
			isLoading: false,
			isFetchingMarketInfo: false,
			selectedResolution: '1h',
			selectedAsset: 'ALL',
			baseAssetSymbol: '',
			rowsOnPage: '5',
			marketBars: [],
			watchPairs: ss.get('watch_pairs', '').split(', '),
		};
	}

	componentWillReceiveProps(nextProps) {
		this._checkAssets(nextProps.assets);

		if (
			nextProps.assets.size > 0 &&
			this.props.assets.size != nextProps.assets.size
		) {
			setTimeout(() => {
				this.onClickAsset(this.state.baseAssetSymbol);
			}, 500);
		}
	}

	componentWillMount() {
		this._checkAssets(this.props.assets, true);
	}

	componentWillUnmount() {
		if (this.statsInterval) this.statsInterval();
	}

	_checkAssets(assets, force) {
		let lastAsset = assets
			.sort((a, b) => {
				if (a.symbol > b.symbol) return 1;
				else if (a.symbol < b.symbol) return -1;
				else return 0;
			})
			.last();

		if (assets.size === 0 || force) {
			AssetActions.getAssetList.defer('A', 100);
			this.setState({assetsFetched: 100});
		} else if (assets.size >= this.state.assetsFetched) {
			AssetActions.getAssetList.defer(lastAsset.symbol, 100);
			this.setState({assetsFetched: this.state.assetsFetched + 99});
		}
	}

	_getMarketInfo(assetPairs, resolution) {
		const {isFetchingMarketInfo} = this.state;
		const marketBars = this.state.marketBars;

		if (!isFetchingMarketInfo && this.props.assets.size > 0) {
			this.setState({isFetchingMarketInfo: true});

			let newBucketSize = 15;
			if (resolution === '5m') newBucketSize = 15;
			else if (resolution === '30m') newBucketSize = 60;
			else if (resolution === '1h') newBucketSize = 300;
			else if (resolution === '24h') newBucketSize = 300;
			else if (resolution === '3d') newBucketSize = 3600;
			else if (resolution === '1w') newBucketSize = 3600;

			MarketsActions.changeBucketSize(newBucketSize);
			const from = moment()
				.subtract(parseInt(resolution.slice(0, -1)), resolution.slice(-1))
				.valueOf();
			const to = moment().valueOf();

			assetPairs.map((assetPair, index) => {
				const quoteAsset = assetPair.quoteAsset;
				const baseAsset = assetPair.baseAsset;

				const marketName = marketUtils.getMarketName(baseAsset, quoteAsset);
				MarketsActions.unSubscribeMarket(
					quoteAsset.get('id'),
					baseAsset.get('id')
				)
					.then(() => {
						MarketsActions.subscribeMarket(
							baseAsset,
							quoteAsset,
							newBucketSize
						).then(() => {
							let bars = MarketsStore.getState().priceData;
							let quoteAsset1 = MarketsStore.getState().quoteAsset;
							let baseAsset1 = MarketsStore.getState().baseAsset;

							const marketBarIndex = marketBars.findIndex(
								(marketBar) =>
									marketBar['quoteAssetId'] === quoteAsset.get('id') &&
									marketBar['baseAssetId'] === baseAsset.get('id')
							);
							const newMarketBar = {
								quoteAssetId: quoteAsset.get('id'),
								baseAssetId: baseAsset.get('id'),
								bars: bars.slice(-36),
							};

							if (marketBarIndex > -1) {
								marketBars[marketBarIndex] = newMarketBar;
							} else {
								marketBars.push(newMarketBar);
							}

							if (
								index === assetPairs.length - 1 ||
								index === assetPairs.length - 2
							) {
								const that = this;
								setTimeout(() => {
									that.setState({isFetchingMarketInfo: false, marketBars});
								}, 500);
							} else {
								this.setState({marketBars});
							}
						});
					})
					.catch((e) => {
						console.log('Error: Failed to subscribe market, ', e);
						this.setState({isFetchingMarketInfo: false, marketBars});
					});
			});
		}
	}

	_onSearchChange(e) {
		this.setState({searchTerm: e.target.value.toLowerCase()});
	}

	_onDropDownChange(option, type) {
		if (type === 'resolution') {
			this.setState({selectedResolution: option});
			this.onClickAsset(this.state.baseAssetSymbol, option);
		} else if (type === 'asset-filter') {
			this.setState({selectedAsset: option});
		}
	}

	onClickAsset(newBaseAssetSymbol) {
		const {assets, starredMarkets} = this.props;
		const {selectedResolution, isFetchingMarketInfo, baseAssetSymbol} =
			this.state;
		const assetPairs = [];

		if (isFetchingMarketInfo) {
			return;
		} else if (newBaseAssetSymbol === 'star') {
			starredMarkets.map((starredMarket) => {
				let quoteAssetId, baseAssetId;
				assets.map((asset) => {
					if (asset.symbol === starredMarket.quote) quoteAssetId = asset.id;
					if (asset.symbol === starredMarket.base) baseAssetId = asset.id;
				});

				const quoteAsset = ChainStore.getAsset(quoteAssetId);
				const baseAsset = ChainStore.getAsset(baseAssetId);
				assetPairs.push({quoteAsset, baseAsset});
			});
		} else if (baseAssetSymbol === newBaseAssetSymbol) {
			assets.map((quoteAsset) => {
				assets.map((baseAsset) => {
					assetPairs.push({
						quoteAsset: ChainStore.getAsset(quoteAsset.id),
						baseAsset: ChainStore.getAsset(baseAsset.id),
					});
				});
			});
		} else {
			let baseAssetId;
			assets.map((asset) => {
				if (asset.symbol === newBaseAssetSymbol) baseAssetId = asset.id;
			});
			const baseAsset = ChainStore.getAsset(baseAssetId);

			assets.map((asset) => {
				const quoteAsset = ChainStore.getAsset(asset.id);
				assetPairs.push({quoteAsset, baseAsset});
			});
		}

		if (assetPairs.length > 0) {
			this._getMarketInfo(assetPairs, selectedResolution);
		}

		if (baseAssetSymbol === newBaseAssetSymbol) {
			this.setState({baseAssetSymbol: ''});
		} else {
			this.setState({baseAssetSymbol: newBaseAssetSymbol});
		}
	}

	_addMarket(quoteAssetSymbol, baseAssetSymbol) {
		let marketID = `${quoteAssetSymbol}_${baseAssetSymbol}`;
		if (!this.props.starredMarkets.has(marketID)) {
			SettingsActions.addStarMarket(quoteAssetSymbol, baseAssetSymbol);
		} else {
			SettingsActions.removeStarMarket(quoteAssetSymbol, baseAssetSymbol);
		}
	}

	_buildColumns() {
		const {selectedResolution} = this.state;

		return [
			{
				title: (
					<>
						<span
							style={{
								fontSize: '12px',
								color: '#979797',
								textAlign: 'center',
								paddingLeft: '10px',
								marginLeft: '10px',
								padingRight: '10px',
								marginRight: '10px',
								textAlign: 'left',
							}}
						>
							Pair
						</span>
						<span
							style={{
								fontSize: '12px',
								color: '#979797',
								textAlign: 'right',
								padingLeft: '10px',
								marginLeft: '10px',
							}}
						>
							Change
						</span>
					</>
				),
				colSpan: 1,
				key: 'name',
				sorter: (a, b) => {
					return a.quoteAssetSymbol > b.quoteAssetSymbol
						? 1
						: a.quoteAssetSymbol < b.quoteAssetSymbol
						? -1
						: 0;
				},
				render: (rowData, rateChange) => {
					const quoteAssetSymbol = rowData.quoteAssetSymbol;
					const baseAssetSymbol = rowData.baseAssetSymbol;
					let symbolIcons = {
						BNB: bnbIcon,
						BTC: btcIcon,
						ETH: ethIcon,
						EOS: eosIcon,
						XLM: xlmIcon,
						LTC: ltcIcon,
						META1: meta1Icon,
						USDT: usdtIcon,
					};
					let icon = symbolIcons[quoteAssetSymbol] ?? btcIcon;

					let classNameDiv = '';

					return (
						<>
							<div style={{display: 'flex', alignItems: 'center'}}>
								<div style={{marginRight: '5px', width: '20px'}}>
									<img className="asset-img" src={icon} alt="Asset logo" />
								</div>
								<div
									style={{cursor: 'pointer', minWidth: '80px'}}
									onClick={() =>
										history.push(
											`/market/${quoteAssetSymbol}_${baseAssetSymbol}`
										)
									}
								>
									<span
										style={{
											fontSize: '14px',
											color: '#D0D0D0',
										}}
									>
										<strong>{quoteAssetSymbol}</strong>
									</span>
									<span
										style={{
											fontSize: '13px',
											color: '#715D5C',
										}}
									>{` / ${baseAssetSymbol}`}</span>
								</div>
							</div>
							<div>
								{
									<div
										className="change"
										style={{
											marginTop: '5px',
											paddingTop: '0px',
											marginLeft: '-0px',
											textAlign: 'center',
										}}
									>
										<span style={{display: 'none'}}>
											{
												(classNameDiv =
													rateChange.rateChange === '0.00'
														? ''
														: rateChange.rateChange > 0
														? 'change-up'
														: 'change-down')
											}
										</span>

										{classNameDiv === 'change-up' && (
											<>
												<CaretUpFilled
													className={classNameDiv}
													style={{fontSize: '12px'}}
												/>
												<span
													className={classNameDiv}
													style={{fontSize: '12px'}}
												>{`+${rateChange.rateChange} %`}</span>
											</>
										)}
										{classNameDiv === 'change-down' && (
											<>
												<CaretDownFilled
													className={classNameDiv}
													style={{fontSize: '12px'}}
												/>
												<span
													className={classNameDiv}
													style={{fontSize: '12px'}}
												>{`${rateChange.rateChange} %`}</span>
											</>
										)}
										{classNameDiv === '' && (
											<>
												<CaretRightFilled
													className={classNameDiv}
													style={{fontSize: '12px'}}
												/>
												<span
													className={classNameDiv}
													style={{fontSize: '12px'}}
												>{`${rateChange.rateChange} %`}</span>
											</>
										)}
									</div>
								}
							</div>
						</>
					);
				},
			},
			{
				title: (
					<div
						style={{
							fontSize: '12px',
							color: '#979797',
							textAlign: 'center',
							marginLeft: '-0px',
							paddingLeft: '0px',
						}}
					>
						Change
					</div>
				),
				colSpan: 0,
				dataIndex: 'rateChange',
				key: 'rateChange',
				sorter: (a, b) => {
					return Number(a.rateChange) > Number(b.rateChange)
						? 1
						: Number(a.rateChange) < Number(b.rateChange)
						? -1
						: 0;
				},
				render: (rateChange) => {
					let className =
						rateChange === '0.00'
							? ''
							: rateChange > 0
							? 'change-up'
							: 'change-down';
					return (
						<div
							className="change"
							style={{
								marginTop: '25px',
								paddingTop: '10px',
								marginLeft: '-0px',
								display: 'none',
							}}
						>
							{className === 'change-up' && (
								<>
									<CaretUpFilled
										className={className}
										style={{fontSize: '12px'}}
									/>
									<span
										className={className}
										style={{fontSize: '12px'}}
									>{`+${rateChange} %`}</span>
								</>
							)}
							{className === 'change-down' && (
								<>
									<CaretDownFilled
										className={className}
										style={{fontSize: '12px'}}
									/>
									<span
										className={className}
										style={{fontSize: '12px'}}
									>{`${rateChange} %`}</span>
								</>
							)}
							{className === '' && (
								<>
									<CaretRightFilled
										className={className}
										style={{fontSize: '12px'}}
									/>
									<span
										className={className}
										style={{fontSize: '12px'}}
									>{`${rateChange} %`}</span>
								</>
							)}
						</div>
					);
				},
			},
			{
				title: (
					<div
						style={{
							fontSize: '12px',
							color: '#979797',
							textAlign: 'right',
							minWidth: '50px',
							marginLeft: '10px',
							paddingLeft: '10px',
						}}
					>
						Volume
					</div>
				),
				colSpan: 2,
				dataIndex: 'price',
				key: 'price',
				sorter: (a, b) => {
					let aPrice = a.price;
					let bPrice = b.price;
					if (aPrice.includes(',')) {
						aPrice = aPrice.replaceAll(',', '');
					}
					if (bPrice.includes(',')) {
						bPrice = bPrice.replaceAll(',', '');
					}
					return Number(aPrice) > Number(bPrice)
						? 1
						: Number(aPrice) < Number(bPrice)
						? -1
						: 0;
				},
				render: (price) => {
					return (
						<div>
							<div
								className="price"
								style={{
									fontSize: '14px',
									minWidth: '50px',
									textAlign: 'right',
									color: '#D0D0D0',
								}}
							>{`$${price}`}</div>
						</div>
					);
				},
			},
		];
	}

	_buildDataSource(assets) {
		if (assets.size === 0) return [];

		const {starredMarkets} = this.props;
		const {baseAssetSymbol, selectedAsset, searchTerm} = this.state;
		const _dataSource = [];

		let filteredMarketStats = MarketsStore.getState().allMarketStats.filter(
			(marketStat) => marketStat.price
		);

		if (!baseAssetSymbol) {
			filteredMarketStats = filteredMarketStats;
		} else if (baseAssetSymbol !== 'star') {
			let baseAssetId;
			assets.map((asset) => {
				if (asset.symbol === baseAssetSymbol) baseAssetId = asset.id;
			});
			filteredMarketStats = filteredMarketStats.filter(
				(marketStat) => marketStat.price.base.asset_id === baseAssetId
			);
		} else {
			filteredMarketStats = filteredMarketStats.filter((marketStat) => {
				const base = marketStat.price.base;
				const quote = marketStat.price.quote;

				let quoteAssetSymbol, baseAssetSymbol;
				assets.map((asset) => {
					if (asset.id === quote.asset_id) quoteAssetSymbol = asset.symbol;
					else if (asset.id === base.asset_id) baseAssetSymbol = asset.symbol;
				});

				const marketID = `${quoteAssetSymbol}_${baseAssetSymbol}`;
				return this.props.starredMarkets.has(marketID);
			});
		}

		filteredMarketStats.map((stats) => {
			const base = stats.price.base;
			const quote = stats.price.quote;

			// Name
			let quoteAssetSymbol, baseAssetSymbol;
			assets.map((asset) => {
				if (asset.id === quote.asset_id) quoteAssetSymbol = asset.symbol;
				else if (asset.id === base.asset_id) baseAssetSymbol = asset.symbol;
			});
			const name = `${quoteAssetSymbol}/${baseAssetSymbol}`;

			// Asset Filter
			if (selectedAsset !== 'ALL' && selectedAsset !== quoteAssetSymbol) return;

			// Keywoard Search
			if (
				searchTerm &&
				name.toLowerCase().indexOf(searchTerm.toLowerCase()) < 0
			)
				return;

			// Price
			let finalPrice =
				stats && stats.price
					? stats.price.toReal()
					: stats &&
					  stats.close &&
					  stats.close.quote.amount &&
					  stats.close.base.amount
					? utils.get_asset_price(
							stats.close.quote.amount,
							quote,
							stats.close.base.amount,
							base,
							true
					  )
					: utils.get_asset_price(
							price.quote.amount,
							quote,
							price.base.amount,
							base,
							true
					  );

			let highPrecisionAssets = [
				'BTC',
				'OPEN.BTC',
				'TRADE.BTC',
				'GOLD',
				'SILVER',
			];
			let precision = 6;
			if (highPrecisionAssets.indexOf(baseAssetSymbol) !== -1) {
				precision = 8;
			}
			const price = utils.format_number(
				finalPrice,
				finalPrice > 1000 ? 0 : finalPrice > 10 ? 2 : precision
			);

			// Change
			let change = utils.format_number(
				stats && stats.change ? stats.change : 0,
				2
			);

			_dataSource.push({
				quoteAssetSymbol,
				baseAssetSymbol,
				price,
				rateChange: change,
			});
		});

		return _dataSource;
	}

	handleWindowChange(windowHeight) {
		//DEBUG console.log("height: " + window.innerHeight);

		let rows = this.state.rowsOnPage;
		if (windowHeight >= 1050) {
			rows = '11';
		}
		if (windowHeight >= 738 && windowHeight < 1050) {
			rows = '8';
		}
		if (windowHeight < 737) {
			rows = '5';
		}

		return rows;
	}

	render() {
		const {account, assets} = this.props;
		const {baseAssetSymbol, selectedAsset, isFetchingMarketInfo} = this.state;
		const canChangeBaseAsset = isFetchingMarketInfo ? 'disabled' : '';

		const assetOptions = assets.map((asset) => (
			<Select.Option key={asset.symbol}>{asset.symbol}</Select.Option>
		));

		const toggleBoxes = [];
		assets.map((asset) => {
			toggleBoxes.push(
				<div
					key={asset.symbol}
					className={
						asset.symbol === baseAssetSymbol
							? `toggle-box selected ${canChangeBaseAsset}`
							: `toggle-box ${canChangeBaseAsset}`
					}
					onClick={() => this.onClickAsset(asset.symbol)}
				>
					{asset.symbol}
				</div>
			);
		});

		const columns = this._buildColumns();
		const dataSource = this._buildDataSource(assets);

		return (
			<>
				<div className="asset-select">
					<div
						className={
							baseAssetSymbol === 'star'
								? `toggle-box selected ${canChangeBaseAsset}`
								: `toggle-box ${canChangeBaseAsset}`
						}
						onClick={() => this.onClickAsset('star')}
					>
						<Icon name="fi-star" className="white-star" />
					</div>
					{toggleBoxes}
				</div>
				<div className="filter">
					<SearchInput
						placeholder={'Search'}
						value={this.state.searchTerm}
						style={{width: '30%'}}
						onChange={this._onSearchChange.bind(this)}
					/>
				</div>
				<div className="table">
					<Table
						style={{width: '100%', marginTop: '16px'}}
						rowKey="name"
						columns={columns}
						dataSource={dataSource}
						pagination={{
							position: 'bottomCenter',
							pageSize: Number(this.handleWindowChange(window.innerHeight)),
						}}
					/>
				</div>
			</>
		);
	}
}

AssetsPairTabs = AssetWrapper(AssetsPairTabs, {
	propNames: ['assetsList'],
	asList: true,
	withDynamic: true,
});

export default connect(AssetsPairTabs, {
	listenTo() {
		return [AssetStore, MarketsStore];
	},
	getProps(props) {
		let assets = Map(),
			assetsList = List();
		if (props.account.get('assets', []).size > 1) {
			props.account.get('assets', []).forEach((id) => {
				assetsList = assetsList.push(id);
			});
		} else {
			assets = AssetStore.getState().assets;
		}

		return {
			assets,
			assetsList,
			starredMarkets: SettingsStore.getState().starredMarkets,
		};
	},
});
