import {Button, Modal} from 'antd';
import {Component} from 'react';

class ClaimWalletModal extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Modal
				destroyOnClose={true}
				title={`Hello ${this.props.accountName}`}
				visible={this.props.visible}
				closeable={false}
				onCancel={this.props.onCancel}
				footer={[
					<Button key={'submit'} onClick={this.props.checkMigrationStatus}>
						Claim Wallet
					</Button>,
					<Button key={'cancel'} onClick={this.props.onCancel}>
						Cancel
					</Button>,
				]}
			>
				<div className="claim-wallet-modal-body">
					<h6>To Claim your previous wallet META1, click on Button</h6>
				</div>
			</Modal>
		);
	}
}
export default ClaimWalletModal;
