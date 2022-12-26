import React from 'react';
import BindToChainState from '../Utility/BindToChainState';
import PageHeader from 'components/PageHeader/PageHeader';
import SectionBlock from './SectionBlock';
import {Table, Button, Icon} from 'antd';
import {MobileOutlined} from '@ant-design/icons';

const Subsection = ({
	title1,
	title2,
	columns,
	dataSource,
	href,
	pagination,
}) => {
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
				<Table
					columns={columns}
					dataSource={dataSource}
					pagination={pagination}
				/>
			</div>
		</>
	);
};

const CancelButton = ({onClick}) => {
	return (
		<div
			css={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '26px',
				height: '26px',
				color: '#FF2929',
				fontSize: '12px',
				borderRadius: '50%',
				border: '1px solid #1C1F27',
			}}
			onClick={onClick ?? console.log('onClick')}
		>
			X
		</div>
	);
};

const AccountActivity = () => {
	// data for mobile applications
	const mobileDeviceColumns = [
		{
			title: 'Device',
			dataIndex: 'device',
			key: 'device',
			render: (data) => (
				<div>
					<MobileOutlined css={{marginRight: '5px'}} />
					{data}
				</div>
			),
		},
		{title: 'Signed In', dataIndex: 'signedin', key: 'signedin'},
		{
			title: '',
			dataIndex: 'cancel',
			key: 'cancel',
			render: (data) => <CancelButton />,
			width: '26px',
		},
	];
	const mobileDeviceDataSource = [
		{
			key: '1',
			device: 'Android',
			signedin: 'About 1 month ago',
			cancel: 'cancel',
		},
		{key: '2', device: 'IOS', signedin: 'About 1 month ago', cancel: 'cancel'},
	];

	// data for web sessions
	const webSessionColumns = [
		{title: 'Signed In', dataIndex: 'signedin', key: 'signedin'},
		{title: 'Browser', dataIndex: 'browser', key: 'browser'},
		{title: 'IP Address', dataIndex: 'ipaddress', key: 'ipaddress', width: 200},
		{title: 'Near', dataIndex: 'near', key: 'near'},
		{
			title: 'Current',
			dataIndex: 'current',
			key: 'current',
			render: (data) => {
				return (
					<>
						{data && (
							<div
								css={{
									backgroundImage: `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFMSURBVHgBjZDBKwRRHMe/7+2blETZAxdOLk7IyRFnS207FyU75qKlXFyUg/0XZC4sKS5e5EBKTspBqW1P4mKFKLWXXbJjmvGbXZlnWPZXv+k739/v897v9xjqiZVEExowD+6l4KEAsJHIv9BqrA0iIsFYkoBGyihlXvwJbY5F4WjbpIa/PAYHcK8EtsabYdtzNEIL+Psykvv5SsNFv4acsEgNBhC7BscCDnEkUC7PkLNUKbjaENbiBszdLHJdKTL04Hp2CteZgLF36/9xuporw/WSlUFGjxO0qPj3ePUmYVahKugyi77Hyg59BElSrZ/OG7VNYVbeqOtzmLKAYilG+kAZiyk9Fu66TxCKoGEn0Y4SzumROoOy90hn9MCQz2Ew2E+XTwSlQ+X0b9B30A9X+ONe+ooyi5fiBmoE++Gsj3bAEwOw+Rmm5UMt8AMIi1z0FZVKdQAAAABJRU5ErkJggg==')`,
									width: 14,
									height: 12,
									marginLeft: 15,
								}}
							/>
						)}
					</>
				);
			},
		},
		{
			title: '',
			dataIndex: 'cancel',
			key: 'cancel',
			render: (data) => <CancelButton />,
			width: '26px',
		},
	];
	const webSessionDataSource = [
		{
			key: '1',
			signedin: 'less than a minute ago',
			browser: 'Firefox (Windows)',
			ipaddress: '183.83.65.16',
			near: 'Boston US',
			current: true,
			cancel: 'cancel',
		},
		{
			key: '1',
			signedin: 'about 1 month ago',
			browser: 'Chrome (Linux)',
			ipaddress: '2401:4900:5fb2:a7c3:d0e1:38c9:16cb:6da3',
			near: 'Boston US',
			current: false,
			cancel: 'cancel',
		},
		{
			key: '1',
			signedin: 'about 1 month ago',
			browser: 'Chrome (Linux)',
			ipaddress: '2401:4900:5fb2:a7c3:d0e1:38c9:16cb:6da3',
			near: 'Boston US',
			current: false,
			cancel: 'cancel',
		},
		{
			key: '1',
			signedin: '2 months ago',
			browser: 'Safari (Mac)',
			ipaddress: '182.03.45.4',
			near: 'Boston US',
			current: false,
			cancel: 'cancel',
		},
	];

	// data for confirmed devices
	const confirmedDevicesColumns = [
		{title: 'Signed In', dataIndex: 'signedin', key: 'signedin'},
		{title: 'Browser', dataIndex: 'browser', key: 'browser'},
		{title: 'IP Address', dataIndex: 'ipaddress', key: 'ipaddress', width: 200},
		{title: 'Near', dataIndex: 'near', key: 'near'},
		{
			title: 'Current',
			dataIndex: 'current',
			key: 'current',
			render: (data) => {
				return (
					<>
						{data && (
							<div
								css={{
									backgroundImage: `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFMSURBVHgBjZDBKwRRHMe/7+2blETZAxdOLk7IyRFnS207FyU75qKlXFyUg/0XZC4sKS5e5EBKTspBqW1P4mKFKLWXXbJjmvGbXZlnWPZXv+k739/v897v9xjqiZVEExowD+6l4KEAsJHIv9BqrA0iIsFYkoBGyihlXvwJbY5F4WjbpIa/PAYHcK8EtsabYdtzNEIL+Psykvv5SsNFv4acsEgNBhC7BscCDnEkUC7PkLNUKbjaENbiBszdLHJdKTL04Hp2CteZgLF36/9xuporw/WSlUFGjxO0qPj3ePUmYVahKugyi77Hyg59BElSrZ/OG7VNYVbeqOtzmLKAYilG+kAZiyk9Fu66TxCKoGEn0Y4SzumROoOy90hn9MCQz2Ew2E+XTwSlQ+X0b9B30A9X+ONe+ooyi5fiBmoE++Gsj3bAEwOw+Rmm5UMt8AMIi1z0FZVKdQAAAABJRU5ErkJggg==')`,
									width: 14,
									height: 12,
									marginLeft: 15,
								}}
							/>
						)}
					</>
				);
			},
		},
		{
			title: '',
			dataIndex: 'cancel',
			key: 'cancel',
			render: (data) => <CancelButton />,
			width: '26px',
		},
	];
	const confirmedDevicesDataSource = [
		{
			key: '1',
			signedin: 'less than a minute ago',
			browser: 'Firefox (Windows)',
			ipaddress: '183.83.65.16',
			near: 'Boston US',
			current: true,
			cancel: 'cancel',
		},
		{
			key: '1',
			signedin: 'about 1 month ago',
			browser: 'Chrome (Linux)',
			ipaddress: '2401:4900:5fb2:a7c3:d0e1:38c9:16cb:6da3',
			near: 'Boston US',
			current: false,
			cancel: 'cancel',
		},
		{
			key: '1',
			signedin: 'about 1 month ago',
			browser: 'Chrome (Linux)',
			ipaddress: '2401:4900:5fb2:a7c3:d0e1:38c9:16cb:6da3',
			near: 'Boston US',
			current: false,
			cancel: 'cancel',
		},
		{
			key: '1',
			signedin: '2 months ago',
			browser: 'Safari (Mac)',
			ipaddress: '182.03.45.4',
			near: 'Boston US',
			current: false,
			cancel: 'cancel',
		},
	];

	// data for account activity
	const accountActivityColumns = [
		{title: 'Action', dataIndex: 'action', key: 'action'},
		{title: 'Source', dataIndex: 'source', key: 'source'},
		{title: 'IP Address', dataIndex: 'ipaddress', key: 'ipaddress'},
		{title: 'Near', dataIndex: 'near', key: 'near'},
		{title: 'When', dataIndex: 'when', key: 'when'},
	];
	const accountActivityDataSource = [
		{
			key: '1',
			action: 'signin',
			source: 'Firefox',
			ipaddress: '183.83.65.16',
			near: 'Boston US',
			when: 'less than a minute ago',
		},
		{
			key: '2',
			action: 'signin failure',
			source: 'Chrome',
			ipaddress: '2401:4900:5fb2:a7c3:d0e1:38c9:16cb:6da3',
			near: 'Boston US',
			when: 'less than a minute ago',
		},
		{
			key: '3',
			action: 'signout',
			source: 'Chrome',
			ipaddress: '182.03.45.4',
			near: 'Boston US',
			when: '1 minute ago',
		},
		{
			key: '4',
			action: 'signin',
			source: 'Chrome',
			ipaddress: '183.83.65.16',
			near: 'Boston US',
			when: 'about 4 hours ago',
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
						pagination={true}
					/>
					<Subsection
						title1="Web Sessions"
						title2="These sessions are currently signed in to your wallet. Sign out all other sessions"
						columns={webSessionColumns}
						dataSource={webSessionDataSource}
						pagination={true}
					/>
					<Subsection
						title1="Confirmed Devices"
						title2="These devices are currently allowed to access your wallet. Remove all other devices"
						columns={confirmedDevicesColumns}
						dataSource={confirmedDevicesDataSource}
						pagination={true}
					/>
					<Subsection
						title1="Wallet Activity"
						title2="Recent activity on your wallet."
						columns={accountActivityColumns}
						dataSource={accountActivityDataSource}
					/>
				</SectionBlock>
				<SectionBlock title="Close Wallet">
					<div className="close-text">
						Withdraw funds and close your Meta1 wallet{' '}
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
						Close Wallet
					</Button>
				</SectionBlock>
			</div>
		</div>
	);
};

export default BindToChainState(AccountActivity);
