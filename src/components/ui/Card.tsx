import { ReactNode, HTMLAttributes } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    hover?: boolean;
}

export default function Card({ children, className, hover = true, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "bg-[#FAF8F5] rounded-[32px] overflow-hidden border-2 border-[#3A3A3A]/[0.08] transition-all duration-500 shadow-sm",
                hover && "hover:shadow-premium hover:-translate-y-1",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
