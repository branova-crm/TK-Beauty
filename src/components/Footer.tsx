"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, MapPin, Phone, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { BUSINESS, OPENING_HOURS, PHONE_FOOTNOTE } from "@/lib/site";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#FAF8F5] text-foreground border-t border-[#3A3A3A]/[0.06] pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-16">
                <div className="flex flex-col items-center space-y-6 max-w-md">
                    <Link href="/" className="inline-block">
                        <Image
                            src="/images/BEAUTYSTUDIO_26.png"
                            alt="TK BEAUTYSTUDIO"
                            width={179}
                            height={56}
                            className="h-14 w-auto object-contain"
                        />
                    </Link>
                    <p className="text-[#685743] text-sm leading-relaxed">
                        Dein exklusives Studio für moderne Ästhetik und dauerhafte Haarentfernung in Nürnberg. Elegantes Ambiente und modernste Technologie für sichtbar schöne Haut.
                    </p>
                    <a
                        href={BUSINESS.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border border-[#3A3A3A]/10 flex items-center justify-center text-[#685743] hover:bg-[#EFE4D0] hover:text-foreground transition-all duration-300"
                    >
                        <Instagram className="w-5 h-5" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 w-full border-y border-[#3A3A3A]/[0.04] py-12">
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold tracking-widest text-foreground uppercase">Navigation</h4>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-[#685743] hover:text-primary transition-colors text-sm">Startseite</Link></li>
                            <li><Link href="/behandlungen" className="text-[#685743] hover:text-primary transition-colors text-sm">Behandlungen</Link></li>
                            <li><Link href="/preise" className="text-[#685743] hover:text-primary transition-colors text-sm">Preise</Link></li>
                            <li><Link href="/termin" className="text-[#685743] hover:text-primary transition-colors text-sm">Termin buchen</Link></li>
                            <li><Link href="/kontakt" className="text-[#685743] hover:text-primary transition-colors text-sm">Kontakt</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-bold tracking-widest text-foreground uppercase">Kontakt</h4>
                        <ul className="space-y-4 flex flex-col items-center">
                            <li className="flex flex-col items-center gap-1">
                                <a
                                    href="https://www.google.com/maps/dir/?api=1&destination=Krugstraße+39,+90419+Nürnberg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#685743] hover:text-primary transition-colors text-sm flex items-center gap-2"
                                >
                                    <MapPin className="w-4 h-4 text-primary" /> {BUSINESS.street}, {BUSINESS.postalCode} {BUSINESS.city}
                                </a>
                            </li>
                            <li className="flex flex-col items-center gap-1">
                                <a
                                    href={BUSINESS.phoneHref}
                                    className="text-[#685743] hover:text-primary transition-colors text-sm flex items-center gap-2"
                                >
                                    <Phone className="w-4 h-4 text-primary" /> {BUSINESS.phone}*
                                </a>
                                <p className="text-xs text-[#8A7A65] max-w-xs">{PHONE_FOOTNOTE}</p>
                            </li>
                            <li className="flex flex-col items-center gap-1">
                                <a
                                    href={`mailto:${BUSINESS.email}`}
                                    className="text-[#685743] hover:text-primary transition-colors text-sm flex items-center gap-2"
                                >
                                    <Mail className="w-4 h-4 text-primary" /> {BUSINESS.email}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-bold tracking-widest text-foreground uppercase">Öffnungszeiten</h4>
                        <ul className="space-y-2 text-sm text-[#685743] inline-block text-left">
                            <li className="flex justify-between gap-8 py-1 border-b border-[#3A3A3A]/[0.02]">
                                <span>Mo – Sa:</span> <span>9:00 – 20:00</span>
                            </li>
                            <li className="flex justify-between gap-8 py-1">
                                <span>So:</span> <span>Geschlossen</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 text-xs text-[#8A7A65]">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center md:items-start group cursor-default"
                    >
                        <p className="text-base font-medium tracking-tight">
                            © {currentYear} TK BEAUTYSTUDIO.
                        </p>
                        <a
                            href="https://branova.de"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-base text-foreground mt-1 group-hover:text-primary transition-all duration-500"
                        >
                            Designed with
                            <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                className="text-red-400 inline-block drop-shadow-[0_0_8px_rgba(248,113,113,0.3)]"
                            >
                                ❤
                            </motion.span>
                            by
                            <span className="font-bold underline decoration-primary/20 underline-offset-8 decoration-2 group-hover:decoration-primary/60 transition-all duration-500">
                                Branova.de
                            </span>
                        </a>
                    </motion.div>

                    <div className="flex space-x-8 text-xs font-bold tracking-widest uppercase opacity-60">
                        <Link href="/cookies" className="hover:text-primary transition-colors">Cookies</Link>
                        <Link href="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
                        <Link href="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
