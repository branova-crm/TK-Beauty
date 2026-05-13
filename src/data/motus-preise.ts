export type MotusPriceItem = {
    name: string;
    price: string;
    duration?: string;
};

export const motusIntroNotes = [
    "Exklusiv zum Erstbesuch: 30 % auf eine Zone oder ein Paket Ihrer Wahl",
    "Vorteilspaket: 5 Behandlungen mit 20 % Rabatt (Ratenzahlung möglich)",
    "Beratung kostenlos (30 Min.)",
] as const;

export const motusFrauenEinzel: MotusPriceItem[] = [
    { name: "Oberlippe", price: "45 €", duration: "10 Min." },
    { name: "Kinn", price: "49 €", duration: "10 Min." },
    { name: "Wangen", price: "49 €", duration: "15 Min." },
    { name: "Gesicht 3 Zonen", price: "109 €", duration: "35 Min." },
    { name: "Gesicht komplett", price: "139 €", duration: "45 Min." },
    { name: "Hals", price: "65 €", duration: "15 Min." },
    { name: "Gesicht komplett inkl. Hals", price: "175 €", duration: "1 Std." },
    { name: "Dekolleté", price: "55 €", duration: "20 Min." },
    { name: "Brustwarzenhof", price: "39 €", duration: "10 Min." },
    { name: "Brust komplett", price: "89 €", duration: "30 Min." },
    { name: "Achseln", price: "75 €", duration: "10 Min." },
    { name: "Bikini", price: "75 €", duration: "15 Min." },
    { name: "Bikini + Intim", price: "159 €", duration: "30 Min." },
    { name: "Pofalte", price: "49 €", duration: "10 Min." },
    { name: "Gesäß inkl. Pofalte", price: "129 €", duration: "30 Min." },
    { name: "Bikini + Intim inkl. Pofalte", price: "169 €", duration: "45 Min." },
    { name: "Bauch", price: "99 €", duration: "30 Min." },
    { name: "Bauchlinie", price: "39 €", duration: "10 Min." },
    { name: "Unterarme/Oberarme", price: "99 €", duration: "30 Min." },
    { name: "Arme komplett inkl. Hände", price: "179 €", duration: "1 Std." },
    { name: "Unterschenkel inkl. Knie", price: "149 €", duration: "45 Min." },
    { name: "Oberschenkel inkl. Knie", price: "159 €", duration: "45 Min." },
    { name: "Rückseite der Oberschenkel", price: "89 €", duration: "20 Min." },
    { name: "Füße inkl. Zehen", price: "39 €", duration: "20 Min." },
    { name: "Beine komplett inkl. Füße", price: "249 €", duration: "1 Std. 30 Min." },
    { name: "Unterer Rücken/Oberer Rücken", price: "79 €", duration: "30 Min." },
    { name: "Rücken komplett", price: "129 €", duration: "1 Std." },
    { name: "Schultern", price: "69 €", duration: "30 Min." },
];

export const motusFrauenKombi: MotusPriceItem[] = [
    { name: "1. Achseln + Bikini", price: "135 €", duration: "20 Min." },
    { name: "2. Achseln + Bikini + Unterschenkel", price: "255 €", duration: "1 Std." },
    { name: "3. Achseln + Bikini + Beine komplett", price: "319 €", duration: "1 Std. 30 Min." },
    {
        name: "4. Achseln + Bikini + Beine komplett + Arme komplett",
        price: "429 €",
        duration: "2 Std. 30 Min.",
    },
    { name: "5. Achseln + Beine komplett", price: "279 €", duration: "1 Std. 30 Min." },
    { name: "6. Achseln + Beine komplett + Arme komplett", price: "399 €", duration: "2 Std." },
    { name: "7. Achseln + Bikini + Intim", price: "199 €", duration: "45 Min." },
    { name: "8. Achseln + Bikini + Intim + Unterschenkel", price: "299 €", duration: "1 Std." },
    { name: "9. Achseln + Bikini + Intim + Beine komplett", price: "379 €", duration: "2 Std." },
    {
        name: "10. Achseln + Bikini + Intim + Beine komplett + Gesäß",
        price: "459 €",
        duration: "2 Std.",
    },
    {
        name: "11. Achseln + Bikini + Intim + Beine komplett + Arme komplett",
        price: "495 €",
        duration: "2 Std. 30 Min.",
    },
    {
        name: "12. Bikini + Intim + Beine komplett",
        price: "319 €",
        duration: "1 Std. 30 Min.",
    },
    {
        name: "13. Bikini + Intim + Beine komplett + Arme komplett",
        price: "439 €",
        duration: "2 Std.",
    },
    { name: "14. Oberlippe + Kinn", price: "79 €", duration: "20 Min." },
    {
        name: "15. Bikini + Intim + Beine komplett + Gesäß",
        price: "399 €",
        duration: "2 Std.",
    },
    { name: "16. Bauch + Brust komplett", price: "159 €", duration: "1 Std." },
    {
        name: "17. Ganzer Körper (Kleinpaket): Achseln + Bikini + Intim + Bauchlinie + Gesäß inkl. Pofalte + Beine komplett + Arme komplett",
        price: "599 €",
        duration: "2 Std. 45 Min.",
    },
    { name: "18. Ganzer Körper", price: "699 €", duration: "3 Std." },
];

