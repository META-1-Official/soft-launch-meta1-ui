import React from 'react';
import counterpart from 'counterpart';
import Clipboard from 'react-clipboard.js';
import Icon from '../Icon/Icon';
import {Tooltip} from 'antd';
import {toast} from 'react-toastify';

const CopyButton = ({
	className = 'button',
	text = '',
	tip = 'tooltip.copy_tip',
	dataPlace = 'right',
	buttonIcon = 'clippy',
	buttonText = '',
	width = '',
}) => {
	const onSuccess = () => {
		toast('successfully copied');
	};

	return (
		<Tooltip placement={dataPlace} title={counterpart.translate(tip)}>
			<div>
				<Clipboard
					data-clipboard-text={text}
					className={className}
					onSuccess={onSuccess}
					style={{backgroundColor: '#ffc000', width: width ?? 'unset'}}
				>
					{!buttonText ? (
						<Icon name={buttonIcon} title={'icons.clippy.copy'} />
					) : (
						buttonText
					)}
				</Clipboard>
			</div>
		</Tooltip>
	);
};

export default CopyButton;
