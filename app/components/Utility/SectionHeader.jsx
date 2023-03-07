import React from 'react';
import {FormattedRelative} from 'react-intl';
import {ChainStore} from 'meta1-vision-js';
import PropTypes from 'prop-types';
import {Tooltip} from 'antd';
import {useTheme} from '@emotion/react';

const SectionHeader = ({title}) => {
	const theme = useTheme();

	return (
		<div
			style={{
				background: `${theme.colors.background}`,
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
