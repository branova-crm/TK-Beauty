import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

export default function UeberUnsPage() {
    return (
        <main className="min-h-screen pt-32 bg-white">
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <SectionTitle
                            title="Willkommen bei TK BEAUTY"
                            subtitle="Über uns"
                            align="left"
                            className="mb-0"
                        />
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Bei TK BEAUTY in Nürnberg steht Ihre natürliche Schönheit und Ihr Wohlbefinden im Mittelpunkt.
                            Wir kombinieren langjährige Erfahrung mit modernster Technologie, um Ihnen Ergebnisse zu liefern, die Sie lieben werden.
                        </p>
                        <div className="space-y-6">
                            {[
                                { title: "Höchste Standards", text: "Wir setzen auf zertifizierte Technologie wie den Motus AX Laser." },
                                { title: "Individuelle Beratung", text: "Jede Haut ist anders. Wir nehmen uns Zeit für Ihre Bedürfnisse." },
                                { title: "Hygiene & Komfort", text: "Bei uns entspannen Sie in einem modernen, sterilen Umfeld." }
                            ].map(item => (
                                <div key={item.title} className="flex gap-6 items-start">
                                    <div className="w-1.5 h-12 bg-primary mt-1" />
                                    <div>
                                        <h4 className="font-serif font-bold text-xl text-secondary">{item.title}</h4>
                                        <p className="text-gray-500 text-sm">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative aspect-square">
                        <img
                            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000&h=1000"
                            alt="TK Beauty Studio"
                            className="rounded-[3rem] shadow-2xl object-cover w-full h-full"
                        />
                        <div className="absolute -bottom-10 -right-10 bg-primary p-10 rounded-[2rem] text-white shadow-xl hidden sm:block">
                            <p className="text-4xl font-serif font-bold italic mb-2">TK</p>
                            <p className="text-sm font-semibold uppercase tracking-widest whitespace-nowrap">Your Skin. Our Passion.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
