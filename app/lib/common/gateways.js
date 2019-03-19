/**
 * Settings storage for all Gateway Services
 * General API Settings are stored in api/apiConfig and should be imported here
 */

import {
    rudexAPIs,
    bitsparkAPIs,
    widechainAPIs,
    openledgerAPIs,
    cryptoBridgeAPIs,
    gdex2APIs,
    xbtsxAPIs,
    citadelAPIs
} from "api/apiConfig";
import {allowedGateway} from "branding";

export const availableGateways = {
    OPEN: {
        id: "OPEN",
        name: "OPENLEDGER",
        baseAPI: openledgerAPIs,
        isEnabled: allowedGateway("OPEN"),
        selected: false,
        options: {
            enabled: false,
            selected: false
        }
    }
};

export const gatewayPrefixes = Object.keys(availableGateways);

export function getPossibleGatewayPrefixes(bases) {
    return gatewayPrefixes.reduce((assets, prefix) => {
        bases.forEach(a => {
            assets.push(`${prefix}.${a}`);
        });
        return assets;
    }, []);
}

export default availableGateways;
