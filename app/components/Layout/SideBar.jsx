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
import counterpart from 'counterpart';
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
			mobileIcon: <WalletOutlined style={{fontSize: '22px'}} />,
			enableNavLinks: true,
		},
		{
			menuId: 'trade',
			menuName: <Translate content="account.trade" />,
			icon: <RiseOutlined />,
			mobileIcon: <RiseOutlined style={{fontSize: '22px'}} />,
			enableNavLinks,
		},
		{
			menuId: 'activity',
			menuName: <Translate content="account.activity" />,
			icon: <InteractionOutlined />,
			mobileIcon: <InteractionOutlined style={{fontSize: '22px'}} />,
			enableNavLinks,
		},
		{
			menuId: 'asset-explorer',
			menuName: <Translate content="header.arts" />,
			icon: <ApartmentOutlined />,
			mobileIcon: <ApartmentOutlined style={{fontSize: '22px'}} />,
			enableNavLinks: true,
		},
		{
			menuId: 'paper-wallet',
			menuName: <Translate content="account.perm.create_paperwallet" />,
			icon: <FileTextOutlined />,
			mobileIcon: <FileTextOutlined style={{fontSize: '22px'}} />,
			enableNavLinks,
		},
		{
			menuId: 'transaction-history',
			menuName: <Translate content="account.transaction_history" />,
			icon: <SwapOutlined />,
			mobileIcon: <SwapOutlined style={{fontSize: '22px'}} />,
			enableNavLinks,
		},
		{
			menuId: 'notification',
			menuName: <Translate content="account.notifications" />,
			icon: <BellOutlined />,
			mobileIcon: <BellOutlined style={{fontSize: '22px'}} />,
			enableNavLinks,
		},
		{
			menuId: 'learn',
			menuName: <Translate content="account.learn" />,
			icon: <QuestionCircleOutlined />,
			mobileIcon: <QuestionCircleOutlined style={{fontSize: '20px'}} />,
			enableNavLinks: true,
		},
		{
			menuId: 'settings',
			menuName: <Translate content="header.settings" />,
			icon: <SettingOutlined />,
			mobileIcon: <SettingOutlined style={{fontSize: '20px'}} />,
			enableNavLinks,
		},
	];

	const sideMenuClick = (e) => {
		let link = e.key;

		if (e.key === 'account') {
			if (!accountName) {
				toast(counterpart.translate('wallet.require_login'));
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

	const renderSideBar = () => {
		return (
			<Sider
				style={{
					backgroundColor: theme.colors.sideBar,
					display: currentLink === 'market' ? 'none' : 'block',
				}}
				breakpoint="md"
				onBreakpoint={() => {
					screens['md'] === true ? toggle(false) : toggle(true);
				}}
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

	const renderMobileMenu = () => {
		return (
			<ul
				css={{
					'&': {
						backgroundColor: `${theme.colors.sideBar}`,
						display: currentLink === 'market' ? 'none' : 'flex',
						margin: 0,
						overflowX: 'scroll',
						overflowY: 'hidden',
						minHeight: '55px !important',
						maxHeight: '55px !important',
						borderBottom: `1px solid ${theme.colors.borderColor}`,
						padding: '10px 10px',
					},
				}}
			>
				{menuList &&
					menuList.map(({menuName, menuId, enableNavLinks, mobileIcon}) => {
						return (
							<li
								key={menuId}
								className={
									'ant-menu sidebar-menu-' +
									menuId +
									(currentLink === menuId ? ' active' : '')
								}
								onClick={
									!enableNavLinks ? null : () => sideMenuClick({key: menuId})
								}
								css={{
									'&': {
										maxWidth: '50px',
										lineHeight: '48px !important',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										margin: '0px !important',
										padding: '10px !important',
										backgroundColor: `${theme.colors.sideBar}`,
										color: !enableNavLinks ? 'grey !important' : null,
									},
									'&.active, &:active, &:hover, &:focus': {
										backgroundColor: 'transparent !important',
										color: '#ffc000 !important',
										borderBottom: '3px solid #ffc000!important',
										borderRadius: '2px',
									},
								}}
							>
								{mobileIcon}
							</li>
						);
					})}
			</ul>
		);
	};

	if (screens['md'] === true) return renderSideBar();
	else return renderMobileMenu();
};

export default SideBar;
