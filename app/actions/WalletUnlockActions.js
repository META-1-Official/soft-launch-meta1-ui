import alt from 'alt-instance';
import ls from 'lib/common/localStorage';

const STORAGE_KEY = '__AuthData__';
const ss = new ls(STORAGE_KEY);

class WalletUnlockActions {
	/** If you get resolved then the wallet is or was just unlocked.  If you get
        rejected then the wallet is still locked.

        @return nothing .. Just test for resolve() or reject()
    */
	unlock() {
		return (dispatch) => {
			return new Promise((resolve, reject) => {
				dispatch({resolve, reject});
			})
				.then((was_unlocked) => {
					//DEBUG  console.log('... WalletUnlockStore\tmodal unlock')
					if (was_unlocked) WrappedWalletUnlockActions.change();
				})
				.catch((params) => {
					throw params;
				});
		};
	}

	unlock_v2() {
		return (dispatch) => {
			return new Promise((resolve, reject) => {
				dispatch({resolve_v2: resolve, reject_v2: reject});
			})
				.then((was_unlocked) => {})
				.catch((params) => {
					throw params;
				});
		};
	}

	lock() {
		const referred_user = ss.get('referred_user_id', 'null');
		const account_login_name = ss.get('account_login_name', '');
		const account_login_token = ss.get('account_login_token', '');

		return (dispatch) => {
			return new Promise((resolve) => {
				dispatch({resolve});
			}).then((was_unlocked) => {
				localStorage.clear();

				// Keep passwordless login info
				referred_user !== null &&
					referred_user !== 'null' &&
					ss.set('referred_user_id', referred_user);
				if (account_login_name)
					ss.set('account_login_name', account_login_name);
				if (account_login_token)
					ss.set('account_login_token', account_login_token);
				if (was_unlocked) WrappedWalletUnlockActions.change();
			});
		};
	}

	lock_v2() {
		return (dispatch) => {
			return new Promise((resolve_v2) => {
				dispatch({resolve_v2});
			}).then((was_unlocked) => {
				localStorage.clear();
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
