import React from 'react';
import PropTypes from 'prop-types';
import Ps from 'perfect-scrollbar';
import OpenSettleOrders from './OpenSettleOrders';
import MarketsActions from 'actions/MarketsActions';
import Translate from 'react-translate-component';
import SettingsActions from 'actions/SettingsActions';
import {ChainStore, ChainTypes as grapheneChainTypes} from 'meta1-vision-js';
const {operations} = grapheneChainTypes;
import {LimitOrder, CallOrder, FillOrder} from 'common/MarketClasses';
import ReactTooltip from 'react-tooltip';
import {MarketTradeView} from './View/MarketTradeView';
import utils from 'common/utils';

class MyTrade extends React.Component {
	constructor(props) {
		super();
		this.state = {
			activeTab: props.activeTab,
			rowCount: 20,
			showAll: false,
			selectedOrders: [],
		};
		this._getOrders = this._getOrders.bind(this);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return (
			nextProps.baseSymbol !== this.props.baseSymbol ||
			nextProps.quoteSymbol !== this.props.quoteSymbol ||
			nextProps.className !== this.props.className ||
			nextProps.activeTab !== this.props.activeTab ||
			nextState.activeTab !== this.state.activeTab ||
			nextState.showAll !== this.state.showAll ||
			nextProps.currentAccount !== this.props.currentAccount ||
			nextState.selectedOrders !== this.state.selectedOrders ||
			nextProps.settleOrders !== this.props.settleOrders
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
		if (nextProps.activeTab !== this.state.activeTab) {
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
		let containerNode = this.refs.view.refs.container;
		let containerTransition = this.refs.contentTransition;

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

	_onSetShowAll() {
		this.setState({
			showAll: !this.state.showAll,
		});
	}

	changeTab(tab) {
		SettingsActions.changeViewSetting({
			ordersTab: tab,
		});
		this.setState({
			activeTab: tab,
		});
		this.updateContainer(3);
		setTimeout(ReactTooltip.rebuild, 1000);
	}

	cancelOrders() {
		this._cancelLimitOrders.call(this);
	}

	_cancelLimitOrders() {
		MarketsActions.cancelLimitOrders(
			this.props.currentAccount.get('id'),
			this._getOrders().map((order) => order.id)
		);
	}

	cancelOrder(orderId) {
		MarketsActions.cancelLimitOrder(
			this.props.currentAccount.get('id'),
			orderId
		);
	}

	_getOrders() {
		const {currentAccount, base, quote, feedPrice} = this.props;
		const orders = currentAccount.get('orders'),
			call_orders = currentAccount.get('call_orders');
		const baseID = base.get('id'),
			quoteID = quote.get('id');
		const assets = {
			[base.get('id')]: {precision: base.get('precision')},
			[quote.get('id')]: {precision: quote.get('precision')},
		};
		let limitOrders = orders
			.toArray()
			.map((order) => {
				let o = ChainStore.getObject(order);
				if (!o) return null;
				let sellBase = o.getIn(['sell_price', 'base', 'asset_id']),
					sellQuote = o.getIn(['sell_price', 'quote', 'asset_id']);
				if (
					(sellBase === baseID && sellQuote === quoteID) ||
					(sellBase === quoteID && sellQuote === baseID)
				) {
					return new LimitOrder(o.toJS(), assets, quote.get('id'));
				}
			})
			.filter((a) => !!a);

		let callOrders = call_orders
			.toArray()
			.map((order) => {
				try {
					let o = ChainStore.getObject(order);
					if (!o) return null;
					let sellBase = o.getIn(['call_price', 'base', 'asset_id']),
						sellQuote = o.getIn(['call_price', 'quote', 'asset_id']);
					if (
						(sellBase === baseID && sellQuote === quoteID) ||
						(sellBase === quoteID && sellQuote === baseID)
					) {
						return feedPrice
							? new CallOrder(o.toJS(), assets, quote.get('id'), feedPrice)
							: null;
					}
				} catch (e) {
					return null;
				}
			})
			.filter((a) => !!a)
			.filter((a) => {
				try {
					return a.isMarginCalled();
				} catch (err) {
					return false;
				}
			});
		return limitOrders.concat(callOrders);
	}

	render() {
		let {
			base,
			quote,
			quoteSymbol,
			baseSymbol,
			settleOrders,
			myHistory,
			settings,
		} = this.props;
		let {activeTab, showAll, rowCount} = this.state;

		if (!base || !quote) return null;

		let contentContainer;
		let footerContainer;

		/* Users Open Orders Tab (default) */
		let rows = [];
		// let totalRows = 0;

		// User Orders
		if (activeTab === 'my_trade' && myHistory && myHistory.size) {
			const assets = {
				[base.get('id')]: {precision: base.get('precision')},
				[quote.get('id')]: {precision: quote.get('precision')},
			};

			rows = myHistory
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
					const order = new FillOrder(trx.toJS(), assets, quote.get('id'));
					const price = order.getPrice();
					const isBid = order.isBid;
					const payAmount = order.amountToPay();
					const receiveAmount = order.amountToReceive();
					const total = parseFloat(payAmount) * price;

					let marketId =
						base?._root?.entries[1][1] + '_' + settings.get('unit');

					return {
						orderId: order.id,
						asset: {
							symbol: quote?._root?.entries[1][1],
							isBid: isBid,
						},
						amount: {
							change: 0,
							value: receiveAmount,
							marketId: marketId,
						},
						value: {
							value: price,
							symbol: quote?._root?.entries[1][1],
						},
					};
				})
				.toArray();
		}

		return (
			<MarketTradeView
				ref="view"
				// Styles and Classes
				style={this.props.style}
				className={this.props.className}
				innerClass={this.props.innerClass}
				innerStyle={this.props.innerStyle}
				headerStyle={this.props.headerStyle}
				// Bools
				noHeader={this.props.noHeader}
				tinyScreen={this.props.tinyScreen}
				// Containers
				data={rows}
			/>
		);
	}
}

MyTrade.defaultProps = {
	base: {},
	quote: {},
	orders: {},
	quoteSymbol: '',
	baseSymbol: '',
};

MyTrade.propTypes = {
	base: PropTypes.object.isRequired,
	quote: PropTypes.object.isRequired,
	orders: PropTypes.object.isRequired,
	quoteSymbol: PropTypes.string.isRequired,
	baseSymbol: PropTypes.string.isRequired,
};

export default MyTrade;
