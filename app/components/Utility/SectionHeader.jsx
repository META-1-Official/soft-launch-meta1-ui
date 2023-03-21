import React from 'react';
import {useTheme} from '@emotion/react';

const SectionHeader = ({title}) => {
	const theme = useTheme();

	return (
		<div
			style={{
				background: `${theme.colors.blockHeaderColor}`,
				fontSize: '16px',
				height: '46px',
				width: '100%',
				display: 'flex',
				alignItems: 'center',
				paddingLeft: '10px',
				color: `${theme.colors.buttonWhiteColor}`,
			}}
		>
			{title}
		</div>
	);
};

export default SectionHeader;
