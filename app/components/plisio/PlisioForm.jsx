import React from 'react';
import './plisio.scss';
import {Select} from 'antd';
const {Option} = Select;
class PlisioForm extends React.Component {
	constructor(props) {
		super();
		this.state = {
			currencyType: 'Cryptocurrency',
			currency: 'Bitcoin',
			amount: 1,
			output: null,
		};
		this.handleChangeCurrencyType = this.handleChangeCurrencyType.bind(this);
		this.handleChangeCurrency = this.handleChangeCurrency.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
	}
	handleChangeCurrencyType(value) {
		console.log('selected', value);
		if (this.state.output) {
			this.setState({output: null});
		}
		this.setState({
			currencyType: value,
		});
	}
	handleChangeCurrency(value) {
		console.log('selected', value);
		if (this.state.output) {
			this.setState({output: null});
		}
		this.setState({
			currency: value,
		});
	}
	async submitHandler() {
		try {
			const response = await fetch('http://localhost:8000/plisioRequest', {
				method: 'POST',
				body: JSON.stringify({
					amount: this.state.amount,
					username: 'abc',
					email: 'test@test.com',
					displayCurrency: 'BTC',
					tradeCurrency: 'USD',
					chooseCurrency: ['BTC', 'BNB'],
					orderName: 'c4f1b907-3b9a-42e4-8c3c-d446b6cf4242',
					orderNum: '7ced30ad-ccb8-4737-a84f-b3b51c52d445',
					description: 'testing',
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const result = await response.json();
			this.setState({output: result.body});
			console.log('result', result);
		} catch (err) {
			console.log('result errr', err);
		}
	}
	render() {
		return (
			<div className="custom-plisio">
				<h3>Pay $1</h3>
				<span className="payment-method-title">SELECT PAYMENT METHOD</span>
				<Select
					defaultValue={this.state.currencyType}
					className="currency-type-select"
					onChange={this.handleChangeCurrencyType}
				>
					<Option value="Cryptocurrency">Cryptocurrency</Option>
				</Select>
				<button className="pay-btn" onClick={this.submitHandler}>
					Pay With
				</button>
				<Select
					defaultValue={this.state.currency}
					className="currency-select"
					onChange={this.handleChangeCurrency}
				>
					<Option value="Bitcoin">Bitcoin</Option>
					<Option value="Eth">Eth</Option>
				</Select>

				{this.state.output?.data?.invoice_url && (
					<a
						className="output"
						href={this.state.output.data.invoice_url}
						target="_blank"
						rel="noopener noreferrer"
					>
						Pay by plisio. click here
					</a>
				)}
			</div>
		);
	}
}

export default PlisioForm;
