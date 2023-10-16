import React from 'react';
import Immutable from 'immutable';
import Translate from 'react-translate-component';
import TotalBalanceValue from '../Utility/TotalBalanceValue';
import {RecentTransactions} from './RecentTransactions';
import {ChainStore} from 'meta1-vision-js';
import utils from 'common/utils';
import accountUtils from 'common/account_utils';
import AccountOrders from './AccountOrders';
import TranslateWithLinks from '../Utility/TranslateWithLinks';
import {checkMarginStatus} from 'common/accountHelper';
import BalanceWrapper from './BalanceWrapper';
import AccountTreemap from './AccountTreemap';
import AssetWrapper from '../Utility/AssetWrapper';
import AccountPortfolioList from './AccountPortfolioList';
import {Link} from 'react-router-dom';
import {Space, Switch, Menu, Checkbox, Dropdown} from 'antd';
import counterpart from 'counterpart';
import SearchInput from '../Utility/SearchInput';
import PageHeader from 'components/PageHeader/PageHeader';
import StyledButton from 'components/Button/Button';
import {FormattedNumber} from 'react-intl';
import {
	ArrowRightOutlined,
	ArrowUpOutlined,
	ArrowDownOutlined,
	SettingFilled,
	CaretDownFilled,
	CaretUpOutlined,
} from '@ant-design/icons';

class AccountOverview extends React.Component {
	constructor(props) {
		super();
		this.state = {
			shownAssets: props.viewSettings.get('shownAssets', 'active'),
			alwaysShowAssets: process.env.CRYPTOS_ARRAY.split(','),
			hideFishingProposals: true,
			currentDisplay: 'portfolio',
			hideZeroBalance: true,
			portfolioCheckbox: [
				'Qty',
				`Price (${props.settings.get('unit')})`,
				'24Hr',
				`Value (${props.settings.get('unit')})`,
				'Trade',
				'Send',
				'Deposit',
				'Withdraw',
				'Percent of Total Supply',
			],
			openOrderCheckbox: [
				'Buy / Sell',
				'From / To',
				'Price',
				'Market Price',
				'Orders Date',
				'Expiry Date',
				'Action',
			],
			transactionHistoryCheckbox: ['Operation', 'Info', 'Fee', 'Time'],
		};

		this._handleFilterInput = this._handleFilterInput.bind(this);
	}

	_handleFilterInput(e) {
		this.setState({
			filterValue: e.target.value,
		});
	}

	UNSAFE_componentWillMount() {
		this._checkMarginStatus();

		var qd = {};
		location.search
			.substr(1)
			.split('&')
			.forEach(function (item) {
				item.split('=')[0] in qd
					? qd[item.split('=')[0]].push(item.split('=')[1])
					: (qd[item.split('=')[0]] = [item.split('=')[1]]);
			});

		if (
			qd.hasOwnProperty('currentDisplay') &&
			qd['currentDisplay'].length > 0
		) {
			this.setState({currentDisplay: qd['currentDisplay'][0]});
		}
	}

	_checkMarginStatus(props = this.props) {
		checkMarginStatus(props.account).then((status) => {
			let globalMarginStatus = null;
			for (let asset in status) {
				globalMarginStatus = status[asset].statusClass || globalMarginStatus;
			}
			this.setState({globalMarginStatus});
		});
	}

