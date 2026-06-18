export type MotusPriceItem = {
    name: string;
    price: string;
    duration?: string;
    originalPrice?: string;
    /** Körperzone für die gruppierte Darstellung (z. B. "Gesicht", "Körper"). */
    group?: string;
};

export const motusLaserPromoDeadline = "30.06.2026" as const;

export type LaserPromoPerk = {
    badge: string;
    title: string;
    description: string;
};

export type LaserPromoDeal = {
    name: string;
    price: string;
    originalPrice: string;
};

export type LaserPromoContent = {
    audience: "Frauen" | "Männer";
    perks: LaserPromoPerk[];
    deals: LaserPromoDeal[];
};

const sharedLaserPerks: LaserPromoPerk[] = [
    {
        badge: "Neukunde",
        title: "30 % zum Erstbesuch",
        description: "Exklusiv auf eine Zone oder ein Paket Ihrer Wahl",
    },
    {
        badge: "Vorteilspaket",
        title: "20 % bei 5 Behandlungen",
        description: "Ratenzahlung möglich – flexibel planbar",
    },
    {
        badge: "Inklusive",
        title: "Beratung kostenlos",
        description: "Persönlich, unverbindlich und individuell",
    },
];

export const motusFrauenPromo: LaserPromoContent = {
    audience: "Frauen",
    perks: sharedLaserPerks,
    deals: [
        { name: "Achseln", price: "39 €", originalPrice: "75 €" },
        { name: "Achseln + Bikini + Intim", price: "99 €", originalPrice: "199 €" },
    ],
};

export const motusMaennerPromo: LaserPromoContent = {
    audience: "Männer",
    perks: sharedLaserPerks,
    deals: [{ name: "Achseln + Intim komplett", price: "149 €", originalPrice: "299 €" }],
};

/** @deprecated Nur für Abwärtskompatibilität – nutze motusFrauenPromo */
export const motusIntroNotes = [
    "Exklusiv zum Erstbesuch: 30 % auf eine Zone oder ein Paket Ihrer Wahl",
    "Vorteilspaket: 5 Behandlungen mit 20 % Rabatt (Ratenzahlung möglich)",
    "Beratung kostenlos",
    "Aktion bis 30.06.2026: Achseln 39 € statt 75 € | Achseln + Bikini + Intim 99 € statt 199 €",
] as const;

/** @deprecated Nur für Abwärtskompatibilität – nutze motusMaennerPromo */
export const motusMaennerIntroNotes = [
    "Exklusiv zum Erstbesuch: 30 % auf eine Zone oder ein Paket Ihrer Wahl",
    "Vorteilspaket: 5 Behandlungen mit 20 % Rabatt (Ratenzahlung möglich)",
    "Beratung kostenlos",
    "Aktion bis 30.06.2026: Achseln + Intim komplett 149 € statt 299 €",
] as const;

export const motusFrauenEinzel: MotusPriceItem[] = [
    { name: "Oberlippe", price: "45 €", duration: "30 Min.", group: "Gesicht" },
    { name: "Kinn", price: "49 €", duration: "30 Min.", group: "Gesicht" },
    { name: "Wangen", price: "49 €", duration: "30 Min.", group: "Gesicht" },
    { name: "Gesicht 3 Zonen", price: "119 €", duration: "45 Min.", group: "Gesicht" },
    { name: "Gesicht komplett", price: "149 €", duration: "1 Std.", group: "Gesicht" },
    { name: "Hals", price: "65 €", duration: "30 Min.", group: "Gesicht" },
    { name: "Gesicht komplett inkl. Hals", price: "175 €", duration: "1 Std. 15 Min.", group: "Gesicht" },
    { name: "Dekolleté", price: "69 €", duration: "30 Min.", group: "Körper" },
    { name: "Brustwarzenrand", price: "39 €", duration: "30 Min.", group: "Körper" },
    { name: "Brust komplett", price: "89 €", duration: "45 Min.", group: "Körper" },
    { name: "Achseln", price: "75 €", duration: "30 Min.", group: "Körper" },
    { name: "Bikini", price: "75 €", duration: "45 Min.", group: "Körper" },
    { name: "Schambein", price: "89 €", duration: "45 Min.", group: "Körper" },
    { name: "Bikini + Intim", price: "159 €", duration: "1 Std.", group: "Körper" },
    { name: "Pofalte", price: "49 €", duration: "30 Min.", group: "Körper" },
    { name: "Gesäß inkl. Pofalte", price: "129 €", duration: "45 Min.", group: "Körper" },
    { name: "Bikini + Intim inkl. Pofalte", price: "169 €", duration: "1 Std.", group: "Körper" },
    { name: "Bauchlinie", price: "49 €", duration: "30 Min.", group: "Körper" },
    { name: "Bauch", price: "99 €", duration: "45 Min.", group: "Körper" },
    { name: "Unterarme", price: "99 €", duration: "45 Min.", group: "Arme & Beine" },
    { name: "Oberarme", price: "99 €", duration: "45 Min.", group: "Arme & Beine" },
    { name: "Arme komplett inkl. Hände", price: "179 €", duration: "1 Std. 15 Min.", group: "Arme & Beine" },
    { name: "Unterschenkel inkl. Knie", price: "149 €", duration: "1 Std.", group: "Arme & Beine" },
    { name: "Oberschenkel inkl. Knie", price: "159 €", duration: "1 Std.", group: "Arme & Beine" },
    { name: "Rückseite der Oberschenkel", price: "99 €", duration: "45 Min.", group: "Arme & Beine" },
    { name: "Füße inkl. Zehen", price: "39 €", duration: "30 Min.", group: "Arme & Beine" },
    { name: "Beine komplett inkl. Füße", price: "249 €", duration: "1 Std. 45 Min.", group: "Arme & Beine" },
    { name: "Unterer Rücken", price: "79 €", duration: "45 Min.", group: "Rücken" },
    { name: "Oberer Rücken", price: "79 €", duration: "45 Min.", group: "Rücken" },
    { name: "Rücken komplett", price: "129 €", duration: "1 Std. 15 Min.", group: "Rücken" },
    { name: "Schultern", price: "69 €", duration: "45 Min.", group: "Rücken" },
];

