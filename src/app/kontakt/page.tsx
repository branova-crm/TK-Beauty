import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactMap from "@/components/home/ContactMap";
import Button from "@/components/ui/Button";
import SurfaceSection from "@/components/ui/SurfaceSection";
import Reveal from "@/components/ui/Reveal";
import Card from "@/components/ui/Card";
import { Mail, Phone, Calendar } from "lucide-react";

export default function KontaktPage() {
    return (
        <main className="min-h-screen bg-creme pt-32">
            <Navbar />

            <SurfaceSection variant="light" className="py-20 flex flex-col items-center">
                <div className="w-full">
                    <Reveal>
                        <div className="text-center mb-16">
                            <span className="text-sm font-bold tracking-widest text-[#8A7A65] uppercase mb-4 block">
                                Kontakt
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
                                Wir freuen uns auf Sie
                            </h1>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <Reveal delay={0.1}>
                            <Card className="p-8 text-center space-y-5 h-full">
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-serif font-bold text-2xl text-foreground italic mb-2">Anrufen</h4>
                                    <p className="text-base text-[#685743]">0123 / 4567890</p>
                                </div>
                            </Card>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <Card className="p-8 text-center space-y-5 h-full">
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-serif font-bold text-2xl text-foreground italic mb-2">Schreiben</h4>
                                    <p className="text-base text-[#685743]">info@tkbeauty-nuernberg.de</p>
                                </div>
                            </Card>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <Card className="p-8 text-center space-y-5 h-full">
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-serif font-bold text-2xl text-foreground italic mb-2">Buchen</h4>
                                    <p className="text-base text-[#685743]">Direkt via Button</p>
                                </div>
                            </Card>
                        </Reveal>
                    </div>
                </div>

                <div className="w-full">
                    <ContactMap />
                </div>
            </SurfaceSection>

            <Footer />
        </main>
    );
}
