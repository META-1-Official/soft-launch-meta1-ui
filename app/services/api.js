import Axios from 'axios';

const faceKIApi = Axios.create({
	baseURL: `${process.env.LITE_WALLET_URL}`,
});

const kycApi = Axios.create({
	baseURL: `${process.env.ESIGNATURE_URL}/apiewallet`,
});

const explorerApi = Axios.create({
	baseURL: `${process.env.EXPLORER_META1_URL}/api`,
});

const backUrlApi = Axios.create({
	baseURL: `${process.env.LITE_WALLET_URL}`,
});

const migrationApi = Axios.create({
	baseURL: `${process.env.LITE_WALLET_URL}`,
});

export {faceKIApi, kycApi, explorerApi, backUrlApi, migrationApi};
