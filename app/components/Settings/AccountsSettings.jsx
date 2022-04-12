import React from 'react';
import {Typography} from 'antd';
import {Link} from 'react-router-dom';
import AccountStore from 'stores/AccountStore';
import AccountActions from 'actions/AccountActions';
import {connect} from 'alt-react';
import utils from 'common/utils';
import Translate from 'react-translate-component';

const {Title} = Typography;
class AccountsSettings extends React.Component {
	shouldComponentUpdate(nextProps) {
		return (
			!utils.are_equal_shallow(nextProps.myAccounts, this.props.myAccounts) ||
			nextProps.hiddenAccounts !== this.props.hiddenAccounts
		);
	}

	onToggleHide(account, hide, e) {
		e.preventDefault();
		AccountActions.toggleHideAccount(account, hide);
	}

	render() {
		let {myAccounts, hiddenAccounts} = this.props;

		let accounts = hiddenAccounts.toArray().concat(myAccounts).sort();

		return (
			<>
				<div
					css={(theme) => ({
						padding: '1rem 1.5rem',
						borderBottom: `1px solid ${theme.colors.borderColor}`,
					})}
				>
					<Translate
						component="h3"
						css={(theme) => ({
							'&&': {
								color: theme.colors.primaryColor,
								marginBottom: '10px',
								fontSize: '1.25rem',
								textTransform: 'capitalize',
								marginBottom: '10px',
								fontWeight: '100',
								fontSize: '1.35rem',
							},
						})}
						content={
							'settings.' + this.props.menuEntries[this.props.activeSetting]
						}
					/>

					<Title
						css={() => ({
							'&&': {
								fontSize: '0.8125rem',
								marginTop: '10px',
							},
						})}
					>
						<Translate
							unsafe
							style={{
								paddingTop: 5,
								marginBottom: 30,
							}}
							content={`settings.${
								this.props.menuEntries[this.props.activeSetting]
							}_text`}
							className="panel-bg-color"
						/>
					</Title>
				</div>
				<div css={{padding: '1rem 1.5rem'}}>
					{!accounts.length ? (
						<div>
							<Translate content="settings.no_accounts" />
						</div>
					) : (
						<table className="table">
							<tbody>
								{accounts.map((account) => {
									let isIgnored = hiddenAccounts.has(account);
									let hideLink = (
										<a
											onClick={
												isIgnored
													? this.onToggleHide.bind(this, account, false)
													: this.onToggleHide.bind(this, account, true)
											}
										>
											<Translate
												content={
													'account.' + (isIgnored ? 'unignore' : 'ignore')
												}
											/>
										</a>
									);

									return (
										<tr key={account}>
											<td>{account}</td>
											<td>
												<Link to={`/account/${account}/permissions`}>
													<Translate content="settings.view_keys" />
												</Link>
											</td>
											<td>{hideLink}</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					)}
				</div>
			</>
		);
	}
}

AccountsSettings = connect(AccountsSettings, {
	listenTo() {
		return [AccountStore];
	},
	getProps() {
		return {
			myAccounts: AccountStore.getMyAccounts(),
			hiddenAccounts: AccountStore.getState().myHiddenAccounts,
		};
	},
});

export default AccountsSettings;
