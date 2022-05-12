import React from 'react';
import BindToChainState from '../Utility/BindToChainState';
import PageHeader from 'components/PageHeader/PageHeader';
import SectionBlock from './SectionBlock';
import {Table, Button, Icon} from 'antd';

const Subsection = ({title1, title2, columns, dataSource, href}) => {
	const title21 = title2.split('. ')[0];
	const title22 = title2.split('. ')[1];
	return (
		<>
			<div className="subsection-title1">{title1}</div>
			<div className="subsection-title2">
				{title21}.
				{title22 && (
					<a className="hyper-text" href={href ?? '#'}>
						{title22}
					</a>
				)}
			</div>
			<div className="table">
				<Table columns={columns} dataSource={dataSource} />
			</div>
		</>
	);
};

const AccountActivity = () => {
	// data for mobile applications
	const mobileDeviceColumns = [
		{title: 'Device', dataIndex: 'device', key: 'device'},
		{title: 'Signed In', dataIndex: 'signedin', key: 'signedin'},
	];
	const mobileDeviceDataSource = [
		{key: '1', device: 'android', signedin: 'About 1 month ago'},
		{key: '2', device: 'IOS', signedin: 'About 1 month ago'},
	];

	// data for web sessions
	const webSessionColumns = [
		{title: 'Signed In', dataIndex: 'signedin', key: 'signedin'},
		{title: 'Browser', dataIndex: 'browser', key: 'browser'},
		{title: 'IP Address', dataIndex: 'ipaddress', key: 'ipaddress'},
		{title: 'Near', dataIndex: 'near', key: 'near'},
	];
	const webSessionDataSource = [
		{
			key: '1',
			signedin: 'less than a minute ago',
			browser: 'Firefox (Windows)',
			ipaddress: '183.83.65.16',
			near: 'Boston US',
		},
		{
			key: '1',
			signedin: 'about 1 month ago',
			browser: 'Chrome (Linux)',
			ipaddress: '2401:4900:5fb2:a7c3:d0e1:38c9:16cb:6da3',
			near: 'Boston US',
		},
		{
			key: '1',
			signedin: 'about 1 month ago',
			browser: 'Chrome (Linux)',
			ipaddress: '2401:4900:5fb2:a7c3:d0e1:38c9:16cb:6da3',
			near: 'Boston US',
		},
		{
			key: '1',
			signedin: '2 months ago',
			browser: 'Safari (Mac)',
			ipaddress: '182.03.45.4',
			near: 'Boston US',
		},
	];

	// data for confirmed devices
	const confirmedDevicesColumns = [
		{title: 'Signed In', dataIndex: 'signedin', key: 'signedin'},
		{title: 'Browser', dataIndex: 'browser', key: 'browser'},
		{title: 'IP Address', dataIndex: 'ipaddress', key: 'ipaddress'},
		{title: 'Near', dataIndex: 'near', key: 'near'},
	];
	const confirmedDevicesDataSource = [
		{
			key: '1',
			signedin: 'less than a minute ago',
			browser: 'Firefox (Windows)',
			ipaddress: '183.83.65.16',
			near: 'Boston US',
		},
		{
			key: '1',
			signedin: 'about 1 month ago',
			browser: 'Chrome (Linux)',
			ipaddress: '2401:4900:5fb2:a7c3:d0e1:38c9:16cb:6da3',
			near: 'Boston US',
		},
		{
			key: '1',
			signedin: 'about 1 month ago',
			browser: 'Chrome (Linux)',
			ipaddress: '2401:4900:5fb2:a7c3:d0e1:38c9:16cb:6da3',
			near: 'Boston US',
		},
		{
			key: '1',
			signedin: '2 months ago',
			browser: 'Safari (Mac)',
			ipaddress: '182.03.45.4',
			near: 'Boston US',
		},
	];

	// data for account activity
	const accountActivityColumns = [
		{title: 'Action', dataIndex: 'action', key: 'action'},
		{title: 'Source', dataIndex: 'source', key: 'source'},
		{title: 'IP Address', dataIndex: 'ipaddress', key: 'ipaddress'},
		{title: 'Near', dataIndex: 'near', key: 'near'},
	];
	const accountActivityDataSource = [
		{
			key: '1',
			action: 'signin',
			source: 'Firefox',
			ipaddress: '183.83.65.16',
			near: 'Boston US',
		},
		{
			key: '2',
			action: 'signin failure',
			source: 'Chrome',
			ipaddress: '2401:4900:5fb2:a7c3:d0e1:38c9:16cb:6da3',
			near: 'Boston US',
		},
		{
			key: '3',
			action: 'signout',
			source: 'Chrome',
			ipaddress: '182.03.45.4',
			near: 'Boston US',
		},
		{
			key: '4',
			action: 'signin',
			source: 'Chrome',
			ipaddress: '183.83.65.16',
			near: 'Boston US',
		},
	];

	return (
		<div className="account-activity">
			<div>
				<PageHeader title="Activity" level={2} showDivider />
			</div>
			<div className="content">
				<SectionBlock title="Active Sessions">
					<Subsection
						title1="Mobile Applications"
						title2="You have authorized these mobile applications."
						columns={mobileDeviceColumns}
						dataSource={mobileDeviceDataSource}
					/>
					<Subsection
						title1="Web Sessions"
						title2="These sessions are currently signed in to your account. Sign out all other sessions"
						columns={webSessionColumns}
						dataSource={webSessionDataSource}
					/>
					<Subsection
						title1="Confirmed Devices"
						title2="These devices are currently allowed to access your account. Remove all other devices"
						columns={confirmedDevicesColumns}
						dataSource={confirmedDevicesDataSource}
					/>
					<Subsection
						title1="Account Activity"
						title2="Recent activity on your account."
						columns={accountActivityColumns}
						dataSource={accountActivityDataSource}
					/>
				</SectionBlock>
				<SectionBlock title="Close Account">
					<div className="close-text">
						Withdraw funds and close your Meta 1 account{' '}
						<a href="#" className="undone-text">
							- this cannot be undone
						</a>
					</div>
					<Button
						type="primary"
						ghost={true}
						css={{
							color: '#FF2929 !important',
							borderColor: '#FF2929 !important',
							borderRadius: '4px',
							width: '230px',
							height: '60px',
							fontSize: '20px',
							marginLeft: '30px',
							marginBottom: '48px',
						}}
					>
						Close Account
					</Button>
				</SectionBlock>
			</div>
		</div>
	);
};

export default BindToChainState(AccountActivity);
