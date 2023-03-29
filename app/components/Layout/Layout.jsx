import React, {useState, useEffect} from 'react';
import {Layout, Button, Typography} from 'antd';
import Header from './Header';
import SideBar from './SideBar';

const footer_logo = require('assets/footer_menu_logo.png');
import {
	DatabaseOutlined,
	BarChartOutlined,
	SlidersOutlined,
	SyncOutlined,
} from '@ant-design/icons';

const {Content, Footer} = Layout;
const {Text} = Typography;

const AppLayout = ({children, location, height}, others) => {
	const [collapsed, setcollapsed] = useState(true);
	const [currentLink, setCurrentLink] = useState('');

	const toggle = (value) => setcollapsed(value);

	const pathSnippets = location.pathname.split('/').filter((i) => i);
	const qd = {};
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
		} else if (pathSnippets.includes('learn')) {
			link = pathSnippets[0];
		} else if (pathSnippets.includes('registration')) {
			link = 'registration';
		} else {
			link = pathSnippets[0];
		}
	} else {
		link = pathSnippets ? pathSnippets[0] : '';
	}

	useEffect(() => {
		setCurrentLink(link);
		if (link === 'market' || link === 'registration') {
			setcollapsed(true);
		} else {
			setcollapsed(false);
		}
	}, [link]);

	const IconButton = (props) => (
		<div
			className="icon-button"
			css={() => ({
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				width: '100px',
				height: '50px',
			})}
			onClick={props.onClick}
		>
			{props.icon}
			<Text>{props.text}</Text>
		</div>
	);

	const renderFooter = () => {
		return (
			<>
				<div
					css={(theme) => ({
						[`@media (max-width: ${theme.sizes.md})`]: {
							display: currentLink === 'market' ? 'none' : 'unset',
						},
					})}
				>
					<Footer>META1 © 2023</Footer>
				</div>
				{currentLink === 'market' && (
					<div
						css={(theme) => ({
							[`@media (min-width: ${theme.sizes.md})`]: {
								display: 'none',
							},
						})}
					>
						<Footer className="exchange-footer">
							<div className="logo-wrapper">
								<img className="footer-logo" src={footer_logo} />
							</div>
							<IconButton
								icon={<DatabaseOutlined />}
								text="market"
								onClick={() => console.log('market selected')}
							/>
							<IconButton
								icon={<BarChartOutlined />}
								text="chart"
								onClick={() => console.log('chart selected')}
							/>
							<div
								className="normal-button"
								onClick={() => console.log('buy/sell selected')}
							>
								Buy/Sell
							</div>
							<IconButton
								icon={<SlidersOutlined />}
								text="trade"
								onClick={() => console.log('trade selected')}
							/>
							<IconButton
								icon={<SyncOutlined />}
								text="orders"
								onClick={() => console.log('orders selected')}
							/>
						</Footer>
					</div>
				)}
			</>
		);
	};

	return (
		<Layout
			css={(theme) => ({
				'&& .ant-layout-header': {
					position: 'fixed',
					zIndex: 1,
					width: '100%',
					display: 'flex',
					backgroundColor: `${theme.colors.backgroundColor}`,
					lineHeight: '3rem',
					padding: '0px 9px',
				},
				'&& .ant-layout-content': {
					backgroundColor: `${theme.colors.backgroundColor}`,
				},
			})}
		>
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
			{renderFooter()}
		</Layout>
	);
};

export default AppLayout;
