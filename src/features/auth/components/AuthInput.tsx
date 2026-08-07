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
    const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);

    const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPreviewUrl(URL.createObjectURL(file));
        } else {
            setPreviewUrl(null);
        }

        if (props.onChange) {
            props.onChange(e);
        }
    };

    return (
        <div className="flex flex-col gap-[5px]">
            <label className="text-[16px] text-(--color-dark)">{label}</label>
            {props.type === 'file' ? (
                <label className={`relative flex items-center w-[400px] h-[40px] rounded-[10px] border border-solid border-(--color-dark)/20 bg-[#FFFFFF] cursor-pointer overflow-hidden hover:border-(--color-primary) transition-colors focus-within:ring-1 focus-within:ring-(--color-primary) focus-within:border-(--color-primary)`}>
                    
                    {previewUrl ? (
                        <img src={previewUrl} alt="Preview" className="absolute left-3 w-[25px] h-[25px] rounded-sm object-cover border border-gray-200" />
                    ) : icon && (
                        <img src={icon} alt="Icone" className="absolute left-3 w-[20px] h-[20px] opacity-60" />
                    )}

                    <span className={`text-[#9CA3AF] text-[15px] truncate ${icon || previewUrl ? 'pl-10' : 'pl-3'}`}>
                        {previewUrl ? "Foto selecionada (clique para trocar)" : (props.placeholder || "Nenhum arquivo...")}
                    </span>

                    <input 
                        {...props} 
                        type="file" 
                        className="hidden" 
                        onChange={handleFileChange} 
                    />
                </label>
            ) : (
            <div className="relative flex items-center">
                {icon && <img src={icon} alt="Icone" className="absolute left-3 w-[20px] h-[20px]" />}
                <input className={`w-[400px] h-[40px] rounded-[10px] border-solid border-(--color-dark)/20 px-3 bg-[#FFFFFF] ${icon ? 'pl-10' : 'pl-3'} focus:border-(--color-primary) outline-none focus:ring-1 focus:ring-(--color-primary)`} {...props} />
                {onTogglePassword && (
                    <button type="button" onClick={onTogglePassword} className="absolute right-3">
                        <img src={showPassword ? hidePassIcon : viewPassIcon} alt="Toggle Password Visibility" className="w-[20px] h-[20px]" />
                    </button>
                )}
            </div>
            )}
        </div>
    );
}