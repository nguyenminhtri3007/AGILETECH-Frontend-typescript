import { AppConfig } from "../../common/config/app.config"; 
import { ServiceCore } from "../../common/service/service.core"; 
import { AuthModel } from "../models/auth.model"; 

export const signIn = async (data: AuthModel) => {
    try {
        const domain = new AppConfig().getDomain();
        const response = await ServiceCore.POST(
            `${domain}`,
            `auth/login`,
            data
        );

        return response;
    } catch (error) {
        throw error;
    }
}