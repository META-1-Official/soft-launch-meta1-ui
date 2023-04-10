import {useEffect, useState} from 'react';
import migrationService from 'services/migration.service';
import {Col, Input, Row, Space} from 'antd';
import StyledButton from 'components/Button/Button';
import {toast} from 'react-toastify';
import './claimWallet.scss';
import WalletDb from 'stores/WalletDb';
import AccountStore from 'stores/AccountStore';
import counterpart from 'counterpart';

export default function ClaimWallet(props) {
	const [accountName, setAccountName] = useState(null);
	const [isOldUser, setIsOldUser] = useState(false);
	const [passKey, setPassKey] = useState('');
	const [progressing, setProgressing] = useState(false);

	useEffect(async () => {
		setAccountName(AccountStore.getState().currentAccount);
	}, []);

	useEffect(async () => {
		if (accountName) {
			const response = await migrationService.checkOldUser(accountName);
			if (response?.found) {
				setIsOldUser(true);
			} else {
				setIsOldUser(false);
			}
		}
	}, [accountName]);

	const submit = async () => {
		setProgressing(true);

		const signature_valid_response = await migrationService.validateSignature(
			accountName,
			passKey
		);

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
					setProgressing(false);
					props.history.push(`/account/${accountName}/`);
				} else {
					setProgressing(false);
					toast(counterpart.translate('account.registration.went_wrong'));
				}
			} else if (transfer_status === 'IN_PROGRESS') {
				setProgressing(false);
				toast(
					counterpart.translate('claim_wallet.claim_wallet_under_progress')
				);
			} else if (transfer_status === 'COMPLETED') {
				setProgressing(false);
				toast(counterpart.translate('claim_wallet.claim_wallet_completed'));
			} else {
				setProgressing(false);
				toast(counterpart.translate('claim_wallet.claim_wallet_failed'));
			}
		} else {
			setProgressing(false);
			toast(counterpart.translate('claim_wallet.invalid_signature'));
			return;
		}
	};

	return (
		<div className="claimWallet-mainContainer">
			<Space size={3}>
				<Row>
					<Col span={24}>
						<h3>{counterpart.translate('claim_wallet.claim_wallet')}</h3>
					</Col>

					<Col span={24} centered>
						{isOldUser && (
							<div>
								<Input
									value={passKey}
									placeholder={counterpart.translate(
										'claim_wallet.enter_passkey_or_owner_key'
									)}
									onChange={(e) => {
										setPassKey(e.target.value);
									}}
									type="password"
								/>
								<StyledButton
									buttonType="primary"
									disabled={
										passKey == '' || WalletDb.isLocked_v2() || progressing
									}
									style={{marginRight: '15px'}}
									onClick={() => {
										submit();
									}}
								>
									{progressing
										? counterpart.translate('claim_wallet.migrating')
										: counterpart.translate('claim_wallet.migrate')}
								</StyledButton>
							</div>
						)}
					</Col>
				</Row>
			</Space>
		</div>
	);
}
