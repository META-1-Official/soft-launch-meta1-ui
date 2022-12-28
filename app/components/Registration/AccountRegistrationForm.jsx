import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'alt-react';
import AccountStore from 'stores/AccountStore';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import {ChainStore, key} from 'meta1-vision-js/es';
import ReactTooltip from 'react-tooltip';
import utils from 'common/utils';
import SettingsActions from 'actions/SettingsActions';
import WalletDb from 'stores/WalletDb';
import AccountNameInput from './../Forms/AccountNameInputStyleGuide';
import AccountSelect from '../Forms/AccountSelect';
import LoadingIndicator from '../LoadingIndicator';
import Icon from '../Icon/Icon';
import CopyButton from '../Utility/CopyButton';
import {Form, Input, Button, Tooltip, Select} from 'antd';
import ReCAPTCHA from 'react-google-recaptcha';
import WalletUnlockActions from 'actions/WalletUnlockActions';
import {MailOutlined, UserOutlined, PhoneOutlined} from '@ant-design/icons';
import ls from '../../lib/common/localStorage';
const STORAGE_KEY = '__AuthData__';
const ss = new ls(STORAGE_KEY);
import countryCodes from '../Utility/countryCode.json';

class AccountRegistrationForm extends React.Component {
	formRef = React.createRef();
	static propTypes = {
		continue: PropTypes.func.isRequired,
		visibility: PropTypes.bool.isRequired,
	};

