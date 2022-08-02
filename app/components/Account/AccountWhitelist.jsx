import React from 'react';
import {ChainStore} from 'meta1-vision-js';
import SettingsStore from 'stores/SettingsStore';
import {connect} from 'alt-react';
import {Tabs} from 'antd';
import constants from 'chain/account_constants.js';
import AccountSelector from '../Account/AccountSelector';
import Immutable from 'immutable';
import Translate from 'react-translate-component';
import ChainTypes from '../Utility/ChainTypes';
import BindToChainState from '../Utility/BindToChainState';
import LinkToAccountById from '../Utility/LinkToAccountById';
import WalletApi from 'api/WalletApi';
import WalletDb from 'stores/WalletDb.js';
import PageHeader from 'components/PageHeader/PageHeader';

class AccountRow extends React.Component {
	static propTypes = {
		account: ChainTypes.ChainAccount.isRequired,
	};

	static defaultProps = {
		tempComponent: 'tr',
	};

	render() {
		let {account, onRemove} = this.props;

		return (
			<tr>
				<td>{this.props.index}</td>
				<td>{account.get('id')}</td>
				<td>
					<LinkToAccountById account={account.get('id')} />
				</td>
				{onRemove ? (
					<td>
						<button
							onClick={onRemove.bind(this, account.get('id'))}
							className="button outline"
						>
							Remove
						</button>
					</td>
				) : null}
			</tr>
		);
	}
}
AccountRow = BindToChainState(AccountRow);

class AccountList extends React.Component {
	_onRemove(listing, account, e) {
		if (account) {
			let currentState = this.props.getCurrentState(account);
			let tr = WalletApi.new_transaction();
			tr.add_type_operation('account_whitelist', {
				fee: {
					amount: 0,
					asset_id:
						ChainStore.assets_by_symbol.get(
							this.props.settings.get('fee_asset')
						) || '1.3.0',
				},
				authorizing_account: this.props.account.get('id'),
				account_to_list: account,
				new_listing: currentState - constants.account_listing[listing],
			});
			WalletDb.process_transaction(tr, null, true);
		}
	}

	render() {
		let {removeButton, white, list} = this.props;

		let rows = list
			.map((account, index) => {
				return (
					<AccountRow
						key={account}
						onRemove={
							removeButton
								? this._onRemove.bind(
										this,
										white ? 'white_listed' : 'black_listed'
								  )
								: null
						}
						account={account}
						index={index + 1}
					/>
				);
			})
			.toArray();

		let showHeaders = true;
		if (!rows.length) {
			showHeaders = false;
			rows.push(
				<tr key="empty">
					<td
						style={{padding: '1rem 0'}}
						colSpan={removeButton ? 4 : 3}
						css={(theme) => ({
							backgroundColor: 'transparent !important',
						})}
					>
						<Translate
							css={(theme) => ({
								color: theme.colors.primaryColor,
								fontSize: '18px',
							})}
							content={this.props.emptyText}
							account={this.props.account.get('name')}
						/>
						<div
							css={{
								width: '100%',
								display: 'flex',
								flexDirection: 'column',
								marginTop: '20px',
								marginBottom: '20px',
								alignItems: 'center',
							}}
						>
							<div
								css={{
									width: 90,
									height: 100,
									backgroundImage: `url('data:image/png;base64,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')`,
								}}
							/>
						</div>
						<span css={{fontSize: '20px', color: 'rgba(255, 255, 255, 0.5)'}}>
							No Data
						</span>
					</td>
				</tr>
			);
		}

		return (
			<table
				className="table compact dashboard-table"
				css={(theme) => ({
					backgroundColor: 'transparent',
				})}
			>
				{showHeaders ? (
					<thead
						css={(theme) => ({
							tr: {
								backgroundColor: theme.colors.tableColumnColor,
								border: `2px solid ${theme.colors.borderColor}`,
								borderBottom: `2px solid ${theme.colors.borderColor}`,
								padding: '15px 10px',
								textAlign: 'left',
								fontSize: '13px !important',
							},
						})}
					>
						<tr>
							<th>#</th>
							<th>
								<Translate content="account.id" />
							</th>
							<th>
								<Translate content="account.name" />
							</th>
							{removeButton ? <th /> : null}
						</tr>
					</thead>
				) : null}
				<tbody>{rows}</tbody>
			</table>
		);
	}
}

AccountList = connect(AccountList, {
	listenTo() {
		return [SettingsStore];
	},
	getProps() {
		return {
			settings: SettingsStore.getState().settings,
		};
	},
});

