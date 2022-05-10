import React from 'react';
import {connect} from 'alt-react';
import moment from 'moment';
import {ChainStore} from 'meta1js';
import {Map, List} from 'immutable';
import SettingsStore from 'stores/SettingsStore';
import AssetStore from 'stores/AssetStore';
import AssetActions from 'actions/AssetActions';
import {Table, Select} from 'antd';
import {
	ArrowRightOutlined,
	ArrowUpOutlined,
	ArrowDownOutlined,
	StarOutlined,
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
import {getAssetIcon, getAssetFullName} from '../utils/asset';

const STORAGE_KEY = '__AuthData__';
const ss = new ls(STORAGE_KEY);

class AccountTrade extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: '',
			isLoading: false,
			isFetchingMarketInfo: false,
			selectedResolution: '1h',
			selectedAsset: 'ALL',
			baseAssetSymbol: 'USDT',
			rowsOnPage: '25',
			marketBars: [],
			watchPairs: ss.get('watch_pairs', '').split(', '),
		};
	}

	componentWillReceiveProps(nextProps) {
		this._checkAssets(nextProps.assets);

		if (nextProps.assets.size > 0) {
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
		if (this.props.account.get('assets').size) return;
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
							// console.log(
							// 	'@1103 - _getMarketInfo #1',
							// 	from,
							// 	to,
							// 	quoteAsset1.get('id'),
							// 	baseAsset1.get('id'),
							// 	bars.length,
							// 	bars
							// );
							// bars = bars.filter((a) => a.time >= from && a.time <= to);
							// console.log(
							// 	'@1104 - _getMarketInfo #2',
							// 	resolution,
							// 	newBucketSize,
							// 	quoteAsset.get('id'),
							// 	baseAsset.get('id'),
							// 	bars
							// );

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

				this.statsInterval = MarketsActions.getMarketStatsInterval(
					newBucketSize,
					baseAsset,
					quoteAsset,
					true
				);
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
		const {assets} = this.props;
		const {watchPairs, selectedResolution, isFetchingMarketInfo} = this.state;
		const assetPairs = [];

		if (isFetchingMarketInfo) {
			return;
		} else if (newBaseAssetSymbol === 'star') {
			watchPairs.map((watchPair) => {
				const quoteAssetSymbol = watchPair.split('/')[0];
				const baseAssetSymbol = watchPair.split('/')[1];
				let quoteAssetId, baseAssetId;

				assets.map((asset) => {
					if (asset.symbol === quoteAssetSymbol) quoteAssetId = asset.id;
					if (asset.symbol === baseAssetSymbol) baseAssetId = asset.id;
				});

				const quoteAsset = ChainStore.getAsset(quoteAssetId);
				const baseAsset = ChainStore.getAsset(baseAssetId);
				assetPairs.push({quoteAsset, baseAsset});
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

		this._getMarketInfo(assetPairs, selectedResolution);
		this.setState({baseAssetSymbol: newBaseAssetSymbol});
	}

	onClickTrade(name) {
		const quoteAssetSymbol = name.split('/')[0];
		const baseAssetSymbol = name.split('/')[1];

		window.location.href = `/market/${quoteAssetSymbol}_${baseAssetSymbol}`;
	}

	onClickWatch(namePair, isWatched) {
		let watchPairs = this.state.watchPairs.filter((watchPair) => !!watchPair);

		if (isWatched) {
			const index = watchPairs.findIndex(
				(watch_pair) => watch_pair === namePair
			);
			watchPairs.splice(index, 1);
			ss.set('watch_pairs', watchPairs.join(', '));
		} else {
			watchPairs.push(namePair);
			ss.set('watch_pairs', watchPairs.join(', '));
		}

		this.setState({watchPairs});
	}

	_buildColumns() {
		const {selectedResolution, watchPairs} = this.state;

		return [
			{
				title: <Translate component="span" content="account.votes.name" />,
				key: 'name',
				sorter: (a, b) => {
					return a.marketName > b.marketName
						? 1
						: a.marketName < b.marketName
						? -1
						: 0;
				},
				render: (rowData) => {
					const quoteAssetSymbol = rowData.quoteAssetSymbol;
					const baseAssetSymbol = rowData.baseAssetSymbol;

					return (
						<div>
							<img
								className="asset-img"
								src={getAssetIcon(quoteAssetSymbol)}
								alt="Asset logo"
								width="28px"
							/>
							<div className="asset-name">
								<span className="quote">
									<strong>{quoteAssetSymbol}</strong>
								</span>
								<span className="base">{` / ${baseAssetSymbol}`}</span>
							</div>
						</div>
					);
				},
			},
			{
				title: <Translate component="span" content="exchange.price" />,
				dataIndex: 'price',
				key: 'price',
				sorter: (a, b) => {
					return a.price > b.price ? 1 : a.price < b.price ? -1 : 0;
				},
				render: (price) => {
					return (
						<div>
							<div className="price">{`$${price}`}</div>
						</div>
					);
				},
			},
			{
				title: (
					<span>
						{selectedResolution}{' '}
						<Translate component="span" content="account.change" />
					</span>
				),
				dataIndex: 'rateChange',
				key: 'rateChange',
				sorter: (a, b) => {
					return a.rateChange > b.rateChange
						? 1
						: a.rateChange < b.rateChange
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
						<div className="change">
							{className === 'change-up' && (
								<ArrowUpOutlined className={className} />
							)}
							{className === 'change-down' && (
								<ArrowDownOutlined className={className} />
							)}
							{className === '' && <ArrowRightOutlined className={className} />}
							<div className={className}>{`${rateChange} %`}</div>
						</div>
					);
				},
			},
			{
				title: '',
				key: 'graph',
				render: (rowData) => {
					if (!rowData.marketBar || rowData.marketBar === []) {
						return <div className="chart">N/A</div>;
					}

					const labels = [];
					const data = [];
					(rowData.marketBar.bars || []).map((iter) => {
						labels.push(moment(iter.time).format('Do MMM YYYY hh:mm:ss'));
						data.push(iter.open);
					});

					let borderColor =
						rowData.rateChange === '0.00'
							? '#999999'
							: rowData.rateChange > 0
							? '#019d53'
							: '#ff2929';
					const datasets = [
						{
							data,
							borderColor,
							borderWidth: 2,
							fill: true,
							pointHoverRadius: 0,
							pointHoverBorderColor: 'transparent',
						},
					];
					return (
						<div className="chart">
							<ChartjsAreaChart
								id="engaged"
								datasets={datasets}
								labels={labels}
							/>
						</div>
					);
				},
			},
			{
				title: (
					<span>
						{selectedResolution}{' '}
						<Translate component="span" content="account.high" /> /
						{selectedResolution}{' '}
						<Translate component="span" content="account.low" />
					</span>
				),
				dataIndex: 'rateHighLow',
				key: 'rateHighLow',
				sorter: (a, b) => {
					return a.rateHighLow > b.rateHighLow
						? 1
						: a.rateHighLow < b.rateHighLow
						? -1
						: 0;
				},
				render: (rateHighLow) => {
					return (
						<div>
							<div>{rateHighLow}</div>
						</div>
					);
				},
			},
			{
				title: <Translate component="span" content="account.market_cap" />,
				dataIndex: 'marketCap',
				key: 'marketCap',
				sorter: (a, b) => {
					return a.marketCap > b.marketCap
						? 1
						: a.marketCap < b.marketCap
						? -1
						: 0;
				},
				render: (marketCap) => {
					return (
						<div>
							<div>{marketCap}</div>
						</div>
					);
				},
			},
			{
				title: '',
				key: 'trade',
				dataIndex: 'marketName',
				render: (marketName) => {
					return (
						<div>
							<button
								className="trade"
								onClick={() => this.onClickTrade(marketName)}
							>
								Trade
							</button>
						</div>
					);
				},
			},
			{
				title: <Translate component="span" content="account.watch" />,
				key: 'watch',
				render: (rowData) => {
					const quoteAssetSymbol = rowData.quoteAssetSymbol;
					const baseAssetSymbol = rowData.baseAssetSymbol;
					const name = `${quoteAssetSymbol}/${baseAssetSymbol}`;
					const isWatched = watchPairs.indexOf(name) > -1;
					return (
						<div onClick={() => this.onClickWatch(name, isWatched)}>
							{isWatched ? (
								<Icon name="fi-star" className="white-star" />
							) : (
								<StarOutlined />
							)}
						</div>
					);
				},
			},
		];
	}

	_buildDataSource(assets) {
		if (assets.size === 0) return [];

		const {baseAssetSymbol, selectedAsset, searchTerm, watchPairs} = this.state;
		const _dataSource = [];
		let filteredMarketStats = MarketsStore.getState().allMarketStats.filter(
			(marketStat) => marketStat.price
		);

		if (baseAssetSymbol !== 'star') {
			let baseAssetId;
			assets.map((asset) => {
				if (asset.symbol === baseAssetSymbol) baseAssetId = asset.id;
			});
			filteredMarketStats = filteredMarketStats.filter(
				(marketStat) => marketStat.price.base.asset_id === baseAssetId
			);
		} else {
			filteredMarketStats = filteredMarketStats.filter((marketStat) => {
				let isWatched = false;

				watchPairs.map((watchPair) => {
					const quoteAssetSymbol = watchPair.split('/')[0];
					const baseAssetSymbol = watchPair.split('/')[1];
					let quoteAssetId, baseAssetId;

					assets.map((asset) => {
						if (asset.symbol === quoteAssetSymbol) quoteAssetId = asset.id;
						if (asset.symbol === baseAssetSymbol) baseAssetId = asset.id;
					});

					if (
						!isWatched &&
						marketStat.price.base.asset_id === baseAssetId &&
						marketStat.price.quote.asset_id === quoteAssetId
					) {
						isWatched = true;
					}
				});

				return isWatched;
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

			// Market Cap
			let dynamic;
			assets.map((asset) => {
				if (asset.id === quote.asset_id) dynamic = asset.dynamic;
			});
			let marketCap = utils.format_volume(
				parseInt(dynamic.current_supply, 10),
				0
			);

			// Market Bar
			const marketBar = this.state.marketBars.find(
				(iter) =>
					iter['quoteAssetId'] === quote.asset_id &&
					iter['baseAssetId'] === base.asset_id
			);

			// Rate High & Low
			let rateHighLow = 'N/A';

			if (marketBar && marketBar.bars.length > 0) {
				let high = marketBar.bars[0].high;
				let low = marketBar.bars[0].low;

				(marketBar.bars || []).map((iter) => {
					if (high < iter.high) high = iter.high;
					if (low > iter.low) low = iter.low;
				});

				const rateHigh = high.toFixed(2);
				const rateLow = low.toFixed(2);
				rateHighLow = `$${rateLow} / $${rateHigh}`;
			}

			_dataSource.push({
				quoteAssetSymbol,
				baseAssetSymbol,
				price,
				rateChange: change,
				rateHighLow,
				marketCap,
				marketName: name,
				watch: name,
				marketBar,
			});
		});

		return _dataSource;
	}

	render() {
		const {account, assets} = this.props;
		const {baseAssetSymbol, rowsOnPage, selectedAsset, isFetchingMarketInfo} =
			this.state;
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
			<div className="account-trade">
				<div>
					<PageHeader title="Trade" level={2} showDivider />
				</div>
				<div className="content">
					<div className="filter">
						<SearchInput
							placeholder={'Search'}
							value={this.state.searchTerm}
							style={{width: '30%'}}
							onChange={this._onSearchChange.bind(this)}
						/>
						<Select
							style={{width: '70px', marginLeft: '24px'}}
							value={this.state.selectedResolution}
							onChange={(rows) => this._onDropDownChange(rows, 'resolution')}
						>
							<Select.Option key={'5m'}>5m</Select.Option>
							<Select.Option key={'30m'}>30m</Select.Option>
							<Select.Option key={'1h'}>1h</Select.Option>
							<Select.Option key={'24h'}>24h</Select.Option>
							<Select.Option key={'3d'}>3d</Select.Option>
							<Select.Option key={'1w'}>1w</Select.Option>
						</Select>
						<Select
							style={{width: '150px', marginLeft: '24px'}}
							value={this.state.selectedAsset}
							onChange={(rows) => this._onDropDownChange(rows, 'asset-filter')}
						>
							<Select.Option key={'ALL'}>All Assets</Select.Option>
							{assetOptions}
						</Select>
					</div>
					<div className="select">
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
					<div className="table">
						<Table
							style={{width: '100%', marginTop: '16px'}}
							rowKey="name"
							columns={columns}
							dataSource={dataSource}
							pagination={{
								position: 'bottom',
								pageSize: Number(rowsOnPage),
							}}
						/>
					</div>
				</div>
			</div>
		);
	}
}

AccountTrade = AssetWrapper(AccountTrade, {
	propNames: ['assetsList'],
	asList: true,
	withDynamic: true,
});

export default connect(AccountTrade, {
	listenTo() {
		return [AssetStore];
	},
	getProps(props) {
		let assets = Map(),
			assetsList = List();
		if (props.account.get('assets', []).size) {
			props.account.get('assets', []).forEach((id) => {
				assetsList = assetsList.push(id);
			});
		} else {
			assets = AssetStore.getState().assets;
		}

		return {
			assets,
			assetsList,
		};
	},
});
