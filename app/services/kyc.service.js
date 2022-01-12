import {kycApi} from "./api";

const getUserKycProfile = async email => {
    const {data} = await kycApi.get("/users", {params: {email}});
    return data;
};

const postUserKycProfile = async (email, voiceitID) => {
    const {data} = await kycApi.post("/users", {
        email,
        voiceitID
    });
    return data;
};

export default {getUserKycProfile, postUserKycProfile};
