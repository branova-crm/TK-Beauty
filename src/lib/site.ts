export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://tkbeautystudio.de";

export const BUSINESS = {
    name: "TK BEAUTYSTUDIO",
    street: "Krugstraße 39",
    city: "Nürnberg",
    postalCode: "90419",
    country: "DE",
    phone: "+49 15562 483435",
    phoneHref: "tel:+4915562483435",
    email: "tkbeauty@web.de",
    instagram: "https://www.instagram.com/tk_beauty_nuernberg/",
    geo: { latitude: 49.4521, longitude: 11.0767 },
} as const;

export const OPENING_HOURS = {
    label: "Mo – Sa: 9:00 – 20:00 Uhr",
    shortLabel: "Mo–Sa: 9:00–20:00",
    sunday: "Sonntag: Geschlossen",
} as const;

export const PHONE_FOOTNOTE =
    "* Alternativ können Sie Ihren Termin jederzeit online buchen.";
