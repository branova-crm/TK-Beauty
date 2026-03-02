import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

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
            category: "Skin Treatments",
            items: [
                { name: "Microneedling Basic", price: "99 €" },
                { name: "Microneedling + Wirkstoffe", price: "129 €" },
                { name: "Gesichtsreinigung", price: "79 €" },
                { name: "Christina Kosmetik Ritual", price: "149 €" }
            ]
        }
    ];

    return (
        <main className="min-h-screen pt-32 bg-background">
            <Navbar />
            <div className="max-w-4xl mx-auto px-6 py-20">
                <SectionTitle
                    title="Transparente Preise"
                    subtitle="Investition in Sie"
                />

                <div className="space-y-12 mt-16">
                    {pricing.map((group) => (
                        <div key={group.category} className="space-y-6">
                            <h3 className="text-2xl font-serif text-primary border-b border-primary/20 pb-4">{group.category}</h3>
                            <Card className="divide-y divide-muted/30">
                                {group.items.map((item) => (
                                    <div key={item.name} className="flex justify-between p-6 items-center hover:bg-muted/10 transition-colors">
                                        <span className="font-medium text-secondary">{item.name}</span>
                                        <span className="font-serif font-bold text-primary">{item.price}</span>
                                    </div>
                                ))}
                            </Card>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-12 bg-primary rounded-[3rem] text-white text-center space-y-8 shadow-2xl">
                    <h3 className="text-3xl font-serif italic text-balance">Möchten Sie ein individuelles Paket?</h3>
                    <p className="text-white/80 max-w-lg mx-auto">
                        Bei Buchung von mehreren Zonen oder Behandlungspaketen bieten wir attraktive Sonderkonditionen an. Fragen Sie uns einfach unverbindlich an.
                    </p>
                    <Button variant="secondary" size="lg" className="mx-auto !bg-white !text-primary">Individuelles Angebot einholen</Button>
                </div>
            </div>
            <Footer />
        </main>
    );
}
