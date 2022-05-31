import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'alt-react';
import AccountStore from 'stores/AccountStore';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import {ChainStore, key} from 'meta1js/es';
import ReactTooltip from 'react-tooltip';
import utils from 'common/utils';
import SettingsActions from 'actions/SettingsActions';
import WalletDb from 'stores/WalletDb';
import AccountNameInput from './../Forms/AccountNameInputStyleGuide';
import AccountSelect from '../Forms/AccountSelect';
import LoadingIndicator from '../LoadingIndicator';
import Icon from '../Icon/Icon';
import CopyButton from '../Utility/CopyButton';
import {Form, Input, Button, Tooltip} from 'antd';
import ReCAPTCHA from 'react-google-recaptcha';
import WalletUnlockActions from 'actions/WalletUnlockActions';

class AccountRegistrationForm extends React.Component {
	static propTypes = {
		continue: PropTypes.func.isRequired,
	};

	constructor() {
		super();
		this.state = {
			validAccountName: false,
			accountName: '',
			registrarAccount: null,
			loading: false,
			generatedPassword: `P${key.get_random_key().toWif()}`,
			confirmPassword: '',
			email: '',
			phone: '',
			firstname: '',
			lastname: '',
			captcha: false,
		};
		this.onSubmit = this.onSubmit.bind(this);
		this.populateData = this.populateData.bind(this);
		this.onRegistrarAccountChange = this.onRegistrarAccountChange.bind(this);
		this.onAccountNameChange = this.onAccountNameChange.bind(this);
		this.onConfirmation = this.onConfirmation.bind(this);
		this.onEmailChange = this.onEmailChange.bind(this);
		this.onPhoneChange = this.onPhoneChange.bind(this);
		this.onLastnameChange = this.onLastnameChange.bind(this);
		this.onFirstnameChange = this.onFirstnameChange.bind(this);
		this.accountNameInput = null;
	}

	componentWillMount() {
		SettingsActions.changeSetting({
			setting: 'passwordLogin',
			value: true,
		});
	}

	componentDidMount() {
		ReactTooltip.rebuild();
		this.populateData();
	}

	populateData() {
		const url_string = window.location.href;
		const url = new URL(url_string);

		const firstname = url.searchParams.get('firstname');
		const lastname = url.searchParams.get('lastname');
		const email = url.searchParams.get('email');
		const phone = url.searchParams.get('phone');

		this.setState({
			firstname: firstname,
			lastname: lastname,
			email: email,
			phone: phone,
		});
	}

	caChange = () => {
		this.setState({
			captcha: true,
		});
	};

	shouldComponentUpdate(nextProps, nextState) {
		return !utils.are_equal_shallow(nextState, this.state);
	}

	onAccountNameChange(e) {
		const state = {};
		if (e.valid !== undefined) {
			state.validAccountName = e.valid;
		}
		if (e.value !== undefined) {
			state.accountName = e.value;
		}
		this.setState(state);
	}

	onRegistrarAccountChange(registrarAccount) {
		this.setState({registrarAccount});
	}

	onEmailChange(e) {
		const value = e.currentTarget.value;
		console.log(value);
		this.setState({email: value});
	}

	onPhoneChange(e) {
		const value = e.currentTarget.value;
		console.log(value);
		this.setState({phone: value});
	}

	onLastnameChange(e) {
		const value = e.currentTarget.value;
		console.log(value);
		this.setState({lastname: value});
	}

	onFirstnameChange(e) {
		const value = e.currentTarget.value;
		console.log(value);
		this.setState({firstname: value});
	}

	onSubmit(e) {
		e.preventDefault();
		sessionStorage.email = this.state.email;
		sessionStorage.phone = this.state.phone;
		sessionStorage.firstname = this.state.firstname;
		sessionStorage.lastname = this.state.lastname;

		if (this.isValid()) {
			this.props.continue({
				accountName: this.state.accountName,
				password: this.state.generatedPassword,
			});
		}
	}

	onConfirmation(e) {
		const value = e.currentTarget.value;
		this.setState({
			confirmPassword: value,
			passwordConfirmed: value === this.state.generatedPassword,
		});
	}

	isValid() {
		const firstAccount = AccountStore.getMyAccounts().length === 0;
		// let valid = this.state.validAccountName && this.state.captcha; // for testing purpose: commenting out
		let valid = this.state.validAccountName;
		if (!WalletDb.getWallet()) {
			valid = valid;
		}
		if (!firstAccount) {
			valid = valid && this.state.registrarAccount;
		}
		return valid;
	}

	caChange = () => {
		this.setState({
			captcha: true,
		});
	};

