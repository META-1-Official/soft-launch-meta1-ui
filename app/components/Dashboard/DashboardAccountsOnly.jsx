import React from 'react';
import Immutable from 'immutable';
import DashboardList from './DashboardList';
import {RecentTransactions} from '../Account/RecentTransactions';
import LoadingIndicator from '../LoadingIndicator';
import LoginSelector from '../LoginSelector';
import SettingsActions from 'actions/SettingsActions';
import SettingsStore from 'stores/SettingsStore';
import AccountStore from 'stores/AccountStore';
import MarketsStore from 'stores/MarketsStore';
import {Tabs, Typography} from 'antd';
import AltContainer from 'alt-container';
import Translate from 'react-translate-component';

const {Title} = Typography;

class AccountsContainer extends React.Component {
	render() {
		return (
			<AltContainer
				stores={[AccountStore, SettingsStore, MarketsStore]}
				inject={{
					contacts: () => {
						return AccountStore.getState().accountContacts;
					},
					myActiveAccounts: () => {
						return AccountStore.getState().myActiveAccounts;
					},
					myHiddenAccounts: () => {
						return AccountStore.getState().myHiddenAccounts;
					},
					accountsReady: () => {
						return (
							AccountStore.getState().accountsLoaded &&
							AccountStore.getState().refsLoaded
						);
					},
					passwordlessAccount: () => {
						return AccountStore.getState().passwordlessAccount;
					},
					currentEntry: SettingsStore.getState().viewSettings.get(
						'dashboardEntry',
						'accounts'
					),
				}}
			>
				<Accounts {...this.props} />
			</AltContainer>
		);
	}
}

class Accounts extends React.Component {
	constructor(props) {
		super();

		this.state = {
			width: null,
			currentTab: 'ActivePermissions',
			showIgnored: false,
			currentEntry: props.currentEntry,
			transactionHistoryCheckbox: ['Operation'],
		};

		this._setDimensions = this._setDimensions.bind(this);
	}

	componentDidMount() {
		this._setDimensions();

		window.addEventListener('resize', this._setDimensions, {
			capture: false,
			passive: true,
		});
	}

	shouldComponentUpdate(nextProps, nextState) {
		return (
			nextProps.myActiveAccounts !== this.props.myActiveAccounts ||
			nextProps.contacts !== this.props.contacts ||
			nextProps.ignoredAccounts !== this.props.ignoredAccounts ||
			nextProps.passwordlessAccount !== this.props.passwordlessAccount ||
			nextState.width !== this.state.width ||
			nextProps.accountsReady !== this.props.accountsReady ||
			nextState.showIgnored !== this.state.showIgnored ||
			nextState.currentEntry !== this.state.currentEntry
		);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this._setDimensions);
	}

	_setDimensions() {
		let width = window.innerWidth;

		if (width !== this.state.width) {
			this.setState({width});
		}
	}

	_onToggleIgnored() {
		this.setState({
			showIgnored: !this.state.showIgnored,
		});
	}

	_onSwitchType(type) {
		this.setState({
			currentEntry: type,
		});
		SettingsActions.changeViewSetting({
			dashboardEntry: type,
		});
	}

	_onTabChange = (e) => {
		this.setState({
			currentTab: e,
		});
	};

	render() {
		let {
			myActiveAccounts,
			myHiddenAccounts,
			accountsReady,
			passwordlessAccount,
		} = this.props;
		let {width, showIgnored} = this.state;
		if (passwordlessAccount && !myActiveAccounts.has(passwordlessAccount)) {
			myActiveAccounts = myActiveAccounts.add(passwordlessAccount);
		}
		let names = myActiveAccounts.toArray().sort();
		if (passwordlessAccount && names.indexOf(passwordlessAccount) === -1)
			names.push(passwordlessAccount);
		let ignored = myHiddenAccounts.toArray().sort();

		let accountCount =
			myActiveAccounts.size +
			myHiddenAccounts.size +
			(passwordlessAccount ? 1 : 0);

		if (!accountsReady) {
			return <LoadingIndicator />;
		}

		if (!accountCount) {
			return <LoginSelector />;
		}

		const contacts = this.props.contacts.toArray();
		return (
			<div className="dashboard-wallets">
				<div
					css={(theme) => ({
						padding: `1rem 2rem`,
						borderBottom: `1px solid ${theme.colors.borderColor}`,
						color: theme.colors.themeOpositeColor,
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					})}
				>
					<Title
						css={{
							margin: '0px !important',
							fontSize: '24px !important',
							fontWeight: '400 !important',
						}}
						level={2}
					>
						<Translate content="account.accounts" />
					</Title>
				</div>
				<div className="content">
					<Tabs
						className="dashboard-wallets-tabs"
						defaultActiveKey="1"
						onChange={this._onTabChange}
					>
						<Tabs.TabPane
							tab={<Translate content="account.accounts" />}
							key="accounts"
						>
							<div className="wallets-accounts">
								<DashboardList
									accounts={Immutable.List(names)}
									passwordlessAccount={passwordlessAccount}
									ignoredAccounts={Immutable.List(ignored)}
									width={width}
									onToggleIgnored={this._onToggleIgnored.bind(this)}
									showIgnored={showIgnored}
									showMyAccounts={true}
								/>
							</div>
						</Tabs.TabPane>
						<Tabs.TabPane
							tab={<Translate content="account.contacts" />}
							key="contacts"
						>
							<div className="wallets-contacts">
								<DashboardList
									accounts={contacts}
									passwordlessAccount={passwordlessAccount}
									ignoredAccounts={Immutable.List(ignored)}
									width={width}
									onToggleIgnored={this._onToggleIgnored.bind(this)}
									showIgnored={showIgnored}
									isContactsList={true}
								/>
							</div>
						</Tabs.TabPane>
						{/* <Tabs.TabPane
							tab={<Translate content="account.recent" />}
							key="recent"
						>
							<div className="wallets-recent">
								<RecentTransactions
									accountsList={myActiveAccounts}
									limit={10}
									compactView={false}
									fullHeight={true}
									showFilters={true}
									dashboard
									transactionHistoryCheckbox={
										this.state.transactionHistoryCheckbox
									}
								/>
							</div>
						</Tabs.TabPane> */}
					</Tabs>
				</div>
			</div>
		);
	}
}

const DashboardAccountsOnly = (props) => {
	return <AccountsContainer {...props} onlyAccounts />;
};

export default DashboardAccountsOnly;
