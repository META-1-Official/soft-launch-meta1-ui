import axios from "axios";

const voiceItApi = axios.create({
    baseURL: "https://humankyc.cryptomailsvc.io/api" // process.env.REACT_APP_VOICEIT_API_URL
});

const kycApi = axios.create({
    baseURL: "https://humankyc.cryptomailsvc.io/apiewallet" // process.env.REACT_APP_KYC_API_URL
});

export {voiceItApi, kycApi};
