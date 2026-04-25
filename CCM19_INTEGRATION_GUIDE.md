# Next.js 14+ / App Router x CCM19 Cookie Banner Integration Guide

**Zweck dieses Dokuments:** 
Wenn das Basis-Projekt (wie "TK Beauty" oder "LS Beauty Time") für einen neuen Kunden dupliziert wird, muss der CCM19 Cookie Banner eingerichtet werden. Diese Anleitung enthält alle notwendigen technischen Schritte für die korrekte Einbindung in das Next.js-System, damit sowohl die **Desktop-** als auch die fehleranfälligere **Mobile-Ansicht (Smartphones)** perfekt funktioniert und es keine Konflikte (z.B. unendliches "Hydration"-Laden oder doppelte Iframes) gibt.

---

### 1. Die Einbindung in Next.js (`src/app/layout.tsx`)
Der Banner muss am Ende des `<body>`-Tags geladen werden, **niemals als natives `<script>` ohne async/defer im `<head>`**, da sonst mobile Browser (Smartphones) das Rendern komplett unterbrechen und die Seite unendlich laden könnte.

✅ **Korrektes Setup im `RootLayout`:**
Nutze zwingend die Next.js-Komponente `<Script>` mit der Ladestrategie `afterInteractive`.
```tsx
import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        {/* ... Header, Content, Footer ... */}
        
        {/* WICHTIG: Das CCM19 Script IMMER als afterInteractive ans Ende packen */}
        <Script 
          id="ccm19-script"
          src="https://cloud.ccm19.de/app.js?apiKey=DEIN_API_KEY&domain=DEIN_DOMAIN_KEY&lang=de_DE" 
          strategy="afterInteractive" 
          referrerPolicy="origin"
        />
      </body>
    </html>
  );
}
```

---

### 2. Die Content Security Policy (CSP) in `next.config.ts` (CRITICAL für Mobile)
Wenn die Webseite lokal (`npm run dev`) funktioniert, aber auf dem Handy über die echte Domain der Banner (*ohne Fehlermeldung*) gar nicht auftaucht, blockiert Next.js die CCM19-Server wegen **fehlenden Sicherheits-Freigaben**.

✅ Füge `https://cloud.ccm19.de` in die **CSP-Header der `next.config.ts`** in folgende Direktiven ein:
- `script-src`
- `style-src`
- `img-src`
- `frame-src`
- `connect-src`

**Beispiel:**
```typescript
const cspHeader = `
  default-src 'none';
  script-src 'self' 'unsafe-inline' https://maps.googleapis.com https://cloud.ccm19.de;
  style-src 'self' 'unsafe-inline' https://cloud.ccm19.de;
  connect-src 'self' https://cloud.ccm19.de;
  /* ... weitere ... */
`;
```

---

### 3. Z-Index und Mobiles Layout-Fix CSS (`src/app/globals.css`)
Vermeide unbedingt aggressive `display: block !important` Hacks auf internen CCM19-IDs (wie `#ccmlayer`), da der Banner sonst auf Smartphones einfriert oder Klicks blockiert! 

✅ **Der saubere und sichere CSS-Code für das CCM19 Overlay:**
```css
/* Fix z-index for the main app container only */
#ccm19-app {
  z-index: 2147483647 !important;
}

/* Premium Styling for the Modal (Anpassbar je Design!) */
.ccm19-modal-content, 
.ccm19-popup {
  background: rgba(250, 248, 245, 0.98) !important;
  backdrop-filter: blur(20px) !important;
  border-radius: 32px !important;
  box-shadow: 0 30px 50px rgba(0,0,0,0.1) !important;
}

/* Cookie toggle button (Re-open icon) */
.ccm19-toggle-container {
  display: flex !important;
  bottom: 24px !important;
  left: 24px !important;
  z-index: 2147483647 !important;
}

@media (max-width: 767px) {
  .ccm19-toggle-container {
    bottom: 20px !important;
    left: 20px !important;
  }
}
```

---

### 4. Das Blockieren von eingebetteten Elementen (Iframes: Google Maps / Tagembed)
Da wir in Schritt 1 `afterInteractive` nutzen (was wir für Mobile zwingend müssen!), ist Next.js beim Seitenaufbau oft *millisekunden schneller* als CCM19. D.h. Next.js baut das `<iframe>` (z.B. Instagram Feed oder Maps) direkt sichtbar in die Seite, **bevor** CCM19 es blockieren kann. Das Resultat: Das Widget wird kurz sofort angezeigt, ohne Cookie-Erlaubnis abzufragen.

✅ **Der 1.5 Sekunden-Trick (Verzögertes Rendering in React):**
Wir verzögern das Einsetzen des Iframes, damit CCM19 einen Puffer hat, seine Überwachung zu starten. CCM19 greift den Code dann ab.

```tsx
"use client";
import { useState, useEffect } from "react";

export default function MyWidgetComponent() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Zwingende Verzögerung, damit CCM19 sich initialisieren kann!
        const timer = setTimeout(() => {
            setMounted(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {/* Rendert erst nach 1.5s - genau dann blockiert CCM19 den Iframe perfekt */}
            {mounted && <iframe src="https://widget.tagembed.com/..." />}
        </div>
    );
}
```

---

### 5. Doppelte Widgets vermeiden (Im CCM19-Dashboard)
Ein häufiger Fehler bei der Einrichtung von Tagembed oder Maps im Backend von CCM19: Man kopiert den Einzugs-Code (z.B. `<iframe ... >`) in die Einstellungen der CCM19-Einbindung unter **"Quellcode der Einbindung"**.

💀 **Ergebnis:** Das Element erscheint plötzlich auf JEDER Unterseite doppelt unter dem Footer!
✅ **Lösung:** Da wir die Komponenten und Iframes bereits händisch in React (`src/components/...`) erstellt haben, darf in CCM19 im Bereich "Quellcode der Einbindung" **strikt nichts** stehen. CCM19 dient hier rein als Filter (z.B. `widget.tagembed.com` im Blockierfeld).
