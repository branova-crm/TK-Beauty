import { NextRequest, NextResponse } from "next/server";

// ============================================================
// Nonce-basierte Content Security Policy (CSP)
// Generiert pro Request einen kryptografisch sicheren Nonce.
// Next.js hängt diesen Nonce automatisch an alle Scripts und
// Styles an – so entfällt 'unsafe-inline'.
// ============================================================
export function proxy(request: NextRequest) {
    const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
    const isDev = process.env.NODE_ENV === "development";

    // ── CSP-Direktiven ─────────────────────────────────────────
    // default-src 'none'   → Deny-by-default (alles explizit erlaubt)
    // script-src           → Nonce + strict-dynamic (eval nur in Dev)
    // style-src            → Nonce für Inline-Styles
    // img-src              → self + data: + https: (externe Bilder)
    // font-src             → self + Google Fonts etc.
    // frame-src            → Google Maps Embed
    // connect-src          → self + APIs (Maps, Vercel Analytics)
    // object-src           → komplett verboten
    // base-uri / form-action → nur self
    // frame-ancestors      → keine Einbettung erlaubt
    const cspHeader = `
    default-src 'none';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${isDev ? " 'unsafe-eval'" : ""};
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' data: https:;
    font-src 'self' https:;
    frame-src https://www.google.com https://maps.google.com;
    connect-src 'self' https://maps.googleapis.com https://vitals.vercel-insights.com https://va.vercel-scripts.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    manifest-src 'self';
    upgrade-insecure-requests;
  `;

    // Newlines und überflüssige Leerzeichen entfernen
    const contentSecurityPolicyHeaderValue = cspHeader
        .replace(/\s{2,}/g, " ")
        .trim();

    // Nonce als Custom-Header setzen (für Server Components)
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-nonce", nonce);
    requestHeaders.set(
        "Content-Security-Policy",
        contentSecurityPolicyHeaderValue
    );

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });

    response.headers.set(
        "Content-Security-Policy",
        contentSecurityPolicyHeaderValue
    );

    return response;
}

// ── Matcher ──────────────────────────────────────────────────
// Statische Assets und Prefetches brauchen keinen Nonce.
export const config = {
    matcher: [
        {
            source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
            missing: [
                { type: "header", key: "next-router-prefetch" },
                { type: "header", key: "purpose", value: "prefetch" },
            ],
        },
    ],
};
