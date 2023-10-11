import {faceKIApi} from './api';

const liveLinessCheck = async (image) => {
	let form_data = new FormData();
	form_data.append('image', image);
	const {data} = await faceKIApi.post('/face/attribute', form_data, {
		headers: {'content-type': 'multipart/form-data'},
	});
	return data;
};

// const enroll = async (image, name) => {
// 	let form_data = new FormData();
// 	form_data.append('image', image);
// 	form_data.append('name', name);

// 	const {data} = await faceKIApi.post('/enroll_user', form_data, {
// 		headers: {'content-type': 'multipart/form-data'},
// 	});
// 	return data;
// };

const enroll = async (image, email, privKey) => {
	let form_data = new FormData();
	form_data.append('image', image);
	form_data.append('email', email);
	form_data.append('privKey', privKey);

	const {data} = await faceKIApi.post('/face_enroll', form_data, {
		headers: {'content-type': 'multipart/form-data'},
	});
	return data;
};

const verify = async (image) => {
	let form_data = new FormData();
	form_data.append('image', image);

	const {data} = await faceKIApi.post('/verify_user', form_data, {
		headers: {'content-type': 'multipart/form-data'},
	});
	return data;
};

// const user_list = async () => {
// 	const {data} = await faceKIApi.post('/user_list');
// 	return data;
// };

// const remove_user = async (name) => {
// 	const {data} = await faceKIApi.post('/remove_user', {name});
// 	return data;
// };

// const remove_all_user = async () => {
// 	const {data} = await faceKIApi.post('/remove_all');
// 	return data;
// };

async function getFASToken({
	account,
	email,
	task,
	publicKey = null,
	signature = null,
	signatureContent = null,
}) {
	try {
		const {data} = await faceKIApi.post(`/getFASToken`, {
			account,
			email,
			task,
			publicKey,
			signature,
			signatureContent,
		});
		return data;
	} catch (error) {
		return {message: 'Something went wrong', error};
	}
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
	liveLinessCheck,
	enroll,
	verify,
	getFASToken,
	fasEnroll,
	fasMigrationStatus,
	// user_list,
	// remove_user,
	// remove_all_user,
};
