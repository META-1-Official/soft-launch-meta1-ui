import React from "react";

class AssetExplorer extends React.Component {
    render() {
        return (
            <div
                dangerouslySetInnerHTML={{
                    __html: `<iframe src="https://api.meta-exchange.vision" width="100%" style="height:100vh; border-width:0px; border:none;" height="100%"></iframe>`
                }}
            />
        );
    }
}

export default AssetExplorer;
