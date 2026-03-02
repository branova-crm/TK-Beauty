import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Zap, Droplets, UserCheck, ShieldPlus } from "lucide-react";

export default function BehandlungenPage() {
    const categories = [
        {
            title: "Laserhaarentfernung",
            description: "Dauerhaft glatte Haut mit dem Motus AX Alexandrit Laser. Schmerzarm und effektiv.",
            icon: <Zap className="w-12 h-12" />,
            details: ["Alle Hauttypen", "Schnelle Sitzungen", "Dauerhafte Ergebnisse"]
        },
        {
            title: "Microneedling",
            description: "Hauterneuerung und Anti-Aging durch kontrollierte Mikroverletzungen.",
            icon: <Droplets className="w-12 h-12" />,
            details: ["Porenverfeinerung", "Narbenglättung", "Frischer Teint"]
        },
        {
            title: "Kosmetische Behandlungen",
            description: "Professionelle Gesichtsbehandlungen für jedes Hautbedürfnis.",
            icon: <UserCheck className="w-12 h-12" />,
            details: ["Individuelle Analyse", "Tiefenreinigung", "Feuchtigkeit"]
        },
        {
            title: "Christina Kosmetik",
            description: "Wirkstoffkosmetik für sichtbare Hautbildverbesserung.",
            icon: <ShieldPlus className="w-12 h-12" />,
            details: ["Heimpflege-System", "Hochkonzentriert", "Wissenschaftlich fundiert"]
        }
    ];

    return (
        <main className="min-h-screen pt-32 bg-background">
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 py-20">
                <SectionTitle
                    title="Unsere Behandlungen"
                    subtitle="Angebot"
                    align="center"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                    {categories.map((cat) => (
                        <Card key={cat.title} className="p-12 flex flex-col md:flex-row gap-8 items-start hover:shadow-xl transition-shadow">
                            <div className="w-20 h-20 rounded-[2rem] bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                {cat.icon}
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-3xl font-serif text-secondary">{cat.title}</h3>
                                <p className="text-gray-500 leading-relaxed italic">"{cat.description}"</p>
                                <ul className="space-y-2">
                                    {cat.details.map(d => (
                                        <li key={d} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            {d}
                                        </li>
                                    ))}
                                </ul>
                                <Button variant="outline" className="w-fit">Beratung anfragen</Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
