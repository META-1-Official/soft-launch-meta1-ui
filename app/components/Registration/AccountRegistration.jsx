import React from 'react';
import Translate from 'react-translate-component';
import ReactTooltip from 'react-tooltip';
import {connect} from 'alt-react';
import qs from 'qs';
import {PrivateKey, key} from 'meta1-vision-js/es';
import utils from 'common/utils';
import SettingsActions from 'actions/SettingsActions';
import AccountRegistrationForm from './AccountRegistrationForm';
import AccountRegistrationConfirm from './AccountRegistrationConfirm';
import {ArrowLeftOutlined} from '@ant-design/icons';
import AuthStore from '../../stores/AuthStore';
import ls from '../../lib/common/localStorage';
import {Form, Input, Button, Tooltip} from 'antd';
import Webcam from 'react-webcam';
import faceKIService from 'services/face-ki.service';
import kycService from 'services/kyc.service';
import migrationService from 'services/migration.service';
import {toast} from 'react-toastify';

const OvalImage = require('assets/oval/oval.png');

const STORAGE_KEY = '__AuthData__';
const ss = new ls(STORAGE_KEY);

class AccountRegistration extends React.Component {
	constructor(props) {
		super();
		this.state = {
			accountName: '',
			password: '',
			firstStep: false,
			torusAlreadyAssociatedEmail: false,
			finalStep: false,
			faceKIStep: false,
			migrationStep: false,
			faceKISuccess: false,
			passkey: '',
			device: {},
			webcamEnabled: false,
			verifying: false,
		};
		this.webcamRef = React.createRef();
		this.continue = this.continue.bind(this);
		this.toggleConfirmed = this.toggleConfirmed.bind(this);
		this.renderScreen = this.renderScreen.bind(this);
		this.renderTorusLogin = this.renderTorusLogin.bind(this);
		this.proceedWithExistingEmail = this.proceedWithExistingEmail.bind(this);
		this.proceedLoggingOut = this.proceedLoggingOut.bind(this);
		this.proceedESign = this.proceedESign.bind(this);
		this.proceedTorus = this.proceedTorus.bind(this);
		this.faceEnroll = this.faceEnroll.bind(this);
		this.nextStep = this.nextStep.bind(this);
		this.backBtnClick = this.backBtnClick.bind(this);
		this.handleImportBtn = this.handleImportBtn.bind(this);
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

	async faceEnroll() {
		const {privKey, authData} = this.props;
		const email = authData.email.toLowerCase();

		if (!email || !privKey) return;

		this.setState({verifying: true});

		const imageSrc = this.webcamRef.current.getScreenshot();

		if (!imageSrc) {
			toast('Check your camera');
			this.setState({verifying: false});
			return;
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

				if (nameArry.includes(email)) {
					toast('You already enrolled and verified successfully.');
					this.setState({verifying: false, faceKISuccess: true});
				} else {
					const response_user = await kycService.getUserKycProfile(email);
					if (response_user) {
						toast('This email already has been used for another user.');
						this.setState({verifying: false});
					} else {
						const newName = response_verify.name + ',' + email;
						const response_remove = await faceKIService.remove_user(
							response_verify.name
						);

						if (!response_remove) {
							toast('Something went wrong.');
							this.setState({verifying: false});
						} else {
							const response_enroll = await faceKIService.enroll(file, newName);
							if (response_enroll.status === 'Enroll OK') {
								const add_response = await kycService.postUserKycProfile(
									email,
									`usr_${email}_${privKey}`
								);
								if (add_response.result) {
									toast('Successfully enrolled.');
									this.setState({verifying: false, faceKISuccess: true});
								} else {
									toast('Something went wrong.');
									this.setState({verifying: false});
								}
							}
						}
					}
				}
			} else if (response_verify.status === 'Verify Failed') {
				const response_user = await kycService.getUserKycProfile(email);
				if (response_user) {
					toast('This email already has been used for another user.');
					this.setState({verifying: false});
				} else {
					const response_enroll = await faceKIService.enroll(file, email);
					if (response_enroll.status === 'Enroll OK') {
						const add_response = await kycService.postUserKycProfile(
							email,
							`usr_${email}_${privKey}`
						);
						if (add_response.result) {
							toast('Successfully enrolled.');
							this.setState({verifying: false, faceKISuccess: true});
						} else {
							await faceKIService.remove_user(email);
							toast('Something went wrong.');
							this.setState({verifying: false});
						}
					}
				}
			} else {
				toast('Please try again.');
				this.setState({verifying: false});
			}
		}
	}

