import React from 'react';
import Translate from 'react-translate-component';
import cnames from 'classnames';
import TransitionWrapper from '../../Utility/TransitionWrapper';
import SectionHeader from 'components/Utility/SectionHeader';
import utils from 'common/utils';
import {Table} from 'antd';

class MarketHistoryView extends React.Component {
	render() {
		let {className, innerClass, innerStyle, activeTab, data} = this.props;

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
				<div className="left-orderbook-header">
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
					className="table-container grid-block no-overflow market-history-rows"
					ref="history"
					id="market-orders-view-container"
					style={{
						// minHeight: 450,
						overflow: 'hidden',
						lineHeight: '18px',
					}}
				>
					<table className="table order-table no-stripes table-hover fixed-table text-right no-overflow market-history-custom">
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
					className="market-order-table-container"
					style={{
						overflow: 'hidden',
						lineHeight: '13px',
					}}
				>
					<Table dataSource={data} pagination={false} showSorterTooltip={false}>
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
										<div className="td-content-common-text">
											{row.baseSymbol}
										</div>
										<div className="td-content-divider" />
										<div className="td-content-second-text">
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
										<div className="td-content-common-text">
											{utils.format_number_digits(row.receiveAmount, 6)}
										</div>
										<div className="td-content-divider"></div>
										<div className="td-content-second-text">
											{utils.format_number_digits(row.payAmount, 6)}
										</div>
									</div>
								);
							}}
						/>
						<Table.Column
							dataIndex="price"
							title={
								<div className="market-order-table-text-header">Price</div>
							}
							render={(row) => {
								return (
									<div>
										<div className="td-content-common-text">
											{Number(row).toFixed(6)}
										</div>
									</div>
								);
							}}
						/>
						<Table.Column
							dataIndex="total"
							title={
								<div className="market-order-table-text-header">Total</div>
							}
							render={(row) => {
								return (
									<div>
										<div className="td-content-common-text">
											{Number(row).toFixed(6)}
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
				{activeTab === 'history' ? allHistory : myOrders}
			</div>
		);
	}
}

export {MarketHistoryView};
