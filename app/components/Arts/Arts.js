import React from "react";
import Iframe from "react-iframe";

class Arts extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Iframe
                url="https://maia.meta-exchange.info"
                display="initial"
                position="relative"
                allowFullScreen
            />
        );
    }
}

export default Arts;
