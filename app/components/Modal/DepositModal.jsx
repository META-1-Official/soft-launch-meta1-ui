import React, {useState, useEffect} from 'react';
import counterpart from 'counterpart';
import {Modal, Button, Tabs, Tooltip} from 'antd';
import {CopyOutlined} from '@ant-design/icons';
import AccountStore from 'stores/AccountStore';
import QRCode from 'qrcode.react';
import {toast} from 'react-toastify';

const DepositModalContent = (props) => {
	const [depositAddress, setDepositAddress] = useState('');
	const [assetType, setAssetType] = useState(props.assetType || 'btc');
	const assets = ['btc', 'ltc', 'eth', 'usdt'];
	const minDepositValues = {
		btc: 0.001,
		ltc: 0.01,
		eth: 0.001,
		usdt: 1,
		xlm: 0.01,
		bnb: 0.01,
		eos: 0.001,
	};

	const api_gateway_url = `${process.env.GATEWAY_URL}/api-gateways/${
		assetType === 'usdt' ? 'eth' : assetType
	}`;
	const wallet_init_url = `${process.env.GATEWAY_URL}/api/wallet/init/${
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

	const getDepositAddress = () => {
		setDepositAddress('');
		fetch(api_gateway_url)
			.then(() => {
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
						setDepositAddress(response.address);
					});
			})
			.catch((error) => {
				console.error(error);
				setDepositAddress(
					counterpart.translate('modal.deposit.gateway_is_down')
				);
			});
	};

	const onChange = (key) => {
		setAssetType(key);
	};

	const renderContent = () => {
		console.log('assetType', assetType);
		return (
			<>
				<div className="qr-wrapper">
					<span>
						{counterpart.translate('exchange.deposit')}{' '}
						<span className="deposit-coin">{assetType}</span>
					</span>
					{depositAddress && depositAddress != '' ? (
						<QRCode value={depositAddress} />
					) : (
						<div style={{height: '200px'}} />
					)}
				</div>
				<div className="minimum-deposit">
					{counterpart.translate('modal.deposit.minimum_deposit', {
						minDeposit: minDepositValues[assetType],
						assetType: assetType.toUpperCase(),
					})}
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
							onClick={() => {
								navigator.clipboard.writeText(depositAddress);
								toast.success(
									counterpart.translate('modal.deposit.copy_success'),
									{
										position: 'top-right',
										autoClose: 3000,
									}
								);
							}}
						>
							<div className="btn-text">
								{counterpart.translate('modal.deposit.copy')}
							</div>
							<CopyOutlined className="copy-icon" />
						</div>
					</Tooltip>
				</div>
				<div className="alert-wrapper">
					<div className="alert-icon" />
					<div className="alert-body">
						<span>
							{counterpart.translate('modal.deposit.important_information')}
						</span>
						<div>
							{assetType && minDepositValues[assetType]
								? counterpart.translate(
										'modal.deposit.important_information_info',
										{
											assetType: `${assetType.toUpperCase()} ${
												assetType === 'usdt' ? '(ERC20)' : ''
											}`,
											min_value: minDepositValues[assetType],
											min_assetType: assetType.toUpperCase(),
										}
								  )
								: null}
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
						{renderContent()}
					</Tabs.TabPane>
				);
			})}
		</Tabs>
	);
};

const DepositModal = (props) => {
	const [open, setOpen] = useState(false);

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
