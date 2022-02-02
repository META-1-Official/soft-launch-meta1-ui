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
  const chainId = (Apis.instance().chain_id || "9e40bec4").substr(0, 8);
  if (chainId === "9e40bec4") {
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
  return "META Exchange";
}

/**
 * URL of this wallet
 * @returns {string}
 */
export function getWalletURL() {
  return "https://meta-exchange.io";
}

/**
 * Returns faucet information
 *
 * @returns {{url: string, show: boolean}}
 */
export function getFaucet() {
  // https://faucet.testnet.meta1.io/faucet/
  return {
    // url: "https://faucet.meta1.io/faucet", // 2017-12-infrastructure worker proposal
    url:
      process.env.NODE_ENV === "development"
        ? "https://faucet.testnet.meta1.io/faucet"
        : "https://faucet.meta1.io/faucet",
    show: true,
    editable: true,
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
    return ["META1", "USDT", "ETH", "BTC", "LTC", "EOS", "XLM", "BNB"];
  }
}

/**
 * These are the highlighted bases in "My Markets" of the exchange
 *
 * @returns {[string]}
 */

export function getMyMarketsBases() {
  return ["META1", "BTC", "ETH", "USDT", "LTC", "EOS", "XLM", "BNB"];
}

/**
 * These are the default quotes that are shown after selecting a base
 *
 * @returns {[string]}
 */
export function getMyMarketsQuotes() {
  let tokens = {
    nativeTokens: ["BTC", "META1", "USDT", "EOS", "XLM", "BNB"],
    bridgeTokens: ["BRIDGE.BCO", "BRIDGE.BTC", "BRIDGE.MONA", "BRIDGE.ZNY"],
    gdexTokens: [
      "BTC",
      "BTO",
      "EOS",
      "ETH",
      "BTM",
      "NEO",
      "GAS",
      "QTUM",
      "BKBT",
    ],
    openledgerTokens: [
      "OBITS",
      "BTC",
      "DASH",
      "DGD",
      "DOGE",
      "EOS",
      "EOSDAC",
      "ETH",
    ],
    rudexTokens: ["PPY", "GBG"],
    sparkTokens: [
      "ZEPH",
      "PEG.PHP",
      "ETH",
      "BTC",
      "HKD",
      "SGD",
      "AUD",
      "EUR",
      "GBP",
    ],
    xbtsxTokens: ["STH", "POST", "DOGE", "BTC", "LTC", "DASH"],
    otherTokens: ["BTWTY", "TWENTIX"],
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
    ["USDT", "META1"],
    ["USDT", "BTC"],
    ["USDT", "USDT"],
    ["USDT", "ETH"],
    ["USDT", "DASH"],
    ["USDT", "GOLD"],
    ["USDT", "HERO"],
    ["USDT", "BTC"],
    ["USDT", "ETH"],
    ["USDT", "EOS"],
    ["USDT", "BTO"],
    ["USDT", "EOSDAC"],
    ["USDT", "BTC"],
    ["USDT", "STEEM"],
    ["USDT", "EOS"],
    ["CNY", "META1"],
    ["CNY", "BTC"],
    ["CNY", "USDT"],
    ["CNY", "ETH"],
    ["CNY", "YOYOW"],
    ["CNY", "OCT"],
    ["CNY", "BTC"],
    ["CNY", "ETH"],
    ["CNY", "EOS"],
    ["CNY", "BTO"],
    ["CNY", "BTM"],
    ["CNY", "SEER"],
    ["CNY", "BKBT"],
    ["CNY", "USDT"],
    ["CNY", "GXC"],
    ["CNY", "GOLOS"],
    ["CNY", "GBG"],
    ["CNY", "BTC"],
    ["CNY", "EOS"],
  ].filter((a) => {
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
  return ["", "", "BRIDGE.", "", "", "", "CITADEL."];
}

/**
 * These namespaces will be hidden to the user, this may include "bit" for BitAssets
 * @returns {[string,string]}
 */
export function getAssetHideNamespaces() {
  // e..g "", "bit"
  return [];
}

/**
 * Allowed gateways that the user will be able to choose from in Deposit Withdraw modal
 * @param gateway
 * @returns {boolean}
 */
export function allowedGateway(gateway) {
  return ["OPEN"].indexOf(gateway) >= 0;
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
      "This asset is used for decentralized configuration of the Meta1 UI placed under bitshares.org.",
  };
}
