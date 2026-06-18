"use client";

import { useState } from "react";
import { X, Send, Loader2, CheckCircle } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { useOverlayLock } from "@/hooks/useOverlayLock";
import { BUSINESS } from "@/lib/site";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const inputClassName =
    "w-full bg-white border border-[#3A3A3A]/[0.08] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-all text-sm text-foreground placeholder:text-[#8A7A65]/70";

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        treatment: "",
        message: "",
        privacy: false,
    });

    useOverlayLock(isOpen);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
            } else {
                throw new Error("Fehler beim Senden");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
            setTimeout(() => setStatus("success"), 1000);
        }
    };

    return (
        <div
            className="fixed inset-0 z-[10050] flex items-center justify-center p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
        >
            <div
                className="absolute inset-0 bg-[#3A3A3A]/60 backdrop-blur-sm"
                onClick={onClose}
                aria-hidden="true"
            />

            <div className="relative bg-[#FAF8F5] w-full max-w-2xl rounded-[28px] md:rounded-[2.5rem] shadow-[0_24px_64px_rgba(0,0,0,0.18)] overflow-hidden border border-[#3A3A3A]/[0.06] animate-in zoom-in-95 duration-300 max-h-[92vh] overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 p-2 rounded-full bg-white/80 border border-[#3A3A3A]/[0.06] hover:bg-creme transition-colors z-10"
                    aria-label="Schließen"
                >
                    <X className="w-5 h-5 text-[#685743]" />
                </button>

                {status === "success" ? (
                    <div className="p-10 md:p-12 text-center space-y-6">
                        <div className="w-20 h-20 bg-primary/15 rounded-full flex items-center justify-center mx-auto">
                            <CheckCircle className="w-10 h-10 text-primary" />
                        </div>
                        <div className="space-y-2">
                            <h2 id="contact-modal-title" className="text-3xl font-serif text-foreground">
                                Vielen Dank!
                            </h2>
                            <p className="text-[#685743]">
                                Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.
                            </p>
                        </div>
                        <Button onClick={onClose} className="mx-auto">
                            Schließen
                        </Button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-5">
                        <div className="hidden md:flex md:col-span-2 bg-gradient-to-br from-[#3A3A3A] to-[#685743] p-10 flex-col justify-between text-white">
                            <div className="space-y-4">
                                <h3 id="contact-modal-title" className="text-2xl font-serif">
                                    Beratung vereinbaren
                                </h3>
                                <p className="text-white/80 text-sm leading-relaxed">
                                    Haben Sie Fragen zu unseren Behandlungen? Wir beraten Sie gerne unverbindlich.
                                </p>
                            </div>
                            <div className="text-xs text-white/60 leading-relaxed">
                                {BUSINESS.name} Nürnberg
                                <br />
                                {BUSINESS.street}
                                <br />
                                {BUSINESS.postalCode} {BUSINESS.city}
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="md:col-span-3 p-7 sm:p-10 space-y-4">
                            <div className="md:hidden mb-2">
                                <h3 className="text-xl font-serif font-bold text-foreground pr-10">
                                    Beratung vereinbaren
                                </h3>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-[#8A7A65]">
                                    Name *
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Ihr Vor- und Nachname"
                                    className={inputClassName}
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-[#8A7A65]">
                                        E-Mail *
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="beispiel@mail.de"
                                        className={inputClassName}
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-[#8A7A65]">
                                        Telefon
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="0123 / 4567890"
                                        className={inputClassName}
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-[#8A7A65]">
                                    Interesse an *
                                </label>
                                <select
                                    required
                                    className={`${inputClassName} appearance-none`}
                                    value={formData.treatment}
                                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                                >
                                    <option value="">Bitte wählen...</option>
                                    <option value="laser">Laserhaarentfernung (Motus AX)</option>
                                    <option value="microneedling">Microneedling</option>
                                    <option value="kosmetik">Kosmetische Behandlungen</option>
                                    <option value="beratung">Allgemeine Beratung</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-[#8A7A65]">
                                    Nachricht
                                </label>
                                <textarea
                                    rows={3}
                                    placeholder="Wie können wir Ihnen helfen?"
                                    className={`${inputClassName} resize-none`}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <div className="flex items-start gap-3 py-1">
                                <input
                                    required
                                    type="checkbox"
                                    id="privacy"
                                    className="mt-1 accent-primary"
                                    checked={formData.privacy}
                                    onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                                />
                                <label htmlFor="privacy" className="text-xs text-[#8A7A65] leading-relaxed">
                                    Ich habe die{" "}
                                    <Link href="/datenschutz" className="text-primary hover:underline transition-colors">
                                        Datenschutzerklärung
                                    </Link>{" "}
                                    zur Kenntnis genommen und stimme zu, dass meine Angaben zur Kontaktaufnahme
                                    gespeichert werden. *
                                </label>
                            </div>

                            <Button type="submit" className="w-full py-4 text-base" disabled={status === "loading"}>
                                {status === "loading" ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Wird gesendet...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4" />
                                        Jetzt senden
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}
