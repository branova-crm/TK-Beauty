import type { NextConfig } from "next";

// ============================================================
// Content Security Policy (CSP)
// Schützt vor XSS, Clickjacking und ungewolltem Code-Loading.
// Jede Direktive definiert, woher bestimmte Ressourcen geladen
// werden dürfen.
//
// Hinweis: Da die Seiten statisch generiert werden (SSG),
// können keine Nonces verwendet werden. 'unsafe-inline' ist
// für script-src und style-src notwendig, damit Next.js und
// framer-motion korrekt funktionieren.
// ============================================================
const cspHeader = `
  default-src 'none';
  script-src 'self' 'unsafe-inline' https://maps.googleapis.com https://maps.gstatic.com https://va.vercel-scripts.com https://cloud.ccm19.de;
  style-src 'self' 'unsafe-inline' https://cloud.ccm19.de;
  img-src 'self' data: https:;
  font-src 'self' https:;
  frame-src https://www.google.com https://maps.google.com https://cloud.ccm19.de;
  connect-src 'self' https://maps.googleapis.com https://vitals.vercel-insights.com https://va.vercel-scripts.com https://cloud.ccm19.de;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  manifest-src 'self';
  upgrade-insecure-requests;
`;

// ============================================================
// Security Headers – Best Practices für Production Deployments
// ============================================================
const securityHeaders = [
  // ── Content Security Policy ────────────────────────────────
  {
    key: "Content-Security-Policy",
    value: cspHeader.replace(/\s{2,}/g, " ").trim(),
  },

  // ── HTTP Strict Transport Security (HSTS) ──────────────────
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },

  // ── Referrer Policy ────────────────────────────────────────
  {
    key: "Referrer-Policy",
    value: "no-referrer",
  },

  // ── X-Frame-Options ────────────────────────────────────────
  {
    key: "X-Frame-Options",
    value: "DENY",
  },

  // ── X-Content-Type-Options ─────────────────────────────────
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },

  // ── X-DNS-Prefetch-Control ─────────────────────────────────
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },

  // ── Permissions Policy ─────────────────────────────────────
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },

  // ── X-XSS-Protection ──────────────────────────────────────
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      // Cache static assets aggressively
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
