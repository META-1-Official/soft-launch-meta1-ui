import React from "react";
import {Asset} from "../lib/common/MarketClasses";
import swal from "sweetalert";
import {ChainStore, key} from "meta1js";
import WalletUnlockActions from "../actions/WalletUnlockActions";
import ReactTooltip from "react-tooltip";
import PrivateKeyStore from "../stores/PrivateKeyStore";
import WalletDb from "../stores/WalletDb";
import AccountStore from "../stores/AccountStore";
import SettingsActions from "../actions/SettingsActions";
import authenticator from "authenticator";

class Confirm extends React.Component {
    constructor() {
        super();
        this.state = {
            confirmCode: "",
            message: ""
        };
    }

    componentDidMount() {
        // this.setState({ confirmCode : this.props.match.params.confirmCode  });
        console.log(this.props.match.params.confirmCode);
        console.log("this.props.match.params.confirmCode");

        fetch(
            "https://testdex.meta.io/api/user/verify/" +
                this.props.match.params.confirmCode,
            {
                method: "GET",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest"
                }
            }
        )
            .then(async response => {
                if (response.status === 200) {
                    this.setState({message: "Your email is confirmed"});
                } else {
                    console.log("post");
                    this.setState({message: "Your email is unconfirmed"});
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        console.log(this.props.match.params);

        return (
            <div className="grid-container page-layout help-content-layout">
                <div className="grid-block page-layout">
                    <div className="grid-block main-content wrap regular-padding">
                        <div className="grid-block medium-3" />

                        <div>
                            <h2>{this.state.message}</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Confirm;
