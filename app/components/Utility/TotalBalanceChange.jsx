import React from 'react';
import ChainTypes from './ChainTypes';
import BindToChainState from './BindToChainState';
import utils from 'common/utils';
import marketUtils from 'common/market_utils';
import {ChainStore} from 'meta1js';
import MarketsStore from 'stores/MarketsStore';
import SettingsStore from 'stores/SettingsStore';
import MarketStatsCheck from './MarketStatsCheck';
import PropTypes from 'prop-types';

class TotalBalanceChange extends React.Component {
	static propTypes = {
		balances: ChainTypes.ChainObjectsList,
	};

	constructor() {
		super();
	}

	shouldComponentUpdate(np) {
		return (
			super.shouldComponentUpdate(np) ||
			!utils.are_equal_shallow(np.balances, this.props.balances) ||
			!utils.are_equal_shallow(np.preferredUnit, this.props.preferredUnit)
		);
	}

	_getTotalChange() {
		let total = 0;
		let prevTotal = 0;

		let {balances, preferredUnit} = this.props;

		let allMarketStats = MarketsStore.getState().allMarketStats;
		let coreAsset = ChainStore.getAsset('1.3.0');
		let toAsset = ChainStore.getAsset(preferredUnit);

		if (!coreAsset || !toAsset) {
			return 0;
		}

		balances.forEach((balance) => {
			let amount = parseInt(balance.get('balance'), 10);
			let asset = ChainStore.getAsset(balance.get('asset_type'));

			if (asset) {
				let eqBalance = marketUtils.convertValue(
					amount,
					toAsset,
					asset,
					allMarketStats,
					coreAsset
				);

				total += eqBalance;
				let changePrice =
					asset.get('symbol') === preferredUnit
						? {change: 0}
						: MarketsStore.getState().allMarketStats.get(
								asset.get('symbol') + '_' + preferredUnit
						  );
				prevTotal += eqBalance * (1 - Number(changePrice.change) / 100);
			}
		});

		return (total / prevTotal - 1) * 100;
	}

	render() {
		return <>{this._getTotalChange().toFixed(2)}%</>;
	}
}
TotalBalanceChange = BindToChainState(TotalBalanceChange);
export default TotalBalanceChange;