export const motusFrauenKombi: MotusPriceItem[] = [
    { name: "1. Oberlippe + Kinn", price: "79 €", originalPrice: "94 €", duration: "30 Min." },
    { name: "2. Achseln + Bikini", price: "135 €", originalPrice: "150 €", duration: "45 Min." },
    { name: "3. Achseln + Bikini + Unterschenkel", price: "255 €", originalPrice: "299 €", duration: "1 Std. 15 Min." },
    { name: "4. Achseln + Bikini + Beine komplett", price: "319 €", originalPrice: "399 €", duration: "1 Std. 45 Min." },
    { name: "5. Achseln + Bikini + Beine komplett + Arme komplett", price: "429 €", originalPrice: "578 €", duration: "2 Std. 45 Min." },
    { name: "6. Achseln + Beine komplett", price: "279 €", originalPrice: "324 €", duration: "1 Std. 45 Min." },
    { name: "7. Achseln + Beine komplett + Arme komplett", price: "399 €", originalPrice: "503 €", duration: "2 Std. 15 Min." },
    { name: "8. Achseln + Bikini + Intim", price: "199 €", originalPrice: "234 €", duration: "1 Std." },
    { name: "9. Achseln + Bikini + Intim + Unterschenkel", price: "299 €", originalPrice: "383 €", duration: "1 Std. 15 Min." },
    { name: "10. Achseln + Bikini + Intim + Beine komplett", price: "379 €", originalPrice: "483 €", duration: "2 Std. 15 Min." },
    { name: "11. Achseln + Bikini + Intim + Beine komplett + Gesäß", price: "459 €", originalPrice: "612 €", duration: "2 Std. 15 Min." },
    { name: "12. Achseln + Bikini + Intim + Beine komplett + Arme komplett", price: "495 €", originalPrice: "662 €", duration: "2 Std. 45 Min." },
    { name: "13. Bikini + Intim + Beine komplett", price: "319 €", originalPrice: "408 €", duration: "1 Std. 45 Min." },
    { name: "14. Bikini + Intim + Beine komplett + Arme komplett", price: "439 €", originalPrice: "587 €", duration: "2 Std. 45 Min." },
    { name: "15. Bikini + Intim + Gesäß + Beine komplett", price: "399 €", originalPrice: "537 €", duration: "2 Std. 15 Min." },
    { name: "16. Bikini + Gesäß + Oberschenkel inkl. Knie", price: "309 €", originalPrice: "363 €", duration: "2 Std." },
    { name: "17. Bauch + Brust komplett", price: "159 €", originalPrice: "188 €", duration: "1 Std. 15 Min." },
    {
        name: "18. Ganzer Körper (Kleinpaket)",
        price: "599 €",
        originalPrice: "830 €",
        duration: "3 Std.",
    },
    { name: "19. Ganzer Körper", price: "699 €", duration: "3 Std. 30 Min." },
];

