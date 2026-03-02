"use client";

import Button from "@/components/ui/Button";
import { ChevronRight, ShieldCheck, Sparkles } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <div className="space-y-8">
                    <Reveal delay={0.1}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                            <Sparkles className="w-4 h-4" />
                            Premium Alexandrit Laser Technologie
                        </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <h1 className="text-6xl md:text-8xl font-serif font-black text-secondary leading-[1.05] tracking-tight text-balance">
                            Your glow <br />
                            <span className="text-primary italic font-normal">starts here</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
                            Dauerhafte Haarentfernung und modernste Hautpflege in Nürnberg.
                            Erleben Sie schmerzarme Behandlungen mit sichtbaren Ergebnissen.
                        </p>
                    </Reveal>

                    <Reveal delay={0.4}>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button size="lg" className="group !rounded-full py-6 px-10 text-lg">
                                Erstgespräch buchen
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button variant="outline" size="lg" className="!rounded-full py-6 px-10 text-lg">
                                Behandlungen ansehen
                            </Button>
                        </div>
                    </Reveal>

                    {/* Trust Leiste */}
                    <Reveal delay={0.5}>
                        <div className="pt-12 border-t border-muted/30 grid grid-cols-2 gap-6">
                            <div className="flex items-center gap-3 text-sm text-gray-400 font-medium">
                                <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                Persönliche Beratung
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-400 font-medium">
                                <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                Hochwertigste Technik
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* Visual Content */}
                <div className="relative">
                    <Reveal delay={0.4}>
                        <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=800&h=1000"
                                alt="Premium Beauty Treatment"
                                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                            />
                        </div>

                        {/* Subtle floating overlay */}
                        <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-[2rem] shadow-premium max-w-[220px]">
                            <p className="text-primary font-serif font-black text-4xl mb-2">100%</p>
                            <p className="text-gray-500 text-sm font-medium leading-tight">Zufriedenheits-garantie für Ihre Haut</p>
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* Background decoration elements */}
            <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/2 bg-primary/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/2 bg-primary/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
        </section>
    );
}
