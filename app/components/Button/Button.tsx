import {useTheme} from '@emotion/react';
import {Button} from 'antd';
import React from 'react';

interface IStyledButton {
	children: React.ReactNode;
	transparent?: boolean;
	shape: 'circle' | 'round' | 'default' | undefined;
}

const StyledButton = ({
	children,
	transparent,
	shape,
	...rest
}: IStyledButton) => {
	const theme: any = useTheme();
	return (
		<Button
			{...rest}
			shape={shape}
			css={{
				'&&&&': {
					backgroundColor: transparent
						? 'transparent'
						: theme.colors.primaryColor,
					color: transparent ? theme.colors.primaryColor : 'black',
					borderRadius: !shape ? '4px' : '',
					border: `1px solid ${theme.colors.primaryColor}`,
				},
			}}
		>
			{children}
		</Button>
	);
};

export default StyledButton;
