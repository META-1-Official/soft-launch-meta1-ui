import {kycApi} from "./api";

const getUserKycProfile = async email => {
    try {
        const {data} = await kycApi.get("/users", {params: {email}});
        return [data, null];
    } catch (error) {
        return [null, error];
    }
};

export default {getUserKycProfile};
