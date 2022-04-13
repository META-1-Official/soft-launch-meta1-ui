import React from 'react';
import {Link} from 'react-router-dom';
import {Typography, Col, Row, Collapse} from 'antd';
import Translate from 'react-translate-component';
import {ChainStore} from 'meta1js';
import ChainTypes from '../Utility/ChainTypes';
import BindToChainState from '../Utility/BindToChainState';
import Statistics from './Statistics';
import AccountActions from 'actions/AccountActions';
import TimeAgo from '../Utility/TimeAgo';
import HelpContent from '../Utility/HelpContent';
import accountUtils from 'common/account_utils';
import {Tabs, Tab} from '../Utility/Tabs';
import {getWalletName} from 'branding';
import {getWalletURL} from '../../branding';
import StyledButton from 'components/Button/Button';

const {Text, Paragraph} = Typography;
const {Panel} = Collapse;

class FeeHelp extends React.Component {
	static propTypes = {
		dprops: ChainTypes.ChainObject.isRequired,
	};
	static defaultProps = {
		dprops: '2.1.0',
	};

	render() {
		let {dprops} = this.props;

		return (
			<HelpContent
				{...this.props}
				path="components/AccountMembership"
				section="fee-division"
				nextMaintenanceTime={{
					time: dprops.get('next_maintenance_time'),
				}}
			/>
		);
	}
}
FeeHelp = BindToChainState(FeeHelp);

class AccountMembership extends React.Component {
	static propTypes = {
		account: ChainTypes.ChainAccount.isRequired,
		gprops: ChainTypes.ChainObject.isRequired,
		core_asset: ChainTypes.ChainAsset.isRequired,
	};
	static defaultProps = {
		gprops: '2.0.0',
		core_asset: '1.3.0',
	};

	upgradeAccount(id, lifetime, e) {
		e.preventDefault();
		AccountActions.upgradeAccount(id, lifetime);
	}

	componentWillMount() {
		accountUtils.getFinalFeeAsset(this.props.account, 'account_upgrade');
	}

