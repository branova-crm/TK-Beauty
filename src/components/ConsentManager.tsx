"use client";

import { useEffect, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CookieBanner from "./CookieBanner";

export default function ConsentManager() {
    const [consent, setConsent] = useState<{ analytics: boolean } | null>(null);

    useEffect(() => {
        const savedConsent = localStorage.getItem("cookie-consent");
        if (savedConsent) {
            setConsent(JSON.parse(savedConsent));
        } else {
            setConsent({ analytics: false }); // Default to false
        }
    }, []);

    return (
        <>
            <CookieBanner />
            {consent?.analytics && <SpeedInsights />}
        </>
    );
}
