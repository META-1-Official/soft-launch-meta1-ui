import React from 'react';
import QrReader from 'react-qr-reader';
import counterpart from 'counterpart';
import PropTypes from 'prop-types';
import {Modal, Button} from 'antd';
import {FaCamera} from 'react-icons/fa';

class QRScanner extends React.Component {
	modalId = 'qr_scanner_modal';

	state = {
		visible: false,
	};

	static propTypes = {
		onSuccess: PropTypes.func,
		onError: PropTypes.func,
		label: PropTypes.string,
	};

	constructor(props) {
		super(props);

		this.retry = this.retry.bind(this);
		this.submit = this.submit.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.onScanSuccess = this.onScanSuccess.bind(this);
	}

	handleClick() {
		this.setState({
			visible: true,
		});
	}

	handleClose() {
		this.setState({
			visible: false,
		});
	}

	isBitcoinAddress(data) {
		return /bitcoin:([a-zA-Z0-9]+)/.test(data);
	}

	parseBitcoinAddress(str) {
		const address = str.match(/bitcoin:([a-zA-Z0-9]+)/);
		const amount = str.match(/amount=([0-9\.]+)/);
		return {
			address: (address && address[1]) || null,
			amount: (amount && amount[1]) || null,
		};
	}

	onScanSuccess(data) {
		if (this.isBitcoinAddress(data)) {
			let result = this.parseBitcoinAddress(data);
			if (result) {
				this.setState({
					address: result.address,
					amount: result.amount,
				});
			}
		} else {
			this.setState({
				address: data,
				amount: null,
			});
		}
	}

	retry() {
		this.setState({
			address: null,
			amount: null,
		});
	}

	submit() {
		this.handleClose();
		if (typeof this.props.onSuccess === 'function') {
			this.props.onSuccess({
				address: this.state.address,
				amount: this.state.amount,
			});
		}
	}

	render() {
		const handleError = (err) => {
			if (typeof this.props.onError === 'function') this.props.onError(err);
		};

		const handleScan = (data) => {
			if (data) {
				this.onScanSuccess(data);
			}
		};

		return (
			<div className="qr-address-scanner">
				<FaCamera
					onClick={this.handleClick}
					css={{fontSize: '24px', padding: 5}}
				/>
				<Modal
					visible={this.state.visible}
					className="qr-address-scanner-modal"
					modalHeader="global.scan_qr_code"
					id={this.modalId}
					overlay={true}
					closable={false}
					footer={
						!this.state.address
							? [<Button onClick={this.handleClose}>Close</Button>]
							: [
									<Button onClick={this.retry}>
										{counterpart.translate('qr_address_scanner.retry')}
									</Button>,
									<Button type="primary" onClick={this.submit}>
										{counterpart.translate('qr_address_scanner.use_address')}
									</Button>,
							  ]
					}
					onCancel={this.handleClose}
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

					{this.state.address && (
						<div>
							<div className="qr-address-scanner-status">
								<div className="qr-address-scanner-status-title">
									{counterpart.translate('qr_address_scanner.address_found')}:
								</div>
								<div className="qr-address-scanner-status-address">
									{this.state.address}
								</div>

								{this.state.amount && (
									<div className="qr-address-scanner-status-title">
										{counterpart.translate('qr_address_scanner.amount')}
									</div>
								)}
								{this.state.amount && (
									<div className="qr-address-scanner-status-amount">
										{this.state.amount}
									</div>
								)}
							</div>
						</div>
					)}
				</Modal>
			</div>
		);
	}
}

export default QRScanner;
