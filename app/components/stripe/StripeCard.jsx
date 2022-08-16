import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const StripeCard = () => {
	const stripeTestPromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);
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
