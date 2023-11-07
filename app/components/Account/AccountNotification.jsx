import React, {useState, useEffect, useReducer} from 'react';
import counterpart from 'counterpart';
import BindToChainState from '../Utility/BindToChainState';
import PageHeader from 'components/PageHeader/PageHeader';
import moment from 'moment';
import {ClockCircleOutlined} from '@ant-design/icons';
import {List} from 'antd';
import ltService from '../../services/litewallet.service';
import NotificationDetailModal from 'components/Modal/NotificationDetailModal';
import ls from '../../lib/common/localStorage';
const ss = new ls('__notification__');

import AnnouncementIcon from 'assets/notifications/announcements.png';
import EventIcon from 'assets/notifications/events.png';
import DepositIcon from 'assets/notifications/deposit.png';
import WithdrawlIcon from 'assets/notifications/withdrawal.png';
import OrderCreatedIcon from 'assets/notifications/order-created.png';
import OrderCancelledIcon from 'assets/notifications/order-cancelled.png';
import PriceChangeIcon from 'assets/notifications/price-change.png';
import SendIcon from 'assets/notifications/send.png';
import ReceiveIcon from 'assets/notifications/receive.png';
import NotificationTimeIcon from 'assets/notifications/notification-time.png';

const AccountNotification = () => {
	const [notifications, setNotifications] = useState(null);
	const [detail, setDetail] = useState(0);
	const [modalOpened, setModalOpened] = useState(false);
	const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

	useEffect(async () => {
		await initData();
	}, []);

	// useEffect(() => {
	// 	const timer = setTimeout(async () => {
	// 		await initData();
	// 	}, 10000);
	// 	return () => clearTimeout(timer);
	// }, []);

	const initData = async () => {
		var noti = await ltService.getNotifications(null);
		setNotifications(noti);
	};

	const handleClick = (item) => {
		setDetail(item);
		setModalOpened(true);
	};

	const handleModalToggle = (value) => {
		forceUpdate();
		setModalOpened(value);
	};

	const getItem = (category) => {
		switch (category) {
			case 'Announcements':
				return AnnouncementIcon;
			case 'Events':
				return EventIcon;
			case 'Created Order':
				return OrderCreatedIcon;
			case 'Cancelled Order':
				return OrderCancelledIcon;
			case 'Deposit':
				return DepositIcon;
			case 'Withdraw':
				return WithdrawlIcon;
			case 'Send':
				return SendIcon;
			case 'Receive':
				return ReceiveIcon;
			case 'Price Change':
				return PriceChangeIcon;
			default:
				return AnnouncementIcon;
		}
	};

	const renderListItem = (item, index) => {
		var d = new Date(item.createdAt);

		return (
			<List.Item
				key={`${item?.title}${item?.time}${index}`}
				className="notification-listitem"
				onClick={() => handleClick(item)}
			>
				<div className="logo-wrapper">
					<img
						style={{width: '30px', height: '30px'}}
						src={getItem(item.category)}
						alt="meta1"
					/>
				</div>
				<div className="info">
					<div className="time">
						<div>
							<h4>{item.title ?? item.category}</h4>
							<p dangerouslySetInnerHTML={{__html: item.content}} />
						</div>
						<div>
							<span>{moment(item.createdAt).fromNow()}</span>
							<img
								style={{width: '20px', height: '20px', marginLeft: '10px'}}
								src={NotificationTimeIcon}
								alt="meta1"
								data-tooltip-id="time-tooltip"
								data-tooltip-content={d.toLocaleString()}
							/>
						</div>
					</div>
				</div>
			</List.Item>
		);
	};

	return (
		<div className="account-notification">
			<div>
				<PageHeader
					title={counterpart.translate('account.notifications')}
					level={2}
					showDivider
				/>
			</div>
			<div className="content-body">
				<div className="list-wrapper">
					{notifications && (
						<List
							itemLayout="vertical"
							size="large"
							pagination={{
								position: 'bottom',
								pageSize: 10,
							}}
							dataSource={notifications}
							renderItem={(item, index) => renderListItem(item, index)}
						/>
					)}
				</div>
			</div>
			<NotificationDetailModal
				detail={detail}
				isOpen={modalOpened}
				setModalOpened={(value) => handleModalToggle(value)}
			/>
		</div>
	);
};

export default BindToChainState(AccountNotification);
