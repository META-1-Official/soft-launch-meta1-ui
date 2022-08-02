import React from 'react';
// import {withRouter} from "react-router-dom";
import {connect} from 'alt-react';
import {ChainStore} from 'meta1-vision-js';
import {PrivateKey, FetchChain, key} from 'meta1-vision-js/es';
import qs from 'qs';
import axios from 'axios';
import {Helmet} from 'react-helmet';

import AuthStore from '../stores/AuthStore';
import AccountStore from '../stores/AccountStore';
import WalletDb from '../stores/WalletDb';
import WalletUnlockStore from '../stores/WalletUnlockStore';
import TransactionConfirmStore from '../stores/TransactionConfirmStore';
import AccountActions from '../actions/AccountActions';
import WalletUnlockActions from '../actions/WalletUnlockActions';
import LoadingIndicator from './LoadingIndicator';
import ls from '../lib/common/localStorage';
import faceKIService from '../services/face-ki.service';
import Webcam from 'react-webcam';
import {Form, Input, Button, Tooltip} from 'antd';

const STORAGE_KEY = '__AuthData__';
const ss = new ls(STORAGE_KEY);

class AuthRedirect extends React.Component {
	constructor() {
		super();
		this.generateAuthData = this.generateAuthData.bind(this);
		this.authProceed = this.authProceed.bind(this);
		this.onFinishConfirm = this.onFinishConfirm.bind(this);
		this.createAccount = this.createAccount.bind(this);
		this.state = {
			skipCreationFlow: false,
			passwordError: false,
			redirectFromESign: false,
			login: false,
			faceKISuccess: false,
		};
		this.skipFreshCreationAndProceed =
			this.skipFreshCreationAndProceed.bind(this);
		this.validateLogin = this.validateLogin.bind(this);
		this.proceedESignRedirect = this.proceedESignRedirect.bind(this);
		this.verify = this.verify.bind(this);
		this.continueLogin = this.continueLogin.bind(this);
		this.webcamRef = React.createRef();
	}

	componentDidMount() {
		const {openLogin, privKey, authData, setOpenLoginInstance} = this.props;

		if (this.props.location && this.props.location.search) {
			const param = qs.parse(this.props.location.search, {
				ignoreQueryPrefix: true,
			}).mode;
			const jwt = qs.parse(this.props.location.search, {
				ignoreQueryPrefix: true,
			}).token;
			const eSignSuccess = qs.parse(this.props.location.search, {
				ignoreQueryPrefix: true,
			}).signature;
			if (
				param === 'existingEmailCreation' &&
				openLogin &&
				privKey &&
				authData
			) {
				this.skipFreshCreationAndProceed();
			} else if (eSignSuccess === 'success') {
				this.proceedESignRedirect();
			} else {
				this.props.history.push('/registration');
			}
		}
		if (!openLogin) {
			setOpenLoginInstance();
		}
		if (openLogin && !privKey) {
			this.generateAuthData();
		}
	}

	componentDidUpdate(prevProps, prevState) {
		const {openLogin, privKey, authData} = this.props;
		const {skipCreationFlow} = this.state;
		if (openLogin && !prevProps.openLogin && !skipCreationFlow) {
			this.generateAuthData();
		}
		if (
			privKey &&
			authData &&
			!skipCreationFlow &&
			((privKey && !prevProps.privKey) || (authData && !prevProps.authData))
		) {
			this.authProceed();
		}
		if (!prevState.passwordError && this.state.passwordError) {
			this.props.history.push('/registration');
		}
	}

	dataURLtoFile(dataurl, filename) {
		var arr = dataurl.split(','),
			mime = arr[0].match(/:(.*?);/)[1],
			bstr = atob(arr[1]),
			n = bstr.length,
			u8arr = new Uint8Array(n);
		while (n--) {
			u8arr[n] = bstr.charCodeAt(n);
		}
		return new File([u8arr], filename, {type: mime});
	}

	async verify() {
		const {privKey, authData} = this.props;

		const imageSrc = this.webcamRef.current.getScreenshot();

		if (!imageSrc) {
			alert('Check your camera');
			return;
		}

		var file = this.dataURLtoFile(imageSrc, 'a.jpg');
		const response = await faceKIService.liveLinessCheck(file);

		if (response.data.liveness === 'Spoof') alert('try again');
		else {
			const response_verify = await faceKIService.verify(file);
			if (
				response_verify.status === 'Verify OK' &&
				response_verify.name === authData.email
			) {
				console.log('you verified');
				this.setState({faceKISuccess: true});
			}
		}
	}

	continueLogin() {
		const {privKey} = this.props;
		const accountName = ss.get('account_login_name', '');
		let password;
		if (!accountName || !privKey) {
			return;
		}
		password = this.genKey(`${accountName}${privKey}`);

		if (this.state.faceKISuccess === true) {
			this.validateLogin(password, accountName);
		} else {
			alert('first verify');
		}
	}

	skipFreshCreationAndProceed() {
		this.setState({skipCreationFlow: true});
		this.authProceed();
	}

