import {useTheme} from '@emotion/react';
import {Button} from 'antd';
import React from 'react';

interface IStyledButton {
	children: React.ReactNode;
	shape: 'circle' | 'round' | 'default' | undefined;
	gray: boolean;
	buttonType: 'primary' | 'gray' | 'transparent';
}

const StyledButton = ({
	children,
	shape,
	buttonType,
	...rest
}: IStyledButton) => {
	const theme: any = useTheme();
	let backgroundColor = theme.colors.primaryColor;
	let border = theme.colors.primaryColor;
	let color = 'black';
	if (buttonType === 'primary') {
		backgroundColor = theme.colors.primaryColor;
		border = `1px solid ${theme.colors.primaryColor}`;
		color = 'black';
	} else if (buttonType === 'gray') {
		backgroundColor = 'transparent';
		border = `1px solid ${theme.colors.buttonGrayColor}`;
		color = theme.colors.buttonGrayColor;
	} else if (buttonType === 'transparent') {
		backgroundColor = 'transparent';
		border = `1px solid ${theme.colors.primaryColor}`;
		color = theme.colors.primaryColor;
	}

	return (
		<Button
			{...rest}
			shape={shape}
			css={{
				'&&&&': {
					backgroundColor: backgroundColor,
					borderRadius: !shape ? '4px' : '',
					border: border,
					color: color,
				},
			}}
		>
			{children}
		</Button>
	);
};

export default StyledButton;
