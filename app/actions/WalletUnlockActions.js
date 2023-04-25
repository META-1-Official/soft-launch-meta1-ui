import alt from 'alt-instance';
import ls from 'lib/common/localStorage';

const ls_auth = new ls('__AuthData__');
const ls_graphene = new ls('__graphene__');

class WalletUnlockActions {
	unlock() {
		return (dispatch) => {
			return new Promise((resolve, reject) => {
				dispatch({resolve, reject});
			})
				.then((was_unlocked) => {
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
				.then(() => {})
				.catch((params) => {
					throw params;
				});
		};
	}

	lock() {
		const referred_user = ls_auth.get('referred_user_id', 'null');
		const account_login_name = ls_auth.get('account_login_name', '');
		const account_login_token = ls_auth.get('account_login_token', '');

		return (dispatch) => {
			return new Promise((resolve) => {
				dispatch({resolve});
			}).then((was_unlocked) => {
				localStorage.clear();

				// Keep passwordless login info
				referred_user !== null &&
					referred_user !== 'null' &&
					ls_auth.set('referred_user_id', referred_user);
				if (account_login_name)
					ls_auth.set('account_login_name', account_login_name);
				if (account_login_token)
					ls_auth.set('account_login_token', account_login_token);
				if (was_unlocked) WrappedWalletUnlockActions.change();
			});
		};
	}

	lock_v2() {
		return (dispatch) => {
			return new Promise((resolve_v2) => {
				dispatch({resolve_v2});
			}).then(() => {
				ls_graphene.remove('currentAccount');
				ls_graphene.remove('passwordlessAccount');
				ls_graphene.remove('currentAccount_1e265722');
				ls_graphene.remove('passwordlessAccount_1e265722');
				ls_auth.remove('account_login_name');
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
