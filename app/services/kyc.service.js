import {kycApi} from './api';

const getUserKycProfile = async (email) => {
	const {data} = await kycApi.get('/users', {params: {email}});
	return data;
};

const postUserKycProfile = async (email, voiceitID) => {
	const {data} = await kycApi.post('/users', {
		email,
		voiceitID,
	});
	return data;
};

const postVoiceItEnrollment = async (email, status) => {
	const {headers} = await kycApi.post('/video-enrollments', {
		email,
		status,
	});
	return headers;
};

const getEnrollmentData = async (jwt, email) => {
	const {data} = await kycApi.get(
		process.env.VOICEIT_URL + '/apiewallet/video-enrollments',
		{
			headers: {
				Accept: 'application/json',
				Authorization: jwt,
			},
			params: {email},
		}
	);
	return data;
};

const postVoiceItVerification = async (email, status) => {
	const {headers} = await kycApi.post('/video-verifications', {
		email,
		status,
	});
	return headers;
};

const getVerificationData = async (jwt, email) => {
	const {data} = await kycApi.get(
		process.env.VOICEIT_URL + '/apiewallet/video-verifications',
		{
			headers: {
				Accept: 'application/json',
				Authorization: jwt,
			},
			params: {email},
		}
	);
	return data;
};

export default {
	getUserKycProfile,
	postUserKycProfile,
	postVoiceItEnrollment,
	getEnrollmentData,
	postVoiceItVerification,
	getVerificationData,
};
