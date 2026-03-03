"use client";

import SurfaceSection from "@/components/ui/SurfaceSection";
import Reveal from "@/components/ui/Reveal";

const steps = [
    {
        title: "Beratungsgespräch",
        description: "Wir hören zu und klären deine Ziele.",
    },
    {
        title: "Behandlungsplan",
        description: "Individuell, transparent, auf dich abgestimmt.",
    },
    {
        title: "Behandlung",
        description: "Sanft, professionell, hochwertig umgesetzt.",
    },
    {
        title: "Nachpflege",
        description: "Pflegeempfehlungen für zuhause – passend zu deiner Haut.",
    },
];

export default function Steps() {
    return (
        <SurfaceSection variant="white" className="!py-24">
            <Reveal>
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                        So läuft dein Termin ab
                    </h2>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {steps.map((step, index) => (
                    <Reveal key={step.title} delay={0.1 * index}>
                        <div className="relative space-y-6 group flex flex-col items-center text-center">
                            {/* Step Number Badge */}
                            <div className="w-20 h-20 rounded-full bg-[#FAF8F5] shadow-premium flex items-center justify-center text-[#685743] font-serif font-bold text-3xl group-hover:scale-110 transition-transform duration-500 border border-[#3A3A3A]/[0.06]">
                                {index + 1}
                            </div>

                            <div className="space-y-3 pt-4">
                                <h3 className="text-xl font-serif font-bold text-foreground">{step.title}</h3>
                                <p className="text-[#685743] text-sm leading-relaxed max-w-[200px] mx-auto">{step.description}</p>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </SurfaceSection>
    );
}