export const motusMaennerEinzel: MotusPriceItem[] = [
    { name: "Koteletten", price: "49 €", duration: "15 Min." },
    { name: "Wangen", price: "49 €", duration: "15 Min." },
    { name: "Bart Kontur", price: "89 €", duration: "20 Min." },
    { name: "Hals", price: "75 €", duration: "15 Min." },
    { name: "Bart komplett inkl. Hals", price: "149 €", duration: "30 Min." },
    { name: "Augenbrauen", price: "49 €", duration: "15 Min." },
    { name: "Gesicht komplett", price: "179 €", duration: "45 Min." },
    { name: "Achseln", price: "85 €", duration: "10 Min." },
    { name: "Brust", price: "139 €", duration: "30 Min." },
    { name: "Brustwarzenhof", price: "59 €", duration: "15 Min." },
    { name: "Bauchlinie", price: "59 €", duration: "10 Min." },
    { name: "Bauch", price: "115 €", duration: "30 Min." },
    { name: "Nacken", price: "59 €", duration: "30 Min." },
    { name: "Schultern", price: "99 €", duration: "30 Min." },
    { name: "Unterer Rücken/Oberer Rücken", price: "109 €", duration: "30 Min." },
    { name: "Rücken komplett", price: "199 €", duration: "1 Std." },
    { name: "Gesäß", price: "135 €", duration: "30 Min." },
    { name: "Pofalte", price: "79 €", duration: "15 Min." },
    { name: "Gesäß + Pofalte", price: "169 €", duration: "30 Min." },
    { name: "Bikini Zone", price: "119 €", duration: "15 Min." },
    { name: "Intim komplett inkl. Pofalte", price: "255 €", duration: "45 Min." },
    { name: "Unterarme", price: "109 €", duration: "30 Min." },
    { name: "Oberarme", price: "119 €", duration: "30 Min." },
    { name: "Finger", price: "35 €", duration: "15 Min." },
    { name: "Hände + Finger", price: "59 €", duration: "20 Min." },
    { name: "Arme komplett inkl. Hände", price: "199 €", duration: "1 Std." },
    { name: "Unterschenkel inkl. Knie", price: "159 €", duration: "45 Min." },
    { name: "Oberschenkel inkl. Knie", price: "169 €", duration: "45 Min." },
    { name: "Füße + Zehen", price: "59 €", duration: "20 Min." },
    { name: "Beine komplett inkl. Füße", price: "289 €", duration: "1 Std. 30 Min." },
];

export const motusMaennerKombi: MotusPriceItem[] = [
    { name: "1. Achseln + Brust", price: "199 €", duration: "30 Min." },
    { name: "2. Achsel + Rücken komplett", price: "239 €", duration: "1 Std." },
    {
        name: "3. Achseln + Brust + Rücken komplett",
        price: "359 €",
        duration: "1 Std. 30 Min.",
    },
    {
        name: "4. Achseln + Nacken + Rücken komplett",
        price: "269 €",
        duration: "1 Std. 30 Min.",
    },
    {
        name: "5. Achseln + Nacken + Hals + Brust + Schultern",
        price: "339 €",
        duration: "1 Std. 30 Min.",
    },
    { name: "6. Brust + Bauch", price: "239 €", duration: "1 Std." },
    {
        name: "7. Achseln + Brust + Bauch + Beine komplett",
        price: "469 €",
        duration: "2 Std. 30 Min.",
    },
    {
        name: "8. Achseln + Brust + Bauch + Rücken komplett",
        price: "429 €",
        duration: "2 Std.",
    },
    {
        name: "9. Achseln + Brust + Rücken komplett + Beine komplett",
        price: "569 €",
        duration: "2 Std.",
    },
    {
        name: "10. Brust + Bauch + Rücken komplett",
        price: "379 €",
        duration: "2 Std.",
    },
    {
        name: "11. Achseln + Intim komplett inkl. Pofalte",
        price: "299 €",
        duration: "45 Min.",
    },
    {
        name: "12. Achseln + Intim komplett inkl. Pofalte + Beine komplett",
        price: "529 €",
        duration: "2 Std. 15 Min.",
    },
    {
        name: "13. Achseln + Intim komplett inkl. Pofalte + Arme komplett",
        price: "449 €",
        duration: "1 Std. 30 Min.",
    },
    {
        name: "14. Achseln + Intim komplett inkl. Pofalte + Beine komplett + Arme komplett",
        price: "659 €",
        duration: "2 Std. 30 Min.",
    },
    {
        name: "15. Achseln + Bauch + Intim komplett inkl. Pofalte",
        price: "379 €",
        duration: "1 Std. 15 Min.",
    },
    {
        name: "16. Achseln + Brust + Intim komplett inkl. Pofalte",
        price: "399 €",
        duration: "1 Std. 15 Min.",
    },
    {
        name: "17. Achseln + Brust + Bauch + Intim komplett inkl. Pofalte",
        price: "469 €",
        duration: "1 Std. 45 Min.",
    },
    { name: "18. Ganzer Körper", price: "899 €", duration: "3 Std. 30 Min." },
];
