import cnames from "classnames";
import translator from "counterpart";
import {StickyTable} from "react-sticky-table";
import React from "react";
import Translate from "react-translate-component";
import PropTypes from "prop-types";
import Ps from "perfect-scrollbar";
import utils from "common/utils";
import PriceText from "../Utility/PriceText";
import TransitionWrapper from "../Utility/TransitionWrapper";
import AssetName from "../Utility/AssetName";
import Icon from "../Icon/Icon";
import {Select, Icon as AntIcon, Tooltip} from "bitshares-ui-style-guide";

/**
 * @array: orderRows
 * @bool: noOrders
 * @bool: isBid
 */
class OrderRows extends React.Component {
    static propTypes = {
        orderRows: PropTypes.array.isRequired,
        noOrders: PropTypes.bool.isRequired,
        isBid: PropTypes.bool.isRequired
    };

    render() {
        let {orderRows, noOrders, isBid, id} = this.props;
        return (
            <TransitionWrapper
                id={id}
                ref={isBid ? "bidTransition" : "askTransaction"}
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

class OrderBookRowVertical extends React.Component {
    shouldComponentUpdate(np) {
        if (np.order.market_base !== this.props.order.market_base) return false;
        return (
            np.order.ne(this.props.order) ||
            np.index !== this.props.index ||
            np.currentAccount !== this.props.currentAccount ||
            np.isPanelActive !== this.props.isPanelActive ||
            np.horizontal !== this.props.horizontal
        );
    }

    render() {
        let {order, quote, base, final} = this.props;
        const isBid = order.isBid();
        const isCall = order.isCall();
        let integerClass = isCall
            ? "orderHistoryCall"
            : isBid
                ? "orderHistoryBid"
                : "orderHistoryAsk";

        let price = (
            <PriceText price={order.getPrice()} quote={quote} base={base} />
        );
        return (
            <div
                onClick={this.props.onClick}
                className={cnames(
                    "sticky-table-row order-row",
                    {"final-row": final},
                    {"my-order": order.isMine(this.props.currentAccount)}
                )}
            >
                <div className="cell left">
                    {utils.format_number(
                        order[
                            isBid ? "amountForSale" : "amountToReceive"
                        ]().getAmount({real: true}),
                        base.get("precision")
                    )}
                </div>
                <div className="cell">
                    {utils.format_number(
                        order[
                            isBid ? "amountToReceive" : "amountForSale"
                        ]().getAmount({real: true}),
                        quote.get("precision")
                    )}
                </div>
                <div className={`cell ${integerClass} right`}>{price}</div>
            </div>
        );
    }
}

const elemHeight = elem => (elem ? elem.getBoundingClientRect().height : 0);

class OrderBookRowHorizontal extends React.Component {
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
        let {order, quote, base, position, quoteTotal} = this.props;
        const isBid = order.isBid();
        const isCall = order.isCall();

        let integerClass = isCall
            ? "orderHistoryCall"
            : isBid
                ? "orderHistoryBid"
                : "orderHistoryAsk";

        let price = (
            <PriceText price={order.getPrice()} quote={quote} base={base} />
        );
        let amount = isBid
            ? utils.format_number(
                  order.amountToReceive().getAmount({real: true}),
                  quote.get("precision")
              )
            : utils.format_number(
                  order.amountForSale().getAmount({real: true}),
                  quote.get("precision")
              );
        let value = isBid
            ? utils.format_number(
                  order.amountForSale().getAmount({real: true}),
                  base.get("precision")
              )
            : utils.format_number(
                  order.amountToReceive().getAmount({real: true}),
                  base.get("precision")
              );
        const totalValueBids = quoteTotal
            ? order.totalToReceive()
            : order.totalForSale();
        const totalValueAsks = quoteTotal
            ? order.totalForSale()
            : order.totalToReceive();
        const totalAsset = quoteTotal ? quote : base;
        const total = isBid
            ? utils.format_number(
                  totalValueBids.getAmount({real: true}),
                  totalAsset.get("precision")
              )
            : utils.format_number(
                  totalValueAsks.getAmount({real: true}),
                  totalAsset.get("precision")
              );

        return (
            <tr
                onClick={this.props.onClick}
                className={
                    order.isMine(this.props.currentAccount) ? "my-order" : ""
                }
            >
                <td style={{width: "33.5%"}} className={integerClass}>
                    {price}
                </td>
                <td> {amount}</td>
                <td className="column-hide-xs">{total}</td>
            </tr>
        );
    }
}

class GroupedOrderBookRowVertical extends React.Component {
    shouldComponentUpdate(np) {
        if (np.order.market_base !== this.props.order.market_base) return false;
        return (
            np.order.ne(this.props.order) ||
            np.index !== this.props.index ||
            np.currentAccount !== this.props.currentAccount
        );
    }

    render() {
        let {order, quote, base, final} = this.props;
        const isBid = order.isBid();
        let integerClass = isBid ? "orderHistoryBid" : "orderHistoryAsk";

        let price = (
            <PriceText price={order.getPrice()} quote={quote} base={base} />
        );
        return (
            <div
                onClick={this.props.onClick}
                className={cnames("sticky-table-row order-row", {
                    "final-row": final
                })}
            >
                <div className="cell left">
                    {utils.format_number(
                        order[
                            isBid ? "amountForSale" : "amountToReceive"
                        ]().getAmount({real: true}),
                        base.get("precision")
                    )}
                </div>
                <div className="cell">
                    {utils.format_number(
                        order[
                            isBid ? "amountToReceive" : "amountForSale"
                        ]().getAmount({real: true}),
                        quote.get("precision")
                    )}
                </div>
                <div className={`cell ${integerClass} right`}>{price}</div>
            </div>
        );
    }
}

class GroupedOrderBookRowHorizontal extends React.Component {
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
        let {order, quote, base, position, quoteTotal} = this.props;
        const isBid = order.isBid();

        let integerClass = isBid ? "orderHistoryBid" : "orderHistoryAsk";

        let price = (
            <PriceText price={order.getPrice()} quote={quote} base={base} />
        );
        let amount = isBid
            ? utils.format_number(
                  order.amountToReceive().getAmount({real: true}),
                  quote.get("precision")
              )
            : utils.format_number(
                  order.amountForSale().getAmount({real: true}),
                  quote.get("precision")
              );
        let value = isBid
            ? utils.format_number(
                  order.amountForSale().getAmount({real: true}),
                  base.get("precision")
              )
            : utils.format_number(
                  order.amountToReceive().getAmount({real: true}),
                  base.get("precision")
              );
        const totalValueBids = quoteTotal
            ? order.totalToReceive()
            : order.totalForSale();
        const totalValueAsks = quoteTotal
            ? order.totalForSale()
            : order.totalToReceive();
        const totalAsset = quoteTotal ? quote : base;
        const total = isBid
            ? utils.format_number(
                  totalValueBids.getAmount({real: true}),
                  totalAsset.get("precision")
              )
            : utils.format_number(
                  totalValueAsks.getAmount({real: true}),
                  totalAsset.get("precision")
              );

        return (
            <tr onClick={this.props.onClick}>
                {position === "left" ? (
                    <td className="column-hide-xs">{total}</td>
                ) : (
                    <td style={{width: "25%"}} className={integerClass}>
                        {price}
                    </td>
                )}
                <td>{position === "left" ? value : amount}</td>
                <td>{position === "left" ? amount : value}</td>
                {position === "right" ? (
                    <td className="column-hide-xs">{total}</td>
                ) : (
                    <td style={{width: "25%"}} className={integerClass}>
                        {price}
                    </td>
                )}
            </tr>
        );
    }
}

class GroupOrderLimitSelector extends React.Component {
    constructor() {
        super();
        this.state = {
            groupLimit: ""
        };
    }

