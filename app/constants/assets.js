const bnbIcon = require('assets/explorer/BNB_new.png');
const eosIcon = require('assets/explorer/EOS_new.png');
const ltcIcon = require('assets/explorer/LTC_new.png');
const xlmIcon = require('assets/explorer/XLM_new.png');
const btcIcon = require('assets/explorer/BTC_new.png');
const ethIcon = require('assets/explorer/ETH_new.png');
const usdtIcon = require('assets/explorer/USDT_new.png');
const meta1Icon = require('assets/explorer/marketCap.png');

const getAssetIcon = function (symbol) {
	let icon;

	switch (symbol) {
		case 'BNB':
			icon = bnbIcon;
			break;
		case 'BTC':
			icon = btcIcon;
			break;
		case 'ETH':
			icon = ethIcon;
			break;
		case 'EOS':
			icon = eosIcon;
			break;
		case 'XLM':
			icon = xlmIcon;
			break;
		case 'LTC':
			icon = ltcIcon;
			break;
		case 'META1':
			icon = meta1Icon;
			break;
		case 'USDT':
			icon = usdtIcon;
			break;
	}

	return icon;
};

const getAssetFullName = function (symbol) {
	var assetFullName;

	switch (symbol) {
		case 'BNB':
			assetFullName = 'Binance Coin';
			break;
		case 'BTC':
			assetFullName = 'Bitcoin';
			break;
		case 'ETH':
			assetFullName = 'Ethereum';
			break;
		case 'EOS':
			assetFullName = 'EOS';
			break;
		case 'XLM':
			assetFullName = 'Stellar';
			break;
		case 'LTC':
			assetFullName = 'Litecoin';
			break;
		case 'META1':
			assetFullName = 'META1';
			break;
		case 'USDT':
			assetFullName = 'Tether';
			break;
	}

	return assetFullName;
};

module.exports = {
	getAssetIcon,
	getAssetFullName,
};
