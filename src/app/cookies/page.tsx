"use client";

import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Shield } from "lucide-react";
import { Settings as SettingsIcon } from "lucide-react";

import { useState, useEffect } from "react";

export default function CookiePolicyPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <main suppressHydrationWarning className="min-h-screen bg-[#F2F0ED] selection:bg-primary/20">
            <Header />

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
                            <Card suppressHydrationWarning className="bg-white border-none shadow-premium p-8 rounded-[32px] sticky top-32">
                                <h3 className="text-xl font-serif font-bold mb-6 flex items-center gap-3">
                                    <SettingsIcon className="w-5 h-5 text-primary" />
                                    Ihre Kontrolle
                                </h3>
                                <p className="text-sm text-[#685743] mb-8 leading-relaxed font-medium">
                                    Sie können Ihre Privatsphäre-Einstellungen jederzeit anpassen oder Ihre Einwilligung widerrufen.
                                </p>
                                <a 
                                    href="#" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        // @ts-ignore
                                        if (typeof CCM !== 'undefined' && CCM.openWidget) {
                                            // @ts-ignore
                                            CCM.openWidget();
                                        }
                                    }}
                                    className="inline-flex items-center justify-center w-full px-8 py-4 rounded-full bg-primary text-white font-bold text-sm tracking-widest uppercase hover:bg-secondary transition-all shadow-premium group"
                                >
                                    <SettingsIcon className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-500" />
                                    Konfigurationsbox öffnen
                                </a>
                            </Card>
                        </Reveal>
                    </div>

                    <div className="lg:col-span-8 space-y-8">
                        <Reveal delay={0.2}>
                            <Card className="bg-white border-none shadow-premium p-8 md:p-12 rounded-[40px] overflow-hidden relative">
                                <section className="space-y-12">
                                    <div>
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-6">
                                            <Shield className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Cookie-Erklärung</h2>
                                        <p className="text-[#685743] leading-relaxed mb-10 text-lg">
                                            Hier finden Sie eine detaillierte Auflistung aller genutzten Cookies und deren Zweck. Wir setzen auf volle Transparenz durch <strong>eRecht24 (CCM19)</strong>.
                                        </p>
                                    </div>

                                    {/* CCM19 Cookie Declaration Widget */}
                                    <div suppressHydrationWarning className="p-6 md:p-8 bg-creme/50 rounded-[32px] border border-primary/10 min-h-[200px]">
                                        {mounted && (
                                            <div 
                                                className="ccm-cookie-declaration text-[#685743]" 
                                                data-lang="de_DE"
                                            >
                                                Bitte aktivieren Sie Javascript, um die Liste aller deklarierten Cookies und ähnlicher Techniken zu sehen.
                                            </div>
                                        )}
                                    </div>
                                </section>
                            </Card>
                        </Reveal>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
