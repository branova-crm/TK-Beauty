"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import {
    Shield,
    Lock,
    Eye,
    FileText,
    CheckCircle2,
    Info,
    Trash2,
    Settings as SettingsIcon,
    History,
    XCircle
} from "lucide-react";

const cookieGroups = [
    {
        title: "Technisch Notwendige Cookies",
        description: "Diese Cookies sind für das Funktionieren der Website zwingend erforderlich und können in unseren Systemen nicht deaktiviert werden. Sie speichern beispielsweise Ihren Consent-Status.",
        items: [
            { name: "cookie-consent", provider: "TK Beauty (Lokal)", purpose: "Speichert Ihre Cookie-Präferenzen.", duration: "1 Jahr" },
            { name: "next-font-google", provider: "TK Beauty (Vercel)", purpose: "Optimierung der Schriftbilddarstellung.", duration: "Sitzung" }
        ]
    },
    {
        title: "Analyse & Performance",
        description: "Diese Technologien helfen uns zu verstehen, wie Besucher mit der Website interagieren. Die Daten werden anonymisiert verarbeitet und dienen der technischen Verbesserung.",
        items: [
            { name: "_vercel_analytics", provider: "Vercel Inc.", purpose: "Anonyme Nutzungsstatistiken zur Reichweitenmessung.", duration: "Variable" },
            { name: "speed_insights", provider: "Vercel Inc.", purpose: "Messung der Ladezeiten zur Performance-Optimierung.", duration: "Variable" }
        ]
    }
];

