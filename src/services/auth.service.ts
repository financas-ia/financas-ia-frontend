import { api } from "@/services/api";
import type {CadastroPayload, LoginPayload, AuthResponse} from "@/features/auth/types/auth";

export interface UserResponse {
    id: string;
    name: string;
    email: string;
}

export const authService = {

    cadastro: async(payload: CadastroPayload): Promise<UserResponse> => {
        const response = await api.post<UserResponse>('/users', payload);
        return response.data;
    },

    login: async(payload: LoginPayload): Promise<AuthResponse> => {
        const response = await api.post<AuthResponse>('/auth/login', payload);
        return response.data;
    },

    uploadFoto: async(idUsuario: string, payloadFoto: FormData, tokenJwt: string) => {
        const response = await api.patch(`/users/${idUsuario}/photo`, payloadFoto, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${tokenJwt}`
            }
        });

        return response.data;
    }

}
