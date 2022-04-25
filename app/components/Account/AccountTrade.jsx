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
							quoteAsset,
							baseAsset,
							newBucketSize
						).then(() => {
							let bars = MarketsStore.getState().priceData;
							console.log(
								'@1103 - _getMarketInfo #1',
								from,
								to,
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
					quoteAsset
				);
			});
		}
	}

	_onSearchChange(e) {
		this.setState({
			searchTerm: e.target.value.toLowerCase(),
			isLoading: true,
		});
		this._searchAccounts(e.target.value);
	}

	_onDropDownChange(option, type) {
		if (type === 'resolution') {
			this.setState({selectedResolution: option});
			this._getMarketInfo(
				this.props.assets,
				this.state.baseAssetSymbol,
				option
			);
		} else if (type === 'baseAsset') {
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

	_buildColumns() {
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
				title: <Translate component="span" content="account.hour_24" />,
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
					<Translate component="span" content="account.hour_24_high_low" />
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
				render: (watch) => {
					return (
						<div>
							<Icon name="fi-star" className="white-star" />
						</div>
					);
				},
			},
		];
	}

	_buildDataSource(assets, marketStats) {
		if (assets.size === 0) return [];

		const {baseAssetSymbol} = this.state;
		const _dataSource = [];
		const baseAssetId = assets.find(
			(asset) => asset.symbol === baseAssetSymbol
		).id;
		const filteredMarketStats = marketStats
			.filter((marketStat) => marketStat.price)
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

			if (marketBar) {
				let high = marketBar.bars[0].high;
				let low = marketBar.bars[0].low;

				(marketBar.bars || []).map((iter) => {
					if (high < iter.high) high = iter.high;
					if (low > iter.low) low = iter.low;
				});

				console.log('@1122 - ', price, high, low);
				const rateHigh = utils.format_number(
					low * price * 100,
					low * price * 100 > 1000 ? 0 : low * price * 100 > 10 ? 2 : precision
				);
				const rateLow = utils.format_number(
					high * price * 100,
					high * price * 100 > 1000
						? 0
						: high * price * 100 > 10
						? 2
						: precision
				);
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
		const {account, assets, marketStats} = this.props;
		const {accountName, currentTab, baseAssetSymbol, rowsOnPage} = this.state;

		const assetOptions = assets.map((asset) => (
			<Select.Option key={asset.symbol}>{asset.symbol}</Select.Option>
		));

		let toggleBoxes = [];
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
		const dataSource = this._buildDataSource(assets, marketStats);

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
							<Select.Option key={'1m'}>1m</Select.Option>
							<Select.Option key={'5m'}>5m</Select.Option>
							<Select.Option key={'1h'}>1h</Select.Option>
							<Select.Option key={'1d'}>1d</Select.Option>
							<Select.Option key={'1w'}>1w</Select.Option>
						</Select>
						<Select
							style={{width: '150px', marginLeft: '24px'}}
							value={this.state.selectedAsset}
							onChange={(rows) => this._onDropDownChange(rows, 'baseAsset')}
						>
							<Select.Option key={'ALL'}>All Assets</Select.Option>
							{assetOptions}
						</Select>
					</div>
					<div className="select">
						<div className="toggle-box">
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
			marketStats: MarketsStore.getState().allMarketStats,
		};
	},
});
