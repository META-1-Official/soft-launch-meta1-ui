import React from "react";
// import {withRouter} from "react-router-dom";
import {connect} from "alt-react";
import {ChainStore} from "meta1js";
import {PrivateKey, FetchChain} from "meta1js/es";
import qs from "qs";
import axios from "axios";

import AuthStore from "../stores/AuthStore";
import AccountStore from "../stores/AccountStore";
import WalletDb from "../stores/WalletDb";
import WalletUnlockStore from "../stores/WalletUnlockStore";
import TransactionConfirmStore from "../stores/TransactionConfirmStore";
import AccountActions from "../actions/AccountActions";
import WalletUnlockActions from "../actions/WalletUnlockActions";
import LoadingIndicator from "./LoadingIndicator";
import ls from "../lib/common/localStorage";

const STORAGE_KEY = "__AuthData__";
const ss = new ls(STORAGE_KEY);

class AuthRedirect extends React.Component {
    constructor() {
        super();
        this.generateAuthData = this.generateAuthData.bind(this);
        this.authProceed = this.authProceed.bind(this);
        this.onFinishConfirm = this.onFinishConfirm.bind(this);
        this.createAccount = this.createAccount.bind(this);
        this.state = {
            skipCreationFlow: false,
            passwordError: false,
            redirectFromVoiceItEnrollment: "",
            redirectFromVoiceItVerification: "",
            redirectFromESign: false
        };
        this.skipFreshCreationAndProceed = this.skipFreshCreationAndProceed.bind(
            this
        );
        this.validateLogin = this.validateLogin.bind(this);
        this.proceedVoiceItRedirect = this.proceedVoiceItRedirect.bind(this);
        this.proceedESignRedirect = this.proceedESignRedirect.bind(this);
    }

    componentDidMount() {
        const {openLogin, privKey, authData, setOpenLoginInstance} = this.props;
        console.log("Location Data", this.props, this.props.location);
        // debugger;
        if (this.props.location && this.props.location.search) {
            const param = qs.parse(this.props.location.search, {
                ignoreQueryPrefix: true
            }).mode;
            const jwt = qs.parse(this.props.location.search, {
                ignoreQueryPrefix: true
            }).token;
            const eSignSuccess = qs.parse(this.props.location.search, {
                ignoreQueryPrefix: true
            }).signature;
            debugger;
            if (
                param === "existingEmailCreation" &&
                openLogin &&
                privKey &&
                authData
            ) {
                this.skipFreshCreationAndProceed();
            } else if (jwt) {
                this.proceedVoiceItRedirect(jwt);
            } else if (eSignSuccess === "success") {
                this.proceedESignRedirect();
            } else {
                this.props.history.push("/registration");
            }
        }
        // if (openLogin && (!privKey || !authData)) {
        //     this.generateAuthData();
        // }
        if (!openLogin) {
            setOpenLoginInstance();
        }
        if (openLogin && !privKey) {
            this.generateAuthData();
        }
        // if (privKey && authData) {
        //     debugger;
        //     this.authProceed();
        // }
    }

    componentDidUpdate(prevProps, prevState) {
        const {openLogin, privKey, authData} = this.props;
        const {skipCreationFlow} = this.state;
        if (openLogin && !prevProps.openLogin && !skipCreationFlow) {
            // debugger;
            this.generateAuthData();
        }
        if (
            privKey &&
            authData &&
            !skipCreationFlow &&
            ((privKey && !prevProps.privKey) ||
                (authData && !prevProps.authData))
        ) {
            // debugger;
            this.authProceed();
        }
        if (!prevState.passwordError && this.state.passwordError) {
            this.props.history.push("/registration");
        }
    }

    skipFreshCreationAndProceed() {
        this.setState({skipCreationFlow: true});
        this.authProceed();
    }

    proceedVoiceItRedirect(jwt) {
        // if jwt is from enrollment
        const logInUserName = ss.get("account_login_name", "");
        const regUserName = ss.get("account_registration_name", "");
        if (logInUserName) {
            this.setState({redirectFromVoiceItVerification: jwt});
            this.props.setOpenLoginInstance();
        } else if (regUserName) {
            this.setState({redirectFromVoiceItEnrollment: jwt});
            this.props.setOpenLoginInstance();
        }

        // if jwt is from verification
        // this.setState({ redirectFromVoiceItVerification: jwt });
    }

    proceedESignRedirect() {
        this.setState({redirectFromESign: true}, () => {
            this.props.setOpenLoginInstance();
        });
    }

    async generateAuthData() {
        const {openLogin, setPrivKey, setAuthData} = this.props;
        debugger;
        try {
            await openLogin.init();
            if (openLogin.privKey) {
                const privKey = openLogin.privKey;
                const data = await openLogin.getUserInfo();
                setPrivKey(privKey);
                setAuthData(data);
                // debugger;
            } else {
                this.props.history.push("/registration");
            }
        } catch (err) {
            console.log("Something went wrong!", err);
        }
    }

