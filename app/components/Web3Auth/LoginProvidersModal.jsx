import React, {useState} from 'react';
import {providers} from './providers';
import {Modal} from 'antd';
import {WALLET_ADAPTERS} from '@web3auth/base';

const arrow = require('assets/arrow.jpg');
const closeBtn = require('assets/close.png');

const ProvidersBlock = ({item, moreProviders, onClick}) => {
	return (
		<div
			className={
				moreProviders ? 'providerBlockWrapperMP' : 'providerBlockWrapper'
			}
			onClick={onClick}
		>
			<div className="providerContent">
				<div className="providerContentV">
					<img
						height={moreProviders ? '30px' : '50px'}
						width={moreProviders ? '30px' : '50px'}
						alt={item.name}
						src={item.image}
					/>
				</div>
			</div>
		</div>
	);
};

const ProvidersCount = ({moreProviders, setMoreProviders}) => {
	const changeProvidersCount = () => {
		setMoreProviders(!moreProviders);
	};
	return (
		<div className="providersCountWrapper">
			<div className="providersCount">
				<div onClick={changeProvidersCount}>
					<p>
						{`View more options`}
						<img
							src={arrow}
							width={15}
							height={15}
							style={moreProviders ? {transform: 'rotate(180deg)'} : {}}
						/>
					</p>
				</div>
			</div>
		</div>
	);
};

const LoginProvidersModal = (props) => {
	const [moreProviders, setMoreProviders] = useState(false);
	const [email, setEmail] = useState(props.email || null);
	const [phoneNumber, setMobilePhoneNumber] = useState(
		props.phoneNumber || null
	);
	const [continueMode, setContinueMode] = useState(false);
	const [emailError, setEmailError] = useState(null);

	const doAuth = async (provider) => {
		const {web3auth} = props;

		if (!web3auth) {
			return;
		}

		try {
			await web3auth.init();

			if (web3auth.status === 'connected') {
				await web3auth.logout();
			}

			const web3authProvider = await web3auth.connectTo(
				WALLET_ADAPTERS.OPENLOGIN,
				{
					mfaLevel: 'none',
					loginProvider: provider,
					extraLoginOptions:
						provider === 'email_passwordless' || provider === 'sms_passwordless'
							? {
									login_hint:
										provider === 'email_passwordless' ? email : phoneNumber,
							  }
							: {},
				}
			);
		} catch (error) {
			console.log('Error in Web3Auth', error);
		}
	};

	const handleClose = async () => {
		props.setOpen(false);
	};

	const handleContinueWith = async () => {
		console.log('Handle Continue With');
	};

	const handleContinueWithProvider = async (item) => {
		await doAuth(item?.name);
	};

	const handleContinueWithEmail = async (e) => {
		e.preventDefault();
		console.log('Handle Continue With Email', email);
		await doAuth('email_passwordless');
	};

	const handleContinueWithSms = async (e) => {
		e.preventDefault();
		console.log('Handle Continue With Mobile');
		await doAuth('sms_passwordless');
	};

	const handleEmailChange = async (e) => {
		e.preventDefault();
		setEmail(e.target.value);
		if (
			!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
				e.target.value
			) &&
			e.target.value.length !== 0
		) {
			setEmailError('Invalid Email');
		} else {
			setEmailError(null);
		}
	};

	return (
		<Modal
			open={props.open}
			className="auth-modal"
			modalHeader=""
			id="auth-modal"
			overlay
			footer={null}
			onCancel={handleClose}
			maskClosable={false}
		>
			<div className="containerProvider">
				<div className="providerHeader">
					<p className="welcomeText">Welcome onboard</p>
					<p className="descriptionText">
						Select how you would like to continue
					</p>
				</div>
				<div className="contentWrapper">
					{/* <div className="continueWithBtn" onClick={handleContinueWith}>
                                    <div></div>
                                </div> */}
					<div
						className={moreProviders ? 'providersBlockMP' : 'providersBlock'}
					>
						{moreProviders
							? providers.map((item) => (
									<ProvidersBlock
										item={item}
										moreProviders={moreProviders}
										key={item.id}
										onClick={() => handleContinueWithProvider(item)}
									/>
							  ))
							: providers.map((item, index) => {
									if (index < 6) {
										return (
											<ProvidersBlock
												item={item}
												key={item.id}
												onClick={() => handleContinueWithProvider(item)}
											/>
										);
									}
							  })}
					</div>
					<p style={{margin: 'auto', textAlign: 'center'}}>OR</p>
					<div className="formContainer">
						<div className="emailProvider">
							<input
								value={email}
								className="providersInput"
								placeholder={'Email'}
								onChange={handleEmailChange}
							/>
							{emailError && <p className="errorText"> {emailError}</p>}
							<button
								className="providersButton"
								type={'submit'}
								onClick={handleContinueWithEmail}
								disabled={!email || emailError}
								style={!email || emailError ? {cursor: 'not-allowed'} : {}}
							>
								Continue with Email
							</button>
						</div>
					</div>
					<ProvidersCount
						moreProviders={moreProviders}
						setMoreProviders={setMoreProviders}
					/>
				</div>
			</div>
		</Modal>
	);
};

export default LoginProvidersModal;
