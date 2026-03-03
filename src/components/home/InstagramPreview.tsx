"use client";

import { useState } from "react";
import { Instagram, X } from "lucide-react";
import Button from "@/components/ui/Button";
import SurfaceSection from "@/components/ui/SurfaceSection";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function InstagramPreview() {
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    const images = [
        "/images/13.png",
        "/images/14.png",
        "/images/16.png",
        "/images/17.png",
        "/images/18.png",
        "/images/21.png",
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
                        <div
                            onClick={() => setSelectedImg(img)}
                            className="relative aspect-square rounded-[24px] overflow-hidden group shadow-sm hover:shadow-premium transition-all duration-700 bg-[#FAF8F5] cursor-zoom-in"
                        >
                            <Image
                                src={img}
                                alt={`Instagram Feed ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                            />
                            <div className="absolute inset-0 bg-[#3A3A3A]/0 group-hover:bg-[#3A3A3A]/20 transition-colors duration-500 flex items-center justify-center">
                                <Instagram className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110" />
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>

            {/* Lightbox / Zoom Modal */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm cursor-zoom-out"
                        onClick={() => setSelectedImg(null)}
                    >
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute top-6 right-6 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImg(null);
                            }}
                        >
                            <X className="w-8 h-8" />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative w-full max-w-xl flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full aspect-square rounded-[32px] overflow-hidden bg-white shadow-2xl border border-white/20">
                                <Image
                                    src={selectedImg}
                                    alt="Vergrößerte Ansicht"
                                    fill
                                    className="object-contain p-2"
                                    sizes="(max-width: 768px) 100vw, 600px"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </SurfaceSection>
    );
}
