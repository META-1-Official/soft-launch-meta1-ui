const {Login, PrivateKey, Signature} = require('meta1-vision-js');
import Meta1 from 'meta1-vision-dex';
import {Component} from 'react';
import {backUrlApi} from 'services/api';
import AccountStore from 'stores/AccountStore';
import ls from '../../lib/common/localStorage';
import {Button, Col, Input, Modal, Row, Space} from 'antd';
import StyledButton from 'components/Button/Button';
import './claimWallet.scss';
import ClaimWalletModal from './claimWalletModal';
import MigrateModal from './MigrateModal';

export async function buildSignature(accountName, password) {
	let publicKey, signature;

	try {
		const signerPkey = PrivateKey.fromWif(password);
		publicKey = signerPkey.toPublicKey().toString();
		signature = Signature.sign(accountName, signerPkey).toHex();
	} catch (err) {
		await Meta1.connect(process.env.DEFAULT_WS_NODE);
		const loginResult = await Meta1.login(accountName, password);

		if (loginResult) {
			const account = await Login.generateKeys(
				accountName,
				password,
				['owner'],
				'DEV11'
			);
			const ownerPrivateKey = account.privKeys.owner.toWif();
			publicKey = account.pubKeys.owner;
			const signerPkey = PrivateKey.fromWif(ownerPrivateKey);
			signature = Signature.sign(accountName, signerPkey).toHex();
		}
	}

	return {accountName, publicKey, signature};
}

class ClaimWallet extends Component {
	constructor(props) {
		super(props);
		let accountName = props?.location?.state?.passwordAccount;
		this.state = {
			accountName,
			isOldUser: false,
			passKey: '',
			errorMsg: '',
			error: false,
			isValidSignature: false,
			openModal: false,
			signaturePayload: null,
			migrateStatusMsg: '',
			migrateModal: false,
		};
		this.checkTransferableHandler = this.checkTransferableHandler.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.checkMigrationStatus = this.checkMigrationStatus.bind(this);
		this.migrateRequestHandler = this.migrateRequestHandler.bind(this);
	}

	closeModal() {
		this.setState({
			openModal: false,
			isValidSignature: false,
			signaturePayload: null,
			migrateStatusMsg: '',
			migrateModal: false,
		});
	}
	async checkTransferableHandler() {
		let isOldUser = false;
		const response = await backUrlApi.get(`checkTransferable`, {
			params: {
				accountName: this.state.accountName,
			},
		});
		if (response?.data?.found) {
			isOldUser = true;
		} else {
			isOldUser = false;
		}

		this.setState({
			isOldUser,
			error: !isOldUser,
		});
	}

	componentWillMount() {
		this.checkTransferableHandler();
	}

	async migrateRequestHandler() {
		try {
			const {data} = await backUrlApi.post(`migrate`, {
				...this.state.signaturePayload,
			});
			if (!data.error) {
				this.setState({
					migrateStatusMsg: data.msg,
					migrateModal: true,
				});
			} else {
				this.setState({
					migrateStatusMsg: 'Migration Fail. Please try again',
					migrateModal: true,
				});
			}
		} catch (err) {
			this.setState({
				migrateStatusMsg: 'Migration Fail. Please try again',
				migrateModal: true,
			});
		}
	}

	async checkMigrationStatus() {
		this.setState({
			openModal: false,
			signaturePayload: null,
		});
		try {
			const {data} = await backUrlApi.get(`migration-status`, {
				params: {
					identifier: this.state.accountName,
				},
			});
			if (
				data?.snapshot?.transfer_status === 'PENDING' ||
				data?.snapshot?.transfer_status === 'PARTIALLY_DONE'
			) {
				this.migrateRequestHandler();
			} else if (data?.snapshot?.transfer_status === 'IN_PROGRESS') {
				this.setState({
					migrateStatusMsg: 'Your claim wallet request is under progress',
					migrateModal: true,
				});
			} else if (data?.snapshot?.transfer_status === 'COMPLETED') {
				this.setState({
					migrateStatusMsg: 'Your claim wallet request is already completed',
					migrateModal: true,
				});
			} else {
				this.setState({
					migrateStatusMsg: 'Your Claim Wallet is failed. Please try again',
					migrateModal: true,
				});
			}
		} catch (err) {
			this.setState({
				migrateStatusMsg: 'Your Claim Wallet is failed. Please try again',
				migrateModal: true,
			});
		}
	}

	async onSubmitPasskey() {
		if (!this.state.passKey) {
			this.setState({
				error: true,
				errorMsg: "passkey can't be empty",
			});
			return;
		}
		try {
			const payload = await buildSignature(
				this.state.accountName,
				this.state.passKey
			);
			const response = await backUrlApi.post(`validateSignature`, {
				...payload,
			});
			if (!response.data.isValid) {
				this.setState({
					error: true,
					errorMsg: 'Invalid Signature',
					isValidSignature: false,
					signaturePayload: null,
				});
			} else {
				this.setState({
					error: false,
					errorMsg: '',
					isValidSignature: true,
					signaturePayload: {...payload},
					openModal: true,
					passKey: '',
				});
			}
		} catch (err) {
			this.setState({
				error: true,
				errorMsg: 'Invalid Signature',
				isValidSignature: false,
				signaturePayload: null,
			});
		}
	}

	render() {
		return (
			<>
				<div className="claimWallet-mainContainer">
					<Space size={3}>
						<Row>
							<Col span={24}>
								<h3>Claim Wallet</h3>
							</Col>

							<Col span={24} centered>
								{this.state.isOldUser && (
									<div>
										<Input
											value={this.state.passKey}
											placeholder="Enter Passkey"
											onChange={(e) => {
												this.setState((prev) => {
													return {...prev, passKey: e.target.value};
												});
											}}
											type="password"
										/>
										{this.state.error && this.state.errorMsg && (
											<span className="error-msg">{this.state.errorMsg}</span>
										)}
										<StyledButton
											buttonType="primary"
											disabled={!this.state.passKey}
											style={{marginRight: '15px'}}
											onClick={() => {
												this.onSubmitPasskey();
											}}
										>
											Submit
										</StyledButton>
									</div>
								)}
								{!this.state.isOldUser && this.state.error && (
									<div>
										<h6>Not Found</h6>
									</div>
								)}
							</Col>
						</Row>
					</Space>
				</div>
				<ClaimWalletModal
					accountName={this.state.accountName}
					visible={this.state.openModal}
					onCancel={this.closeModal}
					checkMigrationStatus={this.checkMigrationStatus}
				/>

				<MigrateModal
					accountName={this.state.accountName}
					visible={this.state.migrateModal}
					onCancel={() => {
						this.setState({
							migrateStatusMsg: '',
							migrateModal: false,
						});
					}}
					migrateStatusMsg={this.state.migrateStatusMsg}
				/>
			</>
		);
	}
}

export default ClaimWallet;
