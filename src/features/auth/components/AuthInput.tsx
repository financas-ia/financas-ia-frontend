import hidePassIcon from "@/features/auth/assets/hidePassIcon.svg";
import viewPassIcon from "@/features/auth/assets/viewPassIcon.svg";
import React from "react"; 

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    icon?: string;
    onTogglePassword?: () => void;
    showPassword?: boolean;
}

export default function AuthInput({ label, icon, onTogglePassword, showPassword, ...props }: AuthInputProps) {
    return (
        <div className="flex flex-col gap-[5px]">
            <label className="text-[16px] text-(--color-dark)">{label}</label>
            <div className="relative flex items-center">
                {icon && <img src={icon} alt="Icone" className="absolute left-3 w-[20px] h-[20px]" />}
                <input className="w-[400px] h-[40px] rounded-[10px] border-solid border-(--color-dark)/20 px-3 bg-[#FFFFFF] pl-10" {...props} />
                {onTogglePassword && (
                    <button type="button" onClick={onTogglePassword} className="absolute right-3">
                        <img src={showPassword ? hidePassIcon : viewPassIcon} alt="Toggle Password Visibility" className="w-[20px] h-[20px]" />
                    </button>
                )}
            </div>
        </div>
    );
}