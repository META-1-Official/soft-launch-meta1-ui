import React from 'react';
import PropTypes from 'prop-types';
import {Input} from 'antd';
import counterpart from 'counterpart';
import {FaSearch} from 'react-icons/fa';

const searchInput = React.createRef();
export default function SearchInput({
	onChange,
	value,
	placeholder,
	maxLength,
	style,
	className,
	name,
	autoComplete,
	onClear,
	type,
	...other
}) {
	if (onClear == undefined) {
		// if onClear=null, then it won't be rendered
		onClear = () => {
			onChange({
				target: {value: ''},
			});
			searchInput.current.focus();
		};
	}

	return (
		<Input
			ref={searchInput}
			bordered={false}
			autoComplete={autoComplete}
			style={style}
			type={type}
			className={className + ' search-input'}
			placeholder={placeholder}
			maxLength={maxLength}
			name={name}
			value={value}
			onChange={onChange}
			css={(theme) => ({
				backgroundColor: theme.colors.inputBackgroundColor,
				borderRadius: '4px',
			})}
			addonAfter={
				<FaSearch
					css={(theme) => ({
						color: theme.colors.primaryColor,
					})}
				/>
			}
			{...other}
		/>
	);
}

SearchInput.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string, // can be undefined when no user input is present
	placeholder: PropTypes.string,
	style: PropTypes.object,
	className: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string,
	autoComplete: PropTypes.string,
	maxLength: PropTypes.number,
	onClear: PropTypes.func,
};

SearchInput.defaultProps = {
	placeholder: counterpart.translate('exchange.filter'),
	style: {width: '200px'},
	className: '',
	type: 'text',
	name: 'focus',
	autoComplete: 'off',
	maxLength: 16,
	onClear: undefined,
};
