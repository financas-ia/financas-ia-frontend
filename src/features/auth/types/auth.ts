export interface CadastroPayload {
    name: string;
    email: string;
    password: string;
    cpf: string;
    phoneNumber: string;
    dateOfBirth: string;
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