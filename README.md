# BusjeDirect

Intern projectdocument — v0.1.0

---

## Projectdoel

BusjeDirect is een webapplicatie waarmee particulieren en bedrijven snel en eenvoudig een transportrit kunnen aanvragen. De gebruiker voert op de homepage direct een ophaal- en afleveradres in en doorloopt een meerstapswizard tot bevestiging.

---

## Stack

| Onderdeel     | Keuze                        |
| ------------- | ---------------------------- |
| Framework     | Next.js 16 (App Router)      |
| Taal          | TypeScript 5                 |
| UI            | React 19                     |
| Styling       | Tailwind CSS 4               |
| State         | Zustand 5                    |
| Kaarten/geo   | Mapbox (nog te integreren)   |
| Runtime       | Node.js                      |

---

## Flowoverzicht

De aanvraagflow is een lineaire meerstapswizard. Elke stap schrijft naar een centrale Zustand store.

```
/ (homepage)
  └─ Adresinvoer (ophaaladres + afleveradres)
       ↓
/aanvraag/items
  └─ Itemselectie + aantallen
       ↓
/aanvraag/datum-tijd
  └─ Datum + tijdvak (ochtend / middag / avond)
       ↓
/aanvraag/gegevens
  └─ Contactgegevens (naam, telefoon, e-mail, opmerking)
       ↓
/aanvraag/bevestigen
  └─ Volledig overzicht + akkoordverklaringen + bevestigknop
       ↓
POST /api/aanvragen
       ↓
/aanvraag/succes
  └─ Bevestigingspagina met referentienummer
```

---

## Routeoverzicht

### Marketing

| Route              | Doel                                      |
| ------------------ | ----------------------------------------- |
| `/`                | Homepage + instap aanvraagflow            |
| `/diensten`        | Overzicht van diensten                    |
| `/faq`             | Veelgestelde vragen                       |
| `/contact`         | Contactpagina                             |
| `/locaties`        | Overzicht van bediende locaties           |
| `/locaties/[slug]` | Detailpagina per locatie                  |

### Aanvraagflow

| Route                  | Doel                          |
| ---------------------- | ----------------------------- |
| `/aanvraag/items`      | Stap 1 — Itemselectie         |
| `/aanvraag/datum-tijd` | Stap 2 — Datum & tijdvak      |
| `/aanvraag/gegevens`   | Stap 3 — Contactgegevens      |
| `/aanvraag/bevestigen` | Stap 4 — Bevestiging          |
| `/aanvraag/succes`     | Bevestigingspagina            |

### API

| Route             | Methode | Doel                        |
| ----------------- | ------- | --------------------------- |
| `/api/aanvragen`  | `POST`  | Aanvraag ontvangen          |

---

## Projectstructuur

```
app/
  (marketing)/          Publieke marketingpagina's
  aanvraag/             Meerstaps aanvraagflow
  api/aanvragen/        API route

components/
  layout/               Header, Footer, PageWrapper
  ui/                   Generieke UI-elementen (Button, Input, ...)
  flow/                 ProgressBar, StepLayout, StepNavigation
  summary/              RequestSummary
  marketing/            HeroRequestCard, ServiceCard, ...

features/request/
  components/           Flowspecifieke componenten per stap
  store/                Zustand store + selectors
  lib/                  Prijsberekening, afstandsberekening
  constants/            Tijdsloten, itemopties
  types/                TypeScript types voor de hele flow
  validations/          Validatieschema's (nog te vullen)

lib/
  mapbox/               Mapbox client
  env/                  Environment variabelen
  utils/                Gedeelde utilities

public/
  images/ icons/ logos/ Statische assets

docs/
  flow-spec.md          Flowbeschrijving v1
  routes.md             Routeoverzicht met status
  component-inventory.md Componentenlijst
  decisions/            Architectuurbeslissingen (ADR's)
```

---

## Lokaal starten

**Vereisten:** Node.js 20+, npm

```bash
# Installeer dependencies
npm install

# Maak een lokaal env-bestand aan
cp .env.example .env.local
# Vul NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN in

# Start de ontwikkelserver
npm run dev
```

De applicatie draait op [http://localhost:3000](http://localhost:3000).

```bash
# Productie build controleren
npm run build
npm run start

# Linting
npm run lint
```

---

## Ontwikkelregels

### Algemeen

- Alle domeinlogica zit in `features/request/` — nooit direct in pagina's.
- Pagina's zijn Server Components tenzij state of event handlers nodig zijn.
- Client Components krijgen altijd `"use client"` bovenaan.
- Gebruik `@/` imports — geen relatieve paden buiten de eigen feature map.

### State

- De Zustand store (`useRequestStore`) is de enige bron van waarheid voor de flow.
- Lees store-waarden via selectors uit `request-selectors.ts`.
- Reset de store na een succesvolle aanvraag via `resetRequest()`.

### Omgeving

- Alle `process.env` toegang gaat via `lib/env/env.ts`.
- `NEXT_PUBLIC_*` variabelen zijn beschikbaar in de browser.
- Sla nooit tokens of secrets op in de client bundle.

### Naamgeving

- Bestanden: `kebab-case.tsx`
- Componenten: `PascalCase`
- Hooks en stores: `camelCase` met `use`-prefix
- Constanten: `UPPER_SNAKE_CASE`

### Documentatie

- Architectuurbeslissingen worden vastgelegd als ADR in `docs/decisions/`.
- Nieuwe routes worden toegevoegd aan `docs/routes.md`.
- Nieuwe componenten worden toegevoegd aan `docs/component-inventory.md`.
