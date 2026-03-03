"use client";

import Card from "@/components/ui/Card";
import { Star } from "lucide-react";
import SurfaceSection from "@/components/ui/SurfaceSection";
import Reveal from "@/components/ui/Reveal";

const testimonials = [
    {
        name: "Anna M.",
        text: "Sehr liebe Beratung, man fühlt sich sofort gut aufgehoben. Ergebnisse waren nach kurzer Zeit sichtbar.",
        treatment: "Dauerhafte Haarentfernung",
    },
    {
        name: "Sarah K.",
        text: "Professionell, sauber, ruhig – genau die Art Studio, die man sucht.",
        treatment: "Microneedling",
    },
    {
        name: "Julia R.",
        text: "Ich mag die ehrliche Beratung. Kein Druck, sondern Qualität.",
        treatment: "Gesichtsbehandlung",
    },
];

export default function Testimonials() {
    return (
        <SurfaceSection variant="surface" id="testimonials">
            <Reveal>
                <div className="text-center mb-8">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                        Kundenstimmen
                    </h2>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                {testimonials.map((testimonial, index) => (
                    <Reveal key={index} delay={0.1 * index} className="h-full">
                        <Card className="p-10 flex flex-col h-full bg-[#FAF8F5] border border-[#3A3A3A]/[0.06] shadow-sm hover:shadow-premium transition-all duration-500 rounded-[24px]">
                            <div className="flex gap-1 text-primary mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <div className="flex-grow">
                                <p className="text-[#685743] italic mb-8 leading-relaxed">
                                    "{testimonial.text}"
                                </p>
                            </div>
                            <div className="border-t border-[#3A3A3A]/10 pt-6 mt-auto">
                                <p className="font-serif font-bold text-foreground">{testimonial.name}</p>
                                <p className="text-xs text-[#8A7A65] font-semibold uppercase tracking-wider mt-1">{testimonial.treatment}</p>
                            </div>
                        </Card>
                    </Reveal>
                ))}
            </div>
        </SurfaceSection>
    );
}
