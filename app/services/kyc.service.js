import {kycApi} from './api';

const getUserKycProfile = async (email) => {
	const {data} = await kycApi.get('/users', {params: {email}});
	return data;
};

const postUserKycProfile = async (email, facekiID) => {
	const {data} = await kycApi.post('/users', {
		email,
		facekiID,
	});
	return data;
};

const updateUserKycProfile = async (email, payload, token) => {
	const {data} = await kycApi.patch(`/users/update?email=${email}`, payload, {
		headers: {
			authorization: token,
		},
	});
	return data;
};

export default {
	getUserKycProfile,
	postUserKycProfile,
	updateUserKycProfile,
};
