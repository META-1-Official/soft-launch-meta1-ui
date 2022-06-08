import React, {useState, useEffect} from 'react';
import utils from 'common/utils';
import {DecimalChecker} from '../Utility/DecimalChecker';
import counterpart from 'counterpart';
import {Modal, Button, Tabs} from 'antd';
import CopyButton from '../Utility/CopyButton';
import AccountStore from 'stores/AccountStore';
import QRCode from 'qrcode.react';

const DepositModalContent = (props) => {
	const [clipboardText, setClipboardText] = useState('');
	const [depositAddress, setDepositAddress] = useState(null);
	const [assetType, setAssetType] = useState('btc');
	const assets = ['btc', 'ltc', 'eth', 'usdt'];
	const api_gateway_url = `https://gateway.dev.meta-exchange.vision/api-gateways/${
		assetType === 'usdt' ? 'eth' : assetType
	}`;
	const wallet_init_url = `https://gateway.dev.meta-exchange.vision/api/wallet/init/${
		assetType === 'usdt' ? 'eth' : assetType
	}`;

	useEffect(() => {
		getDepositAddress();

		return () => {
			document.removeEventListener('copy', _copy);
		};
	}, []);

	useEffect(() => {
		getDepositAddress();
	}, [assetType]);

	const onClose = () => {
		props.hideModal();
	};

	const getDepositAddress = () => {
		fetch(api_gateway_url)
			.then((response) => {
				fetch(wallet_init_url, {
					method: 'POST',
					headers: {
						Accept: 'application/json, text/plain, */*',
						'Content-Type': 'application/json',
						'X-Requested-With': 'XMLHttpRequest',
					},
					body: JSON.stringify({
						metaId: AccountStore.getState().currentAccount,
					}),
				})
					.then((res) => res.json())
					.then((response) => {
						let address = response.address;
						setDepositAddress(response.address);
					});
			})
			.catch((error) => {
				setDepositAddress('Gateway is down');
			});
	};

	const _copy = (e) => {
		try {
			if (depositAddress) e.clipboardData.setData('text/plain', depositAddress);
			else
				e.clipboardData.setData(
					'text/plain',
					counterpart.translate('gateway.use_copy_button').toUpperCase()
				);
			e.preventDefault();
		} catch (err) {
			console.error(err);
		}
	};

	const toClipboard = (clipboardText) => {
		try {
			setClipboardText(clipboardText, () => {
				document.execCommand('copy');
			});
		} catch (err) {
			console.error(err);
		}
	};

	const onChange = (key) => {
		setAssetType(key);
		console.log('KEY', key);
	};

	const renderContent = () => {
		return (
			<>
				<div className="QR" style={{textAlign: 'center'}}>
					<QRCode value={depositAddress} />
				</div>
				<h5>Minimum deposit: 0.001 ETH</h5>
				<div className="grid-block container-row">
					<div style={{paddingRight: '1rem'}}>
						<CopyButton text={depositAddress} className={'copyIcon'} />
					</div>
					<div style={{wordBreak: 'break-word'}}>
						<div
							style={{
								fontSize: '0.8rem',
								fontWeight: 'bold',
								paddingBottom: '0.3rem',
								color: 'white',
							}}
						>
							Your deposit address for ETH:
						</div>
						{depositAddress == 'Gateway is down' ? (
							<div
								className="modal__highlight"
								style={{
									fontSize: '0.9rem',
									wordBreak: 'break-all',
									color: '#ff9900',
									fontWeight: 'bold',
									color: 'white',
								}}
							>
								{depositAddress}
							</div>
						) : (
							<div
								className="modal__highlight"
								style={{
									fontSize: '0.9rem',
									wordBreak: 'break-all',
									color: 'white',
								}}
							>
								{depositAddress}
							</div>
						)}
					</div>
				</div>
				<h6>
					<b>IMPORTANT:</b> Send only ETH to this deposit address. Sending less
					than 0.001 ETH or any other currency to this address may result in the
					loss of your deposit.
				</h6>
			</>
		);
	};

	return (
		<Tabs defaultActiveKey="1" animated={false} onChange={onChange}>
			{assets.map((asset) => {
				return (
					<Tabs.TabPane tab={asset} key={asset}>
						{depositAddress && renderContent()}
					</Tabs.TabPane>
				);
			})}
		</Tabs>
	);
};

const DepositModal = (props) => {
	const [open, setOpen] = useState(false);

	const show = () => {
		setOpen(true, () => {
			props.hideModalMeta();
		});
	};

	const onClose = () => {
		props.hideModalMeta();
		setOpen(false);
	};

	return (
		<Modal
			title={
				props.account
					? counterpart.translate('modal.deposit.header', {
							account_name: props.account,
					  })
					: counterpart.translate('modal.deposit.header_short')
			}
			id={props.modalId}
			className={props.modalId}
			onCancel={onClose}
			overlay={true}
			footer={[
				<Button key="cancel" onClick={props.hideModalMeta}>
					{counterpart.translate('modal.close')}
				</Button>,
			]}
			visible={props.visibleMeta}
			noCloseBtn
		>
			<DepositModalContent
				account={props.account}
				hideModal={props.hideModalMeta}
				{...props}
				open={props.visibleMeta}
			/>
		</Modal>
	);
};

export default DepositModal;
