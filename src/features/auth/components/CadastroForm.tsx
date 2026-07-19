import AuthInput from "@/features/auth/components/AuthInput";
import Button from '@/components/ui/Button';
import { useCadastro } from "@/hooks/useCadastro";

// Icons
import emailIcon from "@/features/auth/assets/emailIcon.svg";
import nameIcon from "@/features/auth/assets/nameIcon.svg";
import telefoneIcon from "@/features/auth/assets/telefoneIcon.svg";
import cpfIcon from "@/features/auth/assets/cpfIcon.svg";
import googleIcon from "@/features/auth/assets/googleIcon.svg";
import photoIcon from "@/features/auth/assets/photoIcon.svg";
import passwordIcon from "@/features/auth/assets/passwordIcon.svg";



export default function CadastroForm() {
    const {
        step,
        setStep,
        isLoading,
        showPassword,
        setShowPassword,
        showConfirmPassword,
        setShowConfirmPassword,
        formData,
        handleChange,
        handleSubmit
    } = useCadastro();

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-[15px] mt-5">
            {step === 0 ? (
                <>
                    <AuthInput name="nome" label="Nome" type="text" value={formData.nome} onChange={handleChange} placeholder="Digite seu nome" icon={nameIcon} />
                    <AuthInput name="email" label="Endereço de e-mail" value={formData.email} onChange={handleChange} type="email" placeholder="Digite seu email" icon={emailIcon}/>
                    <AuthInput name="telefone" label="Telefone" type="text" value={formData.telefone} onChange={handleChange} placeholder="Digite seu telefone" icon={telefoneIcon} />
                    <AuthInput name="cpf" label="CPF" type="text" value={formData.cpf} onChange={handleChange} placeholder="Digite seu CPF" icon={cpfIcon} />
                </>
            ) : (
                <>
                    <AuthInput name="dataNascimento" label="Data de Nascimento" type="date" value={formData.dataNascimento} onChange={handleChange} placeholder="Digite sua data de nascimento" />
                    <AuthInput name="senha" label="Senha" type={showPassword ? "text" : "password"} value={formData.senha} onChange={handleChange} placeholder="Digite sua senha" icon={passwordIcon} showPassword={showPassword} onTogglePassword={() => setShowPassword(!showPassword)} />
                    <AuthInput name="confirmarSenha" label="Confirmar Senha" type={showConfirmPassword ? "text" : "password"} value={formData.confirmarSenha} onChange={handleChange} placeholder="Confirme sua senha" icon={passwordIcon} showPassword={showConfirmPassword} onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)} />
                    <AuthInput name="fotoPerfil" label="Foto de Perfil" type="text" value={formData.fotoPerfil} onChange={handleChange} placeholder="Escolha uma foto de perfil" icon={photoIcon} />
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
                <Button type="submit" size='md' disabled={isLoading}>{isLoading ? "Cadastrando..." : "Cadastrar"}</Button>
                </>
            )}
        </form>
    );
}