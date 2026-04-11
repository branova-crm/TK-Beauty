"use client";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

/**
 * Wrapper for Vercel tools. 
 * Blocking is handled by the CCM19 script in layout.tsx.
 */
export default function ConsentManager() {
    return (
        <>
            <SpeedInsights />
            <Analytics />
        </>
    );
}
