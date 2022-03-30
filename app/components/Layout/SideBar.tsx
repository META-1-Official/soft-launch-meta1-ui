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
import AccountStore from '../../stores/AccountStore';

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
	let accountName =
		AccountStore.getState().currentAccount ||
		AccountStore.getState().passwordAccount;
	accountName =
		accountName && accountName !== 'null' ? accountName : 'committee-account';

	const checkCurrentAccount =
		AccountStore.getState().currentAccount ||
		AccountStore.getState().passwordAccount;
	const enableNavLinks = checkCurrentAccount
		? checkCurrentAccount === null
			? false
			: true
		: false;

	const menuList = [
		{
			menuId: 'assets',
			url: `account/${accountName}`,
			menuName: <Translate content="explorer.assets.title" />,
			icon: <WalletOutlined />,
			enableNavLinks,
		},
		{
			menuId: 'trade',
			url: 'trade',
			menuName: <Translate content="account.trade" />,
			icon: <RiseOutlined />,
			enableNavLinks,
		},
		{
			menuId: 'activity',
			url: 'activity',
			menuName: <Translate content="account.activity" />,
			icon: <RiseOutlined />,
			enableNavLinks,
		},
		{
			menuId: 'asset-explorer',
			url: 'asset-explorer',
			menuName: <Translate content="header.arts" />,
			icon: <ApartmentOutlined />,
			enableNavLinks: true,
		},
		{
			menuId: 'paper-wallet',
			url: 'paper-wallet',
			menuName: <Translate content="account.perm.create_paperwallet" />,
			icon: <FileTextOutlined />,
			enableNavLinks,
		},
		{
			menuId: 'transaction-history',
			url: 'transaction-history',
			menuName: 'Transaction History',
			icon: <SwapOutlined />,
			enableNavLinks,
		},
		{
			menuId: 'notification',
			url: 'notification',
			menuName: 'Notification',
			icon: <BellOutlined />,
			enableNavLinks,
		},
		{
			menuId: 'help',
			url: 'help',
			menuName: 'Help',
			icon: <QuestionCircleOutlined />,
			enableNavLinks: true,
		},
		{
			menuId: 'settings',
			url: 'settings',
			menuName: <Translate content="header.settings" />,
			icon: <SettingOutlined />,
			enableNavLinks: true,
		},
	];
	const sideMenuClick = (e: any) => {
		history.push(`/${e.key}`);
	};

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
					menuList.map(({menuName, url, enableNavLinks, icon}) => {
						return (
							<Menu.Item key={url} icon={icon} disabled={!enableNavLinks}>
								<span className="nav-text">{menuName}</span>
							</Menu.Item>
						);
					})}
			</Menu>
		</Sider>
	);
};

export default SideBar;
