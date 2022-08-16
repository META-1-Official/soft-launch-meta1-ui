import React, {useEffect, useState} from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {Select} from 'antd';

const inputStyle = {
	iconColor: '#c4f0ff',
	color: '#fff',
	fontWeight: '500',
	fontSize: '24px',
	fontSmoothing: 'antialiased',
	':-webkit-autofill': {
		color: '#fff',
	},
	'::placeholder': {
		color: '#ffc000',
	},
};
const customStripeClasses = {
	base: 'app-form-default',
};
const CheckoutForm = () => {
	const stripe = useStripe();
	const [enterAmount, setEnterAmount] = useState(1);
	const elements = useElements();
	const [errorMsg, setErrorMsg] = useState('');
	const [isAmountTouched, setIsAmountTouched] = useState(false);
	const [fiatCurrency, setFiatCurrency] = useState('USD');
	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!enterAmount) {
			setIsAmountTouched(true);
			return;
		}
		const {error, paymentMethod} = await stripe.createPaymentMethod({
			type: 'card',
			card: elements.getElement(CardElement),
		});

		if (!error) {
			setErrorMsg('');
			console.log('token generated!', paymentMethod);
		} else {
			setErrorMsg(error.message);
		}
	};

	const handleChange = (value) => {
		setFiatCurrency(value);
	};

	return (
		<form onSubmit={handleSubmit} className="custom-form-stripe">
			<Select
				defaultValue={fiatCurrency}
				className="fiat-currency-select"
				onChange={handleChange}
			>
				<Option value="USD">USD</Option>
				<Option value="JPY">JPY</Option>
				<Option value="EUR">EUR</Option>
				<Option value="GBP">GBP</Option>
				<Option value="AUD">AUD</Option>
			</Select>
			<CardElement
				options={{
					style: {
						base: inputStyle,
					},
				}}
			/>
			{errorMsg && <p className="error-msg">{errorMsg}</p>}
			<button className="pay-btn">$1 Pay Now</button>
		</form>
	);
};
export default CheckoutForm;
