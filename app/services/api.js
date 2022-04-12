import axios from "axios";

const voiceItApi = axios.create({
    baseURL: `${process.env.VOICEIT_URL}/api` // process.env.REACT_APP_VOICEIT_API_URL
});

const kycApi = axios.create({
    baseURL: `${process.env.VOICEIT_URL}/apiewallet` // process.env.REACT_APP_KYC_API_URL
});

export {voiceItApi, kycApi};
