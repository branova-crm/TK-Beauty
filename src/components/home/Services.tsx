"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { Zap, Droplets, Sparkles, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import SurfaceSection from "@/components/ui/SurfaceSection";
import Reveal from "@/components/ui/Reveal";

const services = [
    {
        title: "Laserhaarentfernung",
        subtitle: "Dauerhaft glatt",
        description: "Schmerzarm und effektiv mit dem Motus AX Alexandrit Laser.",
        icon: <Zap className="w-6 h-6" />,
    },
    {
        title: "Microneedling",
        subtitle: "Hauterneuerung",
        description: "Porenverfeinerung und Anti-Aging für einen strahlenden Teint.",
        icon: <Droplets className="w-6 h-6" />,
    },
    {
        title: "Kosmetik",
        subtitle: "Individuelle Pflege",
        description: "Professionelle Gesichtsbehandlungen für jedes Hautbedürfnis.",
        icon: <Sparkles className="w-6 h-6" />,
    },
    {
        title: "Christina Kosmetik",
        subtitle: "Wirkstoffkosmetik",
        description: "Sichtbare Ergebnisse durch hochkonzentrierte Inhaltsstoffe.",
        icon: <CheckCircle className="w-6 h-6" />,
    },
];

export default function Services() {
    return (
        <SurfaceSection variant="surface" id="services">
            <Reveal>
                <SectionTitle
                    title="Unsere Behandlungen"
                    subtitle="Angebot"
                    align="center"
                />
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                {services.map((service, index) => (
                    <Reveal key={service.title} delay={0.1 * index}>
                        <Card className="p-8 h-full hover:shadow-xl transition-all duration-500 border-none bg-white group">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                                {service.icon}
                            </div>
                            <div className="space-y-4">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
                                    {service.subtitle}
                                </span>
                                <h3 className="text-2xl font-serif text-secondary group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                                <Link
                                    href="/behandlungen"
                                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary hover:text-primary transition-colors pt-4"
                                >
                                    Mehr erfahren
                                    <ArrowRight className="w-3 h-3" />
                                </Link>
                            </div>
                        </Card>
                    </Reveal>
                ))}
            </div>
        </SurfaceSection>
    );
}
