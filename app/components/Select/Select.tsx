import {useTheme} from '@emotion/react';
import {Select} from 'antd';
import React from 'react';

interface IStyledSelect {
	children: React.ReactNode;
}

const StyledSelect = ({children, ...rest}: IStyledSelect) => {
	const theme: any = useTheme();
	return (
		<Select
			{...rest}
			dropdownStyle={{
				backgroundColor: theme.colors.dropdownOptionsColor,
			}}
			css={{
				'&&& .ant-select-selector': {
					backgroundColor: theme.colors.inputBackgroundColor,
					color: theme.colors.inputTextColor,
					borderRadius: '6px',
					border: `1px solid #1c1f27`,
				},
				'& .ant-select-arrow': {
					color: theme.colors.primaryColor,
				},
				'& .ant-select-item-option-content': {
					color: theme.colors.primaryColor,
				},
			}}
		>
			{children}
		</Select>
	);
};

export default StyledSelect;
