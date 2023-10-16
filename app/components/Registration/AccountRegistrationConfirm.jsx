import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'alt-react';
import AccountActions from 'actions/AccountActions';
import AccountStore from 'stores/AccountStore';
import WalletDb from 'stores/WalletDb';
import counterpart from 'counterpart';
import TransactionConfirmStore from 'stores/TransactionConfirmStore';
import Translate from 'react-translate-component';
import {FetchChain, ChainStore} from 'meta1-vision-js/es';
import WalletUnlockActions from 'actions/WalletUnlockActions';
import axios from 'axios';
import {Button, Input, Checkbox, Form, Modal, Typography} from 'antd';
import sendXApi from '../../api/sendxApi';
import CopyButton from '../Utility/CopyButton';
import ls from '../../lib/common/localStorage';
import PaperWalletModal from '../Modal/PaperWalletModal';

import {checkCustomer} from 'components/Utility/Tapfiliate';
import {toast} from 'react-toastify';
import {
	getPrivateKeys,
	_createPaperWalletAsPDFNew,
} from 'lib/common/paperWallet';

const STORAGE_KEY = '__AuthData__';
const ss = new ls(STORAGE_KEY);
const {Title} = Typography;
class AccountRegistrationConfirm extends React.Component {
	static propTypes = {
		accountName: PropTypes.string.isRequired,
		password: PropTypes.string.isRequired,
		toggleConfirmed: PropTypes.func.isRequired,
		toggleConfirmedTerms: PropTypes.func.isRequired,
		toggleConfirmedTerms2: PropTypes.func.isRequired,
		toggleConfirmedTerms3: PropTypes.func.isRequired,
		history: PropTypes.object.isRequired,
	};

	constructor() {
		super();

		this.state = {
			confirmed: false,
			confirmedTerms: false,
			confirmedTerms2: false,
			confirmedTerms3: false,
			confirmedTerms4: false,
			emailSubscription: true,
			isErrored: false,
			name: '',
			password: '',
			downloadPaperWalletModal: false,
			copyPasswordModal: false,
			paperWalletDownloading: false
		};
		this.onFinishConfirm = this.onFinishConfirm.bind(this);
		this.toggleConfirmed = this.toggleConfirmed.bind(this);
		this.toggleConfirmedTerms = this.toggleConfirmedTerms.bind(this);
		this.toggleConfirmedTerms2 = this.toggleConfirmedTerms2.bind(this);
		this.toggleConfirmedTerms3 = this.toggleConfirmedTerms3.bind(this);
		this.toggleConfirmedTerms4 = this.toggleConfirmedTerms4.bind(this);
		this.toggleEmailSubscription = this.toggleEmailSubscription.bind(this);
		this.verifyESign = this.verifyESign.bind(this);
		this.createAccount = this.createAccount.bind(this);
		this.onCreateAccount = this.onCreateAccount.bind(this);
		this.trackSignup = this.trackSignup.bind(this);
		this.validateLogin = this.validateLogin.bind(this);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return (
			nextState.confirmed !== this.state.confirmed ||
			nextState.confirmedTerms !== this.state.confirmedTerms ||
			nextState.confirmedTerms2 !== this.state.confirmedTerms2 ||
			nextState.confirmedTerms3 !== this.state.confirmedTerms3 ||
			nextState.confirmedTerms4 !== this.state.confirmedTerms4 ||
			nextState.emailSubscription !== this.state.emailSubscription ||
			nextState.downloadPaperWalletModal !==
				this.state.downloadPaperWalletModal ||
			nextState.copyPasswordModal !== this.state.copyPasswordModal
		);
	}

	UNSAFE_componentWillMount() {
		this.setState({
			email: ss.get('email'),
			phone: ss.get('phone'),
			firstname: ss.get('firstname'),
			lastname: ss.get('lastname'),
			authData: JSON.parse(ss.get('authdata', '{}')),
			confirmed: ss.get('confirmed', false),
			confirmedTerms: ss.get('confirmedTerms', false),
			confirmedTerms2: ss.get('confirmedTerms2', false),
			confirmedTerms3: ss.get('confirmedTerms3', false),
			emailSubscription: ss.get('emailSubscription', true),
		});
	}

	componentDidMount() {
		const email = ss.get('email');
		const eSign = ss.get('confirmedTerms4Token');
		if (!email) {
			this.props.history.push('/registration');
		}
		if (eSign) {
			this.verifyESign(email);
		}
	}

