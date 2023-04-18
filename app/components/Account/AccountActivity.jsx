import React from 'react';
import {MobileOutlined} from '@ant-design/icons';
import {Button, Table} from 'antd';
import counterpart from 'counterpart';
import PageHeader from 'components/PageHeader/PageHeader';
import BindToChainState from '../Utility/BindToChainState';
import SectionBlock from './SectionBlock';
import {Card} from 'antd';
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
			<div
				className={`table ${title1 == 'Mobile Applications' ? 'visible' : ''}`}
			>
				<Table
					columns={columns}
					dataSource={dataSource}
					pagination={pagination}
				/>
			</div>

			{dataSource.map((el) => (
				<div
					className={`card ${title1 == 'Mobile Applications' ? 'hide' : ''}`}
				>
					<Card bordered={false}>
						{columns.map((col) => {
							return col.title ? (
								<h6>
									<div className="header">{col.title} :</div>
									<div class="content">
										{col.render ? col.render(el[col.key]) : el[col.key]}
									</div>
								</h6>
							) : (
								<h6>
									<div class="action">
										{col.render ? col.render(el[col.key]) : el[col.key]}
									</div>
								</h6>
							);
						})}
					</Card>
				</div>
			))}
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
			title: counterpart.translate('account.activities.device'),
			dataIndex: 'device',
			key: 'device',
			render: (data) => {
				return (
					<div>
						<MobileOutlined css={{marginRight: '5px'}} />
						{data}
					</div>
				);
			},
		},
		{
			title: counterpart.translate('account.activities.signed_in'),
			dataIndex: 'signedin',
			key: 'signedin',
		},
		{
			title: '',
			dataIndex: 'cancel',
			key: 'cancel',
			render: () => <CancelButton />,
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
		{
			title: counterpart.translate('account.activities.signed_in'),
			dataIndex: 'signedin',
			key: 'signedin',
		},
		{
			title: counterpart.translate('account.activities.browser'),
			dataIndex: 'browser',
			key: 'browser',
		},
		{
			title: counterpart.translate('account.activities.ip_address'),
			dataIndex: 'ipaddress',
			key: 'ipaddress',
			width: 200,
		},
		{
			title: counterpart.translate('account.activities.near'),
			dataIndex: 'near',
			key: 'near',
		},
		{
			title: counterpart.translate('account.activities.current'),
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
		{
			title: counterpart.translate('account.activities.signed_in'),
			dataIndex: 'signedin',
			key: 'signedin',
		},
		{
			title: counterpart.translate('account.activities.browser'),
			dataIndex: 'browser',
			key: 'browser',
		},
		{
			title: counterpart.translate('account.activities.ip_address'),
			dataIndex: 'ipaddress',
			key: 'ipaddress',
			width: 200,
		},
		{
			title: counterpart.translate('account.activities.near'),
			dataIndex: 'near',
			key: 'near',
		},
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
		{
			title: counterpart.translate('account.activities.action'),
			dataIndex: 'action',
			key: 'action',
		},
		{
			title: counterpart.translate('account.activities.source'),
			dataIndex: 'source',
			key: 'source',
		},
		{
			title: counterpart.translate('account.activities.ip_address'),
			dataIndex: 'ipaddress',
			key: 'ipaddress',
		},
		{
			title: counterpart.translate('account.activities.near'),
			dataIndex: 'near',
			key: 'near',
		},
		{
			title: counterpart.translate('account.activities.when'),
			dataIndex: 'when',
			key: 'when',
		},
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
				<PageHeader
					title={counterpart.translate('account.activity')}
					level={2}
					showDivider
				/>
			</div>
			<div className="content">
				<SectionBlock
					title={counterpart.translate('account.activities.active_sessions')}
				>
					<Subsection
						title1={counterpart.translate(
							'account.activities.mobile_applications'
						)}
						title2={counterpart.translate(
							'account.activities.mobile_applications_info'
						)}
						columns={mobileDeviceColumns}
						dataSource={mobileDeviceDataSource}
						pagination={true}
					/>
					<Subsection
						title1={counterpart.translate('account.activities.web_sessions')}
						title2={counterpart.translate(
							'account.activities.web_sessions_info'
						)}
						columns={webSessionColumns}
						dataSource={webSessionDataSource}
						pagination={true}
					/>
					<Subsection
						title1={counterpart.translate(
							'account.activities.confirmed_devices'
						)}
						title2={counterpart.translate(
							'account.activities.confirmed_devices_info'
						)}
						columns={confirmedDevicesColumns}
						dataSource={confirmedDevicesDataSource}
						pagination={true}
					/>
					<Subsection
						title1={counterpart.translate('account.activities.wallet_activity')}
						title2={counterpart.translate(
							'account.activities.wallet_activity_info'
						)}
						columns={accountActivityColumns}
						dataSource={accountActivityDataSource}
					/>
				</SectionBlock>
				<SectionBlock
					title={counterpart.translate('account.activities.close_wallet')}
				>
					<div className="close-text">
						{counterpart.translate(
							'account.activities.withdraw_funds_and_close_wallet'
						)}
						&nbsp;
						<a href="#" className="undone-text">
							- {counterpart.translate('account.activities.cannot_be_undone')}
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
						{counterpart.translate('account.activities.close_wallet')}
					</Button>
				</SectionBlock>
			</div>
		</div>
	);
};

export default BindToChainState(AccountActivity);