	nextStep() {
		const {privKey} = this.props;
		const accountName = ss.get('account_registration_name', '');
		if (!accountName || !privKey) return;

		if (this.state.faceKISuccess === true) {
			this.loadVideo(false).then(() => {
				this.setState({
					accountName,
					password: this.genKey(`${accountName}${privKey}`),
					finalStep: true,
					faceKIStep: false,
					migrationStep: false,
					firstStep: false,
				});
			});
		} else {
			toast('Please enroll first.');
		}
	}

	backBtnClick() {
		this.setState({
			finalStep: false,
			faceKIStep: false,
			migrationStep: false,
			firstStep: true,
		});
	}

	async handleImportBtn() {
		const response = await migrationService.validateSignature(
			this.state.accountName,
			this.state.passkey
		);
		if (response?.isValid === true) {
			this.setState(
				{
					firstStep: false,
					migrationStep: false,
				},
				() => this.renderTorusLogin()
			);
		} else {
			toast('Private Key is invalid');
			return;
		}
	}

	componentWillMount() {
		SettingsActions.changeSetting({
			setting: 'passwordlessLogin',
			value: true,
		});
	}

	componentDidMount() {
		const {openLogin, privKey, authData, setOpenLoginInstance} = this.props;
		this.loadVideo(false);
		ReactTooltip.rebuild();
		if (this.props.location && this.props.location.search) {
			const param = qs.parse(this.props.location.search, {
				ignoreQueryPrefix: true,
			}).mode;
			const eSignStatus = qs.parse(this.props.location.search, {
				ignoreQueryPrefix: true,
			}).eSignStatus;

			if (param === 'proceedRegistration' && openLogin && privKey && authData) {
				this.proceedTorus();
			} else if (eSignStatus === 'success') {
				this.proceedESign();
			} else {
				this.props.history.push('/registration');
			}
		} else {
			this.setState({firstStep: true});
			setOpenLoginInstance();
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
				if (videoTag) {
					for (const track of videoTag.srcObject.getTracks()) track.stop();
					videoTag.srcObject = null;
				}
			} catch (err) {
				console.log('[loadVideo] @104 - ', err);
			}

			this.setState({webcamEnabled: false, device: {}});
			return Promise.resolve();
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return !utils.are_equal_shallow(nextState, this.state);
	}

	async continue({accountName}) {
		const response = await migrationService.checkOldUser(accountName);

		if (response?.found === true) {
			this.setState({
				accountName,
				firstStep: false,
				migrationStep: true,
			});
		} else {
			this.setState(
				{
					accountName,
					firstStep: false,
				},
				() => this.renderTorusLogin()
			);
		}
	}

	toggleConfirmed() {
		const {active} = this.state;
		this.setState({
			active: !active,
		});
	}

	async renderTorusLogin() {
		const {accountName} = this.state;
		try {
			const {openLogin} = this.props;
			localStorage.setItem('openlogin_store', '{}');
			await openLogin.init();

			if (openLogin.privKey) {
				const privKey = openLogin.privKey;
				const data = await openLogin.getUserInfo();
				this.props.setPrivKey(privKey);
				this.props.setAuthData(data);
				if (!data.email) {
					await openLogin.init();
					await openLogin.logout({});
					ss.set('account_registration_name', accountName);
					ss.remove('account_login_name');
					await openLogin.login();
				}
				this.setState({torusAlreadyAssociatedEmail: data.email.toLowerCase()});
			} else {
				ss.set('account_registration_name', accountName);
				ss.remove('account_login_name');
				await openLogin.init();
				await openLogin.login();
				const data = await openLogin.getUserInfo();
			}
		} catch (error) {
			console.log('Torus Error:', error);
			if (error.message === 'user canceled login')
				this.setState({firstStep: true});
		}
	}

	proceedWithExistingEmail() {
		const {accountName} = this.state;
		ss.set('account_registration_name', accountName);
		ss.remove('account_login_name');
		this.props.history.push('/auth-proceed?mode=existingEmailCreation');
	}

	async proceedLoggingOut() {
		const {openLogin} = this.props;
		const {accountName} = this.state;
		if (openLogin) {
			await openLogin.logout({});
			ss.set('account_registration_name', accountName);
			ss.remove('account_login_name');
			ss.remove('account_login_token');
			await openLogin.init();
			await openLogin.login();
		} else {
			this.setState({torusAlreadyAssociatedEmail: ''});
		}
	}

	proceedESign() {
		const {privKey, authData} = this.props;
		ss.set('confirmedTerms4Token', 'success');
		ss.set('email', authData.email.toLowerCase());
		const accountName = ss.get('account_registration_name', '');
		if (!accountName || !privKey) return;

		this.loadVideo(false).then(() => {
			this.setState({
				accountName,
				password: this.genKey(`${accountName}${privKey}`),
				finalStep: true,
				firstStep: false,
				faceKIStep: false,
			});
		});
	}

