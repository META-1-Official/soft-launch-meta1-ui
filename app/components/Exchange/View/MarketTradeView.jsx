import React from 'react';
import Translate from 'react-translate-component';
import {Table} from 'antd';
import {FaArrowRight, FaArrowUp, FaArrowDown} from 'react-icons/fa';
import Icon from '../../Icon/Icon';
import {getAssetIcon} from '../../utils/asset';

class MarketTradeView extends React.Component {
	render() {
		let {
			// Styles and Classes
			style,
			className,
			innerClass,
			innerStyle,
			headerStyle,
			// Strings
			data,
			tinyScreen,
		} = this.props;

		return (
			<div style={style} key="trade" className={className}>
				<div className={innerClass} style={innerStyle}>
					<div
						className="market-order-table-container grid-block market-right-padding-only no-overflow"
						ref="container"
						style={{
							overflow: 'hidden',
							minHeight: tinyScreen ? 260 : 0,
							maxHeight: 370,
							lineHeight: '13px',
						}}
					>
						<Table dataSource={data} pagination={{pageSize: 5}}>
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
									<div className="market-order-table-text-header">Amount</div>
								}
								sorter={(a, b) => a.value - b.value}
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
														: white,
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
									return (
										<div
											style={{
												display: 'flex',
												flexDirection: 'row',
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
													css={() => ({
														marginRight: '10px',
														color: white,
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
															: white,
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

export {MarketTradeView};
