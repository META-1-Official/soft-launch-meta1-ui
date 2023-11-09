import React, {useState, useEffect} from 'react';
import {Modal, Button, Tabs, Tooltip} from 'antd';
import {toast} from 'react-toastify';
import moment from 'moment';

import NotiIcon from 'assets/notifications/notification.png';

const NotificationDetailModal = (props) => {
	const detail = props.detail;

	const handleClick = () => {
		props.setModalOpened(false);
	};

	// useEffect(() => {
	// 	if (props.detail) {
	// 		let readNotifications = JSON.parse(localStorage.getItem('readNotifications')) ?? [];
	// 		if (!readNotifications.includes(props.detail.id))
	// 			readNotifications.push(props.detail.id);
	// 		localStorage.setItem('readNotifications', JSON.stringify(readNotifications));
	// 	}
	// }, [props.detail?.id]);

	return (
		<Modal
			id="detail-notification"
			className="notification-detail-modal"
			overlay={true}
			visible={props.isOpen}
			onCancel={handleClick}
			footer={null}
		>
			{detail && (
				<div className="notificationModalContent">
					<div className="modalHeader">
						<div className="left">
							<div className="iconWrapper">
								<img src={NotiIcon} />
							</div>
							<div className="titleWrapper">
								<span className="title">
									{detail?.category ?? 'Notification'}
								</span>
								<div className="time">{moment(detail.createdAt).fromNow()}</div>
							</div>
						</div>
					</div>
					<div className="modalBody">
						<p dangerouslySetInnerHTML={{__html: detail?.content}} />
					</div>
				</div>
			)}
		</Modal>
	);
};

export default NotificationDetailModal;
