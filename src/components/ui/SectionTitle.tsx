import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    align?: "left" | "center";
    className?: string;
}

export default function SectionTitle({
    title,
    subtitle,
    align = "center",
    className,
}: SectionTitleProps) {
    return (
        <div
            className={cn(
                "mb-12 space-y-3",
                align === "center" ? "text-center mx-auto" : "text-left",
                className
            )}
        >
            {subtitle && (
                <span className="text-primary font-semibold text-sm uppercase tracking-widest block animate-in fade-in slide-in-from-bottom-2 duration-700">
                    {subtitle}
                </span>
            )}
            <h2 className="text-3xl md:text-5xl font-serif text-secondary tracking-tight text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                {title}
            </h2>
        </div>
    );
}
