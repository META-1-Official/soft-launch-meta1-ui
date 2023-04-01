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

	// .ant-select-selection-item {
	// 	color: #ffc000 !important;
	// }

	.ant-menu {
		color: ${theme.colors.themeOpositeColor};
		background: transparent !important;
		.ant-menu-item-selected,
		.ant-menu-item-selected: hover,
		.ant-menu-item-selected > a,
		.ant-menu-item-selected > a:hover {
			color: ${theme.colors.white} !important;
		}		
		.ant-menu-item-selected {
			background: ${theme.colors.menuActiveBackground} !important;
		}
		.ant-menu-item:hover {
			background-color: transparent !important;
			color: ${theme.colors.primaryColor} !important;
		}
		.ant-menu-item-disabled, .ant-menu-submenu-disabled {
			color: grey  !important;
			background: none;
			cursor: not-allowed;
		}		
	}
	.ant-menu-vertical {
		border-right: 1px solid ${theme.colors.borderColor};
	}
	.ant-menu-inline {
		border-right: 1px solid ${theme.colors.borderColor};
		.ant-menu-item:after {
			border-right: 3px solid ${theme.colors.primaryColor} !important;
		}
	}
	.ant-menu-horizontal {
		border-bottom: 0px;
		.ant-menu-item-selected,
		.ant-menu-item-selected: hover {
			background-color: transparent !important;
			color: ${theme.colors.primaryColor} !important;
		}
		.ant-menu-submenu {
			display: flex;
			align-items: center;
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
		background-color: ${theme.colors.settingBlockColor};
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
			background-color: ${theme.colors.backgroundColor}
		}
	}
	.ant-table {
		color: ${theme.colors.themeOpositeColor}; 
		border: 1px solid ${theme.colors.borderColor};
		background: ${theme.colors.background}
	}
	.ant-table-expanded-row-fixed {
		width: 100% !important;
		padding: 0 !important;
		margin: 0 !important;
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
		background: ${theme.colors.backgroundColor}; !important;
		.ant-table-cell {
			.ant-empty-description {
				color: ${theme.colors.themeOpositeColor};;
			}
		}
		td.ant-table-column-sort {
			background: transparent
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
		display: none;
	}

	.ant-table-placeholder {
		&:hover {
			td {
				background: unset !important;
			}
		}		

		.ant-table-cell {
			border: none;
		}
	}

	.ant-empty {
		display: flex;
		flex-direction: column;
		align-items: center;

		.ant-empty-image {
			width: 90px;
			height: 100px;
			
			svg {
				display: none;
			}
		}

		.ant-empty-description {
			font-size: 20px;
			margin-top: 20px;
		}
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
			border: none;
			background: transparent;
 		}
		.ant-input-wrapper {
			border: 1px solid ${theme.colors.inputBorderColor};
			border-radius: 3px;
		}
	}
	.ant-modal-header {
		background: transparent;
		border-bottom: 1px solid ${theme.colors.borderColor};

		.ant-modal-title {
			font-size: 20px;
			color: ${theme.colors.themeOpositeColor};
		}
	}
	.ant-modal-content {
		background: ${theme.colors.backgroundColor};
		border: 1px solid ${theme.colors.borderColor};
		border-radius: 8px;

		.ant-modal-close {
			top: -17px;
			right: -17px;
			background-color: red;
			border-radius: 50%;

			.ant-modal-close-x {
				color: ${theme.colors.themeOpositeColor};
				width: 30px;
				height: 30px;

				.ant-modal-close-icon {
					margin-top: 7px;
				}
			}
		}
	}
	.ant-modal-footer {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		border-top: none;

		button {
			width: 47%;
			height: 56px;
			border-radius: 4px;
			font-size: 18px;
			font-weight: 600;
			text-transform: uppercase;
			border: none;
		}

		button:nth-child(1) {
			background: #ffc000 !important;
			color: #330000 !imortant;
		}

		button:nth-child(2) {
			background: #FF2929 !important;
			color: white !important;
		}
	}
	.ant-input:focus, .ant-input-focused {
		border-color: ${theme.colors.borderColor};
		box-shadow: none;
	}

	.ant-input {
		background-color: transparent;
		color: #919293;
	}

	.ant-form-item-has-error :not(.ant-input-disabled):not(.ant-input-borderless).ant-input, .ant-form-item-has-error :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper, .ant-form-item-has-error :not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper, .ant-form-item-has-error :not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover, .ant-form-item-has-error :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:hover, .ant-form-item-has-error :not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper:hover {
		background: ${theme.colors.backgroundColor};
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
	
	.ant-select-arrow {
		color: ${theme.colors.themeOpositeColor};
	}

	.ant-drawer-content {
		background-color: ${theme.colors.backgroundColor};
		color: ${theme.colors.themeOpositeColor};

		.ant-drawer-header {
			border-bottom: 1px solid ${theme.colors.borderColor};

			.ant-drawer-header-title {
				svg {
					color: ${theme.colors.themeOpositeColor};
				}
				.ant-drawer-title {
					color: ${theme.colors.themeOpositeColor};
				}
			}
		};

		.ant-drawer-body {
			ul {
				border-right: transparent;

				li {
					text-align: center;
					background:  ${theme.colors.primaryColor};
					border-radius: 5px;

					span {
						color: black;
					}
				}
			}
			.ant-menu-item-selected {
				background:  ${theme.colors.primaryColor} !important;
				border: 1px solid black;
			}
			.ant-menu-item:hover {
				background-color:  ${theme.colors.primaryColor} !important;
				border: 1px solid black;
			}
		}
	}
`;
export default GlobalStyles;
