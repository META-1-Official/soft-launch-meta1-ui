import axios from 'axios';

const faceKIApi = axios.create({
	baseURL: `${process.env.LITE_WALLET_URL}`,
});

const kycApi = axios.create({
	baseURL: `${process.env.ESIGNATURE_URL}/apiewallet`,
});

const explorerApi = axios.create({
	baseURL: `${process.env.EXPLORER_META1_URL}/api`,
});

const backUrlApi = axios.create({
	baseURL: `${process.env.LITE_WALLET_URL}`,
});

const migrationApi = axios.create({
	baseURL: `${process.env.LITE_WALLET_URL}`,
});

const pollingApi = axios.create({
	baseURL: `${process.env.LITE_WALLET_URL}`,
});

export {faceKIApi, kycApi, explorerApi, backUrlApi, migrationApi, pollingApi};
