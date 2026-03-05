import type { NextConfig } from "next";

// ============================================================
// Content Security Policy (CSP)
// Schützt vor XSS, Clickjacking und ungewolltem Code-Loading.
// Jede Direktive definiert, woher bestimmte Ressourcen geladen
// werden dürfen.
// ============================================================
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://maps.googleapis.com https://maps.gstatic.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self' https:;
  frame-src https://www.google.com https://maps.google.com;
  connect-src 'self' https://maps.googleapis.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`;

// ============================================================
// Security Headers – Best Practices für Production Deployments
// ============================================================
const securityHeaders = [
  // ── Content Security Policy ────────────────────────────────
  // Definiert erlaubte Quellen für Scripts, Styles, Bilder etc.
  // Verhindert XSS und ungewolltes Laden externer Ressourcen.
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },

  // ── HTTP Strict Transport Security (HSTS) ──────────────────
  // Erzwingt HTTPS für alle zukünftigen Verbindungen.
  // max-age=63072000 = 2 Jahre, inkl. Subdomains + Preload-Liste.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },

  // ── Referrer Policy ────────────────────────────────────────
  // Sendet die volle Referrer-URL nur bei gleicher Origin.
  // Bei Cross-Origin-Requests wird nur die Origin gesendet.
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },

  // ── X-Frame-Options ────────────────────────────────────────
  // Verhindert, dass die Seite in einem <iframe> eingebettet
  // wird (Schutz vor Clickjacking). DENY = komplett verboten.
  {
    key: "X-Frame-Options",
    value: "DENY",
  },

  // ── X-Content-Type-Options ─────────────────────────────────
  // Verhindert MIME-Type-Sniffing im Browser.
  // Der Browser vertraut dem Content-Type Header und rät nicht.
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },

  // ── X-DNS-Prefetch-Control ─────────────────────────────────
  // Deaktiviert DNS-Prefetching für externe Domains.
  // Verhindert ungewollte DNS-Anfragen und schützt die Privatsphäre.
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },

  // ── Permissions Policy ─────────────────────────────────────
  // Beschränkt Browser-Features wie Kamera, Mikrofon, Geolocation.
  // Nur explizit erlaubte Features sind nutzbar.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },

  // ── X-XSS-Protection ──────────────────────────────────────
  // Legacy-Header für ältere Browser. Aktiviert den eingebauten
  // XSS-Filter und blockiert die Seite bei erkanntem Angriff.
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
];

const nextConfig: NextConfig = {
  // Security Headers für alle Routen anwenden
  async headers() {
    return [
      {
        // Pattern: Gilt für ALLE Routen (inkl. API, _next, etc.)
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
