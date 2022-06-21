import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import Ps from 'perfect-scrollbar';
import SettingsActions from 'actions/SettingsActions';
import SettingsStore from 'stores/SettingsStore';
import {connect} from 'alt-react';
import {ChainTypes as grapheneChainTypes} from 'meta1js';
const {operations} = grapheneChainTypes;
import ReactTooltip from 'react-tooltip';
import {FillOrder} from 'common/MarketClasses';
import {MarketHistoryView} from './View/MarketHistoryView';

import counterpart from 'counterpart';
import BlockDate from '../Utility/BlockDate';
import PriceText from '../Utility/PriceText';
import {Tooltip} from 'antd';
import getLocale from 'browser-locale';
import Icon from 'components/Icon/Icon';

const AllHistoryViewRow = ({fill, base, quote}) => {
	const isMarket = fill.id.indexOf('5.0') !== -1 ? true : false;
	const timestamp = isMarket ? (
		<td style={{color: 'rgba(255, 255, 255, 0.5)', textAlign: 'left'}}>
			<Tooltip title={fill.time.toString()} placement="left">
				<div
					className="tooltip"
					style={{whiteSpace: 'nowrap', paddingLeft: '10px'}}
				>
					{counterpart.localize(fill.time, {
						type: 'date',
						format:
							getLocale().toLowerCase().indexOf('en-us') !== -1
								? 'market_history_us'
								: 'market_history',
					})}
				</div>
			</Tooltip>
		</td>
	) : (
		<BlockDate component="td" block_number={fill.block} tooltip />
	);

	return (
		<tr style={{background: fill.isBid ? '#091613' : '#1D0D0F'}}>
			{timestamp}
			<td
				style={{color: fill.isBid ? '#009D55' : '#FF2929', textAlign: 'left'}}
			>
				<PriceText price={fill.getPrice()} base={base} quote={quote} />
			</td>
			<td style={{color: 'rgba(255, 255, 255, 0.5)', textAlign: 'left'}}>
				{fill.amountToReceive()}
			</td>
		</tr>
	);
};

const MarketHistoryViewRow = ({fill, base, quote}) => {
	let base_symbol = base?._root?.entries[1][1];
	let quote_symbol = quote?._root?.entries[1][1];
	let pay_amount = fill.amountToPay();
	let receive_amount = fill.amountToReceive();
	let price = fill.getPrice();
	let total = pay_amount * price;

	return (
		<tr className="market-history-view-row">
			<td>
				<div
					className="td-content"
					style={{
						borderLeftColor: fill.isBid ? '#0F923A' : '#FF2929',
						borderLeftStyle: 'solid',
						borderLeftWidth: '8px',
						paddingLeft: '10px',
					}}
				>
					<div
						style={{
							fontSize: '15px',
							fontWeight: 400,
							color: 'white',
							textAlign: 'center',
						}}
					>
						{base_symbol}
					</div>
					<div
						style={{
							borderBottom: '1px solid #566176',
							width: '100%',
							height: '0px',
							marginTop: 5,
							marginBottom: 5,
						}}
					></div>
					<div
						style={{
							fontSize: '12px',
							color: '#715C5C',
							textAlign: 'center',
						}}
					>
						{quote_symbol}
					</div>
				</div>
			</td>
			<td>
				<div
					style={{
						fontSize: '15px',
						fontWeight: 400,
						color: 'white',
						textAlign: 'center',
					}}
				>
					{receive_amount}
				</div>
				<div
					style={{
						borderBottom: '1px solid #566176',
						width: '100%',
						height: '0px',
						marginTop: 5,
						marginBottom: 5,
					}}
				></div>
				<div
					style={{
						fontSize: '12px',
						color: '#715C5C',
						textAlign: 'center',
					}}
				>
					{pay_amount}
				</div>
			</td>
			<td>
				<div className="td-content">
					<div style={{color: '#715C5C'}}>
						{Number(fill.getPrice()).toLocaleString('en')}
					</div>
				</div>
			</td>
			<td>
				<div className="td-content" style={{alignItems: 'flex-end'}}>
					<div
						style={{
							color: 'white',
							fontSize: '15px',
							fontWeight: 400,
							textAlign: 'right',
						}}
					>
						{Number(total).toLocaleString('en')}
					</div>
				</div>
			</td>
			{/* <td>
				<div className="td-content">
					<div
						style={{
							width: '32px',
							height: '32px',
							background: '#0A0B0D',
							border: '1px solid #1C1F27',
							borderRadius: '16px',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							position: 'absolute',
							right: 15,
						}}
					>
						<Icon name="times" className="cancel-round-btn" />
					</div>
				</div>
			</td> */}
		</tr>
	);
};

class MarketHistory extends React.Component {
	constructor(props) {
		super();
		this.state = {
			activeTab: props.viewSettings.get('historyTab', 'history'),
			rowCount: 100,
			showAll: false,
		};
	}

	shouldComponentUpdate(nextProps, nextState) {
		return (
			!Immutable.is(nextProps.history, this.props.history) ||
			nextProps.baseSymbol !== this.props.baseSymbol ||
			nextProps.quoteSymbol !== this.props.quoteSymbol ||
			nextProps.className !== this.props.className ||
			nextProps.activeTab !== this.props.activeTab ||
			nextState.activeTab !== this.state.activeTab ||
			nextState.showAll !== this.state.showAll ||
			nextProps.currentAccount !== this.props.currentAccount ||
			nextProps.isPanelActive !== this.props.isPanelActive ||
			nextProps.hideScrollbars !== this.props.hideScrollbars
		);
	}

	componentDidMount() {
		if (!this.props.hideScrollbars) {
			this.updateContainer(1);
		}
	}

