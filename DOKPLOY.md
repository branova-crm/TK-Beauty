# Dokploy TK Beautystudio — Astro + Planity

| Feld | Wert |
|------|------|
| Dokploy-App | **`tk-beautystudio-webseite-dcs64m`** |
| Application-ID | `VHymj7fKgvBa6-DA24HvI` |
| Panel | https://cloud.branova.de |
| GitHub | `branova-crm/TK-Beauty` · Branch `main` |
| Live-Domain | `tkbeautystudio.de` / `www.tkbeautystudio.de` (Port **80**) |

## Pflicht in der Dokploy-App

| Einstellung | Wert |
|-------------|------|
| **Build Type** | **Dockerfile** |
| **Dockerfile path** | `Dockerfile` |
| **Docker context** | `.` |
| **Port (Domains)** | **80** |
| **Publish / Output directory** | **leer** |

### Runtime-Env

| Variable | Pflicht |
|----------|---------|
| `NEXT_PUBLIC_PLANITY_API_KEY` | ja (wird als `/planity-env.js` injiziert) |
| `SMTP_USER` | ja |
| `SMTP_PASSWORD` | ja |
| `EMAIL_RECEIVER` | ja |
| `SMTP_HOST` / `SMTP_PORT` | optional |

## Checks

- `https://tkbeautystudio.de/healthz` → `ok`
- `server: nginx`
- `/termin` lädt Planity erst nach CCM19-Consent
- Kontaktformular → `/api/leads`
