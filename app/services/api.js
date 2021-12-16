import axios from "axios";

const voiceItApi = axios.create({
    baseURL: process.env.REACT_APP_VOICEIT_API_URL
});

const kycApi = axios.create({
    baseURL: REACT_APP_KYC_API_URL
});

export {voiceItApi, kycApi};
