import { BUSINESS, OPENING_HOURS, SITE_URL } from "@/lib/site";

export type FaqItem = { question: string; answer: string };

export function buildFaqPageSchema(faqs: readonly FaqItem[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };
}

export function buildLocalBusinessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "BeautySalon",
        name: BUSINESS.name,
        image: `${SITE_URL}/images/BEAUTYSTUDIO_26.png`,
        url: SITE_URL,
        telephone: BUSINESS.phone,
        email: BUSINESS.email,
        address: {
            "@type": "PostalAddress",
            streetAddress: BUSINESS.street,
            addressLocality: BUSINESS.city,
            postalCode: BUSINESS.postalCode,
            addressCountry: BUSINESS.country,
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: BUSINESS.geo.latitude,
            longitude: BUSINESS.geo.longitude,
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "09:00",
                closes: "20:00",
            },
        ],
        priceRange: "€€",
        description: `Premium Beauty Studio in ${BUSINESS.city} – Laserhaarentfernung, Microneedling und kosmetische Behandlungen.`,
    };
}

export function buildServiceSchema(name: string, description: string, url: string) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        provider: {
            "@type": "BeautySalon",
            name: BUSINESS.name,
            address: {
                "@type": "PostalAddress",
                streetAddress: BUSINESS.street,
                addressLocality: BUSINESS.city,
                postalCode: BUSINESS.postalCode,
                addressCountry: BUSINESS.country,
            },
        },
        areaServed: {
            "@type": "City",
            name: BUSINESS.city,
        },
        url: `${SITE_URL}${url}`,
    };
}

export function buildBreadcrumbSchema(items: { name: string; path: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${SITE_URL}${item.path}`,
        })),
    };
}

export function buildTreatmentPageSchemas(options: {
    serviceName: string;
    serviceDescription: string;
    path: string;
    breadcrumbs: { name: string; path: string }[];
    faqs: readonly FaqItem[];
}) {
    return [
        buildLocalBusinessSchema(),
        buildServiceSchema(options.serviceName, options.serviceDescription, options.path),
        buildBreadcrumbSchema(options.breadcrumbs),
        buildFaqPageSchema(options.faqs),
    ];
}
