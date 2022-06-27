import React from 'react';
import {FormattedRelative} from 'react-intl';
import {ChainStore} from 'meta1-vision-js';
import PropTypes from 'prop-types';
import {Tooltip} from 'antd';

const SectionHeader = ({title}) => {
	return (
		<div
			style={{
				background: '#1C1F27',
				fontSize: '16px',
				height: '46px',
				width: '100%',
				display: 'flex',
				alignItems: 'center',
				paddingLeft: '10px',
				color: 'white',
			}}
		>
			{title}
		</div>
	);
};

export default SectionHeader;
