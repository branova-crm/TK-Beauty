"use client";

import { useState } from "react";
import PreisAccordionPanel, {
    type PreisAccordionIconKey,
} from "@/components/preise/PreisAccordionPanel";
import { PreisZoneBoxes } from "@/components/preise/PreisZoneCard";
import type { MotusPriceItem } from "@/data/motus-preise";
import type { TreatmentPriceItem } from "@/data/microneedling-preise";

type PriceItem = MotusPriceItem | TreatmentPriceItem;

export type TreatmentPriceSection = {
    id: string;
    title: string;
    subtitle?: string;
    iconKey: PreisAccordionIconKey;
    items: readonly PriceItem[];
    fallbackLabel?: string;
};

type TreatmentPriceSectionsProps = {
    sections: readonly TreatmentPriceSection[];
};

export default function TreatmentPriceSections({ sections }: TreatmentPriceSectionsProps) {
    const [openId, setOpenId] = useState<string | null>(sections[0]?.id ?? null);

    return (
        <div className="flex flex-col gap-3 md:gap-4">
            {sections.map((section) => (
                <PreisAccordionPanel
                    key={section.id}
                    id={section.id}
                    title={section.title}
                    subtitle={section.subtitle}
                    iconKey={section.iconKey}
                    isOpen={openId === section.id}
                    onToggle={() => setOpenId((prev) => (prev === section.id ? null : section.id))}
                >
                    <PreisZoneBoxes
                        items={[...section.items]}
                        fallbackLabel={section.fallbackLabel ?? section.title}
                    />
                </PreisAccordionPanel>
            ))}
        </div>
    );
}
