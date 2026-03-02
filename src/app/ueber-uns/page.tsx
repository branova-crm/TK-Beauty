import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/ui/Card";
import SurfaceSection from "@/components/ui/SurfaceSection";
import Reveal from "@/components/ui/Reveal";

export default function UeberUnsPage() {
    return (
        <main className="min-h-screen bg-creme pt-32">
            <Navbar />

            <SurfaceSection variant="light" className="py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <Reveal className="space-y-8">
                        <div className="space-y-4">
                            <span className="text-sm font-bold tracking-widest text-[#8A7A65] uppercase block">
                                Über uns
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                                Willkommen bei <br />
                                <span className="italic">TK BEAUTYSTUDIO</span>
                            </h1>
                        </div>

                        <p className="text-lg text-[#685743] leading-relaxed">
                            Bei TK BEAUTYSTUDIO in Nürnberg steht Ihre natürliche Schönheit und Ihr Wohlbefinden im Mittelpunkt.
                            Wir kombinieren langjährige Erfahrung mit modernster Technologie, um Ihnen Ergebnisse zu liefern, die Sie lieben werden.
                        </p>

                        <div className="space-y-6 pt-4">
                            {[
                                { title: "Höchste Standards", text: "Wir setzen auf zertifizierte Technologie wie den Motus AX Laser." },
                                { title: "Individuelle Beratung", text: "Jede Haut ist anders. Wir nehmen uns Zeit für Ihre Bedürfnisse." },
                                { title: "Hygiene & Komfort", text: "Bei uns entspannen Sie in einem modernen, sterilen Umfeld." }
                            ].map((item, idx) => (
                                <Reveal key={item.title} delay={0.1 * (idx + 1)}>
                                    <div className="flex gap-6 items-start group">
                                        <div className="w-1.5 h-12 bg-primary/40 rounded-full group-hover:bg-primary transition-colors mt-1" />
                                        <div>
                                            <h4 className="font-serif font-bold text-xl text-foreground">{item.title}</h4>
                                            <p className="text-[#685743] text-sm leading-relaxed">{item.text}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </Reveal>

                    <Reveal delay={0.4} className="relative">
                        <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-premium border border-[#3A3A3A]/[0.05]">
                            <img
                                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000&h=1200"
                                alt="TK Beauty Studio"
                                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-white p-8 md:p-12 rounded-[32px] shadow-premium z-10 border border-[#3A3A3A]/[0.05]">
                            <p className="text-4xl md:text-5xl font-serif font-bold italic text-primary mb-2 leading-none">TK</p>
                            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#8A7A65] whitespace-nowrap">Haut. Leidenschaft.</p>
                        </div>
                    </Reveal>
                </div>
            </SurfaceSection>

            <Footer />
        </main>
    );
}
