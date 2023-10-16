import React from 'react';
import {connect} from 'alt-react';
import {ChainStore} from 'meta1-vision-js';
import {PrivateKey, FetchChain, key} from 'meta1-vision-js/es';
import qs from 'qs';
import axios from 'axios';
import {Input, Button, Modal, Select} from 'antd';
import counterpart from 'counterpart';
import buildSignature4Fas from '../lib/chain/buildSignature4Fas';
import {TASK} from '../modules/biometric-auth/constants/constants';
import FASClient from '../modules/biometric-auth/FASClient';
import AuthStore from '../stores/AuthStore';
import AccountStore from '../stores/AccountStore';
import AccountActions from '../actions/AccountActions';
import WalletDb from '../stores/WalletDb';
import WalletUnlockStore from '../stores/WalletUnlockStore';
import TransactionConfirmStore from '../stores/TransactionConfirmStore';
import WalletUnlockActions from '../actions/WalletUnlockActions';
import ls from '../lib/common/localStorage';
import faceKIService from '../services/face-ki.service';
import kycService from 'services/kyc.service';
import {Camera} from 'react-camera-pro';
import {toast} from 'react-toastify';
import {getPublicCompressed} from '@toruslabs/eccrypto';
import fasServices from '../services/face-ki.service';

const OvalImage = require('assets/oval/oval.png');
const FlipImage = require('assets/flip.png');

const STORAGE_KEY = '__AuthData__';
const ss = new ls(STORAGE_KEY);
const ss_graphene = new ls('__graphene__');

const browserstack_test_accounts = [
	'gem-1',
	'test-automation',
	'john-doe',
	'olive-5',
	'marry-14',
	'mary-14',
	'bond-03',
	'rock-64',
	'rock-3',
	'bond-02',
	'antman-kok357',
	'user-x01',
	'user-x01-1',
	'user-x02',
];

const errorCase = {
	'Camera Not Found': counterpart.translate('registration.check_camera'),
	'Not Matched': counterpart.translate('registration.email_wallet_not_matched'),
	'Verify Failed': counterpart.translate('registration.verify_failed'),
	'No Users': counterpart.translate('registration.no_users'),
	'Spoof Detected': counterpart.translate('registration.spoof_detected'),
	'Face not Detected': counterpart.translate('registration.face_not_detected'),
	'Invalid Email': counterpart.translate(
		'registration.invalid_biometric_email'
	),
	'Biometic Server Error': counterpart.translate(
		'registration.biometric_server_error'
	),
};

class AuthRedirect extends React.Component {
	constructor() {
		super();
		this.state = {
			passwordError: false,
			redirectFromESign: false,
			login: false,
			faceKISuccess: false,
			devices: [],
			token: '',
			webcamEnabled: true,
			verifying: false,
			photoIndex: 0,
			width: 0,
			height: 0,
			numberOfCameras: 0,
			activeDeviceId: '',
			task: TASK.VERIFY,
			step: '',
			passkey: '',
		};

		this.generateAuthData = this.generateAuthData.bind(this);
		this.authProceed = this.authProceed.bind(this);
		this.onFinishConfirm = this.onFinishConfirm.bind(this);
		this.createAccount = this.createAccount.bind(this);
		this.validateLogin = this.validateLogin.bind(this);
		this.proceedESignRedirect = this.proceedESignRedirect.bind(this);
		this.continueLogin = this.continueLogin.bind(this);
		this.getFASToken = this.getFASToken.bind(this);
		this.faceVerify = this.faceVerify.bind(this);
		this.onSubmitPasskeyForm = this.onSubmitPasskeyForm.bind(this);
		this.webcamRef = React.createRef();
	}

	async handlePassKeyFormSubmit(account, passkey, email) {
		let result;

		try {
			result = await buildSignature4Fas(account, passkey, email);
		} catch {
			toast('Passkey is not valid!');
			return;
		}

		const {publicKey, signature, signatureContent} = result;
		const {token} = await fasServices.getFASToken({
			account,
			email,
			task: TASK.REGISTER,
			publicKey,
			signature,
			signatureContent,
		});

		if (!token) {
			console.log('Could not get FAS token!');
			toast('Something went wrong!');
			this.setState({step: 'userform'});
			return;
		}

		return token;
	}

	async getFASToken() {
		try {
			// const account = 'jin-1001';				// TEST USAGE - pass web3Auth
			// const email = 'jin-1001@yopmail.com';	// TEST USAGE - pass web3Auth
			// this.setState({step: 'passkey'});		// TEST USAGE - pass web3Auth
			// return;									// TEST USAGE - pass web3Auth

			const email = this.props.authData?.email.toLowerCase();
			const account = ss.get('account_login_name', '');
			const {doesUserExistsInFAS, wasUserEnrolledInOldBiometric} =
				await faceKIService.fasMigrationStatus(email);

			if (!doesUserExistsInFAS && wasUserEnrolledInOldBiometric) {
				this.setState({step: 'passkey'});
				return;
			}

			this.setState({step: 'faceki'});
			const {token} = await fasServices.getFASToken({
				account,
				email,
				task: this.state.task,
			});

			if (token) {
				this.setState((prevState) => ({...prevState, token}));
			} else {
				toast('Invalid combination of account name and email');
				// this.props.history.push('/');
			}
		} catch (error) {
			console.error('FASToken Error: ', error);
		}
	}

