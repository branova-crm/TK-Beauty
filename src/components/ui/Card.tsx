import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
    return (
        <div
            className={cn(
                "bg-white rounded-3xl overflow-hidden border border-muted/20 transition-all duration-500",
                hover && "hover:shadow-2xl hover:-translate-y-1",
                className
            )}
        >
            {children}
        </div>
    );
}