	componentDidUpdate(prevState) {
		let {hideScrollbars} = this.props;
		let {showAll} = this.state;

		if (prevState.showAll != showAll) {
			if (showAll && !hideScrollbars) {
				this.updateContainer(2);
			} else if (!showAll && !hideScrollbars) {
				this.updateContainer(3);
			} else if (showAll && hideScrollbars) {
				this.updateContainer(1);
			} else {
				this.updateContainer(0);
			}
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.activeTab !== this.props.activeTab) {
			this.changeTab(nextProps.activeTab);
		}

		// Reset on Market Switch
		if (
			nextProps.baseSymbol !== this.props.baseSymbol ||
			nextProps.quoteSymbol !== this.props.quoteSymbol
		) {
			this.setState({showAll: false});
			this.updateContainer(0);

			if (!this.props.hideScrollbars) {
				this.updateContainer(1);
			}
		}

		// Reset on hideScrollbars switch
		if (nextProps.hideScrollbars !== this.props.hideScrollbars) {
			this.updateContainer(0);

			if (!nextProps.hideScrollbars) {
				this.updateContainer(1);
			}
		}
	}

	/***
	 * Update PS Container
	 * type:int [0:destroy, 1:init, 2:update, 3:update w/ scrollTop] (default: 2)
	 */
	updateContainer(type = 2) {
		let containerNode = this.refs.view.refs.history;
		let containerTransition = this.refs.view.refs.historyTransition;

		if (!containerNode) return;

		if (type == 0) {
			containerNode.scrollTop = 0;
			Ps.destroy(containerNode);
		} else if (type == 1) {
			Ps.initialize(containerNode);
			this.updateContainer(3);
		} else if (type == 2) {
			Ps.update(containerNode);
		} else if (type == 3) {
			containerNode.scrollTop = 0;
			Ps.update(containerNode);
		}

		if (containerTransition) {
			containerTransition.resetAnimation();
		}
	}

	onSetShowAll() {
		this.setState({
			showAll: !this.state.showAll,
		});
	}

	changeTab(tab) {
		SettingsActions.changeViewSetting({
			historyTab: tab,
		});
		this.setState({
			activeTab: tab,
		});

		// Ensure that focus goes back to top of scrollable container when tab is changed
		this.updateContainer(3);

		setTimeout(ReactTooltip.rebuild, 1000);
	}

	render() {
		let {
			history,
			myHistory,
			base,
			quote,
			baseSymbol,
			quoteSymbol,
			isNullAccount,
			activeTab,
		} = this.props;
		let {rowCount, showAll} = this.state;
		let historyRows = null;

		if (isNullAccount) {
			activeTab = 'history';
		}

		if (activeTab === 'my_history' && myHistory && myHistory.size) {
			// User History

			const assets = {
				[quote.get('id')]: {
					precision: quote.get('precision'),
				},
				[base.get('id')]: {
					precision: base.get('precision'),
				},
			};

			historyRows = myHistory
				.filter((a) => {
					let opType = a.getIn(['op', 0]);
					return opType === operations.fill_order;
				})
				.filter((a) => {
					let quoteID = quote.get('id');
					let baseID = base.get('id');
					let pays = a.getIn(['op', 1, 'pays', 'asset_id']);
					let receives = a.getIn(['op', 1, 'receives', 'asset_id']);
					let hasQuote = quoteID === pays || quoteID === receives;
					let hasBase = baseID === pays || baseID === receives;
					return hasQuote && hasBase;
				})
				.sort((a, b) => {
					return b.get('block_num') - a.get('block_num');
				})
				.map((trx) => {
					let fill = new FillOrder(trx.toJS(), assets, quote.get('id'));
					AllHistoryViewRow;
					return activeTab === 'history' ? (
						<AllHistoryViewRow
							key={fill.id}
							fill={fill}
							base={base}
							quote={quote}
						/>
					) : (
						<MarketHistoryViewRow
							key={fill.id}
							fill={fill}
							base={base}
							quote={quote}
						/>
					);
				})
				.toArray();
		} else if (history && history.size) {
			// Market History
			historyRows = this.props.history
				.take(100)
				.map((fill) => {
					return activeTab === 'history' ? (
						<AllHistoryViewRow
							key={fill.id}
							fill={fill}
							base={base}
							quote={quote}
						/>
					) : (
						<MarketHistoryViewRow
							key={fill.id}
							fill={fill}
							base={base}
							quote={quote}
						/>
					);
				})
				.toArray();
		}
		let totalRows = historyRows ? historyRows.length : null;
		if (!showAll && historyRows) {
			historyRows.splice(rowCount, historyRows.length);
		}

		return (
			<MarketHistoryView
				ref="view"
				className={this.props.className}
				innerClass={this.props.innerClass}
				innerStyle={this.props.innerStyle}
				noHeader={this.props.noHeader}
				headerStyle={this.props.headerStyle}
				activeTab={activeTab}
				chartHeight={this.props.chartHeight}
				quoteSymbol={quoteSymbol}
				baseSymbol={baseSymbol}
				tinyScreen={this.props.tinyScreen}
				historyRows={historyRows}
				totalRows={totalRows}
				showAll={showAll}
				onSetShowAll={this.onSetShowAll.bind(this)}
			/>
		);
	}
}

MarketHistory.defaultProps = {
	history: [],
};

MarketHistory.propTypes = {
	history: PropTypes.object.isRequired,
};

export default connect(MarketHistory, {
	listenTo() {
		return [SettingsStore];
	},
	getProps() {
		return {
			viewSettings: SettingsStore.getState().viewSettings,
		};
	},
});
