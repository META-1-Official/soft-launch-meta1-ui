import React from 'react';
import Translate from 'react-translate-component';
import PubKeyInput from '../Forms/PubKeyInput';
import ChainTypes from '../Utility/ChainTypes';
import BindToChainState from '../Utility/BindToChainState';
// import {Tabs, Tab} from '../Utility/Tabs';
import counterpart from 'counterpart';
import SignedMessageAction from '../../actions/SignedMessageAction';
import SignedMessage from '../Account/SignedMessage';
import {Switch, Tabs, Typography} from 'antd';
import PageHeader from 'components/PageHeader/PageHeader';
import StyledButton from 'components/Button/Button';

/** This component gives a user interface for signing and verifying messages with the bitShares memo key.
 *  It consists of two tabs:
 *    - Sign message tab (code prefix: tabSM)
 *    - Verify message tab (code prefix: tabVM)
 *
 *  See SignedMessageAction for details on message format.
 *
 *    @author Stefan Schiessl <stefan.schiessl@blockchainprojectsbv.com>
 */

const {Text} = Typography;
class AccountSignedMessages extends React.Component {
	static propTypes = {
		account: ChainTypes.ChainAccount.isRequired,
	};

	constructor(props) {
		super(props);
		// initialize state (do not use setState method!)
		this.state = {
			tabsm_memo_key: this.props.account.get('options').get('memo_key'),
			tabsm_popup: '',
			tabsm_message_text: '',
			tabsm_message_signed: '',
			tabvm_popup: '',
			tabvm_message_signed: '',
			tabvm_verified: null,
			tabvm_message_signed_and_verified: null,
			tabvm_flag_verifyonchange: false,
			currentTab: counterpart.translate('account.signedmessages.signmessage'),
		};
	}
	//P5Jxu4Ts55F6fky31ZUr9wvjdfFNyiQVCVP7Cx9i8BbVgNvBuerD

	/**
	 * Event when user pushes sign button. Memo message and meta will be signed and displayed
	 * in the bottom textarea
	 *
	 * @param event
	 */
	_tabSMSignAction(event) {
		event.preventDefault();

		try {
			// validate keys are still the same. Better: make public memokey field uneditable
			let storedKey = this.props.account.get('options').get('memo_key');
			if (this.state.tabsm_memo_key !== storedKey) {
				throw Error(
					counterpart.translate('account.signedmessages.keymismatch')
				);
			}

			// there should be a message entered
			if (this.state.tabsm_message_text) {
				this._tabSMPopMessage(
					counterpart.translate('account.signedmessages.signing'),
					0
				);
				SignedMessageAction.signMessage(
					this.props.account,
					this.state.tabsm_message_text
				)
					.then((res) => {
						this.setState({
							tabsm_message_signed: res,
							tabsm_popup: '', // clear loading message
						});
					})
					.catch((err) => {
						this._tabSMPopMessage(err.message);
						this.setState({
							tabsm_message_signed: null,
						});
					});
			}
		} catch (err) {
			this._tabSMPopMessage(err.message);
			this.setState({
				tabsm_message_signed: null,
			});
		}
	}

	_tabSMHandleChange(event) {
		// event for textarea
		this.setState({tabsm_message_text: event.target.value});
	}

	_tabSMHandleChangeKey(value) {
		// event for textfield of public key
		this.setState({tabsm_memo_key: value});
	}

	_tabSMCopyToClipBoard(event) {
		// event when user clicks into the signed message textarea
		if (event.target.value !== '') {
			event.target.focus();
			event.target.select();

			try {
				var successful = document.execCommand('copy');
				this._tabSMPopMessage(
					successful
						? counterpart.translate('account.signedmessages.copysuccessful')
						: counterpart.translate('account.signedmessages.copyunsuccessful')
				);
			} catch (err) {
				this._tabSMPopMessage(
					counterpart.translate('account.signedmessages.copyunsuccessful')
				);
			}
		}
	}

