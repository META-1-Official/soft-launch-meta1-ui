import React from "react";
// import Translate from "react-translate-component";
import ReactTooltip from "react-tooltip";
import utils from "common/utils";
import SettingsActions from "actions/SettingsActions";
import OpenLogin from "@toruslabs/openlogin";
import {FetchChain} from "meta1js/es";
import WalletDb from "stores/WalletDb";
import WalletUnlockActions from "actions/WalletUnlockActions";

// import AccountRegistrationForm from "./AccountRegistrationForm";
// import AccountRegistrationConfirm from "./AccountRegistrationConfirm";

console.log(
    "TORUS Data",
    process.env.TORUS_PROJECT_ID,
    process.env.TORUS_NETWORK,
    window.location.hostname
);
const openlogin = new OpenLogin({
    clientId: process.env.TORUS_PROJECT_ID,
    network: process.env.TORUS_NETWORK,
    uxMode: "popup"
});

class AccountRegistration extends React.Component {
    constructor() {
        super();
        this.state = {
            accountName: "",
            privateKey: "",
            userData: null
        };
        this.continue = this.continue.bind(this);
        this.toggleConfirmed = this.toggleConfirmed.bind(this);
    }

    componentWillMount() {
        SettingsActions.changeSetting({
            setting: "passwordLogin",
            value: true
        });
    }

    componentDidMount() {
        ReactTooltip.rebuild();
        this.renderTorusLogin();
    }

    componentDidUpdate(prev, prevState) {
        if (!prevState.privateKey && this.state.privateKey) {
            // call creation logic
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !utils.are_equal_shallow(nextState, this.state);
    }

    continue({accountName, password}) {
        this.setState({
            accountName,
            password,
            confirmationStep: true
        });
    }

    toggleConfirmed() {
        const {active} = this.state;
        this.setState({
            active: !active
        });
    }

    async renderTorusLogin() {
        await openlogin.init();
        if (openlogin.privKey) {
            const privKey = openlogin.privKey;
            const data = await openlogin.getUserInfo();
            console.log(
                "User is already logged in. Private key: " + privKey,
                data
            );
            this.setState({
                privateKey: privKey,
                userData: data
            });
            // this.props.history.push("/market/META1_USDT");
        } else {
            const privKey = await openlogin.login();
            const data = await openlogin.getUserInfo();
            console.log("User is logged in. Private key: " + privKey, data);
            this.setState({
                privateKey: privKey,
                userData: data
            });
        }
    }

    createAccount(
        name,
        password,
        email,
        phone_number,
        first_name,
        last_name,
        private_key
    ) {
        console.log("phone_number: ", phone_number);
        const {referralAccount} = AccountStore.getState();
        AccountActions.createAccountWithPassword(
            name,
            password,
            "", //registrarAccount
            referralAccount,
            0,
            "",
            email,
            phone_number,
            first_name,
            last_name,
            private_key
        )
            .then(() => {
                AccountActions.setPasswordAccount(name);
                if (this.state.registrarAccount) {
                    FetchChain("getAccount", name).then(() => {
                        this.unlockAccount(name, password);
                    });
                    TransactionConfirmStore.listen(this.onFinishConfirm);
                } else {
                    FetchChain("getAccount", name).then(data => {
                        console.log("Data in Fetch chain", data);
                    });
                    this.unlockAccount(name, password);
                    this.props.history.push("/market/META1_USDT");
                }
                if (origEmail) {
                    this.postWallet(email, name);
                }
            })
            .catch(error => {
                console.log("ERROR AccountActions.createAccount ARC", error);
                // let errorMsg =
                //     error.base && error.base.length && error.base.length > 0
                //         ? error.base[0]
                //         : "unknown error";
                // if (error.remote_ip) {
                //     [errorMsg] = error.remote_ip;
                // }
                // Notification.error({
                //     message: counterpart.translate(
                //         "notifications.account_create_failure",
                //         {
                //             account_name: name,
                //             error_msg: errorMsg
                //         }
                //     )
                // });
            });
    }

    postWallet(email, accountName) {
        fetch("https://meta1.io/api/link", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
            },
            body: JSON.stringify({
                userId: email,
                walletId: accountName
            })
        }).then(response => {
            alert("You have successfully created your wallet account.");
            console.log(response);
        });
    }

    unlockAccount(name, password) {
        WalletDb.validatePassword(password, true, name);
        WalletUnlockActions.checkLock.defer();
    }

    render() {
        return (
            <React.Fragment></React.Fragment>
            // <div className="no-margin grid-block registration-layout registration">
            //     <div className="grid-block horizontal align-center text-center">
            //         <div>
            //             <img
            //                 className={`model-img ${
            //                     this.state.active ? "confirmed" : ""
            //                 }`}
            //                 src="/model-type-images/account.svg"
            //                 alt="account"
            //             />
            //         </div>

            //         <div className="create-account-block">
            //             <Translate
            //                 component="h3"
            //                 className="registration-account-title"
            //                 content="registration.createByPassword"
            //             />
            //             {!this.state.confirmationStep ? (
            //                 <AccountRegistrationForm continue={this.continue} />
            //             ) : (
            //                 <AccountRegistrationConfirm
            //                     accountName={this.state.accountName}
            //                     password={this.state.password}
            //                     toggleConfirmed={this.toggleConfirmed}
            //                     history={this.props.history}
            //                 />
            //             )}
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default AccountRegistration;
