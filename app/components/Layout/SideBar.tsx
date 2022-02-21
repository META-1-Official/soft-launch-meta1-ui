import React from 'react';
import {Layout, Grid, Menu} from 'antd';
import {
	RiseOutlined,
	SwapOutlined,
	SettingOutlined,
	FileTextOutlined,
	BellOutlined,
	QuestionCircleOutlined,
	WalletOutlined,
	ApartmentOutlined,
} from '@ant-design/icons';
import {useTheme} from '@emotion/react';
import Translate from 'react-translate-component';
import history from '../../lib/common/history'; // lib/common/history';

const {Sider} = Layout;

interface ISideBar {
	collapsed: boolean;
	toggle: (boolean) => void;
}
const {useBreakpoint} = Grid;

const SideBar = ({collapsed, toggle}: ISideBar) => {
	const theme: any = useTheme();
	const screens = useBreakpoint();

	const menuList = [
		{
			menuId: 'banking-assets',
			menuName: <Translate content="explorer.assets.title" />,
			path: '/assets',
			icon: <WalletOutlined />,
		},
		{
			menuId: 'trade',
			menuName: <Translate content="account.trade" />,
			path: '/trade',
			icon: <RiseOutlined />,
		},
		{
			menuId: 'activity',
			menuName: <Translate content="account.activity" />,
			path: '/activity',
			icon: <RiseOutlined />,
		},
		{
			menuId: 'asset-explorer',
			menuName: <Translate content="header.arts" />,
			path: '/asset-explorer',
			icon: <ApartmentOutlined />,
		},
		{
			menuId: 'paper-wallet',
			menuName: <Translate content="account.perm.create_paperwallet" />,
			path: '/paper-wallet',
			icon: <FileTextOutlined />,
		},
		{
			menuId: 'transaction-history',
			menuName: 'Transaction History',
			path: '/transaction-history',
			icon: <SwapOutlined />,

			// (
			// 	<Translate content="account.openledger.header_transaction_history" />
			// ),
		},
		{
			menuId: 'notification',
			menuName: 'Notification',
			path: '/notification',
			icon: <BellOutlined />,
		},
		{
			menuId: 'help',
			menuName: 'Help',
			path: '/help',
			icon: <QuestionCircleOutlined />,
		},
		{
			menuId: 'settings',
			menuName: <Translate content="header.settings" />,
			path: '/settings',
			icon: <SettingOutlined />,
		},
	];
	const sideMenuClick = (e: any) => {
		history.push(e.key);
	};
	console.log('screen', screens);
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
				screens['xs'] === true ? toggle(true) : toggle(false);
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
					menuList.map(({menuName, path, icon}) => {
						return (
							<Menu.Item key={path} icon={icon}>
								<span className="nav-text">{menuName}</span>
							</Menu.Item>
						);
					})}
			</Menu>
		</Sider>
	);
};

export default SideBar;
