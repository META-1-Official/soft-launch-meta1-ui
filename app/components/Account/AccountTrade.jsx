import React from 'react';
import {connect} from 'alt-react';
import moment from 'moment';
import {ChainStore} from 'meta1-vision-js';
import {Map, List} from 'immutable';
import counterpart from 'counterpart';
import SettingsActions from 'actions/SettingsActions';
import SettingsStore from 'stores/SettingsStore';
import AssetStore from 'stores/AssetStore';
import AssetActions from 'actions/AssetActions';
import {Table, Select, Switch} from 'antd';
import {
	ArrowRightOutlined,
	ArrowUpOutlined,
	ArrowDownOutlined,
	StarOutlined,
} from '@ant-design/icons';
import AssetWrapper from '../Utility/AssetWrapper';
import PageHeader from 'components/PageHeader/PageHeader';
import SearchInput from '../Utility/SearchInput';
import Translate from 'react-translate-component';
import Icon from '../Icon/Icon';
import MarketsActions from 'actions/MarketsActions';
import MarketsStore from 'stores/MarketsStore';
import utils from 'common/utils';
import ChartjsAreaChart from '../Graph/Graph';
import {getAssetIcon} from 'constants/assets';
import {withRouter} from 'react-router-dom';

const SORT_TYPE_MULTIPLE = 'multiple';

