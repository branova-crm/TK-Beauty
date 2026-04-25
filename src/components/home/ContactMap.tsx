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
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    const openRoute = () => {
        window.open("https://www.google.com/maps/dir/?api=1&destination=Krugstraße+39,+90419+Nürnberg", "_blank");
    };

    const content = (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
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
                <div className="relative aspect-[4/5] md:aspect-square lg:aspect-auto lg:h-[600px] rounded-[24px] overflow-hidden shadow-premium group border border-[#3A3A3A]/[0.05] bg-[#FAF8F5] flex flex-col items-center justify-center text-center">
                    <div className="absolute inset-0 transition-all duration-700">
                        {mounted && (
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
                        )}
                    </div>
                    {/* The placeholder is now handled by eRecht24 (CCM19) if necessary */}
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
