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
import LoginProvidersModal from 'components/Web3Auth/LoginProvidersModal';
import axios from 'axios';
import kycService from 'services/kyc.service';

const STORAGE_KEY = '__AuthData__';
const ss = new ls(STORAGE_KEY);
const ss_graphene = new ls('__graphene__');
const {Text, Title} = Typography;

const browserstack_test_accounts = [
	'gem-1',
	'test-automation',
	'john-doe',
	'olive-5',
	'marry-14',
	'antman-kok357',
	'mary-14',
];

class PasswordlessLoginModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.initialState(props);
		this.account_input = React.createRef();
		this.login_btn_ref = React.createRef();
	}

	initialState = (props = this.props) => {
		return {
			isModalVisible: false,
			accountName: '',
			isOpen: false,
			hasError: true,
			authModalOpen: false,
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

	handleLogin = async (e) => {
		if (e) e.preventDefault();
		const {accountName} = this.state;
		if (!accountName) {
			return;
		}
		if (this.state.hasError) {
			return;
		}
		AccountActions.setPasswordlessAccount(accountName);
		this.handleModalClose();

		localStorage.setItem('openlogin_store', '{}');
		ss.set('account_login_name', accountName);
		ss.remove('account_registration_name');

		if (browserstack_test_accounts.includes(accountName)) {
			const user = await kycService.getUserKycProfileByAccount(accountName);
			axios
				.post(process.env.LITE_WALLET_URL + '/login', {
					accountName: accountName,
					email: user?.email,
				})
				.then((response) => {
					ss.set('account_login_name', accountName);
					ss.set('account_login_token', response.data['token']);
					ss_graphene.set('currentAccount', accountName);
					ss_graphene.set('passwordlessAccount', accountName);
					AccountActions.setCurrentAccount.defer(accountName);
					WalletUnlockActions.unlock_v2().finally(() => {
						this.props.history.push(`/account/${accountName}/`);
					});
					setTimeout(() => {
						WalletUnlockActions.lock_v2().finally(() => {
							this.props.history.push('/market/META1_USDT');
						});
					}, 24 * 60 * 60 * 1000); // Auto timeout in 24 hrs
				});
		} else this.setState({authModalOpen: true});
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
			<>
				<Modal
					open={this.state.isModalVisible}
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
								!this.state.accountName || this.state.accountName === ''
							}
							ref={this.login_btn_ref}
						>
							Login
						</Button>
						<div className="redirect">
							Or create your <a href="/registration">wallet</a>
						</div>
					</div>
				</Modal>
				{this.state.authModalOpen && (
					<LoginProvidersModal
						open={this.state.authModalOpen}
						setOpen={(val) => this.setState({authModalOpen: val})}
						web3auth={this.props.openLogin}
						authMode="login"
					/>
				)}
			</>
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
