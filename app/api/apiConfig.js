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
            country: "Electra",
            location: "Central America",
            operator: "Witness: meta1"
        },
        {
            url: "wss://atlas.meta1.io/ws",
            region: "ATLAS",
            country: "Atlas",
            location: "Northern America",
            operator: "Witness: meta1"
        },
        {
            url: "wss://alcyone.meta1.io/ws",
            region: "ALCYONE",
            country: "Alcyone",
            location: "Southern Asia",
            operator: "Witness: meta1"
        },
        {
            url: "wss://zeus.meta1.io/ws",
            region: "ZEUS",
            country: "Zeus",
            location: "Northern Europe",
            operator: "Witness: meta1"
        },
        {
            url: "wss://taygete.meta1.io/ws",
            region: "TAYGETE",
            country: "Taygete",
            location: "Northern America",
            operator: "Witness: meta1"
        },
        {
            url: "wss://maia.meta1.io/ws",
            region: "MAIA",
            country: "Maia",
            location: "Northern America",
            operator: "Witness: meta1"
        },
        {
            url: "wss://celaeno.meta1.io/ws",
            region: "CELAENO",
            country: "Celaeno",
            location: "Australia",
            operator: "Witness: meta1"
        },
        {
            url: "wss://asterope.meta1.io/ws",
            region: "ASTEROPE",
            country: "Asterope",
            location: "Western Europe",
            operator: "Witness: meta1"
        },
        {
            url: "wss://pleione.meta1.io/ws",
            region: "PLEIONE",
            country: "Pleione",
            location: "Northern America",
            operator: "Witness: meta1"
        },
        {
            url: "wss://hathor.meta1.io/ws",
            region: "HATHOR",
            country: "Hathor",
            location: "Northern Europe",
            operator: "Witness: meta1"
        },
        {
            url: "wss://sun.meta1.io/ws",
            region: "SUN",
            country: "Sun",
            location: "Southern Asia",
            operator: "Witness: meta1"
        },
        {
            url: "wss://testnetapi.meta1.io/ws",
            region: "TEST",
            country: "TEST",
            location: "Southern Asia",
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
