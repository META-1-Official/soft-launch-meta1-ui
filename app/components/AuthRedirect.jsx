import React from 'react';
// import {withRouter} from "react-router-dom";
import {connect} from 'alt-react';
import {ChainStore} from 'meta1-vision-js';
import {PrivateKey, FetchChain, key} from 'meta1-vision-js/es';
import qs from 'qs';
import axios from 'axios';
import {Helmet} from 'react-helmet';
import {Modal} from 'antd';
import AuthStore from '../stores/AuthStore';
import AccountStore from '../stores/AccountStore';
import AccountActions from '../actions/AccountActions';
import WalletDb from '../stores/WalletDb';
import WalletUnlockStore from '../stores/WalletUnlockStore';
import TransactionConfirmStore from '../stores/TransactionConfirmStore';
import WalletUnlockActions from '../actions/WalletUnlockActions';
import LoadingIndicator from './LoadingIndicator';
import ls from '../lib/common/localStorage';
import faceKIService from '../services/face-ki.service';
import kycService from 'services/kyc.service';
import Webcam from 'react-webcam';
import {Form, Input, Button, Tooltip} from 'antd';
import {toast} from 'react-toastify';
const OvalImage = require('assets/oval/oval.png');

const STORAGE_KEY = '__AuthData__';
const ss = new ls(STORAGE_KEY);

class AuthRedirect extends React.Component {
	constructor() {
		super();
		this.state = {
			skipCreationFlow: false,
			passwordError: false,
			redirectFromESign: false,
			login: false,
			faceKISuccess: false,
			device: {},
			token: '',
			webcamEnabled: true,
			verifying: false,
		};

		this.generateAuthData = this.generateAuthData.bind(this);
		this.authProceed = this.authProceed.bind(this);
		this.onFinishConfirm = this.onFinishConfirm.bind(this);
		this.createAccount = this.createAccount.bind(this);
		this.skipFreshCreationAndProceed =
			this.skipFreshCreationAndProceed.bind(this);
		this.validateLogin = this.validateLogin.bind(this);
		this.proceedESignRedirect = this.proceedESignRedirect.bind(this);
		this.faceVerify = this.faceVerify.bind(this);
		this.continueLogin = this.continueLogin.bind(this);
		this.webcamRef = React.createRef();
	}

	componentDidMount() {
		const {openLogin, privKey, authData, setOpenLoginInstance} = this.props;
		const loginAccountName = ss.get('account_login_name', '');

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

		if (loginAccountName && privKey) {
			this.loadVideo(true);
		}
	}

	loadVideo(flag) {
		console.log('[loadVideo] @10 - ', flag);
		const videoTag = document.querySelector('video');
		const features = {audio: false, video: true};

		if (flag) {
			return navigator.mediaDevices
				.getUserMedia(features)
				.then((display) => {
					this.setState({
						webcamEnabled: true,
						device: display?.getVideoTracks()[0]?.getSettings(),
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
				console.log('[loadVideo] @104 - ', err);
			}

			this.setState({webcamEnabled: false, device: {}});
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

	async faceVerify() {
		const {privKey, authData} = this.props;
		this.setState({verifying: true});

		const accountName = ss.get('account_login_name', '');
		if (!accountName || !privKey) return;

		const imageSrc = this.webcamRef.current.getScreenshot();

		if (!imageSrc) {
			toast('Please check your camera.');
			this.setState({verifying: false});
			return;
		}

		const response_user = await kycService.getUserKycProfile(
			authData.email.toLowerCase()
		);

		if (!response_user?.member1Name) {
			toast('Email and wallet name are not matched.');
			this.setState({verifying: false});
			return;
		} else {
			const walletArry = response_user.member1Name.split(',');

			if (!walletArry.includes(accountName)) {
				toast('Email and wallet name are not matched.');
				this.setState({verifying: false});
				return;
			}
		}

		var file = this.dataURLtoFile(imageSrc, 'a.jpg');
		const response = await faceKIService.liveLinessCheck(file);

		if (!response) {
			toast('Something went wrong from Biometric server.');
			this.setState({verifying: false});
			return;
		}

		if (response.data.liveness !== 'Genuine') {
			toast('Try again by changing position or background.');
			this.setState({verifying: false});
		} else {
			const response_verify = await faceKIService.verify(file);
			if (response_verify.status === 'Verify OK') {
				const nameArry = response_verify.name.split(',');

				if (nameArry.includes(authData.email.toLowerCase())) {
					this.setState({faceKISuccess: true});
					this.setState({verifying: false});
					this.continueLogin();
				} else {
					toast(
						'Bio-metric verification failed for this email. Please use an email that has been linked to your biometric verification / enrollment.'
					);
					this.setState({verifying: false});
				}
			} else if (response_verify.status === 'Verify Failed') {
				toast(
					'We can not verify you because you never enrolled with your face yet.'
				);
				this.setState({verifying: false});
			} else {
				toast('Please try again.');
				this.setState({verifying: false});
			}
		}
	}

	continueLogin() {
		const {privKey, authData} = this.props;
		const accountName = ss.get('account_login_name', '');
		if (!accountName || !privKey) return;

		if (this.state.faceKISuccess === true) {
			try {
				axios
					.post(process.env.LITE_WALLET_URL + '/login', {
						accountName: accountName,
						email: authData.email.toLowerCase(),
					})
					.then((response) => {
						this.loadVideo(false);
						const accountName = response.data['accountName'];
						ss.set('account_login_name', accountName);
						ss.set('account_login_token', response.data['token']);
						AccountActions.setPasswordlessAccount(accountName);
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
			alert('Verify first!');
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
		this.props.history.push('/market/META1_USDT');
	};

	render() {
		return (
			<React.Fragment>
				{this.state.login && (
					<Modal
						visible={true}
						closeable={false}
						ref="modal"
						overlay={false}
						modalHeader="header.unlock_short"
						leftHeader
						zIndex={1001}
						footer={null}
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
						}}
						className="custom-auth-faceki"
						onCancel={this.handleModalClose}
					>
						<h5>
							We will setup your Biometric two factor authentication, to ensure
							the security of your wallet
						</h5>
						<br />
						{this.state.webcamEnabled && (
							<div
								style={{
									position: 'relative',
								}}
							>
								<div className="flex_container">
									<div className="position-head color-black">
										Position your face in the oval
									</div>
								</div>
								<Webcam
									audio={false}
									ref={this.webcamRef}
									screenshotFormat="image/jpeg"
									width={500}
									videoConstraints={{deviceId: this.state.device?.deviceId}}
									height={
										this.state.device?.aspectRatio
											? 500 / this.state.device?.aspectRatio
											: 385
									}
									mirrored
								/>
								<img
									src={OvalImage}
									alt="oval-image"
									className="oval-image"
									style={{
										position: 'absolute',
										width: '100%',
										height: '100%',
										top: 0,
										left: 0,
										zIndex: 200,
										opacity: 0.8,
									}}
								/>
								<div className="flex_container">
									<span className="span-class color-black">
										{!this.state.faceKISuccess
											? 'Press verify to complete authentication and log in'
											: 'Verification Successful!'}
									</span>
									<div className="span-class color-black">
										Min camera resolution must be 720p
									</div>
								</div>
							</div>
						)}
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								marginTop: '10px',
							}}
						>
							<Button
								onClick={this.faceVerify}
								style={{background: '#ffcc00', border: 'none'}}
								disabled={
									this.state.verifying
										? true
										: this.state.faceKISuccess
										? true
										: false
								}
							>
								{this.state.verifying ? 'Verifying...' : 'Verify'}
							</Button>
						</div>
					</Modal>
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
