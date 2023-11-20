import {backUrlApi} from './api';

const getNotifications = async (accountName) => {
	try {
		const {data} = await backUrlApi.post('/getNotifications', {accountName});
		return data;
	} catch (e) {
		return {message: 'Something is wrong', error: true};
	}
};

export default {
	getNotifications,
};
