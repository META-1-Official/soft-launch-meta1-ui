import {useTheme} from '@emotion/react';
import {Button} from 'antd';
import React from 'react';

interface IStyledButton {
	children: React.ReactNode;
	shape: 'circle' | 'round' | 'default' | undefined;
	buttonType: 'primary' | 'white' | 'transparent' | 'red' | 'green';
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
	} else if (buttonType === 'white') {
		backgroundColor = 'transparent';
		border = `1px solid ${theme.colors.buttonWhiteColor}`;
		color = theme.colors.buttonWhiteColor;
	} else if (buttonType === 'transparent') {
		backgroundColor = 'transparent';
		border = `1px solid ${theme.colors.primaryColor}`;
		color = theme.colors.primaryColor;
	} else if (buttonType === 'red') {
		backgroundColor = theme.colors.buttonRedColor;
		border = `1px solid ${theme.colors.buttonRedColor}`;
		color = 'white';
	} else if (buttonType === 'green') {
		backgroundColor = theme.colors.buttonGreenColor;
		border = `1px solid ${theme.colors.buttonGreenColor}`;
		color = 'white';
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
