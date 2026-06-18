import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Microneedling Nürnberg | TK BEAUTYSTUDIO",
    description:
        "Microneedling in Nürnberg für strafferes, ebenmäßigeres Hautbild. Professionelle Hauterneuerung mit Wirkstoffen bei TK BEAUTYSTUDIO in der Krugstraße 39.",
    keywords: ["Microneedling Nürnberg", "Hauterneuerung Nürnberg", "Anti-Aging Nürnberg"],
    openGraph: {
        title: "Microneedling Nürnberg",
        description: "Schonende Microneedling-Behandlung für sichtbar verfeinertes Hautbild in Nürnberg.",
    },
};

export default function MicroneedlingLayout({ children }: { children: React.ReactNode }) {
    return children;
}
