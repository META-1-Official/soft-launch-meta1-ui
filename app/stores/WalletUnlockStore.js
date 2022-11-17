import alt from 'alt-instance';
import WalletUnlockActions from 'actions/WalletUnlockActions';
import SettingsActions from 'actions/SettingsActions';
import WalletDb from 'stores/WalletDb';
import ls from 'common/localStorage';
import {
	setLocalStorageType,
	isPersistantType,
} from '../lib/common/localStorage';

const STORAGE_KEY = '__graphene__';
let ss = new ls(STORAGE_KEY);

class WalletUnlockStore {
	constructor() {
		this.bindActions(WalletUnlockActions);

		// can't use settings store due to possible initialization race conditions
		const storedSettings = ss.get('settings_v4', {});
		if (storedSettings.passwordLogin === undefined) {
			storedSettings.passwordLogin = true;
		}
		if (storedSettings.passwordlessLogin === undefined) {
			storedSettings.passwordlessLogin = false;
		}
		let passwordLogin = storedSettings.passwordLogin;
		const passwordlessLogin = storedSettings.passwordlessLogin;
		this.state = {
			locked: true,
			locked_v2: true,
			passwordLogin,
			passwordlessLogin,
			rememberMe:
				storedSettings.rememberMe === undefined
					? true
					: storedSettings.rememberMe,
		};

		this.walletLockTimeout = this._getTimeout(); // seconds (15 minutes)
		this.timeout = null;

		this.bindListeners({
			onChangeSetting: SettingsActions.changeSetting,
		});

		// let timeoutSetting = this._getTimeout();

		// if (timeoutSetting) {
		//     this.walletLockTimeout = timeoutSetting;
		// }
	}

	onUnlock({resolve, reject}) {
		//DEBUG console.log('... onUnlock setState', WalletDb.isLocked())
		//
		this._setLockTimeout();
		if (!WalletDb.isLocked()) {
			this.setState({locked: false});
			resolve();
			return;
		}

		this.setState({resolve, reject, locked: WalletDb.isLocked()});
	}

	onUnlock_v2({resolve_v2, reject_v2}) {
		// this._setLockTimeout();
		if (!WalletDb.isLocked()) {
			this.setState({locked: false});
			resolve_v2();
			return;
		}

		this.setState({resolve_v2, reject_v2, locked_v2: WalletDb.isLocked()});
	}

	onLock({resolve}) {
		//DEBUG console.log('... WalletUnlockStore\tprogramatic lock', WalletDb.isLocked())
		if (WalletDb.isLocked()) {
			resolve();
			return;
		}
		WalletDb.onLock();
		this.setState({
			resolve: null,
			reject: null,
			locked: WalletDb.isLocked(),
		});
		if (!this.state.rememberMe && !isPersistantType()) {
			setLocalStorageType('persistant');
		}
		resolve();
	}

	onLock_v2({resolve_v2}) {
		if (WalletDb.isLocked()) {
			resolve_v2();
			return;
		}
		// WalletDb.onLock_v2();
		this.setState({
			resolve_v2: null,
			reject_v2: null,
			locked_v2: WalletDb.isLocked(),
		});
		resolve_v2();
	}

	onCancel() {
		if (typeof this.state.reject === 'function')
			this.state.reject({isCanceled: true});

		if (typeof this.state.reject_v2 === 'function')
			this.state.reject_v2({isCanceled: true});

		this.setState({
			resolve: null,
			resolve_v2: null,
			reject: null,
			reject_v2: null,
		});
	}

	onChange() {
		this.setState({locked: WalletDb.isLocked()});
	}

	onChangeSetting(payload) {
		if (payload.setting === 'walletLockTimeout') {
			this.walletLockTimeout = payload.value;
			this._clearLockTimeout();
			this._setLockTimeout();
		} else if (payload.setting === 'passwordLogin') {
			this.setState({
				passwordLogin: payload.value,
			});
		} else if (payload.setting === 'passwordlessLogin') {
			this.setState({
				passwordlessLogin: payload.value,
			});
		} else if (payload.setting === 'rememberMe') {
			this.setState({
				rememberMe: payload.rememberMe,
			});
		}
	}

	_setLockTimeout() {
		this._clearLockTimeout();
		/* If the timeout is different from zero, auto unlock the wallet using a timeout */
		if (!!this.walletLockTimeout) {
			this.timeout = setTimeout(() => {
				if (!WalletDb.isLocked()) {
					console.log('auto locking after', this.walletLockTimeout, 's');
					WalletDb.onLock();
					this.setState({locked: true});
				}
			}, this.walletLockTimeout * 1000);
		}
	}

	_clearLockTimeout() {
		if (this.timeout) {
			clearTimeout(this.timeout);
			this.timeout = null;
		}
	}

	_getTimeout() {
		return parseInt(ss.get('lockTimeout', 900), 10);
	}

	onCheckLock() {
		this.setState({locked: WalletDb.isLocked()});
	}
}

export default alt.createStore(WalletUnlockStore, 'WalletUnlockStore');
