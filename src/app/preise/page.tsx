"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SurfaceSection from "@/components/ui/SurfaceSection";
import Reveal from "@/components/ui/Reveal";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function PreisePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const pricing = [
        {
            category: "Laserhaarentfernung",
            items: [
                { name: "Oberlippe", price: "X €" },
                { name: "Achseln", price: "X €" },
                { name: "Beine komplett", price: "X €" },
                { name: "Rücken", price: "X €" }
            ]
        },
        {
            category: "Hautbehandlungen",
            items: [
                { name: "Microneedling Basic", price: "X €" },
                { name: "Microneedling + Wirkstoffe", price: "X €" },
                { name: "Gesichtsreinigung", price: "X €" },
                { name: "Christina Kosmetik Ritual", price: "X €" }
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-creme pt-32 font-sans">
            <Navbar />

            <SurfaceSection variant="light" className="py-20">
                {/* Header Section with Image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
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
                            Entdecken Sie unsere Leistungen und investieren Sie in Ihr Wohlbefinden.
                        </p>

                        <div className="flex flex-col lg:flex-row gap-4 pt-4">
                            <Button variant="primary" className="w-full lg:w-fit" onClick={() => setIsModalOpen(true)}>
                                Beratung vereinbaren
                            </Button>
                        </div>
                    </Reveal>

                    <Reveal delay={0.4} className="relative">
                        <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-premium border border-[#3A3A3A]/[0.05]">
                            <img
                                src="/images/4.jpg"
                                alt="TK Beauty Studio Preisübersicht"
                                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                            />
                        </div>
                        {/* Decorative Badge */}
                        <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 bg-white p-6 md:p-10 rounded-[32px] shadow-premium z-10 border border-[#3A3A3A]/[0.05] flex flex-col items-center">
                            <img
                                src="/images/22.png"
                                alt="TK BEAUTYSTUDIO Logo"
                                className="h-10 md:h-14 w-auto object-contain"
                            />
                        </div>
                    </Reveal>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {pricing.map((group, index) => (
                        <Reveal key={group.category} delay={0.1 * index} className="h-full">
                            <div className="space-y-6 h-full flex flex-col">
                                <h3 className="text-2xl font-serif text-foreground font-bold border-b border-[#3A3A3A]/10 pb-4">
                                    {group.category}
                                </h3>
                                <Card className="divide-y divide-[#3A3A3A]/[0.06] flex-grow shadow-premium-sm">
                                    {group.items.map((item) => (
                                        <div key={item.name} className="flex justify-between px-6 md:px-8 py-5 md:py-6 items-center hover:bg-[#3A3A3A]/[0.02] transition-colors">
                                            <span className="font-medium text-foreground">{item.name}</span>
                                            <span className="font-serif font-bold text-primary text-lg">{item.price}</span>
                                        </div>
                                    ))}
                                </Card>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.4} className="mt-20">
                    <div className="max-w-4xl mx-auto p-8 md:p-14 bg-white/40 backdrop-blur-md border border-[#3A3A3A]/[0.08] rounded-[32px] md:rounded-[48px] text-center space-y-8 shadow-premium-sm">
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground italic">
                            Möchten Sie ein individuelles Paket?
                        </h3>
                        <p className="text-[#685743] max-w-xl mx-auto text-lg leading-relaxed">
                            Bei Buchung von mehreren Zonen oder Behandlungspaketen bieten wir attraktive Sonderkonditionen an. Fragen Sie uns einfach unverbindlich an.
                        </p>
                        <div className="flex justify-center pt-4">
                            <Button
                                variant="primary"
                                size="lg"
                                className="w-full lg:w-fit px-12"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Individuelles Angebot einholen
                            </Button>
                        </div>
                    </div>
                </Reveal>
            </SurfaceSection>

            <Footer />
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </main>
    );
}
