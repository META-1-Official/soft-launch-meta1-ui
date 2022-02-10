import React from 'react';
import Translate from 'react-translate-component';
import {connect} from 'alt-react';

import {Button} from 'antd';
import ReactTooltip from 'react-tooltip';
import qs from 'qs';
import {PrivateKey} from 'meta1js/es';

import utils from 'common/utils';
import SettingsActions from 'actions/SettingsActions';
import AuthStore from '../../stores/AuthStore';
import ls from '../../lib/common/localStorage';

import AccountRegistrationForm from './AccountRegistrationForm';
import AccountRegistrationConfirm from './AccountRegistrationConfirm';

const STORAGE_KEY = '__AuthData__';
const ss = new ls(STORAGE_KEY);

class AccountRegistration extends React.Component {
	constructor() {
		super();
		this.state = {
			accountName: '',
			password: '',
			formStep: true,
			torusAlreadyAssociatedEmail: false,
			finalStep: false,
		};
		this.continue = this.continue.bind(this);
		this.toggleConfirmed = this.toggleConfirmed.bind(this);
		this.renderScreen = this.renderScreen.bind(this);
		this.renderTorusLogin = this.renderTorusLogin.bind(this);
		this.proceedWithExistingEmail = this.proceedWithExistingEmail.bind(this);
		this.proceedLoggingOut = this.proceedLoggingOut.bind(this);
		this.proceedVoiceIT = this.proceedVoiceIT.bind(this);
		this.proceedESign = this.proceedESign.bind(this);
		this.proceedTorus = this.proceedTorus.bind(this);
	}

	componentWillMount() {
		SettingsActions.changeSetting({
			setting: 'passwordlessLogin',
			value: true,
		});
	}

	componentDidMount() {
		const {openLogin, privKey, authData, setOpenLoginInstance} = this.props;
		ReactTooltip.rebuild();
		if (this.props.location && this.props.location.search) {
			const param = qs.parse(this.props.location.search, {
				ignoreQueryPrefix: true,
			}).mode;
			const voiceItToken = qs.parse(this.props.location.search, {
				ignoreQueryPrefix: true,
			}).voiceItToken;
			const eSignStatus = qs.parse(this.props.location.search, {
				ignoreQueryPrefix: true,
			}).eSignStatus;
			debugger;
			if (param === 'proceedRegistration' && openLogin && privKey && authData) {
				this.proceedTorus();
			} else if (voiceItToken && openLogin && privKey && authData) {
				// Logic for JWT verification need to be added:  expiry, origin (verify/enrollment), validity
				this.proceedVoiceIT(decodeURI(voiceItToken));
			} else if (eSignStatus === 'success') {
				this.proceedESign();
			} else {
				this.props.history.push('/registration');
			}
		} else {
			setOpenLoginInstance();
		}
		// window.open("https://humankyc.cryptomailsvc.io/video-enrollment", "_blank", "noopener,noreferrer");
	}

	shouldComponentUpdate(nextProps, nextState) {
		return !utils.are_equal_shallow(nextState, this.state);
	}

	continue({accountName}) {
		console.log('$$$$ acc', accountName);
		this.setState(
			{
				accountName,
				formStep: false,
				// password,
				// confirmationStep: true
			},
			() => this.renderTorusLogin()
		);
	}

	toggleConfirmed() {
		const {active} = this.state;
		this.setState({
			active: !active,
		});
	}

	async renderTorusLogin() {
		const {
			// registrarAccount,
			accountName,
		} = this.state;
		try {
			const openLogin = this.props.openLogin;
			await openLogin.init();
			if (openLogin.privKey) {
				const privKey = openLogin.privKey;
				const data = await openLogin.getUserInfo();
				console.log('User is already logged in. Private key: ' + privKey, data);
				this.props.setPrivKey(privKey);
				this.props.setAuthData(data);
				if (!data.email) {
					await openLogin.init();
					await openLogin.logout({});
					ss.set('account_registration_name', accountName);
					ss.remove('account_login_name');
					await openLogin.login();
				}
				this.setState({torusAlreadyAssociatedEmail: data.email});
			} else {
				ss.set('account_registration_name', accountName);
				ss.remove('account_login_name');
				// if (registrarAccount) {
				//     ss.set(
				//         "account_registration_registrarAccount",
				//         registrarAccount
				//     );
				// }
				// await openLogin.logout({});
				await openLogin.init();
				await openLogin.login();
				console.log('Having issue not loaded');
				const data = await openLogin.getUserInfo();
				console.log('User is logged in. Private key: ' + data);
			}
		} catch (error) {
			console.log('Error in Torus Render', error);
		}
	}

