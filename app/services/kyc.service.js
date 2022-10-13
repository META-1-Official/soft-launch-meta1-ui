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

export default {
	getUserKycProfile,
	postUserKycProfile,
};
