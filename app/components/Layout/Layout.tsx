import React, {useState, useEffect} from 'react';
import {Layout} from 'antd';
import Header from './Header';
import {useTheme} from '@emotion/react';
import SideBar from './SideBar';

const {Content, Footer} = Layout;
interface IAppLayout {
	children: React.ReactNode;
	height: number;
	location: any;
}

const AppLayout = ({children, location, height}: IAppLayout) => {
	const theme: any = useTheme();

	const pathSnippets = location.pathname.split('/').filter((i) => i);
	const [collapsed, setcollapsed] = useState<boolean>(true);

	let link = '';
	if (pathSnippets && pathSnippets.length > 1) {
		if (pathSnippets.includes('whitelist')) {
			link = 'whitelist';
		}
		if (pathSnippets.includes('member-stats')) {
			link = 'member-stats';
		}
		if (pathSnippets.includes('market')) {
			link = 'market';
		}
		if (pathSnippets.includes('explorer')) {
			link = 'explorer';
		}
		if (pathSnippets.includes('signedmessages')) {
			link = 'signedmessages';
		}
		if (pathSnippets.includes('vesting')) {
			link = 'vesting';
		}
	} else {
		link = pathSnippets ? pathSnippets[0] : '';
	}
	const [currentLink, setCurrentLink] = useState<string>('');
	const toggle = (value: boolean) => {
		setcollapsed(value);
	};
	useEffect(() => {
		setCurrentLink(link);
		if (link === 'market' && collapsed) {
			setcollapsed(true);
		}
	}, [link]);

	return (
		<Layout
			css={(theme) => ({
				'&& .ant-layout-header': {
					position: 'fixed',
					zIndex: 1,
					width: '100%',
					minHeight: '3rem',
					height: '3rem',
					display: 'flex',
					backgroundColor: `${theme.colors.black}`,
					lineHeight: '3rem',
					padding: '0px 9px',
				},
				'&& .ant-layout-content': {
					backgroundColor: `${theme.colors.black}`,
				},
			})}
		>
			{/* <Icon
				className="trigger"
				type={collapsed ? 'menu-unfold' : 'menu-fold'}
				onClick={toggle}
			/> */}
			<Header currentLink={currentLink} height={height} />

			<Content>
				<Layout>
					<SideBar
						currentLink={currentLink}
						collapsed={collapsed}
						toggle={toggle}
					/>
					<Content css={{marginTop: '3rem'}}>{children}</Content>
				</Layout>
			</Content>

			<Footer
				css={{
					position: 'fixed',
					bottom: 0,
					zIndex: 1,
					width: '100%',
					textAlign: 'center',
					backgroundColor: `${theme.colors.footerBackground} !important`,
					padding: '12px 50px !important',
					color: `${theme.colors.footerTextColor} !important`,
				}}
			>
				Meta1 © 2022
			</Footer>
		</Layout>
	);
};

export default AppLayout;
