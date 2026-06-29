import AuthInput from "@/features/auth/components/AuthInput";
import Button from '@/components/ui/Button';

// Icons
import emailIcon from "@/features/auth/assets/emailIcon.svg";
import nameIcon from "@/features/auth/assets/nameIcon.svg";
import telefoneIcon from "@/features/auth/assets/telefoneIcon.svg";
import cpfIcon from "@/features/auth/assets/cpfIcon.svg";
import googleIcon from "@/features/auth/assets/googleIcon.svg";
import photoIcon from "@/features/auth/assets/photoIcon.svg";
import passwordIcon from "@/features/auth/assets/passwordIcon.svg";

import React, { useState } from "react";


export default function CadastroForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [step, setStep] = useState(0);
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (step === 0) {
            setStep(1);
        } else {
            alert("Cadastro concluído!");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-[15px] mt-5">
            {step === 0 ? (
                <>
                    <AuthInput label="Nome" type="text" placeholder="Digite seu nome" icon={nameIcon} />
                    <AuthInput label="Endereço de e-mail" type="email" placeholder="Digite seu email" icon={emailIcon}/>
                    <AuthInput label="Telefone" type="text" placeholder="Digite seu telefone" icon={telefoneIcon} />
                    <AuthInput label="CPF" type="text" placeholder="Digite seu CPF" icon={cpfIcon} />
                </>
            ) : (
                <>
                    <AuthInput label="Data de Nascimento" type="date" placeholder="Digite sua data de nascimento" />
                    <AuthInput label="Senha" type={showPassword ? "text" : "password"} placeholder="Digite sua senha" icon={passwordIcon} showPassword={showPassword} onTogglePassword={() => setShowPassword(!showPassword)} />
                    <AuthInput label="Confirmar Senha" type={showConfirmPassword ? "text" : "password"} placeholder="Confirme sua senha" icon={passwordIcon} showPassword={showConfirmPassword} onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)} />
                    <AuthInput label="Foto de Perfil" type="text" placeholder="Escolha uma foto de perfil" icon={photoIcon} />
                </>
            )}
            {step === 0 ? (
                <>
                    <Button size='md'>Continuar</Button>
                    <div className="flex items-center justify-center gap-4 text-sm text-[var(--color-dark)] mt-1">
                        <div className="w-[100%] h-[1px] bg-[var(--color-dark)]/60"></div>
                        <span>ou</span>
                        <div className="w-[100%] h-[1px] bg-[var(--color-dark)]/60"></div>
                    </div>
                    <Button type="button" size='md' icon={googleIcon} onClick={() => alert("Cadastro com Google!")}>
                        Cadastrar com o Google
                    </Button>
                </>
            ) : (
                <>
                <Button type="button" size='md' onClick={() => setStep(0)}>
                    Voltar
                </Button>
                <Button type="button" size='md'>Cadastrar</Button>
                </>
            )}
        </form>
    );
}