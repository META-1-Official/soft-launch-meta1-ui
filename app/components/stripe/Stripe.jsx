import React from 'react';
import StripeCard from './StripeCard';
import './stripe.scss';
class Stripe extends React.Component {
	render() {
		return (
			<div className="custom-stripe">
				<h3>Pay $1</h3>
				<StripeCard />
			</div>
		);
	}
}

export default Stripe;
