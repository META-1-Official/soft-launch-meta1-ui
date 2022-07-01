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
			background-image: url('data:image/png;base64,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');

			svg {
				display: none;
			}
		}

		.ant-empty-description {
			color:rgba(255, 255, 255, 0.5) !important;
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
			background-color: ${theme.colors.inputBackgroundColor};
			border: none;
 		}
	}
	.ant-modal-header {
		background: transparent;
		border-bottom: 1px solid #1C1F27;

		.ant-modal-title {
			font-size: 20px;
			color: white;
		}
	}
	.ant-modal-content {
		background: ${theme.colors.black};
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
		background: ${theme.colors.black};
	}
	.ant-select-item-option-content {
		color: ${theme.colors.inputTextColor};
		&:hover{
			background: ${theme.colors.black};
		}
	}

  .ant-select-item-option-selected.customOption {
    background: white !important;
    & > .ant-select-item-option-content {
      background: white !important
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
