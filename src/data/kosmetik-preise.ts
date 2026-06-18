import type { TreatmentPriceItem } from "./microneedling-preise";

export const kosmetikIntro =
    "Unsere kosmetischen Gesichtsbehandlungen verbinden hochwertige Wirkstoffe mit individueller Hautanalyse – für ein gesund aussehendes, strahlendes und gepflegtes Hautbild in Nürnberg.";

export const kosmetikPreise: TreatmentPriceItem[] = [
    {
        name: "BIOPHYTO",
        price: "129 €",
        duration: "1 Std. 30 Min.",
        description:
            "Ausgleichende Behandlung für eine gesund aussehende Haut. BIOPHYTO vereint Wissenschaft und Natur und schafft Produkte mit einzigartigen Eigenschaften und hervorragenden Ergebnissen. Individuelle Lösungen für vielfältige Hautbedürfnisse.",
        steps: "Reinigung, Toner, Ausreinigung, Peeling, Massagecreme, sebumregulierende Maske, aktiver Wirkstoff, Abschlusspflege",
    },
    {
        name: "BIO WHITE",
        price: "149 €",
        duration: "1 Std. 30 Min.",
        description:
            "Sanfte kosmetische Pflegebehandlung für einen frischen, ebenmäßigen und strahlenden Teint. Unterstützt die Haut dabei, dunklere Hautareale optisch auszugleichen und spendet intensive Feuchtigkeit.",
        steps: "Reinigung, Toner, Peeling, aktive Maske, aktiver Wirkstoff, Abschlusspflege",
    },
    {
        name: "Intim-Peeling",
        price: "99 €",
        duration: "45 Min.",
        description:
            "Sanfte kosmetische Pflegebehandlung für den Intimbereich. Unterstützt die Haut dabei, dunklere Hautareale optisch auszugleichen und den Hautton harmonischer wirken zu lassen.",
        steps: "Reinigung, Entfettung, Whitening Peeling, Whitening Lotion",
    },
    {
        name: "Achsel-Peeling",
        price: "99 €",
        duration: "45 Min.",
        description:
            "Pflegebehandlung für den Achselbereich zur optischen Ausgleichung des Hauttons und für ein frisches, weiches Hautgefühl.",
        steps: "Reinigung, Entfettung, Whitening Peeling, Whitening Lotion",
    },
];

export const kosmetikBenefits = [
    "Individuelle Hautanalyse vor jeder Behandlung",
    "Hochwertige Wirkstoffkosmetik mit sichtbaren Ergebnissen",
    "Sanfte Pflege für Gesicht und empfindliche Körperzonen",
    "Persönliche Beratung in entspannter Studioatmosphäre in Nürnberg",
] as const;

export const kosmetikFaqs = [
    {
        question: "Welche kosmetischen Behandlungen bietet TK BEAUTYSTUDIO in Nürnberg an?",
        answer:
            "Wir bieten BIOPHYTO-Gesichtsbehandlungen, BIO WHITE für einen strahlenden Teint sowie Intim- und Achsel-Peelings an – jeweils individuell auf Ihre Haut abgestimmt.",
    },
    {
        question: "Was ist der Unterschied zwischen BIOPHYTO und BIO WHITE?",
        answer:
            "BIOPHYTO fokussiert auf Hautbalance und Regeneration bei vielfältigen Hautbedürfnissen. BIO WHITE unterstützt einen ebenmäßigeren Teint und mildert dunklere Hautareale optisch – ideal für einen frischen, strahlenden Look.",
    },
    {
        question: "Wie lange dauert eine Gesichtsbehandlung?",
        answer:
            "Eine BIOPHYTO- oder BIO WHITE-Behandlung dauert etwa 1 Std. 30 Min. Intim- und Achsel-Peelings dauern jeweils ca. 45 Minuten.",
    },
    {
        question: "Was kosten kosmetische Behandlungen?",
        answer:
            "BIOPHYTO kostet 129 €, BIO WHITE 149 €. Intim- und Achsel-Peeling jeweils 99 €. Alle Preise finden Sie auch auf unserer Preisliste.",
    },
    {
        question: "Brauche ich eine Beratung vor der ersten Behandlung?",
        answer:
            "Ja, wir empfehlen eine kurze Beratung, um die passende Behandlung für Ihren Hauttyp zu finden. Die Beratung ist kostenlos – buchen Sie gerne online oder telefonisch.",
    },
    {
        question: "Wo finde ich das Studio in Nürnberg?",
        answer:
            "TK BEAUTYSTUDIO befindet sich in der Krugstraße 39, 90419 Nürnberg. Termine können Sie online unter /termin buchen.",
    },
] as const;
