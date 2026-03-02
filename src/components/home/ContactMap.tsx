"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SurfaceSection from "@/components/ui/SurfaceSection";
import Reveal from "@/components/ui/Reveal";

export default function ContactMap() {
    return (
        <SurfaceSection variant="surface" id="kontakt">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <Reveal delay={0.2}>
                    <div className="space-y-12">
                        <SectionTitle
                            title="Besuche uns im Studio"
                            subtitle="Standort"
                            align="left"
                            className="mb-0"
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-premium flex items-center justify-center text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <p className="font-serif font-black text-secondary">Adresse</p>
                                    <p className="text-gray-500 text-sm">Musterstraße 123,<br />90402 Nürnberg</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-premium flex items-center justify-center text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <p className="font-serif font-black text-secondary">Kontakt</p>
                                    <p className="text-gray-500 text-sm">0123 / 4567890<br />info@tk-beauty.de</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-premium flex items-center justify-center text-primary">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <p className="font-serif font-black text-secondary">Öffnungszeiten</p>
                                    <p className="text-gray-500 text-sm">Mo - Fr: 09:00 - 20:00 Uhr<br />Sa: 10:00 - 16:00 Uhr</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={0.4}>
                    <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl bg-muted group">
                        <div className="absolute inset-0 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000">
                            {/* Hier käme normal eine Google Maps Einbindung via Iframe hin */}
                            <div className="w-full h-full bg-[#e5e3df] flex items-center justify-center text-gray-400 font-serif italic text-lg p-12 text-center">
                                Interaktive Karte von Nürnberg <br />
                                (Google Maps Integration bereit)
                            </div>
                        </div>

                        {/* Custom Marker Placeholder */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="relative">
                                <div className="w-12 h-12 bg-primary rounded-full shadow-2xl animate-pulse" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-4 h-4 bg-white rounded-full shadow-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </SurfaceSection>
    );
}
