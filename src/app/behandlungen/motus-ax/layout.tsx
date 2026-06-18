import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Motus AX Laserhaarentfernung Nürnberg | TK BEAUTYSTUDIO",
    description:
        "Dauerhafte Haarentfernung mit Motus AX Alexandrit-Laser in Nürnberg. Sanfte Moveo-Technologie, faire Preise pro Körperzone und kostenlose Beratung bei TK BEAUTYSTUDIO.",
    keywords: [
        "Laserhaarentfernung Nürnberg",
        "Motus AX Nürnberg",
        "Alexandrit Laser Nürnberg",
        "dauerhafte Haarentfernung Nürnberg",
    ],
    openGraph: {
        title: "Motus AX Laserhaarentfernung Nürnberg",
        description:
            "Premium Laserhaarentfernung mit Motus AX (DEKA) in Nürnberg – komfortabel, effektiv und individuell.",
    },
};

export default function MotusAxLayout({ children }: { children: React.ReactNode }) {
    return children;
}
