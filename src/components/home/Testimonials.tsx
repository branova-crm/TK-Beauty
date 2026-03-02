"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { Star } from "lucide-react";
import SurfaceSection from "@/components/ui/SurfaceSection";
import Reveal from "@/components/ui/Reveal";

const testimonials = [
    {
        name: "Anna M.",
        text: "Einfach nur begeistert! Die Laserbehandlung ist fast schmerzfrei und schon nach der zweiten Sitzung sehe ich tolle Ergebnisse.",
        treatment: "Haarentfernung",
    },
    {
        name: "Sarah K.",
        text: "Super Studio, tolle Atmosphäre und sehr kompetente Beratung. Mein Hautbild hat sich durch das Microneedling extrem verbessert.",
        treatment: "Microneedling",
    },
    {
        name: "Julia R.",
        text: "Das Team ist super freundlich und nimmt sich viel Zeit. Man fühlt sich direkt wohl und bestens aufgehoben.",
        treatment: "Gesichtsbehandlung",
    },
];

export default function Testimonials() {
    return (
        <SurfaceSection variant="white" id="testimonials">
            <Reveal>
                <SectionTitle
                    title="Kundenstimmen"
                    subtitle="Bewertungen"
                    align="center"
                />
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                {testimonials.map((testimonial, index) => (
                    <Reveal key={index} delay={0.1 * index}>
                        <Card className="p-10 flex flex-col h-full bg-surface/30 border-none shadow-sm hover:shadow-premium transition-all duration-500 rounded-[2.5rem]">
                            <div className="flex gap-1 text-primary mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-600 italic mb-8 flex-grow leading-relaxed">
                                "{testimonial.text}"
                            </p>
                            <div className="border-t border-muted/50 pt-6">
                                <p className="font-serif font-bold text-secondary">{testimonial.name}</p>
                                <p className="text-xs text-primary font-bold uppercase tracking-wider mt-1">{testimonial.treatment}</p>
                            </div>
                        </Card>
                    </Reveal>
                ))}
            </div>
        </SurfaceSection>
    );
}
