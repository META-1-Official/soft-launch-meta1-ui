import {Apis} from "meta1js-ws";
/** This file centralized customization and branding efforts throughout the whole wallet and is meant to facilitate
 *  the process.
 *
 *  @author Rostislav Gogolauri <go.go.gg.rostislav@gmail.com>
 */

/**
 * Determine if we are running on testnet or mainnet
 * @private
 */
function _isTestnet() {
    const chainId = (Apis.instance().chain_id || "4018d784").substr(0, 8);
    if (chainId === "4018d784") {
        return false;
    } else {
        // treat every other chain as testnet, exact would be chainId === "39f5e2ed"
        return true;
    }
}

/**
 * Wallet name that is used throughout the UI and also in translations
 * @returns {string}
 */
export function getWalletName() {
    return "META1 Exchange";
}

/**
 * URL of this wallet
 * @returns {string}
 */
export function getWalletURL() {
    return "https://zeus.meta-exchange.info";
}

/**
 * Returns faucet information
 *
 * @returns {{url: string, show: boolean}}
 */
export function getFaucet() {
    return {
        url: "https://aphrodite.meta-exchange.info/faucet", // 2017-12-infrastructure worker proposal
        show: true,
        editable: false
    };
}

/**
 * Logo that is used throughout the UI
 * @returns {*}
 */
export function getLogo() {
    return require("assets/logo-ico-blue.png");
}

/**
 * Default set theme for the UI
 * @returns {string}
 */
export function getDefaultTheme() {
    // possible ["midnightTheme", "lightTheme"]
    return "darkTheme";
}

/**
 * Default login method. Either "password" (for cloud login mode) or "wallet" (for local wallet mode)
 * @returns {string}
 */
export function getDefaultLogin() {
    // possible: one of "password", "wallet"
    return "password";
}

/**
 * Default units used by the UI
 *
 * @returns {[string,string,string,string,string,string]}
 */
export function getUnits() {
    if (_isTestnet()) {
        return ["META1"];
    } else {
        return ["META1", "USD", "CNY", "BTC", "EUR", "GBP"];
    }
}

/**
 * These are the highlighted bases in "My Markets" of the exchange
 *
 * @returns {[string]}
 */

export function getMyMarketsBases() {
    return ["BTC", "ETH", "META1", "USD", "CNY"];
}

/**
 * These are the default quotes that are shown after selecting a base
 *
 * @returns {[string]}
 */
