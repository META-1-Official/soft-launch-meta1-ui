import React from 'react';
import {Typography} from 'antd';

const {Title} = Typography;

interface IPageHeader {
	title: string;
}
const PageHeader = ({title, ...props}: IPageHeader) => {
	return (
		<div
			css={(theme) => ({
				padding: `1rem 2rem`,
				borderBottom: `1px solid ${theme.colors.borderColor}`,
			})}
		>
			<Title css={{margin: '0px !important'}} level={2} {...props}>
				{title}
			</Title>
		</div>
	);
};

export default PageHeader;
