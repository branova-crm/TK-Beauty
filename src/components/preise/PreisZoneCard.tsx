"use client";

import type { MotusPriceItem } from "@/data/motus-preise";
import type { TreatmentPriceItem } from "@/data/microneedling-preise";
import AmpersandText from "@/components/ui/AmpersandText";

type PriceItem = MotusPriceItem | TreatmentPriceItem;

function PreisZoneBox({ label, items }: { label: string; items: PriceItem[] }) {
    return (
        <section className="rounded-[22px] bg-white border border-[#3A3A3A]/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.05)] p-6 md:p-8 h-full">
            <header className="flex items-center gap-4 mb-4 md:mb-5">
                <h3 className="font-serif text-base md:text-lg font-bold uppercase tracking-[0.12em] text-primary">
                    <AmpersandText>{label}</AmpersandText>
                </h3>
                <span className="h-px flex-1 bg-gradient-to-r from-primary/35 to-transparent" aria-hidden />
            </header>

            <ul className="divide-y divide-[#3A3A3A]/[0.07]">
                {items.map((item, index) => {
                    const originalPrice = "originalPrice" in item ? item.originalPrice : undefined;
                    return (
                        <li
                            key={`${item.name}-${index}`}
                            className="flex items-start justify-between gap-4 py-3 first:pt-0 last:pb-0"
                        >
                            <span className="text-foreground font-medium text-sm md:text-[15px] leading-snug">
                                {item.name}
                            </span>
                            <span className="flex items-baseline gap-2 md:gap-3 shrink-0 text-right">
                                {item.duration ? (
                                    <span className="hidden sm:inline text-xs text-[#8A7A65] whitespace-nowrap">
                                        {item.duration}
                                    </span>
                                ) : null}
                                {originalPrice ? (
                                    <span className="text-xs text-[#8A7A65] line-through whitespace-nowrap">
                                        {originalPrice}
                                    </span>
                                ) : null}
                                <span className="font-serif font-bold text-primary text-base md:text-lg whitespace-nowrap">
                                    {item.price}
                                </span>
                            </span>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export function PreisZoneBoxes({
    items,
    fallbackLabel = "Preise",
}: {
    items: PriceItem[];
    fallbackLabel?: string;
}) {
    const groups: { label: string; items: PriceItem[] }[] = [];
    const indexByLabel = new Map<string, number>();

    for (const item of items) {
        const label = "group" in item && item.group ? item.group : fallbackLabel;
        const existing = indexByLabel.get(label);
        if (existing === undefined) {
            indexByLabel.set(label, groups.length);
            groups.push({ label, items: [item] });
        } else {
            groups[existing].items.push(item);
        }
    }

    const multi = groups.length > 1;

    return (
        <div
            className={`grid gap-5 md:gap-6 p-5 md:p-7 ${multi ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"}`}
        >
            {groups.map((group) => (
                <PreisZoneBox key={group.label} label={group.label} items={group.items} />
            ))}
        </div>
    );
}
