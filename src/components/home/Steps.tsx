"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import SurfaceSection from "@/components/ui/SurfaceSection";
import Reveal from "@/components/ui/Reveal";
import { Search, CheckCircle, Sparkles, ShieldCheck } from "lucide-react";

const steps = [
    {
        title: "Beratungsgespräch",
        description: "Wir analysieren Ihren Hauttyp und besprechen Ihre Wünsche.",
        icon: <Search className="w-6 h-6" />,
    },
    {
        title: "Behandlungsplan",
        description: "Individuelle Festlegung der Zyklen und Behandlungszonen.",
        icon: <CheckCircle className="w-6 h-6" />,
    },
    {
        title: "Behandlung",
        description: "Sanfte Durchführung mit modernster Technologie.",
        icon: <Sparkles className="w-6 h-6" />,
    },
    {
        title: "Nachpflege",
        description: "Tipps & Produkte für ein langanhaltendes Ergebnis.",
        icon: <ShieldCheck className="w-6 h-6" />,
    },
];

export default function Steps() {
    return (
        <SurfaceSection variant="surface">
            <Reveal>
                <SectionTitle
                    title="So läuft dein Termin ab"
                    subtitle="Ablauf"
                    align="center"
                />
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
                {steps.map((step, index) => (
                    <Reveal key={step.title} delay={0.1 * index}>
                        <div className="relative space-y-6 group">
                            {/* Step Number Badge */}
                            <div className="absolute -top-6 -left-4 w-12 h-12 rounded-full bg-white shadow-premium flex items-center justify-center text-primary font-serif font-black text-xl z-10">
                                {index + 1}
                            </div>

                            <div className="w-20 h-20 rounded-[2rem] bg-white flex items-center justify-center text-primary shadow-premium group-hover:scale-110 transition-transform duration-500">
                                {step.icon}
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-xl font-serif font-bold text-secondary">{step.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </SurfaceSection>
    );
}
