import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kosmetische Behandlungen Nürnberg | TK BEAUTYSTUDIO",
    description:
        "Professionelle Gesichtsbehandlungen in Nürnberg: BIOPHYTO, BIO WHITE, Intim- und Achsel-Peeling. Individuelle Hautpflege bei TK BEAUTYSTUDIO.",
    keywords: [
        "Gesichtsbehandlung Nürnberg",
        "Kosmetik Nürnberg",
        "BIOPHYTO Nürnberg",
        "BIO WHITE Nürnberg",
    ],
    openGraph: {
        title: "Kosmetische Behandlungen Nürnberg",
        description: "Individuelle kosmetische Pflegebehandlungen für strahlende Haut in Nürnberg.",
    },
};

export default function KosmetikLayout({ children }: { children: React.ReactNode }) {
    return children;
}
