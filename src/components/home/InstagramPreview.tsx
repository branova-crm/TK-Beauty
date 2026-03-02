"use client";

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
        "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1629813350438-bb9f1a28a391?auto=format&fit=crop&q=80&w=600",
    ];

    return (
        <SurfaceSection variant="white" id="instagram">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                <Reveal>
                    <div className="space-y-4">
                        <span className="text-sm font-bold tracking-widest text-[#8A7A65] uppercase">
                            Instagram
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                            Folge unserer Reise
                        </h2>
                        <p className="text-[#685743] text-lg max-w-sm">
                            Einblicke, Ergebnisse & Pflege-Tipps auf Instagram.
                        </p>
                    </div>
                </Reveal>
                <Reveal delay={0.2}>
                    <Button variant="secondary" className="px-8 flex items-center justify-center">
                        <Instagram className="w-5 h-5 mr-2 opacity-80" />
                        @tk_beauty_nuernberg ansehen
                    </Button>
                </Reveal>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
                {images.map((img, index) => (
                    <Reveal key={index} delay={0.1 * index}>
                        <div className="relative aspect-square rounded-[24px] overflow-hidden group shadow-sm hover:shadow-premium transition-all duration-700 bg-[#FAF8F5]">
                            <img
                                src={img}
                                alt={`Instagram Feed ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-[#3A3A3A]/0 group-hover:bg-[#3A3A3A]/20 transition-colors duration-500 flex items-center justify-center">
                                <Instagram className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110" />
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </SurfaceSection>
    );
}
