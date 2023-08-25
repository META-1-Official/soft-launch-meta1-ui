import cnames from 'classnames';
import translator from 'counterpart';
import {StickyTable} from 'react-sticky-table';
import React from 'react';
import Translate from 'react-translate-component';
import PropTypes from 'prop-types';
import Ps from 'perfect-scrollbar';
import utils from 'common/utils';
import {floorFloat} from 'services/Math';
import PriceText from '../Utility/PriceText';
import TransitionWrapper from '../Utility/TransitionWrapper';
import AssetName from '../Utility/AssetName';
import Icon from '../Icon/Icon';
import {Select, Tooltip} from 'antd';
import {animateScroll} from 'react-scroll';
import SectionHeader from 'components/Utility/SectionHeader';

class OrderRows extends React.Component {
	static propTypes = {
		orderRows: PropTypes.array.isRequired,
		noOrders: PropTypes.bool.isRequired,
		isBid: PropTypes.bool.isRequired,
	};

	render() {
		let {orderRows, noOrders, isBid, id} = this.props;
		return (
			<TransitionWrapper
				id={id}
				ref={isBid ? 'bidTransition' : 'askTransaction'}
				className="transition-container clickable"
				component="div"
				transitionName="newrow"
			>
				{orderRows.length > 0
					? orderRows
					: noOrders || (
							<div className="sticky-table-row">
								<td className="cell no-orders" colSpan="3">
									{isBid ? (
										<Translate content="exchange.no_bids" />
									) : (
										<Translate content="exchange.no_asks" />
									)}
								</td>
							</div>
					  )}
			</TransitionWrapper>
		);
	}
}

const elemHeight = (elem) => (elem ? elem.getBoundingClientRect().height : 0);

const toFixed = (x) => {
	if (Math.abs(x) < 1.0) {
		var e = parseInt(x.toString().split('e-')[1]);
		if (e) {
			x *= Math.pow(10, e - 1);
			x = '0.' + new Array(e).join('0') + x.toString().substring(2);
		}
	} else {
		var e = parseInt(x.toString().split('+')[1]);
		if (e > 20) {
			e -= 20;
			x /= Math.pow(10, e);
			x += new Array(e + 1).join('0');
		}
	}
	return Number(x).toFixed(6);
};

class OrderBookRow extends React.Component {
	shouldComponentUpdate(np) {
		return (
			np.order.ne(this.props.order) ||
			np.position !== this.props.position ||
			np.index !== this.props.index ||
			np.currentAccount !== this.props.currentAccount ||
			np.quoteTotal !== this.props.quoteTotal
		);
	}

