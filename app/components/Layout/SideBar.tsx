import React from 'react';
import {Layout, Menu} from 'antd';
import Icon from '../Icon/Icon';
import {useTheme} from '@emotion/react';
import Translate from 'react-translate-component';
import history from '../../lib/common/history'; // lib/common/history';
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
			path: '/assets',
		},
		{
			menuId: 'trade',
			menuName: <Translate content="account.trade" />,
			path: '/trade',
		},
		{
			menuId: 'activity',
			menuName: <Translate content="account.activity" />,
			path: '/activity',
		},
		{
			menuId: 'asset-explorer',
			menuName: <Translate content="header.arts" />,
			path: '/asset-explorer',
		},
		{
			menuId: 'paper-wallet',
			menuName: <Translate content="account.perm.create_paperwallet" />,
			path: '/paper-wallet',
		},
		{
			menuId: 'transaction-history',
			menuName: 'Transaction History',
			path: '/transaction-history',

			// (
			// 	<Translate content="account.openledger.header_transaction_history" />
			// ),
		},
		{
			menuId: 'notification',
			menuName: 'Notification',
			path: '/notification',
		},
		{
			menuId: 'help',
			menuName: 'Help',
			path: '/help',
		},
		{
			menuId: 'settings',
			menuName: <Translate content="header.settings" />,
			path: '/settings',
		},
	];
	const sideMenuClick = (e: any) => {
		history.push(e.key);
	};

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
			breakpoint="sm"
			onBreakpoint={(broken) => {
				console.log('broken', broken);
				toggle();
			}}
			// onCollapse={(collapsed, type) => {
			// 	console.log(collapsed, type);
			// }}

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
				onClick={sideMenuClick}
			>
				{menuList &&
					menuList.map(({menuName, path}) => {
						return (
							<Menu.Item key={path}>
								<Icon type="user" />
								<span className="nav-text">{menuName}</span>
							</Menu.Item>
						);
					})}
			</Menu>
		</Sider>
	);
};

export default SideBar;
