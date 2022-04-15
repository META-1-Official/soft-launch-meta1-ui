import alt from 'alt-instance';
import {
	fetchCoins,
	fetchTradingPairs,
	fetchCoinsSimple,
	getBackedCoins,
	getActiveWallets,
} from 'common/gatewayMethods';
import {getOnChainConfig} from '../lib/chain/onChainConfig';
import account_constants from 'chain/account_constants.js';

let inProgress = {};

const GATEWAY_TIMEOUT = 10000;

const onGatewayTimeout = (dispatch, gateway) => {
	dispatch({down: gateway});
};

class GatewayActions {
	fetchCoins({
		backer = 'META1',
		url = undefined,
		urlBridge = undefined,
		urlWallets = undefined,
	} = {}) {
		if (!inProgress['fetchCoins_' + backer]) {
			inProgress['fetchCoins_' + backer] = true;
			return (dispatch) => {
				let fetchCoinsTimeout = setTimeout(
					onGatewayTimeout.bind(null, dispatch, backer),
					GATEWAY_TIMEOUT
				);
				Promise.all([
					fetchCoins(url),
					fetchTradingPairs(urlBridge),
					getActiveWallets(urlWallets),
				])
					.then((result) => {
						clearTimeout(fetchCoinsTimeout);
						delete inProgress['fetchCoins_' + backer];
						let [coins, tradingPairs, wallets] = result;
						let backedCoins = getBackedCoins({
							allCoins: coins,
							tradingPairs: tradingPairs,
							backer: backer,
						}).filter((a) => !!a.walletType);
						backedCoins.forEach((a) => {
							a.isAvailable = wallets.indexOf(a.walletType) !== -1;
						});
						dispatch({
							coins,
							backedCoins,
							backer,
						});
					})
					.catch(() => {
						clearTimeout(fetchCoinsTimeout);
						delete inProgress['fetchCoins_' + backer];
						dispatch({
							coins: [],
							backedCoins: [],
							backer,
						});
					});
			};
		} else {
			return {};
		}
	}

	fetchCoinsSimple({backer = 'RUDEX', url = undefined} = {}) {
		if (!inProgress['fetchCoinsSimple_' + backer]) {
			inProgress['fetchCoinsSimple_' + backer] = true;
			return (dispatch) => {
				if (backer === 'META1') {
					dispatch({
						coins: this.getMETA1Simple(),
						backer,
					});
					return;
				}
				let fetchCoinsTimeout = setTimeout(
					onGatewayTimeout.bind(null, dispatch, backer),
					GATEWAY_TIMEOUT
				);
				fetchCoinsSimple(url)
					.then((coins) => {
						clearTimeout(fetchCoinsTimeout);
						delete inProgress['fetchCoinsSimple_' + backer];
						dispatch({
							coins: coins,
							backer,
						});
					})
					.catch((err) => {
						clearTimeout(fetchCoinsTimeout);
						delete inProgress['fetchCoinsSimple_' + backer];

						dispatch({
							coins: [],
							backer,
						});
					});
			};
		} else {
			return {};
		}
	}

	getMETA1Simple() {
		return [
			{
				name: 'BTC',
				description: 'Bitcoin',
				backingCoin: 'BTC',
				symbol: 'BTC',
				depositAllowed: true,
				withdrawalAllowed: true,
				memoSupport: false,
				precision: 8,
				issuer: account_constants.issuer_name,
				issuerId: account_constants.issuer_name,
				assetId: '1.3.2',
				walletType: 'btc',
				minAmount: 100000,
				withdrawFee: 50000,
				depositFee: 0,
				coinPriora: 0,
				gateFee: '0.0005',
				type: 'coin',
			},
			{
				name: 'LTC',
				description: 'Litecoin',
				backingCoin: 'LTC',
				symbol: 'LTC',
				depositAllowed: true,
				withdrawalAllowed: true,
				memoSupport: false,
				precision: 8,
				issuer: account_constants.issuer_name,
				issuerId: account_constants.issuer_name,
				assetId: '1.3.4',
				walletType: 'ltc',
				minAmount: 200000,
				withdrawFee: 100000,
				depositFee: 0,
				coinPriora: 0,
				gateFee: '0.0001',
				type: 'coin',
			},
			{
				name: 'ETH',
				description: 'ETH',
				backingCoin: 'ETH',
				symbol: 'ETH',
				depositAllowed: true,
				withdrawalAllowed: true,
				memoSupport: false,
				precision: 7,
				issuer: account_constants.issuer_name,
				issuerId: account_constants.issuer_name,
				assetId: '1.3.3',
				walletType: 'eth',
				minAmount: 200000,
				withdrawFee: 100000,
				depositFee: 0,
				coinPriora: 0,
				gateFee: '0.01',
				type: 'coin',
			},
			{
				name: 'USDT',
				description: 'Tether USD',
				backingCoin: 'USDT',
				symbol: 'USDT',
				depositAllowed: true,
				withdrawalAllowed: true,
				memoSupport: false,
				precision: 6,
				issuer: account_constants.issuer_name,
				issuerId: account_constants.issuer_name,
				assetId: '1.3.1',
				walletType: 'eth',
				minAmount: 50000000,
				withdrawFee: 35000000,
				depositFee: 0,
				coinPriora: 0,
				gateFee: '35',
				type: 'token',
			},
		];
	}

	fetchPairs() {
		if (!inProgress['fetchTradingPairs']) {
			inProgress['fetchTradingPairs'] = true;
			return (dispatch) => {
				let fetchCoinsTimeout = setTimeout(
					onGatewayTimeout.bind(null, dispatch, 'TRADE'),
					GATEWAY_TIMEOUT
				);
				Promise.all([
					fetchCoins(blockTradesAPIs.BASE + blockTradesAPIs.COINS_LIST),
					fetchTradingPairs(
						blockTradesAPIs.BASE + blockTradesAPIs.TRADING_PAIRS
					),
					getActiveWallets(
						blockTradesAPIs.BASE + blockTradesAPIs.ACTIVE_WALLETS
					),
				])
					.then((result) => {
						clearTimeout(fetchCoinsTimeout);
						delete inProgress['fetchTradingPairs'];
						let [coins, bridgeCoins, wallets] = result;
						dispatch({
							coins,
							bridgeCoins,
							wallets,
						});
					})
					.catch(() => {
						delete inProgress['fetchTradingPairs'];
						dispatch({
							coins: [],
							bridgeCoins: [],
							wallets: [],
						});
					});
			};
		} else {
			return {};
		}
	}

	temporarilyDisable({backer}) {
		return (dispatch) => {
			dispatch({backer});
		};
	}

	loadOnChainGatewayConfig() {
		return (dispatch) => {
			// fixme: access to onchain config should be cut out into a separate store or similar, this is abusing gatewaystore for a quick fix
			getOnChainConfig().then((config) => dispatch(config));
		};
	}
}

export default alt.createActions(GatewayActions);
