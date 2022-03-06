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
	currentLink: string;
}
const {useBreakpoint} = Grid;

const SideBar = ({collapsed, currentLink, toggle}: ISideBar) => {
	const theme: any = useTheme();
	const screens = useBreakpoint();

	const menuList = [
		{
			menuId: 'assets',
			menuName: <Translate content="explorer.assets.title" />,
			icon: <WalletOutlined />,
		},
		{
			menuId: 'trade',
			menuName: <Translate content="account.trade" />,
			icon: <RiseOutlined />,
		},
		{
			menuId: 'activity',
			menuName: <Translate content="account.activity" />,
			icon: <RiseOutlined />,
		},
		{
			menuId: 'asset-explorer',
			menuName: <Translate content="header.arts" />,
			icon: <ApartmentOutlined />,
		},
		{
			menuId: 'paper-wallet',
			menuName: <Translate content="account.perm.create_paperwallet" />,
			icon: <FileTextOutlined />,
		},
		{
			menuId: 'transaction-history',
			menuName: 'Transaction History',
			icon: <SwapOutlined />,
		},
		{
			menuId: 'notification',
			menuName: 'Notification',
			icon: <BellOutlined />,
		},
		{
			menuId: 'help',
			menuName: 'Help',
			icon: <QuestionCircleOutlined />,
		},
		{
			menuId: 'settings',
			menuName: <Translate content="header.settings" />,
			icon: <SettingOutlined />,
		},
	];
	const sideMenuClick = (e: any) => {
		history.push(`/${e.key}`);
	};

	console.log('currentLink', currentLink);

	return (
		<Sider
			style={{
				backgroundColor: theme.colors.sideBar,
			}}
			css={{
				'&& .ant-menu': {
					backgroundColor: 'black',
					height: 'calc(100% - 38px)',
					marginTop: '3rem',
				},
			}}
			breakpoint="sm"
			onBreakpoint={() => {
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
				onClick={sideMenuClick}
				selectedKeys={[currentLink]}
			>
				{menuList &&
					menuList.map(({menuName, menuId, icon}) => {
						return (
							<Menu.Item key={menuId} icon={icon}>
								<span className="nav-text">{menuName}</span>
							</Menu.Item>
						);
					})}
			</Menu>
		</Sider>
	);
};

export default SideBar;
