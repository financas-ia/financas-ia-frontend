import { useState } from 'react';
import { authService } from '@/services/auth.service';

export function useLogin(){
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    

    const [formData, setFormData] = useState({
        email: '',
        senha: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try{
            setIsLoading(true);

            const response = await authService.login({
                email: formData.email,
                password: formData.senha
            });

            localStorage.setItem('@PredictIA:token', response.token);
            alert("Login realizado!")

        } catch (error: any) {
            console.error("Erro no login:", error);
            const errorMessage = error.response?.data?.message || "E-mail ou senha incorretos";
            alert(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        showPassword,
        setShowPassword,
        formData,
        handleChange,
        handleSubmit
    }


}