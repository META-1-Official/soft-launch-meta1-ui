import React from 'react';
import Immutable from 'immutable';
import Translate from 'react-translate-component';
import TotalBalanceValue from '../Utility/TotalBalanceValue';
import MarginPositionsTable from './MarginPositionsTable';
import {RecentTransactions} from './RecentTransactions';
import Proposals from 'components/Account/Proposals';
import {ChainStore} from 'meta1-vision-js';
import SettingsActions from 'actions/SettingsActions';
import utils from 'common/utils';
import accountUtils from 'common/account_utils';
import {Tabs, Tab} from '../Utility/Tabs';
import AccountOrders from './AccountOrders';
import cnames from 'classnames';
import TranslateWithLinks from '../Utility/TranslateWithLinks';
import {checkMarginStatus} from 'common/accountHelper';
import BalanceWrapper from './BalanceWrapper';
import AccountTreemap from './AccountTreemap';
import AssetWrapper from '../Utility/AssetWrapper';
import AccountPortfolioList from './AccountPortfolioList';
import {Market24HourChangeComponent} from '../Utility/MarketChangeComponent';
import {Link} from 'react-router-dom';
import {
	Space,
	Switch,
	Tooltip,
	Select,
	Menu,
	Checkbox,
	Button,
	CheckboxGroup,
	Dropdown,
} from 'antd';
const {Option} = Select;
import counterpart from 'counterpart';
import SearchInput from '../Utility/SearchInput';
import PageHeader from 'components/PageHeader/PageHeader';
import StyledButton from 'components/Button/Button';
import AssetStore from 'stores/AssetStore';
import {FormattedNumber} from 'react-intl';
import {
	ArrowRightOutlined,
	ArrowUpOutlined,
	ArrowDownOutlined,
	SettingFilled,
	CaretDownFilled,
	CaretUpOutlined,
} from '@ant-design/icons';
import MarketsStore from 'stores/MarketsStore';

class AccountOverview extends React.Component {
	constructor(props) {
		super();
		this.state = {
			shownAssets: props.viewSettings.get('shownAssets', 'active'),
			alwaysShowAssets: [
				'META1',
				'USDT',
				'BTC',
				'BNB',
				'LTC',
				'XLM',
				'EOS',
				'ETH',
			],
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

	componentWillMount() {
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

	componentWillReceiveProps(np) {
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

		let portfolioHiddenAssetsBalance = (
			<TotalBalanceValue noTip balances={hiddenBalancesList} hide_asset />
		);

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
		let marginValue = (
			<TotalBalanceValue
				noTip
				balances={Immutable.List()}
				debt={debt}
				collateral={collateral}
				hide_asset
			/>
		);
		let debtValue = (
			<TotalBalanceValue
				noTip
				balances={Immutable.List()}
				debt={debt}
				hide_asset
			/>
		);
		let collateralValue = (
			<TotalBalanceValue
				noTip
				balances={Immutable.List()}
				collateral={collateral}
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
		const hiddenSubText = '\u00a0';

		const onNavButtonClick = (selectedDisplay) => {
			this.setState({currentDisplay: selectedDisplay});
			this.props.history.replace(`?currentDisplay=${selectedDisplay}`);
		};
		const showAssetPercent = settings.get('showAssetPercent', false);

		const {currentDisplay} = this.state;
		const CheckboxGroup = Checkbox.Group;
		const portfolioOption = [
			`Price (${this.props.settings.get('unit')})`,
			'24Hr',
			'Qty',
			`Value (${this.props.settings.get('unit')})`,
			'Send',
			'Trade',
			'Deposit',
		];
		if (showAssetPercent) {
			portfolioOption.splice(4, 0, 'Percent of Total Supply');
		}
		const openOrdersOption = [
			'Buy / Sell',
			'From / To',
			'Price',
			'Market Price',
			'Orders Date',
			'Expiry Date',
			'Action',
		];
		const transactionHistoryOption = ['Operation', 'Info', 'Fee', 'Time'];
		const menuPortFolio = (
			<div className="portfolio-checkbox-class">
				<CaretUpOutlined />
				<h3>Customize the Columns</h3>
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
				<h3>Customize the Columns</h3>
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
				<h3>Customize the Columns</h3>
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
									Fund Wallet With Credit/Debit Card
								</Link>
							),
						},
						{
							key: '2',
							label: (
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={`${process.env.META1_SUPPORT_URL}how-to-deposit-into-your-meta-lite-wallet`}
								>
									Fund Wallet With Cryptocurrency
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
									Fund Wallet with Wire or Check
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
					<PageHeader title={'Your Assets'} showDivider={false} level={4} />

					<div className="tab-controller">
						<Space wrap>
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
								Open Orders
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
								Transaction History
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
						<Space align="start">
							<Dropdown
								overlayClassName="dropdown-menu-sec"
								overlay={menu}
								placement="bottomRight"
								buttonType="primary"
							>
								<StyledButton buttonType="primary">
									Fund Wallet
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
				<div
					css={(theme) => ({
						padding: '1rem  2rem',
					})}
				>
					{currentDisplay === 'portfolio' && (
						<>
							<div
								className="portfolio header-selector"
								css={(theme) => ({
									marginBottom: '1rem',
								})}
							>
								<div className="estimated-balance">
									<p>Estimated Balance</p>
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
										<div>Hide Zero Balances</div>
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
