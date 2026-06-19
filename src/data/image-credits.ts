export type ImageCredit = {
    label: string;
    author: string;
};

export const IMAGE_CREDITS_INTRO =
    "Ausgewählte Stockfotos stammen von Magnific.com (Freepik Company, S.L.U.) und wurden im Rahmen gültiger Premium-Lizenzen erworben.";

export const imageCredits: readonly ImageCredit[] = [
    { label: "Porträt mit Pflanze", author: "Freepik" },
    { label: "Kosmetik-Porträt mit Blatt", author: "partystock" },
    { label: "Körperaufnahme", author: "repinanatoly" },
    { label: "Drei Frauen, beige Hintergrund", author: "lookstudio" },
    { label: "Drei Frauen im Studio", author: "lookstudio" },
] as const;
