"use client";

import { MapPin, Instagram, Calendar, MapIcon } from "lucide-react";
import Button from "@/components/ui/Button";
import SurfaceSection from "@/components/ui/SurfaceSection";
import Reveal from "@/components/ui/Reveal";
import { useState, useEffect } from "react";
import ContactModal from "@/components/ContactModal";

interface ContactMapProps {
    isNested?: boolean;
}

export default function ContactMap({ isNested = false }: ContactMapProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openRoute = () => {
        window.open("https://www.google.com/maps/dir/?api=1&destination=Krugstraße+39,+90419+Nürnberg", "_blank");
    };

    const [hasConsent, setHasConsent] = useState(false);

    useEffect(() => {
        const checkConsent = () => {
            const saved = localStorage.getItem("cookie-consent");
            if (saved) {
                const parsed = JSON.parse(saved);
                setHasConsent(!!parsed.marketing);
            }
        };

        checkConsent();
        // Listener for changes (e.g. from CookieBanner)
        window.addEventListener("storage", checkConsent);
        return () => window.removeEventListener("storage", checkConsent);
    }, []);

    const acceptMarketing = () => {
        const saved = localStorage.getItem("cookie-consent");
        const current = saved ? JSON.parse(saved) : { essential: true, analytics: false, marketing: false };
        const newSettings = { ...current, marketing: true };
        localStorage.setItem("cookie-consent", JSON.stringify(newSettings));
        setHasConsent(true);
        window.location.reload(); // Refresh to apply all scripts
    };

    const content = (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* ... rest of the code remains the same but iframe is wrapped ... */}
            <Reveal delay={0.2} className="w-full text-left">
                <div className="space-y-12 max-w-lg">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight text-left">
                            Besuche uns im Studio
                        </h2>
                        <p className="text-lg text-[#685743]">
                            Hast du Fragen oder möchtest einen Termin vereinbaren? Wir sind gerne für dich da.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="mt-1">
                                <MapPin className="w-6 h-6 text-[#8A7A65]" />
                            </div>
                            <div className="space-y-1">
                                <p className="font-semibold text-foreground underline decoration-primary/20 decoration-2 underline-offset-4">Adresse</p>
                                <p className="text-[#685743]">Krugstraße 39,<br />90419 Nürnberg</p>
                            </div>
                        </div>

                        <a
                            href="https://www.instagram.com/tk_beauty_nuernberg/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-4 hover:opacity-80 transition-opacity group"
                        >
                            <div className="mt-1">
                                <Instagram className="w-6 h-6 text-[#8A7A65] group-hover:text-primary transition-colors" />
                            </div>
                            <div className="space-y-1">
                                <p className="font-semibold text-foreground underline decoration-primary/20 decoration-2 underline-offset-4">Instagram</p>
                                <p className="text-[#685743]">@tk_beauty_nuernberg</p>
                            </div>
                        </a>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 pt-4">
                        <Button variant="primary" className="w-full lg:w-fit" onClick={() => setIsModalOpen(true)}>
                            <Calendar className="w-5 h-5 opacity-80" />
                            Termin sichern
                        </Button>
                        <Button variant="secondary" className="w-full lg:w-fit px-8" onClick={openRoute}>
                            <MapIcon className="w-5 h-5 opacity-80 mr-2" />
                            Route öffnen
                        </Button>
                    </div>
                </div>
            </Reveal>

            <Reveal delay={0.4} className="w-full">
                <div className="relative aspect-[4/5] md:aspect-square lg:aspect-auto lg:h-[600px] rounded-[24px] overflow-hidden shadow-premium group border border-[#3A3A3A]/[0.05] bg-[#FAF8F5] flex flex-col items-center justify-center p-8 text-center">
                    {hasConsent ? (
                        <div className="absolute inset-0 transition-all duration-700">
                            <iframe
                                src="https://maps.google.com/maps?q=Krugstra%C3%9Fe%2039%2C%2090419%20N%C3%BCrnberg&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            />
                        </div>
                    ) : (
                        <div className="space-y-6 z-10 max-w-sm">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary">
                                <MapIcon className="w-8 h-8" />
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-serif font-bold text-xl text-foreground">Google Maps blockiert</h4>
                                <p className="text-sm text-[#685743]">
                                    Um die interaktive Karte zu sehen, akzeptieren Sie bitte die Marketing-Cookies.
                                </p>
                            </div>
                            <Button
                                variant="primary"
                                size="sm"
                                className="mx-auto"
                                onClick={acceptMarketing}
                            >
                                Karte aktivieren
                            </Button>
                        </div>
                    )}
                    <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_40px_rgba(239,228,208,0.2)] z-10" />
                </div>
            </Reveal>
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );

    if (isNested) {
        return <div className="w-full">{content}</div>;
    }

    return (
        <SurfaceSection variant="white" id="kontakt" className="!bg-white px-0 md:px-0">
            {content}
        </SurfaceSection>
    );
}
