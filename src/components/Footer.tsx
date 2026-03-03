import Link from "next/link";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#FAF8F5] text-foreground border-t border-[#3A3A3A]/[0.06] pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-16">

                {/* Logo & Intro */}
                <div className="flex flex-col items-center space-y-6 max-w-md">
                    <Link href="/" className="inline-block">
                        <img
                            src="/images/BEAUTYSTUDIO_26.png"
                            alt="TK BEAUTYSTUDIO"
                            className="h-14 w-auto object-contain"
                        />
                    </Link>
                    <p className="text-[#685743] text-sm leading-relaxed">
                        Dein exklusives Studio für moderne Ästhetik und dauerhafte Haarentfernung in Nürnberg. Elegantes Ambiente und modernste Technologie für sichtbar schöne Haut.
                    </p>
                    <a
                        href="https://www.instagram.com/tk_beauty_nuernberg/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border border-[#3A3A3A]/10 flex items-center justify-center text-[#685743] hover:bg-[#EFE4D0] hover:text-foreground transition-all duration-300"
                    >
                        <Instagram className="w-5 h-5" />
                    </a>
                </div>

                {/* Grid Links & Contact */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 w-full border-y border-[#3A3A3A]/[0.04] py-12">
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold tracking-widest text-foreground uppercase">Navigation</h4>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-[#685743] hover:text-primary transition-colors text-sm">Startseite</Link></li>
                            <li><Link href="/behandlungen" className="text-[#685743] hover:text-primary transition-colors text-sm">Behandlungen</Link></li>
                            <li><Link href="/ueber-uns" className="text-[#685743] hover:text-primary transition-colors text-sm">Über uns</Link></li>
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
                                    <MapPin className="w-4 h-4 text-primary" /> Krugstraße 39, 90419 Nürnberg
                                </a>
                            </li>
                            <li className="flex flex-col items-center gap-1">
                                <a
                                    href="tel:01234567890"
                                    className="text-[#685743] hover:text-primary transition-colors text-sm flex items-center gap-2"
                                >
                                    <Phone className="w-4 h-4 text-primary" /> 0123 / 4567890
                                </a>
                            </li>
                            <li className="flex flex-col items-center gap-1">
                                <a
                                    href="mailto:info@tkbeauty-nuernberg.de"
                                    className="text-[#685743] hover:text-primary transition-colors text-sm flex items-center gap-2"
                                >
                                    <Mail className="w-4 h-4 text-primary" /> info@tkbeauty-nuernberg.de
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-bold tracking-widest text-foreground uppercase">Öffnungszeiten</h4>
                        <ul className="space-y-2 text-sm text-[#685743] inline-block text-left">
                            <li className="flex justify-between gap-8 py-1 border-b border-[#3A3A3A]/[0.02]"><span>Mo - Fr:</span> <span>09:00 - 18:00</span></li>
                            <li className="flex justify-between gap-8 py-1 border-b border-[#3A3A3A]/[0.02]"><span>Sa:</span> <span>10:00 - 14:00</span></li>
                            <li className="flex justify-between gap-8 py-1"><span>So:</span> <span>Geschlossen</span></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#8A7A65]">
                    <p>&copy; {currentYear} TK BEAUTYSTUDIO Nürnberg. Alle Rechte vorbehalten.</p>
                    <div className="flex space-x-6">
                        <Link href="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
                        <Link href="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link>
                        <Link href="/agb" className="hover:text-primary transition-colors">AGB</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
