import React from 'react';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import {Table} from 'antd';
import Icon from '../../Icon/Icon';

class MarketsOrderView extends React.Component {
	render() {
		let {
			style,
			className,
			innerClass,
			innerStyle,
			headerStyle,
			noHeader,
			activeTab,
			data,
			footerContainer,
			cancelOrder,
		} = this.props;

		return (
			<div style={style} key="open_orders" className={className}>
				<div className={innerClass} style={innerStyle}>
					{noHeader ? null : (
						<div style={headerStyle} className="exchange-content-header">
							{activeTab == 'my_orders' ? (
								<Translate content="exchange.my_orders" />
							) : null}
							{activeTab == 'open_settlement' ? (
								<Translate content="exchange.settle_orders" />
							) : null}
						</div>
					)}

					<div className="market-order-table-container">
						<Table
							dataSource={data}
							pagination={false}
							showSorterTooltip={false}
							scroll={{y: 350, x: 500}}
						>
							<Table.Column
								dataIndex="type"
								title={<div className="market-order-table-text-header"> </div>}
								render={(row) => {
									return (
										<div
											className="td-content"
											style={{
												borderLeftColor: row.isBid ? '#0F923A' : '#FF2929',
												borderLeftStyle: 'solid',
												borderLeftWidth: '8px',
												paddingLeft: '15px',
											}}
										>
											<div
												style={{
													color: row.isBid ? '#0F923A' : '#FF2929',
													fontSize: 18,
													fontWeight: 600,
													marginRight: 10,
												}}
											>
												{row.isBid ? 'BUY' : 'SELL'}
											</div>
										</div>
									);
								}}
							/>
							<Table.Column
								dataIndex="pair"
								title={
									<div className="market-order-table-text-header">
										{counterpart.translate('exchange.pair')}
									</div>
								}
								render={(row) => {
									return (
										<div className="td-content">
											<div className="td-content-common-text">
												{row.baseSymbol}
											</div>
											<div className="td-content-divider"></div>
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
									<div className="market-order-table-text-header">
										{counterpart.translate('transaction.trxTypes.amount')}
									</div>
								}
								render={(row) => {
									return (
										<div className="td-content">
											<div className="td-content-common-text">
												{Number(row.receiveAmount).toFixed(6)}
											</div>
											<div className="td-content-divider"></div>
											<div className="td-content-second-text">
												{Number(row.payAmount).toFixed(6)}
											</div>
										</div>
									);
								}}
							/>
							<Table.Column
								dataIndex="price"
								title={
									<div className="market-order-table-text-header">
										{counterpart.translate('exchange.price')}
									</div>
								}
								render={(row) => {
									return (
										<div className="td-content">
											<div className="td-content-second-text">
												{Number(row).toFixed(6)}
											</div>
										</div>
									);
								}}
							/>
							<Table.Column
								dataIndex="total"
								title={
									<div className="market-order-table-text-header">
										{counterpart.translate('exchange.total')}
									</div>
								}
								render={(row) => {
									return (
										<div className="td-content">
											<div className="td-content-common-text">
												{Number(row.total).toFixed(6)} {row.quoteSymbol}
											</div>
										</div>
									);
								}}
							/>

							<Table.Column
								dataIndex="orderId"
								title={
									<div className="market-order-table-action-header">
										{counterpart.translate('global.cancel')}
									</div>
								}
								render={(row) => {
									return (
										<button
											className="market-order-table-cancel-button"
											onClick={() => cancelOrder(row)}
										>
											<Icon
												name="times"
												theme="filled"
												size="1x"
												style={{fill: '#ff2929'}}
											/>
										</button>
									);
								}}
							/>
						</Table>
					</div>
					{footerContainer}
				</div>
			</div>
		);
	}
}

export {MarketsOrderView};
