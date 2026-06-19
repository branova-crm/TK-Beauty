import type { Metadata } from "next";
import { BUSINESS, SITE_URL } from "@/lib/site";

export const SITE_NAME = "TK BEAUTYSTUDIO Nürnberg";

type PageMetaInput = {
    title: string;
    description: string;
    path?: string;
    keywords?: string[];
    noIndex?: boolean;
};

export function createPageMetadata({
    title,
    description,
    path = "",
    keywords,
    noIndex = false,
}: PageMetaInput): Metadata {
    const url = `${SITE_URL}${path}`;

    return {
        title,
        description,
        ...(keywords ? { keywords } : {}),
        ...(noIndex ? { robots: { index: false, follow: false } } : {}),
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            siteName: SITE_NAME,
            locale: "de_DE",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    };
}

export const rootMetadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "TK BEAUTYSTUDIO Nürnberg | Laser, Microneedling & Kosmetik",
        template: "%s",
    },
    description:
        "Premium Beauty Studio in Nürnberg: Dauerhafte Laserhaarentfernung mit Motus AX, Microneedling und kosmetische Behandlungen. Online Termin buchen.",
    keywords: [
        "Beauty Studio Nürnberg",
        "Laserhaarentfernung Nürnberg",
        "Microneedling Nürnberg",
        "Kosmetik Nürnberg",
        "TK BEAUTYSTUDIO",
    ],
    authors: [{ name: BUSINESS.name }],
    creator: BUSINESS.name,
    publisher: BUSINESS.name,
    alternates: {
        canonical: SITE_URL,
    },
    openGraph: {
        title: "TK BEAUTYSTUDIO Nürnberg | Laser, Microneedling & Kosmetik",
        description:
            "Premium Beauty Studio in Nürnberg: Motus AX Laserhaarentfernung, Microneedling & professionelle Kosmetik.",
        url: SITE_URL,
        siteName: SITE_NAME,
        locale: "de_DE",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "TK BEAUTYSTUDIO Nürnberg",
        description:
            "Laserhaarentfernung, Microneedling & Kosmetik in Nürnberg – jetzt Termin buchen.",
    },
};

export const pageMetadata = {
    home: createPageMetadata({
        title: "TK BEAUTYSTUDIO Nürnberg | Laser, Microneedling & Kosmetik",
        description:
            "Premium Beauty Studio in Nürnberg: Dauerhafte Laserhaarentfernung mit Motus AX, Microneedling und kosmetische Behandlungen. Jetzt Termin online buchen.",
        path: "/",
        keywords: [
            "Beauty Studio Nürnberg",
            "Laserhaarentfernung Nürnberg",
            "Microneedling Nürnberg",
            "Kosmetik Nürnberg",
        ],
    }),
    behandlungen: createPageMetadata({
        title: "Behandlungen | Laser, Microneedling & Kosmetik Nürnberg",
        description:
            "Alle Beauty-Behandlungen im Überblick: Motus AX Laserhaarentfernung, Microneedling und professionelle Gesichtsbehandlungen bei TK BEAUTYSTUDIO in Nürnberg.",
        path: "/behandlungen",
        keywords: ["Behandlungen Nürnberg", "Beauty Behandlungen Nürnberg"],
    }),
    motusAx: createPageMetadata({
        title: "Motus AX Laserhaarentfernung Nürnberg | TK BEAUTYSTUDIO",
        description:
            "Dauerhafte Haarentfernung mit Motus AX Alexandrit-Laser in Nürnberg. Sanfte Moveo-Technologie, faire Preise pro Körperzone und kostenlose Beratung.",
        path: "/behandlungen/motus-ax",
        keywords: [
            "Laserhaarentfernung Nürnberg",
            "Motus AX Nürnberg",
            "Alexandrit Laser Nürnberg",
        ],
    }),
    microneedling: createPageMetadata({
        title: "Microneedling Nürnberg | TK BEAUTYSTUDIO",
        description:
            "Microneedling in Nürnberg für strafferes, ebenmäßigeres Hautbild. Professionelle Hauterneuerung mit Wirkstoffen in der Krugstraße 39.",
        path: "/behandlungen/microneedling",
        keywords: ["Microneedling Nürnberg", "Hauterneuerung Nürnberg", "Anti-Aging Nürnberg"],
    }),
    kosmetik: createPageMetadata({
        title: "Kosmetische Behandlungen Nürnberg | TK BEAUTYSTUDIO",
        description:
            "Professionelle Gesichtsbehandlungen in Nürnberg: BIOPHYTO, BIO WHITE, Intim- und Achsel-Peeling. Individuelle Hautpflege bei TK BEAUTYSTUDIO.",
        path: "/behandlungen/kosmetische-behandlungen",
        keywords: ["Gesichtsbehandlung Nürnberg", "Kosmetik Nürnberg", "BIOPHYTO Nürnberg"],
    }),
    preise: createPageMetadata({
        title: "Preise | Laserhaarentfernung, Microneedling & Kosmetik",
        description:
            "Transparente Preisliste für Laserhaarentfernung (Motus AX), Microneedling und kosmetische Behandlungen bei TK BEAUTYSTUDIO in Nürnberg.",
        path: "/preise",
        keywords: ["Preise Laserhaarentfernung Nürnberg", "Beauty Preise Nürnberg"],
    }),
    termin: createPageMetadata({
        title: "Termin buchen | TK BEAUTYSTUDIO Nürnberg",
        description:
            "Buchen Sie Ihren Termin für Laserhaarentfernung, Microneedling oder kosmetische Behandlungen online bei TK BEAUTYSTUDIO in Nürnberg.",
        path: "/termin",
        keywords: ["Termin buchen Nürnberg", "Online Termin Beauty Nürnberg"],
    }),
    ueberUns: createPageMetadata({
        title: "Über uns | TK BEAUTYSTUDIO Nürnberg",
        description:
            "Lernen Sie TK BEAUTYSTUDIO kennen – Ihr Premium Beauty Studio in Nürnberg mit persönlicher Beratung und modernster Behandlungstechnologie.",
        path: "/ueber-uns",
    }),
    kontakt: createPageMetadata({
        title: "Kontakt & Anfahrt | TK BEAUTYSTUDIO Nürnberg",
        description:
            "TK BEAUTYSTUDIO, Krugstraße 39, 90419 Nürnberg. Telefon, E-Mail, Öffnungszeiten Mo–Sa 9–20 Uhr und Routenplaner.",
        path: "/kontakt",
        keywords: ["Kontakt Beauty Studio Nürnberg", "Anfahrt Krugstraße Nürnberg"],
    }),
    impressum: createPageMetadata({
        title: "Impressum | TK BEAUTYSTUDIO Nürnberg",
        description: "Impressum und Anbieterkennzeichnung von TK BEAUTYSTUDIO in Nürnberg.",
        path: "/impressum",
        noIndex: true,
    }),
    datenschutz: createPageMetadata({
        title: "Datenschutz | TK BEAUTYSTUDIO Nürnberg",
        description: "Datenschutzerklärung von TK BEAUTYSTUDIO – Informationen zur Verarbeitung personenbezogener Daten.",
        path: "/datenschutz",
        noIndex: true,
    }),
    cookies: createPageMetadata({
        title: "Cookie-Richtlinie | TK BEAUTYSTUDIO Nürnberg",
        description: "Informationen zu Cookies und Tracking-Technologien auf der Website von TK BEAUTYSTUDIO.",
        path: "/cookies",
        noIndex: true,
    }),
} as const;