	constructor() {
		super();
		this.phoneRef = React.createRef();
		this.state = {
			validAccountName: false,
			accountName: '',
			registrarAccount: null,
			loading: false,
			email: '',
			phone: '',
			firstname: '',
			lastname: '',
			captcha: true,
			country: 227,
			selectedCountryObj: {
				id: 227,
				iso2: 'US',
				defaultName: 'USA',
				countryCode: '1',
				patterns: ['XXX XXX XXXX'],
			},
			phoneFormat: '',
			isCountrySelected: false,
			visibility: true,
		};
		this.onSubmit = this.onSubmit.bind(this);
		this.populateData = this.populateData.bind(this);
		this.onRegistrarAccountChange = this.onRegistrarAccountChange.bind(this);
		this.onAccountNameChange = this.onAccountNameChange.bind(this);
		this.onConfirmation = this.onConfirmation.bind(this);
		this.onPhoneChange = this.onPhoneChange.bind(this);
		this.onLastnameChange = this.onLastnameChange.bind(this);
		this.onFirstnameChange = this.onFirstnameChange.bind(this);
		this.phoneNumberSpacingHandler = this.phoneNumberSpacingHandler.bind(this);
		this.phoneNumberChangeHandler = this.phoneNumberChangeHandler.bind(this);
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

	componentDidUpdate(prevProps, prevState) {
		if (
			prevState.phoneFormat !== this.state.phoneFormat ||
			prevState.selectedCountryObj !== this.state.selectedCountryObj
		) {
			this.setState({
				phone: `+${
					this.state.selectedCountryObj.countryCode
				}${this.state.phoneFormat.replaceAll(' ', '')}`,
			});
		}
		if (prevState.selectedCountryObj !== this.state.selectedCountryObj) {
			this.phoneRef.current.focus();
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.visibility != this.state.visibility) {
			this.setState({visibility: nextProps.visibility, captcha: false}, () => {
				if (
					this.formRef &&
					this.formRef.current &&
					this.formRef.current.setFieldsValue
				)
					this.formRef.current.setFieldsValue(this.state);
			});
		}
	}

	phoneNumberChangeHandler(event) {
		if (!isNaN(event.target.value.replaceAll(' ', ''))) {
			if (event.target.value !== '0' && !event.target.value.includes('.')) {
				if (!this.state.selectedCountryObj?.patterns) {
					this.setState({
						phoneFormat: event.target.value,
					});
				} else {
					const spacingArr = this.phoneNumberSpacingHandler();
					if (
						event.nativeEvent.inputType !== 'deleteContentBackward' &&
						spacingArr.includes(event.target.value.length)
					) {
						this.setState({
							phoneFormat: event.target.value + ' ',
						});
					} else {
						if (event.nativeEvent.inputType === 'deleteContentBackward') {
							if (this.state.phoneFormat.endsWith(' ')) {
								this.setState({
									phoneFormat: event.target.value.slice(
										0,
										event.target.value.length - 1
									),
								});
								return;
							}
						}
						this.setState({
							phoneFormat: event.target.value,
						});
					}
				}
			}
		}
	}
	phoneNumberSpacingHandler() {
		let pattern = '';
		if (Array.isArray(this.state.selectedCountryObj?.patterns)) {
			pattern = this.state.selectedCountryObj.patterns[0];
		}
		let spaceArr = [];
		let count = 0;
		for (let data of pattern) {
			if (data === ' ') {
				spaceArr.push(count);
			}
			count++;
		}
		return spaceArr;
	}

	populateData() {
		const url_string = window.location.href;
		const url = new URL(url_string);

		const firstname = url.searchParams.get('firstname');
		const lastname = url.searchParams.get('lastname');
		const phone = url.searchParams.get('phone');

		this.setState({
			firstname: firstname,
			lastname: lastname,
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

	onPhoneChange(e) {
		const value = e.currentTarget.value;
		this.setState({phone: value});
	}

	onLastnameChange(e) {
		const value = e.currentTarget.value;
		this.setState({lastname: value});
	}

	onFirstnameChange(e) {
		const value = e.currentTarget.value;
		this.setState({firstname: value});
	}

	onSubmit(e) {
		ss.set('phone', this.state.phone);
		ss.set('firstname', this.state.firstname);
		ss.set('lastname', this.state.lastname);
		ss.set('email', this.state.email);

		if (this.isValid()) {
			this.props.continue({
				accountName: this.state.accountName,
			});
		}
	}

	onConfirmation(e) {
		const value = e.currentTarget.value;
		// this.setState({
		// 	confirmPassword: value,
		// 	passwordConfirmed: value === this.state.generatedPassword,
		// });
	}

	isValid() {
		const firstAccount = AccountStore.getMyAccounts().length === 0;
		let valid = this.state.validAccountName && this.state.captcha;

		if (!WalletDb.getWallet()) {
			valid = valid;
		}
		if (!firstAccount) {
			valid = valid && this.state.registrarAccount;
		}
		return valid;
	}

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
			<div
				className="form-body"
				onClick={() => {
					if (this.state.isCountrySelected) {
						this.setState((prev) => {
							return {
								isCountrySelected: false,
							};
						});
					}
				}}
			>
				<Form
					onFinish={(e) => this.onSubmit(e)}
					layout={'vertical'}
					initialValues={{remember: true}}
					ref={this.formRef}
				>
					<div className="info-form">
						<div className="form-blocks">
							<Form.Item
								label={'First name'}
								css={{marginRight: '10px'}}
								name="firstname"
								rules={[
									{
										validator: (_, value) => {
											if (value.length === 0)
												return Promise.reject('First Name is required.');
											else {
												if (!/^[A-Za-z]{0,63}$/.test(value)) {
													if (value.includes(' '))
														return Promise.reject(
															'Whitespace character is not allowed.'
														);
													else if (/\d/.test(value))
														return Promise.reject('Numbers are not allowed.');
													else
														return Promise.reject(
															'Your First Name must not contain special characters.'
														);
												} else {
													return Promise.resolve();
												}
											}
										},
									},
								]}
							>
								<Input
									id="firstname"
									required
									placeholder="John"
									value={this.state.firstname}
									onChange={this.onFirstnameChange}
									prefix={<UserOutlined />}
									bordered={false}
								/>
							</Form.Item>
							<Form.Item
								label={'Last name'}
								css={{marginLeft: '10px'}}
								name="lastname"
								rules={[
									{
										validator: (_, value) => {
											if (value.length === 0)
												return Promise.reject('Last Name is required.');
											else {
												if (!/^[A-Za-z]{0,63}$/.test(value)) {
													if (value.includes(' '))
														return Promise.reject(
															'Whitespace character is not allowed.'
														);
													else if (/\d/.test(value))
														return Promise.reject('Numbers are not allowed.');
													else
														return Promise.reject(
															'Your Last Name must not contain special characters.'
														);
												} else {
													return Promise.resolve();
												}
											}
										},
									},
								]}
							>
								<Input
									id="lastname"
									required
									placeholder="Doe"
									value={this.state.lastname}
									onChange={this.onLastnameChange}
									bordered={false}
									prefix={<UserOutlined />}
								/>
							</Form.Item>
						</div>
						<div className="form-blocks">
							<Form.Item
								label={'Phone number'}
								css={{marginLeft: '10px'}}
								rules={[
									{
										required: true,
										validator: (_, value) => {
											var message = '';
											if (value.length === 0)
												message = 'The phone number is required.';
											else if (
												this.state.selectedCountryObj?.patterns &&
												Array.isArray(
													this.state.selectedCountryObj?.patterns
												) &&
												this.state.phoneFormat.length !==
													this.state.selectedCountryObj?.patterns[0].length
											) {
												message = `Phone number should be ${
													this.state.selectedCountryObj.patterns[0].replaceAll(
														' ',
														''
													).length
												} digits long`;
											} else {
												return Promise.resolve();
											}
											return Promise.reject(message);
										},
									},
								]}
								name="phone"
							>
								<div className="phone-display-flex">
									{!this.state.isCountrySelected && (
										<div
											className="phone-number-before-select"
											onClick={(e) => {
												this.setState({isCountrySelected: true});
												e.stopPropagation();
											}}
										>
											<img
												className="countryFlag-img"
												src={`${
													process.env.FLAG_ICON_CDN
												}/${this.state.selectedCountryObj?.iso2.toLowerCase()}.png`}
												alt="flag"
											/>
											<span>+{this.state.selectedCountryObj.countryCode}</span>
										</div>
									)}
									{this.state.isCountrySelected && (
										<Select
											style={{
												width: 120,
											}}
											open={this.state.isCountrySelected}
											dropdownClassName="select-box-country"
											dropdownMatchSelectWidth={false}
											showSearch
											onClick={(e) => {
												e.stopPropagation();
											}}
											filterOption={(input, option) => {
												return option?.props?.children?.props?.children[0]?.props?.children[1]
													.toLowerCase()
													.includes(input.toLowerCase());
											}}
											defaultValue={this.state.country}
											onChange={(value) => {
												const obj = countryCodes.find(
													(data) => data.id === Number(value)
												);
												this.setState((prev) => {
													return {
														...prev,
														country: value,
														selectedCountryObj: {...obj},
														phoneFormat: '',
														isCountrySelected: false,
													};
												});
											}}
											getPopupContainer={(triggerNode) =>
												triggerNode.parentNode
											}
										>
											{countryCodes?.map((data, index) => {
												return (
													<Select.Option key={index} value={data?.id}>
														<div className="option-header-register">
															<div>
																<img
																	className="countryFlag-img"
																	src={`${
																		process.env.FLAG_ICON_CDN
																	}/${data?.iso2.toLowerCase()}.png`}
																	alt="flag"
																/>
																{data?.defaultName}
															</div>
															<div className="select-country-code">
																+{data?.countryCode}{' '}
															</div>
														</div>
													</Select.Option>
												);
											})}
										</Select>
									)}
									<Input
										ref={this.phoneRef}
										name="new-password"
										autoComplete={false}
										id="phone"
										required
										placeholder={
											Array.isArray(this.state.selectedCountryObj?.patterns) &&
											this.state.selectedCountryObj?.patterns.length > 0 &&
											this.state.selectedCountryObj?.patterns[0]
												? this.state.selectedCountryObj?.patterns[0]
												: ''
										}
										value={this.state.phoneFormat}
										onKeyDown={(event) => {
											if (
												event.key !== 'Backspace' &&
												!this.state.selectedCountryObj.patterns &&
												this.state.phoneFormat.length === 15
											) {
												event.preventDefault();
											} else if (
												event.key !== 'Backspace' &&
												this.state.selectedCountryObj?.patterns &&
												this.state.phoneFormat.length ===
													this.state.selectedCountryObj.patterns[0].length
											) {
												event.preventDefault();
											} else if (event.key === ' ') {
												event.preventDefault();
											}
										}}
										onChange={this.phoneNumberChangeHandler}
										bordered={false}
									/>
								</div>
							</Form.Item>
						</div>
					</div>
					<AccountNameInput
						cheapNameOnly={firstAccount}
						onChange={this.onAccountNameChange}
						accountShouldNotExist
						placeholder={counterpart.translate('account.name')}
						initial_value={this.state.accountName}
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
					{/* <Form.Item label={counterpart.translate('wallet.generated')}>
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
					</Form.Item> */}
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
						sitekey={`${process.env.RECAPTCHA_SITE_KEY}`}
						onChange={this.caChange.bind(this)}
					/>
					<br></br>
					{this.state.loading ? (
						<LoadingIndicator type="three-bounce" />
					) : (
						<Button
							htmlType="submit"
							type="primary"
							disabled={!valid || (registrarAccount && !isLTM)}
							className="continue-btn"
						>
							<Translate content="registration.continue" />
						</Button>
					)}
					<div className="redirect">
						Or if you have an wallet then{' '}
						<div
							className="btn"
							onClick={() => WalletUnlockActions.unlock_v2()}
						>
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
		const {visibility} = this.state;

		if (visibility)
			return (
				<div className="registration-form">
					{this.renderAccountCreateText()}
					{this.renderAccountCreateForm()}
				</div>
			);
		else return null;
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
