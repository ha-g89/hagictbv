# Build Report — Taak #1

## Samenvatting

Toegevoegd: **"Werkwijze" sectie** (`id="werkwijze"`) — een visueel stap-voor-stap procesoverzicht dat laat zien hoe HAG ICT met klanten werkt, van kennismaking tot oplevering & support.

De sectie bestaat uit 4 genummerde stappen, elk met een inline SVG icoon, connector-lijn en scroll-reveal animatie (via de bestaande `useReveal` hook). Hover-state op de icoon-cirkel geeft een accent-glow. De sectie is responsive (mobile-first).

Aanvullend is "Werkwijze" als navigatielink toegevoegd aan zowel de topnavigatie (`Nav.jsx`) als de footer (`Footer.jsx`).

De Vite-build slaagt zonder fouten of warnings (✓ 31 modules, 170 ms).

---

## Aangemaakt of gewijzigde bestanden

### Nieuw aangemaakt
| Bestand | Omschrijving |
|---|---|
| `src/components/Process.jsx` | Werkwijze-sectie component met 4 stappen en scroll-reveal |
| `src/components/Process.module.css` | CSS Module voor Process component |

### Gewijzigd
| Bestand | Wijziging |
|---|---|
| `src/App.jsx` | Import + `<Process />` toegevoegd tussen `<Services />` en `<About />` |
| `src/components/Nav.jsx` | Navigatielink `#werkwijze` toegevoegd |
| `src/components/Footer.jsx` | Navigatielink `#werkwijze` toegevoegd |
