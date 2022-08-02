import axios from 'axios';

const faceKIApi = axios.create({
	baseURL: `${process.env.FACEKI_URL}`,
});

const kycApi = axios.create({
	baseURL: `${process.env.ESIGNATURE_URL}/apiewallet`,
});

const explorerApi = axios.create({
	baseURL: `${process.env.EXPLORER_META1_URL}/api`, // process.env.EXPLORER_META1_URL
});

export {faceKIApi, kycApi, explorerApi};
