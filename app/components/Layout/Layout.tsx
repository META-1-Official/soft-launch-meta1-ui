import React, {useState} from 'react';
import {Layout} from 'antd';
import Header from './Header';
import {useTheme} from '@emotion/react';
import SideBar from './SideBar';
const {Content, Footer} = Layout;
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
			{/* <Icon
				className="trigger"
				type={collapsed ? 'menu-unfold' : 'menu-fold'}
				onClick={toggle}
			/> */}
			<Header height={height} />

			<Content>
				<Layout>
					<SideBar collapsed={collapsed} toggle={toggle} />
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
