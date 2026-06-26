// Funcionalidades
import {useNavigate, useLocation} from 'react-router-dom'

// Componentes
import Button from "../ui/Button";

// Icons
import loginIcon from "/loginIcon.svg";
import cadastroIcon from "/cadastroIcon.svg";
import loginIconDark from "/loginIconDark.svg";
import cadastroIconLight from "/cadastroIconLight.svg";

// Images
import loginImage from "/loginImage.svg";
import cadastroImage from "/cadastroImage.svg";

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout( { children }: AuthLayoutProps ) {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoginActive = location.pathname === "/login";
  const isCadastroActive = location.pathname === "/cadastro";

  return (
    <div className="flex flex-row w-full p-10">
      <div className="flex flex-col items-center justify-center w-[60%] mt-10">
        <img src="/logoDark.svg" alt="Logo" className="w-[30%] mb-8" />
        <div className="flex flex-row gap-[14px]">
          <Button variant={isLoginActive ? "primary" : "secondary"} onClick={() => navigate("/login")} icon={isLoginActive ? loginIcon : loginIconDark}>Login</Button>
          <Button variant={isCadastroActive ? "primary" : "secondary"} onClick={() => navigate("/cadastro")} icon={isCadastroActive ? cadastroIconLight : cadastroIcon}>Cadastre-se</Button>
        </div>
        <h1 className="text-[28px] text-(--color-dark) mt-6">Já faz parte do PredictIA?</h1>
        <p className="text-[18px] text-(--color-dark)/80 text-center px-[30%] mt-2">Por favor, insira suas credenciais para fazer o login</p>
        <div>
          {children}
        </div>
      </div>
      <div className="flex w-[40%] h-full align-center justify-center mt-10">
          <div className="absolute w-[550px] h-full left-[830px] bg-(--color-primary) rounded-[10px]"></div>
          <div className="absolute w-[563.1px] h-full left-[850px] top-[60px] bg-(--color-dark) rounded-[10px] content-end">
            <img src={isLoginActive ? loginImage : cadastroImage} alt={isLoginActive ? "Imagem de Login" : "Imagem de Cadastro"}/>
          </div>
      </div>
    </div>
  );
}

