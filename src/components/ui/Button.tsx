interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md';
    icon?: string;
}

export default function Button({ variant = 'primary', icon, size='sm', ...props }: ButtonProps) {
    const sizeClasses = size === 'sm' ? 'px-3 py-2' : 'px-4 py-5';
    const baseClasses = ' flex justify-center items-center gap-[10px] h-[28px] rounded-[10px] p-3 cursor-pointer outline-(--color-primary) transition-colors duration-300 ease-in-out hover:opacity-80';
    const variantClasses = variant === 'primary' ? 'bg-(--color-secondary) text-(--color-background)' : 'bg-(--color-background) text-(--color-dark) shadow-[0px_0px_4px_rgba(0,0,0,0.25)]';

    return (
        <>
        <button className={`${baseClasses} ${variantClasses} ${sizeClasses}`} {...props}>
            {icon && (
            <img src={icon} alt="Logo" className="w-[24px] h-[24px]" />
            )}
            {props.children}
        </button>
        </>
    );
}
