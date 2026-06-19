"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Calendar } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { OPENING_HOURS } from "@/lib/site";
import { siteImages } from "@/data/site-images";
import "./Header.css";

const navLinks = [
    { name: "Behandlungen", href: "/behandlungen" },
    { name: "Über uns", href: "/ueber-uns" },
    { name: "Preise", href: "/preise" },
    { name: "Kontakt", href: "/kontakt" },
];

export default function Header() {
    const [mounted, setMounted] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 300);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [mounted]);

    useEffect(() => {
        if (!mounted) return;

        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen, mounted]);

    if (!mounted) return null;

    return (
        <>
            <header className="header-top">
                <div className="header-top-inner">
                    <Link href="/" className="header-logo">
                        <Image
                            src={siteImages.logo.src}
                            alt={siteImages.logo.alt}
                            width={260}
                            height={82}
                            className="object-contain"
                            priority
                        />
                    </Link>

                    <div className="header-desktop-nav">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="header-nav-link">
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/termin">
                            <Button variant="primary" size="sm" className="shadow-premium">
                                <Calendar className="w-4 h-4 opacity-80" />
                                Termin sichern
                            </Button>
                        </Link>
                    </div>

                    <button
                        className="header-mobile-btn"
                        onClick={() => setIsOpen(true)}
                        aria-label="Menü öffnen"
                    >
                        <Menu className="w-8 h-8" />
                    </button>
                </div>
            </header>

            <div className={`sticky-nav${isScrolled ? " visible" : ""}`}>
                <div className="sticky-inner">
                    <Link href="/" className="header-logo sticky-logo">
                        <Image
                            src={siteImages.logo.src}
                            alt={siteImages.logo.alt}
                            width={180}
                            height={57}
                            className="object-contain"
                        />
                    </Link>

                    <div className="header-desktop-nav">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="sticky-nav-link">
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/termin">
                            <Button variant="primary" size="sm" className="shadow-premium">
                                <Calendar className="w-4 h-4 opacity-80" />
                                Termin sichern
                            </Button>
                        </Link>
                    </div>

                    <button
                        className="header-mobile-btn"
                        onClick={() => setIsOpen(true)}
                        aria-label="Menü öffnen"
                    >
                        <Menu className="w-8 h-8" />
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="offcanvas-overlay"
                    >
                        <div className="offcanvas-header">
                            <Link href="/" className="header-logo" onClick={() => setIsOpen(false)}>
                                <Image
                                    src={siteImages.logo.src}
                                    alt={siteImages.logo.alt}
                                    width={128}
                                    height={40}
                                    className="object-contain"
                                />
                            </Link>
                            <button
                                className="offcanvas-close-btn"
                                onClick={() => setIsOpen(false)}
                                aria-label="Menü schließen"
                            >
                                <X className="w-7 h-7" />
                            </button>
                        </div>

                        <div className="offcanvas-body">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: 0.12 + idx * 0.07,
                                        duration: 0.4,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        className="offcanvas-link"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.12 + navLinks.length * 0.07,
                                    duration: 0.4,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                }}
                                className="offcanvas-cta-wrap"
                            >
                                <Link href="/termin" onClick={() => setIsOpen(false)}>
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        className="w-full shadow-premium"
                                        style={{ paddingTop: 20, paddingBottom: 20 }}
                                    >
                                        <Calendar className="w-5 h-5" />
                                        Termin sichern
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>

                        <div className="offcanvas-footer">
                            <p className="offcanvas-footer-title">TK BEAUTY · Nürnberg</p>
                            <p className="offcanvas-footer-sub">{OPENING_HOURS.shortLabel}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
