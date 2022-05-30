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

const AppLayout = ({children, location, height}: IAppLayout, others) => {
	const [collapsed, setcollapsed] = useState<boolean>(true);
	const [currentLink, setCurrentLink] = useState<string>('');

	const theme: any = useTheme();
	const toggle = (value: boolean) => setcollapsed(value);

	const pathSnippets = location.pathname.split('/').filter((i) => i);
	let qd = {};
	location.search
		.substr(1)
		.split('&')
		.forEach(function (item) {
			item.split('=')[0] in qd
				? qd[item.split('=')[0]].push(item.split('=')[1])
				: (qd[item.split('=')[0]] = [item.split('=')[1]]);
		});
	let link = '';
	if (pathSnippets && pathSnippets.length > 1) {
		if (pathSnippets.includes('activity')) link = 'activity';
		else if (pathSnippets.includes('trade')) link = 'trade';
		else if (pathSnippets.includes('account')) {
			if (
				qd.hasOwnProperty('currentDisplay') &&
				qd['currentDisplay'].length > 0 &&
				qd['currentDisplay'][0] === 'transactionHistory'
			) {
				link = 'transaction-history';
			} else if (pathSnippets.includes('signedmessages')) {
				link = '';
			} else {
				link = 'account';
			}
		} else if (pathSnippets.includes('help')) {
			link = pathSnippets[0];
		}
	} else {
		link = pathSnippets ? pathSnippets[0] : '';
	}

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
					paddingBottom: '15px',
				},
			})}
		>
			{/* <Icon
				className="trigger"
				type={collapsed ? 'menu-unfold' : 'menu-fold'}
				onClick={toggle}
			/> */}
			<Header currentLink={currentLink} height={height} {...others} />

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
				META1 © 2022
			</Footer>
		</Layout>
	);
};

export default AppLayout;
