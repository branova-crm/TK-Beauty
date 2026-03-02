"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import ContactModal from "./ContactModal";
import Button from "@/components/ui/Button";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const navLinks = [
    { name: "Behandlungen", href: "/behandlungen" },
    { name: "Über uns", href: "/ueber-uns" },
    { name: "Preise", href: "/preise" },
    { name: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-center px-4 md:px-8",
                    scrolled ? "pt-4" : "pt-0"
                )}
            >
                <div
                    className={cn(
                        "w-full transition-all duration-500 flex items-center justify-between",
                        scrolled
                            ? "max-w-[1240px] bg-white/80 backdrop-blur-lg border border-[#3A3A3A]/[0.08] shadow-premium rounded-full px-6 md:px-10 h-20"
                            : "max-w-[1440px] bg-transparent border-transparent h-28 px-0"
                    )}
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <img
                            src="/images/BEAUTYSTUDIO_26.png"
                            alt="TK BEAUTYSTUDIO"
                            className="h-12 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-semibold text-foreground hover:text-primary transition-colors duration-200 uppercase tracking-widest"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={() => setIsModalOpen(true)}
                            className="shadow-premium"
                        >
                            <Calendar className="w-4 h-4 opacity-80" />
                            Termin sichern
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-foreground p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6 outline-none" /> : <Menu className="w-6 h-6 outline-none" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-[#EFE4D0] border-t border-[#3A3A3A]/10 p-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block text-lg font-bold text-foreground hover:text-primary uppercase tracking-widest"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <Button
                                variant="primary"
                                onClick={() => {
                                    setIsOpen(false);
                                    setIsModalOpen(true);
                                }}
                                className="w-full shadow-premium"
                            >
                                <Calendar className="w-5 h-5 opacity-80" />
                                Termin sichern
                            </Button>
                        </div>
                    </div>
                )}
            </nav>
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
