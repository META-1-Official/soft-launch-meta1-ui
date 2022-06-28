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
	InteractionOutlined,
	FileProtectOutlined,
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
			menuId: `account`,
			menuName: <Translate content="explorer.assets.title" />,
			icon: <WalletOutlined />,
			enableNavLinks,
		},
		{
			menuId: 'trade',
			menuName: <Translate content="account.trade" />,
			icon: <RiseOutlined />,
			enableNavLinks,
		},
		{
			menuId: 'activity',
			menuName: <Translate content="account.activity" />,
			icon: <InteractionOutlined />,
			enableNavLinks,
		},
		{
			menuId: 'asset-explorer',
			menuName: <Translate content="header.arts" />,
			icon: <ApartmentOutlined />,
			enableNavLinks: true,
		},
		{
			menuId: 'paper-wallet',
			menuName: <Translate content="account.perm.create_paperwallet" />,
			icon: <FileTextOutlined />,
			enableNavLinks,
		},
		{
			menuId: 'transaction-history',
			menuName: 'Transaction History',
			icon: <SwapOutlined />,
			enableNavLinks,
		},
		{
			menuId: 'notification',
			menuName: 'Notification',
			icon: <BellOutlined />,
			enableNavLinks,
		},
		{
			menuId: 'learn',
			menuName: 'Learn',
			icon: <QuestionCircleOutlined />,
			enableNavLinks: true,
		},
		{
			menuId: 'settings',
			menuName: <Translate content="header.settings" />,
			icon: <SettingOutlined />,
			enableNavLinks: true,
		},
	];

	const sideMenuClick = (e: any) => {
		let link = e.key;

		if (e.key === 'account') {
			link = `account/${accountName}/?currentDisplay=portfolio`;
		} else if (e.key === 'activity') {
			link = `account/${accountName}/activity`;
		} else if (e.key === 'trade') {
			link = `account/${accountName}/trade`;
		} else if (e.key === 'whitelist') {
			link = `account/${accountName}/whitelist`;
		} else if (e.key === 'membershipStats') {
			link = `account/${accountName}/member-stats`;
		} else if (e.key === 'transaction-history') {
			link = `account/${accountName}/?currentDisplay=transactionHistory`;
		} else if (e.key === 'notification') {
			link = `account/${accountName}/notification`;
		} else if (e.key === 'paper-wallet') {
			link = `account/${accountName}/permissions/?currentDisplay=createPaperWallet`;
		}

		history.push(`/${link}`);
	};

	return (
		<Sider
			style={{
				backgroundColor: theme.colors.sideBar,
			}}
			css={{
				'&& .ant-menu': {
					backgroundColor: 'black',
				},
			}}
			breakpoint="sm"
			onBreakpoint={() => {
				screens['xs'] === true ? toggle(true) : toggle(false);
			}}
			className={collapsed ? 'none' : null}
			// collapsed={collapsed}
		>
			<Menu
				css={{
					'& .ant-menu-item': {
						borderBottom: '1px solid #1c1f27',
						height: '44px !important',
						lineHeight: '44px !important',
						marginBottom: '0px !important',
						marginTop: '0px !important',
						textTransform: 'capitalize',
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
					menuList.map(({menuName, menuId, enableNavLinks, icon}) => {
						return (
							<Menu.Item
								key={menuId}
								icon={icon}
								disabled={!enableNavLinks}
								className={'sidebar-menu-' + menuId}
							>
								<span className="nav-text">{menuName}</span>
							</Menu.Item>
						);
					})}
			</Menu>
		</Sider>
	);
};

export default SideBar;
