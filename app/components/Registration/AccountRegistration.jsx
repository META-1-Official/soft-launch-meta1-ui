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
import {Input, Button} from 'antd';
import Webcam from 'react-webcam';
import faceKIService from 'services/face-ki.service';
import kycService from 'services/kyc.service';
import migrationService from 'services/migration.service';
import {toast} from 'react-toastify';
import LoginProvidersModal from 'components/Web3Auth/LoginProvidersModal';

const OvalImage = require('assets/oval/oval.png');

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
			device: {},
			webcamEnabled: false,
			verifying: false,
			photoIndex: 0,
			authModalOpen: false,
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

		this.setState({verifying: true});

		const imageSrc = this.webcamRef.current.getScreenshot({
			width: 1280,
			height: 720,
		});

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

	UNSAFE_componentWillMount() {
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
	}

	loadVideo(flag) {
		const videoTag = document.querySelector('video');
		console.log('[loadVideo]', flag, videoTag);
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
				console.log('[loadVideo] @114 - ', err);
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

	proceedESign() {
		const {privKey, authData} = this.props;
		ss.set('confirmedTerms4Token', 'success');
		ss.set('email', authData?.email?.toLowerCase());
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
			return (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<h4 style={{textAlign: 'center', fontWeight: 'bold'}}>
						{counterpart.translate('registration.biometric_2fa_title')}
					</h4>
					<h5 style={{textAlign: 'center', fontSize: 16}}>
						{counterpart.translate('registration.biometric_2fa_info')}
					</h5>
					<br />
					{this.state.webcamEnabled && (
						<div
							css={(theme) => ({
								position: 'relative',
								border: `1px solid ${theme.colors.borderColor}`,
								borderRadius: '3px',
							})}
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
								<span className="span-class color-black">
									{!this.state.faceKISuccess
										? counterpart.translate(
												'registration.verify_to_begin_enrollment'
										  )
										: counterpart.translate(
												'registration.verification_success'
										  )}
								</span>
								<div className="span-class color-black">
									{counterpart.translate(
										'registration.require_min_camera_resolution'
									)}
								</div>
								<div className="span-class color-black">
									{counterpart.translate('registration.verification_duration')}
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
							onClick={() => this.checkAndEnroll()}
							style={{background: '#ffcc00', border: 'none'}}
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
