import BaseStore from './BaseStore';
import alt from 'alt-instance';
import OpenLogin from '@toruslabs/openlogin';

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
		// this.setOpenLoginInstance();
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

	setOpenLoginInstance() {
		try {
			const openLogin = new OpenLogin({
				clientId: process.env.TORUS_PROJECT_ID,
				network: process.env.TORUS_NETWORK,
				uxMode: 'redirect',
				redirectUrl: window.location.origin + '/auth-proceed',
				whiteLabel: {
					name: 'META1',
					dark: true,
				},
			});
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
