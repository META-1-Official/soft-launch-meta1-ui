import {pollingApi} from './api';

const createQRPoll = async (qr_hash) => {
	try {
		const {data} = await pollingApi.post('/createPoll', {qr_hash});
		return data;
	} catch (e) {
		return {message: 'Something is wrong', error: true};
	}
};

const findQRPoll = async (qr_hash) => {
	try {
		const {data} = await pollingApi.get(`/findPoll?qr_hash=${qr_hash}`);
		return data;
	} catch (e) {
		return {message: 'Something is wrong', error: true};
	}
};

const setQRPollVerified = async (qr_hash, bio_blob) => {
	let form_data = new FormData();
	form_data.append('image', bio_blob);

	try {
		const {data} = await pollingApi.patch(
			`/updatePoll?qr_hash=${qr_hash}`,
			form_data,
			{headers: {'content-type': 'multipart/form-data'}}
		);
		return data;
	} catch (e) {
		return {message: 'Something is wrong', error: true};
	}
};

const removeQRPoll = async (qr_hash) => {
	try {
		const {data} = await pollingApi.delete(`/removePoll?qr_hash=${qr_hash}`);
		return data;
	} catch (e) {
		return {message: 'Something is wrong', error: true};
	}
};

export default {createQRPoll, findQRPoll, setQRPollVerified, findQRPoll};
