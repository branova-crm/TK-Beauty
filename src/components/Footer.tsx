import Link from "next/link";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary text-white py-16 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand Section */}
                <div className="space-y-6">
                    <Link href="/" className="text-3xl font-serif font-bold tracking-tight text-primary">
                        TK BEAUTY
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                        Ihr exklusives Studio für moderne Ästhetik und dauerhafte Haarentfernung in Nürnberg.
                        Elegantes Ambiente und modernste Technologie für Ihre Schönheit.
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href="https://instagram.com/tk_beauty_nuernberg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-6">
                    <h4 className="text-lg font-serif font-semibold">Links</h4>
                    <ul className="space-y-3">
                        <li><Link href="/behandlungen" className="text-gray-400 hover:text-primary transition-colors text-sm">Behandlungen</Link></li>
                        <li><Link href="/ueber-uns" className="text-gray-400 hover:text-primary transition-colors text-sm">Über uns</Link></li>
                        <li><Link href="/preise" className="text-gray-400 hover:text-primary transition-colors text-sm">Preise</Link></li>
                        <li><Link href="/kontakt" className="text-gray-400 hover:text-primary transition-colors text-sm">Kontakt</Link></li>
                    </ul>
                </div>

                {/* Contact info */}
                <div className="space-y-6">
                    <h4 className="text-lg font-serif font-semibold">Kontakt</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-primary shrink-0" />
                            <span className="text-gray-400 text-sm">Krugstraße 39, 90419 Nürnberg</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-primary shrink-0" />
                            <span className="text-gray-400 text-sm">0123 / 4567890</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-primary shrink-0" />
                            <span className="text-gray-400 text-sm">info@tkbeauty-nuernberg.de</span>
                        </li>
                    </ul>
                </div>

                {/* Opening Hours */}
                <div className="space-y-6">
                    <h4 className="text-lg font-serif font-semibold">Öffnungszeiten</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex justify-between"><span>Mo - Fr:</span> <span>09:00 - 18:00</span></li>
                        <li className="flex justify-between"><span>Sa:</span> <span>10:00 - 14:00</span></li>
                        <li className="flex justify-between"><span>So:</span> <span>Geschlossen</span></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                <p>&copy; {currentYear} TK BEAUTY Nürnberg. Alle Rechte vorbehalten.</p>
                <div className="flex space-x-6">
                    <Link href="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
                    <Link href="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link>
                </div>
            </div>
        </footer>
    );
}
