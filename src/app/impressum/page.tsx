import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/ui/SectionTitle";

export default function ImpressumPage() {
    return (
        <main className="min-h-screen pt-32 bg-background">
            <Navbar />
            <div className="max-w-4xl mx-auto px-6 py-20 space-y-8 bg-white my-20 rounded-[3rem] shadow-xl">
                <SectionTitle title="Impressum" align="left" />
                <div className="prose prose-stone max-w-none text-gray-600 space-y-6">
                    <section>
                        <h3 className="text-xl font-serif text-secondary font-bold">Angaben gemäß § 5 TMG</h3>
                        <p>
                            TK BEAUTY<br />
                            Krugstraße 39<br />
                            90419 Nürnberg
                        </p>
                    </section>
                    <section>
                        <h3 className="text-xl font-serif text-secondary font-bold">Kontakt</h3>
                        <p>
                            Telefon: 0123 / 4567890<br />
                            E-Mail: info@tkbeauty-nuernberg.de
                        </p>
                    </section>
                    <section>
                        <h3 className="text-xl font-serif text-secondary font-bold">Umsatzsteuer-ID</h3>
                        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: [Deine ID]</p>
                    </section>
                    <section>
                        <h3 className="text-xl font-serif text-secondary font-bold">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                        <p>TK BEAUTY<br />Krugstraße 39, 90419 Nürnberg</p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
