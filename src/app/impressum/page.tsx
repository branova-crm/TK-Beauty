import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SurfaceSection from "@/components/ui/SurfaceSection";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

export default function ImpressumPage() {
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
                                Impressum
                            </h1>
                        </div>

                        <div className="prose prose-stone max-w-none text-[#685743] space-y-8">
                            <section>
                                <h3 className="text-xl font-serif text-foreground font-bold">Angaben gemäß § 5 TMG</h3>
                                <p className="leading-relaxed">
                                    TK BEAUTYSTUDIO<br />
                                    Krugstraße 39<br />
                                    90419 Nürnberg
                                </p>
                            </section>
                            <section>
                                <h3 className="text-xl font-serif text-foreground font-bold">Kontakt</h3>
                                <p className="leading-relaxed">
                                    Telefon: 0123 / 4567890<br />
                                    E-Mail: info@tkbeauty-nuernberg.de
                                </p>
                            </section>
                            <section>
                                <h3 className="text-xl font-serif text-foreground font-bold">Umsatzsteuer-ID</h3>
                                <p className="leading-relaxed">Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: [Deine ID]</p>
                            </section>
                            <section>
                                <h3 className="text-xl font-serif text-foreground font-bold">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                                <p className="leading-relaxed">TK BEAUTYSTUDIO<br />Krugstraße 39, 90419 Nürnberg</p>
                            </section>
                        </div>
                    </Card>
                </Reveal>
            </SurfaceSection>

            <Footer />
        </main>
    );
}
