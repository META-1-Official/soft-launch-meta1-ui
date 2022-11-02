import {faceKIApi} from './api';

const liveLinessCheck = async (image) => {
	let form_data = new FormData();
	form_data.append('image', image);
	const {data} = await faceKIApi.post('/face/attribute', form_data, {
		headers: {'content-type': 'multipart/form-data'},
	});
	return data;
};

const enroll = async (image, name) => {
	let form_data = new FormData();
	form_data.append('image', image);
	form_data.append('name', name);

	const {data} = await faceKIApi.post('/enroll_user', form_data, {
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

const user_list = async () => {
	const {data} = await faceKIApi.post('/user_list');
	return data;
};

const remove_user = async (name) => {
	let form_data = new FormData();
	form_data.append('name', name);

	const {data} = await faceKIApi.post('/remove_user', form_data, {
		headers: {'content-type': 'multipart/form-data'},
	});
	return data;
};

const remove_all_user = async () => {
	const {data} = await faceKIApi.post('/remove_all');
	return data;
};

export default {
	liveLinessCheck,
	enroll,
	verify,
	user_list,
	remove_user,
	remove_all_user,
};
