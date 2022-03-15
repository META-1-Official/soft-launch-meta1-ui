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
	.ant-tabs {
		.ant-tabs-nav::before {
			border-bottom: none;
		}
		.ant-tabs-tab:hover {
			color: ${theme.colors.primaryColor} !important;
		}
		.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
			color: ${theme.colors.primaryColor} !important;
		}
		.ant-tabs-tab.ant-tabs-tab-active {
			border-bottom: 2px solid ${theme.colors.primaryColor} !important;
			z-index: 2;
		}
	}
	.ant-table {
		color: white 
	}
	.ant-table-thead {
		th.ant-table-column-sort {
			background: ${theme.colors.tableColumnColor};
		}
		th.ant-table-column-has-sorters {
			&: hover{
				background: ${theme.colors.tableColumnHoverColor};
			}
		}
		tr > th {
			color: white;
			background: ${theme.colors.tableColumnColor};
			padding: 10px;
			border-bottom: none;
		}
	}

	.ant-table-tbody {
		background: ${theme.colors.black}; !important;
		.ant-table-cell {
			.ant-empty-description {
				color: white;
			}
		}
		td.ant-table-column-sort {
			background: ${theme.colors.tableColumnHoverColor};
		}
		tr.ant-table-row:hover > td {
			background: ${theme.colors.tableColumnHoverColor};
		}   
		tr > td.ant-table-cell-row-hover {
			background: ${theme.colors.tableColumnHoverColor};
		}
		tr > td {
			border-bottom: 1px solid ${theme.colors.borderColor};
		}
	} 
  	 
`;
export default GlobalStyles;
