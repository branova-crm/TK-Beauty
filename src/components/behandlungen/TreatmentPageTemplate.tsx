import Link from "next/link";
import Button from "@/components/ui/Button";
import SurfaceSection from "@/components/ui/SurfaceSection";
import Reveal from "@/components/ui/Reveal";
import Card from "@/components/ui/Card";
import JsonLd from "@/components/seo/JsonLd";
import FaqAccordion from "@/components/seo/FaqAccordion";
import TreatmentHeroImage from "@/components/behandlungen/TreatmentHeroImage";
import TreatmentPriceSections, {
    type TreatmentPriceSection,
} from "@/components/behandlungen/TreatmentPriceSections";
import { PreisZoneBoxes } from "@/components/preise/PreisZoneCard";
import { buildTreatmentPageSchemas, type FaqItem } from "@/lib/seo/schemas";
import { Check, ArrowRight } from "lucide-react";
import type { MotusPriceItem } from "@/data/motus-preise";
import type { TreatmentPriceItem } from "@/data/microneedling-preise";

type PriceItem = MotusPriceItem | TreatmentPriceItem;

type TreatmentPageTemplateProps = {
    eyebrow: string;
    title: string;
    intro: string;
    benefits: readonly string[];
    process?: readonly string[];
    priceTitle?: string;
    priceItems?: readonly PriceItem[];
    priceSections?: readonly TreatmentPriceSection[];
    faqs: readonly FaqItem[];
    serviceName: string;
    serviceDescription: string;
    path: string;
    breadcrumbs: { name: string; path: string }[];
    imageSrc?: string;
    imageAlt?: string;
    relatedLinks: { href: string; label: string }[];
};

export default function TreatmentPageTemplate({
    eyebrow,
    title,
    intro,
    benefits,
    process,
    priceTitle = "Preise",
    priceItems,
    priceSections,
    faqs,
    serviceName,
    serviceDescription,
    path,
    breadcrumbs,
    imageSrc,
    imageAlt,
    relatedLinks,
}: TreatmentPageTemplateProps) {
    const schemas = buildTreatmentPageSchemas({
        serviceName,
        serviceDescription,
        path,
        breadcrumbs,
        faqs,
    });

    return (
        <>
            <JsonLd data={schemas} />

            <SurfaceSection variant="light" className="py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-16 lg:mb-24">
                    <Reveal className="space-y-8">
                        <div className="space-y-4">
                            <span className="text-sm font-bold tracking-widest text-[#8A7A65] uppercase block">
                                {eyebrow}
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
                                {title}
                            </h1>
                        </div>
                        <p className="text-lg text-[#685743] leading-relaxed max-w-lg">{intro}</p>
                        <p className="text-sm text-[#8A7A65]">
                            TK BEAUTYSTUDIO · Krugstraße 39, 90419 Nürnberg
                        </p>
                        <div className="flex flex-col gap-4 pt-2 w-full max-w-lg">
                            <Link href="/termin" className="block w-full">
                                <Button variant="primary" className="w-full">
                                    Termin buchen
                                </Button>
                            </Link>
                            <Link href="/preise" className="block w-full">
                                <Button variant="secondary" className="w-full">
                                    Preisliste ansehen
                                    <ArrowRight className="w-4 h-4 ml-1 opacity-70" />
                                </Button>
                            </Link>
                        </div>
                    </Reveal>
                    {imageSrc && imageAlt ? (
                        <Reveal delay={0.2}>
                            <TreatmentHeroImage src={imageSrc} alt={imageAlt} />
                        </Reveal>
                    ) : null}
                </div>

                <div
                    className={`grid grid-cols-1 gap-12 mb-16 lg:mb-24 ${process ? "lg:grid-cols-2" : ""}`}
                >
                    <Reveal className={process ? undefined : "col-span-full"}>
                        <Card hover={false} className="p-8 md:p-10 h-full">
                            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Ihre Vorteile</h2>
                            {process ? (
                                <ul className="space-y-4">
                                    {benefits.map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-[#685743]">
                                            <div className="w-6 h-6 rounded-full bg-[#EFE4D0] flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3.5 h-3.5 text-[#685743]" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {benefits.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-start gap-3 rounded-[20px] border border-[#3A3A3A]/[0.08] bg-[#FAF8F5]/80 p-5 text-[#685743] text-sm leading-relaxed"
                                        >
                                            <div className="w-9 h-9 rounded-full bg-[#EFE4D0] flex items-center justify-center shrink-0">
                                                <Check className="w-4 h-4 text-[#685743]" />
                                            </div>
                                            <span className="pt-1.5">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </Card>
                    </Reveal>
                    {process ? (
                        <Reveal delay={0.1}>
                            <Card hover={false} className="p-8 md:p-10 h-full">
                                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Ablauf</h2>
                                <ol className="space-y-4">
                                    {process.map((step, index) => (
                                        <li key={step} className="flex items-start gap-4 text-[#685743]">
                                            <span className="w-8 h-8 rounded-full bg-primary/15 text-primary font-bold text-sm flex items-center justify-center shrink-0">
                                                {index + 1}
                                            </span>
                                            {step}
                                        </li>
                                    ))}
                                </ol>
                            </Card>
                        </Reveal>
                    ) : null}
                </div>

                <Reveal className="mb-16 lg:mb-24">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6 md:mb-8">
                        {priceTitle}
                    </h2>
                    {priceSections ? (
                        <TreatmentPriceSections sections={priceSections} />
                    ) : priceItems ? (
                        <div className="rounded-[20px] bg-white/60 border border-[#3A3A3A]/[0.08] overflow-hidden shadow-sm">
                            <PreisZoneBoxes items={[...priceItems]} fallbackLabel={priceTitle} />
                        </div>
                    ) : null}
                </Reveal>

                <Reveal className="mb-16 lg:mb-24">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6 md:mb-8">
                        Häufig gestellte Fragen
                    </h2>
                    <FaqAccordion faqs={faqs} />
                </Reveal>

                <Reveal className="mb-16 lg:mb-24">
                    <Card hover={false} className="p-8 md:p-12 text-center space-y-6 shadow-premium border-[#3A3A3A]/[0.08]">
                        <span className="text-xs font-bold tracking-[0.2em] text-[#8A7A65] uppercase block">
                            Persönliche Beratung
                        </span>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-tight">
                            Bereit für Ihre Behandlung?
                        </h2>
                        <p className="text-[#685743] max-w-xl mx-auto leading-relaxed">
                            Vereinbaren Sie Ihren Termin online oder kontaktieren Sie uns – wir beraten Sie gerne
                            individuell in unserem Studio in Nürnberg.
                        </p>
                        <div className="flex flex-col gap-3 sm:gap-4 justify-center items-stretch pt-2 max-w-md mx-auto w-full">
                            <Link href="/kontakt" className="block w-full">
                                <Button variant="secondary" size="lg" className="w-full">
                                    Kontakt
                                </Button>
                            </Link>
                            <Link href="/termin" className="block w-full">
                                <Button variant="primary" size="lg" className="w-full">
                                    Termin buchen
                                </Button>
                            </Link>
                        </div>
                    </Card>
                </Reveal>

                <Reveal>
                    <Card hover={false} className="p-8 md:p-10 text-center border-[#3A3A3A]/[0.06]">
                        <span className="text-xs font-bold tracking-[0.2em] text-[#8A7A65] uppercase block mb-5">
                            Weitere Behandlungen
                        </span>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {relatedLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-semibold text-foreground hover:text-primary border-b border-[#3A3A3A]/20 hover:border-primary pb-1 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </Card>
                </Reveal>
            </SurfaceSection>
        </>
    );
}