	componentDidMount() {
		console.log('@111');
		// this.getFASToken();			// TEST USAGE - pass web3Auth
		// return;						// TEST USAGE - pass web3Auth
		const {openLogin, privKey, setOpenLoginInstance} = this.props;
		const loginAccountName = ss.get('account_login_name', '');

		if (this.props.location && this.props.location.search) {
			const eSignSuccess = qs.parse(this.props.location.search, {
				ignoreQueryPrefix: true,
			}).signature;
			if (eSignSuccess === 'success') {
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
		if (loginAccountName && privKey) {
			this.loadVideo(true);
		}

		window.addEventListener('resize', this.updateDimensions);
	}

	updateDimensions = () => {
		this.setState({width: window.innerWidth, height: window.innerHeight});
	};

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions);
	}

	UNSAFE_componentWillMount() {
		this.updateDimensions();
	}

	async loadVideo(flag) {
		const videoTag = document.querySelector('video');
		const features = {audio: false, video: true};

		console.log('loadvideo');

		if (flag) {
			return navigator.mediaDevices
				.enumerateDevices()
				.then((devices) => {
					const videoDevices = devices.filter((i) => i.kind == 'videoinput');

					this.setState({
						webcamEnabled: true,
						devices: videoDevices,
						activeDeviceId: videoDevices[0].deviceId,
					});
				})
				.finally(() => {
					return true;
				});
		} else {
			try {
				for (const track of videoTag.srcObject.getTracks()) track.stop();
				videoTag.srcObject = null;
			} catch (err) {
				console.log('[loadVideo] - ', err);
			}

			return Promise.resolve();
		}
	}

	componentDidUpdate(prevProps, prevState) {
		// this.getFASToken();			// TEST USAGE - pass web3Auth
		// return;						// TEST USAGE - pass web3Auth
		const {openLogin, privKey, authData} = this.props;
		if (openLogin && !prevProps.openLogin) {
			this.generateAuthData();
		}
		if (
			privKey &&
			authData &&
			((privKey && !prevProps.privKey) || (authData && !prevProps.authData))
		) {
			this.authProceed();
		}
		if (!prevState.passwordError && this.state.passwordError) {
			this.props.history.push('/registration');
		}
		if (this.props.authData && this.state.login && !prevState.login) {
			this.getFASToken();
		}
		if (!prevState.token && this.state.token) {
			this.webcamRef.current.load();
		}
	}

	async dataURLtoFile(dataurl, filename) {
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

	isMobile() {
		return window.innerWidth < window.innerHeight;
	}

	async faceVerify(token) {
		if (token) {
			this.setState({faceKISuccess: true});
			this.continueLogin(token);
		}
	}

	continueLogin(token) {
		const {privKey, authData} = this.props;
		const accountName = ss.get('account_login_name', '');
		if (!accountName || !privKey) return;

		if (
			this.state.faceKISuccess === true ||
			browserstack_test_accounts.includes(accountName)
		) {
			try {
				axios
					.post(process.env.LITE_WALLET_URL + '/login', {
						accountName: accountName,
						email: authData.email.toLowerCase(),
						idToken: authData.web3Token,
						appPubKey: authData.web3PubKey,
						fasToken: token,
					})
					.then((response) => {
						this.loadVideo(false);
						const accountName = response.data['accountName'];
						ss.set('account_login_name', accountName);
						ss.set('account_login_token', response.data['token']);
						ss_graphene.set('currentAccount', accountName);
						ss_graphene.set('passwordlessAccount', accountName);
						AccountActions.setCurrentAccount.defer(accountName);
						WalletUnlockActions.unlock_v2().finally(() => {
							this.props.history.push(`/account/${accountName}/`);
						});
						setTimeout(() => {
							WalletUnlockActions.lock_v2().finally(() => {
								this.props.history.push('/market/META1_USDT');
							});
						}, 24 * 60 * 60 * 1000); // Auto timeout in 24 hrs
					});
			} catch (err) {
				console.log('Error in e-sign token generation', err);
			}
		} else {
			alert(counterpart.translate('registration.verify_first'));
		}
	}

	proceedESignRedirect() {
		this.setState({redirectFromESign: true}, () => {
			this.props.setOpenLoginInstance();
		});
	}

	async generateAuthData() {
		const {openLogin, setPrivKey, setAuthData} = this.props;
		try {
			if (openLogin && openLogin.status === 'connected') {
				const data = await openLogin.getUserInfo();
				const key = await openLogin.provider.request({
					method: 'eth_private_key',
				});

				const app_pub_key = getPublicCompressed(
					Buffer.from(key.padStart(64, '0'), 'hex')
				).toString('hex');

				data.web3Token = data.idToken;
				data.web3PubKey = app_pub_key;

				setAuthData(data);
				setPrivKey(key);
				this.loadVideo(true);
			} else {
				this.props.history.push('/registration');
			}
		} catch (err) {
			console.log('Something went wrong!', err);
		}
	}

	async authProceed() {
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
			if (browserstack_test_accounts.includes(logInUserName)) {
				this.continueLogin();
			} else {
				this.setState({login: true});
			}
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
		} else {
			this.setState({password: ''});
			if (cloudMode) AccountActions.setPasswordAccount(account);
			WalletUnlockActions.change();
			if (resolve) resolve();
			WalletUnlockActions.cancel();
			ss.remove('account_login_name');
			this.props.history.push(`/account/${account}`);
		}
		toast('Success');
	}