	proceedESignRedirect() {
		this.setState({redirectFromESign: true}, () => {
			this.props.setOpenLoginInstance();
		});
	}

	async generateAuthData() {
		const {openLogin, setPrivKey, setAuthData} = this.props;
		try {
			await openLogin.init();
			if (openLogin.privKey) {
				const privKey = openLogin.privKey;
				const data = await openLogin.getUserInfo();
				setPrivKey(privKey);
				setAuthData(data);
			} else {
				this.props.history.push('/registration');
			}
		} catch (err) {
			console.log('Something went wrong!', err);
		}
	}

	async authProceed() {
		const {privKey, authData} = this.props;
		const {redirectFromESign} = this.state;
		const regUserName = ss.get('account_registration_name', '');
		const logInUserName = ss.get('account_login_name', '');
		if (regUserName) {
			if (redirectFromESign) {
				this.props.history.push('/registration?eSignStatus=success');
			} else {
				this.props.history.push('/registration?mode=proceedRegistration');
			}
		} else if (logInUserName) {
			this.setState({login: true});
		} else {
			this.props.history.push('/registration');
		}
	}

	genKey(seed) {
		return `P${PrivateKey.fromSeed(key.normalize_brainKey(seed)).toWif()}`;
	}

	onFinishConfirm(confirmStoreState) {
		if (
			confirmStoreState.included &&
			confirmStoreState.broadcasted_transaction
		) {
			TransactionConfirmStore.unlisten(this.onFinishConfirm);
			TransactionConfirmStore.reset();

			FetchChain('getAccount', this.state.accountName).then(() => {
				this.props.history.push('/wallet/backup/create?newAccount=true');
			});
		}
	}

	createAccount(name, password, email, phone_number, first_name, last_name) {
		console.log('data: ', phone_number, name, password);
		const {referralAccount} = AccountStore.getState();
		const registrarAccount = ss.get(
			'account_registration_registrarAccount',
			''
		);
		AccountActions.createAccountWithPassword(
			name,
			password,
			registrarAccount,
			referralAccount || registrarAccount,
			0,
			'',
			email,
			phone_number,
			first_name,
			last_name,
			password
		)
			.then(() => {
				AccountActions.setPasswordAccount(name);
				if (registrarAccount) {
					FetchChain('getAccount', name).then(() => {
						this.validateLogin(name, password);
					});
					TransactionConfirmStore.listen(this.onFinishConfirm);
				} else {
					FetchChain('getAccount', name).then((data) => {
						console.log('Data in Fetch chain', data);
					});
					this.validateLogin(name, password);
				}
			})
			.catch((error) => {
				console.log('ERROR AccountActions.createAccount ARC', error);
			});
	}

	timer = (ms) => new Promise((res) => setTimeout(res, ms));

	async validateLogin(password, account) {
		const {resolve} = this.props;

		let chainAccount = ChainStore.getAccount(account);
		while (chainAccount === undefined) {
			chainAccount = ChainStore.getAccount(account);
			console.log('Chain Account', chainAccount);
			await this.timer(1000);
		}

		const {success, cloudMode} = WalletDb.validatePassword(
			password || '',
			true,
			account,
			['active', 'owner', 'memo'],
			chainAccount
		);

		if (!success && WalletDb.isLocked()) {
			this.setState({passwordError: true});
			alert('Password Or Account is wrong');
		} else {
			this.setState({password: ''});
			if (cloudMode) AccountActions.setPasswordAccount(account);
			WalletUnlockActions.change();
			if (resolve) resolve();
			WalletUnlockActions.cancel();
			ss.remove('account_login_name');
			this.props.history.push(`/account/${account}`);
		}
	}

	render() {
		return (
			<React.Fragment>
				{this.state.login && (
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<h5>
							We will setup your Biometric two factor authentication, to ensure
							the security of your wallet
						</h5>
						<br />
						<Webcam
							audio={false}
							ref={this.webcamRef}
							screenshotFormat="image/jpeg"
							videoConstraints={{
								facingMode: 'user',
								width: 500,
								height: 500,
							}}
							width={500}
							height={500}
							mirrored
						/>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								marginTop: '10px',
							}}
						>
							<Button
								onClick={this.verify}
								style={{background: '#ffcc00', border: 'none'}}
							>
								Verify
							</Button>
							<Button
								onClick={this.continueLogin}
								style={{
									background: '#ffcc00',
									border: 'none',
									marginLeft: '10px',
								}}
							>
								Continue Login
							</Button>
						</div>
					</div>
				)}
			</React.Fragment>
		);
	}
}

export default connect(AuthRedirect, {
	listenTo() {
		return [AuthStore, AccountStore, WalletUnlockStore];
	},
	getProps() {
		return {
			isLoading: AuthStore.getState().isLoading,
			openLogin: AuthStore.getState().openLogin,
			privKey: AuthStore.getState().privKey,
			authData: AuthStore.getState().authData,
			setOpenLoginInstance: AuthStore.setOpenLoginInstance,
			setPrivKey: AuthStore.setPrivKey,
			setAuthData: AuthStore.setAuthData,
			resolve: WalletUnlockStore.getState().resolve,
		};
	},
});
