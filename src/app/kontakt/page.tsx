import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactMap from "@/components/home/ContactMap";
import Button from "@/components/ui/Button";
import { Mail, Phone, Calendar } from "lucide-react";

export default function KontaktPage() {
    return (
        <main className="min-h-screen pt-32 bg-white">
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 py-20">
                <SectionTitle
                    title="Wir freuen uns auf Sie"
                    subtitle="Kontakt"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="p-8 bg-background rounded-3xl text-center space-y-4 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary">
                            <Phone className="w-5 h-5" />
                        </div>
                        <h4 className="font-serif font-bold text-secondary italic">Anrufen</h4>
                        <p className="text-sm text-gray-500">0123 / 4567890</p>
                    </div>

                    <div className="p-8 bg-background rounded-3xl text-center space-y-4 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary">
                            <Mail className="w-5 h-5" />
                        </div>
                        <h4 className="font-serif font-bold text-secondary italic">Schreiben</h4>
                        <p className="text-sm text-gray-500">info@tkbeauty-nuernberg.de</p>
                    </div>

                    <div className="p-8 bg-background rounded-3xl text-center space-y-4 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary">
                            <Calendar className="w-5 h-5" />
                        </div>
                        <h4 className="font-serif font-bold text-secondary italic">Buchen</h4>
                        <p className="text-sm text-gray-500">Direkt via Button</p>
                    </div>
                </div>

                <ContactMap />
            </div>
            <Footer />
        </main>
    );
}
