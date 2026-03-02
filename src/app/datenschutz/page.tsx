import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/ui/SectionTitle";

export default function DatenschutzPage() {
    return (
        <main className="min-h-screen pt-32 bg-background">
            <Navbar />
            <div className="max-w-4xl mx-auto px-6 py-20 space-y-8 bg-white my-20 rounded-[3rem] shadow-xl">
                <SectionTitle title="Datenschutz" align="left" />
                <div className="prose prose-stone max-w-none text-gray-600 space-y-12">
                    <section className="space-y-4">
                        <h3 className="text-xl font-serif text-secondary font-bold">1. Datenschutz auf einen Blick</h3>
                        <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
                    </section>
                    <section className="space-y-4">
                        <h3 className="text-xl font-serif text-secondary font-bold">2. Datenerfassung auf dieser Website</h3>
                        <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
                    </section>
                    <section className="space-y-4">
                        <h3 className="text-xl font-serif text-secondary font-bold">3. Analyse-Tools und Tools von Drittanbietern</h3>
                        <p>Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen.</p>
                    </section>
                    <section className="space-y-4 border-t pt-8">
                        <p className="text-sm font-medium">Dies ist eine vereinfachte Fassung. Die vollständige Datenschutzerklärung sollte hier nach rechtlicher Prüfung eingefügt werden.</p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
