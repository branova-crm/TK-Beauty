import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SurfaceSection from "@/components/ui/SurfaceSection";
import Reveal from "@/components/ui/Reveal";

export default function PreisePage() {
    const pricing = [
        {
            category: "Laserhaarentfernung",
            items: [
                { name: "Oberlippe", price: "ab 39 €" },
                { name: "Achseln", price: "ab 59 €" },
                { name: "Beine komplett", price: "ab 149 €" },
                { name: "Rücken", price: "ab 129 €" }
            ]
        },
        {
            category: "Hautbehandlungen",
            items: [
                { name: "Microneedling Basic", price: "99 €" },
                { name: "Microneedling + Wirkstoffe", price: "129 €" },
                { name: "Gesichtsreinigung", price: "79 €" },
                { name: "Christina Kosmetik Ritual", price: "149 €" }
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-creme pt-32 font-sans">
            <Navbar />

            <SurfaceSection variant="light" className="py-20 flex flex-col items-center">
                <div className="max-w-3xl w-full">
                    <Reveal>
                        <div className="text-center mb-16">
                            <span className="text-sm font-bold tracking-widest text-[#8A7A65] uppercase mb-4 block">
                                Investition in Sie
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
                                Transparente Preise
                            </h1>
                        </div>
                    </Reveal>

                    <div className="space-y-16">
                        {pricing.map((group, index) => (
                            <Reveal key={group.category} delay={0.1 * index}>
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-serif text-foreground font-bold border-b border-[#3A3A3A]/10 pb-4">{group.category}</h3>
                                    <Card className="divide-y divide-[#3A3A3A]/[0.06]">
                                        {group.items.map((item) => (
                                            <div key={item.name} className="flex justify-between px-8 py-6 items-center hover:bg-[#3A3A3A]/[0.02] transition-colors">
                                                <span className="font-medium text-foreground">{item.name}</span>
                                                <span className="font-serif font-bold text-primary text-lg">{item.price}</span>
                                            </div>
                                        ))}
                                    </Card>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={0.4}>
                        <div className="mt-24 p-12 bg-white/40 backdrop-blur-md border border-[#3A3A3A]/[0.08] rounded-[40px] text-center space-y-8 shadow-premium-sm">
                            <h3 className="text-3xl font-serif font-bold text-foreground italic">Möchten Sie ein individuelles Paket?</h3>
                            <p className="text-[#685743] max-w-lg mx-auto">
                                Bei Buchung von mehreren Zonen oder Behandlungspaketen bieten wir attraktive Sonderkonditionen an. Fragen Sie uns einfach unverbindlich an.
                            </p>
                            <div className="flex justify-center pt-4">
                                <Button variant="primary" size="lg" className="px-10">
                                    Individuelles Angebot einholen
                                </Button>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </SurfaceSection>

            <Footer />
        </main>
    );
}