	render() {
		let {order, quote, base} = this.props;

		const isBid = order.isBid();

		let price = (
			<PriceText price={order.getPrice()} quote={quote} base={base} />
		);
		let amount = isBid
			? order.amountToReceive().getAmount({real: true})
			: order.amountForSale().getAmount({real: true});

		const totalAmt = toFixed(
			utils.format_number_digits(amount) * Number(price.props.price)
		);

		return (
			<>
				{isBid ? (
					<tr
						onClick={this.props.onClick}
						className={
							order.isMine(this.props.currentAccount)
								? 'ask-order-tr my-order'
								: 'ask-order-tr'
						}
					>
						<td
							style={{
								color: '#009D55',
							}}
						>
							<Tooltip
								title={
									`${translator.translate('exchange.price')}: ` +
									order.getPrice()
								}
								placement="top"
							>
								<div className="overflow-hidden" style={{textAlign: 'center'}}>
									{price}
								</div>
							</Tooltip>
						</td>
						<td
							style={{
								textAlign: 'center',
								addingLeft: '10px',
								paddingRight: '10px',
							}}
							className="table-body-class"
						>
							<Tooltip
								title={`${translator.translate('exchange.volume')}: ` + amount}
								placement="left"
							>
								<div className="overflow-hidden">
									{floorFloat(amount, 6).toFixed(6)}
								</div>
							</Tooltip>
						</td>
						<td>
							<Tooltip
								title={
									`${translator.translate('exchange.total')}: ` +
									(amount * Number(price.props.price)).toString()
								}
								placement="right"
							>
								<div className="overflow-hidden">{totalAmt}</div>
							</Tooltip>
						</td>
					</tr>
				) : (
					<tr
						onClick={this.props.onClick}
						className={
							order.isMine(this.props.currentAccount)
								? 'bid-order-tr my-order'
								: 'bid-order-tr'
						}
					>
						<td
							style={{
								color: '#FF2929',
							}}
						>
							<Tooltip
								title={
									`${translator.translate('exchange.price')}: ` +
									order.getPrice()
								}
								placement="top"
							>
								<div className="overflow-hidden" style={{textAlign: 'center'}}>
									{price}
								</div>
							</Tooltip>
						</td>
						<td
							style={{
								textAlign: 'center',
								paddingLeft: '10px',
								paddingRight: '10px',
							}}
							className="table-body-class"
						>
							<Tooltip
								title={`${translator.translate('exchange.volume')}: ` + amount}
								placement="left"
							>
								<div className="overflow-hidden">
									{floorFloat(amount, 6).toFixed(6)}
								</div>
							</Tooltip>
						</td>
						<td>
							<Tooltip
								title={
									`${translator.translate('exchange.total')}: ` +
									(amount * Number(price.props.price)).toString()
								}
								placement="right"
							>
								<div className="overflow-hidden">{totalAmt}</div>
							</Tooltip>
						</td>
					</tr>
				)}
			</>
		);
	}
}

class OrderBook extends React.Component {
	constructor(props) {
		super();
		this.state = {
			flip: props.flipOrderBook,
			showAllBids: true,
			showAllAsks: true,
			rowCount: 100,
			autoScroll: false,
			quoteTotalBids: false,
			quoteTotalAsks: false,
		};
		this.centerText = React.createRef();
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (
			this.props.hideScrollbars &&
			nextState.showAllAsks != this.state.showAllAsks
		) {
			let asksContainer = this.refs.hor_asks;
			if (!nextState.showAllAsks) {
				Ps.destroy(asksContainer);
			} else {
				Ps.initialize(asksContainer);
				this.psUpdate();
			}
			this.refs.askTransition.resetAnimation();
			if (this.refs.hor_asks) this.refs.hor_asks.scrollTop = 0;
		}

		if (
			this.props.hideScrollbars &&
			nextState.showAllBids != this.state.showAllBids
		) {
			let bidsContainer = this.refs.hor_bids;
			if (!nextState.showAllBids) {
				Ps.destroy(bidsContainer);
			} else {
				Ps.initialize(bidsContainer);
				this.psUpdate();
			}
			this.refs.bidTransition.resetAnimation();
			if (this.refs.hor_bids) this.refs.hor_bids.scrollTop = 0;
		}

		return true;
	}

	componentDidUpdate(prevProps) {
		const nextProps = this.props;
		// Change of market or direction
		if (
			nextProps.base.get('id') !== prevProps.base.get('id') ||
			nextProps.quote.get('id') !== prevProps.quote.get('id')
		) {
			if (this.refs.askTransition) {
				this.refs.askTransition.resetAnimation();
				if (this.refs.hor_asks) this.refs.hor_asks.scrollTop = 0;
				if (this.refs.hor_bids) this.refs.hor_bids.scrollTop = 0;
			}

			if (this.refs.bidTransition) {
				this.refs.bidTransition.resetAnimation();
			}

			if (this.refs.vert_bids) this.refs.vert_bids.scrollTop = 0;
		}

		this.scrollToBottom();

		let bidsContainer = this.refs.hor_bids;
		let asksContainer = this.refs.hor_asks;

		if (
			nextProps.hideScrollbars !== this.props.hideScrollbars &&
			nextProps.hideScrollbars
		) {
			Ps.destroy(bidsContainer);
			Ps.destroy(asksContainer);
		}

		if (
			nextProps.hideScrollbars !== this.props.hideScrollbars &&
			!nextProps.hideScrollbars
		) {
			Ps.initialize(bidsContainer);
			Ps.initialize(asksContainer);
			this.refs.askTransition.resetAnimation();
			this.refs.bidTransition.resetAnimation();
			if (asksContainer) asksContainer.scrollTop = 0;
			if (bidsContainer) bidsContainer.scrollTop = 0;
			this.psUpdate();
		}
	}

