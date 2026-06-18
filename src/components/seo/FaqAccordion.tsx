"use client";

import { useState } from "react";
import PreisAccordionPanel from "@/components/preise/PreisAccordionPanel";
import type { FaqItem } from "@/lib/seo/schemas";

type FaqAccordionProps = {
    faqs: readonly FaqItem[];
};

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <div className="flex flex-col gap-3 md:gap-4">
            {faqs.map((faq, index) => {
                const id = `faq-${index}`;
                const isOpen = openIndex === index;

                return (
                    <PreisAccordionPanel
                        key={faq.question}
                        id={id}
                        title={faq.question}
                        iconKey="help"
                        isOpen={isOpen}
                        onToggle={() => toggle(index)}
                    >
                        <div className="px-5 py-4 md:px-6 md:py-5">
                            <p className="text-sm md:text-base text-[#685743] leading-relaxed">{faq.answer}</p>
                        </div>
                    </PreisAccordionPanel>
                );
            })}
        </div>
    );
}
