# TK BEAUTY - Premium Website

Eine moderne, elegante Premium-Website für das Beauty-Studio TK BEAUTY in Nürnberg. Entwickelt mit Next.js, Tailwind CSS und Supabase.

## Features

- **Premium Design**: Modernes, Framer-ähnliches Layout mit sanften Animationen und hochwertiger Typografie.
- **Next.js 15 (App Router)**: Schnelle Performance und optimales SEO.
- **Supabase Ready**: Integrierter Lead-Capture-Workflow (Kontaktformular).
- **Responsive**: Optimiert für alle Endgeräte (Mobile-First).
- **Graceful Fallback**: Funktionsfähig auch ohne aktive Supabase-Anbindung (Logging in die Konsole).

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (TypeScript)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animationen**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Backend**: [Supabase](https://supabase.com/)

## Installation

1. Repository klonen
2. Abhängigkeiten installieren:
   ```bash
   npm install
   ```
3. Lokalen Development-Server starten:
   ```bash
   npm run dev
   ```

## Umgebungsvariablen (ENV)

Erstellen Sie eine `.env.local` Datei im Hauptverzeichnis für die Supabase-Integration:

```env
NEXT_PUBLIC_SUPABASE_URL=IHRE_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=IHR_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY=IHR_SERVICE_ROLE_KEY (optional für Server-Side)
```

*Hinweis: Ohne diese Keys werden Leads lediglich in der Server-Konsole protokolliert.*

## Supabase Setup

1. Erstellen Sie ein neues Projekt auf Supabase.
2. Führen Sie das SQL-Skript unter `/supabase/schema.sql` im SQL Editor von Supabase aus.
3. Kopieren Sie die API-Keys in Ihre `.env.local`.

## Deployment

Die Website ist für [Vercel](https://vercel.com) optimiert:

1. Projekt auf Vercel importieren.
2. Umgebungsvariablen in den Vercel Project Settings hinterlegen.
3. Deploy klicken.

---

**Entwickelt für TK BEAUTY Nürnberg.**
