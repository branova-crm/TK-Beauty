"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import Card from "@/components/ui/Card";
import {
    Shield,
    Lock,
    Eye,
    FileText,
    UserCheck,
    Globe,
    Info,
    Mail,
    Phone,
    MapPin,
    Clock,
    CheckCircle2
} from "lucide-react";

export default function DatenschutzPage() {
    return (
        <main className="min-h-screen bg-[#F2F0ED] pt-32 pb-20">
            <Navbar />

            <div className="max-w-5xl mx-auto px-6">
                {/* Title Section */}
                <div className="pt-20 pb-16 text-center">
                    <Reveal>
                        <span className="text-sm font-bold tracking-[0.3em] text-[#8A7A65] uppercase mb-4 block">

                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6">
                            Datenschutz
                        </h1>
                        <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full" />
                    </Reveal>
                </div>

                {/* Unified Content Card */}
                <Reveal delay={0.2}>
                    <Card className="bg-creme border-none shadow-premium p-8 md:p-16 rounded-[40px] md:rounded-[60px]">
                        <div className="prose prose-stone max-w-none text-[#685743]">

                            <p className="text-center italic mb-16 text-sm text-[#8A7A65]">
                                (gültig für 2026, rechtskonform nach DSGVO & TDDDG)
                            </p>

                            {/* 1. Allgemeine Hinweise */}
                            <section className="mb-20">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary/70">
                                        <Shield className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-serif font-bold text-foreground m-0">1. Allgemeine Hinweise</h2>
                                </div>
                                <div className="pl-16 space-y-4">
                                    <p>Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Mit dieser Datenschutzerklärung informieren wir über die Erhebung, Verarbeitung und Nutzung personenbezogener Daten auf unserer Website nach der Datenschutz-Grundverordnung (DSGVO) und dem Telekommunikation-Digitale-Dienste-Datenschutzgesetz (TDDDG).</p>
                                    <p>Personenbezogene Daten sind Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen (z. B. Name, E-Mail, IP-Adresse).</p>
                                </div>
                            </section>

                            {/* 2. Verantwortliche Stelle */}
                            <section className="mb-20">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary/70">
                                        <Info className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-serif font-bold text-foreground m-0">2. Verantwortliche Stelle</h2>
                                </div>
                                <div className="pl-16 space-y-4">
                                    <p className="font-bold text-foreground mb-4">Verantwortlich für die Datenverarbeitung auf dieser Website:</p>
                                    <div className="bg-white/40 p-6 rounded-2xl border border-primary/5">
                                        <p className="font-bold text-foreground text-lg mb-2">TK Beauty</p>
                                        <p>Inhaberin: Tetyana Kolunin<br />Krugstraße 39<br />90419 Nürnberg<br />Deutschland</p>
                                        <div className="mt-4 space-y-2">
                                            <p className="flex items-center gap-2 text-sm"><Mail className="w-4 h-4 text-primary" /> tkbeauty@web.de</p>
                                            <p className="flex items-center gap-2 text-sm"><Phone className="w-4 h-4 text-primary" /> +49 15562 483435</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 3. Rechtsgrundlagen */}
                            <section className="mb-20">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary/70">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-serif font-bold text-foreground m-0">3. Rechtsgrundlagen</h2>
                                </div>
                                <div className="pl-16 space-y-6">
                                    <p>Wir verarbeiten personenbezogene Daten nur auf Basis der gesetzlichen Erlaubnis, z. B.:</p>
                                    <ul className="list-none p-0 space-y-3">
                                        <li className="flex items-center gap-3"><span className="text-primary font-bold">✔</span> zur Vertragserfüllung oder vorvertraglicher Maßnahmen</li>
                                        <li className="flex items-center gap-3"><span className="text-primary font-bold">✔</span> zur Wahrung berechtigter Interessen</li>
                                        <li className="flex items-center gap-3"><span className="text-primary font-bold">✔</span> aufgrund Ihrer Einwilligung</li>
                                        <li className="flex items-center gap-3"><span className="text-primary font-bold">✔</span> aufgrund gesetzlicher Verpflichtungen</li>
                                    </ul>
                                    <p>Die einschlägigen Rechtsgrundlagen ergeben sich u. a. aus der DSGVO (insb. Art. 6) und dem TDDDG (§ 25).</p>
                                </div>
                            </section>

                            {/* 4. Hosting & Server-Logfiles */}
                            <section className="mb-20">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary/70">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-serif font-bold text-foreground m-0">4. Hosting & Server-Logfiles</h2>
                                </div>
                                <div className="pl-16 space-y-4">
                                    <p>Unsere Website wird über <strong>Vercel Inc.</strong> bereitgestellt. Die Serverregion ist Frankfurt (eu-central-1) – das bedeutet, dass Ihre Daten primär innerhalb der EU verarbeitet werden. Vercel nimmt zusätzlich am EU-US Data Privacy Framework (DPF) teil, was ein angemessenes Datenschutzniveau für Datenübermittlungen in die USA sicherstellt.</p>
                                    <p>Beim Aufruf der Website werden automatisch Daten in sogenannten Server-Logfiles gespeichert, z. B.:</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>anonymisierte IP-Adresse</li>
                                        <li>Browsertyp/-version</li>
                                        <li>Datum/Uhrzeit des Zugriffs</li>
                                        <li>angeforderte Ressourcen</li>
                                    </ul>
                                    <p><strong>Zweck:</strong> Gewährleistung eines funktionsfähigen und sicheren Betriebs der Website.<br />
                                        <strong>Rechtsgrundlage:</strong> berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).</p>
                                </div>
                            </section>

                            {/* 5. Cookies & Consent-Management */}
                            <section className="mb-20">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary/70">
                                        <Eye className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-serif font-bold text-foreground m-0">5. Cookies & Consent-Management</h2>
                                </div>
                                <div className="pl-16 space-y-8">
                                    <div>
                                        <h3 className="text-xl font-serif font-bold text-foreground m-0 mb-4 italic">5.1 Technisch notwendige Cookies & LocalStorage</h3>
                                        <p>Technisch notwendige Cookies und LocalStorage werden verwendet, um z. B. Ihre Einwilligungsentscheidung zu speichern oder grundsätzliche Website-Funktionen zu ermöglichen. Diese Cookies werden ohne gesonderte Einwilligung gesetzt, wenn sie für die technisch einwandfreie Bereitstellung erforderlich sind (z. B. Speicherung des Consent-Status).<br />
                                            <strong>Rechtsgrundlage:</strong> § 25 Abs. 2 TDDDG.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif font-bold text-foreground m-0 mb-4 italic">5.2 Einwilligungspflichtige Cookies / Vercel Analytics & Speed Insights</h3>
                                        <p>Alle Cookies oder Technologien, die nicht technisch notwendig sind (z. B. zur Performance-Analyse), werden erst nach ausdrücklicher Einwilligung über unser Cookie-Banner aktiviert. Dazu zählen optional:</p>
                                        <ul className="list-disc pl-5 space-y-2 mb-4">
                                            <li>Vercel Analytics</li>
                                            <li>Vercel Speed Insights</li>
                                        </ul>
                                        <p>Diese Dienste erfassen anonymisierte Nutzungs- und Performance-Daten erst nach Zustimmung.<br />
                                            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO i. V. m. § 25 Abs. 1 TDDDG.</p>
                                        <div className="bg-primary/5 p-4 rounded-xl flex items-center gap-3">
                                            <Info className="w-5 h-5 text-primary" />
                                            <p className="m-0 font-medium">➡️ Ohne Ihre Einwilligung werden diese Dienste nicht ausgeführt.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 6. Kontaktformular */}
                            <section className="mb-20">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary/70">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-serif font-bold text-foreground m-0">6. Kontaktformular / Lead-Erfassung</h2>
                                </div>
                                <div className="pl-16 space-y-4">
                                    <p>Wenn Sie unser Kontaktformular nutzen, verarbeiten wir folgende Daten:</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Name</li>
                                        <li>E-Mail</li>
                                        <li>Telefonnummer</li>
                                        <li>Nachrichtentext</li>
                                    </ul>
                                    <p><strong>Zweck:</strong> Bearbeitung Ihrer Anfrage, Terminvereinbarung etc.<br />
                                        <strong>Empfänger / Speicherung:</strong> Die Daten werden in Supabase gespeichert und zur Zustellung per E-Mail über einen SMTP-Dienst (mail.agenturserver.de) an uns weitergeleitet.<br />
                                        <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen / Vertragserfüllung).</p>
                                    <p>Zwischen uns und den jeweiligen Dienstleistern besteht ein Auftragsverarbeitungsvertrag (AVV).</p>
                                </div>
                            </section>

                            {/* 7. Google Maps */}
                            <section className="mb-20">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary/70">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-serif font-bold text-foreground m-0">7. Google Maps (iframe)</h2>
                                </div>
                                <div className="pl-16 space-y-4">
                                    <p>Auf unserer Kontaktseite ist eine Google Maps-Karte eingebettet, um Ihnen unseren Standort anzuzeigen. Beim Laden der Karte wird Ihre IP-Adresse an Google übermittelt.<br />
                                        <strong>Rechtsgrundlage:</strong> berechtigtes Interesse, um die Karte darzustellen (Art. 6 Abs. 1 lit. f DSGVO).</p>
                                    <p>Weitere Informationen zur Datenverarbeitung durch Google finden Sie hier:<br />
                                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline italic">https://policies.google.com/privacy</a></p>
                                </div>
                            </section>

                            {/* 8. Betroffenenrechte */}
                            <section className="mb-20">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary/70">
                                        <UserCheck className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-serif font-bold text-foreground m-0">8. Betroffenenrechte</h2>
                                </div>
                                <div className="pl-16 space-y-6">
                                    <p>Sie haben gemäß DSGVO folgende Rechte:</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            "Auskunft über die verarbeiteten Daten",
                                            "Berichtigung unrichtiger Daten",
                                            "Einschränkung der Verarbeitung",
                                            "Löschung („Recht auf Vergessenwerden“)",
                                            "Datenübertragbarkeit",
                                            "Widerruf von Einwilligungen",
                                            "Beschwerde bei einer Aufsichtsbehörde"
                                        ].map(recht => (
                                            <div key={recht} className="flex items-center gap-3">
                                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                                <span className="text-sm font-medium">{recht}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <p>Zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte: <strong>tkbeauty@web.de</strong>.</p>
                                </div>
                            </section>

                            {/* 9. Speicherdauer */}
                            <section className="mb-20">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary/70">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-serif font-bold text-foreground m-0">9. Speicherdauer</h2>
                                </div>
                                <div className="pl-16 space-y-4">
                                    <p>Personenbezogene Daten werden nur so lange gespeichert, wie es für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.</p>
                                </div>
                            </section>

                            {/* 10. Sicherheit */}
                            <section className="mb-20">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary/70">
                                        <Lock className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-serif font-bold text-foreground m-0">10. Sicherheit</h2>
                                </div>
                                <div className="pl-16 space-y-4">
                                    <p>Wir setzen angemessene technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten vor Verlust, Manipulation und unberechtigtem Zugriff zu schützen.</p>
                                </div>
                            </section>

                            {/* 11. Änderungen */}
                            <section>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary/70">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-serif font-bold text-foreground m-0">11. Änderungen der Datenschutzerklärung</h2>
                                </div>
                                <div className="pl-16 space-y-4">
                                    <p>Diese Datenschutzerklärung gilt ab 2026 und wird bei Bedarf aktualisiert. Sie finden die jeweils aktuelle Version auf unserer Website.</p>
                                </div>
                            </section>

                        </div>
                    </Card>
                </Reveal>
            </div>

            <div className="mt-20">
                <Footer />
            </div>
        </main>
    );
}
