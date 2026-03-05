import type { NextConfig } from "next";

// ============================================================
// Security Headers – Best Practices für Production Deployments
// CSP wird separat in src/proxy.ts über Nonces gesetzt.
// ============================================================
const securityHeaders = [
  // ── HTTP Strict Transport Security (HSTS) ──────────────────
  // Erzwingt HTTPS für alle zukünftigen Verbindungen.
  // max-age=63072000 = 2 Jahre, inkl. Subdomains + Preload-Liste.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },

  // ── Referrer Policy ────────────────────────────────────────
  // Entfernt den Referrer-Header komplett bei allen Anfragen.
  // Maximaler Datenschutz – keine Informationen an Dritte.
  {
    key: "Referrer-Policy",
    value: "no-referrer",
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
  // Nicht-CSP Security Headers für alle Routen anwenden
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

