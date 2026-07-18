import { api } from "@/services/api";
import type {CadastroPayload, LoginPayload, AuthResponse} from "@/features/auth/types/auth";

export const authService = {

    cadastro: async(payload: CadastroPayload): Promise<AuthResponse> => {
        const response = await api.post<AuthResponse>('/auth/cadastro', payload);
        return response.data;
    },

    login: async(payload: LoginPayload): Promise<AuthResponse> => {
        const response = await api.post<AuthResponse>('/auth/login', payload);
        return response.data;
    }

}
