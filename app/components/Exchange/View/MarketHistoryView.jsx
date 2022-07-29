import React from 'react';
import Translate from 'react-translate-component';
import cnames from 'classnames';
import TransitionWrapper from '../../Utility/TransitionWrapper';
import AssetName from '../../Utility/AssetName';
import SectionHeader from 'components/Utility/SectionHeader';
import {Table} from 'antd';

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
			data,
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
							{!!data && data.length > 0 ? data : emptyRow}
						</TransitionWrapper>
					</table>
				</div>
			</>
		);

		const myOrders = (
			<>
				<div
					className="market-order-table-container grid-block no-overflow"
					style={{
						overflow: 'hidden',
						minHeight: tinyScreen ? 260 : 0,
						lineHeight: '13px',
					}}
				>
					<Table
						dataSource={data}
						pagination={false}
						scroll={{y: 452, x: 350}}
						showSorterTooltip={false}
					>
						<Table.Column
							dataIndex="pair"
							title={<div className="market-order-table-text-header">Pair</div>}
							render={(row) => {
								return (
									<div
										className="td-content"
										style={{
											borderLeftColor: row.isBid ? '#0F923A' : '#FF2929',
											borderLeftStyle: 'solid',
											borderLeftWidth: '8px',
										}}
									>
										<div
											style={{
												fontSize: '15px',
												fontWeight: 400,
												color: 'white',
												textAlign: 'left',
											}}
										>
											{row.baseSymbol}
										</div>
										<div
											style={{
												borderBottom: '1px solid #566176',
												width: '45px',
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
											{row.quoteSymbol}
										</div>
									</div>
								);
							}}
						/>
						<Table.Column
							dataIndex="amount"
							title={
								<div className="market-order-table-text-header">Amount</div>
							}
							render={(row) => {
								return (
									<div className="td-content">
										<div
											style={{
												fontSize: '15px',
												fontWeight: 400,
												color: 'white',
												textAlign: 'center',
											}}
										>
											{row.receiveAmount}
										</div>
										<div
											style={{
												borderBottom: '1px solid #566176',
												width: '45px',
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
											{row.payAmount}
										</div>
									</div>
								);
							}}
						/>
						<Table.Column
							dataIndex="price"
							title={
								<div className="market-order-table-text-header text-left">
									Price
								</div>
							}
							render={(row) => {
								return (
									<div>
										<div
											style={{
												color: 'white',
												textAlign: 'left',
												paddingLeft: '10px',
											}}
										>
											{row}
										</div>
									</div>
								);
							}}
						/>
						<Table.Column
							dataIndex="total"
							title={
								<div className="market-order-table-text-header text-right">
									Total
								</div>
							}
							render={(row) => {
								return (
									<div>
										<div
											style={{
												color: 'white',
												fontSize: '15px',
												fontWeight: 400,
												textAlign: 'right',
												paddingRight: '10px',
											}}
										>
											{Number(row).toLocaleString('en')}
										</div>
									</div>
								);
							}}
						/>
					</Table>
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
