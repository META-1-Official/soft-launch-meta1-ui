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
import Icon from '../Icon/Icon';

class AccountTrade extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: '',
			isLoading: false,
			selectedDuration: '1h',
			selectedAsset: 'ALL',
		};
	}

	componentWillReceiveProps(nextProps) {
		this._checkAssets(nextProps.assets);
	}

	componentWillMount() {
		this._checkAssets(this.props.assets, true);
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
		const {accountName, currentTab} = this.state;

		const assetOptions = assets.map((asset) => (
			<Select.Option key={asset.symbol}>{asset.symbol}</Select.Option>
		));

		let _toggleBoxes = assets.map((asset) => {
			console.log('@12 - ', asset);
			return (
				<div key={asset.symbol} className="toggle-box">
					{asset.symbol}
				</div>
			);
		});
		let toggleBoxes = _toggleBoxes.map((toggleBox) => {
			console.log('@13 - ', toggleBox);
			return toggleBox[2];
		});

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
						<span>table</span>
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
