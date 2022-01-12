import {voiceItApi} from "./api";

const createVoiceItUser = async () => {
    const {data} = await voiceItApi.post("/users");
    return data;
};

const generateVoiceItUserToken = async voiceItUserId => {
    const {data} = await voiceItApi.post(`/users/${voiceItUserId}/tokens`);
    return data;
};

const getVoiceItPhrases = async contentLanguage => {
    const {data} = await voiceItApi.get(`/phrases/${contentLanguage}`);
    return data;
};

export default {createVoiceItUser, generateVoiceItUserToken, getVoiceItPhrases};