	UNSAFE_componentWillReceiveProps(np) {
		const currentDisplay = np.history.location.search.replace(
			'?currentDisplay=',
			''
		);
		if (currentDisplay != this.state.currentDisplay && currentDisplay != '') {
			this.setState({currentDisplay});
		}

		if (np.account !== this.props.account) {
			this._checkMarginStatus(np);
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return (
			!utils.are_equal_shallow(nextProps.balances, this.props.balances) ||
			nextProps.account !== this.props.account ||
			nextProps.isMyAccount !== this.props.isMyAccount ||
			nextProps.settings !== this.props.settings ||
			nextProps.hiddenAssets !== this.props.hiddenAssets ||
			!utils.are_equal_shallow(nextState, this.state) ||
			this.state.filterValue !== nextState.filterValue ||
			this.state.enabledColumns !== nextState.enabledColumns
		);
	}

	_toggleHideProposal() {
		this.setState({
			hideFishingProposals: !this.state.hideFishingProposals,
		});
	}

	handleHideZeroBalance = () => {
		this.setState({
			hideZeroBalance: !this.state.hideZeroBalance,
		});
	};

	portfolioCheckboxHandler(data) {
		this.setState({
			portfolioCheckbox: [...data],
		});
	}

	openOrderCheckboxHandler(data) {
		this.setState({
			openOrderCheckbox: [...data],
		});
	}

	transactionHistoryCheckboxHandler(data) {
		this.setState({
			transactionHistoryCheckbox: [...data],
		});
	}

	render() {
		let {account, hiddenAssets, settings, orders} = this.props;
		let {shownAssets} = this.state;

		if (!account) {
			return null;
		}

		const preferredUnit =
			settings.get('unit') || this.props.core_asset.get('symbol');

		let call_orders = [],
			collateral = {},
			debt = {};

		if (account.toJS && account.has('call_orders'))
			call_orders = account.get('call_orders').toJS();
		let includedPortfolioList, hiddenPortfolioList;
		let account_balances = account.get('balances');

		let includedBalancesList = Immutable.List(),
			hiddenBalancesList = Immutable.List();
		call_orders.forEach((callID) => {
			let position = ChainStore.getObject(callID);
			if (position) {
				let collateralAsset = position.getIn([
					'call_price',
					'base',
					'asset_id',
				]);
				if (!collateral[collateralAsset]) {
					collateral[collateralAsset] = parseInt(
						position.get('collateral'),
						10
					);
				} else {
					collateral[collateralAsset] += parseInt(
						position.get('collateral'),
						10
					);
				}
				let debtAsset = position.getIn(['call_price', 'quote', 'asset_id']);
				if (!debt[debtAsset]) {
					debt[debtAsset] = parseInt(position.get('debt'), 10);
				} else {
					debt[debtAsset] += parseInt(position.get('debt'), 10);
				}
			}
		});

		if (account_balances) {
			// Filter out balance objects that have 0 balance or are not included in open orders
			account_balances = account_balances.filter((a, index) => {
				let balanceObject = ChainStore.getObject(a);
				if (balanceObject && !balanceObject.get('balance') && !orders[index]) {
					return false;
				} else {
					return true;
				}
			});

			// Separate balances into hidden and included
			account_balances.forEach((a, asset_type) => {
				const asset = ChainStore.getAsset(asset_type);

				let assetName = '';
				let filter = '';

				if (this.state.filterValue) {
					filter = this.state.filterValue
						? String(this.state.filterValue).toLowerCase()
						: '';
					assetName = asset.get('symbol').toLowerCase();
					let {isBitAsset} = utils.replaceName(asset);
					if (isBitAsset) {
						assetName = 'bit' + assetName;
					}
				}

				if (hiddenAssets.includes(asset_type) && assetName.includes(filter)) {
					hiddenBalancesList = hiddenBalancesList.push(a);
				} else if (assetName.includes(filter)) {
					includedBalancesList = includedBalancesList.push(a);
				}
			});
		}

		let totalChange = parseFloat(
			accountUtils.getTotalBalanceChange(includedBalancesList, preferredUnit)
		);
		let dayChangeClass =
			parseFloat(totalChange) === 0
				? ''
				: parseFloat(totalChange) < 0
				? 'change-down'
				: 'change-up';

		let totalChangeElement = !isNaN(totalChange) ? (
			<span className={'value ' + dayChangeClass}>
				{dayChangeClass === 'change-up' && <ArrowUpOutlined />}
				{dayChangeClass === 'change-down' && <ArrowDownOutlined />}
				{dayChangeClass === '' && <ArrowRightOutlined />}
				<FormattedNumber
					style="decimal"
					value={Math.abs(totalChange)}
					minimumFractionDigits={2}
					maximumFractionDigits={2}
				/>
				%
			</span>
		) : (
			<span className={'value ' + dayChangeClass}>-</span>
		);

		let usdTotal = parseFloat(
			accountUtils.getUsd(
				accountUtils.getTotalBalance(includedBalancesList, preferredUnit),
				preferredUnit
			)
		).toFixed(2);

		let portfolioActiveAssetsBalance = (
			<TotalBalanceValue noTip balances={includedBalancesList} hide_asset />
		);
		let ordersValue = (
			<TotalBalanceValue
				noTip
				balances={Immutable.List()}
				openOrders={orders}
				hide_asset
			/>
		);
		const totalValueText = (
			<TranslateWithLinks
				noLink
				string="account.total"
				keys={[{type: 'asset', value: preferredUnit, arg: 'asset'}]}
			/>
		);

		includedPortfolioList = (
			<AccountPortfolioList
				balanceList={includedBalancesList}
				optionalAssets={this.state.alwaysShowAssets}
				visible={true}
				preferredUnit={preferredUnit}
				coreAsset={this.props.core_asset}
				coreSymbol={this.props.core_asset.get('symbol')}
				hiddenAssets={hiddenAssets}
				orders={orders}
				account={this.props.account}
				isMyAccount={this.props.isMyAccount}
				balances={this.props.balances}
				portfolioCheckbox={this.state.portfolioCheckbox}
				viewSettings={this.props.viewSettings}
				hideZeroBalance={this.state.hideZeroBalance}
				filterValue={this.state.filterValue}
			/>
		);

		hiddenPortfolioList = (
			<AccountPortfolioList
				balanceList={hiddenBalancesList}
				optionalAssets={this.state.alwaysShowAssets}
				visible={false}
				preferredUnit={preferredUnit}
				coreSymbol={this.props.core_asset.get('symbol')}
				settings={settings}
				hiddenAssets={hiddenAssets}
				orders={orders}
				account={this.props.account}
				isMyAccount={this.props.isMyAccount}
				balances={this.props.balances}
				viewSettings={this.props.viewSettings}
				enabledColumns={this.state.enabledColumns}
				hideZeroBalance={this.state.hideZeroBalance}
				filterValue={this.state.filterValue}
			/>
		);

		// add unicode non-breaking space as subtext to Activity Tab to ensure that all titles are aligned
		// horizontally
		// const hiddenSubText = '\u00a0';

		const onNavButtonClick = (selectedDisplay) => {
			this.setState({currentDisplay: selectedDisplay});
			this.props.history.replace(`?currentDisplay=${selectedDisplay}`);
		};
		const showAssetPercent = settings.get('showAssetPercent', false);

		const {currentDisplay} = this.state;
		const CheckboxGroup = Checkbox.Group;
		const portfolioOption = [
			{
				label: `${counterpart.translate('exchange.price')} (${preferredUnit})`,
				value: `Price (${this.props.settings.get('unit')})`,
			},
			{label: counterpart.translate('account.hour_24_short'), value: '24Hr'},
			{label: counterpart.translate('account.qty'), value: 'Qty'},
			{
				label: `${counterpart.translate(
					'exchange.value'
				)} (${this.props.settings.get('unit')})`,
				value: `Value (${this.props.settings.get('unit')})`,
			},
			{label: counterpart.translate('transfer.send'), value: 'Send'},
			{label: counterpart.translate('account.trade'), value: 'Trade'},
			{label: counterpart.translate('exchange.deposit'), value: 'Deposit'},
			{label: counterpart.translate('exchange.withdraw'), value: 'Withdraw'},
		];

		if (showAssetPercent) {
			portfolioOption.splice(4, 0, {
				label: counterpart.translate('account.percent'),
				value: 'Percent of Total Supply',
			});
		}

		const openOrdersOption = [
			{
				label: `${counterpart.translate(
					'exchange.buy'
				)} / ${counterpart.translate('exchange.sell')}`,
				value: 'Buy / Sell',
			},
			{
				label: `${counterpart.translate(
					'transaction.from'
				)} / ${counterpart.translate('transaction.to')}`,
				value: 'From / To',
			},
			{label: counterpart.translate('exchange.price'), value: 'Price'},
			{
				label: counterpart.translate('exchange.price_market'),
				value: 'Market Price',
			},
			{
				label: `${counterpart.translate(
					'account.orders'
				)} ${counterpart.translate('transaction.trxTypes.date')}`,
				value: 'Orders Date',
			},
			{
				label: `${counterpart.translate(
					'account.expiry'
				)} ${counterpart.translate('transaction.trxTypes.date')}`,
				value: 'Expiry Date',
			},
			{label: counterpart.translate('exchange.actions'), value: 'Action'},
		];

		const transactionHistoryOption = [
			{value: 'Operation', label: counterpart.translate('explorer.block.op')},
			{
				value: 'Info',
				label: counterpart.translate('account.transactions.info'),
			},
			{value: 'Fee', label: counterpart.translate('account.transactions.fee')},
			{
				value: 'Time',
				label: counterpart.translate('account.transactions.time'),
			},
		];

		const menuPortFolio = (
			<div className="portfolio-checkbox-class">
				<CaretUpOutlined />
				<h3>
					<Translate content="customizable_table.customize_the_columns" />
				</h3>
				<CheckboxGroup
					options={portfolioOption}
					value={this.state.portfolioCheckbox}
					onChange={this.portfolioCheckboxHandler.bind(this)}
				/>
			</div>
		);

		const menuOpenorders = (
			<div className="portfolio-checkbox-class">
				<CaretUpOutlined />
				<h3>
					<Translate content="customizable_table.customize_the_columns" />
				</h3>
				<CheckboxGroup
					options={openOrdersOption}
					value={this.state.openOrderCheckbox}
					onChange={this.openOrderCheckboxHandler.bind(this)}
				/>
			</div>
		);

		const menuTransactionHistory = (
			<div className="portfolio-checkbox-class">
				<CaretUpOutlined />
				<h3>
					<Translate content="customizable_table.customize_the_columns" />
				</h3>
				<CheckboxGroup
					options={transactionHistoryOption}
					value={this.state.transactionHistoryCheckbox}
					onChange={this.transactionHistoryCheckboxHandler.bind(this)}
				/>
			</div>
		);

		const menu = (
			<div>
				<Menu
					items={[
						{
							key: '1',
							label: (
								<Link
									to="#"
									onClick={() => this.props.history.push('/onramperwallet')}
								>
									{counterpart.translate('account.fund_wallet_with_card')}
								</Link>
							),
						},
						{
							key: '2',
							label: (
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={`${process.env.META1_SUPPORT_URL}hc/en-us/articles/11896445410459-How-to-Deposit-into-Your-META-LITE-Wallet`}
								>
									{counterpart.translate('account.fund_wallet_with_crypto')}
								</a>
							),
						},
						{
							key: '3',
							label: (
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={`${process.env.META1_VISION_URL}private-digital-currency/meta-1-coin`}
								>
									{counterpart.translate('account.fund_wallet_with_wire')}
								</a>
							),
						},
					]}
				/>
			</div>
		);
		return (
			<div className="account-overview">
				<div
					css={(theme) => ({
						borderBottom: `1px solid ${theme.colors.borderColor} `,
					})}
				>
					<PageHeader
						title={counterpart.translate('explorer.assets.title')}
						showDivider={false}
						level={4}
					/>

					<div className="tab-controller">
						<Space wrap className="fund-wallet-tab">
							<StyledButton
								className={
									currentDisplay === 'portfolio' ? 'primary' : 'transparent'
								}
								onClick={() => {
									onNavButtonClick('portfolio');
								}}
							>
								<Translate content="account.portfolio" />
							</StyledButton>
							<StyledButton
								className={
									currentDisplay === 'openOrders' ? 'primary' : 'transparent'
								}
								onClick={() => {
									onNavButtonClick('openOrders');
								}}
							>
								<Translate content="account.open_orders" />
							</StyledButton>
							<StyledButton
								className={
									currentDisplay === 'transactionHistory'
										? 'primary'
										: 'transparent'
								}
								onClick={() => {
									onNavButtonClick('transactionHistory');
								}}
							>
								<Translate content="account.transaction_history" />
							</StyledButton>

							{/*{account.get('proposals') && account.get('proposals').size ? (
								<StyledButton
									className={
										currentDisplay === 'proposals' ? 'primary' : 'transparent'
									}
									onClick={() => {
										onNavButtonClick('proposals');
									}}
								>
									Proposals
								</StyledButton>
							) : null}*/}
						</Space>

						<Space align="start" className="fund-wallet">
							<Dropdown
								overlayClassName="dropdown-menu-sec"
								overlay={menu}
								placement="bottomRight"
								buttonType="primary"
							>
								<StyledButton buttonType="primary">
									{counterpart.translate('account.fund_wallet')}
									<CaretDownFilled />
								</StyledButton>
							</Dropdown>

							{currentDisplay === 'portfolio' && (
								<div className="overview-settings dropdown-btn-class">
									<Dropdown
										overlay={menuPortFolio}
										overlayClassName="custom-dropdown-class"
									>
										<div className="icon-class">
											<SettingFilled />
											<CaretDownFilled />
										</div>
									</Dropdown>
								</div>
							)}
							{currentDisplay === 'openOrders' && (
								<div className="overview-settings dropdown-btn-class">
									<Dropdown
										overlay={menuOpenorders}
										overlayClassName="custom-dropdown-class"
									>
										<div className="icon-class">
											<SettingFilled />
											<CaretDownFilled />
										</div>
									</Dropdown>
								</div>
							)}
							{currentDisplay === 'transactionHistory' && (
								<div className="overview-settings dropdown-btn-class">
									<Dropdown
										overlay={menuTransactionHistory}
										overlayClassName="custom-dropdown-class"
									>
										<div className="icon-class">
											<SettingFilled />
											<CaretDownFilled />
										</div>
									</Dropdown>
								</div>
							)}
							{/* {currentDisplay === 'portfolio' && <Dropdown overlay={menuPortFolio} ><SettingFilled /></Dropdown>} */}

							{/* {currentDisplay === 'portfolio' && <Select
								style={{width: '72px'}}
								suffixIcon={<CaretDownFilled />}
								defaultValue="setting"
								className="overview-settings"
							>
								<Option value="name">Name</Option>
								<Option value="qty">Qty</Option>
								<Option value="valueKey">value</Option>
								<Option value="price">Price</Option>
								<Option value="trade">Trade</Option>
								<Option value="send">Send</Option>
								<Option value="deposit">Deposit</Option>
							</Select> } */}
						</Space>
					</div>
				</div>
				<div className="transaction-table">
					{currentDisplay === 'portfolio' && (
						<>
							<div
								className="portfolio header-selector"
								css={() => ({
									marginBottom: '1rem',
								})}
							>
								<div className="estimated-balance">
									<Translate content="account.estimate_balance" />
									<div className="total">
										{portfolioActiveAssetsBalance}&nbsp;{preferredUnit}
										{!isNaN(usdTotal) && (
											<div className="usd-total">≈ ${usdTotal}</div>
										)}
										{totalChangeElement}
									</div>
								</div>
								<div className="filter inline-block">
									<div className="hide-switch">
										<Translate content="account.hide_zero_balance" />
										<Switch
											style={{marginLeft: 16}}
											checked={this.state.hideZeroBalance}
											onChange={this.handleHideZeroBalance.bind(this)}
										/>
									</div>
									<SearchInput
										placeholder={counterpart.translate('icons.zoom')}
										value={this.state.filterValue}
										onChange={this._handleFilterInput}
									/>
								</div>
							</div>
							<div>
								{shownAssets != 'visual' ? (
									shownAssets === 'hidden' && hiddenBalancesList.size ? (
										'hiddenPortfolioList'
									) : (
										includedPortfolioList
									)
								) : (
									<AccountTreemap balanceObjects={includedBalancesList} />
								)}
							</div>
						</>
					)}

					{currentDisplay === 'openOrders' && (
						<AccountOrders
							{...this.props}
							openOrderCheckbox={this.state.openOrderCheckbox}
						>
							<div className="total-value">
								<span className="text">{totalValueText}</span>
								<span className="value">{ordersValue}</span>
							</div>
						</AccountOrders>
					)}

					{currentDisplay === 'transactionHistory' && (
						<RecentTransactions
							accountsList={Immutable.fromJS([account.get('id')])}
							compactView={false}
							showMore={true}
							fullHeight={true}
							showFilters={true}
							showAll={true}
							dashboard
							transactionHistoryCheckbox={this.state.transactionHistoryCheckbox}
						/>
					)}

					{/*{currentDisplay === 'proposals' && (
						<div>
							<div
								onClick={this._toggleHideProposal.bind(this)}
								style={{cursor: 'pointer'}}
							>
								<Tooltip
									title={counterpart.translate('tooltip.propose_unhide')}
									placement="bottom"
								>
									<Switch
										style={{margin: 16}}
										checked={this.state.hideFishingProposals}
										onChange={this._toggleHideProposal.bind(this)}
									/>
									<Translate content="account.deactivate_suspicious_proposals" />
								</Tooltip>
							</div>
							<Proposals
								className="dashboard-table"
								account={account}
								hideFishingProposals={this.state.hideFishingProposals}
							/>
						</div>
					)}*/}
				</div>

				{/* <div className="grid-content app-tables no-padding" ref="appTables">
					<div className="content-block small-12">
						<div className="tabs-container generic-bordered-box">
							<Tabs
								defaultActiveTab={0}
								segmented={false}
								setting="overviewTab"
								className="account-tabs"
								tabsClass="account-overview no-padding bordered-header content-block"
							>
								<Tab
									title="account.portfolio"
									subText={portfolioActiveAssetsBalance}
								></Tab>

								<Tab title="account.open_orders" subText={ordersValue}>
									<AccountOrders {...this.props}>
										<div className="total-value">
											<span className="text">{totalValueText}</span>
											<span className="value">{ordersValue}</span>
										</div>
									</AccountOrders>
								</Tab>
								<Tab title="account.activity" subText={hiddenSubText}>
									<RecentTransactions
										accountsList={Immutable.fromJS([account.get('id')])}
										compactView={false}
										showMore={true}
										fullHeight={true}
										limit={100}
										showFilters={true}
										dashboard
									/>
								</Tab>

								{account.get('proposals') && account.get('proposals').size ? (
									<Tab
										title="explorer.proposals.title"
										subText={String(
											account.get('proposals')
												? account.get('proposals').size
												: 0
										)}
									>
										<div
											onClick={this._toggleHideProposal.bind(this)}
											style={{cursor: 'pointer'}}
										>
											<Tooltip
												title={counterpart.translate('tooltip.propose_unhide')}
												placement="bottom"
											>
												<Switch
													style={{margin: 16}}
													checked={this.state.hideFishingProposals}
													onChange={this._toggleHideProposal.bind(this)}
												/>
												<Translate content="account.deactivate_suspicious_proposals" />
											</Tooltip>
										</div>
										<Proposals
											className="dashboard-table"
											account={account}
											hideFishingProposals={this.state.hideFishingProposals}
										/>
									</Tab>
								) : null}
							</Tabs>
						</div>
					</div>
				</div> */}
			</div>
		);
	}
}

AccountOverview = AssetWrapper(AccountOverview, {propNames: ['core_asset']});

export default class AccountOverviewWrapper extends React.Component {
	render() {
		return <BalanceWrapper {...this.props} wrap={AccountOverview} />;
	}
}
