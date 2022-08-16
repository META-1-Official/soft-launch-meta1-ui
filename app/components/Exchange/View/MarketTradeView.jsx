import React from 'react';
import {Table} from 'antd';
import {FaArrowRight, FaArrowUp, FaArrowDown} from 'react-icons/fa';
import {getAssetIcon} from '../../utils/asset';
import {connect} from 'alt-react';
import MarketsStore from 'stores/MarketsStore';

class MarketTradeView extends React.Component {
	render() {
		let {
			// Styles and Classes
			style,
			className,
			innerClass,
			innerStyle,
			// Strings
			data,
			tinyScreen,
			marketStats,
			allMarketStats,
		} = this.props;

		return (
			<div style={style} key="trade" className={className}>
				<div className={innerClass} style={innerStyle}>
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
							scroll={{y: 449, x: 350}}
							showSorterTooltip={false}
						>
							<Table.Column
								dataIndex="asset"
								title={
									<div className="market-order-table-text-header">Crypto</div>
								}
								render={(row) => {
									return (
										<div
											className="td-content"
											style={{
												borderLeftColor: row.isBid ? '#0F923A' : '#FF2929',
												borderLeftStyle: 'solid',
												borderLeftWidth: '9px',
												paddingLeft: '8px',
												display: 'flex',
												flexDirection: 'row',
											}}
										>
											<img
												className="asset-img"
												src={getAssetIcon(row.symbol)}
												alt="Asset logo"
												width="20px"
												height="21px"
											/>
											<div
												style={{
													fontSize: '15px',
													color: 'white',
													textAlign: 'left',
													lineHeight: '18px',
													marginLeft: '8px',
												}}
											>
												{row.symbol}
											</div>
										</div>
									);
								}}
							/>
							<Table.Column
								dataIndex="amount"
								title={
									<div className="market-order-table-text-header">
										Amount / USDT
									</div>
								}
								sorter={(a, b) => {
									return (
										parseFloat(a.amount.value) - parseFloat(b.amount.value)
									);
								}}
								sortDirections={['descend', 'ascend']}
								render={(row) => {
									return (
										<div
											style={{
												fontSize: '14px',
												color:
													row.change > 0
														? '#009D55'
														: row.change < 0
														? '#FF2929'
														: 'white',
												textAlign: 'right',
												lineHeight: '16px',
											}}
										>
											{row.value}
										</div>
									);
								}}
							/>
							<Table.Column
								dataIndex="amount"
								title={
									<div className="market-order-table-text-header">Change</div>
								}
								render={(row) => {
									let currentMarketStats = this.props.allMarketStats.get(
										row.marketId
									);

									if (currentMarketStats)
										row.change = currentMarketStats.change;

									return (
										<div
											style={{
												display: 'flex',
												flexDirection: 'row',
												alignItems: 'center',
												marginLeft: '20px',
											}}
										>
											{row.change > 0 && (
												<FaArrowUp
													css={() => ({
														marginRight: '10px',
														color: '#009D55',
														width: '8px',
														height: '8px',
													})}
												/>
											)}

											{row.change < 0 && (
												<FaArrowDown
													css={() => ({
														marginRight: '10px',
														color: '#FF2929',
														width: '8px',
														height: '8px',
													})}
												/>
											)}

											{row.change == 0 && (
												<FaArrowRight
													css={() => ({
														marginRight: '10px',
														color: 'white',
														width: '8px',
														height: '8px',
													})}
												/>
											)}

											<div
												style={{
													fontSize: '12px',
													color:
														row.change > 0
															? '#009D55'
															: row.change < 0
															? '#FF2929'
															: 'white',
													textAlign: 'left',
													lineHeight: '18px',
												}}
											>
												{`${row.change > 0 ? '+' : ''}${row.change} %`}
											</div>
										</div>
									);
								}}
							/>
							<Table.Column
								dataIndex="value"
								title={
									<div className="market-order-table-text-header">Value</div>
								}
								render={(row) => {
									return (
										<div className="td-content">
											<div
												style={{
													color: 'white',
													fontSize: '14px',
													fontWeight: 400,
													textAlign: 'right',
													lineHeight: '24px',
												}}
											>
												{Number(row.value).toLocaleString('en')} {row.symbol}
											</div>
										</div>
									);
								}}
							/>
						</Table>
					</div>
				</div>
			</div>
		);
	}
}

MarketTradeView = connect(MarketTradeView, {
	listenTo() {
		return [MarketsStore];
	},
	getProps(props) {
		return {
			allMarketStats: MarketsStore.getState().allMarketStats,
		};
	},
});

export {MarketTradeView};
