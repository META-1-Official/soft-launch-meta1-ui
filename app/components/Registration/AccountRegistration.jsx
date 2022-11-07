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
import migrationService from 'services/migration.service';

import {toast} from 'react-toastify';

const STORAGE_KEY = '__AuthData__';
const ss = new ls(STORAGE_KEY);

class AccountRegistration extends React.Component {
	constructor() {
		super();
		this.state = {
			accountName: '',
			password: '',
			fromStep: true,
			torusAlreadyAssociatedEmail: false,
			finalStep: false,
			faceKIStep: false,
			migrationStep: false,
			faceKISuccess: false,
			passkey: '',
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
		this.enroll = this.enroll.bind(this);
		this.nextStep = this.nextStep.bind(this);
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

	async enroll() {
		const {privKey, authData} = this.props;

		const imageSrc = this.webcamRef.current.getScreenshot();

		if (!imageSrc) {
			toast('Check your camera');
			return;
		}

		var file = this.dataURLtoFile(imageSrc, 'a.jpg');
		const response = await faceKIService.liveLinessCheck(file);

		if (response.data.liveness === 'Spoof') toast('try again!');
		else {
			const response_verify = await faceKIService.verify(file);
			if (
				response_verify.status === 'Verify OK' &&
				response_verify.name === authData.email
			) {
				console.log('you already enrolled');
				toast('You already enrolled');
				this.setState({faceKISuccess: true});
			} else {
				const response_enroll = await faceKIService.enroll(
					file,
					authData.email
				);
				if (response_enroll.status === 'Enroll OK') {
					console.log('Successfully enrolled');
					toast('Successfully enrolled');
					this.setState({faceKISuccess: true});

					// try {
					// 	const response_adduser = await axios({
					// 		url: process.env.ESIGNATURE_URL + '/apiewallet/users',
					// 		method: 'get',
					// 		headers: {
					// 			Accept: 'application/json',
					// 		},
					// 		params: {email},
					// 	});

					// 	if (response && response.headers) {
					// 		if (response.headers.authorization) {
					// 			token = response.headers.authorization;
					// 		}
					// 	}
					// } catch (err) {
					// 	console.log('Error in e-sign token generation');
					// }
				}
			}
		}
	}

	nextStep() {
		const {privKey} = this.props;

		const accountName = ss.get('account_registration_name', '');
		let password;
		if (!accountName || !privKey) {
			return;
		}
		password = this.genKey(`${accountName}${privKey}`);

		if (this.state.faceKISuccess === true) {
			this.setState({
				accountName,
				password,
				finalStep: true,
				faceKIStep: false,
				migrationStep: false,
				fromStep: false,
			});
		} else {
			toast('first enroll');
		}
	}

	async handleImportBtn() {
		const response = await migrationService.validateSignature(
			this.state.accountName,
			this.state.passkey
		);
		if (response?.isValid === true) {
			this.setState(
				{
					fromStep: false,
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
			setOpenLoginInstance();
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
				fromStep: false,
				migrationStep: true,
			});
		} else {
			this.setState(
				{
					accountName,
					fromStep: false,
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
			const openLogin = this.props.openLogin;
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
				this.setState({torusAlreadyAssociatedEmail: data.email});
			} else {
				ss.set('account_registration_name', accountName);
				ss.remove('account_login_name');
				await openLogin.init();
				await openLogin.login();
				const data = await openLogin.getUserInfo();
			}
		} catch (error) {
			// this.setState({ fromStep: true });
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
			await openLogin.init();
			await openLogin.login();
		} else {
			this.setState({torusAlreadyAssociatedEmail: ''});
		}
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

		/* Data population for Final Step */
		this.setState({
			accountName,
			password,
			finalStep: true,
			fromStep: false,
			faceKIStep: false,
		});
	}

	proceedTorus() {
		const accountName = ss.get('account_registration_name', '');
		const {privKey, authData} = this.props;

		let password;
		if (!accountName || !privKey) {
			return;
		}
		const email = authData.email;
		password = this.genKey(`${accountName}${privKey}`);
		ss.set('email', email);

		this.setState({
			accountName,
			password,
			faceKIStep: true,
			fromStep: false,
			finalStep: false,
		});
	}

	genKey(seed) {
		return `P${PrivateKey.fromSeed(key.normalize_brainKey(seed)).toWif()}`;
	}

	renderScreen() {
		const {
			fromStep,
			faceKIStep,
			torusAlreadyAssociatedEmail,
			finalStep,
			migrationStep,
		} = this.state;
		if (fromStep) {
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
						Import Your Wallet
					</div>
					<div style={{color: 'white', marginBottom: '50px'}}>
						To import your wallet please enter your Meta Wallet name and your
						private passkey in the input below
					</div>
					<div style={{width: '100%'}}>
						<label>Meta Wallet Name</label>
						<input
							control={Input}
							value={this.state.accountName}
							type="text"
							contentEditable={false}
							style={{border: '1px solid grey'}}
						/>
					</div>
					<div style={{width: '100%', marginTop: '15px'}}>
						<label>Your Owner Key</label>
						<input
							control={Input}
							value={this.state.passkey}
							type="text"
							placeholder="Enter your owner key"
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
							onClick={this.enroll}
							style={{background: '#ffcc00', border: 'none'}}
						>
							Verify & Enroll
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
		}
	}

	render() {
		return (
			<div className="no-margin grid-block registration-layout registration">
				<div className="horizontal align-center text-center">
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
