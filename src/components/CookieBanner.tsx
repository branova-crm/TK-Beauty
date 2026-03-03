"use client";

import { useState, useEffect } from "react";
import { Shield, X, Check, Settings as SettingsIcon, Info, Globe, BarChart3, Lock } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Link from "next/link";

type ConsentSettings = {
    essential: boolean;
    analytics: boolean;
    marketing: boolean;
    timestamp?: string;
};

const Switch = ({ enabled, onChange }: { enabled: boolean; onChange: () => void }) => (
    <div
        onClick={(e) => {
            e.stopPropagation();
            onChange();
        }}
        className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 ease-in-out ${enabled ? "bg-primary shadow-[0_0_12px_rgba(138,122,101,0.3)]" : "bg-gray-200"
            }`}
    >
        <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-all duration-300 ease-in-out flex items-center justify-center ${enabled ? "translate-x-6" : "translate-x-0"
                }`}
        >
            {enabled && <Check className="w-2.5 h-2.5 text-primary stroke-[4]" />}
        </div>
    </div>
);

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [settings, setSettings] = useState<ConsentSettings>({
        essential: true,
        analytics: false,
        marketing: false,
    });

    useEffect(() => {
        const savedConsent = localStorage.getItem("cookie-consent");
        if (!savedConsent) {
            setIsVisible(true);
        } else {
            const parsed = JSON.parse(savedConsent);
            setSettings(parsed);
        }
    }, []);

    const saveConsent = (newSettings: ConsentSettings) => {
        const timestamp = new Date().toLocaleString("de-DE");
        const finalSettings = { ...newSettings, timestamp };
        localStorage.setItem("cookie-consent", JSON.stringify(finalSettings));
        setSettings(finalSettings);
        setIsVisible(false);
        setShowSettings(false);
        window.location.reload();
    };

    const handleAcceptAll = () => {
        saveConsent({ essential: true, analytics: true, marketing: true });
    };

    const handleDeclineAll = () => {
        saveConsent({ essential: true, analytics: false, marketing: false });
    };

    const handleSaveSelection = () => {
        saveConsent(settings);
    };

    if (!isVisible && !showSettings) {
        return (
            <button
                onClick={() => setIsVisible(true)}
                className="fixed bottom-6 left-6 z-[40] p-3 bg-white/80 backdrop-blur-md border border-[#3A3A3A]/10 rounded-full shadow-premium hover:scale-110 transition-transform text-primary"
                aria-label="Cookie-Einstellungen"
            >
                <Shield className="w-4 h-4" />
            </button>
        );
    }

    return (
        <AnimatePresence mode="wait">
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 md:p-6 pointer-events-none">
                    {showSettings && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm pointer-events-auto"
                            onClick={() => setShowSettings(false)}
                        />
                    )}

                    <motion.div
                        layout
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        className="w-full max-w-4xl bg-[#FAF8F5]/95 backdrop-blur-md border border-[#3A3A3A]/10 rounded-[28px] shadow-2xl p-5 md:p-6 pointer-events-auto relative overflow-hidden"
                    >
                        {!showSettings ? (
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="flex items-start gap-4 flex-1">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                                        <Shield className="w-5 h-5" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-serif font-bold text-foreground m-0">
                                            Wir verwenden Cookies
                                        </h3>
                                        <p className="text-xs text-[#685743] leading-relaxed max-w-2xl">
                                            Wir nutzen Cookies, um unsere Website bereitzustellen und Ihre Erfahrung zu verbessern. Analyse-Cookies setzen wir erst nach Ihrer aktiven Zustimmung ein. Notwendige Cookies werden bereits gesetzt.
                                        </p>
                                        <div className="flex gap-4 pt-1 text-[9px] uppercase tracking-widest font-bold text-[#8A7A65]/60">
                                            <Link href="/cookies" className="hover:text-primary transition-colors">Richtlinie</Link>
                                            <Link href="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link>
                                            <Link href="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center justify-center gap-2 shrink-0">
                                    <Button variant="primary" size="sm" onClick={handleAcceptAll} className="px-5 py-2 text-xs">
                                        Alle akzeptieren
                                    </Button>
                                    <Button variant="secondary" size="sm" onClick={handleDeclineAll} className="px-5 py-2 text-xs">
                                        Nur notwendige
                                    </Button>
                                    <button
                                        onClick={() => setShowSettings(true)}
                                        className="text-[11px] font-bold text-[#8A7A65] hover:text-primary transition-colors px-3 py-2 bg-white/50 rounded-lg border border-[#3A3A3A]/5 flex items-center gap-2"
                                    >
                                        <SettingsIcon className="w-3 h-3" />
                                        Einstellungen
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="space-y-5"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                            <SettingsIcon className="w-4 h-4" />
                                        </div>
                                        <h3 className="text-lg font-serif font-bold text-foreground m-0">
                                            Detaillierte Cookie-Einstellungen
                                        </h3>
                                    </div>
                                    <button onClick={() => setShowSettings(false)} className="p-1.5 hover:bg-black/5 rounded-full transition-colors">
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>

                                <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar -mr-2">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Essential */}
                                        <div className="p-4 rounded-2xl bg-white border border-[#3A3A3A]/5 flex flex-col justify-between relative overflow-hidden group min-h-[140px]">
                                            <div className="space-y-3 relative z-10">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <Lock className="w-4 h-4 text-[#8A7A65]" />
                                                        <p className="font-bold text-sm text-foreground">Technisch Notwendig</p>
                                                    </div>
                                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                                        <Check className="w-3.5 h-3.5" />
                                                    </div>
                                                </div>
                                                <p className="text-[11px] text-[#685743] leading-relaxed">
                                                    Diese Cookies sind für den Betrieb der Website zwingend erforderlich und können nicht deaktiviert werden.
                                                </p>
                                                <div className="flex flex-wrap gap-1.5 opacity-80 pt-1">
                                                    <span className="text-[9px] px-2 py-0.5 bg-gray-100 rounded-md text-[#8A7A65]">Local Storage</span>
                                                    <span className="text-[9px] px-2 py-0.5 bg-gray-100 rounded-md text-[#8A7A65]">Consent Status</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Analytics */}
                                        <div
                                            onClick={() => setSettings(s => ({ ...s, analytics: !s.analytics }))}
                                            className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden group min-h-[140px] ${settings.analytics ? "bg-primary/5 border-primary/20" : "bg-white border-[#3A3A3A]/5"
                                                }`}
                                        >
                                            <div className="space-y-3 relative z-10">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <BarChart3 className={`w-4 h-4 ${settings.analytics ? "text-primary" : "text-[#8A7A65]"}`} />
                                                        <p className="font-bold text-sm text-foreground">Analyse & Performance</p>
                                                    </div>
                                                    <Switch
                                                        enabled={settings.analytics}
                                                        onChange={() => setSettings(s => ({ ...s, analytics: !s.analytics }))}
                                                    />
                                                </div>
                                                <p className="text-[11px] text-[#685743] leading-relaxed">
                                                    Helfen uns zu verstehen, wie die Website genutzt wird, um das Angebot und die Ladezeiten zu verbessern.
                                                </p>
                                                <div className="flex flex-wrap gap-1.5 pt-1">
                                                    <span className={`text-[9px] px-2 py-0.5 rounded-md transition-colors ${settings.analytics ? "bg-primary/10 text-primary" : "bg-gray-100 text-[#8A7A65]"}`}>Vercel Analytics</span>
                                                    <span className={`text-[9px] px-2 py-0.5 rounded-md transition-colors ${settings.analytics ? "bg-primary/10 text-primary" : "bg-gray-100 text-[#8A7A65]"}`}>Speed Insights</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Marketing (Google Maps) */}
                                        <div
                                            onClick={() => setSettings(s => ({ ...s, marketing: !s.marketing }))}
                                            className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden group min-h-[140px] ${settings.marketing ? "bg-primary/5 border-primary/20" : "bg-white border-[#3A3A3A]/5"
                                                }`}
                                        >
                                            <div className="space-y-3 relative z-10">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <Globe className={`w-4 h-4 ${settings.marketing ? "text-primary" : "text-[#8A7A65]"}`} />
                                                        <p className="font-bold text-sm text-foreground">Externe Medien & Marketing</p>
                                                    </div>
                                                    <Switch
                                                        enabled={settings.marketing}
                                                        onChange={() => setSettings(s => ({ ...s, marketing: !s.marketing }))}
                                                    />
                                                </div>
                                                <p className="text-[11px] text-[#685743] leading-relaxed">
                                                    Ermöglicht das Anzeigen von externen Inhalten wie Karten. Es wird eine Verbindung zu Drittanbietern aufgebaut.
                                                </p>
                                                <div className="flex flex-wrap gap-1.5 pt-1">
                                                    <span className={`text-[9px] px-2 py-0.5 rounded-md transition-colors ${settings.marketing ? "bg-primary/10 text-primary" : "bg-gray-100 text-[#8A7A65]"}`}>Google Maps</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Info Box */}
                                        <div className="p-4 rounded-2xl bg-[#F2F0ED] border border-[#3A3A3A]/5 flex items-start gap-3 min-h-[140px]">
                                            <Info className="w-4 h-4 text-[#8A7A65] mt-0.5 shrink-0" />
                                            <p className="text-[11px] text-[#685743] leading-relaxed m-0 italic">
                                                Ihre Auswahl wird für 1 Jahr gespeichert. Sie können die Einstellungen jederzeit über das Schloss-Symbol unten links aufrufen und widerrufen.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-[#3A3A3A]/5 mt-2">
                                    <Button variant="primary" size="sm" onClick={handleSaveSelection} className="flex-1 text-xs py-3 font-bold">
                                        Auswahl speichern & bestätigen
                                    </Button>
                                    <Button variant="secondary" size="sm" onClick={handleDeclineAll} className="flex-1 text-xs py-3 font-bold">
                                        Nur notwendige nutzen
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
