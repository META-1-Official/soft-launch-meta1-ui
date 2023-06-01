import React, {useState, useEffect} from 'react';
import counterpart from 'counterpart';
import {Modal, Button, Tabs, Tooltip} from 'antd';
import {CopyOutlined} from '@ant-design/icons';
import AccountStore from 'stores/AccountStore';
import QRCode from 'qrcode.react';
import {toast} from 'react-toastify';

const DepositModal = (props) => {
	const [depositAddress, setDepositAddress] = useState('');
	const [assetType, setAssetType] = useState(props.assetType || 'BTC');
	const [open, setOpen] = useState(false);

	const assets = process.env.DEPOSIT_AVAILABLE_ASSETS.split(',');
	const minDepositValues = {
		BTC: 0.001,
		LTC: 0.01,
		ETH: 0.001,
		USDT: 1,
		XLM: 0.01,
		BNB: 0.01,
		EOS: 0.001,
		XRP: 0.1,
		DOGE: 1,
		SOL: 1,
		TRX: 0.1,
	};

	useEffect(() => {
		getDepositAddress(assetType);

		return () => {
			document.removeEventListener('copy', _copy);
		};
	}, []);

	useEffect(() => {
		getDepositAddress(assetType);
	}, [assetType]);

	const getDepositAddress = (assetType) => {
		const api_gateway_url = `${process.env.GATEWAY_URL}/api-gateways/${
			assetType === 'USDT' ? 'ETH' : assetType
		}`;
		const wallet_init_url = `${process.env.GATEWAY_URL}/api/wallet/init/${
			assetType === 'USDT' ? 'ETH' : assetType
		}`;

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

	const onClose = () => {
		props.hideModalMeta();
		setOpen(false);
	};

	const onChange = (key) => {
		setAssetType(key);
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
			<Tabs
				defaultActiveKey={assetType}
				activeKey={assetType}
				animated={false}
				onChange={onChange}
			>
				{assets.map((asset) => {
					return (
						<Tabs.TabPane tab={asset} key={asset}>
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
										{counterpart.translate(
											'modal.deposit.important_information'
										)}
									</span>
									<div>
										{assetType && minDepositValues[assetType]
											? counterpart.translate(
													'modal.deposit.important_information_info',
													{
														assetType: `${assetType} ${
															assetType === 'USDT' ? '(ERC20)' : ''
														}`,
														min_value: minDepositValues[assetType],
														min_assetType: assetType,
													}
											  )
											: null}
									</div>
								</div>
							</div>
						</Tabs.TabPane>
					);
				})}
			</Tabs>
		</Modal>
	);
};

export default DepositModal;
