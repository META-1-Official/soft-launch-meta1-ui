import React from 'react';
import {Layout, Menu} from 'antd';
import Icon from '../Icon/Icon';

import {useTheme} from '@emotion/react';
import Translate from 'react-translate-component';

const {Sider} = Layout;

interface ISideBar {
	collapsed: boolean;
	toggle: () => void;
}

const SideBar = ({collapsed, toggle}: ISideBar) => {
	const theme: any = useTheme();

	const menuList = [
		{
			menuId: 'banking-assets',
			menuName: <Translate content="explorer.assets.title" />,
		},
		{
			menuId: 'trade',
			menuName: <Translate content="account.trade" />,
		},
		{
			menuId: 'activity',
			menuName: <Translate content="account.activity" />,
		},
		{
			menuId: 'asset-explorer',
			menuName: <Translate content="header.arts" />,
		},
		{
			menuId: 'paper-wallet',
			menuName: <Translate content="account.perm.create_paperwallet" />,
		},
		{
			menuId: 'transaction-history',
			menuName: 'Transaction History',
			// (
			// 	<Translate content="account.openledger.header_transaction_history" />
			// ),
		},
		{
			menuId: 'notification',
			menuName: 'Notification',
		},
		{
			menuId: 'help',
			menuName: 'Help',
		},
		{
			menuId: 'settings',
			menuName: <Translate content="header.settings" />,
		},
	];

	return (
		<Sider
			style={{
				backgroundColor: theme.colors.sideBar,
				// overflow: 'auto',
				// position: 'fixed',
				// top: 0,
				// bottom: 0,
				// left: 0,
			}}
			css={{
				'&& .ant-menu': {
					backgroundColor: 'black',
					height: 'calc(100% - 38px)',
					marginTop: '3rem',
				},
			}}
			breakpoint="lg"
			onBreakpoint={(broken) => {
				broken && toggle();
			}}
			onCollapse={(collapsed, type) => {
				console.log(collapsed, type);
			}}
			collapsed={collapsed}
		>
			<Menu
				css={{
					'& .ant-menu-item': {
						borderBottom: '1px solid #1c1f27',
						height: '44px !important',
						lineHeight: '44px !important',
						marginBottom: '0px !important',
						marginTop: '0px !important',
					},
					'& .ant-menu-item:first-child': {
						borderTop: '1px solid #1c1f27',
					},
				}}
				mode="inline"
				defaultSelectedKeys={['settings']}
			>
				{menuList &&
					menuList.map(({menuName, menuId}) => {
						return (
							<Menu.Item key={menuId}>
								<Icon type="user" />
								<span className="nav-text">{menuName}</span>
							</Menu.Item>
						);
					})}

				{/* <Menu.Item key="2">
					<Icon type="video-camera" />
					<span className="nav-text">Trade</span>
				</Menu.Item>
				<Menu.Item key="3">
					<Icon type="upload" />
					<span className="nav-text">Activity</span>
				</Menu.Item>
				<Menu.Item key="4">
					<Icon type="user" />
					<span className="nav-text">Banking Assets</span>
				</Menu.Item>
				<Menu.Item key="4">
					<Icon type="user" />
					<span className="nav-text">Create Paper Wallet</span>
				</Menu.Item>
				<Menu.Item key="4">
					<Icon type="user" />
					<span className="nav-text">Transaction History</span>
				</Menu.Item>
				<Menu.Item key="4">
					<Icon type="user" />
					<span className="nav-text">Notification</span>
				</Menu.Item> */}
			</Menu>
		</Sider>
	);
};

export default SideBar;
