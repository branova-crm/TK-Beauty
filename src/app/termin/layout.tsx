import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Termin buchen | TK BEAUTYSTUDIO Nürnberg",
    description:
        "Buchen Sie Ihren Termin für Laserhaarentfernung, Microneedling oder kosmetische Behandlungen online bei TK BEAUTYSTUDIO in Nürnberg.",
    openGraph: {
        title: "Termin buchen | TK BEAUTYSTUDIO Nürnberg",
        description:
            "Online-Terminbuchung für Beauty-Behandlungen in Nürnberg – schnell, unkompliziert und jederzeit verfügbar.",
    },
};

export default function TerminLayout({ children }: { children: React.ReactNode }) {
    return children;
}
