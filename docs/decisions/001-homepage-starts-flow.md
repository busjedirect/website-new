# ADR 001 — Homepage is het startpunt van de aanvraagflow

| Eigenschap | Waarde                        |
| ---------- | ----------------------------- |
| Datum      | 2026-04-18                    |
| Status     | Geaccepteerd                  |
| Auteur     | BusjeDirect team              |

---

## Context

Bij het ontwerpen van de aanvraagflow moest een keuze worden gemaakt over waar de flow begint. De twee meest voor de hand liggende opties waren:

1. De homepage toont alleen marketinginhoud; de flow begint op een aparte route zoals `/aanvraag` of `/aanvraag/adres`.
2. De homepage is zelf het startpunt van de flow en bevat direct de adresinvoer.

---

## Beslissing

**De homepage (`/`) is het startpunt van de aanvraagflow.**

De adresinvoer (ophaaladres en afleveradres) staat direct op de homepage. Er is geen losse `/aanvraag` of `/aanvraag/adres` route.

---

## Motivatie

### Conversie boven navigatie

BusjeDirect is een transactioneel product. De primaire actie voor elke bezoeker is het starten van een aanvraag. Door de adresinvoer direct op de homepage te plaatsen, wordt de drempel zo laag mogelijk gehouden. De gebruiker hoeft niet eerst door te klikken naar een aparte pagina.

### Vergelijkbare diensten als referentie

Diensten als Uber, Thuisbezorgd en vergelijkbare transportplatforms plaatsen de primaire invoer (locatie, bestemming) direct op de homepage. Dit patroon is herkenbaar en verlaagt de cognitieve belasting.

### Minder routes, minder complexiteit

Een aparte adresroute zou een extra stap in de flow introduceren zonder toegevoegde waarde. De flow is al vijf stappen lang; het samenvoegen van de adresinvoer met de homepage houdt de totale doorlooptijd korter.

---

## Technisch gevolg

- `app/(marketing)/page.tsx` bevat zowel marketinginhoud als de `AddressForm`-component.
- De `AddressForm` schrijft het ophaaladres en afleveradres naar de centrale `useRequestStore` (Zustand).
- Na succesvolle adresinvoer navigeert de gebruiker naar `/aanvraag/items`.
- Er is geen `/aanvraag` of `/aanvraag/adres` route. Directe toegang tot `/aanvraag/items` zonder store-data leidt terug naar `/`.
- De homepage valt onder de `(marketing)` route group en deelt de marketing layout (header, footer), maar de `AddressForm` zelf is een `features/request`-component.

---

## Alternatieven overwogen

| Alternatief                        | Reden afgewezen                                                  |
| ---------------------------------- | ---------------------------------------------------------------- |
| Aparte `/aanvraag/adres` route     | Extra stap zonder meerwaarde, lagere conversie verwacht          |
| Modal op homepage                  | Slechter voor SEO en toegankelijkheid, complexere state-handling |
| Adresinvoer in de header           | Te weinig ruimte, niet geschikt voor Mapbox autocomplete         |

---

## Gevolgen voor toekomstige beslissingen

- Als er ooit een aparte landingspagina per stad komt (`/locaties/amsterdam`), kan die ook een eigen `AddressForm` bevatten die de flow start met een vooringevuld ophaaladres.
- Als de homepage uitgebreid wordt met meer marketinginhoud, moet de `AddressForm` prominent boven de vouw blijven staan.
