import { useState } from 'react';
import { authService } from '@/services/auth.service';

export function useCadastro(){

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [step, setStep] = useState(0);

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        cpf: '',
        dataNascimento: '',
        senha: '', 
        confirmarSenha: '',
        fotoPerfil: ''

    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (step === 0){
            setStep(1);
            return;
        }

        if (formData.senha !== formData.confirmarSenha){
            alert("Senhas não coincidem!");
            return;
        }

        try {
            setIsLoading(true);

            await authService.cadastro({
                name: formData.nome,
                email: formData.email,
                phone: formData.telefone,
                cpf: formData.cpf,
                birthDate: formData.dataNascimento,
                password: formData.senha,
                avatar: formData.fotoPerfil
            });

            alert("Cadastro realizado!");
            
        }catch (error: any){
            console.error("Erro no cadastro: ", error);
            const errorMessage = error.response?.data?.message || "Erro ao realizar cadastro";
            alert(errorMessage);
        }finally{
            setIsLoading(false);
        }
    };

    return {
        step,
        setStep,
        isLoading,
        showPassword,
        setShowPassword,
        showConfirmPassword,
        setShowConfirmPassword,
        formData,
        setFormData,
        handleChange,
        handleSubmit
    };

}