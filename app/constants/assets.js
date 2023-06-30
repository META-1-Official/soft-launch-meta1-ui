const bnbIcon = require('assets/explorer/BNB_new.png');
const eosIcon = require('assets/explorer/EOS_new.png');
const ltcIcon = require('assets/explorer/LTC_new.png');
const xlmIcon = require('assets/explorer/XLM_new.png');
const btcIcon = require('assets/explorer/BTC_new.png');
const ethIcon = require('assets/explorer/ETH_new.png');
const usdtIcon = require('assets/explorer/USDT_new.png');
const xrpIcon = require('assets/explorer/xrp.png');
const solIcon = require('assets/explorer/sol.png');
const trxIcon = require('assets/explorer/trx.png');
const dogeIcon = require('assets/explorer/doge.png');
const meta1Icon = require('assets/explorer/marketCap.png');
const xmrIcon = require('assets/explorer/xmr.png');
const adaIcon = require('assets/explorer/ada.png');
const busdIcon = require('assets/explorer/busd.png');

const bnbLightIcon = require('assets/explorer/bnb_light.png');
const eosLightIcon = require('assets/explorer/eos_light.png');
const ltcLightIcon = require('assets/explorer/ltc_light.png');
const xlmLightIcon = require('assets/explorer/xlm_light.png');
const btcLightIcon = require('assets/explorer/btc_light.png');
const ethLightIcon = require('assets/explorer/eth_light.png');
const usdtLightIcon = require('assets/explorer/usdt_light.png');
const xrpLightIcon = require('assets/explorer/xrp_light.png');
const solLightIcon = require('assets/explorer/sol_light.png');
const trxLightIcon = require('assets/explorer/trx_light.png');
const dogeLightIcon = require('assets/explorer/doge_light.png');
const meta1LightIcon = require('assets/explorer/meta1_light.png');
const xmrLightIcon = require('assets/explorer/xmr_light.png');
const adaLightIcon = require('assets/explorer/ada_light.png');
const busdLightIcon = require('assets/explorer/busd_light.png');

const getAssetIcon = function (symbol, theme = 'dark') {
	let icon;

	switch (symbol) {
		case 'BNB':
			icon = theme == 'dark' ? bnbIcon : bnbLightIcon;
			break;
		case 'BTC':
			icon = theme == 'dark' ? btcIcon : btcLightIcon;
			break;
		case 'ETH':
			icon = theme == 'dark' ? ethIcon : ethLightIcon;
			break;
		case 'EOS':
			icon = theme == 'dark' ? eosIcon : eosLightIcon;
			break;
		case 'XLM':
			icon = theme == 'dark' ? xlmIcon : xlmLightIcon;
			break;
		case 'LTC':
			icon = theme == 'dark' ? ltcIcon : ltcLightIcon;
			break;
		case 'META1':
			icon = theme == 'dark' ? meta1Icon : meta1LightIcon;
			break;
		case 'USDT':
			icon = theme == 'dark' ? usdtIcon : usdtLightIcon;
			break;
		case 'XRP':
			icon = theme == 'dark' ? xrpIcon : xrpLightIcon;
			break;
		case 'SOL':
			icon = theme == 'dark' ? solIcon : solLightIcon;
			break;
		case 'TRX':
			icon = theme == 'dark' ? trxIcon : trxLightIcon;
			break;
		case 'DOGE':
			icon = theme == 'dark' ? dogeIcon : dogeLightIcon;
			break;
		case 'XMR':
			icon = theme == 'dark' ? xmrIcon : xmrLightIcon;
			break;
		case 'ADA':
			icon = theme == 'dark' ? adaIcon : adaLightIcon;
			break;
		case 'BUSD':
			icon = theme == 'dark' ? busdIcon : busdLightIcon;
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
			assetFullName = 'Solana';
			break;
		case 'ADA':
			assetFullName = 'Tron';
			break;
		case 'BUSD':
			assetFullName = 'Dogecoin';
			break;
	}

	return assetFullName;
};

module.exports = {
	getAssetIcon,
	getAssetFullName,
};
