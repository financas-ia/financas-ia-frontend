export interface CadastroPayload {
    name: string;
    email: string;
    password: string;
    cpf: string;
    phone: string;
    birthDate: string;
    avatar: string;
}

export interface LoginPayload {
    email: string;
    password: string;
}

export interface AuthResponse {
    token: string;
    user: {
        id: string;
        name: string;
        email: string;
    };
}