	proceedWithExistingEmail() {
		const {accountName} = this.state;
		ss.set('account_registration_name', accountName);
		ss.remove('account_login_name');
		// if (registrarAccount) {
		//     ss.set("account_registration_registrarAccount", registrarAccount);
		// }
		this.props.history.push('/auth-proceed?mode=existingEmailCreation');
	}

	async proceedLoggingOut() {
		const {openLogin} = this.props;
		const {accountName} = this.state;
		if (openLogin) {
			await openLogin.logout({});
			ss.set('account_registration_name', accountName);
			ss.remove('account_login_name');
			// if (registrarAccount) {
			//     ss.set(
			//         "account_registration_registrarAccount",
			//         registrarAccount
			//     );
			// }
			await openLogin.init();
			await openLogin.login();
		} else {
			this.setState({torusAlreadyAssociatedEmail: ''});
		}
	}

	async proceedVoiceIT(jwt) {
		console.log('@@ AccountRegistration', jwt);
		ss.set('confirmedTerms3Token', jwt);
		const {privKey, authData} = this.props;
		const email = authData.email;
		ss.set('email', email);
		const accountName = ss.get('account_registration_name', '');
		let password;
		if (!accountName || !privKey) {
			return;
		}
		password = this.genKey(`${accountName}${privKey}`);
		// ss.remove("account_registration_name");
		/* Data population for Final Step */
		this.setState({
			accountName,
			password,
			finalStep: true,
			formStep: false,
		});
	}

	proceedESign() {
		ss.set('confirmedTerms4Token', 'success');
		const {privKey, authData} = this.props;
		const email = authData.email;
		ss.set('email', email);
		const accountName = ss.get('account_registration_name', '');
		let password;
		if (!accountName || !privKey) {
			return;
		}
		password = this.genKey(`${accountName}${privKey}`);
		debugger;
		// ss.remove("account_registration_name");
		/* Data population for Final Step */
		this.setState({
			accountName,
			password,
			finalStep: true,
			formStep: false,
		});
	}

	proceedTorus() {
		const accountName = ss.get('account_registration_name', '');
		const {privKey, authData} = this.props;
		debugger;
		let password;
		if (!accountName || !privKey) {
			return;
		}
		const email = authData.email;
		password = this.genKey(`${accountName}${privKey}`);
		// ss.remove("account_registration_name");
		// sessionStorage.setItem("email", email);
		ss.set('email', email);
		/* Data population for Final Step */
		this.setState({
			accountName,
			password,
			finalStep: true,
			formStep: false,
		});
	}

	genKey(seed) {
		const key = `P${PrivateKey.fromSeed(seed).toWif()}`;
		return key;
	}

	renderScreen() {
		const {formStep, torusAlreadyAssociatedEmail, finalStep} = this.state;

		if (formStep) {
			return <AccountRegistrationForm continue={this.continue} />;
		} else if (torusAlreadyAssociatedEmail) {
			return (
				<React.Fragment>
					<div className="desc2">
						Your email <strong>{torusAlreadyAssociatedEmail}</strong> is already
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
			);
		} else if (finalStep) {
			return (
				<AccountRegistrationConfirm
					accountName={this.state.accountName}
					password={this.state.password}
					toggleConfirmed={this.toggleConfirmed}
					history={this.props.history}
				/>
			);
		}
	}

	render() {
		return (
			<div className="no-margin grid-block registration-layout registration">
				<div className="grid-block horizontal align-center text-center">
					<div>
						<img
							className={`model-img ${this.state.active ? 'confirmed' : ''}`}
							src="/model-type-images/account.svg"
							alt="account"
						/>
					</div>

					<div className="create-account-block">
						<Translate
							component="h3"
							className="registration-account-title"
							content="registration.createByPassword"
						/>
						{this.renderScreen()}
					</div>
				</div>
			</div>
		);
	}
}

AccountRegistration = connect(AccountRegistration, {
	listenTo() {
		return [AuthStore];
	},
	getProps() {
		return {
			openLogin: AuthStore.getState().openLogin,
			privKey: AuthStore.getState().privKey,
			authData: AuthStore.getState().authData,
			setOpenLoginInstance: AuthStore.setOpenLoginInstance,
			setPrivKey: AuthStore.setPrivKey,
			setAuthData: AuthStore.setAuthData,
		};
	},
});

export default AccountRegistration;