	/**
	 * Displays an information to the user that disappears over time
	 *
	 * @param message
	 * @param timeout
	 */
	_tabSMPopMessage(message, timeout = 3000) {
		this.setState({
			tabsm_popup: message,
		});

		if (message !== '' && timeout > 0) {
			setTimeout(() => {
				this.setState({
					tabsm_popup: '',
				});
			}, timeout);
		}
	}

	/**
	 * Event when the user tries to verify a message, either manual through the button or onChange of the textarea.
	 * The message is parsed and verified, the user gets the message restated in the bottom part of the site
	 *
	 * @param event
	 */
	_tabVMAction(event) {
		event.preventDefault();

		// reset to unverified state
		this.setState({
			tabvm_message_signed_and_verified: null,
			tabvm_verified: false,
		});

		// attempt verifying
		if (this.state.tabvm_message_signed) {
			this._tabVMPopMessage(
				counterpart.translate('account.signedmessages.verifying'),
				0
			);

			setTimeout(() => {
				// do not block gui
				try {
					let message_signed_and_verified = SignedMessageAction.verifyMemo(
						this.state.tabvm_message_signed
					);
					this.setState({
						tabvm_message_signed_and_verified: message_signed_and_verified,
						tabvm_verified: true,
						tabvm_popup: '', // clear verifying message
					});
				} catch (err) {
					this._tabVMPopMessage(err.message);
					this.setState({
						tabvm_message_signed_and_verified: null,
						tabvm_verified: false,
					});
				}
			}, 0);
		}
	}

	_tabVMHandleChange(event) {
		// onchange event of the input textarea
		this.setState({
			tabvm_message_signed: event.target.value,
			tabvm_verified: false,
			tabvm_message_signed_and_verified: null,
		});
		if (this.state.tabvm_flag_verifyonchange) {
			this._tabVMAction(event);
		}
	}

	/**
	 * Displays an information to the user that disappears over time
	 *
	 * @param message
	 * @param timeout
	 */
	_tabVMPopMessage(message, timeout = 3000) {
		this.setState({
			tabvm_popup: message,
		});

		if (message !== '' && timeout > 0) {
			setTimeout(() => {
				this.setState({
					tabvm_popup: '',
				});
			}, timeout);
		}
	}

	_tabVMToggleVerifyOnChange() {
		// event when the user enables / disables verifying while typing
		this.setState({
			tabvm_flag_verifyonchange: !this.state.tabvm_flag_verifyonchange,
		});
	}
	onTabChange = (e) => {
		console.log('e', e);
		this.setState({
			currentTab: e,
		});
	};

