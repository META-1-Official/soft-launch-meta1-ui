import React from 'react';
import Translate from 'react-translate-component';
import cnames from 'classnames';
import TransitionWrapper from '../../Utility/TransitionWrapper';
import AssetName from '../../Utility/AssetName';
import SectionHeader from 'components/Utility/SectionHeader';

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
			showAll,
		} = this.props;

		const emptyRow = (
			<tr>
				<td
					className="centric-items"
					style={{
						lineHeight: 4,
						fontStyle: 'italic',
					}}
					colSpan="5"
				>
					<Translate content="account.no_orders" />
				</td>
			</tr>
		);

		const allHistory = (
			<>
				<div className="grid-block vertical shrink left-orderbook-header market-right-padding-only">
					<SectionHeader title="Trade History" />
					<table className="table table-no-padding order-table text-left fixed-table market-right-padding">
						<thead>
							<tr>
								<th style={{textAlign: 'left'}} className="time-header-class">
									<Translate
										className="header-sub-title"
										content="explorer.block.time"
									/>
								</th>
								<th style={{textAlign: 'left'}}>
									<Translate
										className="header-sub-title"
										content="exchange.price"
									/>
								</th>
								<th style={{textAlign: 'left'}} className="table-volume-class">
									<Translate
										className="header-sub-title"
										content="exchange.volume"
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
						minHeight: '100%',
						overflow: 'hidden',
						lineHeight: '18px',
					}}
				>
					<table className="table order-table no-stripes table-hover fixed-table text-right no-overflow">
						<TransitionWrapper
							ref="historyTransition"
							component="tbody"
							transitionName="newrow"
							className="orderbook"
						>
							{!!historyRows && historyRows.length > 0 ? historyRows : emptyRow}
						</TransitionWrapper>
					</table>
				</div>
			</>
		);

		const myOrders = (
			<>
				<div className="grid-block vertical shrink left-orderbook-header market-right-padding-only">
					<table className="table table-no-padding order-table text-left fixed-table market-right-padding">
						<thead>
							<tr>
								{['Pair', 'Amount', 'Price', 'Total'].map((header) => (
									<th
										style={{
											textTransform: 'unset',
											color: '#FFC000',
											borderBottom: 'none',
											textAlign: header === 'Total' ? 'right' : 'center',
										}}
									>
										{header}
									</th>
								))}
								{/* <th
									style={{
										textTransform: 'unset',
										color: '#FF2929',
										borderBottom: 'none',
										textAlign: 'center',
									}}
								>
									Cancel
								</th> */}
							</tr>
						</thead>
					</table>
				</div>
				<div
					className="table-container grid-block market-right-padding-only no-overflow market-history-rows"
					ref="history"
					style={{
						overflow: 'hidden',
					}}
				>
					<table className="table order-table no-stripes table-hover fixed-table text-right no-overflow">
						<TransitionWrapper
							ref="historyTransition"
							component="tbody"
							transitionName="newrow"
							className="orderbook"
						>
							{!!historyRows && historyRows.length > 0 ? historyRows : emptyRow}
						</TransitionWrapper>
					</table>
				</div>
			</>
		);

		return (
			<div
				className={cnames(className)}
				style={{height: '100%', display: 'flex', flexDirection: 'column'}}
			>
				<div className={innerClass} style={innerStyle}>
					{activeTab === 'history' ? allHistory : myOrders}
				</div>
			</div>
		);
	}
}

export {MarketHistoryView};
