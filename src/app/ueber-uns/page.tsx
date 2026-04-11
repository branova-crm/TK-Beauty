import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Card from "@/components/ui/Card";
import SurfaceSection from "@/components/ui/SurfaceSection";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";

export default function UeberUnsPage() {
    return (
        <main className="min-h-screen bg-creme pt-32">
            <Header />

            <SurfaceSection variant="light" className="py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <Reveal>
                        <div className="space-y-10">
                            <div className="space-y-4 mb-4">
                                <span className="text-sm font-bold tracking-widest text-[#8A7A65] uppercase block">
                                    Über uns
                                </span>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-[1.2]">
                                    Willkommen bei <br />
                                    <span className="italic">TK BEAUTYSTUDIO</span>
                                </h1>
                            </div>

                            <p className="text-lg text-[#685743] leading-relaxed">
                                Bei TK BEAUTYSTUDIO in Nürnberg steht Ihre natürliche Schönheit und Ihr Wohlbefinden im Mittelpunkt.
                                Wir kombinieren langjährige Erfahrung mit modernster Technologie, um Ihnen Ergebnisse zu liefern, die Sie lieben werden.
                            </p>

                            <div className="space-y-10 pt-0">
                                {[
                                    { title: "Höchste Standards", text: "Wir setzen auf zertifizierte Technologie wie den Motus AX Laser." },
                                    { title: "Individuelle Beratung", text: "Jede Haut ist anders. Wir nehmen uns Zeit für Ihre Bedürfnisse." },
                                    { title: "Hygiene & Komfort", text: "Bei uns entspannen Sie in einem modernen, sterilen Umfeld." }
                                ].map((item, idx) => (
                                    <Reveal key={item.title} delay={0.1 * (idx + 1)}>
                                        <div className="flex gap-6 items-start group">
                                            <div className="w-1.5 h-12 bg-primary/40 rounded-full group-hover:bg-primary transition-colors mt-1" />
                                            <div>
                                                <h4 className="font-serif font-bold text-xl text-foreground mb-2">{item.title}</h4>
                                                <p className="text-[#685743] text-sm leading-relaxed">{item.text}</p>
                                            </div>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.4} className="relative">
                        <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-premium border border-[#3A3A3A]/[0.05]">
                            <Image
                                src="/images/21.png"
                                alt="TK Beauty Studio"
                                fill
                                className="object-cover transition-transform duration-1000 hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-white p-6 md:p-10 rounded-[32px] shadow-premium z-10 border border-[#3A3A3A]/[0.05] flex flex-col items-center">
                            <Image
                                src="/images/BEAUTYSTUDIO_26.png"
                                alt="TK BEAUTYSTUDIO Logo"
                                width={153}
                                height={56}
                                className="h-10 md:h-14 w-auto object-contain mb-4"
                            />
                            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#8A7A65] whitespace-nowrap">Haut. Leidenschaft.</p>
                        </div>
                    </Reveal>
                </div>
            </SurfaceSection>

            <Footer />
        </main>
    );
}
