import React from 'react';
import Translate from 'react-translate-component';
// import ReactTooltip from "react-tooltip";
import utils from 'common/utils';
// import SettingsActions from "actions/SettingsActions";
// import WalletDb from "stores/WalletDb";
// import WalletUnlockActions from "actions/WalletUnlockActions";
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

// import AccountRegistrationForm from "./AccountRegistrationForm";
// import AccountRegistrationConfirm from "./AccountRegistrationConfirm";

// const { Content } = Layout;
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
			alreadyAssociatedEmail: '',
		};
		this.renderTorusLogin = this.renderTorusLogin.bind(this);
		this.onAccountNameChange = this.onAccountNameChange.bind(this);
		this.onRegistrarAccountChange = this.onRegistrarAccountChange.bind(this);
		this.proceedWithExistingEmail = this.proceedWithExistingEmail.bind(this);
		this.proceedLoggingOut = this.proceedLoggingOut.bind(this);
	}

	// componentWillMount() {
	//     SettingsActions.changeSetting({
	//         setting: "passwordLogin",
	//         value: true
	//     });
	// }

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
				console.log('User is already logged in. Private key: ' + privKey, data);
				this.props.setPrivKey(privKey);
				this.props.setAuthData(data);
				this.setState({alreadyAssociatedEmail: data.email});
			} else {
				ss.set('account_registration_name', accountName);
				ss.remove('account_login_name');
				if (registrarAccount) {
					ss.set('account_registration_registrarAccount', registrarAccount);
				}
				await openLogin.login();
				const data = await openLogin.getUserInfo();
				console.log('User is logged in. Private key: ' + data);
			}
		} catch (error) {
			console.log('Error in Torus Render', error);
		}
	}

	proceedWithExistingEmail() {
		const {registrarAccount, accountName} = this.state;
		ss.set('account_registration_name', accountName);
		ss.remove('account_login_name');
		if (registrarAccount) {
			ss.set('account_registration_registrarAccount', registrarAccount);
		}
		this.props.history.push('/auth-proceed?mode=existingEmailCreation');
	}

	async proceedLoggingOut() {
		const {openLogin} = this.props;
		const {registrarAccount, accountName} = this.state;
		if (openLogin) {
			await openLogin.logout({});
			ss.set('account_registration_name', accountName);
			ss.remove('account_login_name');
			if (registrarAccount) {
				ss.set('account_registration_registrarAccount', registrarAccount);
			}
			await openLogin.login();
		} else {
			this.setState({alreadyAssociatedEmail: ''});
		}
	}

	// postWallet(email, accountName) {
	//     fetch("https://meta1.io/api/link", {
	//         method: "POST",
	//         headers: {
	//             Accept: "application/json, text/plain, */*",
	//             "Content-Type": "application/json",
	//             "X-Requested-With": "XMLHttpRequest"
	//         },
	//         body: JSON.stringify({
	//             userId: email,
	//             walletId: accountName
	//         })
	//     }).then(response => {
	//         alert("You have successfully created your wallet account.");
	//         console.log(response);
	//     });
	// }

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
		const {
			accountNameValidity,
			registrarAccount,
			isLTM,
			alreadyAssociatedEmail,
		} = this.state;
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
					{/* <div className="desc2">Click Get Started to continue</div> */}
					{alreadyAssociatedEmail ? (
						<React.Fragment>
							<div className="desc2">
								Your email <strong>{alreadyAssociatedEmail}</strong> is already
								linked to Meta exchange.
							</div>
							<div className="btn-container dual-btns">
								<Button type="primary" onClick={this.proceedWithExistingEmail}>
									Continue using previous Email
								</Button>
								<Button type="danger" onClick={this.proceedLoggingOut}>
									LogOut and Use different Email
								</Button>
							</div>
						</React.Fragment>
					) : (
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
					)}
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
