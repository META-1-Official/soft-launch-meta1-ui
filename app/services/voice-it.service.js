import {voiceItApi} from "./api";

const createVoiceItUser = async () => {
    try {
        const {data} = await voiceItApi.post("/users");
        return [data, null];
    } catch (error) {
        return [null, data];
    }
};

const generateVoiceItUserToken = async voiceItUserId => {
    try {
        const {data} = await voiceItApi.post(`/users/${voiceItUserId}/tokens`);
        return [data, null];
    } catch (error) {
        return [null, data];
    }
};

const getVoiceItPhrases = async contentLanguage => {
    try {
        const {data} = await voiceItApi.get(`/phrases/${contentLanguage}`);
        return [data, null];
    } catch (error) {
        return [null, data];
    }
};

export default {createVoiceItUser, generateVoiceItUserToken, getVoiceItPhrases};