export default function CookiePolicyPage() {
    const [consentInfo, setConsentInfo] = useState<{ timestamp?: string; analytics?: boolean } | null>(null);

    useEffect(() => {
        const saved = localStorage.getItem("cookie-consent");
        if (saved) {
            setConsentInfo(JSON.parse(saved));
        }
    }, []);

    const handleRevoke = () => {
        localStorage.removeItem("cookie-consent");
        window.location.reload();
    };

    return (
        <main className="min-h-screen bg-[#F2F0ED] pt-32 pb-20">
            <Navbar />

            <div className="max-w-5xl mx-auto px-6">
                {/* Title Section */}
                <div className="pt-20 pb-16 text-center">
                    <Reveal>
                        <span className="text-sm font-bold tracking-[0.3em] text-[#8A7A65] uppercase mb-4 block">
                            Transparenz & Kontrolle
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6">
                            Cookie-Richtlinie
                        </h1>
                        <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full" />
                    </Reveal>
                </div>

                {/* Consent Status Card */}
                <Reveal delay={0.1}>
                    <Card className="bg-white border-none shadow-premium p-8 rounded-[32px] mb-8 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                <History className="w-7 h-7" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xl font-serif font-bold text-foreground m-0">Ihr aktueller Status</h3>
                                {consentInfo ? (
                                    <div className="space-y-1">
                                        <p className="text-sm text-[#685743] m-0">
                                            Einwilligung erteilt am: <span className="font-bold text-foreground">{consentInfo.timestamp || "Unbekannt"}</span>
                                        </p>
                                        <p className="text-xs text-[#8A7A65] m-0">
                                            Eingeschlossene Kategorien:
                                            <span className="ml-1 px-2 py-0.5 bg-green-50 text-green-700 rounded-full font-medium">Technisch notwendig</span>
                                            {consentInfo.analytics && (
                                                <span className="ml-1 px-2 py-0.5 bg-green-50 text-green-700 rounded-full font-medium">Analyse & Performance</span>
                                            )}
                                        </p>
                                    </div>
                                ) : (
                                    <p className="text-sm text-[#685743] m-0 italic">Noch keine Auswahl getroffen.</p>
                                )}
                            </div>
                        </div>
                        {consentInfo && (
                            <Button
                                variant="secondary"
                                size="sm"
                                onClick={handleRevoke}
                                className="flex items-center gap-2 border-red-100 text-red-600 hover:bg-red-50 hover:border-red-200"
                            >
                                <XCircle className="w-4 h-4" />
                                Auswahl widerrufen
                            </Button>
                        )}
                    </Card>
                </Reveal>

                {/* Content Card */}
                <Reveal delay={0.2}>
                    <Card className="bg-creme border-none shadow-premium p-8 md:p-16 rounded-[40px] md:rounded-[60px]">
                        <div className="prose prose-stone max-w-none text-[#685743]">

                            {/* 1. Was sind Cookies */}
                            <section className="mb-20">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary/70">
                                        <Info className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-serif font-bold text-foreground m-0">1. Was sind Cookies?</h2>
                                </div>
                                <div className="pl-16 space-y-4">
                                    <p>Cookies sind kleine Textdateien, die von einer Website auf Ihrem Computer oder Mobilgerät gespeichert werden, wenn Sie diese besuchen. Sie helfen der Website dabei, Ihr Gerät zu erkennen und sich bestimmte Informationen über Ihren Besuch zu merken (z. B. Ihre bevorzugten Einstellungen oder den Stand einer Buchung).</p>
                                </div>
                            </section>

                            {/* 2. Unsere Cookie-Kategorien */}
                            <section className="mb-20">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary/70">
                                        <SettingsIcon className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-serif font-bold text-foreground m-0">2. Verwendete Technologien</h2>
                                </div>

                                <div className="pl-16 space-y-12">
                                    {cookieGroups.map((group, idx) => (
                                        <div key={idx} className="space-y-6">
                                            <div>
                                                <h3 className="text-xl font-serif font-bold text-foreground m-0 mb-4 italic">{group.title}</h3>
                                                <p className="text-sm leading-relaxed mb-6">{group.description}</p>
                                            </div>

                                            <div className="overflow-x-auto">
                                                <table className="w-full text-left text-sm border-collapse bg-white/30 rounded-2xl overflow-hidden shadow-sm">
                                                    <thead>
                                                        <tr className="bg-primary/5 text-[#8A7A65]">
                                                            <th className="p-4 font-bold border-b border-primary/10 tracking-widest uppercase text-[10px]">Name</th>
                                                            <th className="p-4 font-bold border-b border-primary/10 tracking-widest uppercase text-[10px]">Anbieter</th>
                                                            <th className="p-4 font-bold border-b border-primary/10 tracking-widest uppercase text-[10px]">Zweck</th>
                                                            <th className="p-4 font-bold border-b border-primary/10 tracking-widest uppercase text-[10px]">Dauer</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-primary/5">
                                                        {group.items.map((item, id) => (
                                                            <tr key={id} className="hover:bg-white/40 transition-colors">
                                                                <td className="p-4 font-mono text-[11px] text-foreground">{item.name}</td>
                                                                <td className="p-4 font-medium">{item.provider}</td>
                                                                <td className="p-4 text-[#8A7A65]">{item.purpose}</td>
                                                                <td className="p-4 text-[#8A7A65] whitespace-nowrap">{item.duration}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* 3. Kontrolle & Widerruf */}
                            <section className="mb-20">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary/70">
                                        <Trash2 className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-serif font-bold text-foreground m-0">3. Ihre Auswahl verwalten</h2>
                                </div>
                                <div className="pl-16 space-y-6">
                                    <p>Sie können Ihre Einwilligung zur Nutzung von nicht-notwendigen Cookies jederzeit widerrufen oder Ihre Einstellungen anpassen. Nutzen Sie dazu einfach den Cookie-Einstellungs-Button unten links auf Ihrem Bildschirm.</p>
                                    <div className="bg-primary/5 p-6 rounded-2xl space-y-4">
                                        <p className="text-sm font-medium text-foreground m-0">Browserseitige Kontrolle:</p>
                                        <p className="text-sm m-0">Zusätzlich können Sie in den Einstellungen Ihres Browsers (z. B. Chrome, Safari, Firefox) festlegen, ob Sie Cookies generell ablehnen oder bereits gesetzte Cookies löschen möchten. Bitte beachten Sie, dass die Ablehnung technischer Cookies die Funktionalität dieser Website beeinträchtigen kann.</p>
                                    </div>
                                </div>
                            </section>

                            {/* footer text */}
                            <div className="pt-12 border-t border-[#3A3A3A]/10 text-[11px] text-[#8A7A65] text-center">
                                Stand der Cookie-Richtlinie: März 2026. <br />
                                Weitere Informationen finden Sie in unserer <Link href="/datenschutz" className="underline hover:text-primary">Datenschutzerklärung</Link>.
                            </div>

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
