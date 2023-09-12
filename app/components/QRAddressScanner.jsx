import React, { useState, useEffect } from 'react';
import QrReader from 'react-qr-reader';
import counterpart from 'counterpart';
import PropTypes from 'prop-types';
import { Modal, Button } from 'antd';
import { FaCamera } from 'react-icons/fa';

const modalId = 'qr_scanner_modal'

const QRScanner = (props) => {
	const [visible, setVisible] = useState(false);
	const [address, setAddress] = useState(null);
	const [amount, setAmount] = useState(null);

	const handleClick = async () => {
		setVisible(true);
		try {
			const video = document.querySelector('video');
			if (video) {
				const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
				video.srcObject = stream;
				video.play();
			}
		} catch (err) {
			console.log('[loadVideo] - ', err);
		}
	}

	const handleClose = () => {
		setVisible(false);

		try {
			const video = document.querySelector('video');
			if (video) {
				video.srcObject.getTracks().forEach(track => {
					track.stop()
				});
			}
		} catch (err) {
			console.log('[loadVideo] - ', err);
		}
	}

	const isBitcoinAddress = (data) => {
		return /bitcoin:([a-zA-Z0-9]+)/.test(data);
	}

	const parseBitcoinAddress = (str) => {
		const address = str.match(/bitcoin:([a-zA-Z0-9]+)/);
		const amount = str.match(/amount=([0-9\.]+)/);
		return {
			address: (address && address[1]) || null,
			amount: (amount && amount[1]) || null,
		};
	}

	const onScanSuccess = (data) => {
		if (isBitcoinAddress(data)) {
			let result = parseBitcoinAddress(data);
			if (result) {
				setAddress(result.address);
				setAmount(result.amount);
			}
		} else {
			setAddress(data);
			setAmount(null);
		}
	}

	const retry = () => {
		setAddress(null);
		setAmount(null);
	}

	const submit = () => {
		handleClose();
		props.onSuccess({
			address: address,
			amount: amount,
		});
	}

	const handleError = (err) => {
		props.onError(err);
	};

	const handleScan = (data) => {
		if (data) {
			onScanSuccess(data);
		}
	};

	return (
		<div className="qr-address-scanner">
			<FaCamera
				onClick={handleClick}
				css={{ fontSize: '24px', padding: 5 }}
			/>
			<Modal
				visible={visible}
				className="qr-address-scanner-modal"
				modalHeader="global.scan_qr_code"
				id={modalId}
				overlay={true}
				closable={false}
				footer={
					!address
						? [
							<Button onClick={handleClose}>
								{counterpart.translate('global.close')}
							</Button>,
						]
						: [
							<Button onClick={retry}>
								{counterpart.translate('qr_address_scanner.retry')}
							</Button>,
							<Button type="primary" onClick={submit}>
								{counterpart.translate('qr_address_scanner.use_address')}
							</Button>,
						]
				}
				onCancel={handleClose}
			>
				<QrReader
					delay={100}
					onError={handleError}
					onScan={handleScan}
					style={{
						width: 'calc(100% - 48px)',
						margin: '0 24px',
					}}
				/>

				{address && (
					<div>
						<div className="qr-address-scanner-status">
							<div className="qr-address-scanner-status-title">
								{counterpart.translate('qr_address_scanner.address_found')}:
							</div>
							<div className="qr-address-scanner-status-address">
								{state.address}
							</div>

							{amount && (
								<div className="qr-address-scanner-status-title">
									{counterpart.translate('qr_address_scanner.amount')}
								</div>
							)}
							{amount && (
								<div className="qr-address-scanner-status-amount">
									{state.amount}
								</div>
							)}
						</div>
					</div>
				)}
			</Modal>
		</div>
	);
}

export default QRScanner;