export function getMyMarketsQuotes() {
    let tokens = {
        nativeTokens: [
            "BTC",
            "META1",
            "CNY",
            "EUR",
            "GOLD",
            "KRW",
            "RUBLE",
            "SILVER",
            "USD"
        ],
        bridgeTokens: ["BRIDGE.BCO", "BRIDGE.BTC", "BRIDGE.MONA", "BRIDGE.ZNY"],
        gdexTokens: [
            "GDEX.BTC",
            "GDEX.BTO",
            "GDEX.EOS",
            "GDEX.ETH",
            "GDEX.BTM",
            "GDEX.NEO",
            "GDEX.GAS",
            "GDEX.QTUM",
            "GDEX.BKBT",
            "GDEX.GXC",
            "GDEX.HPB",
            "GDEX.SEER",
            "GDEX.FOTA",
            "GDEX.JRC",
            "GDEX.EOSDAC",
            "GDEX.MTS",
            "GDEX.GUSD",
            "GDEX.IQ",
            "GDEX.NULS",
            "GDEX.USDT"
        ],
        openledgerTokens: [
            "OBITS",
            "OPEN.BTC",
            "OPEN.DASH",
            "OPEN.DGD",
            "OPEN.DOGE",
            "OPEN.EOS",
            "OPEN.EOSDAC",
            "OPEN.ETH",
            "OPEN.EURT",
            "OPEN.GRC",
            "OPEN.INCNT",
            "OPEN.KRM",
            "OPEN.LISK",
            "OPEN.LTC",
            "OPEN.MAID",
            "OPEN.MKR",
            "OPEN.NEO",
            "OPEN.OMG",
            "OPEN.SBD",
            "OPEN.STEEM",
            "OPEN.TUSD",
            "OPEN.USDT",
            "OPEN.WAVES",
            "OPEN.XMR",
            "OPEN.ZEC",
            "OPEN.ZRX"
        ],
        rudexTokens: [
            "PPY",
            "RUDEX.GBG",
            "RUDEX.GOLOS",
            "RUDEX.KRM",
            "RUDEX.SBD",
            "RUDEX.STEEM",
            "RUDEX.BTC",
            "RUDEX.ETH",
            "RUDEX.EOS",
            "RUDEX.WLS",
            "RUDEX.SMOKE",
            "RUDEX.GRC"
        ],
        sparkTokens: [
            "ZEPH",
            "PEG.PHP",
            "SPARKDEX.ETH",
            "SPARKDEX.BTC",
            "SPARKDEX.HKD",
            "SPARKDEX.SGD",
            "SPARKDEX.AUD",
            "SPARKDEX.EUR",
            "SPARKDEX.GBP"
        ],
        xbtsxTokens: [
            "XBTSX.STH",
            "XBTSX.POST",
            "XBTSX.DOGE",
            "XBTSX.BTC",
            "XBTSX.LTC",
            "XBTSX.DASH",
            "XBTSX.BTG",
            "XBTSX.XSPEC",
            "XBTSX.NVC",
            "XBTSX.UNI",
            "XBTSX.NMC",
            "XBTSX.WAVES",
            "XBTSX.COF",
            "XBTSX.XRUP",
            "XBTSX.P2P",
            "XBTSX.STEEP",
            "XBTSX.MDL",
            "XBTSX.ETH",
            "XBTSX.EXR",
            "XBTSX.LCRT"
        ],
        otherTokens: [
            "BTWTY",
            "TWENTIX",

            "CVCOIN",
            "HERO",
            "OCT",
            "HERTZ",
            "ICOO",
            "SMOKE",
            "STEALTH",
            "YOYOW"
        ]
    };

    let allTokens = [];
    for (let type in tokens) {
        allTokens = allTokens.concat(tokens[type]);
    }
    return allTokens;
}

/**
 * The featured markets displayed on the landing page of the UI
 *
 * @returns {list of string tuples}
 */
