export type SiteImage = {
    src: string;
    alt: string;
};

const image = (filename: string, alt: string): SiteImage => ({
    src: `/images/${filename}`,
    alt,
});

export const siteImages = {
    logo: image(
        "tk-beautystudio-logo-nuernberg.png",
        "TK BEAUTYSTUDIO Logo – Beauty Studio in Nürnberg",
    ),
    favicon: "/images/tk-beautystudio-favicon.png",
    hero: image(
        "beauty-studio-nuernberg-hero.jpg",
        "TK BEAUTYSTUDIO Nürnberg – Premium Beauty Behandlungen und Laserhaarentfernung",
    ),
    laserMotusHighlight: image(
        "laserhaarentfernung-motus-ax-nuernberg.jpg",
        "Motus AX Laserhaarentfernung in Nürnberg – Alexandrit-Laser Technologie",
    ),
    laserMotus: image(
        "dauerhafte-haarentfernung-laser-nuernberg.jpg",
        "Dauerhafte Laserhaarentfernung mit Motus AX in Nürnberg",
    ),
    microneedling: image(
        "microneedling-hautverfeinerung-nuernberg.png",
        "Microneedling in Nürnberg für strafferes und ebenmäßigeres Hautbild",
    ),
    kosmetik: image(
        "kosmetische-gesichtsbehandlung-nuernberg.png",
        "Kosmetische Gesichtsbehandlung in Nürnberg bei TK BEAUTYSTUDIO",
    ),
    microneedlingBeispiel: image(
        "microneedling-hautverfeinerung-nuernberg.png",
        "Beispielbild Microneedling – sichtbar verfeinerte Haut in Nürnberg (KI-generiert)",
    ),
    kontakt: image(
        "kontakt-beauty-studio-nuernberg.jpg",
        "TK BEAUTYSTUDIO Nürnberg – Studioatmosphäre in der Krugstraße 39",
    ),
    preise: image(
        "preisliste-beauty-behandlungen-nuernberg.jpg",
        "Preisliste für Laserhaarentfernung, Microneedling und Kosmetik in Nürnberg",
    ),
    studioInnen: image(
        "tk-beautystudio-studio-innen-nuernberg.png",
        "TK BEAUTYSTUDIO Nürnberg – Studioansicht",
    ),
    ueberUns: image(
        "beauty-studio-atmosphaere-nuernberg.png",
        "TK BEAUTYSTUDIO Nürnberg – Beauty Studio Atmosphäre",
    ),
    instagram: [
        image(
            "instagram-beauty-studio-nuernberg-1.png",
            "Instagram Einblick – Beauty Behandlungen bei TK BEAUTYSTUDIO Nürnberg",
        ),
        image(
            "instagram-beauty-studio-nuernberg-2.png",
            "Instagram Einblick – Kosmetik und Pflege in Nürnberg",
        ),
        image(
            "instagram-beauty-studio-nuernberg-3.png",
            "Instagram Einblick – Laserhaarentfernung Nürnberg",
        ),
        image(
            "instagram-beauty-studio-nuernberg-4.png",
            "Instagram Einblick – Microneedling und Hautpflege Nürnberg",
        ),
        image(
            "instagram-beauty-studio-nuernberg-5.png",
            "Instagram Einblick – TK BEAUTYSTUDIO Nürnberg",
        ),
        image(
            "beauty-studio-atmosphaere-nuernberg.png",
            "Instagram Einblick – Beauty Studio Atmosphäre in Nürnberg",
        ),
    ],
} as const;

export const serviceImages = [
    {
        ...siteImages.laserMotus,
        title: "Dauerhafte Haarentfernung (Motus AX)",
        subtitle: "Dauerhaft glatt",
        description: "Komfortable Laserbehandlung mit Premium Alexandrit-Technologie.",
        href: "/behandlungen/motus-ax",
    },
    {
        ...siteImages.microneedling,
        title: "Microneedling",
        subtitle: "Hauterneuerung",
        description: "Für sichtbar verfeinertes Hautbild und frischen Glow.",
        href: "/behandlungen/microneedling",
    },
    {
        ...siteImages.kosmetik,
        title: "Kosmetische Behandlungen",
        subtitle: "Individuelle Pflege",
        description: "Individuell abgestimmt – für gepflegte, strahlende Haut.",
        href: "/behandlungen/kosmetische-behandlungen",
    },
] as const;
