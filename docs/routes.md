# BusjeDirect — Routeoverzicht

## Conventie

Alle routes zijn gedefinieerd met de Next.js App Router. Route groups (tussen haakjes) zijn puur organisatorisch en verschijnen niet in de URL. De status geeft aan hoe ver de implementatie is.

| Status          | Betekenis                                      |
| --------------- | ---------------------------------------------- |
| `placeholder`   | Bestand bestaat, toont alleen een heading      |
| `in opbouw`     | Structuur aanwezig, logica nog niet compleet   |
| `gereed`        | Volledig functioneel en getest                 |

---

## Marketing

| Pad               | Bestand                                      | Doel                                                        | Status      |
| ----------------- | -------------------------------------------- | ----------------------------------------------------------- | ----------- |
| `/`               | `app/(marketing)/page.tsx`                   | Homepage + instap aanvraagflow (adresinvoer)                | in opbouw   |
| `/diensten`       | `app/(marketing)/diensten/page.tsx`          | Overzicht van aangeboden diensten                           | placeholder |
| `/faq`            | `app/(marketing)/faq/page.tsx`               | Veelgestelde vragen                                         | placeholder |
| `/contact`        | `app/(marketing)/contact/page.tsx`           | Contactformulier en contactgegevens                         | placeholder |
| `/locaties`       | `app/(marketing)/locaties/page.tsx`          | Overzicht van bediende steden en regio's                    | placeholder |
| `/locaties/[slug]`| `app/(marketing)/locaties/[slug]/page.tsx`   | Detailpagina per locatie, SEO-gericht                       | placeholder |

---

## Aanvraagflow

| Pad                    | Bestand                              | Doel                                              | Status      |
| ---------------------- | ------------------------------------ | ------------------------------------------------- | ----------- |
| `/aanvraag/items`      | `app/aanvraag/items/page.tsx`        | Stap 1 — Itemselectie                             | in opbouw   |
| `/aanvraag/datum-tijd` | `app/aanvraag/datum-tijd/page.tsx`   | Stap 2 — Datum en tijdvak kiezen                  | in opbouw   |
| `/aanvraag/gegevens`   | `app/aanvraag/gegevens/page.tsx`     | Stap 3 — Contactgegevens invullen                 | in opbouw   |
| `/aanvraag/bevestigen` | `app/aanvraag/bevestigen/page.tsx`   | Stap 4 — Samenvatting en indienen                 | in opbouw   |
| `/aanvraag/succes`     | `app/aanvraag/succes/page.tsx`       | Stap 5 — Bevestiging na succesvolle aanvraag      | in opbouw   |

---

## API

| Pad               | Bestand                          | Methode | Doel                                      | Status      |
| ----------------- | -------------------------------- | ------- | ----------------------------------------- | ----------- |
| `/api/aanvragen`  | `app/api/aanvragen/route.ts`     | `POST`  | Aanvraag opslaan en verwerken             | in opbouw   |

---

## Opmerkingen

- De homepage (`/`) is bewust het startpunt van de flow. Er is geen losse `/aanvraag` of `/aanvraag/adres` route. Zie `docs/decisions/001-homepage-starts-flow.md`.
- De `(marketing)` route group deelt straks een eigen layout met navigatie en footer.
- De aanvraagflow (`/aanvraag/*`) krijgt een eigen layout met voortgangsbalk.
