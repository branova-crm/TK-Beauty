"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SurfaceSection from "@/components/ui/SurfaceSection";
import Reveal from "@/components/ui/Reveal";
import { Zap, Droplets, UserCheck, ShieldPlus } from "lucide-react";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function BehandlungenPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const categories = [
        {
            title: "Laserhaarentfernung",
            description: "Dauerhaft glatte Haut mit dem Motus AX Alexandrit Laser. Schmerzarm und effektiv.",
            icon: <Zap className="w-10 h-10" />,
            details: ["Alle Hauttypen", "Schnelle Sitzungen", "Dauerhafte Ergebnisse"]
        },
        {
            title: "Microneedling",
            description: "Hauterneuerung und Anti-Aging durch kontrollierte Mikroverletzungen.",
            icon: <Droplets className="w-10 h-10" />,
            details: ["Porenverfeinerung", "Narbenglättung", "Frischer Teint"]
        },
        {
            title: "Kosmetische Behandlungen",
            description: "Professionelle Gesichtsbehandlungen für jedes Hautbedürfnis.",
            icon: <UserCheck className="w-10 h-10" />,
            details: ["Individuelle Analyse", "Tiefenreinigung", "Feuchtigkeit"]
        },
        {
            title: "Christina Kosmetik",
            description: "Wirkstoffkosmetik für sichtbare Hautbildverbesserung.",
            icon: <ShieldPlus className="w-10 h-10" />,
            details: ["Heimpflege-System", "Hochkonzentriert", "Wissenschaftlich fundiert"]
        }
    ];

    return (
        <main className="min-h-screen bg-creme pt-32">
            <Header />

            <SurfaceSection variant="light" className="py-20">
                <Reveal>
                    <div className="text-center mb-16">
                        <span className="text-sm font-bold tracking-widest text-[#8A7A65] uppercase mb-4 block">
                            Angebot
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
                            Unsere Behandlungen
                        </h1>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {categories.map((cat, index) => (
                        <Reveal key={cat.title} delay={0.1 * index}>
                            <Card className="p-6 md:p-12 flex flex-col md:flex-row gap-6 md:gap-8 items-start h-full">
                                <div className="w-16 h-16 rounded-[1.5rem] bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    {cat.icon}
                                </div>
                                <div className="space-y-4 md:space-y-6 flex flex-col h-full w-full">
                                    <h3 className="text-2xl md:text-3xl font-serif text-foreground font-bold">{cat.title}</h3>
                                    <p className="text-[#685743] leading-relaxed italic">&quot;{cat.description}&quot;</p>
                                    <ul className="space-y-3 flex-grow">
                                        {cat.details.map(d => (
                                            <li key={d} className="flex items-center gap-3 text-sm font-medium text-foreground">
                                                <div className="w-2 h-2 rounded-full bg-primary/70" />
                                                {d}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="pt-4">
                                        <Button
                                            variant="secondary"
                                            className="w-full lg:w-fit font-bold"
                                            onClick={() => setIsModalOpen(true)}
                                        >
                                            Beratung anfragen
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </SurfaceSection>

            <Footer />
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </main>
    );
}
