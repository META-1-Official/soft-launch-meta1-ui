import React from 'react';
import {Apis} from 'meta1-vision-ws';
import {connect} from 'alt-react';

import utils from 'common/utils';
import SettingsStore from 'stores/SettingsStore';
// import SettingsActions from "actions/SettingsActions";
import MarketsStore from 'stores/MarketsStore';
import MarketsTable from './MarketsTable';
import chainIds from 'chain/chainIds';

const CHAINID_SHORT = chainIds[process.env.CURRENT_NET].substr(0, 8);

class StarredMarkets extends React.Component {
	render() {
		return (
			<MarketsTable
				markets={this.props.starredMarkets}
				forceDirection={true}
				isFavorite
			/>
		);
	}
}
StarredMarkets = connect(StarredMarkets, {
	listenTo() {
		return [SettingsStore];
	},
	getProps() {
		return {
			starredMarkets: SettingsStore.getState().starredMarkets,
		};
	},
});

class FeaturedMarkets extends React.Component {
	constructor() {
		super();

		let chainID = Apis.instance().chain_id;
		if (chainID) chainID = chainID.substr(0, 8);

		this.state = {
			chainID,
			markets: [],
		};

		this._getMarkets = this._getMarkets.bind(this);
		this.update = this.update.bind(this);
	}

	_getMarkets(state = this.state, props = this.props) {
		const {chainID} = state;

		if (chainID === CHAINID_SHORT) {
			return props.markets;
		} else {
			// assume testnet
			return [
				['TEST', 'PEG.FAKEUSD'],
				['TEST', 'BTWTY'],
			];
		}
	}

	shouldComponentUpdate(nextProps) {
		return !utils.are_equal_shallow(nextProps, this.props);
	}

	componentWillMount() {
		this.update();
	}

	componentWillReceiveProps(nextProps) {
		this.update(nextProps);
	}

	update(props = this.props) {
		let markets = this._getMarkets(this.state, props);

		markets = markets.filter((market) => {
			/* Only use markets corresponding to the current tab */
			return props.quotes[0] === market.base;
		});

		this.setState({markets});
	}

	render() {
		return (
			<MarketsTable
				markets={this.state.markets}
				showFlip={false}
				isFavorite={false}
			/>
		);
	}
}

FeaturedMarkets = connect(FeaturedMarkets, {
	listenTo() {
		return [MarketsStore, SettingsStore];
	},
	getProps() {
		let userMarkets = SettingsStore.getState().userMarkets;
		let defaultMarkets = SettingsStore.getState().defaultMarkets;

		if (userMarkets.size) {
			userMarkets.forEach((market, key) => {
				if (!defaultMarkets.has(key))
					defaultMarkets = defaultMarkets.set(key, market);
			});
		}

		return {
			markets: defaultMarkets,
		};
	},
});

class TopMarkets extends React.Component {
	render() {
		return <MarketsTable markets={[]} />;
	}
}

export {StarredMarkets, FeaturedMarkets, TopMarkets};