	async verifyESign(email) {
		try {
			const response = await axios({
				url: process.env.ESIGNATURE_URL + '/apiewallet/users',
				method: 'get',
				headers: {
					Accept: 'application/json',
				},
				params: {email},
			});
			if (response && response.data) {
				if (
					response.data.email === email &&
					response.data.status &&
					response.data.status.isSign === true &&
					(response.data.status.isPayed === true ||
						response.data.status.isPaidByCrypto === true)
				) {
					this.setState({confirmedTerms4: true});
					ss.remove('confirmedTerms4Token');
					ss.remove('confirmedTerms3Token');
				}
			}
		} catch (err) {
			console.log('Error proceeding auth after faceki', err);
		}
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

	async onCreateAccount() {
		if (!this.state.email || !this.props.password || !this.props.accountName) {
			this.props.history.push('/registration');
		}

		let email = this.state.email;
		let accountName = this.props.accountName;

		// getting token
		let token;
		const response_token = await axios({
			url: process.env.ESIGNATURE_URL + '/apiewallet/sign/token',
			method: 'get',
			headers: {
				Accept: 'application/json',
			},
			params: {email},
		});

		if (response_token && response_token.headers) {
			if (response_token.headers.authorization) {
				token = response_token.headers.authorization;
			}
		}

		// getting user profile
		const response_user = await axios({
			url: process.env.ESIGNATURE_URL + '/apiewallet/users',
			method: 'get',
			headers: {
				Accept: 'application/json',
			},
			params: {email},
		});

		if (!token || token.error === true) return;
		if (!response_user) return;

		let member1Name = '';

		if (response_user.data.member1Name) {
			let nameArry = response_user.data.member1Name.split(',');
			if (nameArry.includes(accountName)) {
				member1Name = response_user.data.member1Name;
			} else {
				member1Name = response_user.data.member1Name + ',' + accountName;
			}
		} else {
			member1Name = accountName;
		}

		// appending wallet name to the user wallet list.
		const res_update = await axios.patch(
			`${process.env.ESIGNATURE_URL}/apiewallet/users/update?email=${this.state.email}`,
			{member1Name},
			{
				headers: {
					authorization: token,
				},
			}
		);

		if (res_update.error === true) {
			return;
		} else if (res_update) {
			this.createAccount(
				this.props.accountName,
				this.props.password,
				this.state.email,
				this.state.phone,
				this.state.firstname,
				this.state.lastname,
				this.props.password,
				this.state.authData
			);
		} else {
			return;
		}
	}

	trackSignup(customerId) {
		checkCustomer(customerId);
		ss.set('referred_user_id', customerId);
	}

	createAccount(
		name,
		password,
		email,
		phone_number,
		first_name,
		last_name,
		private_key,
		authData
	) {
		const {referralAccount} = AccountStore.getState();
		ss.remove('email');
		ss.remove('phone');
		ss.remove('firstname');
		ss.remove('lastname');
		ss.remove('confirmed');
		ss.remove('confirmedTerms');
		ss.remove('confirmedTerms2');
		ss.remove('account_registration_name');
		ss.remove('authdata');
		const emailSubscription = ss.get('emailSubscription', true);
		if (emailSubscription) {
			sendXApi
				.subscribe({
					email,
					tags: [process.env.NODE_ENV === 'production' ? 'MEMBERS' : 'DEV2'],
					firstName: first_name,
					lastName: last_name,
					customFields: {mobile: phone_number},
				})
				.then(() => {
					console.log('Subscription completed!');
				});
		}
		ss.remove('emailSubscription');
		AccountActions.createAccountWithPassword(
			name,
			password,
			this.state.registrarAccount,
			referralAccount || this.state.registrarAccount,
			0,
			'',
			email,
			phone_number,
			first_name,
			last_name,
			private_key
		)
			.then(async (res) => {
				AccountActions.setPasswordAccount(name);
				this.trackSignup(res);

				await axios.post(process.env.LITE_WALLET_URL + '/signUp', {
					accountName: name,
				});

				if (this.state.registrarAccount) {
					TransactionConfirmStore.listen(this.onFinishConfirm);
				}

				FetchChain('getAccount', name).then(() => {
					let keys = getPrivateKeys(name, password);
					_createPaperWalletAsPDFNew(
						keys['owner'],
						keys['active'],
						keys['memo'],
						name,
						(data) => {
							this.setState({
								paperWalletData: data,
								downloadPaperWalletModal: true,
								name,
								password,
							});
						}
					);
				});
			})
			.catch((error) => {
				console.log('ERROR AccountActions.createAccount', error);
			});
	}

	timer = (ms) => new Promise((res) => setTimeout(res, ms));
	async validateLogin(account, password) {
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

		if (!success && WalletDb.isLocked_v2()) {
			this.setState({
				passwordError: counterpart.translate('notifications.invalid_password'),
			});
		} else {
			this.setState({password: ''});
			if (cloudMode) AccountActions.setPasswordAccount(account);
			WalletUnlockActions.change();
			if (resolve) resolve();
			WalletUnlockActions.cancel();
		}

		axios
			.post(process.env.LITE_WALLET_URL + '/login', {
				accountName: account,
				email: this.state.email,
				idToken: this.state.authData.web3Token,
				appPubKey: this.state.authData.web3PubKey,
				fasToken: ss.get('account_registration_fastoken'),
			})
			.then((response) => {
				toast('Success');
				let accountName = response.data['accountName'];
				console.log('LW login response', response); // DEBUG
				console.log('LW login accountName:', accountName);
				ss.set('account_login_name', accountName);
				ss.set('account_login_token', response.data['token']);
				AccountActions.setPasswordlessAccount(accountName);
				WalletUnlockActions.unlock_v2().then(() => {
					this.props.history.push(`/account/${accountName}/`);
				});	
				setTimeout(() => {
					WalletUnlockActions.lock_v2();
				}, 24 * 60 * 60 * 1000); // Auto timeout in 24 hrs
			})
			.catch((error) => {
				console.log('Login Error:', error);
				this.props.history.push(`/market/META1_USDT/`);
			});
	}

	toggleConfirmed(e) {
		this.setState(
			{
				confirmed: e.target.checked,
			},
			() => {
				ss.set('confirmed', e.target.checked);
			}
		);
	}

	toggleConfirmedTerms(e) {
		this.setState(
			{
				confirmedTerms: e.target.checked,
			},
			() => {
				ss.set('confirmedTerms', e.target.checked);
			}
		);
	}

	toggleConfirmedTerms2(e) {
		this.setState(
			{
				confirmedTerms2: e.target.checked,
			},
			() => {
				ss.set('confirmedTerms2', e.target.checked);
			}
		);
	}

	toggleConfirmedTerms3(e) {
		this.setState(
			{
				confirmedTerms3: e.target.checked,
			},
			() => {
				ss.set('confirmedTerms3', e.target.checked);
			}
		);
	}

	async toggleConfirmedTerms4(e) {
		if (e.target.checked) {
			const {email, phone, firstname, lastname} = this.state;
			const {accountName} = this.props;
			let token;
			try {
				const response = await axios({
					url: process.env.ESIGNATURE_URL + '/apiewallet/sign/token',
					method: 'get',
					headers: {
						Accept: 'application/json',
					},
					params: {email},
				});

				if (response && response.headers) {
					if (response.headers.authorization) {
						token = response.headers.authorization;
					}
				}
			} catch (err) {
				console.log('Error in e-sign token generation');
			}
			window.location.href = `${
				process.env.ESIGNATURE_URL
			}/e-sign?email=${encodeURIComponent(
				email
			)}&firstName=${firstname}&lastName=${lastname}&phoneNumber=${phone}&walletName=${accountName}&token=${token}&redirectUrl=${
				window.location.origin
			}/auth-proceed`;
		} else {
			toast(
				counterpart.translate(
					'registration.alread_signed_and_paid_with_current_email'
				)
			);
			return;
		}
	}

	toggleEmailSubscription(e) {
		this.setState(
			{
				emailSubscription: e.target.checked,
			},
			() => {
				ss.set('emailSubscription', e.target.checked);
			}
		);
	}

	render() {
		return (
			<div className="registration-confirm">
				<Form layout={'vertical'}>
					<div className="passkey-alert-title">
						<Translate
							component="p"
							content="registration.accountDescription"
						/>
					</div>
					<Form.Item label={counterpart.translate('wallet.generated')}>
						<div className="password-wrapper">
							<Input
								disabled={true}
								rows={2}
								id="password"
								value={this.props.password}
							/>
							<CopyButton
								text={this.props.password}
								tip="tooltip.copy_password"
								dataPlace="top"
								className="button registration-layout--copy-password-btn"
							/>
						</div>
					</Form.Item>
					<Form.Item className="warn-tooltip">
						<p>
							{counterpart.translate('registration.important_message_info')}
							&nbsp;
							<a
								target="__blank"
								href="https://support.meta1coin.vision/hc/en-us/articles/11552911024027-Passkey-Storage-Tips"
							>
								{counterpart.translate('registration.click_here')}
							</a>
						</p>
					</Form.Item>
					<Form.Item className="checkbox-group custom-checkbox-register">
						<div className="checkbox-item">
							<Checkbox
								checked={this.state.confirmed}
								onChange={this.toggleConfirmed}
							></Checkbox>
							<div
								disabled
								className={`reset-this terms ${
									this.state.confirmed ? 'active' : ''
								}`}
							>
								{counterpart.translate('registration.accountConfirmation')}
							</div>
						</div>
						<div className="checkbox-item">
							<Checkbox
								checked={this.state.confirmedTerms}
								onChange={this.toggleConfirmedTerms}
							></Checkbox>
							<div
								className={`reset-this terms ${
									this.state.confirmedTerms ? 'active' : ''
								}`}
							>
								{counterpart.translate('registration.registration_terms1')}
							</div>
						</div>
						<div className="checkbox-item">
							<Checkbox
								checked={this.state.confirmedTerms2}
								onChange={this.toggleConfirmedTerms2}
							></Checkbox>
							<div
								className={`reset-this terms ${
									this.state.confirmedTerms2 ? 'active' : ''
								}`}
							>
								{counterpart.translate('registration.registration_terms2')}
							</div>
						</div>
						<div className="checkbox-item">
							<Checkbox
								checked={this.state.confirmedTerms3}
								onChange={this.toggleConfirmedTerms3}
							></Checkbox>
							<div
								className={`reset-this terms ${
									this.state.confirmedTerms3 ? 'active' : ''
								}`}
							>
								{counterpart.translate('registration.registration_terms3')}
							</div>
						</div>
						<div className="checkbox-item">
							<Checkbox
								checked={this.state.emailSubscription}
								onChange={this.toggleEmailSubscription}
							></Checkbox>
							<div
								className={`reset-this terms ${
									this.state.emailSubscription ? 'active' : ''
								}`}
							>
								{counterpart.translate('registration.registration_terms5')}
							</div>
						</div>
						<div className="checkbox-item">
							<Checkbox
								checked={this.state.confirmedTerms4}
								onChange={this.toggleConfirmedTerms4}
							></Checkbox>
							<div
								className={`reset-this terms ${
									this.state.confirmedTerms4 ? 'active' : ''
								}`}
							>
								{counterpart.translate('registration.registration_terms4')}
							</div>
						</div>
					</Form.Item>
					<Form.Item className="button-wrapper">
						<Button
							type="primary"
							disabled={
								!this.state.confirmed ||
								!this.state.confirmedTerms ||
								!this.state.confirmedTerms2 ||
								!this.state.confirmedTerms3 ||
								!this.state.confirmedTerms4 ||
								paperWalletDownloading
							}
							className="create-acc-btn"
							onClick={() => {
								if (this.state.confirmedTerms4) {
									this.setState({
										copyPasswordModal: true,
										paperWalletDownloading: true
									});
								}
							}}
						>
							<Translate content="account.create_account" />
						</Button>
					</Form.Item>
				</Form>
				{/* copy password modal */}
				<Modal
					title={counterpart.translate('registration.important_message')}
					visible={this.state.copyPasswordModal}
					className="copy_password_modal"
					id={'downloadPaperWallet'}
					closeable={true}
					ref="modal"
					overlay={true}
					overlayClose={false}
					zIndex={1001}
					footer={null}
					onCancel={() => {
						this.setState({
							copyPasswordModal: false,
						});
					}}
				>
					<div className="header-title2">
						{counterpart.translate('registration.important_message_info')}&nbsp;
						<a
							target="__blank"
							href="https://support.meta1coin.vision/hc/en-us/articles/11552911024027-Passkey-Storage-Tips"
						>
							{counterpart.translate('registration.click_here')}
						</a>
					</div>
					<div className="footer-wrapper display_flex">
						<Button
							htmlType="submit"
							type="primary"
							onClick={() => {
								this.setState({
									copyPasswordModal: false,
									paperWalletDownloading: false
								});
								this.onCreateAccount();
							}}
							className="login-btn"
						>
							{counterpart.translate('registration.acknowledge_and_continue')}
						</Button>
					</div>
				</Modal>

				<PaperWalletModal
					paperWalletData={this.state.paperWalletData}
					accountName={this.state.name}
					visible={this.state.downloadPaperWalletModal}
					onCancel={() => {
						let {name, password} = this.state;
						this.setState({
							downloadPaperWalletModal: false,
							name: '',
							password: '',
						});
						this.validateLogin(name, password);
					}}
				/>
			</div>
		);
	}
}

export default connect(AccountRegistrationConfirm, {
	listenTo() {
		return [AccountStore];
	},
	getProps() {
		return {};
	},
});
