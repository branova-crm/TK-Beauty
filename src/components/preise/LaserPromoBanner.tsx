"use client";

import Button from "@/components/ui/Button";
import {
    motusLaserPromoDeadline,
    type LaserPromoContent,
    type LaserPromoDeal,
} from "@/data/motus-preise";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CalendarClock, Gift, Layers, Sparkles } from "lucide-react";
import Link from "next/link";

function parseEuro(value: string) {
    return Number.parseInt(value.replace(/[^\d]/g, ""), 10);
}

function savingsPercent(deal: LaserPromoDeal) {
    const original = parseEuro(deal.originalPrice);
    const current = parseEuro(deal.price);
    if (!original || !current || current >= original) return null;
    return Math.round(((original - current) / original) * 100);
}

type LaserPromoBannerProps = {
    promo: LaserPromoContent;
    className?: string;
};

const perkIcons = [Gift, Layers, Sparkles] as const;

const easePremium = [0.21, 0.47, 0.32, 0.98] as const;

export default function LaserPromoBanner({ promo, className = "" }: LaserPromoBannerProps) {
    const reduceMotion = useReducedMotion();

    return (
        <section
            className={`relative overflow-hidden rounded-[24px] border border-[#BFA67A]/25 bg-gradient-to-br from-[#FAF8F5] via-white to-[#EFE4D0]/45 shadow-[0_8px_40px_rgba(104,87,67,0.08)] ${className}`}
            aria-labelledby={`laser-promo-${promo.audience}`}
        >
            <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#BFA67A]/10 blur-3xl"
                aria-hidden
            />
            <div
                className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-[#EFE4D0]/60 blur-3xl"
                aria-hidden
            />

            <div className="relative p-5 md:p-8 lg:p-10">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
                    <div className="max-w-xl space-y-4">
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#BFA67A]/30 bg-white/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#8A7A65]">
                            <Sparkles className="h-3.5 w-3.5 text-[#BFA67A]" aria-hidden />
                            Laser-Angebote · {promo.audience}
                        </span>
                        <h2
                            id={`laser-promo-${promo.audience}`}
                            className="font-serif text-2xl font-bold leading-tight text-foreground md:text-3xl"
                        >
                            Mehr Glow, weniger Kosten
                        </h2>
                        <p className="text-sm leading-relaxed text-[#685743] md:text-base">
                            Sichern Sie sich exklusive Vorteile für Ihre Motus AX Behandlung – ideal für
                            Neukundinnen und Neukunden sowie langfristige Behandlungspläne.
                        </p>
                    </div>

                    <Link href="/termin" className="shrink-0 self-start lg:pt-2">
                        <Button size="md" className="w-full sm:w-auto px-7">
                            Termin sichern
                            <ArrowRight className="h-4 w-4" aria-hidden />
                        </Button>
                    </Link>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 md:gap-4">
                    {promo.perks.map((perk, index) => {
                        const Icon = perkIcons[index] ?? Sparkles;
                        return (
                            <article
                                key={perk.title}
                                className="rounded-[18px] border border-[#3A3A3A]/[0.06] bg-white/80 p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-sm"
                            >
                                <div className="mb-3 flex items-center gap-3">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EFE4D0]/80 text-[#554734]">
                                        <Icon className="h-[18px] w-[18px]" aria-hidden />
                                    </span>
                                    <span className="rounded-full bg-[#BFA67A]/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#8A7A65]">
                                        {perk.badge}
                                    </span>
                                </div>
                                <h3 className="font-serif text-lg font-bold leading-snug text-foreground">
                                    {perk.title}
                                </h3>
                                <p className="mt-1.5 text-sm leading-relaxed text-[#685743]">{perk.description}</p>
                            </article>
                        );
                    })}
                </div>

                <motion.div
                    className="promo-action-shell mt-8 p-5 text-white md:p-6 lg:p-7"
                    initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.75, ease: easePremium }}
                >
                    <div className="promo-action-orb promo-action-orb--gold" aria-hidden />
                    <div className="promo-action-orb promo-action-orb--cream" aria-hidden />
                    <div className="promo-action-shimmer" aria-hidden />

                    <div className="relative z-10">
                        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <motion.div
                                initial={reduceMotion ? false : { opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.55, delay: 0.1, ease: easePremium }}
                            >
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#EFE4D0]/90">
                                    Limitierte Aktion
                                </p>
                                <p className="mt-1 bg-gradient-to-r from-white via-[#EFE4D0] to-white/80 bg-clip-text font-serif text-xl font-bold text-transparent md:text-2xl">
                                    Jetzt sparen – nur für kurze Zeit
                                </p>
                            </motion.div>

                            <motion.span
                                className="promo-deadline-badge inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white/95 ring-1 ring-[#BFA67A]/30 backdrop-blur-sm"
                                initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2, ease: easePremium }}
                            >
                                <CalendarClock className="h-4 w-4 text-[#EFE4D0]" aria-hidden />
                                Gültig bis {motusLaserPromoDeadline}
                            </motion.span>
                        </div>

                        <div
                            className={`grid gap-3 ${
                                promo.deals.length > 1 ? "sm:grid-cols-2" : "max-w-xl"
                            }`}
                        >
                            {promo.deals.map((deal, index) => {
                                const savings = savingsPercent(deal);
                                return (
                                    <motion.article
                                        key={deal.name}
                                        className="promo-deal-card group relative overflow-hidden rounded-[16px] bg-white/[0.08] p-4 ring-1 ring-white/10 backdrop-blur-sm hover:bg-white/[0.13] hover:ring-[#BFA67A]/35 md:p-5"
                                        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.55,
                                            delay: 0.15 + index * 0.12,
                                            ease: easePremium,
                                        }}
                                        whileHover={
                                            reduceMotion
                                                ? undefined
                                                : { y: -4, transition: { duration: 0.25 } }
                                        }
                                    >
                                        <div
                                            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                            aria-hidden
                                        >
                                            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#BFA67A]/20 blur-2xl" />
                                        </div>

                                        {savings ? (
                                            <span className="promo-savings-badge absolute right-4 top-4 rounded-full bg-gradient-to-br from-[#C9BBA6] to-[#BFA67A] px-2.5 py-1 text-[11px] font-bold text-white">
                                                −{savings} %
                                            </span>
                                        ) : null}

                                        <p className="relative pr-16 text-sm font-medium text-[#EFE4D0]/90">
                                            {deal.name}
                                        </p>
                                        <div className="relative mt-3 flex flex-wrap items-end gap-x-3 gap-y-1">
                                            <span className="font-serif text-3xl font-bold leading-none text-white drop-shadow-[0_2px_12px_rgba(191,166,122,0.35)] md:text-4xl">
                                                {deal.price}
                                            </span>
                                            <span className="pb-0.5 text-sm text-white/55 line-through">
                                                statt {deal.originalPrice}
                                            </span>
                                        </div>
                                    </motion.article>
                                );
                            })}
                        </div>

                        <motion.p
                            className="mt-4 text-xs leading-relaxed text-white/60"
                            initial={reduceMotion ? false : { opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.35 }}
                        >
                            Angebote gelten für Laser-Haarentfernung mit Motus AX (DEKA). Terminvergabe nach
                            Verfügbarkeit.
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
