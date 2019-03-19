import {getFaucet} from "../branding";

export const blockTradesAPIs = {
    BASE: "https://api.blocktrades.us/v2",
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/active-wallets",
    TRADING_PAIRS: "/trading-pairs",
    DEPOSIT_LIMIT: "/deposit-limits",
    ESTIMATE_OUTPUT: "/estimate-output-amount",
    ESTIMATE_INPUT: "/estimate-input-amount"
};

export const openledgerAPIs = {
    BASE: "https://ol-api1.openledger.info/api/v0/ol/support",
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/active-wallets",
    TRADING_PAIRS: "/trading-pairs",
    DEPOSIT_LIMIT: "/deposit-limits",
    ESTIMATE_OUTPUT: "/estimate-output-amount",
    ESTIMATE_INPUT: "/estimate-input-amount",
    RPC_URL: "https://openledger.info/api/"
};

export const rudexAPIs = {
    BASE: "https://gateway.rudex.org/api/v0_1",
    COINS_LIST: "/coins",
    NEW_DEPOSIT_ADDRESS: "/new-deposit-address"
};

export const bitsparkAPIs = {
    BASE: "https://dex-api.bitspark.io/api/v1",
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/active-wallets",
    TRADING_PAIRS: "/trading-pairs",
    DEPOSIT_LIMIT: "/deposit-limits",
    ESTIMATE_OUTPUT: "/estimate-output-amount",
    ESTIMATE_INPUT: "/estimate-input-amount"
};

export const cryptoBridgeAPIs = {
    BASE: "https://api.crypto-bridge.org/api/v1",
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/wallets",
    MARKETS: "/markets",
    TRADING_PAIRS: "/trading-pairs"
};

export const widechainAPIs = {
    BASE: "https://gateway.winex.pro/api/v0/ol/support",
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/active-wallets",
    NEW_DEPOSIT_ADDRESS: "/new-deposit-address",
    WITHDRAW_HISTORY: "/latelyWithdraw",
    TRADING_PAIRS: "/trading-pairs",
    DEPOSIT_HISTORY: "/latelyRecharge"
};

export const citadelAPIs = {
    BASE: "https://citadel.li/trade",
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/active-wallets",
    TRADING_PAIRS: "/trading-pairs",
    DEPOSIT_LIMIT: "/deposit-limits",
    ESTIMATE_OUTPUT: "/estimate-output-amount",
    ESTIMATE_INPUT: "/estimate-input-amount"
};

export const gdex2APIs = {
    BASE: "https://api.gdex.io/adjust",
    COINS_LIST: "/coins",
    ACTIVE_WALLETS: "/active-wallets",
    TRADING_PAIRS: "/trading-pairs"
};

// Legacy Deposit/Withdraw
export const gdexAPIs = {
    BASE: "https://api.gdex.io",
    ASSET_LIST: "/gateway/asset/assetList",
    ASSET_DETAIL: "/gateway/asset/assetDetail",
    GET_DEPOSIT_ADDRESS: "/gateway/address/getAddress",
    CHECK_WITHDRAY_ADDRESS: "/gateway/address/checkAddress",
    DEPOSIT_RECORD_LIST: "/gateway/deposit/recordList",
    DEPOSIT_RECORD_DETAIL: "/gateway/deposit/recordDetail",
    WITHDRAW_RECORD_LIST: "/gateway/withdraw/recordList",
    WITHDRAW_RECORD_DETAIL: "/gateway/withdraw/recordDetail",
    GET_USER_INFO: "/gateway/user/getUserInfo",
    USER_AGREEMENT: "/gateway/user/isAgree",
    WITHDRAW_RULE: "/gateway/withdraw/rule"
};

export const xbtsxAPIs = {
    BASE: "https://apis.xbts.io/api/v1",
    COINS_LIST: "/coin"
};

export const nodeRegions = [
    // region of the node follows roughly https://en.wikipedia.org/wiki/Subregion#/media/File:United_Nations_geographical_subregions.png
    "Northern Europe",
    "Western Europe",
    "Southern Europe",
    "Eastern Europe",
    "Northern Asia",
    "Western Asia",
    "Southern Asia",
    "Eastern Asia",
    "Central Asia",
    "Southeastern Asia",
    "Australia",
    "New Zealand",
    "Melanesia",
    "Polynesia",
    "Micronesia",
    "Northern Africa",
    "Western Africa",
    "Middle Africa",
    "Eastern Africa",
    "Southern Africa",
    "Northern America",
    "Central America",
    "Caribbean",
    "South America"
];

export const settingsAPIs = {
    // If you want a location to be translated, add the translation to settings in locale-xx.js
    // and use an object {translate: key} in WS_NODE_LIST
    DEFAULT_WS_NODE: "wss://seraphim.meta-exchange.info/socket",
    WS_NODE_LIST: [
        {
            url: "wss://aphrodite.meta-exchange.info/socket",
            region: "METANET - New York",
            country: "META",
            location: "Default Node",
            operator: "Witness: META Official 1",
            contact: "telegram:@Avowedly"
        },
        {
            url: "wss://seraphim.meta-exchange.info/socket",
            region: "METANET",
            country: "META",
            location: "Default Node",
            operator: "Witness: META Official 2",
            contact: "telegram:@Avowedly"
        },
        {
            url: "wss://celaeno.meta-exchange.info//socket",
            region: "METANET",
            country: "META",
            location: "New Node",
            operator: "Witness: META Official 3",
            contact: "telegram:@Avowedly"
        },
        {
            url: "wss://merope.meta-exchange.info/socket",
            region: "METANET",
            country: "META",
            location: "New Node",
            operator: "Witness: META Official 4",
            contact: "telegram:@Avowedly"
        },
        {
            url: "wss://asterope.meta-exchange.info/socket",
            region: "METANET",
            country: "META",
            location: "New Node",
            operator: "Witness: META Official 5",
            contact: "telegram:@Avowedly"
        },
        {
            url: "wss://taygete.meta-exchange.info/socket",
            region: "METANET",
            country: "META",
            location: "New Node",
            operator: "Witness: META Official 6",
            contact: "telegram:@Avowedly"
        },
        {
            url: "wss://alcyone.meta-exchange.info/socket",
            region: "METANET",
            country: "META",
            location: "New Node",
            operator: "Witness: META Official 7",
            contact: "telegram:@Avowedly"
        },
        {
            url: "wss://pleione.meta-exchange.info/socket",
            region: "METANET",
            country: "META",
            location: "New Node",
            operator: "Witness: META Official 8",
            contact: "telegram:@Avowedly"
        },
        {
            url: "wss://atlas.meta-exchange.info/socket",
            region: "METANET",
            country: "META",
            location: "New Node",
            operator: "Witness: META Official 9",
            contact: "telegram:@Avowedly"
        },
        {
            url: "wss://zeus.meta-exchange.info/socket",
            region: "METANET",
            country: "META",
            location: "New Node",
            operator: "Witness: META Official 10",
            contact: "telegram:@Avowedly"
        },
        {
            url: "wss://hathor.meta-exchange.info/socket",
            region: "METANET",
            country: "META",
            location: "New Node",
            operator: "Witness: META Official 11",
            contact: "telegram:@Avowedly"
        }
    ],
    DEFAULT_FAUCET: getFaucet().url,
    TESTNET_FAUCET: getFaucet().url
};
