import React from 'react';
import Immutable from 'immutable';
import Translate from 'react-translate-component';
import TotalBalanceValue from '../Utility/TotalBalanceValue';
import MarginPositionsTable from './MarginPositionsTable';
import {RecentTransactions} from './RecentTransactions';
import Proposals from 'components/Account/Proposals';
import {ChainStore} from 'meta1js';
import SettingsActions from 'actions/SettingsActions';
import utils from 'common/utils';
import {Tabs, Tab} from '../Utility/Tabs';
import AccountOrders from './AccountOrders';
import cnames from 'classnames';
import TranslateWithLinks from '../Utility/TranslateWithLinks';
import {checkMarginStatus} from 'common/accountHelper';
import BalanceWrapper from './BalanceWrapper';
import AccountTreemap from './AccountTreemap';
import AssetWrapper from '../Utility/AssetWrapper';
import AccountPortfolioList from './AccountPortfolioList';
import {Space, Switch, Tooltip} from 'antd';
import counterpart from 'counterpart';
import SearchInput from '../Utility/SearchInput';
import PageHeader from 'components/PageHeader/PageHeader';
import StyledButton from 'components/Button/Button';

class AccountOverview extends React.Component {
	constructor(props) {
		super();
		this.state = {
			shownAssets: props.viewSettings.get('shownAssets', 'active'),
			alwaysShowAssets: [
				'META1',
				// "USDT",
				// "CNY",
				// "OPEN.BTC",
				// "OPEN.USDT",
				// "OPEN.ETH",
				// "OPEN.MAID",
				// "OPEN.STEEM",
				// "OPEN.DASH"
			],
			hideFishingProposals: true,
			currentDisplay: 'portfolio',
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

	_changeShownAssets(shownAssets = 'active') {
		this.setState({
			shownAssets,
		});
		SettingsActions.changeViewSetting({
			shownAssets,
		});
	}

	_toggleHideProposal() {
		this.setState({
			hideFishingProposals: !this.state.hideFishingProposals,
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
				optionalAssets={
					!this.state.filterValue ? this.state.alwaysShowAssets : null
				}
				visible={true}
				preferredUnit={preferredUnit}
				coreAsset={this.props.core_asset}
				coreSymbol={this.props.core_asset.get('symbol')}
				hiddenAssets={hiddenAssets}
				orders={orders}
				account={this.props.account}
				isMyAccount={this.props.isMyAccount}
				balances={this.props.balances}
				viewSettings={this.props.viewSettings}
			/>
		);

		hiddenPortfolioList = (
			<AccountPortfolioList
				balanceList={hiddenBalancesList}
				optionalAssets={
					!this.state.filterValue ? this.state.alwaysShowAsset : null
				}
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
			/>
		);

		// add unicode non-breaking space as subtext to Activity Tab to ensure that all titles are aligned
		// horizontally
		const hiddenSubText = '\u00a0';

		const onNavButtonClick = (selectedDisplay) => {
			this.setState({
				currentDisplay: selectedDisplay,
			});
		};
		const {currentDisplay} = this.state;

		return (
			<>
				<div
					css={(theme) => ({
						borderBottom: `1px solid ${theme.colors.borderColor} `,
					})}
				>
					<PageHeader title={'Your Assets'} showDivider={false} level={4} />

					<div
						css={(theme) => ({
							display: 'flex',
							width: '100%',
							justifyContent: 'space-between',
							padding: '0rem 2rem 1.5rem 2rem',
						})}
					>
						<Space wrap>
							<StyledButton
								buttonType={
									currentDisplay === 'portfolio' ? 'primary' : 'transparent'
								}
								onClick={() => {
									onNavButtonClick('portfolio');
								}}
							>
								<Translate content="account.portfolio" />
							</StyledButton>
							<StyledButton
								buttonType={
									currentDisplay === 'openOrders' ? 'primary' : 'transparent'
								}
								onClick={() => {
									onNavButtonClick('openOrders');
								}}
							>
								Open Orders
							</StyledButton>
							<StyledButton
								buttonType={
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
						</Space>
						<Space align="start">
							<StyledButton
								buttonType="primary"
								onClick={() => this.props.history.push('/onramperwallet')}
							>
								Fund Accounts
							</StyledButton>
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
									<p>Estimateed Balance</p>
									<p className="total">
										{portfolioActiveAssetsBalance} {preferredUnit}
									</p>
								</div>
								<div className="filter inline-block">
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
						<AccountOrders {...this.props}>
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
							limit={100}
							showFilters={true}
							dashboard
						/>
					)}
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
			</>
		);
	}
}

AccountOverview = AssetWrapper(AccountOverview, {propNames: ['core_asset']});

export default class AccountOverviewWrapper extends React.Component {
	render() {
		return <BalanceWrapper {...this.props} wrap={AccountOverview} />;
	}
}
