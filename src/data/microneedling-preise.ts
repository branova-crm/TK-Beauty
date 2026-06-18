export type TreatmentPriceItem = {
    name: string;
    price: string;
    duration: string;
    description?: string;
    steps?: string;
};

export const microneedlingIntro =
    "Microneedling ist eine schonende, minimal-invasive Hautbehandlung, bei der die Haut mit feinen Mikroverletzungen stimuliert wird. Dadurch wird die natürliche Regeneration der Haut kosmetisch unterstützt und die hauteigenen Prozesse zur Kollagen- und Elastinbildung werden angeregt. Die Behandlung kann zu einem glatteren, strafferen und ebenmäßigeren Hautbild beitragen sowie sichtbare Linien, Narben und Unebenheiten optisch mildern.";

export const microneedlingPreise: TreatmentPriceItem[] = [
    {
        name: "Gesicht",
        price: "149 €",
        duration: "1 Std. 30 Min.",
        steps: "Reinigung & Peeling, Needling mit Wirkstoffkonzentrat, Maske & Light Lampe, Abschlusspflege",
    },
    {
        name: "Hals",
        price: "75 €",
        duration: "1 Std.",
        steps: "Reinigung & Peeling, Needling mit Wirkstoffkonzentrat, Maske & Light Lampe, Abschlusspflege",
    },
    {
        name: "Dekolleté",
        price: "75 €",
        duration: "1 Std.",
        steps: "Reinigung & Peeling, Needling mit Wirkstoffkonzentrat, Maske & Light Lampe, Abschlusspflege",
    },
    {
        name: "Gesicht + Hals + Dekolleté",
        price: "250 €",
        duration: "2 Std. 30 Min.",
        steps: "Reinigung & Peeling, Needling mit Wirkstoffkonzentrat, Maske & Light Lampe, Abschlusspflege",
    },
];

export const microneedlingBenefits = [
    "Stimuliert die natürliche Kollagen- und Elastinbildung",
    "Verfeinert Poren und mildert feine Linien optisch",
    "Unterstützt ein ebenmäßigeres, strafferes Hautbild",
    "Schonende Behandlung mit individuell abgestimmten Wirkstoffen",
] as const;

export const microneedlingFaqs = [
    {
        question: "Was ist Microneedling und wie wirkt es?",
        answer:
            "Beim Microneedling werden feine Mikrokanäle in die oberste Hautschicht gesetzt, um die hauteigene Regeneration anzuregen. In unserem Studio in Nürnberg kombinieren wir die Behandlung mit passenden Wirkstoffkonzentraten für ein frisches, gepflegtes Hautbild.",
    },
    {
        question: "Für wen eignet sich Microneedling in Nürnberg?",
        answer:
            "Microneedling eignet sich für Kundinnen und Kunden, die ihr Hautbild verfeinern, Unebenheiten mildern oder den Teint auffrischen möchten. In einem persönlichen Beratungsgespräch klären wir, ob die Behandlung für Ihre Haut sinnvoll ist.",
    },
    {
        question: "Wie viele Sitzungen sind empfehlenswert?",
        answer:
            "Für sichtbare Ergebnisse empfehlen wir in der Regel eine Kur von mehreren Behandlungen im Abstand von etwa 4–6 Wochen. Die genaue Anzahl hängt von Ihrem Hautbild und Ihrem Behandlungsziel ab.",
    },
    {
        question: "Was kostet Microneedling bei TK BEAUTYSTUDIO?",
        answer:
            "Die Behandlung für das Gesicht kostet 149 €. Weitere Preise für Hals, Dekolleté und Kombi-Pakete finden Sie auf unserer Preisliste oder direkt auf dieser Seite.",
    },
    {
        question: "Wie bereite ich mich auf die Behandlung vor?",
        answer:
            "Vermeiden Sie starke Sonne, Solarium und Peelings einige Tage vor der Behandlung. Kommen Sie mit gereinigter Haut – wir beraten Sie vorab gerne persönlich in unserem Studio in der Krugstraße 39 in Nürnberg.",
    },
    {
        question: "Kann ich einen Termin online buchen?",
        answer:
            "Ja, Sie können Ihren Microneedling-Termin bequem online über unsere Terminbuchung auf tkbeautystudio.de/termin sichern.",
    },
] as const;
