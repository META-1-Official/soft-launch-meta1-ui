import React from 'react';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import ReactTooltip from 'react-tooltip';
import {connect} from 'alt-react';
import qs from 'qs';
import {PrivateKey, key} from 'meta1-vision-js/es';
import utils from 'common/utils';
import SettingsActions from 'actions/SettingsActions';
import AccountRegistrationForm from './AccountRegistrationForm';
import AccountRegistrationConfirm from './AccountRegistrationConfirm';
import AuthStore from '../../stores/AuthStore';
import ls from '../../lib/common/localStorage';
import {Input, Button, Select} from 'antd';
import {Camera} from 'react-camera-pro';
import faceKIService from 'services/face-ki.service';
import kycService from 'services/kyc.service';
import migrationService from 'services/migration.service';
import {toast} from 'react-toastify';
import LoginProvidersModal from 'components/Web3Auth/LoginProvidersModal';
import ChainStore from 'meta1-vision-js/es/chain/src/ChainStore';

const OvalImage = require('assets/oval/oval.png');
const FlipImage = require('assets/flip.png');

const STORAGE_KEY = '__AuthData__';
const ss = new ls(STORAGE_KEY);

class AccountRegistration extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			accountName: '',
			password: '',
			firstStep: false,
			finalStep: false,
			faceKIStep: false,
			migrationStep: false,
			faceKISuccess: false,
			passkey: '',
			devices: [],
			webcamEnabled: false,
			verifying: false,
			photoIndex: 0,
			authModalOpen: false,
			width: 0,
			height: 0,
			numberOfCameras: 0,
			activeDeviceId: '',
		};
		this.webcamRef = React.createRef();
		this.continue = this.continue.bind(this);
		this.toggleConfirmed = this.toggleConfirmed.bind(this);
		this.renderScreen = this.renderScreen.bind(this);
		this.renderTorusLogin = this.renderTorusLogin.bind(this);
		this.proceedESign = this.proceedESign.bind(this);
		this.proceedTorus = this.proceedTorus.bind(this);
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

	async checkAndEnroll() {
		const {privKey, authData} = this.props;
		const {photoIndex} = this.state;
		const email = authData.email.toLowerCase();

		if (!email || !privKey) return;

		if (!this.webcamRef.current) return;

		this.setState({verifying: true});
		const imageSrc = this.webcamRef.current.takePhoto();

		if (!imageSrc) {
			toast(counterpart.translate('registration.check_camera'));
			this.setState({verifying: false});
			return;
		}

		var file = await this.dataURLtoFile(imageSrc, 'a.jpg');
		const response = await faceKIService.liveLinessCheck(file);
		this.setState({photoIndex: photoIndex + 1});

		if (!response) {
			toast(counterpart.translate('registration.biometric_server_error'));
			this.setState({verifying: false, photoIndex: 0});
			return;
		}

		if (response.data.liveness !== 'Genuine' && photoIndex === 10) {
			toast(counterpart.translate('registration.face_not_detected'));
			this.setState({verifying: false, photoIndex: 0});
		} else if (response.data.liveness === 'Genuine') {
			this.setState({photoIndex: 0});
			await this.faceEnroll(file);
		} else {
			await this.checkAndEnroll();
		}
	}

	async faceEnroll(file) {
		const {privKey, authData} = this.props;
		const email = authData.email.toLowerCase();

		if (!email || !privKey) return;

		const response_verify = await faceKIService.verify(file);
		if (response_verify.status === 'Verify OK') {
			const nameArry = response_verify.name.split(',');

			if (nameArry.includes(email)) {
				toast(counterpart.translate('registration.faceki_user_exist'));
				this.setState({verifying: false, faceKISuccess: true});
				this.nextStep();
			} else {
				const response_user = await kycService.getUserKycProfile(email);
				if (response_user) {
					toast(counterpart.translate('registration.faceki_email_used'));
					this.setState({verifying: false});
				} else {
					const newName = response_verify.name + ',' + email;
					const response_remove = await faceKIService.remove_user(
						response_verify.name
					);

					if (!response_remove) {
						toast(counterpart.translate('registration.went_wrong'));
						this.setState({verifying: false});
					} else {
						const response_enroll = await faceKIService.enroll(file, newName);
						if (response_enroll.status === 'Enroll OK') {
							const add_response = await kycService.postUserKycProfile(
								email,
								`usr_${email}_${privKey}`
							);
							if (add_response.result) {
								toast(counterpart.translate('registration.enroll_success'));
								this.setState({verifying: false, faceKISuccess: true});
								this.nextStep();
							} else {
								toast(counterpart.translate('registration.went_wrong'));
								this.setState({verifying: false});
							}
						}
					}
				}
			}
		} else if (response_verify.status === 'Verify Failed') {
			const response_user = await kycService.getUserKycProfile(email);
			if (response_user) {
				toast(counterpart.translate('registration.faceki_email_used'));
				this.setState({verifying: false});
			} else {
				const response_enroll = await faceKIService.enroll(file, email);
				if (response_enroll.status === 'Enroll OK') {
					const add_response = await kycService.postUserKycProfile(
						email,
						`usr_${email}_${privKey}`
					);
					if (add_response.result) {
						toast(counterpart.translate('registration.enroll_success'));
						this.setState({verifying: false, faceKISuccess: true});
						this.nextStep();
					} else {
						await faceKIService.remove_user(email);
						toast(counterpart.translate('registration.went_wrong'));
						this.setState({verifying: false});
					}
				}
			}
		} else {
			toast(counterpart.translate('registration.please_retry'));
			this.setState({verifying: false});
		}
	}

	nextStep() {
		const {privKey} = this.props;
		const accountName = ss.get('account_registration_name', '');
		if (!accountName || !privKey) return;

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
			this.renderTorusLogin();
		} else {
			toast(counterpart.translate('registration.invalid_private_key'));
			return;
		}
	}

	updateDimensions = () => {
		this.setState({width: window.innerWidth, height: window.innerHeight});
	};

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions);
	}

	UNSAFE_componentWillMount() {
		SettingsActions.changeSetting({
			setting: 'passwordlessLogin',
			value: true,
		});
		this.updateDimensions();
		this._checkReferrer();
	}

	timer = (ms) => new Promise((res) => setTimeout(res, ms));

	async _checkReferrer() {
		let referralAccount = '';
		if (window) {
			function getQueryParam(param) {
				var result = window.location.search.match(
					new RegExp('(\\?|&)' + param + '(\\[\\])?=([^&]*)')
				);

				return result ? decodeURIComponent(result[3]) : false;
			}
			let validQueries = ['r', 'referrer', 'referral'];
			for (let i = 0; i < validQueries.length; i++) {
				referralAccount = getQueryParam(validQueries[i]);
				if (referralAccount) break;
			}
		}

		if (referralAccount) {
			let chainAccount = ChainStore.getAccount(referralAccount);
			while (chainAccount === undefined) {
				chainAccount = ChainStore.getAccount(referralAccount);
				await this.timer(1000);
			}

			if (chainAccount && chainAccount.get) {
				let accountStatus = ChainStore.getAccountMemberStatus(chainAccount);

				if (accountStatus != 'lifetime') {
					this.props.history.push('/registration');
				}
			}
		}
	}

	componentDidMount() {
		const {openLogin, privKey, authData, setOpenLoginInstance} = this.props;
		this.loadVideo(false);
		ReactTooltip.rebuild();
		if (this.props.location && this.props.location.search) {
			console.log;
			const param = qs.parse(this.props.location.search, {
				ignoreQueryPrefix: true,
			}).mode;
			const eSignStatus = qs.parse(this.props.location.search, {
				ignoreQueryPrefix: true,
			}).eSignStatus;

			const ref = qs.parse(this.props.location.search, {
				ignoreQueryPrefix: true,
			}).ref;

			if (param === 'proceedRegistration' && openLogin && privKey && authData) {
				this.proceedTorus();
			} else if (eSignStatus === 'success') {
				this.proceedESign();
			} else if (ref !== null) {
				this.setState({firstStep: true});
				setOpenLoginInstance();
			}
		} else {
			this.setState({firstStep: true});
			setOpenLoginInstance();
		}

		window.addEventListener('resize', this.updateDimensions);
	}

	async loadVideo(flag) {
		const videoTag = document.querySelector('video');

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
				if (videoTag) {
					for (const track of videoTag.srcObject.getTracks()) track.stop();
					videoTag.srcObject = null;
				}
			} catch (err) {
				console.log('[loadVideo] - ', err);
			}

			this.setState({webcamEnabled: false, devices: []});
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

		localStorage.setItem('openlogin_store', '{}');
		ss.set('account_registration_name', accountName);
		ss.remove('account_login_name');

		this.setState({authModalOpen: true});
	}

	async proceedESign() {
		const {privKey, authData} = this.props;
		ss.set('confirmedTerms4Token', 'success');
		ss.set('email', authData?.email?.toLowerCase());
		const accountName = ss.get('account_registration_name', '');
		if (!accountName || !privKey) return;

		await this.loadVideo(false).then(() => {
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
		const {firstStep, faceKIStep, finalStep, migrationStep} = this.state;
		if (migrationStep) {
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
						css={(theme) => ({
							fontSize: '24px',
							color: theme.colors.textColor,
							marginBottom: '15px',
							marginTop: '50px',
						})}
					>
						{counterpart.translate('registration.import_legacy_wallet')}
					</div>
					<div
						css={(theme) => ({
							color: theme.colors.textColor,
							marginBottom: '30px',
							lineHeight: 1.2,
						})}
					>
						{counterpart.translate('registration.import_legacy_wallet_info1')}
					</div>
					<div
						css={(theme) => ({
							color: theme.colors.textColor,
							marginBottom: '30px',
							lineHeight: 1.2,
						})}
					>
						{counterpart.translate('registration.import_legacy_wallet_info2')}
					</div>
					<div style={{width: '100%'}}>
						<label>
							{counterpart.translate('registration.meta_legacy_wallet_name')}
						</label>
						<input
							control={Input}
							value={this.state.accountName}
							type="text"
							contentEditable={false}
							style={{border: '1px solid grey'}}
						/>
					</div>
					<div style={{width: '100%', marginTop: '15px'}}>
						<label>
							{counterpart.translate('registration.your_private_passkey')}
						</label>
						<input
							control={Input}
							value={this.state.passkey}
							type="password"
							placeholder={counterpart.translate(
								'registration.enter_passkey_or_private_key'
							)}
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
						{counterpart.translate('registration.import_wallet')}
					</Button>
				</div>
			);
		} else if (faceKIStep) {
			const {width} = this.state;
			const theme = this.props.theme;
			const aspectRatio = 1.07;
			const webCamWidth = width > 576 ? 500 : width - 70;

			return (
				<div className="biometric-auth-section">
					<h4>{counterpart.translate('registration.biometric_2fa_title')}</h4>
					<h5>{counterpart.translate('registration.biometric_2fa_info')}</h5>
					<br />
					{this.state.webcamEnabled && (
						<div
							className="webcam-wrapper"
							style={{width: webCamWidth, height: webCamWidth / aspectRatio}}
						>
							<div className="flex-container-new">
								<div className="flex-container-first">
									<div className="position-head color-black">
										{counterpart.translate(
											'registration.requiure_face_in_oval'
										)}
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
							{this.state.numberOfCameras > 1 && (
								<img
									className="flip-button"
									src={FlipImage}
									onClick={() => {
										if (this.webcamRef.current) {
											const result = this.webcamRef.current.switchCamera();
										}
									}}
								/>
							)}
							<Camera
								ref={this.webcamRef}
								aspectRatio="cover"
								numberOfCamerasCallback={(i) =>
									this.setState({numberOfCameras: i})
								}
								videoSourceDeviceId={this.state.activeDeviceId}
								errorMessages={{
									noCameraAccessible:
										'No camera device accessible. Please connect your camera or try a different browser.',
									permissionDenied:
										'Permission denied. Please refresh and give camera permission.',
									switchCamera:
										'It is not possible to switch camera to different one because there is only one video device accessible.',
									canvas: 'Canvas is not supported.',
								}}
							/>
							<img src={OvalImage} alt="oval-image" className="oval-image" />
							<div className="flex_container flex-padding">
								<span className="span-class">
									{!this.state.faceKISuccess
										? counterpart.translate(
												'registration.verify_to_begin_enrollment'
										  )
										: counterpart.translate(
												'registration.verification_success'
										  )}
								</span>
								<div className="span-class">
									{counterpart.translate(
										'registration.require_min_camera_resolution'
									)}
								</div>
								<div className="span-class">
									{counterpart.translate('registration.verification_duration')}
								</div>
							</div>
						</div>
					)}
					<div style={{width: webCamWidth}}>
						<Select
							value={this.state.activeDeviceId}
							onChange={(value) => {
								let errMsgEle =
									document.getElementById('video').previousSibling;
								errMsgEle && errMsgEle.remove();
								this.setState({activeDeviceId: value});
							}}
							getPopupContainer={(triggerNode) => triggerNode.parentNode}
						>
							{this.state.devices.map((d) => {
								return (
									<Select.Option key={d.deviceId} value={d.deviceId}>
										{d.label}
									</Select.Option>
								);
							})}
						</Select>
					</div>
					<div className="button-wrapper">
						<Button
							onClick={() => this.checkAndEnroll()}
							disabled={
								this.state.verifying
									? true
									: this.state.faceKISuccess
									? true
									: false
							}
						>
							{this.state.verifying
								? counterpart.translate('registration.faceki_verifying')
								: counterpart.translate('registration.faceki_verify')}
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
			<>
				<div className="no-margin grid-block registration-layout registration">
					<div className="horizontal align-center text-center">
						<div className="create-account-block">
							{this.state.migrationStep && (
								<div style={{cursor: 'pointer'}} onClick={this.backBtnClick}>
									{`<< ${counterpart.translate(
										'registration.faceki_verifying'
									)}`}
								</div>
							)}
							{this.state.faceKIStep === false && (
								<Translate
									component="h3"
									className="registration-account-title"
									content="registration.createByPassword"
								/>
							)}
							{this.renderScreen()}
						</div>
					</div>
				</div>
				{this.state.authModalOpen && (
					<LoginProvidersModal
						open={this.state.authModalOpen}
						setOpen={(val) => this.setState({authModalOpen: val})}
						web3auth={this.props.openLogin}
						authMode="registration"
					/>
				)}
			</>
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