	render() {
		const {currentTab} = this.state;

		return (
			<>
				<div>
					<PageHeader title={currentTab} level={2} showDivider />
				</div>
				<div
					css={(theme) => ({
						padding: '1rem 2rem',
						[`@media (max-width: ${theme.sizes.sm})`]: {
							padding: '1rem',
						},
					})}
				>
					<Tabs
						defaultActiveKey="1"
						animated={false}
						onChange={this.onTabChange}
						css={(theme) => ({
							'.ant-tabs-nav': {
								margin: '0 0 0px 0',
							},
							'.ant-tabs-content-holder': {
								border: `1px solid ${theme.colors.borderColor}`,
								borderRadius: '7px',
								paddingTop: '1rem',
								[`@media (max-width: ${theme.sizes.lg})`]: {
									padding: '1rem',
								},
							},
						})}
					>
						<Tabs.TabPane
							tab={<Translate content="account.signedmessages.signmessage" />}
							key={counterpart.translate('account.signedmessages.signmessage')}
						>
							<Text
								css={(theme) => ({
									color: theme.colors.primaryColor,
									fontSize: '1rem',
									marginLeft: '1.5rem',
								})}
							>
								<Translate content="account.signedmessages.signmessage" />
							</Text>
							<div
								css={(theme) => ({
									backgroundColor: theme.colors.containerBackgroundColor,
									margin: '1.5rem',
									padding: '1rem',
								})}
							>
								<PubKeyInput
									ref="memo_key"
									value={this.state.tabsm_memo_key}
									label="account.perm.memo_public_key"
									placeholder="Public Key"
									tabIndex={7}
									onChange={this._tabSMHandleChangeKey.bind(this)}
									disableActionButton={true}
								/>
								<br />
								<textarea
									rows="10"
									value={this.state.tabsm_message_text}
									onChange={this._tabSMHandleChange.bind(this)}
									placeholder={counterpart.translate(
										'account.signedmessages.entermessage'
									)}
									css={(theme) => ({
										'&&&&': {
											backgroundColor: theme.colors.black,
											border: 'none',
											color: theme.colors.inputTextColor,
											borderRadius: '6px',
											fontSize: '14px',
											marginTop: '1rem',
										},
									})}
								/>
								<span>
									<StyledButton
										buttonType="primary"
										onClick={this._tabSMSignAction.bind(this)}
									>
										<Translate content="account.signedmessages.sign" />
									</StyledButton>
									<div style={{color: 'gray'}}>{this.state.tabsm_popup}</div>
								</span>
								<br />
								<br />
								<textarea
									rows="14"
									value={this.state.tabsm_message_signed}
									style={{editable: false}}
									placeholder={counterpart.translate(
										'account.signedmessages.automaticcreation'
									)}
									onClick={this._tabSMCopyToClipBoard.bind(this)}
									css={(theme) => ({
										'&&&&': {
											backgroundColor: theme.colors.black,
											border: 'none',
											color: theme.colors.inputTextColor,
											borderRadius: '6px',
											fontSize: '14px',
										},
									})}
								/>
							</div>
						</Tabs.TabPane>
						<Tabs.TabPane
							tab={<Translate content="account.signedmessages.verifymessage" />}
							key={counterpart.translate(
								'account.signedmessages.verifymessage'
							)}
						>
							<Text
								css={(theme) => ({
									color: theme.colors.primaryColor,
									fontSize: '1rem',
									marginLeft: '1.5rem',
								})}
							>
								<Translate content="account.signedmessages.verifymessage" />
							</Text>
							<div
								css={(theme) => ({
									backgroundColor: theme.colors.containerBackgroundColor,
									margin: '1.5rem',
									padding: '1rem',
								})}
							>
								<div
									style={{
										float: 'right',
										marginTop: '0.1em',
										marginBottom: '0.5em',
									}}
								>
									<table>
										<tr>
											<td>
												<label
													style={{
														marginBottom: 0,
														marginRight: '0.5rem',
													}}
												>
													<Translate content="account.signedmessages.verifyonchange" />
												</label>
											</td>
											<td>
												<Switch
													checked={this.state.tabvm_flag_verifyonchange}
													onChange={this._tabVMToggleVerifyOnChange.bind(this)}
												/>
											</td>
										</tr>
									</table>
								</div>

								<textarea
									rows="10"
									value={this.state.tabvm_message_signed}
									onChange={this._tabVMHandleChange.bind(this)}
									placeholder={counterpart.translate(
										'account.signedmessages.entermessage'
									)}
									css={(theme) => ({
										'&&&&': {
											backgroundColor: theme.colors.black,
											border: 'none',
											color: theme.colors.inputTextColor,
											borderRadius: '6px',
											fontSize: '14px',
										},
									})}
								/>
								<span>
									<StyledButton
										className="button"
										onClick={this._tabVMAction.bind(this)}
										buttonType="primary"
									>
										<Translate content="account.signedmessages.verify" />
									</StyledButton>
									<text style={{color: 'gray'}}>{this.state.tabvm_popup}</text>
									{this.state.tabvm_verified !== null && (
										<div style={{float: 'right'}}>
											Message is:
											<div
												style={{
													backgroundColor: this.state.tabvm_verified
														? 'green'
														: 'red',
												}}
											>
												<label>
													{this.state.tabvm_verified
														? 'verified'
														: 'not verified'}
												</label>
											</div>
										</div>
									)}
									{((this.state.tabvm_verified &&
										this.state.tabvm_message_signed_and_verified !== null) ||
										this.state.tabvm_flag_verifyonchange) && (
										<div>
											<br />
											<SignedMessage
												message={this.state.tabvm_message_signed}
											/>
										</div>
									)}
								</span>
							</div>
						</Tabs.TabPane>
					</Tabs>
				</div>

				{/* <div className="grid-content app-tables no-padding" ref="appTables">
					<div className="content-block small-12">
						<div className="tabs-container generic-bordered-box">
							<Tabs
								className="account-tabs"
								tabsClass="account-overview no-padding bordered-header content-block"
								setting="accountSignedMessagesTab"
								contentClass="grid-content shrink small-vertical medium-horizontal padding"
								segmented={false}
							>
								<Tab title="account.signedmessages.signmessage">
									<div className="grid-content" style={{overflowX: 'hidden'}}>
										<div className="content-block no-margin">
											<h3>
												<Translate content="account.signedmessages.signmessage" />
											</h3>
										</div>
										<PubKeyInput
											ref="memo_key"
											value={this.state.tabsm_memo_key}
											label="account.perm.memo_public_key"
											placeholder="Public Key"
											tabIndex={7}
											onChange={this._tabSMHandleChangeKey.bind(this)}
											disableActionButton={true}
										/>
										<br />
										<textarea
											rows="10"
											value={this.state.tabsm_message_text}
											onChange={this._tabSMHandleChange.bind(this)}
											placeholder={counterpart.translate(
												'account.signedmessages.entermessage'
											)}
										/>
										<span>
											<button
												className="button"
												onClick={this._tabSMSignAction.bind(this)}
											>
												<Translate content="account.signedmessages.sign" />
											</button>
											<div style={{color: 'gray'}}>
												{this.state.tabsm_popup}
											</div>
										</span>
										<br />
										<br />
										<textarea
											rows="14"
											value={this.state.tabsm_message_signed}
											style={{editable: false}}
											placeholder={counterpart.translate(
												'account.signedmessages.automaticcreation'
											)}
											onClick={this._tabSMCopyToClipBoard.bind(this)}
										/>
									</div>
								</Tab>

								<Tab title="account.signedmessages.verifymessage">
									<div className="grid-content" style={{overflowX: 'hidden'}}>
										<div className="content-block no-margin">
											<h3>
												<Translate content="account.signedmessages.verifymessage" />
											</h3>
											<div
												style={{
													float: 'right',
													marginTop: '0.1em',
													marginBottom: '0.5em',
												}}
											>
												<table>
													<tr>
														<td>
															<label
																style={{
																	marginBottom: 0,
																	marginRight: '0.5rem',
																}}
															>
																<Translate content="account.signedmessages.verifyonchange" />
															</label>
														</td>
														<td>
															<Switch
																checked={this.state.tabvm_flag_verifyonchange}
																onChange={this._tabVMToggleVerifyOnChange.bind(
																	this
																)}
															/>
														</td>
													</tr>
												</table>
											</div>
										</div>
										<textarea
											rows="10"
											value={this.state.tabvm_message_signed}
											onChange={this._tabVMHandleChange.bind(this)}
											placeholder={counterpart.translate(
												'account.signedmessages.entermessage'
											)}
										/>
										<span>
											<button
												className="button"
												onClick={this._tabVMAction.bind(this)}
											>
												<Translate content="account.signedmessages.verify" />
											</button>
											<text style={{color: 'gray'}}>
												{this.state.tabvm_popup}
											</text>
											{this.state.tabvm_verified !== null && (
												<div style={{float: 'right'}}>
													Message is:
													<div
														style={{
															backgroundColor: this.state.tabvm_verified
																? 'green'
																: 'red',
														}}
													>
														<label>
															{this.state.tabvm_verified
																? 'verified'
																: 'not verified'}
														</label>
													</div>
												</div>
											)}
											{((this.state.tabvm_verified &&
												this.state.tabvm_message_signed_and_verified !==
													null) ||
												this.state.tabvm_flag_verifyonchange) && (
												<div>
													<br />
													<SignedMessage
														message={this.state.tabvm_message_signed}
													/>
												</div>
											)}
										</span>
									</div>
								</Tab>
							</Tabs>
						</div>
					</div>
				</div> */}
			</>
		);
	}
}
AccountSignedMessages = BindToChainState(AccountSignedMessages);

export default AccountSignedMessages;
