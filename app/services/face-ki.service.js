import {faceKIApi} from './api';

async function getFASToken({
	account,
	email,
	task,
	publicKey = null,
	signature = null,
	signatureContent = null,
}) {
	const payload = {
		account,
		email,
		task,
		publicKey,
		signature,
		signatureContent,
	};
	return faceKIApi
		.post(`/getFASToken`, payload)
		.then((res) => {
			return res.data;
		})
		.catch((e) => {
			if (e.response && e.response.data && e.response.data.message) {
				return {message: e.response.data.message, error: true};
			} else {
				return {message: 'Something is wrong', error: true};
			}
		});
}

async function fasEnroll(email, privKey, fasToken) {
	try {
		const {data} = await faceKIApi.post(`/fasEnroll`, {
			email,
			privKey,
			fasToken,
		});
		return data;
	} catch (error) {
		return {message: 'Something went wrong', error};
	}
}

async function fasMigrationStatus(email) {
	try {
		const {data} = await faceKIApi.post(`/getFASMigrationStatus`, {email});
		return data;
	} catch (error) {
		return {message: 'Something went wrong', error};
	}
}

export default {
	getFASToken,
	fasEnroll,
	fasMigrationStatus,
};
