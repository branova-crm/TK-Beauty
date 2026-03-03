"use client";

import Button from "@/components/ui/Button";
import { Check } from "lucide-react";
import SurfaceSection from "@/components/ui/SurfaceSection";
import Reveal from "@/components/ui/Reveal";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function Highlight() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <SurfaceSection variant="white" className="!py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <Reveal delay={0.2} className="w-full">
                    <div className="space-y-8 max-w-lg">
                        <div className="space-y-4">
                            <span className="text-sm font-bold tracking-widest text-[#8A7A65] uppercase">
                                Motus AX Alexandrit LASER
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                                Glatte Haut in wenigen Sitzungen
                            </h2>
                        </div>
                        <p className="text-lg text-[#685743] leading-relaxed">
                            Motus AX steht für moderne Alexandrit-Technologie – präzise, hautschonend und besonders komfortabel. In der Beratung klären wir, was für deine Haut sinnvoll ist.
                        </p>
                        <ul className="space-y-5 pt-4">
                            {[
                                "Sanfte Behandlung mit hoher Präzision",
                                "Für viele Haut- und Haartypen geeignet",
                                "Moderne Technologie, hochwertig umgesetzt",
                                "Individuelle Einstellungen statt Standardprogramm"
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-4 text-foreground font-medium">
                                    <div className="w-6 h-6 rounded-full bg-[#EFE4D0] flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-3.5 h-3.5 text-[#685743]" />
                                    </div>
                                    <span className="leading-snug">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-6">
                            <Button
                                size="lg"
                                className="px-10"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Beratung vereinbaren
                            </Button>
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={0.4} className="w-full">
                    <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-premium group bg-[#FAF8F5]">
                        <img
                            src="/images/9.jpg"
                            alt="Motus AX Laser Technology"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                    </div>
                </Reveal>
            </div>
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </SurfaceSection>
    );
}