	componentDidMount() {
		if (!this.props.hideScrollbars) {
			let bidsContainer = this.refs.hor_bids;
			Ps.initialize(bidsContainer);
			let asksContainer = this.refs.hor_asks;
			Ps.initialize(asksContainer);
		}

		this.scrollToBottom();
	}

	scrollToBottom() {
		animateScroll.scrollToBottom({
			containerId: 'top-order-table',
		});
	}

	psUpdate() {
		let bidsContainer = this.refs.hor_bids;
		Ps.update(bidsContainer);
		let asksContainer = this.refs.hor_asks;
		Ps.update(asksContainer);
	}

	/***
	 * Sets status to show full order book by asks or bids
	 * @string: type
	 */
	_onSetShowAll(type) {
		if (type === 'asks') {
			this.setState({
				showAllAsks: !this.state.showAllAsks,
			});

			if (this.state.showAllAsks) {
				this.refs.hor_asks.scrollTop = 0;
			}
		} else {
			this.setState({
				showAllBids: !this.state.showAllBids,
			});

			if (this.state.showAllBids) {
				this.refs.hor_bids.scrollTop = 0;
			}
		}
	}

	toggleAutoScroll = () => {
		this.setState({autoScroll: !this.state.autoScroll});
	};

	toggleTotalAsset(isBid) {
		const quoteTotal = isBid ? 'quoteTotalBids' : 'quoteTotalAsks';
		this.setState({[quoteTotal]: !this.state[quoteTotal]});
	}

