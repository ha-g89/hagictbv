# HAG-ICT — Agent Instructions

## Locatie
E:\repos\HagICTWeb\frontend

## Stack
- React 19 + Vite 8
- CSS Modules + globale CSS variabelen
- JavaScript JSX (geen TypeScript)
- Geen backend, geen router
- Enkelvoudige scrollpagina met anchor links
- Animaties via pure CSS + Intersection Observer API
- Iconen via inline SVG
- Fonts: Inter + JetBrains Mono (Google Fonts)
- Package manager: npm

## Projectstructuur
- `src/` — React broncode
- `src/components/` — React componenten
- `dist/` — build output
- `public/` — statische bestanden

## Architectuurregels
- Geen TypeScript, alles in .jsx of .js
- CSS Modules voor component styling
- Geen externe UI libraries
- Geen router — alles op één pagina met anchor links
- Animaties via CSS + Intersection Observer, geen JS animatie libraries
- Inline SVG voor iconen

## Build commando
cd E:\repos\HagICTWeb\frontend && npm run build

## Na elke feature (VERPLICHT)
1. Commit: feat: [beschrijving]
2. Push naar main

## Git
- Commit format: feat: / fix: / refactor: