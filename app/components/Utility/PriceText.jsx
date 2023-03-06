import React from 'react';
import utils from 'common/utils';

class PriceText extends React.Component {
	render() {
		let {price, preFormattedPrice, quote, base} = this.props;
		if (!price && !preFormattedPrice) return <span>0.0</span>;
		let formattedPrice = !!preFormattedPrice
			? preFormattedPrice
			: utils.price_to_text(price, quote, base);

		let decimal = (formattedPrice.dec ?? '') + (formattedPrice.trailing ?? '');

		return (
			<span>
				&nbsp;&nbsp;
				<span className="price-decimal">{formattedPrice.int}.</span>
				<span className="price-integer">{decimal.substring(0, 6)}</span>
			</span>
		);
	}
}

export default PriceText;
