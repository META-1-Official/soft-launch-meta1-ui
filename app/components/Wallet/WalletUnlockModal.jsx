import React from 'react';
// import BaseModal from "../Modal/BaseModal";
import ZfApi from 'react-foundation-apps/src/utils/foundation-api';
// import PasswordInput from "../Forms/PasswordInput";
import AltContainer from 'alt-container';
import WalletDb from 'stores/WalletDb';
import WalletUnlockStore from 'stores/WalletUnlockStore';
import WalletManagerStore from 'stores/WalletManagerStore';
import BackupStore from 'stores/BackupStore';
import AccountStore from 'stores/AccountStore';
import SettingsStore from 'stores/SettingsStore';
import AuthStore from 'stores/AuthStore';
import WalletUnlockActions from 'actions/WalletUnlockActions';
import WalletActions from 'actions/WalletActions';
import BackupActions, {restore, backup} from 'actions/BackupActions';
import AccountActions from 'actions/AccountActions';
import SettingsActions from 'actions/SettingsActions';
import {Apis} from 'meta1-vision-ws';
import {
	Modal,
	Button,
	Form,
	Input,
	Switch,
	InputNumber,
	Tooltip,
	notification,
	Typography,
} from 'antd';
import utils from 'common/utils';
import AccountSelector from '../Account/AccountSelectorAnt';
import {PrivateKey} from 'meta1-vision-js';
import {saveAs} from 'file-saver';
import LoginTypeSelector from './LoginTypeSelector';
import counterpart from 'counterpart';
import {
	WalletSelector,
	CreateLocalWalletLink,
	WalletDisplay,
	BackupWarning,
	BackupFileSelector,
	DisableChromeAutocomplete,
	KeyFileLabel,
} from './WalletUnlockModalLib';
import {backupName} from 'common/backupUtils';
import {withRouter} from 'react-router-dom';
import ls, {
	setLocalStorageType,
	isPersistantType,
} from 'lib/common/localStorage';
import Translate from 'react-translate-component';
import Icon from '../Icon/Icon';

const STORAGE_KEY = '__AuthData__';

