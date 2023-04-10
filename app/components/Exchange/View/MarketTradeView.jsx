import React from 'react';
import {Table} from 'antd';
import counterpart from 'counterpart';
import {FaArrowRight, FaArrowUp, FaArrowDown} from 'react-icons/fa';
import {getAssetIcon} from 'constants/assets';
import {connect} from 'alt-react';
import MarketsStore from 'stores/MarketsStore';
import {Tooltip} from 'antd';

class MarketTradeView extends React.Component {
	render() {
		let {style, className, innerClass, innerStyle, data} = this.props;

		return (
			<div style={style} key="trade" className={className}>
				<div className={innerClass} style={innerStyle}>
					<div
						className="market-order-table-container grid-block no-overflow"
						style={{
							overflow: 'hidden',
							lineHeight: '13px',
						}}
					>
						<Table
							dataSource={data}
							pagination={false}
							showSorterTooltip={false}
						>
							<Table.Column
								dataIndex="asset"
								title={
									<div className="market-order-table-text-header">
										{counterpart.translate('exchange.crypto')}
									</div>
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
												css={(theme) => ({
													display: theme.mode === 'dark' ? 'unset' : 'none',
												})}
											/>
											<img
												className="asset-img"
												src={getAssetIcon(row.symbol, 'light')}
												alt="Asset logo"
												css={(theme) => ({
													display: theme.mode === 'light' ? 'unset' : 'none',
													width: '30px',
													height: '30px',
												})}
											/>
											<div
												className="td-content-common-text"
												style={{
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
										{counterpart.translate('exchange.amount_usdt')}
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
										<Tooltip title={Number(row.value)} placement="top">
											<div
												css={(theme) => ({
													color:
														row.change > 0
															? '#009D55'
															: row.change < 0
															? '#FF2929'
															: theme.colors.textColor,
													textAlign: 'center',
													lineHeight: '16px',
													fontSize: '14px',
												})}
											>
												{Number(row.value).toFixed(6)}
											</div>
										</Tooltip>
									);
								}}
							/>
							<Table.Column
								dataIndex="amount"
								title={
									<div className="market-order-table-text-header">
										{counterpart.translate('settings.change')}
									</div>
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
												justifyContent: 'center',
												marginLeft: '20px',
												alignItems: 'center',
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
													css={(theme) => ({
														marginRight: '10px',
														color: theme.colors.textColor,
														width: '8px',
														height: '8px',
													})}
												/>
											)}

											<div
												css={(theme) => ({
													fontSize: '14px',
													color:
														row.change > 0
															? '#009D55'
															: row.change < 0
															? '#FF2929'
															: theme.colors.textColor,
													textAlign: 'left',
													lineHeight: '18px',
												})}
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
									<div className="market-order-table-text-header">
										{counterpart.translate('exchange.value')}
									</div>
								}
								render={(row) => {
									return (
										<div className="td-content">
											<div
												className="td-content-common-text"
												style={{
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
	getProps() {
		return {
			allMarketStats: MarketsStore.getState().allMarketStats,
		};
	},
});

export {MarketTradeView};
