import React from 'react';
import PropTypes from 'prop-types';
import counterpart from 'counterpart';
import {Modal, Button} from 'antd';

const ResetSettingsModal = (props) => {
	const {visible, hideModal, modalId, onReset} = props;
	const onConfirm = (e) => {
		e.preventDefault();
		setTimeout(() => {
			hideModal();
			onReset();
		}, 500);
	};

	const footer = [];

	footer.push(
		<Button type="primary" key="submit" onClick={onConfirm}>
			{counterpart.translate('global.confirm')}
		</Button>,
		<Button onClick={hideModal} key="cancel">
			{counterpart.translate('cancel')}
		</Button>
	);

	return (
		<Modal
			width={600}
			title={counterpart.translate('settings.reset')}
			visible={visible}
			onCancel={hideModal}
			footer={footer}
			id={modalId}
			overlay={true}
		/>
	);
};

export default ResetSettingsModal;