class AccountTrade extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: '',
			isLoading: false,
			selectedResolution: '1h',
			selectedAsset: 'ALL',
			baseAssetSymbol: '',
			rowsOnPage: '10',
			marketBars: [],
			header: [],
			sortingColumns: {},
			sortType: 'single',
		};

		this.onClickTrade = this.onClickTrade.bind(this);
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		this._checkAssets(nextProps.assets);
		if (
			nextProps.assets.size > 0 &&
			this.props.assets.size != nextProps.assets.size
		) {
			setTimeout(() => {
				this.onClickAsset(this.state.baseAssetSymbol, false);
			}, 500);
		}
	}

	UNSAFE_componentWillMount() {
		setTimeout(() => {
			this.onClickAsset(this.state.baseAssetSymbol, false);
		}, 500);
		this._checkAssets(this.props.assets, true);
		this._buildColumns();
	}

	componentWillUnmount() {
		if (this.statsInterval) this.statsInterval();
	}

	_changeSortType(checked) {
		return new Promise((resolve) => {
			if (checked) {
				this.setState({
					sortType: 'multiple',
					sortedColumns: {},
				});
			} else {
				this.setState({
					sortType: 'single',
					sortedColumns: {},
				});
			}
			resolve();
		}).then(() => this._buildColumns());
	}

	_checkAssets(assets, force) {
		if (this.props.account.get('assets').size) return;
		const lastAsset = assets
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
		const {isLoading} = this.state;
		const marketBars = this.state.marketBars;

		if (!isLoading && this.props.assets.size > 0) {
			this.setState({isLoading: true});

			let newBucketSize = 60;
			if (resolution === '30m') newBucketSize = 60;
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

							bars = bars.filter((bar) => {
								return bar.time >= from && bar.time <= to;
							});

							if (bars.length > 36) {
								const gap = parseInt(bars.length / 36);
								const filteredBars = [];
								for (let i = 0; i < 36; i++) filteredBars.push(bars[i * gap]);
								bars = filteredBars;
							}

							const marketBarIndex = marketBars.findIndex(
								(marketBar) =>
									marketBar['quoteAssetId'] === quoteAsset.get('id') &&
									marketBar['baseAssetId'] === baseAsset.get('id')
							);
							const newMarketBar = {
								quoteAssetId: quoteAsset.get('id'),
								baseAssetId: baseAsset.get('id'),
								bars: bars,
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
									that.setState({isLoading: false, marketBars});
								}, 500);
							} else {
								this.setState({marketBars});
							}
						});
					})
					.catch((e) => {
						console.log('Error: Failed to subscribe market, ', e);
						this.setState({isLoading: false, marketBars});
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
			this.setState({selectedResolution: option}, () => {
				this._buildColumns();
				this.onClickAsset(this.state.baseAssetSymbol, true);
			});
		} else if (type === 'asset-filter') {
			this.setState({selectedAsset: option});
		}
	}

	onClickAsset(newBaseAssetSymbol, isResolutionChanged) {
		const {assets, starredMarkets} = this.props;
		const {selectedResolution, isLoading, baseAssetSymbol} = this.state;
		const assetPairs = [];
		if (isLoading) {
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

		if (baseAssetSymbol === newBaseAssetSymbol && !isResolutionChanged) {
			this.setState({baseAssetSymbol: ''});
		} else {
			this.setState({baseAssetSymbol: newBaseAssetSymbol});
		}
	}

	onClickTrade(name) {
		const quoteAssetSymbol = name.split('/')[0];
		const baseAssetSymbol = name.split('/')[1];
		const path = `/market/${quoteAssetSymbol}_${baseAssetSymbol}`;
		this.props.history.push(path);
	}

	_addMarket(quoteAssetSymbol, baseAssetSymbol) {
		const marketID = `${quoteAssetSymbol}_${baseAssetSymbol}`;
		if (!this.props.starredMarkets.has(marketID)) {
			SettingsActions.addStarMarket(quoteAssetSymbol, baseAssetSymbol);
		} else {
			SettingsActions.removeStarMarket(quoteAssetSymbol, baseAssetSymbol);
		}
	}

	_buildColumns() {
		const {selectedResolution, sortingColumns, sortType} = this.state;

		this.setState({
			header: [
				{
					title: () => {
						return (
							<div className="header-text">
								<Translate component="span" content="account.votes.name" />
							</div>
						);
					},
					key: 'name',
					sorter: {
						compare: (a, b) => {
							return a.marketName > b.marketName
								? 1
								: a.marketName < b.marketName
								? -1
								: 0;
						},
						multiple:
							sortType === 'multiple'
								? Object.keys(sortingColumns).indexOf('name') + 1
								: false,
					},
					render: (rowData) => {
						const {baseAssetSymbol, quoteAssetSymbol} = rowData;

						return (
							<div style={{display: 'flex', alignItems: 'center'}}>
								<img
									className="asset-img"
									src={getAssetIcon(quoteAssetSymbol)}
									alt="Asset logo"
									width="28px"
									css={(theme) => ({
										display: theme.mode === 'dark' ? 'unset' : 'none',
										width: '28px',
										height: '28px',
									})}
								/>
								<img
									className="asset-img"
									src={getAssetIcon(quoteAssetSymbol, 'light')}
									alt="Asset logo"
									width="28px"
									css={(theme) => ({
										display: theme.mode === 'light' ? 'unset' : 'none',
										width: '40px',
									})}
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
					title: () => {
						return (
							<div className="header-text">
								<Translate component="span" content="exchange.price" />
							</div>
						);
					},
					dataIndex: 'price',
					key: 'price',
					sorter: {
						compare: (a, b) => {
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
						multiple:
							sortType === 'multiple'
								? Object.keys(sortingColumns).indexOf('price') + 1
								: false,
					},
					render: (price) => {
						return (
							<div>
								<div className="price">{`${price}`}</div>
							</div>
						);
					},
				},
				{
					title: () => {
						return (
							<div className="header-text">
								<span>
									{selectedResolution}{' '}
									<Translate component="span" content="account.change" />
								</span>
							</div>
						);
					},
					dataIndex: 'rateChange',
					key: 'rateChange',
					sorter: {
						compare: (a, b) => {
							return Number(a.rateChange) > Number(b.rateChange)
								? 1
								: Number(a.rateChange) < Number(b.rateChange)
								? -1
								: 0;
						},
						multiple:
							sortType === 'multiple'
								? Object.keys(sortingColumns).indexOf('rateChange') + 1
								: false,
					},
					render: (rateChange) => {
						const className =
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
								{className === '' && (
									<ArrowRightOutlined className={className} />
								)}
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

						const borderColor =
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
					title: () => {
						return (
							<div className="header-text">
								<span>
									{selectedResolution}{' '}
									<Translate component="span" content="account.high" /> /
									{selectedResolution}{' '}
									<Translate component="span" content="account.low" />
								</span>
							</div>
						);
					},
					dataIndex: 'rateHighLow',
					key: 'rateHighLow',
					sorter: {
						compare: (a, b) => {
							return a.rateHighLow > b.rateHighLow
								? 1
								: a.rateHighLow < b.rateHighLow
								? -1
								: 0;
						},
						multiple:
							sortType === 'multiple'
								? Object.keys(sortingColumns).indexOf('rateHighLow') + 1
								: false,
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
					title: () => {
						return (
							<div className="header-text">
								<Translate component="span" content="account.market_cap" />
							</div>
						);
					},
					dataIndex: 'marketCap',
					key: 'marketCap',
					sorter: {
						compare: (a, b) => {
							let aMarketCap = a.marketCap;
							let bMarketCap = b.marketCap;

							if (aMarketCap.includes(',')) {
								aMarketCap = aMarketCap.replaceAll(',', '');
							}
							if (aMarketCap.includes('M')) {
								aMarketCap = aMarketCap.replaceAll('M', '');
							}
							if (bMarketCap.includes(',')) {
								bMarketCap = bMarketCap.replaceAll(',', '');
							}
							if (bMarketCap.includes('M')) {
								bMarketCap = bMarketCap.replaceAll('M', '');
							}
							return Number(aMarketCap) > Number(bMarketCap)
								? 1
								: Number(aMarketCap) < Number(bMarketCap)
								? -1
								: 0;
						},
						multiple:
							sortType === 'multiple'
								? Object.keys(sortingColumns).indexOf('marketCap') + 1
								: false,
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
									{counterpart.translate('account.trade')}
								</button>
							</div>
						);
					},
				},
				{
					title: <Translate component="span" content="account.watch" />,
					key: 'watch',
					render: (rowData) => {
						const {baseAssetSymbol, quoteAssetSymbol} = rowData;
						const marketID = `${quoteAssetSymbol}_${baseAssetSymbol}`;
						const isStarred = this.props.starredMarkets.has(marketID);
						return (
							<div
								onClick={() =>
									this._addMarket(quoteAssetSymbol, baseAssetSymbol)
								}
							>
								{isStarred ? (
									<Icon name="fi-star" className="white-star" />
								) : (
									<StarOutlined />
								)}
							</div>
						);
					},
				},
			],
		});
	}

	_buildDataSource(assets) {
		if (assets.size === 0) return [];

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
			0;
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
			const finalPrice =
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

			const highPrecisionAssets = [
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
			const change = utils.format_number(
				stats && stats.change ? stats.change : 0,
				2
			);

			// Market Cap
			let dynamic;
			assets.map((asset) => {
				if (asset.id === quote.asset_id) dynamic = asset.dynamic;
			});
			const marketCap = utils.format_volume(
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
				rateHighLow = `${rateHigh} / ${rateLow}`;
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

	toggleSortOrder = (pagination, filters, sorter) => {
		const columns = {...this.state.sortingColumns};

		if (sorter instanceof Array) {
			sorter.forEach((elem) => {
				if (!Object.keys(columns).includes(elem.field)) {
					columns[elem.field] = elem.order;
				} else if (
					Object.keys(columns).includes(elem.field) &&
					columns[elem.field] !== elem.value
				) {
					columns[elem.field] = elem.order;
				}
			});
			const x = Object.keys(columns).filter(
				(item) => !sorter.map((item) => item.field).includes(item)
			);
			x.forEach((item) => {
				delete columns[item];
			});
		} else {
			columns[sorter.field] = sorter.order;
		}

		this.setState({
			sortingColumns: columns,
		});

		this._buildColumns();
	};

	render() {
		const {assets} = this.props;
		const {
			header,
			sortType,
			baseAssetSymbol,
			rowsOnPage,
			isLoading,
			selectedResolution,
		} = this.state;
		const canChangeBaseAsset = isLoading ? 'disabled' : '';

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
					onClick={() => this.onClickAsset(asset.symbol, false)}
				>
					{asset.symbol}
				</div>
			);
		});

		const dataSource = this._buildDataSource(assets);

		return (
			<div className="account-trade">
				<div>
					<PageHeader
						title={counterpart.translate('account.trade')}
						level={2}
						showDivider
					/>
				</div>
				<div className="content">
					<div className="filter">
						<SearchInput
							placeholder={counterpart.translate('markets.search')}
							value={this.state.searchTerm}
							style={{width: '30%'}}
							onChange={this._onSearchChange.bind(this)}
						/>
						<Select
							style={{width: '70px', marginLeft: '24px'}}
							value={selectedResolution}
							onChange={(rows) => this._onDropDownChange(rows, 'resolution')}
							disabled={isLoading}
							getPopupContainer={(triggerNode) => triggerNode.parentNode}
						>
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
							getPopupContainer={(triggerNode) => triggerNode.parentNode}
						>
							<Select.Option key={'ALL'}>
								{counterpart.translate('account.all_assets')}
							</Select.Option>
							{assetOptions}
						</Select>
						<Switch
							id={'multiple-sort'}
							style={{width: '45px', marginLeft: '24px'}}
							defaultChecked={sortType === SORT_TYPE_MULTIPLE}
							onChange={this._changeSortType.bind(this)}
						></Switch>
						<label
							style={{
								display: 'inline-block',
								marginLeft: '4px',
								textTransform: 'capitalize',
							}}
							htmlFor={'multiple-sort'}
						>
							<Translate component="span" content="account.multi_sorting" />
						</label>
					</div>
					<div className="select">
						<div
							className={
								baseAssetSymbol === 'star'
									? `toggle-box selected ${canChangeBaseAsset}`
									: `toggle-box ${canChangeBaseAsset}`
							}
							onClick={() => this.onClickAsset('star', false)}
						>
							<Icon name="fi-star" className="white-star" />
						</div>
						{toggleBoxes}
					</div>
					<div className="table">
						<Table
							style={{width: '100%', marginTop: '16px'}}
							rowKey="name"
							columns={header}
							dataSource={dataSource}
							onChange={this.toggleSortOrder}
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

export default withRouter(
	connect(AccountTrade, {
		listenTo() {
			return [AssetStore, MarketsStore];
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
				starredMarkets: SettingsStore.getState().starredMarkets,
			};
		},
	})
);
