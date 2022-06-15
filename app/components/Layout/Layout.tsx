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
		else if (pathSnippets.includes('permissions')) link = 'paper-wallet';
		else if (pathSnippets.includes('account')) {
			if (
				qd.hasOwnProperty('currentDisplay') &&
				qd['currentDisplay'].length > 0 &&
				qd['currentDisplay'][0] === 'transactionHistory'
			) {
				link = 'transaction-history';
			} else if (pathSnippets.includes('signedmessages')) {
				link = '';
			} else if (pathSnippets.includes('notification')) {
				link = 'notification';
			} else {
				link = 'account';
			}
		} else if (pathSnippets.includes('help')) {
			link = pathSnippets[0];
		} else {
			link = pathSnippets[0];
		}
	} else {
		link = pathSnippets ? pathSnippets[0] : '';
	}

	useEffect(() => {
		setCurrentLink(link);
		if (link === 'market') {
			setcollapsed(true);
		} else {
			setcollapsed(false);
		}
	}, [link]);

	return (
		<Layout
			css={(theme) => ({
				'&& .ant-layout-header': {
					position: 'fixed',
					zIndex: 1,
					width: '100%',
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

			<Footer>META1 © 2022</Footer>
		</Layout>
	);
};

export default AppLayout;
