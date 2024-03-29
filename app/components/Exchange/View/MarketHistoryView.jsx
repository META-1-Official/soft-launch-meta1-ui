import React from "react";
import Translate from "react-translate-component";
import cnames from "classnames";
import TransitionWrapper from "../../Utility/TransitionWrapper";
import AssetName from "../../Utility/AssetName";

class MarketHistoryView extends React.Component {
    render() {
        let {
            className,
            innerClass,
            innerStyle,
            noHeader,
            headerStyle,
            activeTab,
            quoteSymbol,
            baseSymbol,
            tinyScreen,
            totalRows,
            historyRows,
            showAll
        } = this.props;

        const emptyRow = (
            <tr>
                <td
                    className="centric-items"
                    style={{
                        lineHeight: 4,
                        fontStyle: "italic"
                    }}
                    colSpan="5"
                >
                    <Translate content="account.no_orders" />
                </td>
            </tr>
        );

        return (
            <div className={cnames(className)} style={{height: "100%"}}>
                <div className={innerClass} style={innerStyle}>
                    {noHeader ? null : (
                        <div
                            style={headerStyle}
                            className="exchange-content-header"
                        >
                            {activeTab === "history" ? (
                                <Translate content="exchange.history" />
                            ) : null}
                        </div>
                    )}
                    <div className="grid-block shrink left-orderbook-header market-right-padding-only">
                        <table className="table table-no-padding order-table text-left fixed-table market-right-padding">
                            <thead>
                                <tr>
                                    <th style={{textAlign: "right"}}>
                                        <Translate
                                            className="header-sub-title"
                                            content="exchange.price"
                                        />
                                    </th>
                                    <th style={{textAlign: "right"}}>
                                        <span className="header-sub-title">
                                            <AssetName
                                                dataPlace="top"
                                                name={quoteSymbol}
                                            />
                                        </span>
                                    </th>
                                    <th style={{textAlign: "right"}}>
                                        <Translate
                                            className="header-sub-title"
                                            content="explorer.block.date"
                                        />
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div
                        className="table-container grid-block market-right-padding-only no-overflow market-history-rows"
                        ref="history"
                        id="market-orders-view-container"
                        style={{
                            minHeight: "100%",
                            overflow: "hidden",
                            lineHeight: "18px"
                        }}
                    >
                        <table className="table order-table no-stripes table-hover fixed-table text-right no-overflow">
                            <TransitionWrapper
                                ref="historyTransition"
                                component="tbody"
                                transitionName="newrow"
                                className="orderbook"
                            >
                                {!!historyRows && historyRows.length > 0
                                    ? historyRows
                                    : emptyRow}
                            </TransitionWrapper>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export {MarketHistoryView};
