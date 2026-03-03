"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import ContactModal from "./ContactModal";
import Button from "@/components/ui/Button";

import { AnimatePresence, motion } from "framer-motion";

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

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

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
                            ? "max-w-[1240px] bg-white/80 backdrop-blur-lg border border-[#3A3A3A]/[0.08] shadow-premium rounded-full px-6 lg:px-10 h-20"
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
                    <div className="hidden lg:flex items-center space-x-8">
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
                        className="lg:hidden text-foreground p-2"
                        onClick={() => setIsOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu className="w-8 h-8 outline-none" />
                    </button>
                </div>

                {/* Off-canvas Mobile Menu */}
                <AnimatePresence mode="wait">
                    {isOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsOpen(false)}
                                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] lg:hidden"
                            />

                            {/* Drawer Content */}
                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-[#FAF8F5] z-[70] lg:hidden shadow-2xl flex flex-col pt-8"
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between px-8 mb-12">
                                    <Link href="/" onClick={() => setIsOpen(false)}>
                                        <img
                                            src="/images/BEAUTYSTUDIO_26.png"
                                            alt="TK BEAUTYSTUDIO"
                                            className="h-10 w-auto"
                                        />
                                    </Link>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 text-foreground/70 hover:text-primary transition-colors"
                                    >
                                        <X className="w-8 h-8" />
                                    </button>
                                </div>

                                {/* Links */}
                                <div className="flex flex-col px-8 space-y-2">
                                    {navLinks.map((link, idx) => (
                                        <motion.div
                                            key={link.name}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + idx * 0.1 }}
                                        >
                                            <Link
                                                href={link.href}
                                                className="block text-2xl font-serif font-bold text-foreground py-4 border-b border-[#3A3A3A]/[0.06] hover:text-primary transition-colors"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Footer / Action */}
                                <div className="mt-auto p-8 bg-white/40">
                                    <p className="text-xs uppercase tracking-[0.2em] text-[#8A7A65] font-bold mb-6">
                                        Bereit für Ihren Glow?
                                    </p>
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        onClick={() => {
                                            setIsOpen(false);
                                            setIsModalOpen(true);
                                        }}
                                        className="w-full shadow-premium py-6 text-lg"
                                    >
                                        <Calendar className="w-5 h-5" />
                                        Termin sichern
                                    </Button>

                                    <div className="mt-10 flex flex-col space-y-3 opacity-60">
                                        <p className="text-sm font-medium">TK BEAUTY Nürnberg</p>
                                        <p className="text-xs">Mo-Sa: nach Vereinbarung</p>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </nav>
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
