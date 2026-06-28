import AuthInput from "@/features/auth/components/AuthInput";
import Button from '@/components/ui/Button';

// Icons
import emailIcon from "@/features/auth/assets/emailIcon.svg";

export default function ForgotForm(){
    
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        alert("Enviando infos para o back!");
    };

    return(
        <>  
            <form onSubmit={handleSubmit} className="flex flex-col gap-[15px] mt-5">
                <AuthInput label="Endereço de e-mail" type="email" placeholder="Digite seu email" icon={emailIcon}/>
                <AuthInput label="Confirmar endereço de e-mail" type="email" placeholder="Digite novamente seu email" icon={emailIcon}/>
                <Button size='md'>Enviar</Button> 
            </form>
        </>
    );

}