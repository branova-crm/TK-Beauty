"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SurfaceSection from "@/components/ui/SurfaceSection";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Package, Sparkles, Zap } from "lucide-react";
import ContactModal from "@/components/ContactModal";
import PreisAccordionPanel from "@/components/preise/PreisAccordionPanel";
import type { MotusPriceItem } from "@/data/motus-preise";
import {
    motusIntroNotes,
    motusFrauenEinzel,
    motusFrauenKombi,
    motusMaennerEinzel,
    motusMaennerKombi,
} from "@/data/motus-preise";

const hautbehandlungNamen = [
    "Microneedling Basic",
    "Microneedling + Wirkstoffe",
    "Gesichtsreinigung",
    "Christina Kosmetik Ritual",
];

const ACC_LASER_F_EINZEL = "laser-frau-einzel";
const ACC_LASER_F_KOMBI = "laser-frau-kombi";
const ACC_LASER_M_EINZEL = "laser-mann-einzel";
const ACC_LASER_M_KOMBI = "laser-mann-kombi";
const ACC_HAUT = "haut";

function MotusPriceRows({ items }: { items: MotusPriceItem[] }) {
    return (
        <div className="divide-y divide-[#3A3A3A]/[0.06]">
            {items.map((item, index) => (
                <div
                    key={`${item.name}-${index}`}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-6 px-5 md:px-7 py-4 md:py-5"
                >
                    <div className="min-w-0 flex-1">
                        <span className="font-medium text-foreground text-sm md:text-base block">{item.name}</span>
                        {item.duration ? (
                            <span className="text-xs md:text-sm text-[#8A7A65] mt-0.5 block">{item.duration}</span>
                        ) : null}
                    </div>
                    <span className="font-serif font-bold text-primary text-base md:text-lg shrink-0 sm:text-right">
                        {item.price}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default function PreisePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
        setOpenAccordion((prev) => (prev === id ? null : id));
    };

    const laserSubtitle = "Alexandrit-Laser Motus AX (DEKA)";

    return (
        <main className="min-h-screen bg-creme pt-32">
            <Header />

            <SurfaceSection variant="light" className="py-20">
                {/* Hero — wie Kontakt / Über uns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-16 lg:mb-24">
                    <Reveal className="space-y-8">
                        <div className="space-y-4">
                            <span className="text-sm font-bold tracking-widest text-[#8A7A65] uppercase block">
                                Investition in Sie
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
                                Transparente & faire <br />
                                <span className="italic">Preisgestaltung</span>
                            </h1>
                        </div>

                        <p className="text-lg text-[#685743] leading-relaxed max-w-lg">
                            Qualität und modernste Technologie haben ihren Preis – aber wir legen Wert auf Transparenz.
                            Unsere Laserhaarentfernung erfolgt mit dem Alexandrit-Laser{" "}
                            <strong className="font-semibold text-foreground">Motus AX (DEKA)</strong>. Unten finden
                            Sie unsere Preisliste – öffnen Sie die gewünschte Kategorie.
                        </p>

                        <div className="flex flex-col lg:flex-row gap-4 pt-4">
                            <Button variant="primary" className="w-full lg:w-fit" onClick={() => setIsModalOpen(true)}>
                                Beratung vereinbaren
                            </Button>
                        </div>
                    </Reveal>

                    <Reveal delay={0.4} className="relative">
                        <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-premium border border-[#3A3A3A]/[0.05]">
                            <Image
                                src="/images/4.jpg"
                                alt="TK Beauty Studio Preisübersicht"
                                fill
                                className="object-cover transition-transform duration-1000 hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                        <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 bg-white p-6 md:p-10 rounded-[32px] shadow-premium z-10 border border-[#3A3A3A]/[0.05] flex flex-col items-center">
                            <Image
                                src="/images/22.png"
                                alt="TK BEAUTYSTUDIO Logo"
                                width={120}
                                height={120}
                                className="h-10 md:h-14 w-auto object-contain"
                            />
                        </div>
                    </Reveal>
                </div>

                {/* Preisliste (Accordion) */}
                <div className="w-full">
                    <Reveal>
                        <div className="rounded-[20px] bg-white/60 border border-[#3A3A3A]/[0.08] px-5 py-4 md:px-6 md:py-5 mb-8 md:mb-10 shadow-sm">
                            <p className="text-xs font-bold tracking-widest text-[#8A7A65] uppercase mb-3">
                                Hinweise zur Laserbehandlung
                            </p>
                            <ul className="space-y-2 text-sm text-[#685743] leading-relaxed list-disc list-inside">
                                {motusIntroNotes.map((note) => (
                                    <li key={note}>{note}</li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                    <div className="flex flex-col gap-3 md:gap-4">
                        <Reveal delay={0.05}>
                            <PreisAccordionPanel
                                id={ACC_LASER_F_EINZEL}
                                title="Laser Haarentfernung – Einzelpreise (Frauen)"
                                subtitle={laserSubtitle}
                                icon={Zap}
                                isOpen={openAccordion === ACC_LASER_F_EINZEL}
                                onToggle={() => toggleAccordion(ACC_LASER_F_EINZEL)}
                            >
                                <MotusPriceRows items={motusFrauenEinzel} />
                            </PreisAccordionPanel>
                        </Reveal>

                        <Reveal delay={0.08}>
                            <PreisAccordionPanel
                                id={ACC_LASER_F_KOMBI}
                                title="Laser Haarentfernung – Kombi-Pakete (Frauen)"
                                subtitle={laserSubtitle}
                                icon={Package}
                                isOpen={openAccordion === ACC_LASER_F_KOMBI}
                                onToggle={() => toggleAccordion(ACC_LASER_F_KOMBI)}
                            >
                                <MotusPriceRows items={motusFrauenKombi} />
                            </PreisAccordionPanel>
                        </Reveal>

                        <Reveal delay={0.11}>
                            <PreisAccordionPanel
                                id={ACC_LASER_M_EINZEL}
                                title="Laser Haarentfernung – Einzelpreise (Männer)"
                                subtitle={laserSubtitle}
                                icon={Zap}
                                isOpen={openAccordion === ACC_LASER_M_EINZEL}
                                onToggle={() => toggleAccordion(ACC_LASER_M_EINZEL)}
                            >
                                <MotusPriceRows items={motusMaennerEinzel} />
                            </PreisAccordionPanel>
                        </Reveal>

                        <Reveal delay={0.14}>
                            <PreisAccordionPanel
                                id={ACC_LASER_M_KOMBI}
                                title="Laser Haarentfernung – Kombi-Pakete (Männer)"
                                subtitle={laserSubtitle}
                                icon={Package}
                                isOpen={openAccordion === ACC_LASER_M_KOMBI}
                                onToggle={() => toggleAccordion(ACC_LASER_M_KOMBI)}
                            >
                                <MotusPriceRows items={motusMaennerKombi} />
                            </PreisAccordionPanel>
                        </Reveal>

                        <Reveal delay={0.17}>
                            <PreisAccordionPanel
                                id={ACC_HAUT}
                                title="Hautbehandlungen"
                                subtitle="Microneedling, Gesichtspflege & mehr"
                                icon={Sparkles}
                                isOpen={openAccordion === ACC_HAUT}
                                onToggle={() => toggleAccordion(ACC_HAUT)}
                            >
                                <div className="divide-y divide-[#3A3A3A]/[0.06]">
                                    {hautbehandlungNamen.map((name) => (
                                        <div
                                            key={name}
                                            className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 px-5 md:px-7 py-4 md:py-5"
                                        >
                                            <span className="font-medium text-foreground text-sm md:text-base">
                                                {name}
                                            </span>
                                            <span className="text-[#8A7A65] text-sm shrink-0">Preise auf Anfrage</span>
                                        </div>
                                    ))}
                                </div>
                            </PreisAccordionPanel>
                        </Reveal>
                    </div>

                    <Reveal delay={0.2} className="mt-16 md:mt-24 w-full">
                        <Card
                            hover={false}
                            className="w-full p-8 md:p-12 lg:p-14 text-center space-y-6 md:space-y-8 shadow-premium-sm border-[#3A3A3A]/[0.08]"
                        >
                            <span className="text-xs font-bold tracking-[0.2em] text-[#8A7A65] uppercase block">
                                Kombi-Special
                            </span>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground leading-tight">
                                Paketpreise &amp; Vorteile: bis zu 30&nbsp;% beim Erstbesuch
                            </h2>
                            <p className="text-[#685743] max-w-xl mx-auto text-base md:text-lg leading-relaxed">
                                Kombi-Pakete sind günstiger als Einzelzonen – und mit unserem Vorteilspaket (5
                                Behandlungen) sparen Sie zusätzlich 20&nbsp;%. Gerne beraten wir Sie persönlich.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center pt-2">
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="w-full sm:w-auto sm:min-w-[200px]"
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    Beratung vereinbaren
                                </Button>
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="w-full sm:w-auto sm:min-w-[200px]"
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    Termin anfragen
                                </Button>
                            </div>
                        </Card>
                    </Reveal>
                </div>
            </SurfaceSection>

            <section className="bg-[#2a2826] text-white py-16 md:py-24 px-6">
                <div className="max-w-3xl mx-auto text-center space-y-5 md:space-y-6">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white">
                        Haben Sie Fragen zu den Preisen?
                    </h2>
                    <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
                        Wir beantworten Ihre Fragen gern persönlich – telefonisch, per E-Mail oder über unser
                        Kontaktformular.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4">
                        <Button
                            size="lg"
                            className="w-full sm:w-auto !bg-white !text-[#2a2826] !from-white !to-white !border-white hover:!opacity-95 shadow-lg"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Nachricht senden
                        </Button>
                        <Link
                            href="/kontakt"
                            className="inline-flex items-center justify-center w-full sm:w-auto min-h-[56px] px-10 rounded-full border-2 border-white/90 text-white font-bold text-base hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2a2826]"
                        >
                            Kontakt
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </main>
    );
}
