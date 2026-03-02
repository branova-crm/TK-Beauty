import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SurfaceSection from "@/components/ui/SurfaceSection";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

export default function DatenschutzPage() {
    return (
        <main className="min-h-screen bg-creme pt-32">
            <Navbar />

            <SurfaceSection variant="light" className="py-20 flex justify-center">
                <Reveal className="max-w-4xl w-full">
                    <Card className="p-12 md:p-16 space-y-12">
                        <div className="space-y-4">
                            <span className="text-sm font-bold tracking-widest text-[#8A7A65] uppercase block">
                                Rechtliches
                            </span>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                                Datenschutz
                            </h1>
                        </div>

                        <div className="prose prose-stone max-w-none text-[#685743] space-y-12">
                            <section className="space-y-4">
                                <h3 className="text-xl font-serif text-foreground font-bold">1. Datenschutz auf einen Blick</h3>
                                <p className="leading-relaxed">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
                            </section>
                            <section className="space-y-4">
                                <h3 className="text-xl font-serif text-foreground font-bold">2. Datenerfassung auf dieser Website</h3>
                                <p className="leading-relaxed">Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
                            </section>
                            <section className="space-y-4">
                                <h3 className="text-xl font-serif text-foreground font-bold">3. Analyse-Tools und Tools von Drittanbietern</h3>
                                <p className="leading-relaxed">Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen.</p>
                            </section>
                            <section className="space-y-4 border-t border-[#3A3A3A]/10 pt-8 mt-12">
                                <p className="text-sm font-medium italic opacity-70 italic">Dies ist eine vereinfachte Fassung. Die vollständige Datenschutzerklärung sollte hier nach rechtlicher Prüfung eingefügt werden.</p>
                            </section>
                        </div>
                    </Card>
                </Reveal>
            </SurfaceSection>

            <Footer />
        </main>
    );
}