export function getFeaturedMarkets(quotes = []) {
    return [
        ["USD", "META1"],
        ["USD", "OPEN.BTC"],
        ["USD", "OPEN.USDT"],
        ["USD", "OPEN.ETH"],
        ["USD", "OPEN.DASH"],
        ["USD", "GOLD"],
        ["USD", "HERO"],
        ["USD", "GDEX.BTC"],
        ["USD", "GDEX.ETH"],
        ["USD", "GDEX.EOS"],
        ["USD", "GDEX.BTO"],
        ["USD", "OPEN.EOSDAC"],
        ["USD", "RUDEX.BTC"],
        ["USD", "RUDEX.STEEM"],
        ["USD", "RUDEX.EOS"],
        ["CNY", "META1"],
        ["CNY", "OPEN.BTC"],
        ["CNY", "USD"],
        ["CNY", "OPEN.ETH"],
        ["CNY", "YOYOW"],
        ["CNY", "OCT"],
        ["CNY", "GDEX.BTC"],
        ["CNY", "GDEX.ETH"],
        ["CNY", "GDEX.EOS"],
        ["CNY", "GDEX.BTO"],
        ["CNY", "GDEX.BTM"],
        ["CNY", "GDEX.SEER"],
        ["CNY", "GDEX.BKBT"],
        ["CNY", "GDEX.USDT"],
        ["CNY", "GDEX.GXC"],
        ["CNY", "RUDEX.GOLOS"],
        ["CNY", "RUDEX.GBG"],
        ["CNY", "RUDEX.BTC"],
        ["CNY", "RUDEX.EOS"],
        ["OPEN.BTC", "META1"],
        ["OPEN.BTC", "OPEN.ETH"],
        ["OPEN.BTC", "OPEN.DASH"],
        ["OPEN.BTC", "OPEN.DGD"],
        ["OPEN.BTC", "OPEN.STEEM"],
        ["META1", "OPEN.ETH"],
        ["META1", "OPEN.EOS"],
        ["META1", "PPY"],
        ["META1", "OPEN.STEEM"],
        ["META1", "OBITS"],
        ["META1", "RUBLE"],
        ["META1", "HERO"],
        ["META1", "OCT"],
        ["META1", "SILVER"],
        ["META1", "GOLD"],
        ["META1", "BTWTY"],
        ["META1", "SMOKE"],
        ["META1", "GDEX.BTC"],
        ["META1", "GDEX.ETH"],
        ["META1", "GDEX.EOS"],
        ["META1", "GDEX.BTO"],
        ["META1", "GDEX.USDT"],
        ["META1", "OPEN.EOSDAC"],
        ["USD", "OPEN.STEEM"],
        ["USD", "OPEN.MAID"],
        ["OPEN.USDT", "OPEN.BTC"],
        ["OPEN.BTC", "OPEN.MAID"],
        ["META1", "OPEN.MAID"],
        ["META1", "OPEN.HEAT"],
        ["META1", "OPEN.INCENT"],
        ["RUB", "RUDEX.GOLOS"],
        ["RUB", "RUDEX.GBG"],
        ["META1", "RUDEX.STEEM"],
        ["META1", "RUDEX.SBD"],
        ["META1", "RUDEX.KRM"],
        ["META1", "RUDEX.EOS"],
        ["META1", "RUDEX.BTC"],
        ["META1", "RUDEX.ETH"],
        ["META1", "RUDEX.WLS"],
        ["META1", "RUDEX.SMOKE"],
        ["META1", "RUDEX.GRC"],
        ["META1", "XBTSX.STH"],
        ["META1", "XBTSX.WAVES"],
        ["META1", "ZEPH"],
        ["META1", "HERTZ"],
        ["META1", "SPARKDEX.BTC"],
        ["META1", "SPARKDEX.ETH"],
        ["META1", "SPARKDEX.HKD"],
        ["SPARKDEX.HKD", "SPARKDEX.BTC"],
        ["SPARKDEX.HKD", "SPARKDEX.ETH"],
        ["META1", "SPARKDEX.SGD"],
        ["META1", "SPARKDEX.AUD"],
        ["META1", "SPARKDEX.EUR"],
        ["META1", "SPARKDEX.GBP"],
        ["META1", "PEG.PHP"]
    ].filter(a => {
        if (!quotes.length) return true;
        return quotes.indexOf(a[0]) !== -1;
    });
}

/**
 * Recognized namespaces of assets
 *
 * @returns {[string,string,string,string,string,string,string]}
 */
export function getAssetNamespaces() {
    return [
        "OPEN.",
        "RUDEX.",
        "BRIDGE.",
        "GDEX.",
        "XBTSX.",
        "SPARKDEX.",
        "CITADEL."
    ];
}

/**
 * These namespaces will be hidden to the user, this may include "bit" for BitAssets
 * @returns {[string,string]}
 */
export function getAssetHideNamespaces() {
    // e..g "OPEN.", "bit"
    return [];
}

/**
 * Allowed gateways that the user will be able to choose from in Deposit Withdraw modal
 * @param gateway
 * @returns {boolean}
 */
export function allowedGateway(gateway) {
    return (
        [
            "OPEN",
            "RUDEX",
            "BRIDGE",
            "GDEX",
            "XBTSX",
            "SPARKDEX",
            "CITADEL"
        ].indexOf(gateway) >= 0
    );
}

export function getSupportedLanguages() {
    // not yet supported
}

export function getAllowedLogins() {
    // possible: list containing any combination of ["password", "wallet"]
    return ["password", "wallet"];
}

export function getConfigurationAsset() {
    let assetSymbol = null;
    if (_isTestnet()) {
        assetSymbol = "NOTIFICATIONS";
    } else {
        assetSymbol = "META1";
    }
    // explanation will be parsed out of the asset description (via split)
    return {
        symbol: assetSymbol,
        explanation:
            "This asset is used for decentralized configuration of the BitShares UI placed under bitshares.org."
    };
}
