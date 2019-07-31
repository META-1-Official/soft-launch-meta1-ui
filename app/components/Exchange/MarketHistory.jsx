import React from "react";
import PropTypes from "prop-types";
import Immutable from "immutable";
import Ps from "perfect-scrollbar";
import Translate from "react-translate-component";
import PriceText from "../Utility/PriceText";
import cnames from "classnames";
import SettingsActions from "actions/SettingsActions";
import SettingsStore from "stores/SettingsStore";
import {connect} from "alt-react";
import TransitionWrapper from "../Utility/TransitionWrapper";
import AssetName from "../Utility/AssetName";
import {ChainTypes as grapheneChainTypes} from "meta1js";
const {operations} = grapheneChainTypes;
import BlockDate from "../Utility/BlockDate";
import counterpart from "counterpart";
import ReactTooltip from "react-tooltip";
import {FillOrder} from "common/MarketClasses";
import {Tooltip} from "bitshares-ui-style-guide";

class MarketHistory extends React.Component {
    constructor(props) {
        super();
        this.state = {
            activeTab: "history",
            rowCount: 60,
            showAll: false
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.activeTab !== this.props.activeTab) {
            this._changeTab(nextProps.activeTab);
        }

        if (
            this.props.hideScrollbars &&
            nextState.showAll != this.state.showAll
        ) {
            let historyContainer = this.refs.history;
            if (!nextState.showAll) {
                Ps.destroy(historyContainer);
            } else {
                Ps.initialize(historyContainer);
                Ps.update(historyContainer);
            }
            this.refs.historyTransition.resetAnimation();
            if (historyContainer) historyContainer.scrollTop = 0;
        }

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
            let historyContainer = this.refs.history;
            if (historyContainer) Ps.initialize(historyContainer);
        }
    }

    componentDidUpdate() {
        if (
            !this.props.hideScrollbars ||
            (this.props.hideScrollbars && this.state.showAll)
        ) {
            let historyContainer = this.refs.history;
            if (historyContainer) Ps.update(historyContainer);
        }
    }

    componentWillReceiveProps(nextProps) {
        let historyContainer = this.refs.history;

        if (
            nextProps.hideScrollbars !== this.props.hideScrollbars &&
            nextProps.hideScrollbars
        ) {
            Ps.destroy(historyContainer);
        }

        if (
            nextProps.hideScrollbars !== this.props.hideScrollbars &&
            !nextProps.hideScrollbars
        ) {
            Ps.initialize(historyContainer);
            this.refs.historyTransition.resetAnimation();
            if (historyContainer) historyContainer.scrollTop = 0;
            Ps.update(historyContainer);
        }
    }

    _changeTab(tab) {
        SettingsActions.changeViewSetting({
            historyTab: tab
        });
        this.setState({
            activeTab: tab
        });

        // Ensure that focus goes back to top of scrollable container when tab is changed
        let historyNode = this.refs.history;
        historyNode.scrollTop = 0;
        Ps.update(historyNode);

        setTimeout(ReactTooltip.rebuild, 1000);
    }

    _onSetShowAll() {
        this.setState({
            showAll: !this.state.showAll
        });

        if (this.state.showAll) {
            this.refs.history.scrollTop = 0;
        }
    }

    render() {
        let {quoteSymbol, isNullAccount, activeTab} = this.props;
        let {rowCount, showAll} = this.state;
        let historyRows = null;

        if (isNullAccount) {
            activeTab = "history";
        }
        activeTab = "history";
        historyRows = this.props.history
            .take(100)
            .map(fill => {
                return (
                    <tr key={"history_" + fill.id}>
                        <td className={fill.className}>
                            <PriceText
                                price={fill.getPrice()}
                                base={this.props.base}
                                quote={this.props.quote}
                            />
                        </td>
                        <td>{fill.amountToReceive()}</td>
                        <td>
                            <Tooltip title={fill.time.toString()}>
                                <div
                                    className="tooltip"
                                    style={{whiteSpace: "nowrap"}}
                                >
                                    {counterpart
                                        .localize(fill.time, {
                                            type: "time",
                                            format: "long"
                                        })
                                        .slice(0, 8)}
                                </div>
                            </Tooltip>
                        </td>
                    </tr>
                );
            })
            .toArray();

        let emptyRow = (
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

        if (!showAll && historyRows) {
            historyRows.splice(rowCount, historyRows.length);
        }

        return (
            <div className={cnames(this.props.className)}>
                <div
                    className={this.props.innerClass}
                    style={this.props.innerStyle}
                >
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
                        className="table-container grid-block market-right-padding-only no-overflow"
                        ref="history"
                        style={{
                            minHeight: !this.props.tinyScreen ? 260 : 0,
                            maxHeight: 435,
                            overflow: "auto",
                            lineHeight: "10px"
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

MarketHistory.defaultProps = {
    history: []
};

MarketHistory.propTypes = {
    history: PropTypes.object.isRequired
};

export default connect(
    MarketHistory,
    {
        listenTo() {
            return [SettingsStore];
        },
        getProps() {
            return {
                viewSettings: SettingsStore.getState().viewSettings
            };
        }
    }
);
