import React from 'react';
import Translate from 'react-translate-component';
import utils from 'common/utils';
import AssetName from '../Utility/AssetName';

class AccountOrderRowDescription extends React.Component {
	render() {
		let {base, quote, order} = this.props;
		const isBid = order.isBid();

		let quoteColor = !isBid
			? 'value negative quote-asset'
			: 'value positive quote-asset';
		let baseColor = isBid
			? 'value negative base-asset'
			: 'value positive base-asset';

		return (
			<Translate
				content={
					isBid ? 'exchange.buy_description' : 'exchange.sell_description'
				}
				baseAsset={
					<span className="base-asset">
						{utils.format_number(
							order[isBid ? 'amountToReceive' : 'amountForSale']().getAmount({
								real: true,
							}),
							base.get('precision'),
							false
						)}
					</span>
				}
				quoteAsset={
					<span className="quote-asset">
						{utils.format_number(
							order[isBid ? 'amountForSale' : 'amountToReceive']().getAmount({
								real: true,
							}),
							quote.get('precision'),
							false
						)}
					</span>
				}
				baseName={<span className="base-asset">{base.get('symbol')}</span>}
				quoteName={<span className="quote-asset">{quote.get('symbol')}</span>}
			/>
		);
	}
}

export default AccountOrderRowDescription;
