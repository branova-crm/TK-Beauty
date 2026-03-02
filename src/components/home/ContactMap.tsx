"use client";

import { MapPin, Instagram, Calendar, MapIcon } from "lucide-react";
import Button from "@/components/ui/Button";
import SurfaceSection from "@/components/ui/SurfaceSection";
import Reveal from "@/components/ui/Reveal";

export default function ContactMap() {
    return (
        <SurfaceSection variant="white" id="kontakt" className="!bg-white px-0 md:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <Reveal delay={0.2} className="w-full">
                    <div className="space-y-12 max-w-lg">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
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
                                    <p className="font-semibold text-foreground">Adresse</p>
                                    <p className="text-[#685743]">Krugstraße 39,<br />90419 Nürnberg</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1">
                                    <Instagram className="w-6 h-6 text-[#8A7A65]" />
                                </div>
                                <div className="space-y-1">
                                    <p className="font-semibold text-foreground">Instagram</p>
                                    <p className="text-[#685743]">@tk_beauty_nuernberg</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button variant="primary">
                                <Calendar className="w-5 h-5 opacity-80" />
                                Termin sichern
                            </Button>
                            <Button variant="secondary" className="px-8">
                                <MapIcon className="w-5 h-5 opacity-80 mr-2" />
                                Route öffnen
                            </Button>
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={0.4} className="w-full">
                    <div className="relative aspect-[4/5] md:aspect-square lg:aspect-auto lg:h-[600px] rounded-[24px] overflow-hidden shadow-premium group border border-[#3A3A3A]/[0.06]">
                        {/* Map iframe placeholder using Google Maps Embed API or simple static image for performance */}
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

                        {/* Custom Marker overlay removed because iframe takes over, or kept if map is static */}
                        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_40px_rgba(239,228,208,0.5)] z-10" />
                    </div>
                </Reveal>
            </div>
        </SurfaceSection>
    );
}
