"use client";

import Button from "@/components/ui/Button";
import { Star, ShieldCheck, Calendar, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="pt-24 md:pt-28 pb-4 px-4 md:px-8 w-full bg-background flex justify-center">
            {/* Page Container */}
            <div className="max-w-[1240px] w-full">
                {/* Hero Rounded Card */}
                <div className="bg-creme rounded-[28px] md:rounded-[40px] pt-7 md:pt-14 px-7 md:px-14 pb-8 border border-[#3A3A3A]/[0.06] shadow-premium flex flex-col gap-0">

                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                        {/* Left Column (Text - ~45%) */}
                        <div className="w-full lg:w-[45%] flex flex-col space-y-8 z-10">
                            <Reveal delay={0.1}>
                                <h1 className="text-[42px] leading-[1.1] md:text-[64px] lg:text-[72px] font-serif font-semibold text-foreground tracking-tighter text-balance">
                                    Dein <span className="text-primary italic">Glow</span> beginnt hier
                                </h1>
                            </Reveal>

                            <Reveal delay={0.2}>
                                <p className="text-base md:text-lg text-[#685743] leading-[1.6] max-w-md">
                                    Bei TK Beauty in Nürnberg verbinden wir Premium-Technologie mit persönlicher Beratung – für sichtbar gepflegte Haut und ein rundum gutes Gefühl.
                                </p>
                            </Reveal>

                            <Reveal delay={0.3}>
                                <div className="flex flex-col lg:flex-row gap-4 pt-4">
                                    <Button variant="primary" className="w-full lg:w-fit" onClick={() => setIsModalOpen(true)}>
                                        <Calendar className="w-5 h-5 opacity-80" />
                                        Kostenlose Beratung
                                    </Button>
                                    <Link href="/behandlungen" className="w-full lg:w-fit">
                                        <Button variant="secondary" className="w-full lg:w-fit">
                                            Behandlungen ansehen
                                            <ArrowRight className="w-4 h-4 ml-1 opacity-70" />
                                        </Button>
                                    </Link>
                                </div>
                            </Reveal>
                        </div>

                        {/* Right Column (Image - ~55%) */}
                        <div className="w-full lg:w-[55%] h-[300px] lg:h-[400px]">
                            <Reveal delay={0.2} className="w-full h-full">
                                <div className="w-full h-full rounded-[32px] overflow-hidden relative shadow-inner">
                                    <Image
                                        src="/images/8.jpg"
                                        alt="Premium Beauty Behandlung"
                                        fill
                                        priority
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 55vw"
                                    />
                                    {/* subtle overlay to integrate image into creme theme slightly */}
                                    <div className="absolute inset-0 bg-[#EFE4D0]/5 mix-blend-multiply" />
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    <Reveal delay={0.4} className="w-full">
                        <div className="w-full">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-6 font-medium">
                                <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm md:text-base text-[#8A7A65]">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-primary/70" />
                                        <span className="font-medium">Motus AX Alexandrit Laser</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-primary/70" />
                                        <span className="font-medium">Individuelle Beratung</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-primary/70" />
                                        <span className="font-medium">Premium Pflege</span>
                                    </div>
                                </div>

                                {/* Social Proof Mini */}
                                <div className="flex items-center gap-4 bg-white/40 px-6 py-3 rounded-full border border-[#3A3A3A]/[0.05] shadow-sm">
                                    <div className="flex gap-1 text-primary">
                                        {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                    </div>
                                    <span className="text-sm md:text-base font-semibold text-foreground">
                                        4,9/5 <span className="text-[#8A7A65] font-normal hidden sm:inline ml-1">Rating</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
