# Build Report — Taak #2: AI Toepassingen sectie

## Samenvatting

Nieuwe sectie **"Van automatisering tot autonomie"** (`id="ai-toepassingen"`) toegevoegd tussen de Services- en Process-secties op de pagina. De sectie toont het volledige spectrum van wat AI concreet voor een bedrijf kan doen, georganiseerd in drie niveaus:

| Niveau | Inhoud |
|---|---|
| **Automatisering** | Geautomatiseerde feature-ontwikkeling + Geautomatiseerd testen |
| **Intelligentie** | Slimme procesautomatisering + Beslissingsondersteuning |
| **Autonomie** | Autonoom modelbeheer + Zelfstandige AI-agenten |

### Design-keuzes
- Visuele spectrum-balk bovenaan de sectie (gradient van `accent-dim` → cyaan → paars) als snelle visuele indicator van de progressie
- 2-koloms kaartgrid op desktop, 1-kolom op mobiel (≤ 720 px)
- Elke kaart heeft een gekleurde linker-accentbalk én een kleurgecodeerde badge passend bij het niveau (blauw-dim / cyaan / paars)
- Scroll-reveal animaties via de bestaande `useReveal` hook (Intersection Observer, geen JS-animatiebibliotheek)
- Inline SVG iconen, CSS Modules, geen externe UI-libraries — volledig conform architectuurregels

Vite-build slaagt zonder fouten of warnings (✓ 33 modules, 186 ms).

---

## Aangemaakt of gewijzigde bestanden

### Nieuw aangemaakt
| Bestand | Beschrijving |
|---|---|
| `src/components/AiCapabilities.jsx` | Nieuwe sectiecomponent met spectrum-balk en 6 capability-kaarten |
| `src/components/AiCapabilities.module.css` | CSS Module voor de nieuwe sectie |
| `build-report.md` | Dit bestand (overschreven van vorige taak) |

### Gewijzigd
| Bestand | Wijziging |
|---|---|
| `src/App.jsx` | Import van `AiCapabilities` toegevoegd; component ingevoegd tussen `<Services />` en `<Process />` |
