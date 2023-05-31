import BaseStore from './BaseStore';
import alt from 'alt-instance';
import {Web3AuthNoModal} from '@web3auth/no-modal';
import {CHAIN_NAMESPACES} from '@web3auth/base';
import {OpenloginAdapter} from '@web3auth/openlogin-adapter';
import SettingsStore from 'stores/SettingsStore';

class AuthStore extends BaseStore {
	constructor() {
		super();

		this._export(
			'setLoading',
			'setPrivKey',
			'setOpenLoginInstance',
			'setAuthData',
			'setAccountName'
		);

		this.state = {
			isLoading: true,
			openLogin: null,
			privKey: '',
			authData: null,
			error: '',
			accountName: '',
		};

		this.setLoading = this.setLoading.bind(this);
		this.setPrivKey = this.setPrivKey.bind(this);
		this.setAuthData = this.setAuthData.bind(this);
		this.setOpenLoginInstance = this.setOpenLoginInstance.bind(this);
		this.setError = this.setError.bind(this);
		this.setAccountName = this.setAccountName.bind(this);
	}

	setLoading(isLoading) {
		this.setState({isLoading});
	}

	setPrivKey(privKey) {
		this.setState({privKey});
	}

	setAuthData(authData) {
		this.setState({authData});
	}

	setError(error) {
		this.setState({error});
	}

	setAccountName(accountName) {
		this.setState({accountName});
	}

	async setOpenLoginInstance() {
		const theme = SettingsStore.getState().settings.get('themes');
		try {
			const openloginAdapter = new OpenloginAdapter({
				adapterSettings: {
					uxMode: 'redirect',
					redirectUrl: window.location.origin + '/auth-proceed',
					whiteLabel: {
						name: 'META1',
						defaultLanguage: 'en',
						dark: theme === 'darkTheme' ? true : false,
						logoLight:
							'https://pbs.twimg.com/profile_images/980143928769839105/hK3RnAff_400x400.jpg',
						logoDark:
							'https://pbs.twimg.com/profile_images/980143928769839105/hK3RnAff_400x400.jpg',
					},
				},
			});

			const openLogin = new Web3AuthNoModal({
				clientId: process.env.TORUS_PROJECT_ID,
				web3AuthNetwork: process.env.TORUS_NETWORK,
				chainConfig: {
					chainNamespace: CHAIN_NAMESPACES.EIP155,
					rpcTarget: 'https://rpc.ankr.com/eth',
					chainId: '0x1',
				},
			});

			openLogin.configureAdapter(openloginAdapter);
			await openLogin.init();

			this.setState({openLogin, isLoading: false, error: ''});
		} catch (error) {
			this.setState({
				openLogin: null,
				isLoading: false,
				error,
			});
		}
	}
}

export default alt.createStore(AuthStore, 'AuthStore');
