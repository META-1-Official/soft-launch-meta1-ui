import React from 'react';
import counterpart from 'counterpart';
import MarketsActions from 'actions/MarketsActions';
import {ChainStore} from 'meta1js';
import {LimitOrder, SettleOrder, FeedPrice} from 'common/MarketClasses';
import {connect} from 'alt-react';
import SettingsStore from 'stores/SettingsStore';
import SettingsActions from 'actions/SettingsActions';
import marketUtils from 'common/market_utils';
import Translate from 'react-translate-component';
import {Input, Table, Switch, Button} from 'antd';
import AccountOrderRowDescription from './AccountOrderRowDescription';
import CollapsibleTable from '../Utility/CollapsibleTable';
import {groupBy, sumBy, meanBy} from 'lodash-es';
import {FormattedNumber} from 'react-intl';
import cnames from 'classnames';

import {Link} from 'react-router-dom';
import {MarketPrice} from '../Utility/MarketPrice';
import FormattedPrice from '../Utility/FormattedPrice';
import AssetName from '../Utility/AssetName';
import {EquivalentValueComponent} from '../Utility/EquivalentValueComponent';
import utils from 'common/utils';
import asset_utils from 'common/asset_utils';
import {FaChartBar} from 'react-icons/fa';

class AccountOrders extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			filterValue: '',
			areAssetsGrouped: props.viewSettings.get('accountOrdersGrouppedByAsset'),
		};
	}

	_getFilteredOrders(type) {
		let {filterValue} = this.state;

		let orders =
			(type !== 'settle'
				? this.props.account.get('orders')
				: this.props.settleOrders) || [];

		return orders.filter((item) => {
			let order = ChainStore.getObject(item).toJS();
			let base = ChainStore.getAsset(order.sell_price.base.asset_id);
			let quote = ChainStore.getAsset(order.sell_price.quote.asset_id);

			let baseSymbol = base.get('symbol').toLowerCase();
			let quoteSymbol = quote.get('symbol').toLowerCase();

			return (
				baseSymbol.indexOf(filterValue) > -1 ||
				quoteSymbol.indexOf(filterValue) > -1
			);
		});
	}

	onClickCancel(orderIds) {
		MarketsActions.cancelLimitOrders(this.props.account.get('id'), orderIds)
			.then((res) => {
				console.log('Cancel orders success:', res);
			})
			.catch((err) => {
				console.log('Cancel orders error:', err);
			});
	}

	_getDataSource(orders, type) {
		let dataSource = [];
		const isSettle = type === 'settle';

		orders.forEach((orderID) => {
			let order = null;
			let base = null;
			let quote = null;
			let sqr = null;
			let feed_price = null;
			let bitasset_options = null;

			if (!isSettle) {
				order = ChainStore.getObject(orderID).toJS();
				base = ChainStore.getAsset(order.sell_price.base.asset_id);
				quote = ChainStore.getAsset(order.sell_price.quote.asset_id);
			} else {
				order = ChainStore.getObject(orderID).toJS();
				base = ChainStore.getAsset(order.balance.asset_id);
				quote = ChainStore.getAsset(
					base.getIn(['bitasset', 'options', 'short_backing_asset'])
				);
			}

			if (base && quote) {
				let assets = {
					[base.get('id')]: {precision: base.get('precision')},
					[quote.get('id')]: {precision: quote.get('precision')},
				};

				const {marketName} = marketUtils.getMarketName(base, quote);
				const direction = this.props.marketDirections.get(marketName);

				let marketQuoteId = direction ? quote.get('id') : base.get('id');
				let marketBaseId = direction ? base.get('id') : quote.get('id');
				if (isSettle) {
					const feedPriceRaw = asset_utils.extractRawFeedPrice(base);
					sqr = base.getIn([
						'bitasset',
						'current_feed',
						'maximum_short_squeeze_ratio',
					]);

					feed_price = new FeedPrice({
						priceObject: feedPriceRaw,
						market_base: marketBaseId,
						sqr,
						assets,
					});

					bitasset_options = base.getIn(['bitasset', 'options']);
				}

				let limitOrder = !isSettle
					? new LimitOrder(order, assets, marketQuoteId)
					: new SettleOrder(
							order,
							assets,
							marketBaseId,
							feed_price,
							bitasset_options
					  );

				let marketBase = ChainStore.getAsset(marketBaseId);
				let marketQuote = ChainStore.getAsset(marketQuoteId);

				let isBid = limitOrder.isBid();
				let dataItem = {
					key: order.id,
					order: limitOrder,
					isBid: isBid,
					quote: marketQuote,
					base: marketBase,
					marketName: marketName,
					marketDirection: direction,
					preferredUnit: this.props.settings
						? this.props.settings.get('unit')
						: '1.3.0',
					quoteColor: !isBid ? 'value negative' : 'value positive',
					baseColor: isBid ? 'value negative' : 'value positive',
				};
				if (isSettle)
					dataItem = {
						...dataItem,
						settlement_date: order.settlement_date,
						feed_price,
					};

				dataSource.push(dataItem);
			}
		});

		// Sort by price first
		dataSource.sort((a, b) => {
			return a.order.getPrice() - b.order.getPrice();
		});

		// And then sort by market name - this way all records will be sorted by price inside, but by the market outside.
		dataSource.sort((a, b) => {
			if (a.marketName > b.marketName) {
				return 1;
			}
			if (a.marketName < b.marketName) {
				return -1;
			}

			// Trick only for grouped orders on the same market, which preserves tables order on direction change
			return a.marketDirection ? 1 : -1;
		});

		return dataSource;
	}

	_getColumns(areAssetsGrouped, groupedDataItems, type) {
		let onCell = (dataItem, rowIndex) => {
			// return {
			// 	onClick: this.onFlip.bind(this, dataItem.marketName),
			// };
		};

		let firstDataItem,
			operation,
			forText,
			baseAsset,
			quoteAsset,
			baseName,
			quoteName,
			averagePrice,
			marketPrice,
			value;

		const isSettle = type === 'settle';

		let getBaseAsset = (dataItem) =>
			dataItem.order[
				dataItem.isBid ? 'amountToReceive' : 'amountForSale'
			]().getAmount({real: true});
		let formatBaseAsset = (baseAsset) =>
			utils.format_number(
				baseAsset,
				firstDataItem.base.get('precision'),
				false
			);

		let getQuoteAsset = (dataItem) =>
			dataItem.order[
				dataItem.isBid ? 'amountForSale' : 'amountToReceive'
			]().getAmount({real: true});
		let formatQuoteAsset = (quoteAsset) =>
			utils.format_number(
				quoteAsset,
				firstDataItem.quote.get('precision'),
				false
			);

		let formatMarketPrice = (dataItem) => (
			<MarketPrice
				base={dataItem.base.get('id')}
				quote={dataItem.quote.get('id')}
				force_direction={dataItem.base.get('symbol')}
				hide_symbols
				hide_asset
			/>
		);

		if (areAssetsGrouped) {
			// Assuming that first element always exist because data items were passed as grouped
			firstDataItem = groupedDataItems[0];

			operation = counterpart.translate(
				'exchange.' +
					(!isSettle ? (firstDataItem.isBid ? 'buy' : 'sell') : 'settlement_of')
			);

			forText = counterpart.translate('transaction.for');

			baseAsset = formatBaseAsset(sumBy(groupedDataItems, getBaseAsset));
			quoteAsset = formatQuoteAsset(sumBy(groupedDataItems, getQuoteAsset));

			let quoteColor = !firstDataItem.isBid
				? 'value negative'
				: 'value positive';
			let baseColor = firstDataItem.isBid ? 'value negative' : 'value positive';

			baseName = (
				<AssetName
					noTip
					customClass={quoteColor}
					name={firstDataItem.quote.get('symbol')}
				/>
			);
			quoteName = (
				<AssetName
					noTip
					customClass={baseColor}
					name={firstDataItem.base.get('symbol')}
				/>
			);

			averagePrice = meanBy(groupedDataItems, (dataItem) => {
				let price = dataItem.order.sellPrice().toReal(true);
				return !dataItem.marketDirection ? price : 1 / price;
			});

			// Taken from FormattedPrice internal logic
			let decimals = Math.min(
				8,
				firstDataItem.order.sellPrice()[firstDataItem.isBid ? 'base' : 'quote']
					.precision
			);
			averagePrice = (
				<FormattedNumber
					value={averagePrice}
					minimumFractionDigits={Math.max(2, decimals)}
					maximumFractionDigits={Math.max(2, decimals)}
				/>
			);

			marketPrice = formatMarketPrice(firstDataItem);

			let valueAmount = sumBy(groupedDataItems, (dataItem) =>
				dataItem.order.amountForSale().getAmount()
			);

			value = (
				<div>
					<EquivalentValueComponent
						hide_asset
						amount={valueAmount}
						fromAsset={firstDataItem.order.amountForSale().asset_id}
						noDecimals={true}
						toAsset={firstDataItem.preferredUnit}
					/>{' '}
					<AssetName name={firstDataItem.preferredUnit} />
				</div>
			);
		}

		// Conditional array items: https://stackoverflow.com/a/47771259
		return [
			{
				key: 'pair',
				title: counterpart.translate('account.user_issued_assets.pair'),
				render: (dataItem) => {
					const color = dataItem.isBid ? 'danger' : 'success';
					return (
						<div className="pair">
							<div className={cnames('txtlabel', color)}>
								<Link
									to={`/market/${dataItem.quote.get(
										'symbol'
									)}_${dataItem.base.get('symbol')}`}
								>
									{dataItem.isBid ? (
										<Translate content="exchange.buy" />
									) : (
										<Translate content="exchange.sell" />
									)}
								</Link>
							</div>
						</div>
					);
				},
			},
			...(areAssetsGrouped
				? [
						{
							key: 'operation',
							title: operation,
							render: (dataItem) => operation,
							onCell: onCell,
							className: 'clickable groupColumn',
						},
						...(!isSettle
							? [
									{
										key: 'baseAsset',
										title: baseAsset,
										render: (dataItem) =>
											formatBaseAsset(getBaseAsset(dataItem)),
										onCell: onCell,
										className: 'clickable groupColumn',
									},
									{
										key: 'baseName',
										title: baseName,
										render: (dataItem) => baseName,
										onCell: onCell,
										className: 'clickable groupColumn',
									},
									{
										key: 'for',
										title: forText,
										render: (dataItem) => forText,
										onCell: onCell,
										className: 'clickable groupColumn',
									},
									{
										key: 'quoteAsset',
										title: quoteAsset,
										render: (dataItem) =>
											formatQuoteAsset(getQuoteAsset(dataItem)),
										onCell: onCell,
										className: 'clickable groupColumn',
									},
									{
										key: 'quoteName',
										title: quoteName,
										render: (dataItem) => quoteName,
										onCell: onCell,
										className: 'clickable groupColumn',
									},
							  ]
							: [
									{
										key: 'quoteAsset',
										title: quoteAsset,
										render: (dataItem) =>
											formatQuoteAsset(getQuoteAsset(dataItem)),
										className: 'clickable groupColumn',
									},
									{
										key: 'baseName',
										title: baseName,
										render: (dataItem) => baseName,
										className: 'clickable groupColumn',
									},
							  ]),
				  ]
				: [
						{
							key: 'description',
							title: counterpart.translate('exchange.description'),
							render: (dataItem) =>
								!isSettle ? (
									<AccountOrderRowDescription {...dataItem} />
								) : (
									<Translate
										content={'exchange.settlement_description'}
										quoteAsset={utils.format_number(
											dataItem.order.for_sale.getAmount({
												real: true,
											}),
											dataItem.quote.get('precision'),
											false
										)}
										quoteName={
											<AssetName
												noTip
												customClass={dataItem.quoteColor}
												name={dataItem.quote.get('symbol')}
											/>
										}
									/>
								),
							onCell: onCell,
							className: 'clickable',
						},
				  ]),
			{
				key: 'price',
				title: areAssetsGrouped ? (
					<div>
						<Translate content="account.average_price" />
						<br />
						{averagePrice}
					</div>
				) : (
					counterpart.translate('exchange.price')
				),
				align: areAssetsGrouped ? 'right' : 'left',
				render: (dataItem) => (
					<FormattedPrice
						base_amount={dataItem.order.sellPrice().base.amount}
						base_asset={dataItem.order.sellPrice().base.asset_id}
						quote_amount={dataItem.order.sellPrice().quote.amount}
						quote_asset={dataItem.order.sellPrice().quote.asset_id}
						force_direction={dataItem.base.get('symbol')}
					/>
				),
				onCell: onCell,
				className: 'clickable',
			},
			{
				key: 'marketPrice',
				title: areAssetsGrouped ? (
					<div>
						<Translate content="exchange.price_market" />
						<br />
						{marketPrice}
					</div>
				) : (
					counterpart.translate('exchange.price_market')
				),
				align: areAssetsGrouped ? 'right' : 'left',
				render: formatMarketPrice,
				onCell: onCell,
				className: 'clickable',
			},
			isSettle && !areAssetsGrouped
				? {
						key: 'settlement_date',
						title: areAssetsGrouped ? (
							<div>
								<Translate content="exchange.settlement_date" />
								<br />
								{marketPrice}
							</div>
						) : (
							counterpart.translate('exchange.settlement_date')
						),
						align: areAssetsGrouped ? 'right' : 'left',
						render: (dataItem) => <span>{dataItem.settlement_date}</span>,
						onCell: onCell,
						className: 'clickable',
				  }
				: {},
			{
				key: 'Cancel',
				title: <Translate content="global.cancel" />,
				render: (dataItem) => (
					<Button
						type="primary"
						danger
						onClick={() => this.onClickCancel([dataItem.order.id])}
					>
						<Translate content="global.cancel" />
					</Button>
				),
			},
		];
	}

	_renderOrdersTable() {
		const {account} = this.props;
		const {filterValue, areAssetsGrouped} = this.state;
		let orders = account.get('orders');

		if (filterValue) {
			orders = this._getFilteredOrders.call(this);
		}
		const dataSource = this._getDataSource(orders);

		let pagination = {
			hideOnSinglePage: true,
			pageSize: 20,
			showTotal: (total, range) =>
				counterpart.translate('utility.total_x_items', {
					count: total,
				}),
		};

		let tables = [];

		if (areAssetsGrouped) {
			// Group by market name - this will group all records from the same market, no matter is it sell or buy order
			// And then group by base market ID - this will separate buy and sell records on the same market
			// Don't forget to count the direction - this allows to consider table as the same one when direction changes
			let grouped = groupBy(
				dataSource,
				(dataItem) =>
					dataItem.marketName +
					'_' +
					(dataItem.marketDirection
						? dataItem.base.get('id')
						: dataItem.quote.get('id'))
			);

			for (let [key, value] of Object.entries(grouped)) {
				let type;
				if (value[0].settlement_date) type = 'settle';
				let columns = this._getColumns(areAssetsGrouped, value, type);
				tables.push(
					<div className="grid-wrapper" key={key}>
						<CollapsibleTable
							columns={columns}
							dataSource={value}
							pagination={pagination}
							isCollapsed={true}
						/>
					</div>
				);
			}
		} else {
			let columns = this._getColumns(areAssetsGrouped, dataSource);

			tables.push(
				<div className="grid-wrapper" key="ungroupedTable">
					<Table
						columns={columns}
						dataSource={dataSource}
						pagination={pagination}
					/>
				</div>
			);
		}

		return tables;
	}

	onFlip(marketId) {
		let setting = {};
		setting[marketId] = !this.props.marketDirections.get(marketId);
		SettingsActions.changeMarketDirection(setting);
	}

	setFilterValue(evt) {
		this.setState({filterValue: evt.target.value.toLowerCase()});
	}

	render() {
		const {account} = this.props;

		const ordersTable = this._renderOrdersTable();

		const tables = [ordersTable];

		let onGroupChange = (checked, evt) => {
			SettingsActions.changeViewSetting({
				accountOrdersGrouppedByAsset: checked,
			});
			this.setState({areAssetsGrouped: checked});
		};
		let settleOrdersCount = account.get('settle_orders').size;
		let allOrderIds = [];
		account.get('orders').map((orderId) => {
			allOrderIds.push(orderId);
		});

		return (
			<div
				className="grid-content no-overflow no-padding open-orders"
				style={{paddingBottom: 15}}
			>
				<div
					className="header-selector none"
					style={{display: 'inline-block', width: '100%'}}
				>
					<div className="filter-block">
						<div className="filter">
							<Input
								type="text"
								placeholder={counterpart.translate('account.filter_orders')}
								onChange={this.setFilterValue.bind(this)}
								// addonAfter={<Icon type="search" />}
							/>
						</div>
						<div className="group-by">
							<Switch
								onChange={onGroupChange}
								checked={this.state.areAssetsGrouped}
							/>
							&nbsp;&nbsp;
							<Translate content="account.group_by_asset" />
						</div>
					</div>
				</div>

				<div>
					{settleOrdersCount > 0 && (
						<div className="header-selector">
							<Translate content="account.market_orders" />
						</div>
					)}
					{tables}
				</div>

				<div className="cancel-all">
					<Button
						type="primary"
						danger
						onClick={() => this.onClickCancel(allOrderIds)}
					>
						<Translate content="account.cancel_all_open_orders" />
					</Button>
				</div>
			</div>
		);
	}
}

AccountOrders = connect(AccountOrders, {
	listenTo() {
		return [SettingsStore];
	},
	getProps() {
		return {
			marketDirections: SettingsStore.getState().marketDirections,
			viewSettings: SettingsStore.getState().viewSettings,
		};
	},
});

export default AccountOrders;
