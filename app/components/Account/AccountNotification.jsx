import React, {useState, useEffect} from 'react';
import counterpart from 'counterpart';
import BindToChainState from '../Utility/BindToChainState';
import PageHeader from 'components/PageHeader/PageHeader';
import {ClockCircleOutlined} from '@ant-design/icons';
import {List} from 'antd';
import ls from '../../lib/common/localStorage';
const ss = new ls('__notification__');

const renderListItem = (item, index) => (
	<List.Item
		key={`${item?.title}${item?.time}${index}`}
		className="notification-listitem"
	>
		<div className="title">{item?.title}</div>
		<div className="description">{item?.content}</div>
		<div className="footer">
			<ClockCircleOutlined />
			{item?.createdAt}
		</div>
	</List.Item>
);

const AccountNotification = () => {
	const [notifications, setNotifications] = useState(null);

	useEffect(async () => {
		var noti_str = ss.get('notifications', '');
		if (noti_str) setNotifications(JSON.parse(noti_str));
	}, []);

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
								pageSize: 5,
							}}
							dataSource={notifications}
							renderItem={(item, index) => renderListItem(item, index)}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default BindToChainState(AccountNotification);
