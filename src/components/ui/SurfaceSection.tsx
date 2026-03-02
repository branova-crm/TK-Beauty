import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface SurfaceSectionProps {
    children: ReactNode;
    className?: string;
    innerClassName?: string;
    variant?: "light" | "surface" | "white";
    id?: string;
}

export default function SurfaceSection({
    children,
    className,
    innerClassName,
    variant = "surface",
    id
}: SurfaceSectionProps) {
    const variants = {
        light: "bg-background",
        surface: "bg-[#f5f5f3]",
        white: "bg-white",
    };

    return (
        <section id={id} className={cn("px-4 sm:px-6 py-12 sm:py-24", className)}>
            <div
                className={cn(
                    "max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden",
                    variants[variant],
                    "p-8 sm:p-20 shadow-premium",
                    innerClassName
                )}
            >
                {children}
            </div>
        </section>
    );
}
