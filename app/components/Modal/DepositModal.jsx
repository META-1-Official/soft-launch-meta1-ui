import React, {useState, useEffect} from 'react';
import counterpart from 'counterpart';
import {Modal, Button, Tabs, Tooltip} from 'antd';
import {CopyOutlined} from '@ant-design/icons';
import CopyButton from '../Utility/CopyButton';
import AccountStore from 'stores/AccountStore';
import QRCode from 'qrcode.react';

const DepositModalContent = (props) => {
	const [depositAddress, setDepositAddress] = useState(null);
	const [assetType, setAssetType] = useState(props.assetType || 'btc');
	const assets = ['btc', 'ltc', 'eth', 'usdt'];
	const minDepositValues = {btc: 0.001, ltc: 0.01, eth: 0.01, usdt: 1};

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

	useEffect(() => {
		if (props.assetType) setAssetType(props.assetType);
	}, [props.assetType]);

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

	const onChange = (key) => {
		setAssetType(key);
	};

	const renderContent = () => {
		return (
			<>
				<div className="qr-wrapper">
					<span>Depoist {assetType}</span>
					<QRCode value={depositAddress} />
				</div>
				<div className="minimum-deposit">
					Minimum deposit: {minDepositValues[assetType]}{' '}
					{assetType.toUpperCase()}
				</div>
				<div className="address">
					{depositAddress == 'Gateway is down' ? (
						<div className="address-text error">{depositAddress}</div>
					) : (
						<div className="address-text">{depositAddress}</div>
					)}
					<Tooltip
						placement="right"
						title={counterpart.translate('tooltip.copy_tip')}
					>
						<div
							className="copy-btn"
							onClick={() => navigator.clipboard.writeText(depositAddress)}
						>
							<div className="btn-text">Copy</div>
							<CopyOutlined className="copy-icon" />
						</div>
					</Tooltip>
				</div>
				<div className="alert-wrapper">
					<div className="alert-icon" />
					<div className="alert-body">
						<span>important information</span>
						<div>
							Send only {assetType.toUpperCase()}{' '}
							{assetType === 'usdt' ? '(ERC20)' : ''} to this deposit address.
							Sending less than {minDepositValues[assetType]}{' '}
							{assetType.toUpperCase()} or any other currency to this address
							may result in the loss of your deposit.
						</div>
					</div>
				</div>
			</>
		);
	};

	return (
		<Tabs
			defaultActiveKey={assetType}
			activeKey={assetType}
			animated={false}
			onChange={onChange}
		>
			{assets.map((asset) => {
				return (
					<Tabs.TabPane tab={asset.toUpperCase()} key={asset}>
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
			id={props.modalId}
			className="deposit-modal"
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
				{...props}
				account={props.account}
				hideModal={props.hideModalMeta}
				open={props.visibleMeta}
			/>
		</Modal>
	);
};

export default DepositModal;
