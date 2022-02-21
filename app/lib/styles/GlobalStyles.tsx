import {css} from '@emotion/react';

const GlobalStyles = (theme: any) => css`
	.content-wrapper {
		border-top: 1px solid ${theme.colors.borderColor};
	}
	.ant-typography {
		//	color: ${theme.colors.white};
	}
	.ant-tabs {
		color: ${theme.colors.white};
	}

	.ant-radio-wrapper {
		color: ${theme.colors.white};
	}
	.ant-form {
		color: ${theme.colors.white};
	}

	.ant-menu {
		color: ${theme.colors.white};
		background: ${theme.colors.sideBar} !important;
		.ant-menu-item-selected,
		.ant-menu-item-selected > a,
		.ant-menu-item-selected > a:hover {
			color: ${theme.colors.primaryColor} !important;
		}
		.ant-menu-item-selected {
			background: ${theme.colors.menuActiveBackground} !important;
		}
		.ant-menu-item:hover {
			color: ${theme.colors.primaryColor} !important;
		}
	}
	.ant-menu-inline {
		border-right: 1px solid ${theme.colors.borderColor};
		.ant-menu-item:after {
			border-right: 3px solid ${theme.colors.primaryColor} !important;
		}
	}
	.ant-menu-horizontal {
		border-bottom: 0px;
		.ant-menu-item-selected {
			background-color: transparent !important;
		}
	}
	.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover::after,
	.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover::after,
	.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active::after,
	.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-active::after,
	.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-open::after,
	.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open::after,
	.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected::after,
	.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected::after {
		border-bottom: 3px solid ${theme.colors.primaryColor} !important;
	}
	.ant-switch {
		background-color: #0e1013;
		height: 15px;
		margin-top: 4px;
	}
	.ant-switch-checked {
		background-color: #b38804;
	}
	.ant-switch-handle::before {
		background-color: ${theme.colors.primaryColor};
	}
	.ant-switch-handle {
		top: -2px;
		width: 19px;
		height: 19px;
	}
`;
export default GlobalStyles;
