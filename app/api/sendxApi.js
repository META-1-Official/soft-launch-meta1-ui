import axios from 'axios';
import ls from '../lib/common/localStorage';

const ss = new ls('__AuthData__');

const LITE_WALLET_BACKEND_URL = process.env.REACT_APP_BACK_URL;

// interface SubscribeParams {
//   email: string;
//   tags: Array<string>;
//   firstName?: string;
//   lastName?: string;
//   newEmail?: string;
//   company?: string;
//   birthday?: string;
//   customFields?: any;
// }

class SendXApi {
	// private api: AxiosInstance;

	constructor() {
		this.api = axios.create({
			baseURL: LITE_WALLET_BACKEND_URL,
			headers: {
				Authorization: `Bearer ${ss.get('account_login_token', null)}`,
			},
		});
	}

	// subscribe = async (payload: SubscribeParams) => {
	subscribe = async (payload) => {
		const {data} = await this.api.post(`/sendx/subscribe`, payload);
		return data;
	};
}

export default new SendXApi();
