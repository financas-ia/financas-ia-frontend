import { useState } from 'react';
import { authService } from '@/services/auth.service';
import {toast} from 'react-toastify';

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
        fotoPerfil: null as File | null

    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value, type, files} = e.target;
        setFormData(prev => ({...prev, [name]: type === 'file' && files ? files[0] : value}));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (step === 0){
            setStep(1);
            return;
        }

        if (formData.senha !== formData.confirmarSenha){
            toast.error('As senhas não coincidem!');
            return;
        }

        try {
            setIsLoading(true);

            const responseCadastro = await authService.cadastro({
                name: formData.nome,
                email: formData.email,
                phoneNumber: formData.telefone,
                cpf: formData.cpf,
                dateOfBirth: formData.dataNascimento,
                password: formData.senha,

            });

            const idUsuario = responseCadastro.id;

            if(formData.fotoPerfil && idUsuario){

                const responseLogin = await authService.login({
                    email: formData.email,
                    password: formData.senha
                });

                const tokenJwt = responseLogin.token;

                const fotoPayload = new FormData();
                fotoPayload.append("photo", formData.fotoPerfil);

                await authService.uploadFoto(idUsuario, fotoPayload, tokenJwt);

            }

            toast.success('Cadastro realizado com sucesso!');
            
        }catch (error: any){
            console.error("Erro no cadastro: ", error);
            const errorMessage = error.response?.data?.message || "Erro ao realizar cadastro";
            toast.error(errorMessage);
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