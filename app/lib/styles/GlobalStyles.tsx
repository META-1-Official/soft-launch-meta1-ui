import {css} from '@emotion/react';

const GlobalStyles = (theme: any) => css`
	body.darkTheme {
		.ant-menu-item-selected,
		.ant-menu-item-selected > a,
		.ant-menu-item-selected > a:hover {
			color: ${theme.colors.primaryColor};
		}
		.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
			background: ${theme.colors.menuActiveBackground};
		}
		.ant-menu-item:hover {
			color: ${theme.colors.primaryColor};
		}
		.ant-menu-inline .ant-menu-item:after {
			border-right: 3px solid ${theme.colors.primaryColor};
		}
	}
`;
export default GlobalStyles;
