import BaseStore from './BaseStore';
import alt from 'alt-instance';
import {Web3AuthNoModal} from '@web3auth/no-modal';
import {CHAIN_NAMESPACES} from '@web3auth/base';
import {OpenloginAdapter} from '@web3auth/openlogin-adapter';
import SettingsStore from 'stores/SettingsStore';
import {EthereumPrivateKeyProvider} from '@web3auth/ethereum-provider';
import ltService from '../services/litewallet.service';

class AuthStore extends BaseStore {
	constructor() {
		super();

		this._export(
			'setLoading',
			'setPrivKey',
			'setOpenLoginInstance',
			'setAuthData',
			'setAccountName',
			'setNotifications'
		);

		this.state = {
			isLoading: true,
			openLogin: null,
			privKey: '',
			authData: null,
			error: '',
			accountName: '',
			notifications: null, // for new notification system
		};

		this.setLoading = this.setLoading.bind(this);
		this.setPrivKey = this.setPrivKey.bind(this);
		this.setAuthData = this.setAuthData.bind(this);
		this.setOpenLoginInstance = this.setOpenLoginInstance.bind(this);
		this.setError = this.setError.bind(this);
		this.setAccountName = this.setAccountName.bind(this);
		this.setNotifications = this.setNotifications.bind(this);
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

	async setNotifications(accountName) {
		var notifications = await ltService.getNotifications(accountName);
		this.setState({notifications});
	}

	async setOpenLoginInstance() {
		const theme = SettingsStore.getState().settings.get('themes');
		const chainConfig = {
			chainNamespace: CHAIN_NAMESPACES.EIP155,
			chainId: '0x1',
			rpcTarget: process.env.RPC_TARGET,
			blockExplorer: process.env.BLOCK_EXPLORER,
			displayName: process.env.DISPLAY_NAME,
			ticker: 'ETH',
			tickerName: 'Ethereum',
		};

		try {
			const privateKeyProvider = new EthereumPrivateKeyProvider({
				config: {chainConfig},
			});

			const openloginAdapter = new OpenloginAdapter({
				loginSettings: {
					mfaLevel: 'none',
				},
				adapterSettings: {
					uxMode: 'redirect',
					redirectUrl: window.location.origin + '/auth-proceed',
					whiteLabel: {
						appName: 'META1',
						defaultLanguage: 'en',
						mode: theme === 'darkTheme' ? 'dark' : 'light',
						logoLight:
							'https://pbs.twimg.com/profile_images/980143928769839105/hK3RnAff_400x400.jpg',
						logoDark:
							'https://pbs.twimg.com/profile_images/980143928769839105/hK3RnAff_400x400.jpg',
					},
				},
				privateKeyProvider,
			});

			const openLogin = new Web3AuthNoModal({
				clientId: process.env.TORUS_PROJECT_ID,
				web3AuthNetwork: process.env.TORUS_NETWORK,
				chainConfig,
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