const ss = new ls(STORAGE_KEY);
const {Text, Title} = Typography;
class WalletUnlockModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.initialState(props);
		this.account_input = React.createRef();

		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.renderTorusLogin = this.renderTorusLogin.bind(this);
		this.toggleEye = this.toggleEye.bind(this);
	}

	initialState = (props = this.props) => {
		const {
			passwordAccount,
			passwordlessAccount,
			currentWallet,
			passwordlessLogin,
		} = props;
		return {
			isModalVisible: false,
			passwordError: null,
			accountName: passwordlessLogin ? passwordlessAccount : passwordAccount,
			passwordInput: null,
			walletSelected: !!currentWallet,
			customError: null,
			isOpen: false,
			restoringBackup: false,
			stopAskingForBackup: false,
			rememberMe: WalletUnlockStore.getState().rememberMe,
			focusedOnce: false,
			isAutoLockVisible: false,
			captcha: true,
			eyeChecked: false,
		};
	};

	componentWillReceiveProps(np) {
		const {walletSelected, restoringBackup, accountName} = this.state;
		const {
			currentWallet: newCurrentWallet,
			passwordAccount: newPasswordAccount,
		} = np;

		const newState = {};
		// Updating the accountname through the listener breaks UX (#2335)
		if (walletSelected && !restoringBackup && !newCurrentWallet)
			newState.walletSelected = false;
		if (
			this.props.passwordLogin != np.passwordLogin ||
			this.props.passwordlessLogin != np.passwordlessLogin
		) {
			newState.passwordError = false;
			newState.customError = null;
		}

		this.setState(newState);
	}

	shouldComponentUpdate(np, ns) {
		if (this.state.isOpen && !ns.isOpen) return false;
		return (
			!utils.are_equal_shallow(np, this.props) ||
			!utils.are_equal_shallow(ns, this.state)
		);
	}

	handlePasswordChange(event) {
		this.setState({
			password: event.target.value,
			passwordError: null,
		});
	}

	handleModalClose = () => {
		WalletUnlockActions.cancel();
		BackupActions.reset();
		this.setState(this.initialState());
	};

	handleModalOpen = () => {
		BackupActions.reset();
		this.setState({isOpen: true}, () => {
			const {passwordLogin, passwordlessLogin} = this.props;
			if (!passwordLogin || !passwordlessLogin) {
				const {password_input} = this.refs;
				if (password_input) {
					password_input.clear();
					password_input.focus();
				}

				const {dbWallet} = this.props;
				if (dbWallet && Apis.instance().chain_id !== dbWallet.chain_id) {
					notification.error({
						message: counterpart.translate(
							'notifications.wallet_unlock_different_block_chain',
							{
								expectedWalletId: dbWallet.chain_id
									.substring(0, 4)
									.toUpperCase(),
								actualWalletId: Apis.instance()
									.chain_id.substring(0, 4)
									.toUpperCase(),
							}
						),
					});
					WalletUnlockActions.cancel();
				}
			}
		});
	};

	componentDidMount() {
		const {modalId, passwordlessLogin} = this.props;
		if (passwordlessLogin) {
			this.props.setOpenLoginInstance();
		}

		ZfApi.subscribe(modalId, (name, msg) => {
			const {isOpen} = this.state;

			if (name !== modalId) return;
			if (msg === 'close' && isOpen) {
				this.handleModalClose();
			} else if (msg === 'open' && !isOpen) {
				this.handleModalOpen();
			}
		});
	}

	componentDidUpdate() {
		const {resolve, isLocked, passwordLogin, passwordlessLogin} = this.props;
		const {isModalVisible, accountName, focusedOnce} = this.state;

		console.log('@0 - ', resolve, isLocked);

		if (
			!focusedOnce &&
			isModalVisible &&
			(passwordLogin || passwordlessLogin)
		) {
			let account_input = this.account_input && this.account_input.current;
			let password_input = this.password_input;

			if (!account_input || !password_input) {
				this.forceUpdate();
			}
			if (accountName && password_input) {
				password_input.input.focus();
				this.setState({focusedOnce: true});
			} else if (
				account_input &&
				account_input.input &&
				typeof account_input.focus === 'function'
			) {
				account_input.focus();
				this.setState({focusedOnce: true});
			}
		} else if (
			!focusedOnce &&
			isModalVisible &&
			!passwordLogin &&
			!passwordlessLogin
		) {
			let password_input = this.password_input2;
			if (!password_input) {
				this.forceUpdate();
			}
			if (password_input) {
				password_input.input.focus();
				this.setState({focusedOnce: true});
			}
		}

		if (resolve) {
			if (isLocked) {
				this.setState({
					isModalVisible: true,
				});
			} else {
				resolve();
			}
		} else {
			this.setState({
				isModalVisible: false,
				password: '',
			});
		}
	}

	validate = (password, account) => {
		const {passwordLogin, resolve} = this.props;
		const {stopAskingForBackup} = this.state;

		const {success, cloudMode} = WalletDb.validatePassword(
			password || '',
			true, //unlock
			account
		);

		if (!success && WalletDb.isLocked()) {
			this.setState({passwordError: 'Invalid password'});
		} else {
			if (!passwordLogin) {
				this.setState({password: ''});
			} else {
				this.setState({password: ''});
				if (cloudMode) AccountActions.setPasswordAccount(account);
			}
			WalletUnlockActions.change();
			if (stopAskingForBackup) WalletActions.setBackupDate();
			else if (this.shouldUseBackupLogin()) this.backup();
			resolve();
			WalletUnlockActions.cancel();

			let newValue = parseInt(
				SettingsStore.getState().settings.get('walletLockTimeout'),
				10
			);
			if (isNaN(newValue)) newValue = 0;
			if (newValue > 3600) return;
			if (!isNaN(newValue) && typeof newValue === 'number') {
				SettingsActions.changeSetting({
					setting: 'walletLockTimeout',
					value: newValue,
				});
			}

			if (
				this.props.history.location.pathname.split('/')[1] === 'registration'
			) {
				this.props.history.push(`/account/${account}`);
			}
		}
	};

	renderTorusLogin = async () => {
		const {accountName} = this.state;
		if (this.props.isLoading || !this.props.openLogin) {
			return;
		}
		try {
			const {openLogin} = this.props;
			await openLogin.init();
			ss.set('account_login_name', accountName);
			ss.remove('account_registration_name');
			if (openLogin.privKey) {
				await openLogin.logout({});
				await openLogin.login();
			} else {
				const privKey = await openLogin.login();
			}
		} catch (error) {}
	};

	passwordInput = () =>
		this.refs.password_input ||
		this.refs.custom_password_input.refs.password_input;

	restoreBackup = (password, callback) => {
		const {backup} = this.props;
		const privateKey = PrivateKey.fromSeed(password || '');
		const walletName = backup.name.split('.')[0];
		restore(privateKey.toWif(), backup.contents, walletName)
			.then(() => {
				return WalletActions.setWallet(walletName)
					.then(() => {
						BackupActions.reset();
						callback();
					})
					.catch((e) => this.setState({customError: e.message}));
			})
			.catch((e) => {
				const message = typeof e === 'string' ? e : e.message;
				const invalidBackupPassword = message === 'invalid_decryption_key';
				this.setState({
					customError: invalidBackupPassword ? null : message,
					passwordError: invalidBackupPassword,
				});
			});
	};

	_onNavigate(route, e, fromMenu) {
		!fromMenu && e.preventDefault();

		// Set Accounts Tab as active tab
		if (route == '/accounts') {
			SettingsActions.changeViewSetting({
				dashboardEntry: 'accounts',
			});
		}
		this.props.history.push(route);
	}

	handleLogin = (e) => {
		if (e) e.preventDefault();
		const {passwordLogin, backup, passwordlessLogin} = this.props;
		const {walletSelected, accountName} = this.state;
		if (this.state.captcha) {
			if (!passwordLogin && !walletSelected && !passwordlessLogin) {
				this.setState({
					customError: counterpart.translate('wallet.ask_to_select_wallet'),
				});
			} else {
				this.setState({passwordError: null}, () => {
					const password = this.state.password;
					if (!passwordLogin && !passwordlessLogin && backup.name) {
						this.restoreBackup(password, () => this.validate(password));
					} else {
						if (!this.state.rememberMe) {
							if (isPersistantType()) {
								setLocalStorageType('inram');
							}
						} else {
							if (!isPersistantType()) {
								setLocalStorageType('persistant');
							}
						}
						const account =
							passwordLogin || passwordlessLogin ? accountName : null;
						if (passwordlessLogin) {
							if (!accountName) {
								return;
							}
							this.renderTorusLogin();
						} else {
							this.validate(password, account);
						}
					}
				});
			}
		} else {
			alert('Pass the reCaptcha check!');
		}
	};

	closeRedirect = (path) => {
		WalletUnlockActions.cancel();
		this.props.history.push(path);
	};

	handleCreateWallet = () => this.closeRedirect('/registration/local');

	handleRestoreOther = () => this.closeRedirect('/settings/restore');

	loadBackup = (e) => {
		const fullPath = e.target.value;
		const file = e.target.files[0];

		this.setState({restoringBackup: true}, () => {
			const startIndex =
				fullPath.indexOf('\\') >= 0
					? fullPath.lastIndexOf('\\')
					: fullPath.lastIndexOf('/');
			let filename = fullPath.substring(startIndex);
			if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
				filename = filename.substring(1);
			}
			BackupActions.incommingWebFile(file);
			this.setState({
				walletSelected: true,
			});
		});
	};

	handleSelectedWalletChange = (e) => {
		const {value} = e.target;
		const selectionType = value.split('.')[0];
		const walletName = value.substring(value.indexOf('.') + 1);

		BackupActions.reset();
		if (selectionType === 'upload')
			this.setState({
				restoringBackup: true,
				customError: null,
			});
		else
			WalletActions.setWallet(walletName).then(() =>
				this.setState({
					walletSelected: true,
					customError: null,
					restoringBackup: false,
				})
			);
	};

	backup = () =>
		backup(this.props.dbWallet.password_pubkey).then((contents) => {
			const {currentWallet} = this.props;
			const name = backupName(currentWallet);
			BackupActions.incommingBuffer({name, contents});

			const {backup} = this.props;
			let blob = new Blob([backup.contents], {
				type: 'application/octet-stream; charset=us-ascii',
			});
			if (blob.size !== backup.size)
				throw new Error('Invalid backup to download conversion');
			saveAs(blob, name);
			WalletActions.setBackupDate();
			BackupActions.reset();
		});

	handleAskForBackupChange = (e) =>
		this.setState({stopAskingForBackup: e.target.checked});

	handleUseOtherWallet = () => {
		this.setState({
			walletSelected: false,
			restoringBackup: false,
			passwordError: null,
			customError: null,
		});
	};

	toggleEye = () => {
		var tg = this.state.eyeChecked;
		this.setState({eyeChecked: !tg});
	};

	handleAccountNameChange = (accountName) => {
		this.setState({accountName, error: null});
	};

	shouldShowBackupWarning = () =>
		!this.props.passwordLogin &&
		this.state.walletSelected &&
		!this.state.restoringBackup &&
		!(!!this.props.dbWallet && !!this.props.dbWallet.backup_date);

	shouldUseBackupLogin = () =>
		this.shouldShowBackupWarning() && !this.state.stopAskingForBackup;

	handleRememberMe = () => {
		let newRememberMe = !this.state.rememberMe;
		this.setState({rememberMe: newRememberMe});
		SettingsActions.changeSetting({
			setting: 'rememberMe',
			value: newRememberMe,
		});
	};

	caChange = () => {
		this.setState({
			captcha: true,
		});
	};

	handleWalletAutoLock = (val) => {
		let newValue = parseInt(val, 10);
		if (isNaN(newValue)) newValue = 0;
		if (newValue > 3600) return;
		if (!isNaN(newValue) && typeof newValue === 'number') {
			SettingsActions.changeSetting({
				setting: 'walletLockTimeout',
				value: newValue,
			});
		}
	};

	render() {
		const {
			backup,
			passwordLogin,
			passwordlessLogin,
			modalId,
			currentWallet,
			walletNames,
			walletLockTimeout,
		} = this.props;
		const {
			walletSelected,
			restoringBackup,
			passwordError,
			customError,
			accountName,
			stopAskingForBackup,
			isOpen,
		} = this.state;

		const noWalletNames = !(walletNames.size > 0);
		const noLocalWallet = noWalletNames && !walletSelected;
		const walletDisplayName = backup.name || currentWallet;
		const errorMessage = passwordError
			? counterpart.translate('wallet.pass_incorrect')
			: customError;
		return (
			<Modal
				visible={this.state.isModalVisible}
				className="unlock_wallet_modal2"
				id={modalId}
				closeable={true}
				ref="modal"
				overlay={true}
				overlayClose={false}
				modalHeader="header.unlock_short"
				leftHeader
				zIndex={1001}
				footer={null}
				onCancel={this.handleModalClose}
			>
				<Title className="header-title1">META1 Wallet Login</Title>
				<div className="header-title2">
					{/*Login with Wallet name (Cloud wallet) and Key file (Local wallet)*/}
					Login with Wallet name (Cloud wallet)
				</div>
				<Form className="full-width" layout="vertical">
					{/* <LoginTypeSelector type={passwordLogin} /> */}
					{/* <LoginTypeSelector /> */}
					{passwordLogin || passwordlessLogin ? (
						<div className="info-form">
							<DisableChromeAutocomplete />
							<AccountSelector
								label="account.name"
								inputRef={this.account_input} // needed for ref forwarding to Input
								accountName={accountName}
								account={accountName}
								onChange={this.handleAccountNameChange}
								onAccountChanged={() => {}}
								size={60}
								hideImage
								placeholder=" "
								useHR
								labelClass="login-label"
								reserveErrorSpace
							/>

							{passwordLogin && (
								<Form.Item
									label={counterpart.translate('settings.password')}
									validateStatus={passwordError ? 'error' : ''}
									onChange={this.handlePasswordChange}
									onPasswordChanged={() => {}}
									help={passwordError || ''}
								>
									<div className="password-field">
										<Input
											type={this.state.eyeChecked ? 'text' : 'password'}
											value={this.state.password}
											onChange={this.handlePasswordChange}
											onPasswordChanged={() => {}}
											onPressEnter={this.handleLogin}
											ref={(input) => {
												this.password_input = input;
											}}
											bordered={false}
										/>
										<div onClick={this.toggleEye}>
											<Icon
												name={this.state.eyeChecked ? 'eye' : 'eye-striked'}
												className="eye-icon"
											/>
										</div>
									</div>
								</Form.Item>
							)}
						</div>
					) : (
						<div>
							<div
								className={
									'key-file-selector ' +
									(restoringBackup && !walletSelected ? 'restoring' : '')
								}
							>
								<KeyFileLabel
									showUseOtherWalletLink={restoringBackup && !backup.name}
									onUseOtherWallet={this.handleUseOtherWallet}
								/>
								<hr />
								{walletSelected ? (
									<WalletDisplay
										name={walletDisplayName}
										onUseOtherWallet={this.handleUseOtherWallet}
									/>
								) : (
									<div>
										{restoringBackup || noWalletNames ? (
											<BackupFileSelector
												onFileChosen={this.loadBackup}
												onRestoreOther={this.handleRestoreOther}
											/>
										) : (
											<WalletSelector
												onFileChosen={this.loadBackup}
												restoringBackup={restoringBackup}
												walletNames={walletNames}
												onWalletChange={this.handleSelectedWalletChange}
											/>
										)}
										{noLocalWallet && (
											<CreateLocalWalletLink
												onCreate={this.handleCreateWallet}
											/>
										)}
									</div>
								)}
							</div>

							<Form.Item
								label={counterpart.translate('wallet.enter_password')}
								validateStatus={errorMessage ? 'error' : 'success'}
								help={errorMessage}
							>
								<Input
									css={(theme) => ({
										'&&': {
											backgroundColor: theme.colors.black,
											border: `1px solid ${theme.colors.borderColor}`,
											color: theme.colors.inputTextColor,
											borderRadius: '4px',
										},
									})}
									type="password"
									value={this.state.password}
									placeholder={counterpart.translate('wallet.enter_password')}
									onChange={this.handlePasswordChange}
									onPressEnter={this.handleLogin}
									ref={(input) => {
										this.password_input2 = input;
									}}
								/>
							</Form.Item>
						</div>
					)}
					{this.shouldShowBackupWarning() && (
						<BackupWarning
							onChange={this.handleAskForBackupChange}
							checked={stopAskingForBackup}
						/>
					)}
				</Form>
				{`passwordLogin` && (
					<div className="control-wrapper none">
						<Tooltip
							key="wallet.remember_me_explanation"
							title={counterpart.translate('wallet.remember_me_explanation')}
						>
							<div
								onClick={this.handleRememberMe.bind(this)}
								className="remember-me"
							>
								<Switch
									checked={this.state.rememberMe}
									onChange={this.handleRememberMe.bind(this)}
								/>
								<Translate content="wallet.remember_me" />
							</div>
						</Tooltip>
						<div className="timeout" key="settings.walletLockTimeoutTooltip">
							<Tooltip
								title={counterpart.translate(
									'settings.walletLockTimeoutTooltip'
								)}
							>
								<Icon
									onClick={() => {
										this.setState({
											isAutoLockVisible: !this.state.isAutoLockVisible,
										});
									}}
									name={'autolock'}
									size={'1_5x'}
									css={{cursor: 'pointer'}}
								/>
							</Tooltip>
							{this.state.isAutoLockVisible && (
								<Tooltip
									title={counterpart.translate('settings.walletLockTimeout')}
								>
									<InputNumber
										value={walletLockTimeout}
										onChange={this.handleWalletAutoLock}
										placeholder="Auto-lock after..."
										style={{
											marginLeft: '7px',
											width: '65px',
											height: '25px',
										}}
									/>
								</Tooltip>
							)}
						</div>
					</div>
				)}
				<div className="footer-wrapper">
					<Button
						htmlType="submit"
						type="primary"
						onClick={this.handleLogin}
						className="login-btn"
						disabled={
							!this.state.accountName ||
							!this.state.password ||
							this.state.accountName === '' ||
							this.state.password === ''
						}
					>
						{counterpart.translate(
							this.shouldUseBackupLogin()
								? 'wallet.backup_login'
								: 'header.unlock_short'
						)}
					</Button>
					<div className="redirect">
						Or create your <a href="/registration">wallet</a>
					</div>
				</div>
			</Modal>
		);
	}
}