	handleModalClose = () => {
		this.setState({login: false});
		this.props.history.push('/market/META1_USDT');
	};

	onSubmitPasskeyForm = () => {
		const {passkey} = this.state;
		const accountName = ss.get('account_login_name', '');
		const email = this.props.authData?.email.toLowerCase();

		this.handlePassKeyFormSubmit(accountName, passkey, email).then((token) => {
			this.setState({token, task: TASK.REGISTER});
		});
	};

	render() {
		const {width, devices, activeDeviceId, step, login, passkey} = this.state;
		const theme = this.props.theme;
		const aspectRatio = 1.07;
		const webCamWidth = width > 576 ? 550 : width - 26;
		// const accountName = 'jin-1001';				// TEST USAGE - pass web3Auth
		// const email = 'jin-1001@yopmail.com';		// TEST USAGE - pass web3Auth
		const accountName = ss.get('account_login_name', '');
		const email = this.props.authData?.email.toLowerCase();

		return (
			<div className="no-margin grid-block registration">
				{login && (
					// {!login && (
					<div className="horizontal align-center text-center">
						<div className="create-account-block">
							{step === 'faceki' && (
								<div className="custom-auth-faceki">
									<h4>
										{counterpart.translate(
											'registration.authenticate_your_face'
										)}
									</h4>
									<h5>
										{counterpart.translate(
											'registration.require_biometric_authentication'
										)}
									</h5>
									{this.state.webcamEnabled && (
										<div className="webcam-wrapper">
											<div className="flex-container">
												<div className="flex-container-first">
													<div className="position-head">
														{counterpart.translate(
															'registration.requiure_face_in_oval'
														)}
													</div>
												</div>
												<button
													className="btn-x"
													onClick={this.handleModalClose}
												>
													X
												</button>
											</div>
											{this.state.numberOfCameras > 1 && (
												<img
													className="flip-button"
													src={FlipImage}
													onClick={() => {
														if (this.webcamRef.current) {
															const result =
																this.webcamRef.current.switchCamera();
														}
													}}
												/>
											)}
											{!this.state.token ? (
												'loading ...'
											) : (
												<FASClient
													ref={this.webcamRef}
													token={this.state.token}
													username={this.props.authData?.email.toLowerCase()}
													task={this.state.task}
													onComplete={this.faceVerify}
												/>
											)}
										</div>
									)}
								</div>
							)}
							{step === 'passkey' && (
								<div className="custom-auth-passkey">
									<h4>
										{counterpart.translate('registration.passkeyform_title')}
									</h4>
									<span>
										{counterpart.translate(
											'registration.passkeyform_description'
										)}
									</span>
									<div style={{width: '100%', marginTop: '20px'}}>
										<label>
											{counterpart.translate(
												'registration.passkeyform_new_wallet_name'
											)}
										</label>
										<input
											control={Input}
											value={accountName}
											type="text"
											contentEditable={false}
											style={{border: '1px solid grey'}}
										/>
									</div>
									<div style={{width: '100%'}}>
										<label>
											{counterpart.translate(
												'registration.passkeyform_email_address'
											)}
										</label>
										<input
											control={Input}
											value={email}
											type="text"
											contentEditable={false}
											style={{border: '1px solid grey'}}
										/>
									</div>
									<div style={{width: '100%'}}>
										<label>
											{counterpart.translate(
												'registration.passkeyform_your_passkey'
											)}
										</label>
										<input
											control={Input}
											value={passkey}
											type="password"
											contentEditable={true}
											style={{border: '1px solid grey'}}
											onChange={(event) => {
												this.setState({passkey: event.target.value});
											}}
										/>
									</div>
									<div>
										<Button
											type="danger"
											style={{width: '100px'}}
											onClick={this.handleModalClose}
										>
											Back
										</Button>
										<Button
											type="primary"
											style={{width: '100px', float: 'right'}}
											disabled={!passkey}
											title={'Passkey is required'}
											onClick={this.onSubmitPasskeyForm}
										>
											Submit
										</Button>
									</div>
								</div>
							)}
						</div>
					</div>
				)}
			</div>
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
