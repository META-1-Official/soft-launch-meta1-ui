import BaseStore from './BaseStore';
import alt from 'alt-instance';
import {Web3AuthCore} from '@web3auth/core';
import {CHAIN_NAMESPACES} from '@web3auth/base';
import {OpenloginAdapter} from '@web3auth/openlogin-adapter';

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
		console.log('setOPEN call');
		try {
			const openloginAdapter = new OpenloginAdapter({
				adapterSettings: {
					uxMode: 'redirect',
					redirectUrl: window.location.origin + '/auth-proceed',
					whiteLabel: {
						name: 'META1',
						defaultLanguage: 'en',
						dark: true,
					},
				},
			});

			const openLogin = new Web3AuthCore({
				clientId: process.env.TORUS_PROJECT_ID,
				web3AuthNetwork: process.env.TORUS_NETWORK,
				chainConfig: {
					chainNamespace: CHAIN_NAMESPACES.EIP155,
					rpcTarget: 'https://rpc.ankr.com/eth',
					chainId: '0x1',
				},
			});

			openLogin.configureAdapter(openloginAdapter);

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