export const motusMaennerEinzel: MotusPriceItem[] = [
    { name: "Koteletten", price: "49 €", duration: "30 Min.", group: "Gesicht" },
    { name: "Wangen", price: "49 €", duration: "30 Min.", group: "Gesicht" },
    { name: "Bart Kontur", price: "89 €", duration: "45 Min.", group: "Gesicht" },
    { name: "Hals", price: "75 €", duration: "30 Min.", group: "Gesicht" },
    { name: "Bart komplett inkl. Hals", price: "149 €", duration: "45 Min.", group: "Gesicht" },
    { name: "Augenbrauen", price: "49 €", duration: "30 Min.", group: "Gesicht" },
    { name: "Gesicht komplett", price: "179 €", duration: "1 Std.", group: "Gesicht" },
    { name: "Achseln", price: "85 €", duration: "30 Min.", group: "Körper" },
    { name: "Brust", price: "139 €", duration: "45 Min.", group: "Körper" },
    { name: "Brustwarzenhof", price: "59 €", duration: "30 Min.", group: "Körper" },
    { name: "Bauchlinie", price: "59 €", duration: "30 Min.", group: "Körper" },
    { name: "Bauch", price: "115 €", duration: "45 Min.", group: "Körper" },
    { name: "Nacken", price: "59 €", duration: "45 Min.", group: "Körper" },
    { name: "Gesäß", price: "135 €", duration: "45 Min.", group: "Körper" },
    { name: "Pofalte", price: "79 €", duration: "30 Min.", group: "Körper" },
    { name: "Gesäß + Pofalte", price: "169 €", duration: "45 Min.", group: "Körper" },
    { name: "Bikini Zone", price: "119 €", duration: "45 Min.", group: "Körper" },
    { name: "Intim komplett inkl. Pofalte", price: "255 €", duration: "1 Std.", group: "Körper" },
    { name: "Unterarme", price: "109 €", duration: "45 Min.", group: "Arme & Beine" },
    { name: "Oberarme", price: "119 €", duration: "45 Min.", group: "Arme & Beine" },
    { name: "Finger", price: "35 €", duration: "30 Min.", group: "Arme & Beine" },
    { name: "Hände + Finger", price: "59 €", duration: "30 Min.", group: "Arme & Beine" },
    { name: "Arme komplett inkl. Hände", price: "199 €", duration: "1 Std. 15 Min.", group: "Arme & Beine" },
    { name: "Unterschenkel inkl. Knie", price: "159 €", duration: "1 Std.", group: "Arme & Beine" },
    { name: "Oberschenkel inkl. Knie", price: "169 €", duration: "1 Std.", group: "Arme & Beine" },
    { name: "Füße + Zehen", price: "59 €", duration: "30 Min.", group: "Arme & Beine" },
    { name: "Beine komplett inkl. Füße", price: "289 €", duration: "1 Std. 45 Min.", group: "Arme & Beine" },
    { name: "Schultern", price: "99 €", duration: "45 Min.", group: "Rücken" },
    { name: "Unterer Rücken", price: "129 €", duration: "45 Min.", group: "Rücken" },
    { name: "Oberer Rücken", price: "129 €", duration: "45 Min.", group: "Rücken" },
    { name: "Rücken komplett", price: "199 €", duration: "1 Std. 15 Min.", group: "Rücken" },
];

export const motusMaennerKombi: MotusPriceItem[] = [
    { name: "1. Achseln + Brust", price: "199 €", originalPrice: "224 €", duration: "45 Min." },
    { name: "2. Achsel + Rücken komplett", price: "239 €", originalPrice: "284 €", duration: "1 Std. 15 Min." },
    { name: "3. Achseln + Brust + Rücken komplett", price: "359 €", originalPrice: "423 €", duration: "1 Std. 45 Min." },
    { name: "4. Achseln + Nacken + Rücken komplett", price: "269 €", originalPrice: "343 €", duration: "1 Std. 45 Min." },
    { name: "5. Achseln + Nacken + Hals + Brust + Schultern", price: "339 €", originalPrice: "457 €", duration: "1 Std. 45 Min." },
    { name: "6. Brust + Bauch", price: "239 €", originalPrice: "254 €", duration: "1 Std. 15 Min." },
    { name: "7. Achseln + Brust + Bauch + Beine komplett", price: "469 €", originalPrice: "628 €", duration: "2 Std. 45 Min." },
    { name: "8. Achseln + Brust + Bauch + Rücken komplett", price: "429 €", originalPrice: "538 €", duration: "2 Std. 15 Min." },
    { name: "9. Achseln + Brust + Rücken komplett + Beine komplett", price: "569 €", originalPrice: "712 €", duration: "2 Std. 45 Min." },
    { name: "10. Brust + Bauch + Rücken komplett", price: "379 €", originalPrice: "453 €", duration: "2 Std. 15 Min." },
    { name: "11. Achseln + Intim komplett inkl. Pofalte", price: "299 €", originalPrice: "340 €", duration: "1 Std." },
    { name: "12. Achseln + Intim komplett inkl. Pofalte + Beine komplett", price: "529 €", originalPrice: "629 €", duration: "2 Std. 30 Min." },
    { name: "13. Achseln + Intim komplett inkl. Pofalte + Arme komplett", price: "449 €", originalPrice: "539 €", duration: "1 Std. 45 Min." },
    { name: "14. Achseln + Intim komplett inkl. Pofalte + Beine komplett + Arme komplett", price: "659 €", originalPrice: "828 €", duration: "2 Std. 45 Min." },
    { name: "15. Achseln + Bauch + Intim komplett inkl. Pofalte", price: "379 €", originalPrice: "455 €", duration: "1 Std. 30 Min." },
    { name: "16. Achseln + Brust + Intim komplett inkl. Pofalte", price: "399 €", originalPrice: "479 €", duration: "1 Std. 30 Min." },
    { name: "17. Achseln + Brust + Bauch + Intim komplett inkl. Pofalte", price: "469 €", originalPrice: "594 €", duration: "2 Std." },
    { name: "18. Ganzer Körper", price: "899 €", duration: "4 Std." },
];
