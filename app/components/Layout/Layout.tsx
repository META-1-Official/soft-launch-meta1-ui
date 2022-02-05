import React, {useState} from 'react';
import {Layout, Menu, Icon} from 'antd';
import Header from './Header';
import {useTheme} from '@emotion/react';
const {Header: AntdHeader, Content, Footer, Sider} = Layout;
interface IAppLayout {
	children: React.ReactNode;
	height: number;
}

const AppLayout = ({children, height}: IAppLayout) => {
	const [collapsed, setcollapsed] = useState<boolean>(false);
	const toggle = () => {
		setcollapsed(!collapsed);
	};
	const theme: any = useTheme();

	return (
		<Layout>
			<AntdHeader style={{position: 'fixed', zIndex: 1, width: '100%'}}>
				{/* <div className="logo" />
				<Icon
					className="trigger"
					type={collapsed ? 'menu-unfold' : 'menu-fold'}
					onClick={toggle}
				/> */}
				<Header height={height} />

				{/* <Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['2']}
					style={{lineHeight: '64px'}}
				>
					<Menu.Item key="1">nav 1</Menu.Item>
					<Menu.Item key="2">nav 2</Menu.Item>
					<Menu.Item key="3">nav 3</Menu.Item>
				</Menu> */}
			</AntdHeader>

			<Content>
				<Layout>
					<Sider
						style={{backgroundColor: theme.colors.sideBar}}
						css={{
							'&& .ant-menu': {
								backgroundColor: 'black',
								height: '100%',
								marginTop: '4rem',
							},
						}}
						breakpoint="lg"
						onBreakpoint={(broken) => {
							broken && toggle();
						}}
						onCollapse={(collapsed, type) => {
							console.log(collapsed, type);
						}}
						collapsed={collapsed}
					>
						<div className="logo" />
						<Menu
							css={{
								'& .ant-menu-item': {
									borderBottom: '1px solid #1c1f27',
									height: '44px !important',
									lineHeight: '44px !important',
									marginBottom: '0px !important',
									marginTop: '0px !important',
								},
							}}
							mode="inline"
							defaultSelectedKeys={['4']}
						>
							<Menu.Item key="1">
								<Icon type="user" />
								<span className="nav-text">nav 1</span>
							</Menu.Item>
							<Menu.Item key="2">
								<Icon type="video-camera" />
								<span className="nav-text">nav 2</span>
							</Menu.Item>
							<Menu.Item key="3">
								<Icon type="upload" />
								<span className="nav-text">nav 3</span>
							</Menu.Item>
							<Menu.Item key="4">
								<Icon type="user" />
								<span className="nav-text">nav 4</span>
							</Menu.Item>
						</Menu>
					</Sider>
					<Content css={{margin: '4rem 0rem 2rem'}}>{children}</Content>
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
