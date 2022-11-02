import {Component, useEffect, useState} from 'react';
import migrationService from 'services/migration.service';
import {Button, Col, Input, Modal, Row, Space} from 'antd';
import StyledButton from 'components/Button/Button';
import {toast} from 'react-toastify';
import './claimWallet.scss';
import WalletDb from 'stores/WalletDb';

export default function ClaimWallet(props) {
	const [accountName, setAccountName] = useState(
		props?.location?.state?.passwordAccount
	);
	const [isOldUser, setIsOldUser] = useState(false);
	const [passKey, setPassKey] = useState('');

	useEffect(async () => {
		const response = await migrationService.checkOldUser(accountName);
		if (response?.found) {
			setIsOldUser(true);
		}
	}, []);

	const submit = async () => {
		const signature_valid_response = await migrationService.validateSignature(
			accountName,
			passKey
		);

		console.log('Stage1', signature_valid_response);
		if (signature_valid_response.isValid) {
			const migrationable_response = await migrationService.checkMigrationable(
				accountName
			);
			const transfer_status = migrationable_response?.snapshot.transfer_status;

			if (
				transfer_status === 'PENDING' ||
				transfer_status === 'PARTIALLY_DONE'
			) {
				const response = await migrationService.migrate(accountName, passKey);
				if (response.error === false) {
					toast(response.msg);
				} else {
					toast('Something went wrong');
				}
			} else if (transfer_status === 'IN_PROGRESS') {
				toast('Your claim wallet request is under progress');
			} else if (transfer_status === 'COMPLETED') {
				toast('Your claim wallet request is already completed');
			} else {
				toast('Your Claim Wallet is failed. Please try again');
			}
		} else {
			toast('Invalid Signature');
			return;
		}
	};

	return (
		<div className="claimWallet-mainContainer">
			<Space size={3}>
				<Row>
					<Col span={24}>
						<h3>Claim Wallet</h3>
					</Col>

					<Col span={24} centered>
						{isOldUser && (
							<div>
								<Input
									value={passKey}
									placeholder="Enter Owner Key"
									onChange={(e) => {
										setPassKey(e.target.value);
									}}
									type="password"
								/>
								<StyledButton
									buttonType="primary"
									disabled={passKey == '' || WalletDb.isLocked()}
									style={{marginRight: '15px'}}
									onClick={() => {
										submit();
									}}
								>
									Migrate
								</StyledButton>
							</div>
						)}
					</Col>
				</Row>
			</Space>
		</div>
	);
}