	render() {
		let {
			combinedBids,
			combinedAsks,
			highestBid,
			lowestAsk,
			quote,
			base,
			quoteSymbol,
			baseSymbol,
			orderBookReversed,
			flipOrderBook,
			marketStats,
			latest,
		} = this.props;

		// Market stats
		const dayChange = marketStats.get('change');

		let {showAllAsks, showAllBids, rowCount, displaySpreadAsPercentage} =
			this.state;

		const noOrders = !lowestAsk.sell_price && !highestBid.sell_price;
		const hasAskAndBids = !!(lowestAsk.sell_price && highestBid.sell_price);
		const spread =
			hasAskAndBids &&
			(displaySpreadAsPercentage ? (
				`${(100 * (lowestAsk._real_price / highestBid._real_price - 1)).toFixed(
					2
				)}%`
			) : (
				<PriceText
					price={lowestAsk._real_price - highestBid._real_price}
					base={base}
					quote={quote}
				/>
			));
		let bidRows = null,
			askRows = null;

		combinedAsks.sort((a, b) => {
			return b.getPrice() - a.getPrice();
		});

		if (base && quote) {
			bidRows = combinedBids.map((order, index) => {
				return (
					<OrderBookRow
						index={index}
						key={order.getPrice() + (order.isCall() ? '_call' : '')}
						order={order}
						onClick={this.props.onClick.bind(this, order)}
						base={base}
						quote={quote}
						position={!flipOrderBook ? 'left' : 'right'}
						currentAccount={this.props.currentAccount}
						quoteTotal={this.state.quoteTotalBids}
					/>
				);
			});

			askRows = combinedAsks.map((order, index) => {
				return (
					<OrderBookRow
						index={index}
						key={order.getPrice() + (order.isCall() ? '_call' : '')}
						order={order}
						onClick={this.props.onClick.bind(this, order)}
						base={base}
						quote={quote}
						type={order.type}
						position={!flipOrderBook ? 'right' : 'left'}
						currentAccount={this.props.currentAccount}
						quoteTotal={this.state.quoteTotalAsks}
					/>
				);
			});
		}

		if (!showAllBids) {
			bidRows.splice(rowCount, bidRows.length);
		}

		if (!showAllAsks) {
			askRows.splice(rowCount, askRows.length);
		}

		let tableHeader = (
			<thead>
				<tr key="top-header" className="top-header">
					<th
						style={{
							textAlign: 'left',
						}}
					>
						<span className="header-sub-title header-font-size">
							{translator.translate('exchange.price').toUpperCase()}
						</span>
					</th>
					<th
						style={{
							textAlign: 'center',
						}}
					>
						<span className="header-sub-title header-font-size">
							{translator.translate('exchange.amount').toUpperCase()}
						</span>
					</th>
					<th
						style={{
							textAlign: 'right',
						}}
					>
						<span className="header-sub-title header-font-size">
							{translator.translate('exchange.total').toUpperCase()}
						</span>
					</th>
				</tr>
			</thead>
		);

		let wrapperClass = this.props.wrapperClass;
		let innerClass = this.props.innerClass;

		return (
			<div className="order-book-panel">
				<SectionHeader title={translator.translate('exchange.order_book')} />
				<div
					ref="order_book"
					style={{
						display: 'flex',
						flexDirection: 'column',
					}}
					className={cnames(wrapperClass)}
				>
					<div
						css={(theme) => ({
							overflow: 'hidden',
							color: '#FF2929',
							height: '245px',
						})}
					>
						<div style={{height: '100%'}}>
							<table className="table order-table table-hover fixed-table text-right">
								{tableHeader}
							</table>
							<div
								id="top-order-table"
								className="grid-block"
								ref="hor_asks"
								style={{
									lineHeight: '20px',
									height: 'calc(100% - 35px)',
								}}
							>
								<table
									className="table order-table no-stripes table-hover fixed-table text-right no-overflow"
									style={{height: 'fit-content'}}
								>
									<TransitionWrapper
										ref="askTransition"
										className="orderbook clickable"
										component="tbody"
										transitionName="newrow"
										id="top-order-rows"
									>
										{/* {askRows.reverse()} */}
										{askRows}
									</TransitionWrapper>
								</table>
							</div>
						</div>
					</div>
					<div className="orderbook-divider">
						<span
							style={{
								color: dayChange > 0 ? 'rgb(0, 157, 85)' : 'rgb(255, 41, 41)',
								fontSize: '20px',
							}}
						>
							{Number(latest).toFixed(6)}
						</span>
						<span style={{marginLeft: '5px', fontSize: '12px'}}>
							= {Number(latest).toFixed(6)} {base.get('symbol')}
						</span>
					</div>
					<div
						css={(theme) => ({
							color: '#70a800',
							height: '210px',
							overflow: 'hidden',
						})}
					>
						<div style={{height: '100%'}}>
							<div
								className="grid-block"
								ref="hor_bids"
								id="bottom-order-table"
								style={{
									lineHeight: '20px',
									height: '100%',
								}}
							>
								<table
									style={{height: 'fit-content'}}
									className="table order-table no-stripes table-hover fixed-table text-right no-overflow"
								>
									<TransitionWrapper
										ref="bidTransition"
										className="orderbook clickable"
										component="tbody"
										transitionName="newrow"
									>
										{bidRows}
									</TransitionWrapper>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

OrderBook.defaultProps = {
	bids: [],
	asks: [],
	orders: {},
};

OrderBook.propTypes = {
	bids: PropTypes.array.isRequired,
	asks: PropTypes.array.isRequired,
	orders: PropTypes.object.isRequired,
};

export {OrderBook};
