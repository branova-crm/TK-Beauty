import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ReactNode, ButtonHTMLAttributes } from "react";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    className?: string;
}

export default function Button({
    children,
    variant = "primary",
    size = "md",
    className,
    ...props
}: ButtonProps) {
    const variants = {
        primary: "relative overflow-hidden text-white border-[1px] border-white/20 bg-gradient-to-br from-[#3A3A3A] to-[#685743] hover:to-[#554734] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_24px_rgba(0,0,0,0.14)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_12px_28px_rgba(0,0,0,0.16)] hover:-translate-y-[1px] active:translate-y-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-[shine_3.5s_infinite]",
        secondary: "text-[#3A3A3A] bg-white/40 backdrop-blur-sm border border-[#3A3A3A]/[0.05] shadow-sm hover:bg-white/60 hover:border-[#3A3A3A]/[0.1] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:-translate-y-[1px] transition-all active:translate-y-0",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        ghost: "text-[#3A3A3A] hover:bg-[#EFE4D0]/50",
    };

    const sizes = {
        sm: "px-4 py-2 text-xs min-h-[36px]",
        md: "px-6 py-3 text-sm font-semibold min-h-[48px]",
        lg: "px-10 py-4 text-base font-bold min-h-[56px]",
    };

    return (
        <button
            suppressHydrationWarning
            className={cn(
                "rounded-full transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