class AccountWhitelist extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			accountName: '',
			accountToList: null,
			currentTab: 'Whitelist',
		};
	}

	_getCurrentState(id) {
		let {account} = this.props;
		let white = account.get('whitelisted_accounts') || Immutable.List();
		let black = account.get('blacklisted_accounts') || Immutable.List();
		let current = constants.account_listing.no_listing;

		if (white.includes(id)) {
			current += constants.account_listing.white_listed;
		}

		if (black.includes(id)) {
			current += constants.account_listing.black_listed;
		}

		return current;
	}

	_onAdd(listing, e) {
		let {accountToList} = this.state;
		let {account} = this.props;

		let currentState = this._getCurrentState(accountToList);

		if (accountToList) {
			let tr = WalletApi.new_transaction();
			tr.add_type_operation('account_whitelist', {
				fee: {
					amount: 0,
					asset_id: '1.3.0',
				},
				authorizing_account: account.get('id'),
				account_to_list: accountToList,
				new_listing: currentState + constants.account_listing[listing],
			});
			WalletDb.process_transaction(tr, null, true);
		}
	}

	_onAccountFound(account) {
		this.setState({
			accountName: account ? account.get('name') : null,
			accountToList: account ? account.get('id') : null,
		});
	}

	_onAccountChanged(account) {
		console.log('account changed:', account);
		this.setState({
			accountName: account,
			accountToList: null,
		});
	}

	onTabChange = (e) => {
		this.setState({
			currentTab: e,
		});
	};

	render() {
		let {account} = this.props;
		let {accountName, currentTab} = this.state;

		return (
			<>
				<div>
					<PageHeader title={currentTab} level={2} showDivider />
				</div>
				<div className="account-whitelist">
					<Tabs
						defaultActiveKey="1"
						animated={false}
						onChange={this.onTabChange}
						css={(theme) => ({
							'.ant-tabs-nav': {
								margin: '0 0 0px 0',
							},
							'.ant-tabs-content-holder': {
								border: `1px solid ${theme.colors.borderColor}`,
								borderRadius: '7px',
								padding: '3rem',
								[`@media (max-width: ${theme.sizes.lg})`]: {
									padding: '1rem',
								},
							},
						})}
					>
						<Tabs.TabPane
							tab={<Translate content="account.whitelist.title" />}
							key="Whitelist"
						>
							<div style={{paddingBottom: '1rem'}} className="small-12">
								<div>
									<AccountList
										emptyText="account.whitelist.empty"
										account={account}
										getCurrentState={this._getCurrentState.bind(this)}
										list={
											account.get('whitelisted_accounts') || Immutable.List()
										}
										removeButton
										white={true}
									/>
								</div>
								{!account.get('whitelisted_accounts') ? (
									<p className="has-error">
										Please note, whitelisting is not working yet due to
										unresolved backend issue.
									</p>
								) : null}
								<div className="account-selector-wrapper">
									<AccountSelector
										label={'account.whitelist.add'}
										accountName={accountName}
										onAccountChanged={this._onAccountFound.bind(this)}
										onChange={this._onAccountChanged.bind(this)}
										account={accountName}
										tabIndex={2}
										onAction={this._onAdd.bind(this, 'white_listed')}
										action_label="account.perm.confirm_add"
										white={false}
										typeahead={true}
										loginAccount={this.props.account_name}
										resultFrom="whitelist"
									/>
								</div>
							</div>
						</Tabs.TabPane>
						<Tabs.TabPane
							tab={<Translate content="account.whitelist.black" />}
							key="Blacklist"
						>
							<div style={{paddingBottom: '1rem'}} className="small-12">
								<div>
									<AccountList
										emptyText="account.whitelist.empty_black"
										account={account}
										getCurrentState={this._getCurrentState.bind(this)}
										list={account.get('blacklisted_accounts')}
										removeButton
									/>
								</div>
								<div className="account-selector-wrapper">
									<AccountSelector
										label={'account.whitelist.add_black'}
										accountName={accountName}
										onAccountChanged={this._onAccountFound.bind(this)}
										onChange={this._onAccountChanged.bind(this)}
										account={accountName}
										tabIndex={2}
										onAction={this._onAdd.bind(this, 'black_listed')}
										action_label="account.perm.confirm_add"
										typeahead={true}
										loginAccount={this.props.account_name}
										resultFrom="blacklist"
									/>
								</div>
							</div>
						</Tabs.TabPane>
						<Tabs.TabPane
							tab={<Translate content="account.whitelist.white_by" />}
							key="Whitelisted by"
						>
							<div style={{paddingBottom: '1rem'}} className="small-12">
								<div
									css={(theme) => ({
										padding: '2rem 1rem',
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
										[`@media (max-width: ${theme.sizes.lg})`]: {
											width: '100%',
											padding: '1rem',
										},
									})}
								>
									<AccountList
										emptyText="account.whitelist.empty_white_by"
										account={account}
										list={account.get('whitelisting_accounts')}
									/>
								</div>
							</div>
						</Tabs.TabPane>
						<Tabs.TabPane
							tab={<Translate content="account.whitelist.black_by" />}
							key="Blacklisted By"
						>
							<div
								css={(theme) => ({
									padding: '2rem 1rem',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									[`@media (max-width: ${theme.sizes.lg})`]: {
										width: '100%',
										padding: '1rem',
									},
								})}
								className="small-12"
							>
								<div>
									<AccountList
										emptyText="account.whitelist.empty_black_by"
										account={account}
										list={account.get('blacklisting_accounts')}
									/>
								</div>
							</div>
						</Tabs.TabPane>
					</Tabs>
				</div>
			</>
		);
	}
}

export default AccountWhitelist;
