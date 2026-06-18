"use client";

import { ChevronDown, HelpCircle, Package, Sparkles, Zap, type LucideIcon } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ReactNode } from "react";
import { useLayoutEffect, useRef } from "react";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export type PreisAccordionIconKey = "zap" | "package" | "sparkles" | "help";

const ICONS: Record<PreisAccordionIconKey, LucideIcon> = {
    zap: Zap,
    package: Package,
    sparkles: Sparkles,
    help: HelpCircle,
};

export type PreisAccordionPanelProps = {
    id: string;
    title: string;
    subtitle?: ReactNode;
    icon?: LucideIcon;
    iconKey?: PreisAccordionIconKey;
    isOpen: boolean;
    onToggle: () => void;
    children: ReactNode;
};

export default function PreisAccordionPanel({
    title,
    subtitle,
    icon,
    iconKey = "help",
    isOpen,
    onToggle,
    children,
}: PreisAccordionPanelProps) {
    const rootRef = useRef<HTMLDivElement>(null);
    const viewportAnchorRef = useRef<number | null>(null);

    const isValidIcon =
        typeof icon === "function" || (typeof icon === "object" && icon !== null);
    const Icon = isValidIcon ? icon! : (ICONS[iconKey] ?? HelpCircle);

    const handleToggle = () => {
        if (rootRef.current) {
            viewportAnchorRef.current = rootRef.current.getBoundingClientRect().top;
        }
        onToggle();
    };

    useLayoutEffect(() => {
        const topBefore = viewportAnchorRef.current;
        if (topBefore === null || !rootRef.current) return;
        viewportAnchorRef.current = null;

        const topAfter = rootRef.current.getBoundingClientRect().top;
        const delta = topAfter - topBefore;
        if (Math.abs(delta) > 1) {
            window.scrollBy({ top: delta, left: 0, behavior: "instant" });
        }
    }, [isOpen]);

    return (
        <div
            ref={rootRef}
            className={cn(
                "rounded-[20px] bg-white border border-[#3A3A3A]/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow duration-300 [overflow-anchor:none]",
                isOpen && "shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
            )}
        >
            <button
                type="button"
                onMouseDown={(event) => event.preventDefault()}
                onClick={handleToggle}
                aria-expanded={isOpen}
                className="w-full flex items-center gap-4 md:gap-5 p-4 md:p-5 text-left hover:bg-[#3A3A3A]/[0.02] rounded-[20px] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
            >
                <span className="shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#EFE4D0]/60 flex items-center justify-center text-[#554734] border border-[#3A3A3A]/[0.06]">
                    <Icon className="w-5 h-5 md:w-[22px] md:h-[22px]" aria-hidden />
                </span>
                <span className="flex-1 min-w-0">
                    <span className="block font-bold text-foreground text-base md:text-lg leading-snug">{title}</span>
                    {subtitle ? (
                        <span className="block text-sm text-[#8A7A65] mt-0.5 leading-snug">{subtitle}</span>
                    ) : null}
                </span>
                <ChevronDown
                    className={cn(
                        "shrink-0 w-5 h-5 text-[#685743] transition-transform duration-300",
                        isOpen && "rotate-180"
                    )}
                    aria-hidden
                />
            </button>
            {isOpen ? (
                <div className="border-t border-[#3A3A3A]/[0.08] rounded-b-[20px] overflow-hidden bg-[#FAF8F5]/90">
                    {children}
                </div>
            ) : null}
        </div>
    );
}
