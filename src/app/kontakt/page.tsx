"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactMap from "@/components/home/ContactMap";
import Button from "@/components/ui/Button";
import SurfaceSection from "@/components/ui/SurfaceSection";
import Reveal from "@/components/ui/Reveal";
import Card from "@/components/ui/Card";
import { Mail, Phone, Calendar, Clock, MapPin } from "lucide-react";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function KontaktPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <main className="min-h-screen bg-creme pt-32">
            <Navbar />

            <SurfaceSection variant="light" className="py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
                    <Reveal className="space-y-8">
                        <div className="space-y-4">
                            <span className="text-sm font-bold tracking-widest text-[#8A7A65] uppercase block">
                                Kontakt
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
                                Wir freuen uns <br />
                                <span className="italic">auf Ihren Besuch</span>
                            </h1>
                        </div>

                        <p className="text-lg text-[#685743] leading-relaxed max-w-lg">
                            Haben Sie Fragen zu unseren Behandlungen oder möchten Sie einen Termin vereinbaren?
                            Wir beraten Sie gerne individuell und persönlich in unserem Studio in Nürnberg.
                        </p>

                        <div className="space-y-6 pt-4">
                            <div className="flex gap-4 items-center group">
                                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div className="text-sm">
                                    <p className="font-bold text-foreground uppercase tracking-wider">Kernzeiten</p>
                                    <p className="text-[#685743]">Mo - Sa: Termine nach Vereinbarung</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center group">
                                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div className="text-sm">
                                    <p className="font-bold text-foreground uppercase tracking-wider">Standort</p>
                                    <p className="text-[#685743]">Krugstraße 39, 90419 Nürnberg</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.4} className="relative">
                        <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-premium border border-[#3A3A3A]/[0.05]">
                            <img
                                src="/images/2.jpg"
                                alt="TK Beauty Studio Atmosphäre"
                                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                            />
                        </div>
                        {/* Decorative Badge */}
                        <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-white p-6 md:p-10 rounded-[32px] shadow-premium z-10 border border-[#3A3A3A]/[0.05] flex flex-col items-center">
                            <img
                                src="/images/BEAUTYSTUDIO_26.png"
                                alt="TK BEAUTYSTUDIO Logo"
                                className="h-8 md:h-12 w-auto object-contain"
                            />
                        </div>
                    </Reveal>
                </div>

                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <Reveal delay={0.1}>
                            <a href="tel:+4915562483435" className="block h-full group">
                                <Card className="p-8 text-center space-y-5 h-full group-hover:border-primary/20 transition-all duration-300">
                                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary group-hover:scale-110 transition-transform">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-serif font-bold text-2xl text-foreground italic mb-2">Anrufen</h4>
                                        <p className="text-base text-[#685743]">+49 15562 483435</p>
                                    </div>
                                </Card>
                            </a>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <a href="mailto:tkbeauty@web.de" className="block h-full group">
                                <Card className="p-8 text-center space-y-5 h-full group-hover:border-primary/20 transition-all duration-300">
                                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary group-hover:scale-110 transition-transform">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-serif font-bold text-2xl text-foreground italic mb-2">Schreiben</h4>
                                        <p className="text-base text-[#685743] break-all">tkbeauty@web.de</p>
                                    </div>
                                </Card>
                            </a>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div className="h-full">
                                <Card className="p-8 text-center space-y-5 h-full">
                                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary">
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-serif font-bold text-2xl text-foreground italic mb-2">Buchen</h4>
                                            <p className="text-base text-[#685743]">Termin online sichern</p>
                                        </div>
                                        <Button
                                            variant="secondary"
                                            size="sm"
                                            className="w-full"
                                            onClick={() => setIsModalOpen(true)}
                                        >
                                            Jetzt buchen
                                        </Button>
                                    </div>
                                </Card>
                            </div>
                        </Reveal>
                    </div>
                </div>

                <div className="w-full mt-12 pt-12 border-t border-[#3A3A3A]/[0.05]">
                    <ContactMap isNested />
                </div>
            </SurfaceSection>

            <Footer />
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </main>
    );
}
