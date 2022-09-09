import {Button, Modal} from 'antd';
import {Component} from 'react';

class MigrateModal extends Component {
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
					<Button key={'cancel'} onClick={this.props.onCancel}>
						ok
					</Button>,
				]}
			>
				<div className="claim-wallet-modal-body">
					<h6>{this.props.migrateStatusMsg}</h6>
				</div>
			</Modal>
		);
	}
}
export default MigrateModal;
