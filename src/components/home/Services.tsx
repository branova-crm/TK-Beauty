"use client";

import Card from "@/components/ui/Card";
import Link from "next/link";
import SurfaceSection from "@/components/ui/SurfaceSection";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import { serviceImages } from "@/data/site-images";

const services = serviceImages;

export default function Services() {
    return (
        <SurfaceSection variant="surface" id="services">
            <Reveal>
                <div className="text-center mb-16">
                    <span className="text-sm font-bold tracking-widest text-[#8A7A65] uppercase mb-4 block">
                        Sanft. Hochwertig. Ergebnisorientiert.
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                        Unsere Behandlungen
                    </h2>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-stretch">
                {services.map((service, index) => (
                    <Reveal key={service.title} delay={0.1 * index} className="h-full">
                        <Card className="flex flex-col h-full bg-[#FAF8F5] border border-[#3A3A3A]/[0.06] shadow-sm hover:shadow-premium transition-all duration-500 rounded-[24px] group overflow-hidden">
                            <div className="w-full h-48 overflow-hidden relative shrink-0">
                                <Image
                                    src={service.src}
                                    alt={service.alt}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                                    <span className="text-[10px] uppercase tracking-widest text-primary font-bold">
                                        {service.subtitle}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 md:p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-serif text-foreground leading-snug mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-[#685743] text-sm leading-relaxed mb-6 flex-grow">
                                    {service.description}
                                </p>
                                <div className="mt-auto">
                                    <Link
                                        href={service.href}
                                        className="inline-flex items-center text-sm font-semibold border-b border-[#3A3A3A]/20 pb-1 text-foreground hover:text-primary hover:border-primary transition-colors"
                                    >
                                        Mehr erfahren
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    </Reveal>
                ))}
            </div>
        </SurfaceSection>
    );
}
