import {css} from '@emotion/react';

const GlobalStyles = (theme: any) => css`
	body {
		.ant-typography {
			color: ${theme.colors.white};
		}
		.ant-tabs {
			color: ${theme.colors.white};
		}
		.ant-menu {
			color: ${theme.colors.white};
		}
		.ant-radio-wrapper {
			color: ${theme.colors.white};
		}
		.ant-form {
			color: ${theme.colors.white};
		}
		color: ${theme.colors.white} !important;

		// * {
		// 	color: white; !important;
		// }

		.ant-menu-item-selected,
		.ant-menu-item-selected > a,
		.ant-menu-item-selected > a:hover {
			color: ${theme.colors.primaryColor} !important;
		}
		.ant-menu .ant-menu-item-selected {
			background: ${theme.colors.menuActiveBackground} !important;
		}
		.ant-menu-item:hover {
			color: ${theme.colors.primaryColor} !important;
		}
		.ant-menu-inline .ant-menu-item:after {
			border-right: 3px solid ${theme.colors.primaryColor} !important;
		}
		.ant-menu-horizontal {
			background: ${theme.colors.sideBar} !important;
			.ant-menu-item-selected {
				border-bottom: 3px solid ${theme.colors.primaryColor} !important;
				background-color: transparent !important;
			}
			.ant-menu-item:hover {
				color: ${theme.colors.primaryColor} !important;
				border-bottom: 3px solid ${theme.colors.primaryColor} !important;
			}
		}
	}
`;
export default GlobalStyles;
