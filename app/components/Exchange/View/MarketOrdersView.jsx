import React from 'react';
import Translate from 'react-translate-component';
import {Table} from 'antd';
import Icon from '../../Icon/Icon';

class MarketsOrderView extends React.Component {
	render() {
		let {
			// Styles and Classes
			style,
			className,
			innerClass,
			innerStyle,
			headerStyle,

			// Bools
			noHeader,
			// Strings
			activeTab,
			data,
			tinyScreen,
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

					<div
						className="market-order-table-container grid-block no-overflow"
						style={{
							overflow: 'hidden',
							minHeight: tinyScreen ? 228 : 0,
							maxHeight: 375,
							lineHeight: '13px',
						}}
					>
						<Table
							dataSource={data}
							pagination={false}
							scroll={{y: 330, x: 350}}
							showSorterTooltip={false}
						>
							<Table.Column
								dataIndex="pair"
								title={
									<div className="market-order-table-text-header">Pair</div>
								}
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
									<div className="market-order-table-text-header">Amount</div>
								}
								render={(row) => {
									return (
										<div className="td-content">
											<div className="td-content-common-text">
												{row.receiveAmount}
											</div>
											<div className="td-content-divider"></div>
											<div className="td-content-second-text">
												{row.payAmount}
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
										<div className="td-content">
											<div className="td-content-second-text">{row}</div>
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
										<div className="td-content">
											<div className="td-content-common-text">
												{Number(row).toLocaleString('en')}
											</div>
										</div>
									);
								}}
							/>

							<Table.Column
								dataIndex="orderId"
								title={
									<div className="market-order-table-action-header">Cancel</div>
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
