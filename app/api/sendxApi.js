import axios from 'axios';

const LITE_WALLET_BACKEND_URL = process.env.LITE_WALLET_URL;

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
		});
	}

	// subscribe = async (payload: SubscribeParams) => {
	subscribe = async (payload) => {
		const {data} = await this.api.post(`/sendx/subscribe`, payload);
		return data;
	};
}

export default new SendXApi();
