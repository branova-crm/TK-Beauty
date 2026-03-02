"use client";

import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { Check } from "lucide-react";
import SurfaceSection from "@/components/ui/SurfaceSection";
import Reveal from "@/components/ui/Reveal";

export default function Highlight() {
    return (
        <SurfaceSection variant="white" className="!py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <Reveal delay={0.2}>
                    <div className="space-y-8">
                        <SectionTitle
                            title="Motus AX Alexandrit LASER"
                            subtitle="Goldstandard"
                            align="left"
                            className="mb-0"
                        />
                        <p className="text-xl text-gray-500 leading-relaxed font-serif italic">
                            "Effektivität trifft auf maximalen Komfort. Erleben Sie die Haarentfernung der nächsten Generation."
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Schmerzfrei durch integrierte Kühlung",
                                "Für alle Hauttypen & Haarfarben geeignet",
                                "Kürzere Behandlungsdauer",
                                "Hautschonend & sicher"
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-4 text-secondary font-medium">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                        <Check className="w-3.5 h-3.5 text-primary" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Button size="lg" className="!rounded-full px-10">Beratung vereinbaren</Button>
                    </div>
                </Reveal>

                <Reveal delay={0.4}>
                    <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl group">
                        <img
                            src="https://images.unsplash.com/photo-1512290923902-8a9f81dc206e?auto=format&fit=crop&q=80&w=1000&h=1000"
                            alt="Motus AX Laser Technology"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
                    </div>
                </Reveal>
            </div>
        </SurfaceSection>
    );
}
