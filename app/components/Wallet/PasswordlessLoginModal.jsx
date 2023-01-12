import React from 'react';
import ZfApi from 'react-foundation-apps/src/utils/foundation-api';
import AltContainer from 'alt-container';
import WalletDb from 'stores/WalletDb';
import WalletUnlockStore from 'stores/WalletUnlockStore';
import AccountStore from 'stores/AccountStore';
import AuthStore from 'stores/AuthStore';
import WalletUnlockActions from 'actions/WalletUnlockActions';
import {Apis} from 'meta1-vision-ws';
import {Modal, Button, Form, Input, notification, Typography} from 'antd';
import utils from 'common/utils';
import AccountSelector from '../Account/AccountSelectorAnt';
import counterpart from 'counterpart';
import {DisableChromeAutocomplete} from './WalletUnlockModalLib';
import {withRouter} from 'react-router-dom';
import ls from 'lib/common/localStorage';
import {MailOutlined} from '@ant-design/icons';
import AccountActions from 'actions/AccountActions';

const STORAGE_KEY = '__AuthData__';

const ss = new ls(STORAGE_KEY);
const {Text, Title} = Typography;

class PasswordlessLoginModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.initialState(props);
		this.account_input = React.createRef();
		this.login_btn_ref = React.createRef();

		this.renderTorusLogin = this.renderTorusLogin.bind(this);
	}

	initialState = (props = this.props) => {
		return {
			isModalVisible: false,
			accountName: '',
			isOpen: false,
			hasError: true,
			isTorusLogin: false,
		};
	};

	shouldComponentUpdate(np, ns) {
		if (this.state.isOpen && !ns.isOpen) return false;
		return (
			!utils.are_equal_shallow(np, this.props) ||
			!utils.are_equal_shallow(ns, this.state)
		);
	}

	handleModalClose = () => {
		WalletUnlockActions.cancel();
		this.setState(this.initialState());
	};

	handleModalOpen = () => {
		this.setState({isOpen: true}, () => {
			const {passwordLogin, passwordlessLogin} = this.props;
			if (!passwordLogin || !passwordlessLogin) {
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
					WalletUnlockActions.cancel_v2();
				}
			}
		});
	};

	componentDidMount() {
		const {modalId} = this.props;
		this.props.setOpenLoginInstance();

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
		const {resolve_v2, isLocked_v2} = this.props;

		if (resolve_v2) {
			if (isLocked_v2) {
				this.setState({
					isModalVisible: true,
				});
			} else {
				resolve_v2();
			}
		} else {
			this.setState({
				isModalVisible: false,
			});
		}
	}

	renderTorusLogin = async () => {
		const {accountName} = this.state;
		if (!this.props.openLogin) {
			return;
		}
		try {
			this.setState({isTorusLogin: true});
			const {openLogin} = this.props;
			localStorage.setItem('openlogin_store', '{}');
			await openLogin.init();
			ss.set('account_login_name', accountName);

			ss.remove('account_registration_name');
			if (openLogin.privKey) {
				await openLogin.logout({});
				await openLogin.login();
			} else {
				const privKey = await openLogin.login();
			}
		} catch (error) {
			this.setState({isTorusLogin: false});
		}
	};

	handleLogin = (e) => {
		if (e) e.preventDefault();
		const {accountName} = this.state;
		if (!accountName) {
			return;
		}
		if (this.state.hasError) {
			return;
		}
		AccountActions.setPasswordlessAccount(accountName);
		this.renderTorusLogin();
	};

	handleAccountNameChange = (accountName) => {
		this.setState({accountName, error: null});
	};

	setHasError = (hasError) => {
		this.setState({hasError});
	};

	render() {
		const {accountName, isOpen} = this.state;
		return (
			<Modal
				visible={this.state.isModalVisible}
				className="unlock_wallet_modal2"
				id={this.props.modalId}
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
					Login with Wallet name(Cloud wallet)
				</div>
				<Form
					className="full-width"
					layout="vertical"
					class="registration-form"
				>
					<div className="info-form">
						<DisableChromeAutocomplete />

						<AccountSelector
							label="account.name"
							inputRef={this.account_input} // needed for ref forwarding to Input
							accountName={accountName}
							account={accountName}
							onChange={this.handleAccountNameChange}
							onAccountChanged={() => {}}
							setHasError={this.setHasError}
							size={60}
							hideImage
							placeholder=""
							useHR
							labelClass="login-label"
							reserveErrorSpace
							enterSubmitEvent={() => {
								this.login_btn_ref.current.click();
							}}
						/>
					</div>
				</Form>

				<div className="footer-wrapper">
					<Button
						htmlType="submit"
						type="primary"
						onClick={this.handleLogin}
						className="login-btn"
						disabled={
							!this.state.accountName ||
							this.state.accountName === '' ||
							this.state.isTorusLogin === true
						}
						ref={this.login_btn_ref}
					>
						{this.state.isTorusLogin
							? counterpart.translate('registration.wait')
							: counterpart.translate('header.unlock_short')}
					</Button>
					<div className="redirect">
						Or create your <a href="/registration">wallet</a>
					</div>
				</div>
			</Modal>
		);
	}
}

PasswordlessLoginModal.defaultProps = {
	modalId: 'passwordless_unlock_modal',
};

PasswordlessLoginModal = withRouter(PasswordlessLoginModal);

class PasswordlessLoginModalContainer extends React.Component {
	render() {
		return (
			<AltContainer
				stores={[WalletUnlockStore, AccountStore, WalletDb]}
				inject={{
					dbWallet: () => WalletDb.getWallet(),
					isLocked: () => WalletDb.isLocked(),
					isLocked_v2: () => WalletDb.isLocked_v2(),
					resolve_v2: () => WalletUnlockStore.getState().resolve_v2,
					reject_v2: () => WalletUnlockStore.getState().reject_v2,
					locked_v2: () => WalletUnlockStore.getState().locked_v2,
					openLogin: () => AuthStore.getState().openLogin,
					privKey: () => AuthStore.getState().privKey,
					setOpenLoginInstance: () => AuthStore.setOpenLoginInstance,
				}}
			>
				<PasswordlessLoginModal {...this.props} />
			</AltContainer>
		);
	}
}
export default PasswordlessLoginModalContainer;
