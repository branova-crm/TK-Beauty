"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import {
    Shield,
    Info,
    Settings as SettingsIcon,
    LifeBuoy
} from "lucide-react";

export default function CookiePolicyPage() {
    const openConsentSettings = () => {
        if (typeof window !== 'undefined') {
            const toggle = document.querySelector('.ccm19-toggle') as HTMLElement;
            if (toggle) {
                toggle.click();
            } else {
                // @ts-ignore
                if (window.ccm19 && typeof window.ccm19.open === 'function') {
                    // @ts-ignore
                    window.ccm19.open();
                }
            }
        }
    };

    return (
        <main className="min-h-screen bg-[#F2F0ED] selection:bg-primary/20">
            <Navbar />

            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                
                <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                    <Reveal>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-8 border border-primary/20 shadow-sm backdrop-blur-sm">
                            <Shield className="w-3 h-3" />
                            Transparenz & Kontrolle
                        </span>
                        <h1 className="text-5xl md:text-8xl font-serif font-bold text-foreground mb-8 leading-[1.1]">
                            Cookie <br className="md:hidden" /><span className="text-primary italic">Richtlinie</span>
                        </h1>
                    </Reveal>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-6 pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-4 space-y-6">
                        <Reveal delay={0.1}>
                            <Card className="bg-white border-none shadow-premium p-8 rounded-[32px] sticky top-32">
                                <h3 className="text-xl font-serif font-bold mb-6 flex items-center gap-3">
                                    <LifeBuoy className="w-5 h-5 text-primary" />
                                    Direkte Hilfe
                                </h3>
                                <p className="text-sm text-[#685743] mb-8 leading-relaxed">
                                    Möchten Sie Ihre Einstellungen anpassen oder eine gegebene Einwilligung widerrufen?
                                </p>
                                <Button 
                                    variant="primary" 
                                    className="w-full group"
                                    onClick={openConsentSettings}
                                >
                                    <SettingsIcon className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-500" />
                                    Einstellungen öffnen
                                </Button>
                            </Card>
                        </Reveal>
                    </div>

                    <div className="lg:col-span-8 space-y-8">
                        <Reveal delay={0.2}>
                            <Card className="bg-white border-none shadow-premium p-8 md:p-12 rounded-[40px] overflow-hidden relative">
                                <div className="space-y-16">
                                    <section>
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-6">
                                            <Info className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-3xl font-serif font-bold text-foreground mt-0 mb-6">Hinweise zur Nutzung</h2>
                                        <p className="text-[#685743] leading-relaxed text-lg">
                                            Wir nutzen die CMP von <strong>eRecht24 (CCM19)</strong>, um sicherzustellen, dass Sie die volle Kontrolle über Ihre digitalen Daten in unserem Studio haben.
                                        </p>
                                    </section>
                                </div>
                            </Card>
                        </Reveal>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
