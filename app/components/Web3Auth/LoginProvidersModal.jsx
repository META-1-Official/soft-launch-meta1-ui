import React, { useState } from 'react';
import { providers } from 'constants/providers';
import { Modal } from 'antd';
import { WALLET_ADAPTERS } from '@web3auth/base';
import counterpart from 'counterpart';
import { toast } from 'react-toastify';
import kycService from '../../services/kyc.service';

const arrow = require('assets/arrow.jpg');

const ProvidersBlock = ({ item, moreProviders, onClick }) => {
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

const ProvidersCount = ({ moreProviders, setMoreProviders }) => {
	const changeProvidersCount = () => {
		setMoreProviders(!moreProviders);
	};
	return (
		<div className="providersCountWrapper">
			<div className="providersCount">
				<div onClick={changeProvidersCount}>
					<p>
						{counterpart.translate('registration.view_more_options')}
						<img
							src={arrow}
							width={15}
							height={15}
							style={moreProviders ? { transform: 'rotate(180deg)' } : {}}
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
	const [emailError, setEmailError] = useState(null);

	const doAuth = async (provider) => {
		const { web3auth, login, authMode } = props;

		if (!web3auth) {
			return;
		}

		if (authMode === 'login') {
			let user = await kycService.getUserKycProfileByAccount(login);

			if (!user) {
				toast('Something went wrong from the server.');
				return;
			} else {
				if (provider === "email_passwordless") {
					if (user.email.toLowerCase() !== email.toLowerCase()) {
						toast('Email and wallet name are not matched.');
						return;
					}
				}
			}
		}

		try {
			if (web3auth.status === 'connected') {
				await web3auth.logout();
			}

			web3auth.init().then(() => {
				web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
					mfaLevel: 'none',
					loginProvider: provider,
					extraLoginOptions:
						provider === 'email_passwordless' || provider === 'sms_passwordless'
							? {
								login_hint:
									provider === 'email_passwordless' ? email : phoneNumber,
							}
							: {},
				});
			});
		} catch (error) {
			console.log('Error in Web3Auth', error);
		}
	};

	const handleClose = async () => {
		props.setOpen(false);
	};

	const handleContinueWithProvider = async (item) => {
		await doAuth(item?.name);
	};

	const handleContinueWithEmail = async (e) => {
		e.preventDefault();
		console.log('Handle Continue With Email', email);
		await doAuth('email_passwordless');
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
			setEmailError(counterpart.translate('registration.invalid_email'));
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
					<p className="welcomeText">
						{counterpart.translate('registration.welcome_onboard')}
					</p>
					<p className="descriptionText">
						{counterpart.translate(
							'registration.select_how_you_would_like_continue'
						)}
					</p>
				</div>
				<div className="contentWrapper">
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
					<p className="orText">
						{counterpart
							.translate('explorer.asset.settlement.gs_or')
							.toUpperCase()}
					</p>
					<div className="formContainer">
						<div className="emailProvider">
							<input
								value={email}
								className="providersInput"
								placeholder={counterpart.translate('registration.email')}
								onChange={handleEmailChange}
							/>
							{emailError && <p className="errorText"> {emailError}</p>}
							<button
								className="providersButton"
								type={'submit'}
								onClick={handleContinueWithEmail}
								disabled={!email || emailError}
								style={!email || emailError ? { cursor: 'not-allowed' } : {}}
							>
								{counterpart.translate('registration.continue_with_email')}
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
