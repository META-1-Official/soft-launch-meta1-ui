import {useTheme} from '@emotion/react';
import {Button} from 'antd';
import React from 'react';

interface IStyledButton {
	children: React.ReactNode;
}

const StyledButton = ({children, ...rest}: IStyledButton) => {
	const theme: any = useTheme();
	return (
		<Button
			{...rest}
			style={{
				backgroundColor: theme.colors.primaryColor,
				color: 'black',
				border: 'none',
				borderRadius: '5px',
			}}
		>
			{children}
		</Button>
	);
};

export default StyledButton;
