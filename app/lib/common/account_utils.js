import {ChainStore} from 'meta1-vision-js';
import utils from './utils';
import MarketUtils from './market_utils';
import MarketsStore from 'stores/MarketsStore';
import counterpart from 'counterpart';
import {estimateFee} from './trxHelper';
import {
	scamAccountsPolo,
	scamAccountsBittrex,
	scamAccountsOther,
} from './scamAccounts';

export default class AccountUtils {
	/**
	 *  takes asset as immutable object or id, fee as integer amount
	 *  @return undefined if asset is undefined
	 *  @return false if fee pool has insufficient balance
	 *  @return true if the fee pool has sufficient balance
	 */
	static checkFeePool(asset, fee) {
		asset = asset.toJS ? asset : ChainStore.getAsset(asset);
		if (!asset) return undefined;

		const dynamicObject = ChainStore.getObject(
			asset.get('dynamic_asset_data_id')
		);
		if (!dynamicObject) return undefined;

		let feePool = parseInt(dynamicObject.get('fee_pool'), 10);

		return feePool >= fee;
	}

	static getPossibleFees(account, operation) {
		let core = ChainStore.getAsset(process.env.META1_ASSET_ID);
		account =
			!account || account.toJS ? account : ChainStore.getAccount(account);

		if (!account || !core) {
			return {
				assets: [process.env.META1_ASSET_ID],
				fees: {[process.env.META1_ASSET_ID]: 0},
			};
		}

		let assets = [],
			fees = {};

		let globalObject = ChainStore.getObject(process.env.GLOBAL_PROPERTY);

		let fee = estimateFee(operation, null, globalObject);

		let accountBalances = account.get('balances');
		if (!accountBalances) {
			return {
				assets: [process.env.META1_ASSET_ID],
				fees: {[process.env.META1_ASSET_ID]: 0},
			};
		}

		accountBalances.forEach((balanceID, assetID) => {
			let balanceObject = ChainStore.getObject(balanceID);
			let balance = balanceObject
				? parseInt(balanceObject.get('balance'), 10)
				: 0;
			let hasBalance = false,
				eqFee;

			if (assetID === process.env.META1_ASSET_ID && balance >= fee) {
				hasBalance = true;
			} else if (balance && ChainStore.getAsset(assetID)) {
				let asset = ChainStore.getAsset(assetID);
				let price = utils.convertPrice(
					core,
					asset.getIn(['options', 'core_exchange_rate']).toJS(),
					null,
					asset.get('id')
				);

				eqFee = parseInt(utils.convertValue(price, fee, core, asset), 10);
				if (parseInt(eqFee, 10) !== eqFee) {
					eqFee += 1; // Add 1 to round up;
				}
				if (balance >= eqFee && this.checkFeePool(asset, eqFee)) {
					hasBalance = true;
				}
			}
			if (hasBalance) {
				assets.push(assetID);
				fees[assetID] = eqFee ? eqFee : fee;
			}
		});

		return {assets, fees};
	}

	static getFinalFeeAsset(
		account,
		operation,
		fee_asset_id = process.env.META1_ASSET_ID
	) {
		let {assets: feeAssets} = this.getPossibleFees(account, operation);
		if (feeAssets.length === 1) {
			fee_asset_id = feeAssets[0];
		} else if (feeAssets.length > 0 && feeAssets.indexOf(fee_asset_id) === -1) {
			fee_asset_id = feeAssets[0];
		}

		return fee_asset_id;
	}

	static isKnownScammer(account) {
		let scamMessage = null;
		if (scamAccountsPolo.indexOf(account) !== -1) {
			scamMessage = counterpart.translate('account.polo_scam');
		} else if (scamAccountsBittrex.indexOf(account) !== -1) {
			scamMessage = counterpart.translate('account.bittrex_scam');
		} else if (scamAccountsOther.indexOf(account) !== -1) {
			scamMessage = counterpart.translate('account.other_scam');
		}
		return scamMessage;
	}

	static getTotalBalanceChange(balances, preferredUnit) {
		let total = 0;
		let prevTotal = 0;

		let allMarketStats = MarketsStore.getState().allMarketStats;
		let coreAsset = ChainStore.getAsset(process.env.META1_ASSET_ID);
		let toAsset = ChainStore.getAsset(preferredUnit);

		if (!coreAsset || !toAsset) {
			return 0;
		}

		balances.forEach((balanceID) => {
			let balanceObject = ChainStore.getObject(balanceID);
			let balance = balanceObject
				? parseInt(balanceObject.get('balance'), 10)
				: 0;
			let assetId = balanceObject.get('asset_type');
			let asset = ChainStore.getAsset(assetId);

			if (asset) {
				let eqBalance = MarketUtils.convertValue(
					balance,
					toAsset,
					asset,
					allMarketStats,
					coreAsset
				);

				total += eqBalance;
				let changePrice =
					asset.get('symbol') === preferredUnit
						? {change: 0}
						: MarketsStore.getState().allMarketStats.get(
								asset.get('symbol') + '_' + preferredUnit
						  );
				prevTotal += eqBalance * (1 - Number(changePrice?.change) / 100);
			}
		});

		return (total / prevTotal - 1) * 100;
	}

	static getTotalBalance(balances, preferredUnit) {
		let total = 0;

		let allMarketStats = MarketsStore.getState().allMarketStats;
		let coreAsset = ChainStore.getAsset(process.env.META1_ASSET_ID);
		let toAsset = ChainStore.getAsset(preferredUnit);

		if (!coreAsset || !toAsset) {
			return 0;
		}

		balances.forEach((balanceID) => {
			let balanceObject = ChainStore.getObject(balanceID);
			let balance = balanceObject
				? parseInt(balanceObject.get('balance'), 10)
				: 0;
			let assetId = balanceObject.get('asset_type');
			let asset = ChainStore.getAsset(assetId);

			if (asset) {
				let eqBalance = MarketUtils.convertValue(
					balance,
					toAsset,
					asset,
					allMarketStats,
					coreAsset
				);

				total += eqBalance;
			}
		});

		return total / Math.pow(10, toAsset.get('precision'));
	}

	static getUsd(amount, fromAssetID) {
		let fromAsset = ChainStore.getAsset(fromAssetID);
		let toAsset = ChainStore.getAsset('USDT');
		let allMarketStats = MarketsStore.getState().allMarketStats;
		let coreAsset = ChainStore.getAsset(process.env.META1_ASSET_ID);

		if (!coreAsset) {
			return 0;
		}

		let usd;

		if (fromAsset && toAsset) {
			let price = MarketUtils.getFinalPrice(
				coreAsset,
				fromAsset,
				toAsset,
				allMarketStats,
				true
			);

			usd = amount * price;
		}

		return usd;
	}
}
