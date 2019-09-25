import React from "react";
import {connect} from "alt-react";

class DashboardPage extends React.Component {
    componentDidMount() {
        window.location.reload();
    }
    render() {
        return (
            <a
                style={{verticalAlign: "middle", textAlign: "center"}}
                href="https://zeus.meta-exchange.info"
            >
                If redirect failded - please click this link
            </a>
        );
    }
}

export default connect(DashboardPage);
