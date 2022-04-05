import {css} from '@emotion/react';

const GlobalStyles = (theme: any) => css`
	.content-wrapper {
		border-top: 1px solid ${theme.colors.borderColor};
	}
	.ant-typography {
		//	color: ${theme.colors.themeOpositeColor};
	}
	

	.ant-radio-wrapper {
		color: ${theme.colors.themeOpositeColor};
	}
	.ant-form {
		color: ${theme.colors.themeOpositeColor};
	}

	.ant-menu {
		color: ${theme.colors.themeOpositeColor};
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
		.ant-menu-item-disabled, .ant-menu-submenu-disabled {
			color: grey  !important;
			background: none;
			cursor: not-allowed;
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
		color: ${theme.colors.themeOpositeColor};;
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
	.ant-tabs-card {
		.ant-tabs-tab-btn {
			color: ${theme.colors.tabCardNavColor}
		}
		.ant-tabs-nav .ant-tabs-tab, .ant-tabs-card > div > .ant-tabs-nav .ant-tabs-tab {
			background: transparent;
			border: none;
		}
		.ant-tabs-tab.ant-tabs-tab-active {
			border-top: 2px solid ${theme.colors.primaryColor} !important;
			z-index: 2;
			border-bottom: none !important;
			background-color: ${theme.colors.black}
		}
	}
	.ant-table {
		color: ${theme.colors.themeOpositeColor}; 
	}
	.ant-table-thead {
		th.ant-table-column-sort {
			background: ${theme.colors.tableColumnColor};
		}
		th.ant-table-column-has-sorters {
			&:hover{
				background: ${theme.colors.tableColumnHoverColor};
			}
		}
		tr > th {
			color: ${theme.colors.themeOpositeColor};;
			background: ${theme.colors.tableColumnColor};
			padding: 10px;
			border-bottom: none;
		}
	}

	.ant-table-tbody {
		background: ${theme.colors.black}; !important;
		.ant-table-cell {
			.ant-empty-description {
				color: ${theme.colors.themeOpositeColor};;
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
	.ant-table-footer {
		color: ${theme.colors.themeOpositeColor};  
    background: ${theme.colors.tableColumnColor};
	}
	
	.ant-pagination-total-text {
		color: ${theme.colors.themeOpositeColor};  
	}
	.ant-pagination-item {
		background: transparent; 
		border:none;
		line-height: 26px;
		min-width: 26px;
    height: 26px;
	}
	.ant-pagination-prev .ant-pagination-item-link, .ant-pagination-next .ant-pagination-item-link {
		background-color: transparent;
		color: ${theme.colors.themeOpositeColor};  
		border: none;
	}
 	.ant-pagination-item-active {
		background-color: ${theme.colors.primaryColor};
	  a {	color: ${theme.colors.tableActivePagination}; } 
		&:hover{
			a {	color: ${theme.colors.tableActivePagination}; } 
		}
		border: none;
	}
  
	.ant-form-item-label > label {
		color: ${theme.colors.themeOpositeColor};
	}
	.ant-radio-checked .ant-radio-inner{
		border-color: ${theme.colors.primaryColor} !important ;
	}
	
	.ant-radio-checked .ant-radio-inner:after{
		background-color: ${theme.colors.primaryColor};
	}
	
	.ant-radio:hover .ant-radio-inner {
		border-color: ${theme.colors.primaryColor} ;
	}

	.ant-spin-dot-item {
		background-color: ${theme.colors.primaryColor} ;
	}
	.search-input{
		.ant-input-affix-wrapper {
			background-color: ${theme.colors.inputBackgroundColor};
			border: none; 
			color:${theme.colors.inputTextColor};
			border-radius: 6px;
 		}
		.ant-input-affix-wrapper > input.ant-input {
			background-color: ${theme.colors.inputBackgroundColor};
			border: none; 
			color:${theme.colors.inputTextColor};
			border-radius: 6px;
		}
		.ant-input-group-addon {
			background-color: ${theme.colors.inputBackgroundColor};
			border: none;
 		}
	}
	.ant-modal-content {
		background: ${theme.colors.black};
		border: 1px solid ${theme.colors.borderColor};
		border-radius: 8px;
		padding: 1rem;

		.ant-modal-close-x {
			color: ${theme.colors.themeOpositeColor};
		}
	}
	.ant-modal-footer {
		border-top: none;
	}
	.ant-input:focus, .ant-input-focused {
		border-color: ${theme.colors.borderColor};
		box-shadow: none;
	}

	.ant-form-item-has-error :not(.ant-input-disabled):not(.ant-input-borderless).ant-input, .ant-form-item-has-error :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper, .ant-form-item-has-error :not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper, .ant-form-item-has-error :not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover, .ant-form-item-has-error :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:hover, .ant-form-item-has-error :not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper:hover {
		background: ${theme.colors.black};
	}
	.ant-select-item-option-content {
		color: ${theme.colors.inputTextColor};
		&: hover{
			background: ${theme.colors.black}  ;
		}
	}
	.ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector {
		background-color: ${theme.colors.dropdownBackgroundColor};
		color: ${theme.colors.themeOpositeColor};
		border: 1px solid ${theme.colors.borderColor};
	}
	.ant-select:not(.ant-select-customize-input) .ant-select-selector {
		background-color: ${theme.colors.dropdownBackgroundColor};
		color: ${theme.colors.themeOpositeColor};
	 	border: 1px solid ${theme.colors.borderColor};
	}
	.ant-select-item-option-active:not(.ant-select-item-option-disabled) {
		background: ${theme.colors.black} ;   
	}

	.ant-select-arrow {
		color: ${theme.colors.themeOpositeColor};
	}
	
  	 
`;
export default GlobalStyles;
