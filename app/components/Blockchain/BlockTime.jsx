import React from 'react';
import TimeAgo from '../Utility/TimeAgo';
import counterpart from 'counterpart';
import PropTypes from 'prop-types';
import BlockchainActions from 'actions/BlockchainActions';
import BlockchainStore from 'stores/BlockchainStore';
import {connect} from 'alt-react';

/**
 * @brief displays block's date and time based on block number
 *
 * properties: block_number - number
 * Note, it fetches block header data only
 **/

class BlockTime extends React.Component {
	static propTypes = {
		block_number: PropTypes.number.isRequired,
	};

	constructor(props) {
		super(props);
		this.state = {
			time: null,
		};
	}

	componentWillMount() {
		if (!this.props.blockHeader) {
			BlockchainActions.getHeader.defer(this.props.block_number);
		}
	}

	shouldComponentUpdate(next_props) {
		return (
			next_props.block_number !== this.props.block_number ||
			next_props.blockHeader !== this.props.blockHeader
		);
	}
	formatDate(isDate = false) {
		if (isDate) {
			return counterpart.localize(this.props.blockHeader.timestamp, {
				type: 'date',
				format: 'short',
			});
		} else {
			return counterpart.localize(this.props.blockHeader.timestamp, {
				type: 'time',
				format: 'short',
			});
		}
	}

	render() {
		return (
			<span className="time" key={this.props.block_number}>
				{this.props.blockHeader ? (
					this.props.fullDate ? (
						this.props.transactionDate ? (
							<div>
								<span style={{color: '#E5AC00'}}>{this.formatDate(true)}</span>,{' '}
								{this.formatDate(false)}
							</div>
						) : (
							counterpart.localize(this.props.blockHeader.timestamp, {
								type: this.props.type || 'date',
								format: this.props.format || 'full',
							})
						)
					) : (
						<TimeAgo time={this.props.blockHeader.timestamp} />
					)
				) : null}
			</span>
		);
	}
}

BlockTime = connect(BlockTime, {
	listenTo() {
		return [BlockchainStore];
	},
	getProps(props) {
		return {
			blockHeader: BlockchainStore.getState().blockHeaders.get(
				props.block_number
			),
		};
	},
});

export default BlockTime;