	renderAccountCreateForm() {
		const {registrarAccount} = this.state;
		const myAccounts = AccountStore.getMyAccounts();
		const firstAccount = myAccounts.length === 0;
		const valid = this.isValid();
		let isLTM = false;
		const registrar = registrarAccount
			? ChainStore.getAccount(registrarAccount)
			: null;
		if (registrar) {
			if (registrar.get('lifetime_referrer') === registrar.get('id')) {
				isLTM = true;
			}
		}

		return (
			<div className="form-body">
				<Form onSubmit={this.onSubmit} layout={'vertical'}>
					<div className="info-form">
						<div className="form-blocks">
							<Form.Item label={'First name *'} css={{marginRight: '10px'}}>
								<Input
									id="firstname"
									required
									placeholder="John"
									value={this.state.firstname}
									onChange={this.onFirstnameChange}
								/>
							</Form.Item>
							<Form.Item label={'Last name *'} css={{marginLeft: '10px'}}>
								<Input
									id="lastname"
									required
									placeholder="Doe"
									value={this.state.lastname}
									onChange={this.onLastnameChange}
								/>
							</Form.Item>
						</div>
						<div className="form-blocks">
							<Form.Item label={'Email *'} css={{marginRight: '10px'}}>
								<Input
									id="email"
									required
									placeholder="email@example.com"
									value={this.state.email}
									onChange={this.onEmailChange}
								/>
							</Form.Item>
							<Form.Item label={'Phone number *'} css={{marginLeft: '10px'}}>
								<Input
									id="phone"
									required
									placeholder="+1XXXXXXXXX"
									value={this.state.phone}
									onChange={this.onPhoneChange}
								/>
							</Form.Item>
						</div>
					</div>
					<AccountNameInput
						cheapNameOnly={firstAccount}
						onChange={this.onAccountNameChange}
						accountShouldNotExist
						placeholder={counterpart.translate('account.name')}
						label={
							<span>
								<span className="vertical-middle">
									{counterpart.translate('account.name')}
								</span>
								&nbsp;
								<Tooltip
									title={counterpart.translate(
										'tooltip.registration.accountName'
									)}
								>
									<span>
										<Icon
											name="question-in-circle"
											className="icon-14px question-icon vertical-middle"
										/>
									</span>
								</Tooltip>
							</span>
						}
						noLabel
					/>
					<Form.Item label={counterpart.translate('wallet.generated')}>
						<div className="password-wrapper">
							<Input
								disabled={true}
								style={{paddingRight: '50px'}}
								rows={2}
								id="password"
								value={this.state.generatedPassword}
							/>
							<CopyButton
								text={this.state.generatedPassword}
								tip="tooltip.copy_password"
								dataPlace="top"
								className="button registration-layout--copy-password-btn"
							/>
						</div>
					</Form.Item>
					{firstAccount ? null : (
						<div className="full-width-content form-group no-overflow">
							<label htmlFor="account">
								<Translate content="account.pay_from" />
							</label>
							<AccountSelect
								id="account"
								account_names={myAccounts}
								onChange={this.onRegistrarAccountChange}
							/>
							{registrarAccount && !isLTM ? (
								<div style={{textAlign: 'left'}} className="facolor-error">
									<Translate content="wallet.must_be_ltm" />
								</div>
							) : null}
						</div>
					)}
					<ReCAPTCHA
						sitekey="6LdY-48UAAAAAAX8Y8-UdRtFks70LCRmyvyye0VU"
						onChange={this.caChange.bind(this)}
					/>
					<br></br>
					{this.state.loading ? (
						<LoadingIndicator type="three-bounce" />
					) : (
						<Button
							htmlType="submit"
							type="primary"
							disabled={
								!valid ||
								// !this.state.passwordConfirmed ||
								(registrarAccount && !isLTM)
							}
							onClick={(e) => this.onSubmit(e)}
							className="continue-btn"
						>
							<Translate content="registration.continue" />
						</Button>
					)}
					<div className="redirect">
						Or if you have an account then{' '}
						<div className="btn" onClick={() => WalletUnlockActions.unlock()}>
							login
						</div>
					</div>
				</Form>
			</div>
		);
	}

	renderAccountCreateText() {
		const myAccounts = AccountStore.getMyAccounts();
		const firstAccount = myAccounts.length === 0;

		return (
			<div className="header-text">
				<Translate component="p" content="registration.accountDescription" />

				{firstAccount ? null : (
					<Translate component="p" content="wallet.not_first_account" />
				)}
			</div>
		);
	}

	render() {
		return (
			<div className="registration-form">
				{this.renderAccountCreateText()}
				{this.renderAccountCreateForm()}
			</div>
		);
	}
}

export default connect(AccountRegistrationForm, {
	listenTo() {
		return [AccountStore];
	},
	getProps() {
		return {};
	},
});
