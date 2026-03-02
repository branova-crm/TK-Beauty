"use client";

import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import SurfaceSection from "@/components/ui/SurfaceSection";
import Reveal from "@/components/ui/Reveal";

export default function BeforeAfter() {
    const [sliderPos, setSliderPos] = useState(50);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        setSliderPos(Math.min(Math.max(x, 0), 100));
    };

    return (
        <SurfaceSection variant="surface">
            <Reveal>
                <SectionTitle
                    title="Sichtbare Ergebnisse"
                    subtitle="Vorher / Nachher"
                    align="center"
                />
            </Reveal>

            <Reveal delay={0.2}>
                <div className="max-w-4xl mx-auto mt-16 relative aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl cursor-col-resize select-none group"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseMove}
                >
                    {/* After Image (Background) */}
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1512290923902-8a9f81dc206e?auto=format&fit=crop&q=80&w=1200"
                            alt="Hautverbesserung Nachher"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-6 right-6 px-4 py-2 bg-white/90 backdrop-blur rounded-full text-xs font-bold uppercase tracking-widest text-secondary shadow-lg">
                            Nachher
                        </div>
                    </div>

                    {/* Before Image (Foreground with Clip) */}
                    <div
                        className="absolute inset-0 border-r-2 border-white"
                        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1512290923902-8a9f81dc206e?auto=format&fit=crop&q=80&w=1200&grayscale=true"
                            alt="Hautzustand Vorher"
                            className="w-full h-full object-cover grayscale opacity-80"
                        />
                        <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 backdrop-blur rounded-full text-xs font-bold uppercase tracking-widest text-secondary shadow-lg">
                            Vorher
                        </div>
                    </div>

                    {/* Slider Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_20px_rgba(0,0,0,0.3)] z-10"
                        style={{ left: `${sliderPos}%` }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform duration-300">
                            <div className="flex gap-1">
                                <div className="w-1 h-3 bg-primary rounded-full" />
                                <div className="w-1 h-3 bg-primary rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>

                <p className="max-w-xl mx-auto mt-8 text-center text-gray-400 text-xs italic leading-relaxed">
                    *Hinweis: Die Ergebnisse sind individuell und können variieren. Alle Bilder dienen zur Veranschaulichung der Technologie-Potenziale. Vor Ort besprechen wir Ihre persönlichen Erwartungen.
                </p>
            </Reveal>
        </SurfaceSection>
    );
}
