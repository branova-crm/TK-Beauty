"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SurfaceSection from "@/components/ui/SurfaceSection";
import Reveal from "@/components/ui/Reveal";
import { Zap, Droplets, UserCheck } from "lucide-react";
import Link from "next/link";

export default function BehandlungenPage() {
    const categories = [
        {
            title: "Laserhaarentfernung",
            description: "Dauerhaft glatte Haut mit dem Motus AX Alexandrit Laser. Schmerzarm und effektiv.",
            icon: <Zap className="w-10 h-10" />,
            details: ["Alle Hauttypen", "Schnelle Sitzungen", "Dauerhafte Ergebnisse"],
            href: "/behandlungen/motus-ax",
        },
        {
            title: "Microneedling",
            description: "Hauterneuerung und Anti-Aging durch kontrollierte Mikroverletzungen.",
            icon: <Droplets className="w-10 h-10" />,
            details: ["Porenverfeinerung", "Narbenglättung", "Frischer Teint"],
            href: "/behandlungen/microneedling",
        },
        {
            title: "Kosmetische Behandlungen",
            description: "Professionelle Gesichtsbehandlungen für jedes Hautbedürfnis.",
            icon: <UserCheck className="w-10 h-10" />,
            details: ["Individuelle Analyse", "Tiefenreinigung", "Feuchtigkeit"],
            href: "/behandlungen/kosmetische-behandlungen",
        },
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

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-stretch">
                    {categories.map((cat, index) => (
                        <Reveal key={cat.title} delay={0.1 * index} className="h-full min-w-0">
                            <Card className="p-6 md:p-8 flex flex-col gap-5 md:gap-6 h-full min-w-0 overflow-hidden">
                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-[1.5rem] bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    {cat.icon}
                                </div>
                                <div className="space-y-4 flex flex-col h-full w-full min-w-0">
                                    <h3 className="text-xl md:text-2xl font-serif text-foreground font-bold leading-snug text-balance break-words">
                                        {cat.title}
                                    </h3>
                                    <p className="text-[#685743] leading-relaxed text-sm md:text-base">{cat.description}</p>
                                    <ul className="space-y-3 flex-grow">
                                        {cat.details.map((d) => (
                                            <li key={d} className="flex items-center gap-3 text-sm font-medium text-foreground">
                                                <div className="w-2 h-2 rounded-full bg-primary/70 shrink-0" />
                                                {d}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="pt-2 flex flex-col gap-3 w-full">
                                        <Link href={cat.href} className="block w-full">
                                            <Button variant="secondary" className="w-full font-bold">
                                                Mehr erfahren
                                            </Button>
                                        </Link>
                                        <Link href="/termin" className="block w-full">
                                            <Button variant="primary" className="w-full font-bold">
                                                Termin buchen
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </SurfaceSection>

            <Footer />
        </main>
    );
}
