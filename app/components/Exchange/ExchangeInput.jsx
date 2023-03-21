import React from 'react';
import {Input} from 'antd';
import {DecimalChecker} from '../Utility/DecimalChecker';

class ExchangeInput extends DecimalChecker {
	constructor() {
		super();
	}

	UNSAFE_componentWillReceiveProps(np) {
		if (this.props.value && !np.value) {
			this.refs.input.value = '';
		}
	}

	render() {
		var {...other} = this.props;
		return (
			<Input
				ref="input"
				type="text"
				{...other}
				onPaste={this.props.onPaste || this.onPaste.bind(this)}
				onKeyPress={this.onKeyPress.bind(this)}
				disabled={this.props.disabled}
			/>
		);
	}
}

export default ExchangeInput;
