import React, {useState} from 'react';
import {Layout, Menu, Icon} from 'antd';
import Header from './Header';
import {useTheme} from '@emotion/react';
import SideBar from './SideBar';
const {Header: AntdHeader, Content, Footer} = Layout;
interface IAppLayout {
	children: React.ReactNode;
	height: number;
}

const AppLayout = ({children, height}: IAppLayout) => {
	const theme: any = useTheme();
	const [collapsed, setcollapsed] = useState<boolean>(false);
	const toggle = () => {
		setcollapsed(!collapsed);
	};
	return (
		<Layout>
			<AntdHeader style={{position: 'fixed', zIndex: 1, width: '100%'}}>
				{/* <Icon
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
					<SideBar collapsed={collapsed} toggle={toggle} />
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
