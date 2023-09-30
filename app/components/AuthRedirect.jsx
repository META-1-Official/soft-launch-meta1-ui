import React from 'react';
import {connect} from 'alt-react';
import {ChainStore} from 'meta1-vision-js';
import {PrivateKey, FetchChain, key} from 'meta1-vision-js/es';
import qs from 'qs';
import axios from 'axios';
import {Modal, Select} from 'antd';
import counterpart from 'counterpart';
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
import {Button} from 'antd';
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
	'jin124',
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
		this.webcamRef = React.createRef();
	}

	async getFASToken() {
		try {
			const email = this.props.authData?.email.toLowerCase();
			const account = ss.get('account_login_name', '');
			const {token} = await fasServices.getFASToken({
				account,
				email,
				task: TASK.VERIFY,
			});

			if (token) {
				this.setState((prevState) => ({...prevState, token}));
			} else {
				alert('Invalid combination of account name and email');
				this.props.history.push('/');
			}
		} catch (error) {
			console.error('FASToken Error: ', error);
		}
	}

	componentDidMount() {
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
		const {openLogin, privKey, authData} = this.props;
		if (openLogin && !prevProps.openLogin) {
			this.generateAuthData();
		}
		if (!prevProps.authData && this.props.authData) {
			this.getFASToken();
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

	// async checkAndVerify() {
	// 	const {privKey, authData} = this.props;
	// 	const {photoIndex, device} = this.state;
	// 	const accountName = ss.get('account_login_name', '');
	//
	// 	if (!accountName || !privKey) return;
	//
	// 	this.setState({verifying: true});
	//
	// 	const response_user = await kycService.getUserKycProfile(
	// 		authData.email.toLowerCase()
	// 	);
	//
	// 	if (!response_user?.member1Name) {
	// 		toast(errorCase['Not Matched']);
	// 		this.setState({verifying: false});
	// 		return;
	// 	} else {
	// 		const walletArry = response_user.member1Name.split(',');
	//
	// 		if (!walletArry.includes(accountName)) {
	// 			toast(errorCase['Not Matched']);
	// 			this.setState({verifying: false});
	// 			return;
	// 		}
	// 	}
	//
	// 	const imageSrc = this.webcamRef.current.takePhoto();
	//
	// 	if (!imageSrc) {
	// 		toast(errorCase['Camera Not Found']);
	// 		this.setState({verifying: false});
	// 		return;
	// 	}
	//
	// 	var file = await this.dataURLtoFile(imageSrc, 'a.jpg');
	//
	// 	const response = await faceKIService.liveLinessCheck(file);
	// 	this.setState({photoIndex: photoIndex + 1});
	//
	// 	if (!response) {
	// 		toast(errorCase['Biometic Server Error']);
	// 		this.setState({verifying: false, photoIndex: 0});
	// 		return;
	// 	}
	//
	// 	if (response.data.liveness !== 'Genuine' && photoIndex === 5) {
	// 		toast(errorCase['Face not Detected']);
	// 		this.setState({verifying: false, photoIndex: 0});
	// 	} else if (response.data.liveness === 'Genuine') {
	// 		this.setState({photoIndex: 0});
	// 		await this.faceVerify(file);
	// 	} else {
	// 		await this.checkAndVerify();
	// 	}
	// }

	// async faceVerify(file) {
	// 	const {privKey, authData} = this.props;
	//
	// 	const response_verify = await faceKIService.verify(file);
	// 	if (response_verify.status === 'Verify OK') {
	// 		const nameArry = response_verify.name.split(',');
	//
	// 		if (nameArry.includes(authData.email.toLowerCase())) {
	// 			this.setState({faceKISuccess: true});
	// 			this.setState({verifying: false});
	// 			this.continueLogin();
	// 		} else {
	// 			toast(errorCase['Invalid Email']);
	// 			this.setState({verifying: false});
	// 		}
	// 	} else if (response_verify.status === 'Verify Failed') {
	// 		toast(errorCase['Verify Failed']);
	// 		this.setState({verifying: false});
	// 	} else {
	// 		toast('Please try again.');
	// 		this.setState({verifying: false});
	// 	}
	// }

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

	render() {
		const {width, devices, activeDeviceId} = this.state;
		const theme = this.props.theme;
		const aspectRatio = 1.07;
		const webCamWidth = width > 576 ? 550 : width - 26;

		return (
			<div className="no-margin grid-block registration">
				{this.state.login && (
					<div className="horizontal align-center text-center">
						<div className="create-account-block">
							<div className="custom-auth-faceki">
								<h4>
									{counterpart.translate('registration.authenticate_your_face')}
								</h4>
								<h5>
									{counterpart.translate(
										'registration.require_biometric_authentication'
									)}
								</h5>
								{this.state.webcamEnabled && (
									<div
										className="webcam-wrapper"
										style={{
											width: webCamWidth,
											height: webCamWidth / aspectRatio,
										}}
									>
										<div className="flex-container">
											<div className="flex-container-first">
												<div className="position-head">
													{counterpart.translate(
														'registration.requiure_face_in_oval'
													)}
												</div>
											</div>
											<button className="btn-x" onClick={this.handleModalClose}>
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
										{/*<div className="flex_container">*/}
										{/*	<span className="span-class">*/}
										{/*		{!this.state.faceKISuccess*/}
										{/*			? counterpart.translate(*/}
										{/*					'registration.require_verification'*/}
										{/*			  )*/}
										{/*			: counterpart.translate(*/}
										{/*					'registration.verification_success'*/}
										{/*			  )}*/}
										{/*	</span>*/}
										{/*	<div className="span-class">*/}
										{/*		{counterpart.translate(*/}
										{/*			'registration.require_min_camera_resolution'*/}
										{/*		)}*/}
										{/*	</div>*/}
										{/*	<div className="span-class">*/}
										{/*		{counterpart.translate(*/}
										{/*			'registration.verification_duration'*/}
										{/*		)}*/}
										{/*	</div>*/}
										{/*</div>*/}
									</div>
								)}
								{/*{devices.length !== 0 && activeDeviceId !== '' && (*/}
								{/*	<div style={{width: webCamWidth}}>*/}
								{/*		<Select*/}
								{/*			value={activeDeviceId}*/}
								{/*			onChange={(value) => {*/}
								{/*				let errMsgEle =*/}
								{/*					document.getElementById('video').previousSibling;*/}
								{/*				errMsgEle && errMsgEle.remove();*/}
								{/*				this.setState({activeDeviceId: value});*/}
								{/*			}}*/}
								{/*			getPopupContainer={(triggerNode) =>*/}
								{/*				triggerNode.parentNode*/}
								{/*			}*/}
								{/*		>*/}
								{/*			{devices.map((d) => {*/}
								{/*				return (*/}
								{/*					<Select.Option key={d.deviceId} value={d.deviceId}>*/}
								{/*						{d.label}*/}
								{/*					</Select.Option>*/}
								{/*				);*/}
								{/*			})}*/}
								{/*		</Select>*/}
								{/*	</div>*/}
								{/*)}*/}
								{/*<div className="button-wrapper">*/}
								{/*	<Button*/}
								{/*		onClick={() => this.checkAndVerify()}*/}
								{/*		disabled={*/}
								{/*			this.state.verifying*/}
								{/*				? true*/}
								{/*				: this.state.faceKISuccess*/}
								{/*				? true*/}
								{/*				: false*/}
								{/*		}*/}
								{/*	>*/}
								{/*		{this.state.verifying*/}
								{/*			? counterpart.translate('registration.faceki_verifying')*/}
								{/*			: counterpart.translate('registration.faceki_verify')}*/}
								{/*	</Button>*/}
								{/*</div>*/}
							</div>
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
