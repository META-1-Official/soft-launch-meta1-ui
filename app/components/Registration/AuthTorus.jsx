import React from 'react';
import Translate from 'react-translate-component';
import utils from 'common/utils';
import {connect} from 'alt-react';
import {Layout, Button, Tooltip} from 'antd';
import {RingLoader} from 'react-spinners';
import {css} from '@emotion/core';
import counterpart from 'counterpart';
import ReactTooltip from 'react-tooltip';
import {ChainStore} from 'meta1-vision-js/es';

import {getLogo} from 'branding';
import AccountNameInput from '../Forms/AccountNameInputStyleGuide';
import AuthStore from '../../stores/AuthStore';
import SettingsStore from '../../stores/SettingsStore';
import AccountStore from '../../stores/AccountStore';
import Icon from '../Icon/Icon';
import ls from '../../lib/common/localStorage';
import AccountSelect from '../Forms/AccountSelect';

const STORAGE_KEY = '__AuthData__';
const ss = new ls(STORAGE_KEY);

const logo = getLogo();
class AccountRegistration extends React.Component {
	constructor() {
		super();
		this.state = {
			accountName: '',
			accountNameValidity: false,
			registrarAccount: null,
			isLTM: false,
			privateKey: '',
			userData: null,
		};
		this.renderTorusLogin = this.renderTorusLogin.bind(this);
		this.onAccountNameChange = this.onAccountNameChange.bind(this);
		this.onRegistrarAccountChange = this.onRegistrarAccountChange.bind(this);
	}

	componentDidMount() {
		ReactTooltip.rebuild();
		if (!this.props.openLogin) {
			this.props.setOpenLoginInstance();
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return (
			!utils.are_equal_shallow(nextState, this.state) ||
			!utils.are_equal_shallow(nextProps, this.props)
		);
	}

	async renderTorusLogin() {
		const {accountNameValidity, registrarAccount, isLTM, accountName} =
			this.state;
		if (
			this.props.isLoading ||
			!this.props.openLogin ||
			!accountNameValidity ||
			(registrarAccount && !isLTM)
		) {
			return;
		}
		try {
			const openLogin = this.props.openLogin;
			await openLogin.init();
			if (openLogin.privKey) {
				const privKey = openLogin.privKey;

				const data = await openLogin.getUserInfo();
				this.props.setPrivKey(privKey);
				this.props.setAuthData(data);
				this.setState({alreadyAssociatedEmail: data.email});
			} else {
				ss.set('account_registration_name', accountName);
				ss.remove('account_login_name');
				if (registrarAccount) {
					ss.set('account_registration_registrarAccount', registrarAccount);
				}
				await openLogin.login({'mfaLevel?': 'none', mfaLevel: 'none'});
				const data = await openLogin.getUserInfo();
				console.log('User is logged in. Private key: ' + data);
			}
		} catch (error) {
			console.log('Error in Torus Render', error);
		}
	}

	onAccountNameChange(e) {
		const state = {...this.state};
		if (e.valid !== undefined) {
			state.accountNameValidity = e.valid;
		}
		if (e.value !== undefined) {
			state.accountName = e.value;
		}
		this.setState(state);
	}

	onRegistrarAccountChange(registrarAccount) {
		let isLTM = false;
		const registrar = registrarAccount
			? ChainStore.getAccount(registrarAccount)
			: null;
		if (registrar) {
			if (registrar.get('lifetime_referrer') === registrar.get('id')) {
				isLTM = true;
			}
		}
		this.setState({registrarAccount, isLTM});
	}

	render() {
		const {isLoading, openLogin} = this.props;
		const {accountNameValidity, registrarAccount, isLTM} = this.state;
		const myAccounts = AccountStore.getMyAccounts();
		const firstAccount = myAccounts.length === 0;

		return (
			<Layout className="layout">
				<div className="registration-content">
					<RingLoader
						color={'#fff'}
						size={25}
						css={css`
							position: absolute;
							top: 5px;
							left: calc(50% - 12.5px);
						`}
						loading={this.props.isLoading}
					/>
					<div className="logo-container">
						<img src={logo} width={70} />
						{this.props.faucetAddress && <div>(Testnet)</div>}
					</div>
					<div className="desc1">Secured Wallet Creation</div>

					<React.Fragment>
						<AccountNameInput
							cheapNameOnly={firstAccount}
							onChange={this.onAccountNameChange}
							accountShouldNotExist
							placeholder={counterpart.translate('account.name')}
							label={
								<span>
									<span className="vertical-middle">
										{counterpart.translate('account.name')}
									</span>
									&nbsp;
									<Tooltip
										title={counterpart.translate(
											'tooltip.registration.accountName'
										)}
									>
										<span>
											<Icon
												name="question-in-circle"
												className="icon-14px question-icon vertical-middle"
											/>
										</span>
									</Tooltip>
								</span>
							}
							noLabel
						/>
						{firstAccount ? null : (
							<div className="full-width-content form-group no-overflow">
								<label htmlFor="account">
									<Translate content="account.pay_from" />
								</label>
								<AccountSelect
									id="account"
									account_names={myAccounts}
									onChange={this.onRegistrarAccountChange}
								/>
								{registrarAccount && !isLTM ? (
									<div style={{textAlign: 'left'}} className="facolor-error">
										<Translate content="wallet.must_be_ltm" />
									</div>
								) : null}
							</div>
						)}
						<div className="btn-container">
							<Button
								type="primary"
								disabled={
									isLoading ||
									!openLogin ||
									!accountNameValidity ||
									(registrarAccount && !isLTM)
								}
								onClick={this.renderTorusLogin}
							>
								Get Started
							</Button>
						</div>
					</React.Fragment>
				</div>
			</Layout>
		);
	}
}

AccountRegistration = connect(AccountRegistration, {
	listenTo() {
		return [AuthStore, SettingsStore, AccountStore];
	},
	getProps() {
		return {
			isLoading: AuthStore.getState().isLoading,
			openLogin: AuthStore.getState().openLogin,
			privKey: AuthStore.getState().privKey,
			setOpenLoginInstance: AuthStore.setOpenLoginInstance,
			setPrivKey: AuthStore.setPrivKey,
			setAuthData: AuthStore.setAuthData,
			faucetAddress: SettingsStore.getSetting('faucet_address'),
		};
	},
});

export default AccountRegistration;
