import React from 'react';
import utils from 'common/utils';

class PriceText extends React.Component {
	render() {
		let {price, preFormattedPrice, quote, base} = this.props;
		if (!price && !preFormattedPrice) return <span>0.0</span>;
		let formattedPrice = !!preFormattedPrice
			? preFormattedPrice
			: utils.price_to_text(price, quote, base);

		if (formattedPrice.full >= 1) {
			return (
				<span>
					&nbsp;&nbsp;
					<span className="price-integer">{formattedPrice.int}.</span>
					<span className="price-integer">{formattedPrice.dec ?? '0.0'}</span>
					<span className="price-decimal">
						{formattedPrice.trailing ?? '0.0'}
					</span>
				</span>
			);
		} else if (formattedPrice.full >= 0.1) {
			return (
				<span>
					&nbsp;&nbsp;
					<span className="price-decimal">{formattedPrice.int}.</span>
					<span className="price-integer">{formattedPrice.dec ?? '0.0'}</span>
					<span className="price-decimal">
						{formattedPrice.trailing ?? '0.0'}
					</span>
				</span>
			);
		} else {
			return (
				<span>
					&nbsp;&nbsp;
					<span className="price-decimal">{formattedPrice.int}.</span>
					<span className="price-integer">{formattedPrice.dec ?? '0.0'}</span>
					<span className="price-decimal">
						{formattedPrice.trailing ?? '0.0'}
					</span>
				</span>
			);
		}
	}
}

export default PriceText;
