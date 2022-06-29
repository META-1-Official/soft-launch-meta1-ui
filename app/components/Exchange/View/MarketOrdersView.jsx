import React from 'react';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import AssetName from '../../Utility/AssetName';
import {Tooltip, Checkbox} from 'antd';

function MarketOrdersViewTableHeader({
	baseSymbol,
	quoteSymbol,
	selected,
	onCancelToggle,
}) {
	return (
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
				<th
					style={{
						textTransform: 'unset',
						color: '#FF2929',
						borderBottom: 'none',
						textAlign: 'center',
					}}
				>
					Cancel
				</th>
			</tr>
		</thead>
	);
}

MarketOrdersViewTableHeader.defaultProps = {
	quoteSymbol: null,
	baseSymbol: null,
};

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
			isSelected,
			tinyScreen,

			// Strings
			activeTab,
			baseSymbol,
			quoteSymbol,

			// Containers
			contentContainer,
			footerContainer,

			// Functions
			onCancelToggle,
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
					<div className="grid-block shrink left-orderbook-header market-right-padding-only">
						<table className="table order-table text-right fixed-table market-right-padding">
							<MarketOrdersViewTableHeader
								baseSymbol={baseSymbol}
								quoteSymbol={quoteSymbol}
								selected={isSelected}
								onCancelToggle={
									activeTab == 'my_orders' ? onCancelToggle : null
								}
							/>
						</table>
					</div>

					<div
						className="table-container grid-block market-right-padding-only no-overflow"
						ref="container"
						style={{
							overflow: 'hidden',
							minHeight: tinyScreen ? 260 : 0,
							maxHeight: 190,
							lineHeight: '13px',
						}}
					>
						<table className="table order-table table-highlight-hover table-hover no-stripes text-right fixed-table market-right-padding">
							{contentContainer}
						</table>
					</div>
					{footerContainer}
				</div>
			</div>
		);
	}
}

export {MarketsOrderView};
