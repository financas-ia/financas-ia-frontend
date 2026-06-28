import AuthLayout from "@/components/layout/AuthLayout";
import LoginForm from "@/features/auth/components/LoginForm";

export default function LoginPage() {
    return(
        <AuthLayout>
            <LoginForm />
            <div className="flex items-center justify-center text-[16px] text-(--color-dark) gap-1 mt-2">
                <span>Esqueceu a senha?</span>
                <a href='/recuperar-senha' className="text-(--color-primary) hover:underline">
                    Clique aqui
                </a>
            </div>
        </AuthLayout>
    );
}