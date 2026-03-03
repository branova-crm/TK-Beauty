"use client";

import { useState, useEffect } from "react";
import { Shield, X, Check, Settings as SettingsIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Link from "next/link";

type ConsentSettings = {
    essential: boolean;
    analytics: boolean;
    marketing: boolean;
};

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
            // Apply consent to existing scripts if needed
            const parsed = JSON.parse(savedConsent);
            setSettings(parsed);
        }
    }, []);

    const saveConsent = (newSettings: ConsentSettings) => {
        localStorage.setItem("cookie-consent", JSON.stringify(newSettings));
        setSettings(newSettings);
        setIsVisible(false);
        setShowSettings(false);

        // Reload to apply script changes or trigger events
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
                <Shield className="w-5 h-5" />
            </button>
        );
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 md:p-8 pointer-events-none">
                    {/* Backdrop for Settings */}
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
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className="w-full max-w-2xl bg-[#FAF8F5] border border-[#3A3A3A]/10 rounded-[32px] shadow-2xl p-6 md:p-8 pointer-events-auto relative overflow-hidden"
                    >
                        {!showSettings ? (
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <Shield className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-serif font-bold text-foreground">
                                            Privatsphäre & Cookies
                                        </h3>
                                        <p className="text-sm text-[#685743] leading-relaxed">
                                            Wir nutzen Cookies, um Ihr Erlebnis zu verbessern und die Performance unserer Website zu messen.
                                            Dabei setzen wir technisch notwendige sowie optionale Analyse-Cookies ein.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                    <Button variant="primary" onClick={handleAcceptAll} className="flex-1">
                                        Alle akzeptieren
                                    </Button>
                                    <Button variant="secondary" onClick={handleDeclineAll} className="flex-1">
                                        Nur notwendige
                                    </Button>
                                    <button
                                        onClick={() => setShowSettings(true)}
                                        className="text-sm font-semibold text-[#8A7A65] hover:text-primary transition-colors px-4 py-2"
                                    >
                                        Einstellungen
                                    </button>
                                </div>

                                <div className="flex gap-4 pt-2 text-[10px] uppercase tracking-widest font-bold text-[#8A7A65]/60">
                                    <Link href="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link>
                                    <Link href="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-serif font-bold text-foreground">
                                        Cookie-Einstellungen
                                    </h3>
                                    <button onClick={() => setShowSettings(false)} className="p-2 hover:bg-black/5 rounded-full transition-colors">
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="space-y-4 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                                    {/* Essential */}
                                    <div className="p-4 rounded-2xl bg-white border border-[#3A3A3A]/5 flex items-center justify-between opacity-80">
                                        <div className="space-y-1">
                                            <p className="font-bold text-sm text-foreground">Technisch notwendig</p>
                                            <p className="text-xs text-[#685743]">Ermöglichen Kernfunktionen der Website.</p>
                                        </div>
                                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                            <Check className="w-4 h-4" />
                                        </div>
                                    </div>

                                    {/* Analytics */}
                                    <div
                                        onClick={() => setSettings(s => ({ ...s, analytics: !s.analytics }))}
                                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${settings.analytics ? "bg-primary/5 border-primary/20" : "bg-white border-[#3A3A3A]/5"
                                            }`}
                                    >
                                        <div className="space-y-1">
                                            <p className="font-bold text-sm text-foreground">Analyse & Performance</p>
                                            <p className="text-xs text-[#685743]">Helfen uns, die Website zu optimieren.</p>
                                        </div>
                                        <div className={`w-10 h-6 rounded-full relative transition-colors ${settings.analytics ? "bg-primary" : "bg-gray-200"}`}>
                                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${settings.analytics ? "left-5" : "left-1"}`} />
                                        </div>
                                    </div>

                                    {/* Marketing */}
                                    <div
                                        onClick={() => setSettings(s => ({ ...s, marketing: !s.marketing }))}
                                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${settings.marketing ? "bg-primary/5 border-primary/20" : "bg-white border-[#3A3A3A]/5"
                                            }`}
                                    >
                                        <div className="space-y-1">
                                            <p className="font-bold text-sm text-foreground">Marketing</p>
                                            <p className="text-xs text-[#685743]">Personalisierte Angebote & Werbung.</p>
                                        </div>
                                        <div className={`w-10 h-6 rounded-full relative transition-colors ${settings.marketing ? "bg-primary" : "bg-gray-200"}`}>
                                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${settings.marketing ? "left-5" : "left-1"}`} />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-3 pt-2">
                                    <Button variant="primary" onClick={handleSaveSelection} className="flex-1">
                                        Auswahl speichern
                                    </Button>
                                    <Button variant="secondary" onClick={handleAcceptAll} className="flex-1">
                                        Alle akzeptieren
                                    </Button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
