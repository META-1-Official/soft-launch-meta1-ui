const bnbIcon = require('assets/explorer/bnb.png');
const eosIcon = require('assets/explorer/eos.png');
const ltcIcon = require('assets/explorer/ltc.png');
const xlmIcon = require('assets/explorer/xlm.png');
const btcIcon = require('assets/explorer/btc.png');
const ethIcon = require('assets/explorer/eth.png');
const usdtIcon = require('assets/explorer/usdt.png');
const xrpIcon = require('assets/explorer/xrp.png');
const solIcon = require('assets/explorer/sol.png');
const trxIcon = require('assets/explorer/trx.png');
const dogeIcon = require('assets/explorer/doge.png');
const meta1Icon = require('assets/explorer/meta.png');
const xmrIcon = require('assets/explorer/xmr.png');
const adaIcon = require('assets/explorer/ada.png');
const busdIcon = require('assets/explorer/busd.png');

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
		case 'XRP':
			icon = xrpIcon;
			break;
		case 'SOL':
			icon = solIcon;
			break;
		case 'TRX':
			icon = trxIcon;
			break;
		case 'DOGE':
			icon = dogeIcon;
			break;
		case 'XMR':
			icon = xmrIcon;
			break;
		case 'ADA':
			icon = adaIcon;
			break;
		case 'BUSD':
			icon = busdIcon;
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
		case 'XRP':
			assetFullName = 'Ripple';
			break;
		case 'SOL':
			assetFullName = 'Solana';
			break;
		case 'TRX':
			assetFullName = 'Tron';
			break;
		case 'DOGE':
			assetFullName = 'Dogecoin';
			break;
		case 'XMR':
			assetFullName = 'Monero';
			break;
		case 'ADA':
			assetFullName = 'Cardano';
			break;
		case 'BUSD':
			assetFullName = 'Binance USD';
			break;
	}

	return assetFullName;
};

module.exports = {
	getAssetIcon,
	getAssetFullName,
};
