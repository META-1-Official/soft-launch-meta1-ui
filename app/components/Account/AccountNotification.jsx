import React from 'react';
import BindToChainState from '../Utility/BindToChainState';
import PageHeader from 'components/PageHeader/PageHeader';
import {ClockCircleOutlined} from '@ant-design/icons';
import {Button, List} from 'antd';

const renderListItem = (item, index) => (
	<List.Item
		key={`${item?.title}${item?.time}${index}`}
		className="notification-listitem"
	>
		<div className="title">{item?.title}</div>
		<div className="description">{item?.description}</div>
		<div className="footer">
			<ClockCircleOutlined />
			{item?.time}
		</div>
	</List.Item>
);

const AccountNotification = () => {
	const data = [
		{
			title: 'Price Alert',
			description:
				'Bitcoin (BTC) is down -5.47% to $31,376 USD in the last 24 hours.',
			time: 'June 6',
		},
		{
			title: 'Price Alert',
			description:
				'META1 Coin (META1) is up +4.36% to $372 USD in the last 24 hours.',
			time: 'June 6',
		},
		{
			title: 'Wallet activity',
			description: 'You received Bitcoin from an external wallet',
			time: 'June 1',
		},
		{
			title: 'Price Alert',
			description:
				'Ethereum (ETH) is up +7.28% to $2,005 USD in the last 12 hours.',
			time: 'May 30',
		},
		{
			title: 'Price Alert',
			description:
				'Ethereum (ETH) is down -9.28% to $1,913 USD in the last 12 hours.',
			time: 'May 29',
		},
		{
			title: 'Price Alert',
			description:
				'Bitcoin (BTC) is down -4.47% to $31,376 USD in the last 24 hours.',
			time: 'May 28',
		},
		{
			title: 'Price Alert',
			description:
				'Litecoin (LTC) is down -8.47% to $65.67 in the last 24 hours.',
			time: 'May 27',
		},
	];

	return (
		<div className="account-notification">
			<div>
				<PageHeader title="Notifications" level={2} showDivider />
			</div>
			<div className="content-body">
				<div className="list-wrapper">
					<List
						itemLayout="vertical"
						size="large"
						pagination={{
							position: 'bottom',
							pageSize: 5,
						}}
						dataSource={data}
						renderItem={(item, index) => renderListItem(item, index)}
					/>
				</div>
			</div>
		</div>
	);
};

export default BindToChainState(AccountNotification);
