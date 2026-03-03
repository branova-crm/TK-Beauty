"use client";

import { useState } from "react";
import SurfaceSection from "@/components/ui/SurfaceSection";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";

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
                <div className="text-center mb-8">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                        Sichtbar verfeinerte Haut
                    </h2>
                    <p className="text-[#8A7A65] text-sm">
                        Beispiele – Ergebnisse können individuell variieren.
                    </p>
                </div>
            </Reveal>

            <div className="max-w-4xl mx-auto mt-8 relative aspect-[16/9] rounded-[24px] overflow-hidden shadow-premium cursor-col-resize select-none group border border-[#3A3A3A]/[0.06]"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseMove}
            >
                {/* After Image (Background) - 12.png is Nachher */}
                <div className="absolute inset-0">
                    <img
                        src="/images/12.png"
                        alt="Nachher"
                        className="w-full h-full object-cover"
                        style={{ display: 'block' }}
                    />
                    <div className="absolute bottom-6 right-6 px-4 py-2 bg-white/90 backdrop-blur rounded-full text-xs font-bold uppercase tracking-widest text-foreground shadow-sm">
                        Nachher
                    </div>
                </div>

                {/* Before Image (Foreground with Clip) - 11.png is Vorher */}
                <div
                    className="absolute inset-0 border-r border-[#EFE4D0]"
                    style={{
                        clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                        WebkitClipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                        zIndex: 5
                    }}
                >
                    <img
                        src="/images/11.png"
                        alt="Vorher"
                        className="w-full h-full object-cover"
                        style={{ display: 'block' }}
                    />
                    <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 backdrop-blur rounded-full text-xs font-bold uppercase tracking-widest text-foreground shadow-sm">
                        Vorher
                    </div>
                </div>

                {/* Slider Handle */}
                <div
                    className="absolute top-0 bottom-0 w-0.5 bg-[#EFE4D0] shadow-sm z-10"
                    style={{ left: `${sliderPos}%` }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-premium flex items-center justify-center pointer-events-none transition-transform duration-300 group-hover:scale-105 border border-[#3A3A3A]/10">
                        <div className="flex gap-1">
                            <div className="w-0.5 h-3 bg-[#685743] rounded-full" />
                            <div className="w-0.5 h-3 bg-[#685743] rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </SurfaceSection>
    );
}
