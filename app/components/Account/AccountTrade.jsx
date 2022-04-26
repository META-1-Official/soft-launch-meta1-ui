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
import {
	getResolutionsFromBuckets,
	getBucketFromResolution,
} from '../exchange/tradingViewClasses';
import ChartjsAreaChart from '../Graph/Graph';
import ls from '../../lib/common/localStorage';

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
				this._getMarketInfo(
					this.props.assets,
					this.state.baseAssetSymbol,
					this.state.selectedResolution
				);
			}, 1000);
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

	_getMarketInfo(assets, baseAssetSymbol, resolution) {
		const {isFetchingMarketInfo} = this.state;
		const marketBars = this.state.marketBars;

		if (!isFetchingMarketInfo && assets.size > 0) {
			this.setState({isFetchingMarketInfo: true});

			const newBucketSize = getBucketFromResolution(resolution);
			MarketsActions.changeBucketSize(newBucketSize);
			const from = moment()
				.subtract(parseInt(resolution[0]), resolution[1])
				.valueOf();
			const to = moment().valueOf();
			const baseAssetId = assets.find(
				(asset) => asset.symbol === baseAssetSymbol
			).id;
			const baseAsset = ChainStore.getAsset(baseAssetId);

			assets.map((asset, index) => {
				const quoteAsset = ChainStore.getAsset(asset.id);
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
							console.log(
								'@1103 - _getMarketInfo #1',
								from,
								to,
								quoteAsset1.get('id'),
								baseAsset1.get('id'),
								bars.length,
								bars
							);
							// bars = bars.filter((a) => a.time >= from && a.time <= to);
							console.log(
								'@1104 - _getMarketInfo #2',
								resolution,
								newBucketSize,
								quoteAsset.get('id'),
								baseAsset.get('id'),
								bars
							);

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

							this.setState({isFetchingMarketInfo: false, marketBars});
						});
					})
					.catch((e) => {
						console.log('Error: Failed to subscribe market, ', e);
						this.setState({isFetchingMarketInfo: false});
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
			this._getMarketInfo(
				this.props.assets,
				this.state.baseAssetSymbol,
				option
			);
		} else if (type === 'asset-filter') {
			this.setState({selectedAsset: option});
		}
	}

	onClickAsset(newBaseAssetSymbol) {
		this.setState({baseAssetSymbol: newBaseAssetSymbol});
		this._getMarketInfo(
			this.props.assets,
			newBaseAssetSymbol,
			this.state.selectedResolution
		);
	}

	onClickBuy(name) {
		const quoteAssetName = name.split('/')[0];
		const baseAssetName = name.split('/')[1];

		window.location.href = `/market/${quoteAssetName}_${baseAssetName}`;
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
					return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
				},
				render: (rowData) => {
					const quoteAssetName = rowData.quoteAssetName;
					const baseAssetName = rowData.baseAssetName;
					let icon = bnbIcon;

					switch (quoteAssetName) {
						case 'BNB':
							icon = bnbIcon;
							break;
						case 'BTC':
							icon = btcIcon;
							break;
						case 'ETH':
							icon = ethIcon;
							break;
						case 'EOS':
							icon = eosIcon;
							break;
						case 'XLM':
							icon = xlmIcon;
							break;
						case 'LTC':
							icon = ltcIcon;
							break;
						case 'META1':
							icon = meta1Icon;
							break;
						case 'USDT':
							icon = usdtIcon;
							break;
					}

					return (
						<div>
							<img
								className="asset-img"
								src={icon}
								alt="Asset logo"
								width="28px"
							/>
							<div className="asset-name">
								<span className="quote">
									<strong>{quoteAssetName}</strong>
								</span>
								<span className="base">{` / ${baseAssetName}`}</span>
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
				dataIndex: 'marketName',
				render: (marketName) => {
					return (
						<div>
							<button
								className="buy"
								onClick={() => this.onClickBuy(marketName)}
							>
								BUY
							</button>
						</div>
					);
				},
			},
			{
				title: <Translate component="span" content="account.watch" />,
				render: (rowData) => {
					const quoteAssetName = rowData.quoteAssetName;
					const baseAssetName = rowData.baseAssetName;
					const name = `${quoteAssetName}/${baseAssetName}`;
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

		const {baseAssetSymbol, selectedAsset, searchTerm} = this.state;

		const _dataSource = [];
		const baseAssetId = assets.find(
			(asset) => asset.symbol === baseAssetSymbol
		).id;
		const filteredMarketStats = MarketsStore.getState()
			.allMarketStats.filter((marketStat) => marketStat.price)
			.filter((marketStat) => {
				return marketStat.price.base.asset_id === baseAssetId;
			});

		filteredMarketStats.map((stats) => {
			const base = stats.price.base;
			const quote = stats.price.quote;

			// Name
			const quoteAssetName = assets.find(
				(asset) => asset.id === quote.asset_id
			).symbol;
			const baseAssetName = assets.find(
				(asset) => asset.id === base.asset_id
			).symbol;
			const name = `${quoteAssetName}/${baseAssetName}`;

			// Asset Filter
			if (selectedAsset !== 'ALL' && selectedAsset !== quoteAssetName) return;

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
			if (highPrecisionAssets.indexOf(baseAssetName) !== -1) {
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
			let marketCap = utils.format_volume(
				parseInt(
					assets.find((asset) => asset.id === quote.asset_id).dynamic
						.current_supply,
					10
				),
				0
			);

			// Market Bar
			const marketBar = this.state.marketBars.find(
				(iter) =>
					iter['quoteAssetId'] === quote.asset_id &&
					iter['baseAssetId'] === baseAssetId
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
				quoteAssetName,
				baseAssetName,
				price,
				rateChange: change,
				rateHighLow,
				marketCap: marketCap,
				marketName: name,
				watch: name,
				marketBar,
			});
		});

		return _dataSource;
	}

	render() {
		const {account, assets} = this.props;
		const {baseAssetSymbol, rowsOnPage, selectedAsset} = this.state;

		const assetOptions = assets.map((asset) => (
			<Select.Option key={asset.symbol}>{asset.symbol}</Select.Option>
		));

		const toggleBoxes = [];
		assets.map((asset) => {
			if (asset.symbol === baseAssetSymbol)
				toggleBoxes.push(
					<div key={asset.symbol} className="toggle-box selected">
						{asset.symbol}
					</div>
				);
			else
				toggleBoxes.push(
					<div
						key={asset.symbol}
						className="toggle-box"
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
							<Select.Option key={'5d'}>5d</Select.Option>
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
							className="toggle-box"
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
