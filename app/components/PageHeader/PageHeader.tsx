import React from 'react';
import {Typography} from 'antd';

const {Title} = Typography;

interface IPageHeader {
	title: string;
	level: 5 | 1 | 2 | 3 | 4 | undefined;
	showDivider: boolean;
	actionButtons: any;
}
const PageHeader = ({
	title,
	level,
	showDivider,
	actionButtons,
	...props
}: IPageHeader) => {
	return (
		<div
			css={(theme) => ({
				padding: `1rem 2rem`,
				borderBottom: showDivider
					? `1px solid ${theme.colors.borderColor}`
					: 'none',
				color: theme.colors.themeOppositeColor,
			})}
		>
			<div
				css={(theme) => ({
					display: 'flex',
					justifyContent: 'space-between',
					[`@media (max-width: ${theme.sizes.sm})`]: {
						flexDirection: 'column',
					},
				})}
			>
				<Title css={{margin: '0px !important'}} level={level} {...props}>
					{title}
				</Title>
				<div>{actionButtons}</div>
			</div>
		</div>
	);
};

export default PageHeader;
