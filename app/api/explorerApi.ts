import axios, {AxiosInstance} from 'axios';

class Api {
	private api: AxiosInstance;

	constructor() {
		this.api = axios.create({
			baseURL: `${process.env.EXPLORER_META1_URL}/api/v1/explorer`,
		});
	}

	lookupAccounts = async (start: string): Promise<string[]> => {
		const {data} = await this.api.get('/lookup_accounts', {
			headers: {
				'Content-Type': 'application/json-patch+json',
			},
			params: {start},
		});
		return data;
	};

	lookupAssets = async (start: string): Promise<string[]> => {
		const {data} = await this.api.get('/lookup_assets', {
			headers: {
				'Content-Type': 'application/json-patch+json',
			},
			params: {start: start.toUpperCase()},
		});
		return data;
	};

	lookupTransactions = async (start: string): Promise<string[]> => {
		const {data} = await this.api.get('/lookup_transactions', {
			params: {start},
		});
		return data;
	};
}

export default new Api();
