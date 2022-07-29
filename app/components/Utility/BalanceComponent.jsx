import React from 'react';
import FormattedAsset from './FormattedAsset';
import ChainTypes from './ChainTypes';
import BindToChainState from './BindToChainState';
import PropTypes from 'prop-types';

/**
 *  Given a balance_object, displays it in a pretty way
 *
 *  Expects one property, 'balance' which should be a balance_object id
 */

class BalanceComponent extends React.Component {
	static propTypes = {
		balance: ChainTypes.ChainObject.isRequired,
		assetInfo: PropTypes.node,
		hide_asset: PropTypes.bool,
		setPercentValueHandler: PropTypes.func,
		symbol: PropTypes.string,
	};

	static defaultProps = {
		hide_asset: false,
		asPercentage: false,
	};

	render() {
		let amount = this.props.balance.get('balance');
		if (amount || amount == 0) {
			amount = Number(this.props.balance.get('balance'));
		} else {
			amount = null;
		}
		let type = this.props.balance.get('asset_type');
		if (this.props.asPercentage) {
			return (
				<FormattedAsset
					amount={amount}
					asset={type}
					asPercentage={this.props.asPercentage}
					assetInfo={this.props.assetInfo}
					replace={this.props.replace}
					hide_asset={this.props.hide_asset}
					setPercentValueHandler={this.props.setPercentValueHandler}
					symbol={this.props.symbol}
				/>
			);
		} else if (!this.props.asPercentage) {
			return (
				<FormattedAsset
					amount={amount}
					asset={type}
					asPercentage={this.props.asPercentage}
					assetInfo={this.props.assetInfo}
					replace={this.props.replace}
					hide_asset={this.props.hide_asset}
				/>
			);
		}
	}
}

export default BindToChainState(BalanceComponent);
