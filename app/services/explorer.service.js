import {explorerApi} from './api';

const getDexVolume = async () => {
	const {data} = await explorerApi.get('/v1/explorer/dex_total_volume');
	return data;
};

export default {
	getDexVolume,
};
