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
    DEFAULT_WS_NODE: "wss://api.meta1.io/ws",
    WS_NODE_LIST: [
        {
            url: "wss://api.meta1.io/ws",
            region: "API",
            country: "API",
            location: "Northern America",
            operator: "Witness: meta1"
        },
        {
            url: "wss://electra.meta1.io/ws",
            region: "ELECTRA",
            country: "ELECTRA",
            location: "Central America",
            operator: "Witness: meta1"
        },
        {
            url: "wss://alcyone.meta1.io/ws",
            region: "Southern Asia",
            country: "ALCYONE",
            location: "Southern Asia",
            operator: "Witness: meta1"
        },
        {
            url: "wss://zeus.meta1.io/ws",
            region: "Northern Europe",
            country: "Zeus",
            location: "Northern Europe",
            operator: "Witness: meta1"
        },
        {
            url: "wss://taygete.meta1.io/ws",
            region: "Northern America",
            country: "Taygete",
            location: "Northern America",
            operator: "Witness: meta1"
        }
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
