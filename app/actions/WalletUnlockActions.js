import alt from "alt-instance";
import ls from "common/localStorage";

const STORAGE_KEY = "__meta-ref__";
const ss = new ls(STORAGE_KEY);

class WalletUnlockActions {
    /** If you get resolved then the wallet is or was just unlocked.  If you get
        rejected then the wallet is still locked.

        @return nothing .. Just test for resolve() or reject()
    */
    unlock() {
        return dispatch => {
            return new Promise((resolve, reject) => {
                dispatch({resolve, reject});
            })
                .then(was_unlocked => {
                    //DEBUG  console.log('... WalletUnlockStore\tmodal unlock')
                    if (was_unlocked) WrappedWalletUnlockActions.change();
                })
                .catch(params => {
                    throw params;
                });
        };
    }

    lock() {
        return dispatch => {
            return new Promise(resolve => {
                dispatch({resolve});
            }).then(was_unlocked => {
                var referred_user = ss.get('referred_user_id', 'null');
				localStorage.clear();
				referred_user !== null && referred_user !== 'null' && ss.set('referred_user_id', referred_user);
                if (was_unlocked) WrappedWalletUnlockActions.change();
            });
        };
    }

    cancel() {
        return true;
    }

    change() {
        return true;
    }

    checkLock() {
        return true;
    }
}

var WrappedWalletUnlockActions = alt.createActions(WalletUnlockActions);
export default WrappedWalletUnlockActions;