    static getDerivedStateFromProps(props) {
        return {groupLimit: props.currentGroupOrderLimit};
    }

    render() {
        const noGroupsAvailable = this.props.trackedGroupsConfig.length === 0;
        const trackedGroupsOptionsList = this.props.trackedGroupsConfig.map(
            key =>
                this.props.globalSettingsSelector ? (
                    <Select.Option value={key} key={key}>
                        {`${key / 100}%`}
                    </Select.Option>
                ) : (
                    <option value={key} key={key}>
                        {`${key / 100}%`}
                    </option>
                )
        );

        if (this.props.globalSettingsSelector) {
            return (
                <Select
                    placeholder="Select option"
                    style={{width: "100%"}}
                    value={this.props.currentGroupOrderLimit}
                    disabled={noGroupsAvailable}
                    onChange={this.props.handleGroupOrderLimitChange.bind(this)}
                >
                    {noGroupsAvailable ? (
                        <Select.Option value={0}>
                            <Translate content="tooltip.no_groups_available" />
                        </Select.Option>
                    ) : (
                        <Select.Option value={0}>
                            <Translate content="settings.disabled" />
                        </Select.Option>
                    )}
                    {trackedGroupsOptionsList}
                </Select>
            );
        } else {
            return (
                <Tooltip
                    placement="bottom"
                    title={
                        noGroupsAvailable
                            ? translator.translate(
                                  "tooltip.no_groups_available"
                              )
                            : null
                    }
                >
                    <select
                        value={this.state.groupLimit}
                        onChange={this.props.handleGroupOrderLimitChange}
                        className="settings-select"
                        style={
                            noGroupsAvailable ? {cursor: "not-allowed"} : null
                        }
                    >
                        <Translate
                            content="exchange.group_order_limit"
                            component="option"
                            value="0"
                        />
                        {trackedGroupsOptionsList}
                    </select>
                </Tooltip>
            );
        }
    }
}

class OrderBook extends React.Component {
    constructor(props) {
        super();
        this.state = {
            flip: props.flipOrderBook,
            showAllBids: false,
            showAllAsks: false,
            rowCount: 35,
            autoScroll: props.autoScroll,
            quoteTotalBids: false,
            quoteTotalAsks: false
        };
        this.verticalStickyTable = React.createRef();
        this.centerText = React.createRef();
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (
            this.props.horizontal &&
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
            this.props.horizontal &&
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

        // if (!nextProps.marketReady) return false;
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const nextProps = this.props;
        // Change of market or direction
        if (
            nextProps.base.get("id") !== prevProps.base.get("id") ||
            nextProps.quote.get("id") !== prevProps.quote.get("id")
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

            if (!this.props.horizontal) {
                this.setState({autoScroll: this.state.autoScroll});
            }
        }

        let bidsContainer = this.refs.hor_bids;
        let asksContainer = this.refs.hor_asks;

        if (
            this.props.horizontal &&
            nextProps.hideScrollbars !== this.props.hideScrollbars &&
            nextProps.hideScrollbars
        ) {
            Ps.destroy(bidsContainer);
            Ps.destroy(asksContainer);
        }

        if (
            this.props.horizontal &&
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

        this.centerVerticalScrollBar();
    }

    queryStickyTable = query => {
        return this.verticalStickyTable.current.table.querySelector(query);
    };

    verticalScrollBar = () => this.queryStickyTable("#y-scrollbar");

    componentDidMount() {
        if (!this.props.horizontal) {
            Ps.initialize(this.verticalScrollBar());
        } else {
            if (!this.props.hideScrollbars) {
                let bidsContainer = this.refs.hor_bids;
                Ps.initialize(bidsContainer);
                let asksContainer = this.refs.hor_asks;
                Ps.initialize(asksContainer);
            }
        }
    }

    centerVerticalScrollBar() {
        if (!this.props.horizontal && this.state.autoScroll) {
            // Center vertical scroll bar
            const scrollableContainer = this.queryStickyTable(
                "#sticky-table-y-wrapper"
            );
            const header = this.queryStickyTable("#sticky-table-header");
            const centerTextContainer = this.centerText.current;
            const singleRowHeight = elemHeight(
                this.queryStickyTable(".order-row")
            );

            let rows =
                this.props.currentGroupOrderLimit !== 0
                    ? !this.props.orderBookReversed
                        ? this.props.groupedAsks
                        : this.props.groupedBids
                    : !this.props.orderBookReversed
                        ? this.props.combinedAsks
                        : this.props.combinedBids;

            const rowsHeight = rows.length * singleRowHeight;

            const scrollableContainerHeight =
                elemHeight(scrollableContainer) - elemHeight(header);

            const scrollTo =
                rowsHeight +
                elemHeight(centerTextContainer) / 2 -
                scrollableContainerHeight / 2;

            scrollableContainer.scrollTop = scrollTo;
        }
    }

    psUpdate() {
        if (!this.props.horizontal) {
            Ps.update(this.verticalScrollBar());
        } else {
            let bidsContainer = this.refs.hor_bids;
            Ps.update(bidsContainer);
            let asksContainer = this.refs.hor_asks;
            Ps.update(asksContainer);
        }
    }

    /***
     * Sets status to show full order book by asks or bids
     * @string: type
     */
    _onSetShowAll(type) {
        if (type === "asks") {
            this.setState({
                showAllAsks: !this.state.showAllAsks
            });

            if (this.state.showAllAsks) {
                this.refs.hor_asks.scrollTop = 0;
            }
        } else {
            this.setState({
                showAllBids: !this.state.showAllBids
            });

            if (this.state.showAllBids) {
                this.refs.hor_bids.scrollTop = 0;
            }
        }
    }

    /***
     * Toggle spread value to view real value or percentage in spread
     * Vertical order book only
     */
    toggleSpreadValue = () => {
        this.setState({
            displaySpreadAsPercentage: !this.state.displaySpreadAsPercentage
        });
    };

    /***
     * Toggle auto scroll to lock/unlock auto centering
     * Vertical order book only
     */

    toggleAutoScroll = () => {
        this.setState({autoScroll: !this.state.autoScroll});
    };

    toggleTotalAsset(isBid) {
        const quoteTotal = isBid ? "quoteTotalBids" : "quoteTotalAsks";
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
            totalAsks,
            totalBids,
            quoteSymbol,
            baseSymbol,
            horizontal,
            trackedGroupsConfig,
            currentGroupOrderLimit,
            handleGroupOrderLimitChange,
            orderBookReversed,
            groupedBids,
            groupedAsks,
            flipOrderBook
        } = this.props;
        let {
            showAllAsks,
            showAllBids,
            rowCount,
            displaySpreadAsPercentage
        } = this.state;

        const noOrders = !lowestAsk.sell_price && !highestBid.sell_price;
        const hasAskAndBids = !!(lowestAsk.sell_price && highestBid.sell_price);
        const spread =
            hasAskAndBids &&
            (displaySpreadAsPercentage ? (
                `${(
                    100 *
                    (lowestAsk._real_price / highestBid._real_price - 1)
                ).toFixed(2)}%`
            ) : (
                <PriceText
                    price={lowestAsk._real_price - highestBid._real_price}
                    base={base}
                    quote={quote}
                />
            ));
        let bidRows = null,
            askRows = null;

        /* Sort */
        let tempAsks =
            this.props.currentGroupOrderLimit !== 0
                ? groupedAsks
                : combinedAsks; // RED
        let tempBids =
            this.props.currentGroupOrderLimit !== 0
                ? groupedBids
                : combinedBids; // GREEN

        if (!horizontal && !orderBookReversed) {
            tempBids.sort((a, b) => {
                return b.getPrice() - a.getPrice();
            });
            tempAsks.sort((a, b) => {
                return b.getPrice() - a.getPrice();
            });
        } else if (!horizontal && orderBookReversed) {
            tempBids.sort((a, b) => {
                return a.getPrice() - b.getPrice();
            });
            tempAsks.sort((a, b) => {
                return a.getPrice() - b.getPrice();
            });
        }

        if (base && quote) {
            // limit orders or grouped orders
            if (this.props.currentGroupOrderLimit !== 0) {
                bidRows = tempBids.map((order, index) => {
                    return horizontal ? (
                        <GroupedOrderBookRowHorizontal
                            index={index}
                            key={
                                order.getPrice() + (order.isBid() ? "_bid" : "")
                            }
                            order={order}
                            onClick={this.props.onClick.bind(this, order)}
                            base={base}
                            quote={quote}
                            position={!flipOrderBook ? "left" : "right"}
                            currentAccount={this.props.currentAccount}
                            quoteTotal={this.state.quoteTotalBids}
                        />
                    ) : (
                        <GroupedOrderBookRowVertical
                            index={index}
                            key={
                                order.getPrice() + (order.isBid() ? "_bid" : "")
                            }
                            order={order}
                            onClick={this.props.onClick.bind(this, order)}
                            base={base}
                            quote={quote}
                            final={index === 0}
                            currentAccount={this.props.currentAccount}
                        />
                    );
                });

                askRows = tempAsks.map((order, index) => {
                    return horizontal ? (
                        <GroupedOrderBookRowHorizontal
                            index={index}
                            key={
                                order.getPrice() + (order.isBid() ? "_bid" : "")
                            }
                            order={order}
                            onClick={this.props.onClick.bind(this, order)}
                            base={base}
                            quote={quote}
                            type={order.type}
                            position={!flipOrderBook ? "right" : "left"}
                            currentAccount={this.props.currentAccount}
                            quoteTotal={this.state.quoteTotalAsks}
                        />
                    ) : (
                        <GroupedOrderBookRowVertical
                            index={index}
                            key={
                                order.getPrice() + (order.isBid() ? "_bid" : "")
                            }
                            order={order}
                            onClick={this.props.onClick.bind(this, order)}
                            base={base}
                            quote={quote}
                            type={order.type}
                            final={0 === index}
                            currentAccount={this.props.currentAccount}
                        />
                    );
                });
            } else {
                bidRows = tempBids.map((order, index) => {
                    return horizontal ? (
                        <OrderBookRowHorizontal
                            index={index}
                            key={
                                order.getPrice() +
                                (order.isCall() ? "_call" : "")
                            }
                            order={order}
                            onClick={this.props.onClick.bind(this, order)}
                            base={base}
                            quote={quote}
                            position={!flipOrderBook ? "left" : "right"}
                            currentAccount={this.props.currentAccount}
                            quoteTotal={this.state.quoteTotalBids}
                        />
                    ) : (
                        <OrderBookRowVertical
                            index={index}
                            key={
                                order.getPrice() +
                                (order.isCall() ? "_call" : "")
                            }
                            order={order}
                            onClick={this.props.onClick.bind(this, order)}
                            base={base}
                            quote={quote}
                            final={index === 0}
                            currentAccount={this.props.currentAccount}
                        />
                    );
                });

                askRows = tempAsks.map((order, index) => {
                    return horizontal ? (
                        <OrderBookRowHorizontal
                            index={index}
                            key={
                                order.getPrice() +
                                (order.isCall() ? "_call" : "")
                            }
                            order={order}
                            onClick={this.props.onClick.bind(this, order)}
                            base={base}
                            quote={quote}
                            type={order.type}
                            position={!flipOrderBook ? "right" : "left"}
                            currentAccount={this.props.currentAccount}
                            quoteTotal={this.state.quoteTotalAsks}
                        />
                    ) : (
                        <OrderBookRowVertical
                            index={index}
                            key={
                                order.getPrice() +
                                (order.isCall() ? "_call" : "")
                            }
                            order={order}
                            onClick={this.props.onClick.bind(this, order)}
                            base={base}
                            quote={quote}
                            type={order.type}
                            final={0 === index}
                            currentAccount={this.props.currentAccount}
                        />
                    );
                });
                if (askRows.length < 24) {
                    for (var i = 0; i < 24 - askRows.length; i++) {
                        askRows.push(
                            <tr>
                                <td className="orderHistoryAsk">-</td>
                                <td>-</td>
                                <td className="column-hide-xs">-</td>
                            </tr>
                        );
                    }
                }
                if (bidRows.length < 24) {
                    for (var i = 0; i < 24 - bidRows.length; i++) {
                        bidRows.push(
                            <tr>
                                <td className="orderHistoryBid">-</td>
                                <td>-</td>
                                <td className="column-hide-xs">-</td>
                            </tr>
                        );
                    }
                }
            }
        }
        if (this.props.horizontal) {
            let totalBidsLength = bidRows.length;
            let totalAsksLength = askRows.length;

            if (!showAllBids) {
                bidRows.splice(rowCount, bidRows.length);
            }

            if (!showAllAsks) {
                askRows.splice(rowCount, askRows.length);
            }

            let leftHeader = (
                <thead>
                    <tr key="top-header" className="top-header">
                        <th>
                            <Translate
                                className={
                                    (flipOrderBook
                                        ? "ask-total"
                                        : "bid-total") + " header-sub-title"
                                }
                                content="exchange.price"
                            />
                        </th>

                        <th>
                            <span className="header-sub-title">
                                <AssetName dataPlace="top" name={quoteSymbol} />
                            </span>
                        </th>
                        <th className="column-hide-xs">
                            <Translate
                                className="header-sub-title"
                                content="exchange.total"
                            />
                            <span className="header-sub-title">
                                {" "}
                                (<AssetName dataPlace="top" name={baseSymbol} />
                                )
                            </span>
                        </th>
                    </tr>
                </thead>
            );

            let rightHeader = (
                <thead>
                    <tr key="top-header" className="top-header">
                        <th>
                            <Translate
                                className={
                                    (!flipOrderBook
                                        ? "ask-total"
                                        : "bid-total") + " header-sub-title"
                                }
                                content="exchange.price"
                            />
                        </th>
                        <th>
                            <span className="header-sub-title">
                                <AssetName dataPlace="top" name={quoteSymbol} />
                            </span>
                        </th>
                        <th className="column-hide-xs">
                            <Translate
                                className="header-sub-title"
                                content="exchange.total"
                            />
                            <a
                                onClick={() => this.toggleTotalAsset()}
                                className="header-sub-title underline-title"
                            >
                                {" "}
                                <AssetName
                                    dataPlace="top"
                                    name={
                                        !this.state.quoteTotalAsks
                                            ? baseSymbol
                                            : quoteSymbol
                                    }
                                    noTip
                                />
                            </a>
                        </th>
                    </tr>
                </thead>
            );

            let wrapperClass = this.props.wrapperClass;
            let innerClass = this.props.innerClass;

            return (
                <div
                    ref="order_book"
                    style={{
                        marginRight: this.props.smallScreen ? 0 : 0,
                        height: "100%"
                    }} //this.props.smallScreen ? 10 : 0
                    className={cnames(wrapperClass)}
                >
                    <div
                        style={{height: "51%", paddingBottom: "4px"}}
                        className={cnames(
                            innerClass,
                            flipOrderBook ? "order-1" : "order-2"
                        )}
                    >
                        {/*ask div */}
                        <div style={{height: "100%"}}>
                            <div className="market-right-padding-only">
                                <table className="table order-table table-hover fixed-table text-right">
                                    {!flipOrderBook ? rightHeader : leftHeader}
                                </table>
                            </div>
                            <div
                                id="top-order-table"
                                className="grid-block"
                                ref="hor_asks"
                                style={{
                                    paddingRight: "0.6rem",
                                    overflow: "hidden",
                                    //maxHeight: this.props.chartHeight / 2 - 2,

                                    lineHeight: "15px",
                                    height: "97%"
                                }}
                            >
                                <table
                                    className="table order-table no-stripes table-hover fixed-table text-right no-overflow"
                                    style={{height: "100%"}}
                                >
                                    <TransitionWrapper
                                        ref="askTransition"
                                        className="orderbook clickable"
                                        component="tbody"
                                        transitionName="newrow"
                                        id="top-order-rows"
                                    >
                                        {askRows.reverse()}
                                    </TransitionWrapper>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{
                            borderTop: "2px solid black",
                            height: "49%",
                            paddingTop: "4px"
                        }}
                        className={cnames(
                            innerClass,
                            flipOrderBook ? "order-2" : "order-1"
                        )}
                    >
                        <div style={{height: "100%"}}>
                            <div
                                className="grid-block"
                                ref="hor_bids"
                                id="bottom-order-table"
                                style={{
                                    paddingRight: "0.6rem",
                                    overflow: "hidden",
                                    //maxHeight: this.props.chartHeight / 2 - 2,
                                    lineHeight: "13px",
                                    height: "100%"
                                }}
                            >
                                <table
                                    style={{paddingBottom: 5, height: "100%"}}
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
            );
        } else {
            // Vertical orderbook
            return (
                <div className="order-table-container">
                    <StickyTable
                        stickyColumnCount={0}
                        className="order-table table"
                        ref={this.verticalStickyTable}
                    >
                        <div className="sticky-table-row top-header">
                            <div className="cell header-cell left">
                                <span className="header-sub-title">
                                    <AssetName name={baseSymbol} />
                                </span>
                            </div>
                            <div className="cell header-cell">
                                <span className="header-sub-title">
                                    <AssetName name={quoteSymbol} />
                                </span>
                            </div>
                            <div className="cell header-cell right">
                                <Translate
                                    className="header-sub-title"
                                    content="exchange.price"
                                />
                            </div>
                        </div>
                        {orderBookReversed ? (
                            <OrderRows
                                id="top-order-rows"
                                noOrders={noOrders}
                                orderRows={bidRows}
                                isBid={true}
                            />
                        ) : (
                            <OrderRows
                                id="top-order-rows"
                                noOrders={noOrders}
                                orderRows={askRows}
                                isBid={false}
                            />
                        )}

                        {noOrders ? (
                            <div
                                className="sticky-table-row"
                                ref={this.centerText}
                            >
                                <div className="cell" />
                                <div className="cell no-orders padtop">
                                    <Translate content="exchange.no_orders" />
                                </div>
                            </div>
                        ) : (
                            <div
                                className="sticky-table-row orderbook-latest-price"
                                ref={this.centerText}
                                style={{padding: 0}}
                                //data-intro={translator.translate(
                                //    "walkthrough.vertical_order"
                                //)}
                            >
                                <div className="cell right">
                                    <span
                                        className="clickable left"
                                        onClick={this.toggleSpreadValue}
                                    >
                                        <Translate
                                            className="orderbook-center-title"
                                            content="exchange.spread"
                                        />{" "}
                                        <span className="spread-value">
                                            {!!spread ? spread : "0"}
                                        </span>
                                    </span>
                                </div>
                                <div className="cell cell-center">
                                    <span style={{width: 75}}>
                                        {!this.props.hideFunctionButtons ? (
                                            <Icon
                                                //data-intro={translator.translate(
                                                //    "walkthrough.vertical_lock"
                                                //)}
                                                className="lock-unlock clickable icon-fill"
                                                onClick={this.toggleAutoScroll}
                                                name={
                                                    this.state.autoScroll
                                                        ? "locked"
                                                        : "unlocked"
                                                }
                                                title={
                                                    this.state.autoScroll
                                                        ? "icons.unlocked.disable_auto_scroll"
                                                        : "icons.locked.enable_auto_scroll"
                                                }
                                            />
                                        ) : null}
                                        &nbsp;
                                        {!this.props.hideFunctionButtons ? (
                                            <Icon
                                                onClick={
                                                    this.props.moveOrderBook
                                                }
                                                name="thumb-tack"
                                                className="icon-14px icon-fill order-book-button-v clickable"
                                                title={
                                                    this.props.horizontal
                                                        ? "icons.thumb_tack"
                                                        : "icons.thumb_untack"
                                                }
                                                style={{
                                                    marginLeft: 0
                                                }}
                                            />
                                        ) : null}
                                        &nbsp;
                                        {currentGroupOrderLimit == 0 ? null : (
                                            <Icon
                                                name="grouping"
                                                className="icon-14px"
                                                title={translator.translate(
                                                    "icons.order_grouping"
                                                )}
                                                style={{
                                                    marginLeft: 0
                                                }}
                                            />
                                        )}
                                    </span>
                                </div>
                                <div className="cell">
                                    {!!this.props.latest && (
                                        <span className="right">
                                            <span
                                                className={
                                                    !this.props.changeClass
                                                        ? "spread-value"
                                                        : this.props.changeClass
                                                }
                                            >
                                                <PriceText
                                                    price={this.props.latest}
                                                    base={this.props.base}
                                                    quote={this.props.quote}
                                                />
                                            </span>
                                        </span>
                                    )}
                                </div>
                            </div>
                        )}

                        {orderBookReversed ? (
                            <OrderRows
                                noOrders={noOrders}
                                orderRows={askRows}
                                isBid={false}
                            />
                        ) : (
                            <OrderRows
                                noOrders={noOrders}
                                orderRows={bidRows}
                                isBid={true}
                            />
                        )}
                    </StickyTable>
                </div>
            );
        }
    }
}

OrderBook.defaultProps = {
    bids: [],
    asks: [],
    orders: {}
};

OrderBook.propTypes = {
    bids: PropTypes.array.isRequired,
    asks: PropTypes.array.isRequired,
    orders: PropTypes.object.isRequired
};

export {OrderBook, GroupOrderLimitSelector};
