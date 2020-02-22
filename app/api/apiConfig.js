import {getFaucet} from "../branding";

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
    DEFAULT_WS_NODE: "wss://aphrodite.meta-exchange.info/ws",
    WS_NODE_LIST: [
        {
            url: "ws://127.0.0.1:8090",
            location: "Locally hosted"
        },
        {
            url: "wss://aphrodite.meta-exchange.info/ws",
            region: "Aphrodite - Los Angeles",
            country: "META1",
            location: "USA",
            operator: "Witness: aphrodite",
            contact: "telegram:@Avowedly"
        },
        {
            url: "wss://aphrodite.meta-exchange.info/core-new",
            region: "Aphrodite NEw - Los Angeles",
            country: "META1",
            location: "USA New",
            operator: "Witness: aphrodite",
            contact: "telegram:@Avowedly"
        },
        {
            url: "ws://155.138.132.30:6666",
            region: "Unknown region (TESTNET)",
            country: "META1",
            location: "USA Testnet",
            operator: "Witness: testnet",
            contact: "telegram:@Avowedly"
        }
        // {
        //     url: "wss://seraphim.meta-exchange.info/ws",
        //     region: "Seraphim - Los Angeles",
        //     country: "META1",
        //     location: "USA",
        //     operator: "Witness: Unity",
        //     contact: "telegram:@Avowedly"
        // },
        // {
        //     url: "wss://celaeno.meta-exchange.info/ws",
        //     region: "Celaeno - Virginia",
        //     country: "META1",
        //     location: "USA",
        //     operator: "Witness: Abundance",
        //     contact: "telegram:@Avowedly"
        // },
        // {
        //     url: "wss://merope.meta-exchange.info/ws",
        //     region: "Merope - Ireland",
        //     country: "META1",
        //     location: "Ireland",
        //     operator: "Witness: Victory",
        //     contact: "telegram:@Avowedly"
        // },
        // {
        //     url: "wss://asterope.meta-exchange.info/ws",
        //     region: "Asterope - London",
        //     country: "META1",
        //     location: "UK",
        //     operator: "Witness: Trust",
        //     contact: "telegram:@Avowedly"
        // },
        // {
        //     url: "wss://taygete.meta-exchange.info/ws",
        //     region: "Taygete - Frankfurt",
        //     country: "META1",
        //     location: "Germany",
        //     operator: "Witness: Honor",
        //     contact: "telegram:@Avowedly"
        // },
        // {
        //     url: "wss://alcyone.meta-exchange.info/ws",
        //     region: "Alcyone - Paris",
        //     country: "META1",
        //     location: "France",
        //     operator: "Witness: Harmony",
        //     contact: "telegram:@Avowedly"
        // },
        // {
        //     url: "wss://pleione.meta-exchange.info/ws",
        //     region: "Pleione - Canada (Central)",
        //     country: "META1",
        //     location: "Canada",
        //     operator: "Witness: Balance",
        //     contact: "telegram:@Avowedly"
        // },
        // {
        //     url: "wss://atlas.meta-exchange.info/ws",
        //     region: "Atlas - Singapore",
        //     country: "META1",
        //     location: "Singapore",
        //     operator: "Witness: Freedom",
        //     contact: "telegram:@Avowedly"
        // },
        // {
        //     url: "wss://zeus.meta-exchange.info/ws",
        //     region: "Zeus - Seoul",
        //     country: "META1",
        //     location: "South Korea",
        //     operator: "Witness: Wisdom",
        //     contact: "telegram:@Avowedly"
        // },
        // {
        //     url: "wss://hathor.meta-exchange.info/ws",
        //     region: "Hathor - Sydney",
        //     country: "META1",
        //     location: "Australia",
        //     operator: "Witness: Awareness",
        //     contact: "telegram:@Avowedly"
        // }
    ],
    ES_WRAPPER_LIST: [
        {
            url: "https://pleione.meta-exchange.info",
            region: "Western Europe",
            country: "Germany",
            operator: "Infrastructure Worker",
            contact: "email:info@meta1.io"
        }
    ],
    DEFAULT_FAUCET: getFaucet().url,
    TESTNET_FAUCET: getFaucet().url
};
