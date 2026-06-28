import AuthLayout from "@/components/layout/AuthLayout";
import CadastroForm from "@/features/auth/components/CadastroForm";

export default function CadastroPage() {
    return(
        <AuthLayout>
            <CadastroForm />
        </AuthLayout>
    );
}
