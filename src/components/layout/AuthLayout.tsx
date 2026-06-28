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
import forgotImage from "/forgotImage.svg"

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout( { children }: AuthLayoutProps ) {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname.replace('/', '');
  const pageStates = {
    login: {
      image: loginImage, 
      icon: loginIcon, 
      iconActive: loginIconDark, 
      label: "Login",
      title: "Já faz parte do PredictIA?",
      subtitle: "Por favor, insira suas credenciais para fazer o login"
    },
    cadastro: {
      image: cadastroImage, 
      icon: cadastroIconLight, 
      iconActive: cadastroIcon, 
      label: "Cadastre-se",
      title: "Faça parte do PredictIA ",
      subtitle: "Crie sua conta de maneira gratuita"

    },
    'recuperar-senha': {
      image: forgotImage, 
      icon: null, 
      iconActive: null, 
      label: "Recuperar",
      title: "Esqueceu a senha?",
      subtitle: "Digite seu endereço de e-mail. Enviaremos um token para a recuperação de senha"
    }
  }
  const config = pageStates[currentPage as keyof typeof pageStates] || pageStates.login;

  return (
    <div className="flex flex-row w-full p-10">
      <div className="flex flex-col items-center w-full lg:w-[60%] lg:mt-10">
        <img src="/logoDark.svg" alt="Logo" className="w-[70%] md:w-[40%] lg:w-[30%] mb-8" />
        <div className="flex md:flex-row flex-col  gap-3.5">
          <Button variant={currentPage === 'login'? "primary" : "secondary"} onClick={() => navigate("/login")} icon={currentPage === 'login' ? pageStates.login.icon : pageStates.login.iconActive}>Login</Button>
          <Button variant={currentPage === 'cadastro' ? "primary" : "secondary"} onClick={() => navigate("/cadastro")} icon={currentPage === 'cadastro' ? pageStates.cadastro.icon : pageStates.cadastro.iconActive}>Cadastre-se</Button>
        </div>
        <h1 className="text-xl lg:text-3xl text-(--color-dark) mt-6">{config.title}</h1>
        <p className="text-base lg:text-lg text-(--color-dark)/80 text-center lg:px-[30%] mt-2">{config.subtitle}</p>
        <div className='w-full max-w-[400px] px-2'>
          {children}
        </div>
      </div>
      <div className="hidden lg:flex lg:w-[40%] align-center justify-center mt-10">
        <div className="relative w-[80%] aspect-[3/5] flex items-center justify-center">
          <div className="absolute w-full h-full bg-(--color-primary) rounded-[10px] -translate-x-3 translate-y-3"></div>
          <div className="relative w-full h-full bg-(--color-dark) rounded-[10px] flex items-end">
            <img src={config.image} alt={`Imagem de ${config.label}`}/>
          </div>
        </div>
      </div>
    </div>
  );
}