	render() {
		let {gprops, core_asset} = this.props;
		console.log('----', member_status);
		let account = this.props.account.toJS();

		let ltr = ChainStore.getAccount(account.lifetime_referrer, false);
		if (ltr) account.lifetime_referrer_name = ltr.get('name');
		let ref = ChainStore.getAccount(account.referrer, false);
		if (ref) account.referrer_name = ref.get('name');
		let reg = ChainStore.getAccount(account.registrar, false);
		if (reg) account.registrar_name = reg.get('name');

		let account_name = account.name;

		let network_fee = account.network_fee_percentage / 100;
		let lifetime_fee = account.lifetime_referrer_fee_percentage / 100;
		let referrer_total_fee = 100 - network_fee - lifetime_fee;
		let referrer_fee =
			(referrer_total_fee * account.referrer_rewards_percentage) / 10000;
		let registrar_fee = 100 - referrer_fee - lifetime_fee - network_fee;

		let lifetime_cost =
			(gprops.getIn([
				'parameters',
				'current_fees',
				'parameters',
				8,
				1,
				'membership_lifetime_fee',
			]) *
				gprops.getIn(['parameters', 'current_fees', 'scale'])) /
			10000;

		let member_status = ChainStore.getAccountMemberStatus(this.props.account);
		let membership = 'account.member.' + member_status;
		let expiration = null;
		if (member_status === 'annual')
			expiration = (
				<span>
					(<Translate content="account.member.expires" />{' '}
					<TimeAgo time={account.membership_expiration_date} />)
				</span>
			);
		let expiration_date = account.membership_expiration_date;
		if (expiration_date === '1969-12-31T23:59:59') expiration_date = 'Never';
		else if (expiration_date === '1970-01-01T00:00:00') expiration_date = 'N/A';

		return (
			<div
				css={() => ({
					paddingBottom: '4rem',
				})}
			>
				<div
					css={(theme) => ({
						padding: '2rem',
						borderBottom: `1px solid ${theme.colors.borderColor}`,
					})}
				>
					<Text
						css={{
							color: 'white',
							fontSize: '20px',
							fontFamily: 'Poppins',
							marginBottom: '10px',
						}}
					>
						<Translate content={membership} /> {expiration}
					</Text>
					<br />
					{member_status === 'lifetime' ? null : (
						<div css={{marginTop: '10px', marginBottom: '1rem'}}>
							<Text
								css={{
									color: 'white',
									fontSize: '20px',
									fontFamily: 'Poppins',
								}}
							>
								<HelpContent
									path="components/AccountMembership"
									section="lifetime"
									feesCashback={100 - network_fee}
									price={{
										amount: lifetime_cost,
										asset: core_asset,
									}}
								/>
							</Text>
						</div>
					)}

					{member_status === 'lifetime' ? null : (
						<>
							<StyledButton buttonType="white" fill={true}>
								<Translate content="account.member.upgrade_lifetime" />
							</StyledButton>
							<>
								{true || member_status === 'annual' ? null : (
									<div
										className="button"
										onClick={this.upgradeAccount.bind(this, account.id, false)}
									>
										<Translate content="account.member.subscribe" />
									</div>
								)}
							</>
							<br />
							<hr />
							<div
								className="button"
								onClick={this.upgradeAccount.bind(this, account.id, false)}
							>
								<Translate content="account.member.subscribe" />
							</div>
						</>
					)}
					{member_status === 'lifetime' ? (
						<div
							css={{
								marginTop: '2rem',
							}}
						>
							<Text
								css={{
									color: 'white',
									fontSize: '16px',
									fontFamily: 'Poppins',
									marginBottom: '1rem',
								}}
							>
								<Translate content="account.member.referral_link" />
							</Text>
							<br />
							<div
								css={{
									marginBottom: '10px',
									marginTop: '1rem',
								}}
							>
								<Translate
									content="account.member.referral_text"
									wallet_name={getWalletName()}
									css={{
										color: 'white',
										fontSize: '14px',
										fontFamily: 'Poppins',
									}}
								/>
							</div>
							<Paragraph
								copyable
								css={{
									color: 'white',
									fontSize: '14px',
									fontFamily: 'Poppins',
								}}
							>
								{getWalletURL() + `/?r=${account.name}`}
							</Paragraph>
						</div>
					) : null}
				</div>
				<div
					css={() => ({
						padding: '2rem',
					})}
				>
					<Row gutter={[16, 16]}>
						<Col xs={24} sm={24} lg={12}>
							<Collapse defaultActiveKey={[1, 2]} collapsible={'disabled'}>
								<Panel
									showArrow={false}
									header={<Translate content="account.member.fee_allocation" />}
									key="1"
								>
									<table className="table key-value-table">
										<tbody>
											<tr>
												<td>
													<Translate content="account.member.network_percentage" />
												</td>
												<td>{network_fee}%</td>
											</tr>
											<tr>
												<td>
													<Translate content="account.member.lifetime_referrer" />{' '}
													&nbsp; (
													<Link
														to={`/account/${account.lifetime_referrer_name}`}
													>
														{account.lifetime_referrer_name}
													</Link>
													)
												</td>
												<td>{lifetime_fee}%</td>
											</tr>
											<tr>
												<td>
													<Translate content="account.member.registrar" />{' '}
													&nbsp; (
													<Link to={`/account/${account.registrar_name}`}>
														{account.registrar_name}
													</Link>
													)
												</td>
												<td>{registrar_fee}%</td>
											</tr>
											<tr>
												<td>
													<Translate content="account.member.referrer" /> &nbsp;
													(
													<Link to={`/account/${account.referrer_name}`}>
														{account.referrer_name}
													</Link>
													)
												</td>
												<td>{referrer_fee}%</td>
											</tr>
											<tr>
												<td>
													<Translate content="account.member.membership_expiration" />{' '}
												</td>
												<td>{expiration_date}</td>
											</tr>
										</tbody>
									</table>
								</Panel>
								<Panel
									showArrow={false}
									header={<Translate content="account.member.fee_allocation" />}
									key="2"
								>
									<table className="table key-value-table">
										<Statistics stat_object={account.statistics} />
									</table>
								</Panel>
							</Collapse>
						</Col>
						<Col xs={24} sm={24} lg={12}>
							<div
								css={(theme) => ({
									border: `1px solid ${theme.colors.CollapseHeaderColor}`,
									borderRadius: '2px',
									p: {
										padding: '2px 14px',
									},
									h4: {
										backgroundColor: theme.colors.CollapseHeaderColor,
										fontSize: '15px',
										fontFamily: 'Poppins',
										display: 'flex',
										flexWrap: 'nowrap',
										alignItems: 'flex-start',
										padding: '12px 16px',
										lineHeight: 1.5715,
										cursor: 'pointer',
										marginTop: 0,
										color: theme.colors.themeOpositeColor,
									},
								})}
							>
								<FeeHelp
									account={account_name}
									networkFee={network_fee}
									referrerFee={referrer_fee}
									registrarFee={registrar_fee}
									lifetimeFee={lifetime_fee}
									referrerTotalFee={referrer_total_fee}
									maintenanceInterval={gprops.getIn([
										'parameters',
										'maintenance_interval',
									])}
									vestingThreshold={{
										amount: gprops.getIn([
											'parameters',
											'cashback_vesting_threshold',
										]),
										asset: core_asset,
									}}
									vestingPeriod={
										gprops.getIn([
											'parameters',
											'cashback_vesting_period_seconds',
										]) /
										60 /
										60 /
										24
									}
								/>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}
AccountMembership = BindToChainState(AccountMembership);

export default AccountMembership;
