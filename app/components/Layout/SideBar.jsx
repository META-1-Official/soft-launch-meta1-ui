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
} from '@ant-design/icons';
import {toast} from 'react-toastify';
import {useTheme} from '@emotion/react';
import Translate from 'react-translate-component';
import history from '../../lib/common/history'; // lib/common/history';
import ls from '../../lib/common/localStorage';

const STORAGE_KEY = '__AuthData__';
const ss = new ls(STORAGE_KEY);

const {Sider} = Layout;
const {useBreakpoint} = Grid;

const SideBar = ({collapsed, currentLink, toggle}) => {
	const theme = useTheme();
	const screens = useBreakpoint();

	const accountName = ss.get('account_login_name', '');
	const token = ss.get('account_login_token', '');
	const enableNavLinks = accountName && token;

	const menuList = [
		{
			menuId: `account`,
			menuName: <Translate content="explorer.assets.title" />,
			icon: <WalletOutlined />,
			enableNavLinks: true,
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
			menuName: 'Notifications',
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
			enableNavLinks,
		},
	];

	const sideMenuClick = (e) => {
		let link = e.key;

		if (e.key === 'account') {
			if (!accountName) {
				toast('Please login or get this page from explorer');
				return;
			}

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
				display: currentLink === 'market' ? 'none' : 'unset',
			}}
			css={{
				'&& .ant-menu': {
					backgroundColor: 'black',
				},
			}}
			breakpoint="md"
			onBreakpoint={() => {
				screens['sm'] === true ? toggle(true) : toggle(false);
			}}
			className={collapsed ? 'none' : null}
			collapsedWidth={50}
		>
			<Menu
				css={{
					'& .ant-menu-item': {
						borderBottom: `1px solid ${theme.colors.borderColor}`,
						height: '44px !important',
						lineHeight: '44px !important',
						marginBottom: '0px !important',
						marginTop: '0px !important',
						textTransform: 'capitalize',
					},
					'& .ant-menu-item:first-child': {
						borderTop: `1px solid ${theme.colors.borderColor}`,
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
