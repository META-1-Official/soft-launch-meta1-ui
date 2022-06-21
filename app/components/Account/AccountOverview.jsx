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
import {BsGear} from 'react-icons/bs';
import {BsFillCaretDownSquareFill} from 'react-icons/bs';
import {
	AiOutlineArrowUp,
	AiOutlineArrowDown,
	AiOutlineArrowRight,
} from 'react-icons/ai';

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
			balanceList: Immutable.List(),
			hideZeroBalance: true,
			totalChange: 0,
			isPositive: false,
			isZero: true,
		};

		//this.totalChange = this.totalChange.bind(this);
		this._handleFilterInput = this._handleFilterInput.bind(this);

		// DEBUG
		//console.log("debug")
		//console.log("props overview:" + JSON.stringify(this.state))
	}

	_handleFilterInput(e) {
		this.setState({
			filterValue: e.target.value,
		});
	}

	componentDidUpdate(prevProps) {
		if (this.state.totalChange !== prevProps.totalChange) {
			this.setState({totalChange: window.totalChange});
			if (this.state.totalChange > 0) {
				this.setState({isPositive: true});
				this.setState({isZero: false});
			}
			if (this.state.totalChange < 0) {
				this.setState({isPositive: false});
				this.setState({isZero: false});
			}
			if (Math.abs(this.state.totalChange) < 0.01) {
				this.setState({isPositive: false});
				this.setState({isZero: true});
			}
			console.log('state overview:' + this.state.totalChange);
		}
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
		this.state.totalChange = setInterval(this.state.totalChange);
	}

	componentWillUnmount() {
		clearInterval(this.state.totalChange);
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
			this.state.enabledColumns !== nextState.enabledColumns ||
			this.state.totalChange !== nextState.totalChange
		);
	}

	handleHideZeroBalance = () => {
		let newHideZeroBalance = !this.state.hideZeroBalance;

		//DEBUG -> hideZeroBalance is not updating, why?
		//console.log("new: " + newHideZeroBalance);
		//console.log("state 1: " + this.state.hideZeroBalance);

		this.setState({
			hideZeroBalance: newHideZeroBalance,
		});
		SettingsActions.changeSetting({
			setting: 'hideZeroBalance',
			value: newHideZeroBalance,
		});

		//console.log("new 2: " + newHideZeroBalance);
		//console.log("state 2: " + this.state.hideZeroBalance);

		// Note: state updating correctly now

		if (newHideZeroBalance) {
			// true -> hide zero balances
			this.props.balanceList = window.balanceList;
		}
		if (!newHideZeroBalance) {
			// false -> show all assets
			this.props.balanceList = window.includedList;
		}
		//DEBUG console.log("state:" + this.state.hideZeroBalance);
	};

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

	applyStyles(flag) {
		if (flag) {
			let el = document.getElementById('total-change');
			if (el) {
				el.setAttribute('style', 'background-color: #009d55!important');
			}
		}
		if (!flag) {
			let el = document.getElementById('total-change');
			if (el) {
				el.setAttribute('style', 'background-color: #ff2929!important');
			}
		}
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
			hiddenBalancesList = Immutable.List(),
			completeAssetList = Immutable.List();
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

				completeAssetList = completeAssetList.push(a);

				if (hiddenAssets.includes(asset_type) && assetName.includes(filter)) {
					hiddenBalancesList = hiddenBalancesList.push(a);
				} else if (assetName.includes(filter)) {
					includedBalancesList = includedBalancesList.push(a);
				}

				window.balanceList = completeAssetList;
				window.includedList = includedBalancesList;

				//DEBUG
				//console.log("hiddenList: " + hiddenBalancesList);		// blank
				//console.log("includedList: " + includedBalancesList); // list being shown
				console.log('completeList: ' + completeAssetList); // same list
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
			this.setState({currentDisplay: selectedDisplay});
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
							{account.get('proposals') && account.get('proposals').size ? (
								<StyledButton
									buttonType={
										currentDisplay === 'proposals' ? 'primary' : 'transparent'
									}
									onClick={() => {
										onNavButtonClick('proposals');
									}}
								>
									Proposals
								</StyledButton>
							) : null}
						</Space>
						<Space align="start">
							<StyledButton
								buttonType="primary"
								onClick={() => this.props.history.push('/onramperwallet')}
							>
								Fund Accounts
							</StyledButton>
							<span
								onClick={() => console.log('settings!')}
								align="start"
								css={{
									marginTop: '10px',
									backgroundColor: 'rgba(36,40,52,255)',
									paddingLeft: '10px',
									paddingRight: '10px',
									paddingTop: '2px',
									paddingBottom: '10px',
									height: '100%',
									width: '100%',
									border: '0px solid white',
								}}
							>
								<BsGear
									align="center"
									css={{
										height: 'auto',
										width: '25%',
										paddingRight: '2px',
										paddingTop: '5px',
									}}
								/>
								<BsFillCaretDownSquareFill
									align="center"
									css={{
										marginLeft: '2px',
										marginBottom: '0px',
									}}
								/>
							</span>
							{/*
							<span>
								<BsGear
									css={{
										color: theme.colors.white, 
										marginLeft: '10px',
										marginRight: '0px',
										marginBottom: '8px',
									}}
								>
								</BsGear>
							</span>
							*/}
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
									<p className="total">
										{portfolioActiveAssetsBalance} {preferredUnit}
									</p>
									<span
										id="total-change"
										css={(theme) => ({
											color: 'white !important',
											background: 'gray',
											padding: '5px',
											borderRadius: '5px',
											fontSize: '14px',
											marginLeft: '10px',
											'.total-change-up': {
												backgroundColor: '#009d55 !important',
											},
											'.total-change-down': {
												backgroundColor: '#ff2929 !important',
											},
										})}
										/*	
									className={
										this.state.isPositive && !this.state.isZero ? 
										'total-change-up' : 
										'total-change-down'}
									*/

										// Style not aplying correctly with classes
										className={
											this.state.isPositive && !this.state.isZero
												? this.applyStyles(true)
												: this.applyStyles(false)
										}

										/*
										style={this.state.isPositive ? 
											'background-color: #009d55 !important;' : 
											'background-color: #ff2929 !important;'}
										*/
									>
										<span
											css={(theme) => ({
												color: 'white !important',
											})}
										>
											<span
												css={(theme) => ({
													paddingRight: '3px',
												})}
											>
												<span
													css={(theme) => ({
														marginTop: '3px',
													})}
												>
													{/* Total change is 0 */}
													{this.state.isZero ? (
														<AiOutlineArrowRight className="mt-2" />
													) : (
														''
													)}
													{/* Total change is positive */}
													{this.state.isPositive && !this.state.isZero ? (
														<AiOutlineArrowUp className="mt-2" />
													) : (
														''
													)}
													{/* Total change is negative */}
													{!this.state.isPositive && !this.state.isZero ? (
														<AiOutlineArrowDown className="mt-2" />
													) : (
														''
													)}
												</span>

												<span
													className="pl-3"
													css={(theme) => ({
														marginLeft: '3px',
													})}
												>
													{this.state.totalChange.toFixed(2).toString() + ' %'}
												</span>
											</span>
										</span>
									</span>
								</div>
								<div
									className="filter d-inline-block"
									css={(theme) => ({
										width: '30%!important;',
									})}
								>
									<Tooltip
										onClick={
											() => this.handleHideZeroBalance()
											//console.log('Hide zero balances: ' + this.state.hideZeroBalance)
										}
										key="tooltip.hide_zero_balance"
										title={counterpart.translate('wallet.hide_zero_balance')}
									>
										<div
											className="d-flex flex-row"
											css={(theme) => ({
												marginBottom: '10px',
											})}
										>
											<Translate
												className="d-inline text-left"
												css={(theme) => ({
													width: '50%',
												})}
												content="wallet.hide_zero_balance"
											/>
											<div
												//onClick={this.handleHideZeroBalance.bind(this)}
												className="hide-zero-balance"
												css={(theme) => ({
													display: 'inline-block!important',
													width: '30%',
												})}
											>
												<Switch
													className="d-inline-block"
													checked={this.state.hideZeroBalance}
													onChange={this.handleHideZeroBalance.bind(this)}
												/>
											</div>
										</div>
									</Tooltip>
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

					{currentDisplay === 'proposals' && (
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