	proceedTorus() {
		const accountName = ss.get('account_registration_name', '');
		const {privKey, authData} = this.props;
		if (!accountName || !privKey) return;
		ss.set('email', authData.email.toLowerCase());
		ss.set('confirmed', false);
		ss.set('confirmedTerms', false);
		ss.set('confirmedTerms2', false);
		ss.set('confirmedTerms3', false);
		ss.set('confirmedTerms4', false);
		this.loadVideo(true).then(() => {
			this.setState({
				accountName,
				password: this.genKey(`${accountName}${privKey}`),
				faceKIStep: true,
				firstStep: false,
				finalStep: false,
			});
		});
	}

	genKey(seed) {
		return `P${PrivateKey.fromSeed(key.normalize_brainKey(seed)).toWif()}`;
	}

	renderScreen() {
		const {
			firstStep,
			faceKIStep,
			torusAlreadyAssociatedEmail,
			finalStep,
			migrationStep,
		} = this.state;
		// if (firstStep) {
		// 	return <AccountRegistrationForm continue={this.continue} />;
		// } else if (torusAlreadyAssociatedEmail) {
		if (torusAlreadyAssociatedEmail) {
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
		} else if (migrationStep) {
			return (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<div
						style={{
							fontSize: '24px',
							color: 'white',
							marginBottom: '15px',
							marginTop: '50px',
						}}
					>
						Import Legacy Wallet
					</div>
					<div
						style={{
							color: 'white',
							marginBottom: '50px',
							lineHeight: 1.2,
							marginBottom: '10px',
						}}
					>
						This wallet is existing in the LEGACY META Blockchain and so it
						should be imported instead of being created. If you own this wallet,
						you can continue to import. In other case, you need to go back and
						create the wallet with the different wallet name.
					</div>
					<div style={{color: 'white', marginBottom: '50px', lineHeight: 1.2}}>
						To import your original wallet from the LEGACY META Blockchain
						please enter your LEGACY wallet ID and passkey for that wallet
						below.
					</div>
					<div style={{width: '100%'}}>
						<label>META Legacy Wallet Name</label>
						<input
							control={Input}
							value={this.state.accountName}
							type="text"
							contentEditable={false}
							style={{border: '1px solid grey'}}
						/>
					</div>
					<div style={{width: '100%', marginTop: '15px'}}>
						<label>Your Private Passkey</label>
						<input
							control={Input}
							value={this.state.passkey}
							type="password"
							placeholder="Enter passkey or owner private key"
							onChange={(event) => {
								this.setState({passkey: event.target.value});
							}}
							style={{border: '1px solid grey'}}
						/>
					</div>
					<Button
						style={{
							height: '60px',
							width: '100%',
							background: '#ffc000',
							color: '#440000',
							fontSize: '18px',
							fontWeight: '600',
							borderRadius: '6px',
							border: 'none',
							marginTop: '20px',
						}}
						disabled={
							this.state.accountName === '' || this.state.passkey === ''
						}
						onClick={this.handleImportBtn}
					>
						Import Wallet
					</Button>
				</div>
			);
		} else if (faceKIStep) {
			return (
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
					{this.state.webcamEnabled && (
						<div
							style={{
								position: 'relative',
							}}
						>
							<div className="flex-container-new">
								<div className="flex-container-first">
									<div className="position-head color-black">
										Position your face in the oval
									</div>
								</div>
								<button
									className="btn-x"
									onClick={() => {
										this.setState({
											accountName: '',
											password: '',
											firstStep: true,
											torusAlreadyAssociatedEmail: false,
											finalStep: false,
											faceKIStep: false,
											migrationStep: false,
											faceKISuccess: false,
											passkey: '',
											device: {},
											webcamEnabled: false,
											verifying: false,
										});
										this.props.history.push('/registration');
									}}
								>
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
							<div className="flex_container flex-padding">
								<span className="span-class color-black custom-margin-bottom-zero">
									{!this.state.faceKISuccess
										? 'Press verify to begin enrollment'
										: 'Verification Successful!'}
								</span>
								<div className="span-class color-black custom-margin-bottom-zero">
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
							onClick={this.faceEnroll}
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
						<Button
							onClick={this.nextStep}
							style={{
								background: '#ffcc00',
								border: 'none',
								marginLeft: '10px',
							}}
							disabled={!this.state.faceKISuccess}
						>
							Next
						</Button>
					</div>
				</div>
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
		} else {
			return (
				<AccountRegistrationForm
					continue={this.continue}
					visibility={firstStep}
				/>
			);
		}
	}

	render() {
		return (
			<div className="no-margin grid-block registration-layout registration">
				<div className="horizontal align-center text-center">
					<div className="create-account-block">
						{this.state.migrationStep && (
							<div style={{cursor: 'pointer'}} onClick={this.backBtnClick}>
								{'<< Back'}
							</div>
						)}
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
