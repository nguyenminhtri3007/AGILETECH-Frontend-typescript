import { AuthModel } from "../models/auth.model";
import * as AuthService from "../services/auth.service";

export const signIn = async (data: AuthModel) => {
    try {
        const result = await AuthService.signIn(data);
        return result;
    } catch (error) {
        throw error;
    }
}