    async authProceed() {
        const {privKey, authData} = this.props;
        const {
            redirectFromVoiceItEnrollment,
            redirectFromVoiceItVerification,
            redirectFromESign
        } = this.state;
        const regUserName = ss.get("account_registration_name", "");
        const logInUserName = ss.get("account_login_name", "");
        if (regUserName) {
            debugger;
            if (redirectFromVoiceItEnrollment) {
                this.props.history.push(
                    `/registration?voiceItToken=${encodeURI(
                        redirectFromVoiceItEnrollment
                    )}`
                );
            } else if (redirectFromESign) {
                this.props.history.push("/registration?eSignStatus=success");
            } else {
                this.props.history.push(
                    "/registration?mode=proceedRegistration"
                );
            }
        } else if (logInUserName && redirectFromVoiceItVerification) {
            try {
                const response = await axios({
                    url:
                        process.env.VOICEIT_URL +
                        "/apiewallet/video-verifications",
                    method: "get",
                    headers: {
                        Accept: "application/json",
                        Authorization: redirectFromVoiceItVerification
                    },
                    params: {email: authData.email}
                });
                console.log("Response after jwt validation", response);
                if (response && response.data) {
                    console.log("&&&& response data", response.data);
                    debugger;
                    if (
                        response.data.email === authData.email &&
                        response.data.status === "success"
                    ) {
                        const password = this.genKey(
                            `${logInUserName}${privKey}`
                        );
                        this.validateLogin(password, logInUserName);
                    }
                }
            } catch (err) {
                console.log("Error proceeding auth after voiceit", err);
            }
        } else if (logInUserName) {
            //
            window.location.href = `${
                process.env.VOICEIT_URL
            }/video-verification?email=${encodeURIComponent(
                authData.email
            )}&redirectUrl=${window.location.origin}/auth-proceed`;
        } else {
            this.props.history.push("/registration");
        }
    }

    genKey(seed) {
        const key = `P${PrivateKey.fromSeed(seed).toWif()}`;
        return key;
    }

    async unlockAccount(name, password) {
        let chainAccount = ChainStore.getAccount(account);
        while (chainAccount === undefined) {
            chainAccount = ChainStore.getAccount(account);
            console.log("Chain Account", chainAccount);
            await this.timer(1000);
        }
        WalletDb.validatePassword(
            password,
            true,
            name,
            ["active", "owner", "memo"],
            chainAccount
        );
        WalletUnlockActions.checkLock.defer();
    }

    onFinishConfirm(confirmStoreState) {
        if (
            confirmStoreState.included &&
            confirmStoreState.broadcasted_transaction
        ) {
            TransactionConfirmStore.unlisten(this.onFinishConfirm);
            TransactionConfirmStore.reset();

            FetchChain("getAccount", this.state.accountName).then(() => {
                this.props.history.push(
                    "/wallet/backup/create?newAccount=true"
                );
            });
        }
    }

    createAccount(name, password, email, phone_number, first_name, last_name) {
        console.log("data: ", phone_number, name, password);
        const {referralAccount} = AccountStore.getState();
        const registrarAccount = ss.get(
            "account_registration_registrarAccount",
            ""
        );
        AccountActions.createAccountWithPassword(
            name,
            password,
            registrarAccount,
            referralAccount || registrarAccount,
            0,
            "",
            email,
            phone_number,
            first_name,
            last_name,
            password
        )
            .then(() => {
                // debugger;
                AccountActions.setPasswordAccount(name);
                if (registrarAccount) {
                    FetchChain("getAccount", name).then(() => {
                        this.unlockAccount(name, password);
                    });
                    TransactionConfirmStore.listen(this.onFinishConfirm);
                } else {
                    FetchChain("getAccount", name).then(data => {
                        // debugger;
                        console.log("Data in Fetch chain", data);
                    });
                    this.unlockAccount(name, password);
                    this.props.history.push("/market/META1_USDT");
                }
                // if (email) {
                //     this.postWallet(email, name);
                // }
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

    timer = ms => new Promise(res => setTimeout(res, ms));

    async validateLogin(password, account) {
        const {resolve} = this.props;
        let chainAccount = ChainStore.getAccount(account);
        while (chainAccount === undefined) {
            chainAccount = ChainStore.getAccount(account);
            console.log("Chain Account", chainAccount);
            await this.timer(1000);
        }
        const {cloudMode} = WalletDb.validatePassword(
            password || "",
            true, //unlock
            account,
            ["active", "owner", "memo"],
            chainAccount
        );
        // debugger;
        if (WalletDb.isLocked()) {
            this.setState({passwordError: true});
        } else {
            if (cloudMode) AccountActions.setPasswordAccount(account);
            WalletUnlockActions.change();
            // if (stopAskingForBackup) WalletActions.setBackupDate();
            // else if (this.shouldUseBackupLogin()) this.backup();
            if (resolve) resolve();
            WalletUnlockActions.cancel();
            ss.remove("account_login_name");
            this.props.history.push("/market/META1_USDT");
        }
    }

    render() {
        return <LoadingIndicator />;
    }
}

// AuthRedirect = withRouter(AuthRedirect);

export default connect(AuthRedirect, {
    listenTo() {
        return [AuthStore, AccountStore, WalletUnlockStore];
    },
    getProps() {
        return {
            isLoading: AuthStore.getState().isLoading,
            openLogin: AuthStore.getState().openLogin,
            privKey: AuthStore.getState().privKey,
            authData: AuthStore.getState().authData,
            setOpenLoginInstance: AuthStore.setOpenLoginInstance,
            setPrivKey: AuthStore.setPrivKey,
            setAuthData: AuthStore.setAuthData,
            resolve: WalletUnlockStore.getState().resolve
        };
    }
});
