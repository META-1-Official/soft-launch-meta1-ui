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
];

const errorCase = {
	'Camera Not Found': 'Please check your camera.',
	'Not Matched': 'Email and wallet name are not matched.',
	'Verify Failed':
		'We can not verify you because you never enrolled with your face yet.',
	'No Users':
		'You never enrolled with your face yet. Please enroll first via signup process.',
	'Spoof Detected': 'Spoof detected. Are you trying with your real live face?',
	'Face not Detected':
		'Face not detected. Try again by changing position or background.',
	'Invalid Email':
		'Bio-metric verification failed for this email. Please use an email that has been linked to your biometric verification / enrollment.',
	'Biometic Server Error': 'Something went wrong from Biometric server.',
};

class AuthRedirect extends React.Component {
	constructor() {
		super();
		this.state = {
			passwordError: false,
			redirectFromESign: false,
			login: false,
			faceKISuccess: false,
			device: {},
			token: '',
			webcamEnabled: true,
			verifying: false,
			photoIndex: 0,
		};

		this.generateAuthData = this.generateAuthData.bind(this);
		this.authProceed = this.authProceed.bind(this);
		this.onFinishConfirm = this.onFinishConfirm.bind(this);
		this.createAccount = this.createAccount.bind(this);
		this.validateLogin = this.validateLogin.bind(this);
		this.proceedESignRedirect = this.proceedESignRedirect.bind(this);
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
	}

	loadVideo(flag) {
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
				console.log('[loadVideo] - ', err);
			}

			return Promise.resolve();
		}
	}

	componentDidUpdate(prevProps, prevState) {
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

	async checkAndVerify() {
		const {privKey, authData} = this.props;
		const {photoIndex, device} = this.state;
		const accountName = ss.get('account_login_name', '');

		if (!accountName || !privKey) return;

		this.setState({verifying: true});

		if (photoIndex === 0) {
			const response_user = await kycService.getUserKycProfile(
				authData.email.toLowerCase()
			);

			if (!response_user?.member1Name) {
				toast(errorCase['Not Matched']);
				this.setState({verifying: false});
				return;
			} else {
				const walletArry = response_user.member1Name.split(',');

				if (!walletArry.includes(accountName)) {
					toast(errorCase['Not Matched']);
					this.setState({verifying: false});
					return;
				}
			}
		}

		var sizeForSreenShot =
			this.isMobile() && device.width
				? {width: device.width, height: device.height}
				: {width: 1280, height: 720};
		const imageSrc = this.webcamRef.current.getScreenshot(sizeForSreenShot);

		if (!imageSrc) {
			toast(errorCase['Camera Not Found']);
			this.setState({verifying: false});
			return;
		}

		var file = await this.dataURLtoFile(imageSrc, 'a.jpg');
		const response = await faceKIService.verify(file);
		this.setState({photoIndex: photoIndex + 1});

		if (!response) {
			toast(errorCase['Biometic Server Error']);
			this.setState({verifying: false, photoIndex: 0});
			return;
		}

		if (response.status !== 'Verify OK' && photoIndex === 5) {
			toast(errorCase[response.status]);
			this.setState({verifying: false, photoIndex: 0});
		} else if (response.status === 'Verify OK') {
			const nameArry = response.name.split(',');

			if (nameArry.includes(authData.email.toLowerCase())) {
				this.setState({faceKISuccess: true, verifying: false});
				this.continueLogin();
			} else {
				toast(errorCase['Invalid Email']);
				this.setState({verifying: false, photoIndex: 0});
			}
		} else {
			await this.checkAndVerify();
		}
	}

	continueLogin() {
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
			alert('Verify first!');
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

				setAuthData(data);
				setPrivKey('web3authprivatekey');
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

	render() {
		return (
			<React.Fragment>
				{this.state.login && (
					<Modal
						open={true}
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
						closable={false}
						maskClosable={false}
					>
						<h4 style={{textAlign: 'center', fontWeight: 'bold'}}>
							Authenticate Your Face
						</h4>
						<h5 style={{textAlign: 'center', fontSize: 16}}>
							To log into your wallet, please complete biometric authentication
						</h5>
						<br />
						{this.state.webcamEnabled && (
							<div
								style={{
									position: 'relative',
								}}
							>
								<div className="flex-container">
									<div className="flex-container-first">
										<div className="position-head color-black">
											Position your face in the oval
										</div>
									</div>
									<button className="btn-x" onClick={this.handleModalClose}>
										X
									</button>
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
									<div className="span-class color-black">
										Verifying will take 10 seconds as maximum
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
								onClick={() => this.checkAndVerify()}
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
