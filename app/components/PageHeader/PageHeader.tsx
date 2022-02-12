import React from 'react';
import {Divider, Typography} from 'antd';

const {Title} = Typography;

interface IPageHeader {
	title: string;
}
const PageHeader = ({title, ...props}: IPageHeader) => {
	return (
		<>
			<div css={{marginLeft: '1rem'}}>
				<Title {...props}>{title}</Title>
			</div>
			<Divider css={{'&': {marginBottom: '1px'}}} />
		</>
	);
};

export default PageHeader;
