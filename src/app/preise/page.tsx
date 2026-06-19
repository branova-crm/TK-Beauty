"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SurfaceSection from "@/components/ui/SurfaceSection";
import Reveal from "@/components/ui/Reveal";
import AmpersandText from "@/components/ui/AmpersandText";
import Image from "next/image";
import Link from "next/link";
import PreisAccordionPanel from "@/components/preise/PreisAccordionPanel";
import LaserPromoBanner from "@/components/preise/LaserPromoBanner";
import { PreisZoneBoxes } from "@/components/preise/PreisZoneCard";
import {
    motusFrauenPromo,
    motusMaennerPromo,
    motusFrauenEinzel,
    motusFrauenKombi,
    motusMaennerEinzel,
    motusMaennerKombi,
} from "@/data/motus-preise";
import { microneedlingPreise } from "@/data/microneedling-preise";
import { kosmetikPreise } from "@/data/kosmetik-preise";
import { siteImages } from "@/data/site-images";
import { useState } from "react";

const ACC_LASER_F_EINZEL = "laser-frau-einzel";
const ACC_LASER_F_KOMBI = "laser-frau-kombi";
const ACC_LASER_M_EINZEL = "laser-mann-einzel";
const ACC_LASER_M_KOMBI = "laser-mann-kombi";
const ACC_HAUT = "haut";

