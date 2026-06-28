import AuthLayout from "@/components/layout/AuthLayout";
import ForgotForm from "@/features/auth/components/ForgotForm";

export default function ForgotPage(){
    return(
        <AuthLayout>
            <ForgotForm></ForgotForm>
        </AuthLayout>
    );

}