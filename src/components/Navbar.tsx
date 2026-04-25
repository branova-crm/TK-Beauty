"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import ContactModal from "./ContactModal";
import Button from "@/components/ui/Button";
import Image from "next/image";
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
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        handleScroll();
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
                suppressHydrationWarning
                className={cn(
                    "fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-center px-4 md:px-8",
                    scrolled ? "pt-4" : "pt-0"
                )}
            >
                <div
                    suppressHydrationWarning
                    className={cn(
                        "w-full transition-all duration-500 flex items-center justify-between",
                        scrolled
                            ? "max-w-[1240px] bg-white/80 backdrop-blur-lg border border-[#3A3A3A]/[0.08] shadow-premium rounded-full px-6 lg:px-10 h-20"
                            : "max-w-[1440px] bg-transparent border-transparent h-28 px-0"
                    )}
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/images/BEAUTYSTUDIO_26.png"
                            alt="TK BEAUTYSTUDIO"
                            width={153}
                            height={48}
                            className="object-contain"
                            priority
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
            </nav>

            {/* Full-screen Mobile Menu */}
            {mounted && (
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 w-screen h-screen z-[200] lg:hidden"
                            style={{ backgroundColor: "#FAF8F5" }}
                        >
                            {/* Close Button */}
                            <div className="flex items-center justify-between px-6 pt-6">
                                <Link href="/" onClick={() => setIsOpen(false)}>
                                    <Image
                                        src="/images/BEAUTYSTUDIO_26.png"
                                        alt="TK BEAUTYSTUDIO"
                                        width={128}
                                        height={40}
                                        className="object-contain"
                                    />
                                </Link>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    aria-label="Menü schließen"
                                    className="p-2 text-[#3A3A3A] hover:text-[#BFA67A] transition-colors duration-200"
                                >
                                    <X className="w-7 h-7" />
                                </button>
                            </div>

                            {/* Navigation Links - centered */}
                            <div className="flex flex-col items-center justify-center flex-1 h-[calc(100vh-200px)] px-8">
                                {navLinks.map((link, idx) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 24 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 0.15 + idx * 0.08,
                                            duration: 0.4,
                                            ease: [0.25, 0.46, 0.45, 0.94],
                                        }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="block text-3xl font-serif font-bold text-center py-5 text-[#3A3A3A] hover:text-[#BFA67A] transition-colors duration-200 tracking-wide"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}

                                {/* CTA Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: 0.15 + navLinks.length * 0.08,
                                        duration: 0.4,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                    }}
                                    className="mt-8 w-full max-w-xs"
                                >
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        onClick={() => {
                                            setIsOpen(false);
                                            setIsModalOpen(true);
                                        }}
                                        className="w-full shadow-premium py-5 text-base"
                                    >
                                        <Calendar className="w-5 h-5" />
                                        Termin sichern
                                    </Button>
                                </motion.div>
                            </div>

                            {/* Bottom Info */}
                            <div className="absolute bottom-8 left-0 right-0 text-center">
                                <p className="text-xs uppercase tracking-[0.2em] text-[#8A7A65] font-semibold">
                                    TK BEAUTY · Nürnberg
                                </p>
                                <p className="text-xs text-[#8A7A65]/60 mt-1">
                                    Mo–Sa: nach Vereinbarung
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            )}

            {mounted && <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
        </>
    );
}