WalletUnlockModal.defaultProps = {
	modalId: 'unlock_wallet_modal2',
};

WalletUnlockModal = withRouter(WalletUnlockModal);

class WalletUnlockModalContainer extends React.Component {
	render() {
		return (
			<AltContainer
				stores={[
					WalletUnlockStore,
					AccountStore,
					WalletManagerStore,
					WalletDb,
					BackupStore,
					SettingsStore,
				]}
				inject={{
					currentWallet: () => WalletManagerStore.getState().current_wallet,
					walletNames: () => WalletManagerStore.getState().wallet_names,
					dbWallet: () => WalletDb.getWallet(),
					isLocked: () => WalletDb.isLocked(),
					backup: () => BackupStore.getState(),
					resolve: () => WalletUnlockStore.getState().resolve,
					reject: () => WalletUnlockStore.getState().reject,
					locked: () => WalletUnlockStore.getState().locked,
					passwordLogin: () => WalletUnlockStore.getState().passwordLogin,
					passwordlessLogin: () =>
						WalletUnlockStore.getState().passwordlessLogin,
					passwordAccount: () => AccountStore.getState().passwordAccount || '',
					passwordlessAccount: () =>
						AccountStore.getState().passwordlessAccount || '',
					walletLockTimeout: () => {
						return SettingsStore.getState().settings.get('walletLockTimeout');
					},
					isLoading: () => AuthStore.getState().isLoading,
					openLogin: () => AuthStore.getState().openLogin,
					privKey: () => AuthStore.getState().privKey,
					setOpenLoginInstance: () => AuthStore.setOpenLoginInstance,
				}}
			>
				<WalletUnlockModal {...this.props} />
			</AltContainer>
		);
	}
}

export default WalletUnlockModalContainer;
