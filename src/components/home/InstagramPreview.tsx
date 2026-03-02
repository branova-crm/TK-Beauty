"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { Instagram } from "lucide-react";
import Button from "@/components/ui/Button";
import SurfaceSection from "@/components/ui/SurfaceSection";
import Reveal from "@/components/ui/Reveal";

export default function InstagramPreview() {
    const images = [
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1512290923902-8a9f81dc206e?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80&w=600",
    ];

    return (
        <SurfaceSection variant="white" id="instagram">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                <Reveal>
                    <SectionTitle
                        title="Follow our Journey"
                        subtitle="Instagram"
                        align="left"
                        className="mb-0"
                    />
                </Reveal>
                <Reveal delay={0.2}>
                    <Button variant="outline" className="!rounded-full group px-8">
                        <Instagram className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        @tk_beauty_nuernberg
                    </Button>
                </Reveal>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {images.map((img, index) => (
                    <Reveal key={index} delay={0.1 * index}>
                        <div className="relative aspect-square rounded-[2rem] overflow-hidden group shadow-sm hover:shadow-premium transition-all duration-700">
                            <img
                                src={img}
                                alt={`Instagram Feed ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <Instagram className="text-white w-8 h-8" />
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </SurfaceSection>
    );
}
