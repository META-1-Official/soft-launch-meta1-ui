import React from 'react';
import {connect} from 'alt-react';
import {ChainStore} from 'meta1js';
import {Map, List} from 'immutable';
import SettingsStore from 'stores/SettingsStore';
import AssetStore from 'stores/AssetStore';
import AssetActions from 'actions/AssetActions';
import {Table, Select} from 'antd';
import AltContainer from 'alt-container';
import AssetWrapper from '../Utility/AssetWrapper';
import PageHeader from 'components/PageHeader/PageHeader';
import SearchInput from '../Utility/SearchInput';
import Translate from 'react-translate-component';
import Icon from '../Icon/Icon';
import MarketsActions from 'actions/MarketsActions';
import MarketsStore from 'stores/MarketsStore';
import {
	getResolutionsFromBuckets,
	getBucketFromResolution,
} from '../exchange/tradingViewClasses';

class AccountTrade extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: '',
			isLoading: false,
			isFetchingMarketInfo: false,
			selectedDuration: '1h',
			selectedAsset: 'ALL',
			baseAssetSymbol: 'USDT',
			rowsOnPage: '25',
		};
	}

	componentWillReceiveProps(nextProps) {
		this._checkAssets(nextProps.assets);
	}

	componentWillMount() {
		this._checkAssets(this.props.assets, true);

		setTimeout(() => {
			this._getMarketInfo(this.props.assets);
		}, 3000);
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

	_getMarketInfo(assets) {
		const {baseAssetSymbol, isFetchingMarketInfo} = this.state;

		if (!isFetchingMarketInfo) {
			this.setState({isFetchingMarketInfo: true});

			const newBucketSize = getBucketFromResolution('D');
			console.log('@1100  -');
			MarketsActions.changeBucketSize(newBucketSize);
			console.log('@1101  -');
			const baseAssetId = assets.find(
				(asset) => asset.symbol === baseAssetSymbol
			).id;
			const baseAsset = ChainStore.getAsset(baseAssetId);

			assets.map((asset) => {
				const quoteAsset = ChainStore.getAsset(asset.id);
				console.log(
					'@1102  -',
					newBucketSize,
					quoteAsset.get('id'),
					baseAsset.get('id')
				);

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
							console.log('@1104 - ', bars);
							bars = bars.filter((a) => {
								return a.time >= from && a.time <= to;
							});
						});
					})
					.catch((e) => console.log('@1105 - ', e));
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

	handleRowsChange(rows, type) {
		console.log('@11 - ', rows, type);
		if (type === 'duration') this.setState({selectedDuration: rows});
		else if (type === 'asset') this.setState({selectedAsset: rows});
	}

	render() {
		const {account, assets} = this.props;
		const {accountName, currentTab, activeAsset, rowsOnPage} = this.state;

		const assetOptions = assets.map((asset) => (
			<Select.Option key={asset.symbol}>{asset.symbol}</Select.Option>
		));

		let toggleBoxes = [];
		assets.map((asset) => {
			if (asset.symbol === activeAsset)
				toggleBoxes.push(
					<div key={asset.symbol} className="toggle-box selected">
						{asset.symbol}
					</div>
				);
			else
				toggleBoxes.push(
					<div key={asset.symbol} className="toggle-box">
						{asset.symbol}
					</div>
				);
		});

		let dataSource = [];
		let columns = [];
		const fakeAssets = [
			{
				name: 'BNB',
				price: '585.00',
				rateChange: 4.52,
				rateHigh: '585.2',
				rateLow: '562.3',
				marketCap: '9852943',
			},
			{
				name: 'EOS',
				price: '4.3234',
				rateChange: 3.85,
				rateHigh: '4.349',
				rateLow: '4.224',
				marketCap: '452423',
			},
		];

		fakeAssets.map((asset) => {
			dataSource.push({
				name: asset.name,
				price: asset.price,
				rateChange: asset.rateChange,
				rateHighLow: `$${asset.rateHigh}/${asset.rateLow}`,
				marketCap: asset.marketCap,
			});
		});

		columns = [
			{
				title: <Translate component="span" content="account.votes.name" />,
				dataIndex: 'name',
				key: 'name',
				sorter: (a, b) => {
					return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
				},
				render: (name) => {
					return (
						<div>
							<div>{name}</div>
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
							<div>{price}</div>
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
					return (
						<div>
							<div>{rateChange}</div>
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
		];

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
							value={this.state.selectedDuration}
							onChange={(rows) => this.handleRowsChange(rows, 'duration')}
						>
							<Select.Option key={'1h'}>1h</Select.Option>
							<Select.Option key={'3h'}>3h</Select.Option>
							<Select.Option key={'10h'}>10h</Select.Option>
							<Select.Option key={'1d'}>1d</Select.Option>
							<Select.Option key={'3d'}>3d</Select.Option>
							<Select.Option key={'10d'}>10d</Select.Option>
						</Select>
						<Select
							style={{width: '150px', marginLeft: '24px'}}
							value={this.state.selectedAsset}
							onChange={(rows) => this.handleRowsChange(rows, 'asset')}
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
					<div>
						<span>pagination</span>
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
		return {assets, assetsList};
	},
});
