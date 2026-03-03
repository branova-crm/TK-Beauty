"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import Card from "@/components/ui/Card";
import { Mail, Phone, MapPin, Scale, Globe, Info } from "lucide-react";

export default function ImpressumPage() {
    return (
        <main className="min-h-screen bg-[#F2F0ED] pt-32 pb-20">
            <Navbar />

            <div className="max-w-5xl mx-auto px-6">
                {/* Clean Title */}
                <div className="pt-20 pb-16 text-center">
                    <Reveal>
                        <h1 className="text-6xl md:text-8xl font-serif font-bold text-foreground">
                            Impressum
                        </h1>
                        <div className="w-16 h-1 bg-primary/20 mx-auto mt-8 rounded-full" />
                    </Reveal>
                </div>

                {/* Single Large Beige Card */}
                <Reveal delay={0.2}>
                    <Card className="bg-creme border-none shadow-premium p-8 md:p-16 rounded-[40px] md:rounded-[60px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

                            {/* Left Column: Essential Info */}
                            <div className="space-y-16">
                                {/* Betreiber */}
                                <section>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary/70">
                                            <Info className="w-5 h-5" />
                                        </div>
                                        <h2 className="text-xl font-serif font-bold text-foreground uppercase tracking-widest">Angaben gemäß § 5 DDG</h2>
                                    </div>
                                    <div className="pl-14 space-y-4 text-[#685743] leading-relaxed">
                                        <p className="font-bold text-foreground text-xl">TK Beauty</p>
                                        <p className="text-lg">
                                            Inhaberin: Tetyana Kolunin<br />
                                            Krugstraße 39<br />
                                            90419 Nürnberg<br />
                                            Deutschland
                                        </p>
                                    </div>
                                </section>

                                {/* Verantwortlich */}
                                <section>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary/70">
                                            <Scale className="w-5 h-5" />
                                        </div>
                                        <h2 className="text-xl font-serif font-bold text-foreground uppercase tracking-widest">Inhaltlich Verantwortlich</h2>
                                    </div>
                                    <div className="pl-14 space-y-2 text-[#685743] leading-relaxed">
                                        <p className="text-xs font-bold text-[#8A7A65] uppercase tracking-widest">Nach § 18 Abs. 2 MStV</p>
                                        <p className="text-lg">
                                            Tetyana Kolunin<br />
                                            Krugstraße 39<br />
                                            90419 Nürnberg
                                        </p>
                                    </div>
                                </section>
                            </div>

                            {/* Right Column: Contact & Legal */}
                            <div className="space-y-16">
                                {/* Kontakt */}
                                <section>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary/70">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <h2 className="text-xl font-serif font-bold text-foreground uppercase tracking-widest">Direkter Kontakt</h2>
                                    </div>
                                    <div className="pl-14 space-y-6">
                                        <a href="tel:+4915562483435" className="flex flex-col group">
                                            <span className="text-xs font-bold text-[#8A7A65] uppercase tracking-widest mb-1">Telefon</span>
                                            <span className="text-xl font-medium text-foreground group-hover:text-primary transition-colors underline decoration-primary/20 underline-offset-4">+49 15562 483435</span>
                                        </a>
                                        <a href="mailto:tkbeauty@web.de" className="flex flex-col group">
                                            <span className="text-xs font-bold text-[#8A7A65] uppercase tracking-widest mb-1">E-Mail</span>
                                            <span className="text-xl font-medium text-foreground group-hover:text-primary transition-colors underline decoration-primary/20 underline-offset-4 break-all">tkbeauty@web.de</span>
                                        </a>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-[#8A7A65] uppercase tracking-widest mb-1">Standort</span>
                                            <span className="text-lg text-[#685743]">Krugstraße 39, 90419 Nürnberg</span>
                                        </div>
                                    </div>
                                </section>

                                {/* Schlichtung */}
                                <section>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary/70">
                                            <Globe className="w-5 h-5" />
                                        </div>
                                        <h2 className="text-xl font-serif font-bold text-foreground uppercase tracking-widest">Streitbeilegung</h2>
                                    </div>
                                    <div className="pl-14 space-y-6 text-[#685743] leading-relaxed">
                                        <div>
                                            <p className="font-bold text-foreground text-sm uppercase tracking-wider mb-2">EU-Streitschlichtung</p>
                                            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors italic underline decoration-primary/20 underline-offset-4 break-all block">
                                                https://ec.europa.eu/consumers/odr/
                                            </a>
                                        </div>
                                        <div>
                                            <p className="font-bold text-foreground text-sm uppercase tracking-wider mb-2">Verbraucherschlichtung</p>
                                            <p className="text-sm">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                                        </div>
                                    </div>
                                </section>
                            </div>

                        </div>
                    </Card>
                </Reveal>
            </div>

            <div className="mt-20">
                <Footer />
            </div>
        </main>
    );
}
