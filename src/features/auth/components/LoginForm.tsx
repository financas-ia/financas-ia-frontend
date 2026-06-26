// Components
import AuthInput from "@/features/auth/components/AuthInput";
import Button from "@/components/ui/Button";

// Icons
import emailIcon from "@/features/auth/assets/emailIcon.svg";
import passwordIcon from "@/features/auth/assets/passwordIcon.svg";
import googleIcon from "@/features/auth/assets/googleIcon.svg";
import React from "react";

const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert("Enviando infos para o back!");
};

const handleGoogleLogin = () => {
    alert("Login com Google!");
};

export default function LoginForm() {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
        <form onSubmit= {handleSubmit} className="flex flex-col gap-[15px] mt-5">
            <AuthInput label="Endereço de e-mail" type="email" placeholder="Digite seu email" icon={emailIcon} />
            <AuthInput label="Senha" type={showPassword ? "text" : "password"} placeholder="Digite sua senha" icon={passwordIcon} showPassword={showPassword} onTogglePassword={() => setShowPassword(!showPassword)} />
            <Button size='md'>Entrar</Button>
            <Button type="button" size='md' icon={googleIcon} onClick={handleGoogleLogin}>
                Acessar com o Google
            </Button>
        </form>
    );
}