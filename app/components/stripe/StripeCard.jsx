import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

import CheckoutForm from './CheckoutForm';
const PUBLIC_KEY =
	'pk_test_51LQOlaSJd95hxgt3TeryBYxRjTBpGCvPEyu9r9ewAAlqU2bJduADqy0Y63UJPt0UFsSY5aqFRwBbQYhLsMxCZN6Z00sOKxTsmL';
const StripeCard = () => {
	const stripeTestPromise = loadStripe(PUBLIC_KEY);
	return (
		<div>
			<Elements stripe={stripeTestPromise}>
				<span className="payment-method-title">SELECT PAYMENT METHOD</span>
				<CheckoutForm />
			</Elements>
		</div>
	);
};
export default StripeCard;
