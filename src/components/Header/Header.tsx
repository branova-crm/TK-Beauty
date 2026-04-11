"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Calendar } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ContactModal from "../ContactModal";
import Button from "@/components/ui/Button";
import "./Header.css";

/* ──────────────────────────────────────────────
   Navigation Data
   ────────────────────────────────────────────── */
const navLinks = [
    { name: "Behandlungen", href: "/behandlungen" },
    { name: "Über uns", href: "/ueber-uns" },
    { name: "Preise", href: "/preise" },
    { name: "Kontakt", href: "/kontakt" },
];

/* ──────────────────────────────────────────────
   Header Component
   ────────────────────────────────────────────── */
export default function Header() {
    const [mounted, setMounted] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    /* ── Mount guard ────────────────────────── */
    useEffect(() => {
        setMounted(true);
    }, []);

    /* ── Scroll listener ────────────────────── */
    useEffect(() => {
        if (!mounted) return;

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 300);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [mounted]);

    /* ── Lock body scroll when offcanvas open ── */
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

    /* ── Prevent SSR mismatch: render nothing until mounted ── */
    if (!mounted) return null;

    return (
        <>
            {/* ═══════════════════════════════════
                1. TOP HEADER (transparent, over hero)
                ═══════════════════════════════════ */}
            <header className="header-top">
                <div className="header-top-inner">
                    {/* Logo */}
                    <Link href="/" className="header-logo">
                        <Image
                            src="/images/BEAUTYSTUDIO_26.png"
                            alt="TK BEAUTYSTUDIO"
                            width={153}
                            height={48}
                            className="object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="header-desktop-nav">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="header-nav-link"
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

                    {/* Mobile Hamburger */}
                    <button
                        className="header-mobile-btn"
                        onClick={() => setIsOpen(true)}
                        aria-label="Menü öffnen"
                    >
                        <Menu className="w-8 h-8" />
                    </button>
                </div>
            </header>

            {/* ═══════════════════════════════════
                2. STICKY NAV (Glass Pill)
                ═══════════════════════════════════ */}
            <div className={`sticky-nav${isScrolled ? " visible" : ""}`}>
                <div className="sticky-inner">
                    {/* Logo */}
                    <Link href="/" className="header-logo">
                        <Image
                            src="/images/BEAUTYSTUDIO_26.png"
                            alt="TK BEAUTYSTUDIO"
                            width={128}
                            height={40}
                            className="object-contain"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="header-desktop-nav">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="sticky-nav-link"
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

                    {/* Mobile Hamburger */}
                    <button
                        className="header-mobile-btn"
                        onClick={() => setIsOpen(true)}
                        aria-label="Menü öffnen"
                    >
                        <Menu className="w-8 h-8" />
                    </button>
                </div>
            </div>

            {/* ═══════════════════════════════════
                3. OFFCANVAS MOBILE MENU (Full Screen)
                ═══════════════════════════════════ */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="offcanvas-overlay"
                    >
                        {/* Header row */}
                        <div className="offcanvas-header">
                            <Link
                                href="/"
                                className="header-logo"
                                onClick={() => setIsOpen(false)}
                            >
                                <Image
                                    src="/images/BEAUTYSTUDIO_26.png"
                                    alt="TK BEAUTYSTUDIO"
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

                        {/* Navigation links */}
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

                            {/* CTA */}
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
                                <Button
                                    variant="primary"
                                    size="lg"
                                    onClick={() => {
                                        setIsOpen(false);
                                        setIsModalOpen(true);
                                    }}
                                    className="w-full shadow-premium"
                                    style={{ paddingTop: 20, paddingBottom: 20 }}
                                >
                                    <Calendar className="w-5 h-5" />
                                    Termin sichern
                                </Button>
                            </motion.div>
                        </div>

                        {/* Footer */}
                        <div className="offcanvas-footer">
                            <p className="offcanvas-footer-title">
                                TK BEAUTY · Nürnberg
                            </p>
                            <p className="offcanvas-footer-sub">
                                Mo–Sa: nach Vereinbarung
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ═══════════════════════════════════
                4. CONTACT MODAL
                ═══════════════════════════════════ */}
            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
