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
        light: "bg-[#EFE4D0]",
        surface: "bg-[#FAF8F5]",
        white: "bg-white",
    };

    return (
        <section id={id} className={cn("px-4 md:px-8 w-full bg-background flex justify-center py-6", className)}>
            <div
                className={cn(
                    "max-w-[1240px] w-full rounded-[28px] md:rounded-[40px] overflow-hidden",
                    variants[variant],
                    "p-7 md:p-14 shadow-premium border border-[#3A3A3A]/[0.06]",
                    innerClassName
                )}
            >
                {children}
            </div>
        </section>
    );
}
