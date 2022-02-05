import React from 'react';
import Icon from '../../Icon/Icon';
import cnames from 'classnames';
import Translate from 'react-translate-component';
import {Menu, Dropdown} from 'antd';

const {SubMenu} = Menu;

const MenuList = ({
	dropdownActive,
	toggleLock,
	maxHeight,
	locked,
	active,
	passwordLogin,
	isMyAccount,
	showAccountLinks,
	tradeUrl,
	currentAccount,
	contacts,
	toggleDropdownMenu,
	showSend,
	toggleDropdownSubmenuDeposit,
}) => {
	const onAddContact = () => {
		AccountActions.addAccountContact(this.props.currentAccount);
	};

	const onRemoveContact = () => {
		AccountActions.removeAccountContact(this.props.currentAccount);
	};

	const hamburger = dropdownActive ? (
		<Icon className="icon-17px" name="hamburger-x" title="icons.hamburger_x" />
	) : (
		<Icon className="icon-17px" name="hamburger" title="icons.hamburger" />
	);
	let isContact = contacts.has(currentAccount);

	const menuList = [
		{
			menuId: 'loginAndLogout',
			menuName: (
				<Translate
					content={`header.${locked ? 'unlock_short' : 'lock_short'}`}
				/>
			),
			isLockMenuVisible: true,
			onClick: toggleLock,
		},
		{
			menuId: 'registration',
			menuName: <Translate content="header.create_account" />,
			isLockMenuVisible: locked,
			path: '/registration/',
		},
		{
			menuId: 'dashboard',
			menuName: <Translate content="header.dashboard" />,
			isLockMenuVisible: !locked,
			path: `/account/${currentAccount}`,
		},
		{
			menuId: 'unfollowAndFollow',
			menuName: (
				<Translate content={`account.${isContact ? 'unfollow' : 'follow'}`} />
			),
			isLockMenuVisible: !isMyAccount && showAccountLinks,
			onClick: isContact ? onRemoveContact : onAddContact,
		},
		{
			menuId: 'exchange',
			menuName: (
				<div className="table-cell">
					<Translate content="header.exchange" />
				</div>
			),
			isLockMenuVisible: true,
			responsiveView: 'column-show-small',
			path: tradeUrl,
		},
		{
			menuId: 'market',
			menuName: <Translate content="header.explorer" />,
			isLockMenuVisible: true,
			responsiveView: 'column-show-small',
		},
		{
			menuId: 'backing-assets',
			menuName: <Translate content="header.arts" />,
			isLockMenuVisible: true,
			responsiveView: 'column-show-small',
		},
		{
			disabled: !showAccountLinks,
			subURL: '/transfer',
			menuId: 'send',
			menuName: <Translate content="header.payments" />,
			isLockMenuVisible: true,
			mainCallback: showSend,
		},
		{
			disabled: true,
			subURL: '/transfer',
			menuId: 'Withdrawal',
			menuName: <Translate content="header.withdraw" />,
			isLockMenuVisible: true,
		},
		{
			disabled: !showAccountLinks,
			menuId: 'deposit',
			menuName: <Translate content="modal.deposit.header_short" />,
			isLockMenuVisible: true,
			hasSubMenu: [
				{
					menuId: 'btc',
					menuName: <Translate content="modal.deposit.btc" />,
				},
				{
					menuId: 'eth',
					menuName: <Translate content="modal.deposit.eth" />,
				},
				{
					menuId: 'usdt',
					menuName: <Translate content="modal.deposit.usdt" />,
				},
				{
					menuId: 'ltc',
					menuName: <Translate content="modal.deposit.ltc" />,
				},
			],
		},
		{
			disabled: !showAccountLinks,
			menuId: 'advanced',
			menuName: <Translate content="account.advanced" />,
			isLockMenuVisible: true,
			hasSubMenu: [
				{
					menuId: 'asset-explorer',
					menuName: <Translate content="header.arts" />,
					responsiveView: 'column-hide-small',
				},
				{
					menuId: 'help',
					menuName: <Translate content="header.help" />,
					responsiveView: 'column-show-small',
				},
			],
			groupTitle: <Translate content="header.settings" />,
			hasGroupMenu: [
				{
					menuId: 'asset-trezor',
					menuName: <Translate content="explorer.assets.trezor" />,
					disabled: !showAccountLinks,
					isLockMenuVisible: true,
				},
				{
					menuId: 'asset-ledger',
					menuName: <Translate content="explorer.assets.ledger" />,
					disabled: !showAccountLinks,
					isLockMenuVisible: true,
				},
				{
					menuId: 'signedmessages',
					menuName: <Translate content="account.signedmessages.menuitem" />,
					disabled: !showAccountLinks,
					path: `/account/${currentAccount}/signedmessages`,
					isLockMenuVisible: true,
				},
				{
					menuId: 'stats',
					menuName: <Translate content="account.member.stats" />,
					disabled: !showAccountLinks,
					path: `/account/${currentAccount}/member-stats`,
					isLockMenuVisible: true,
				},
				{
					menuId: 'vesting',
					menuName: <Translate content="account.vesting.title" />,
					disabled: !showAccountLinks,
					path: `/account/${currentAccount}/vesting`,
					isLockMenuVisible: isMyAccount,
				},
				{
					menuId: 'whitelist',
					menuName: <Translate content="account.whitelist.title" />,
					disabled: !showAccountLinks,
					path: `/account/${currentAccount}/whitelist`,
					isLockMenuVisible: true,
				},
				{
					menuId: 'permissions',
					menuName: <Translate content="account.permissions" />,
					disabled: !showAccountLinks,
					path: `/account/${currentAccount}/permissions`,
					isLockMenuVisible: true,
				},
				{
					menuId: 'accounts',
					menuName: <Translate content="explorer.accounts.title" />,
					disabled: !showAccountLinks,
					path: '/accounts',
					isLockMenuVisible: showAccountLinks,
				},
			],
		},
	];

	const menu = () => {
		return (
			<Menu onClick={'onClick'}>
				{menuList
					.filter(({isLockMenuVisible}) => isLockMenuVisible === true)
					.map(
						({
							hasSubMenu,
							menuId,
							disabled,
							menuName,
							responsiveView,
							hasGroupMenu,
							groupTitle,
						}) => {
							return hasSubMenu ? (
								subMenuList({
									menuName,
									hasGroupMenu,
									hasSubMenu,
									menuId,
									responsiveView,
									groupTitle,
								})
							) : (
								<Menu.Item
									key={menuId}
									className={responsiveView}
									disabled={disabled ? true : false}
								>
									{menuName}
								</Menu.Item>
							);
						}
					)}
			</Menu>
		);
	};

	const subMenuList = ({
		menuName,
		hasGroupMenu,
		responsiveView,
		hasSubMenu,
		menuId,
		groupTitle,
	}) => {
		return (
			<React.Fragment>
				<SubMenu key={menuId} title={menuName}>
					{hasSubMenu.map(({menuName}) => {
						return <Menu.Item>{menuName}</Menu.Item>;
					})}
					<Menu.Divider style={{backgroundColor: 'white'}} />
					{hasGroupMenu && (
						<Menu.ItemGroup title={groupTitle}>
							{hasGroupMenu.map(
								({menuName, menuId, disabled, responsiveView}) => {
									return (
										<React.Fragment>
											{menuId === 'accounts' && (
												<Menu.Divider
													style={{
														backgroundColor: 'white',
													}}
												/>
											)}
											<Menu.Item
												disabled={disabled ? true : false}
												className={responsiveView}
											>
												{menuName}
											</Menu.Item>
											{menuId === 'accounts' && (
												<Menu.Divider
													style={{
														backgroundColor: 'white',
													}}
												/>
											)}
										</React.Fragment>
									);
								}
							)}
						</Menu.ItemGroup>
					)}
				</SubMenu>
			</React.Fragment>
		);
	};

	return (
		<div className="app-menu">
			<Dropdown
				onClick={toggleDropdownMenu}
				className={cnames('menu-dropdown-wrapper dropdown-wrapper', {
					active: dropdownActive,
				})}
				trigger={['click']}
				overlay={menu()}
			>
				<div className="hamburger">{hamburger}</div>
			</Dropdown>
		</div>
	);
};

export default MenuList;