export default function PreisePage() {
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
        setOpenAccordion((prev) => (prev === id ? null : id));
    };

    const laserSubtitle = "Alexandrit-Laser Motus AX (DEKA)";

    const hautPreise = [
        ...microneedlingPreise.map((item) => ({
            name: `Microneedling – ${item.name}`,
            price: item.price,
            duration: item.duration,
        })),
        ...kosmetikPreise.map((item) => ({
            name: item.name,
            price: item.price,
            duration: item.duration,
        })),
    ];

    return (
        <main className="min-h-screen bg-creme pt-32">
            <Header />

            <SurfaceSection variant="light" className="py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-16 lg:mb-24">
                    <Reveal className="space-y-8">
                        <div className="space-y-4">
                            <span className="text-sm font-bold tracking-widest text-[#8A7A65] uppercase block">
                                Investition in Sie
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
                                <AmpersandText>Transparente & faire</AmpersandText> <br />
                                Preisgestaltung
                            </h1>
                        </div>

                        <p className="text-lg text-[#685743] leading-relaxed max-w-lg">
                            Qualität und modernste Technologie haben ihren Preis – aber wir legen Wert auf Transparenz.
                            Unsere Laserhaarentfernung erfolgt mit dem Alexandrit-Laser{" "}
                            <strong className="font-semibold text-foreground">Motus AX (DEKA)</strong>. Unten finden
                            Sie unsere Preisliste – öffnen Sie die gewünschte Kategorie.
                        </p>

                        <div className="flex flex-col lg:flex-row gap-4 pt-4">
                            <Link href="/termin">
                                <Button variant="primary" className="w-full lg:w-fit">
                                    Termin buchen
                                </Button>
                            </Link>
                        </div>
                    </Reveal>

                    <Reveal delay={0.4} className="relative">
                        <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-premium border border-[#3A3A3A]/[0.05]">
                            <Image
                                src={siteImages.preise.src}
                                alt={siteImages.preise.alt}
                                fill
                                className="object-cover transition-transform duration-1000 hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                        <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 bg-white p-6 md:p-10 rounded-[32px] shadow-premium z-10 border border-[#3A3A3A]/[0.05] flex flex-col items-center">
                            <Image
                                src={siteImages.studioInnen.src}
                                alt={siteImages.studioInnen.alt}
                                width={120}
                                height={120}
                                className="h-10 md:h-14 w-auto object-contain"
                            />
                        </div>
                    </Reveal>
                </div>

                <div className="w-full">
                    <Reveal>
                        <LaserPromoBanner promo={motusFrauenPromo} className="mb-8 md:mb-10" />
                    </Reveal>

                    <div className="flex flex-col gap-3 md:gap-4 [overflow-anchor:none]">
                        <PreisAccordionPanel
                            id={ACC_LASER_F_EINZEL}
                            title="Laser Haarentfernung – Einzelpreise (Frauen)"
                            subtitle={laserSubtitle}
                            iconKey="zap"
                            isOpen={openAccordion === ACC_LASER_F_EINZEL}
                            onToggle={() => toggleAccordion(ACC_LASER_F_EINZEL)}
                        >
                            <PreisZoneBoxes items={motusFrauenEinzel} />
                        </PreisAccordionPanel>

                        <PreisAccordionPanel
                            id={ACC_LASER_F_KOMBI}
                            title="Laser Haarentfernung – Kombi-Pakete (Frauen)"
                            subtitle={laserSubtitle}
                            iconKey="package"
                            isOpen={openAccordion === ACC_LASER_F_KOMBI}
                            onToggle={() => toggleAccordion(ACC_LASER_F_KOMBI)}
                        >
                            <PreisZoneBoxes items={motusFrauenKombi} fallbackLabel="Kombi-Pakete" />
                        </PreisAccordionPanel>

                        <Reveal delay={0.05}>
                            <LaserPromoBanner promo={motusMaennerPromo} className="mb-3" />
                        </Reveal>

                        <PreisAccordionPanel
                            id={ACC_LASER_M_EINZEL}
                            title="Laser Haarentfernung – Einzelpreise (Männer)"
                            subtitle={laserSubtitle}
                            iconKey="zap"
                            isOpen={openAccordion === ACC_LASER_M_EINZEL}
                            onToggle={() => toggleAccordion(ACC_LASER_M_EINZEL)}
                        >
                            <PreisZoneBoxes items={motusMaennerEinzel} />
                        </PreisAccordionPanel>

                        <PreisAccordionPanel
                            id={ACC_LASER_M_KOMBI}
                            title="Laser Haarentfernung – Kombi-Pakete (Männer)"
                            subtitle={laserSubtitle}
                            iconKey="package"
                            isOpen={openAccordion === ACC_LASER_M_KOMBI}
                            onToggle={() => toggleAccordion(ACC_LASER_M_KOMBI)}
                        >
                            <PreisZoneBoxes items={motusMaennerKombi} fallbackLabel="Kombi-Pakete" />
                        </PreisAccordionPanel>

                        <PreisAccordionPanel
                            id={ACC_HAUT}
                            title="Hautbehandlungen"
                            subtitle={
                                <AmpersandText>Microneedling, Gesichtspflege & mehr</AmpersandText>
                            }
                            iconKey="sparkles"
                            isOpen={openAccordion === ACC_HAUT}
                            onToggle={() => toggleAccordion(ACC_HAUT)}
                        >
                            <PreisZoneBoxes items={hautPreise} fallbackLabel="Behandlungen" />
                        </PreisAccordionPanel>
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
                                <AmpersandText>Paketpreise & Vorteile: bis zu 30 % beim Erstbesuch</AmpersandText>
                            </h2>
                            <p className="text-[#685743] max-w-xl mx-auto text-base md:text-lg leading-relaxed">
                                Kombi-Pakete sind günstiger als Einzelzonen – und mit unserem Vorteilspaket (5
                                Behandlungen) sparen Sie zusätzlich 20 %. Gerne beraten wir Sie persönlich.
                            </p>
                            <div className="flex flex-col gap-3 sm:gap-4 justify-center items-stretch pt-2 max-w-md mx-auto w-full">
                                <Link href="/kontakt" className="block w-full">
                                    <Button variant="secondary" size="lg" className="w-full">
                                        Kontakt
                                    </Button>
                                </Link>
                                <Link href="/termin" className="block w-full">
                                    <Button variant="primary" size="lg" className="w-full">
                                        Termin buchen
                                    </Button>
                                </Link>
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
                        <Link href="/kontakt">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto !bg-white !text-[#2a2826] !from-white !to-white !border-white hover:!opacity-95 shadow-lg"
                            >
                                Nachricht senden
                            </Button>
                        </Link>
                        <Link
                            href="/termin"
                            className="inline-flex items-center justify-center w-full sm:w-auto min-h-[56px] px-10 rounded-full border-2 border-white/90 text-white font-bold text-base hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2a2826]"
                        >
                            Termin buchen
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
