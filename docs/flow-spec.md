# BusjeDirect — Flow Specificatie v1

## Overzicht

De aanvraagflow van BusjeDirect is een lineaire meerstapswizard. De gebruiker doorloopt zes stappen van adresinvoer tot bevestiging. Elke stap bouwt voort op de vorige; de verzamelde data wordt centraal opgeslagen in de client-side store.

---

## Stappen

### Stap 0 — Home (`/`)

**Doel:** Eerste indruk en instap in de flow.

De homepage is het beginpunt van de aanvraag. De gebruiker voert hier het ophaaladres en het afleveradres in. Na validatie wordt de gebruiker doorgestuurd naar stap 1.

- Invoer: ophaaladres, afleveradres (via Mapbox Geocoding)
- Validatie: beide adressen verplicht, moeten geldig zijn
- Actie: opslaan in store → navigeer naar `/aanvraag/items`

---

### Stap 1 — Items (`/aanvraag/items`)

**Doel:** De gebruiker selecteert welke items vervoerd moeten worden.

De gebruiker kiest uit een voorgedefinieerde lijst van itemcategorieën (dozen, meubels, apparaten, etc.) en geeft aantallen op. Dit bepaalt mede het type voertuig en de prijs.

- Invoer: itemselectie + aantallen
- Validatie: minimaal één item
- Actie: opslaan in store → navigeer naar `/aanvraag/datum-tijd`

---

### Stap 2 — Datum & Tijd (`/aanvraag/datum-tijd`)

**Doel:** De gebruiker kiest een gewenste ophaaldatum en tijdvak.

Er wordt een kalender getoond met beschikbare datums. Per datum zijn tijdvakken beschikbaar (ochtend / middag / avond).

- Invoer: datum, tijdvak
- Validatie: datum in de toekomst, tijdvak verplicht
- Actie: opslaan in store → navigeer naar `/aanvraag/gegevens`

---

### Stap 3 — Gegevens (`/aanvraag/gegevens`)

**Doel:** De gebruiker vult contactgegevens in.

Naam, e-mailadres en telefoonnummer worden gevraagd. Optioneel kan een opmerking worden meegegeven.

- Invoer: naam, e-mail, telefoon, opmerking (optioneel)
- Validatie: naam, e-mail en telefoon verplicht; e-mail en telefoon op formaat
- Actie: opslaan in store → navigeer naar `/aanvraag/bevestigen`

---

### Stap 4 — Bevestigen (`/aanvraag/bevestigen`)

**Doel:** Samenvatting tonen en aanvraag indienen.

De gebruiker ziet een overzicht van alle ingevoerde gegevens. Na akkoord wordt de aanvraag via de API verstuurd.

- Invoer: geen (alleen review)
- Actie: POST `/api/aanvragen` → bij succes navigeer naar `/aanvraag/succes`
- Foutafhandeling: toon foutmelding bij mislukte API-call, sta opnieuw proberen toe

---

### Stap 5 — Succes (`/aanvraag/succes`)

**Doel:** Bevestiging tonen na succesvolle aanvraag.

De gebruiker krijgt een bevestigingsbericht met een referentienummer. De store wordt geleegd.

- Geen invoer
- Actie: store resetten, optioneel doorverwijzen naar home na X seconden

---

## Datamodel (globaal)

```ts
type AanvraagState = {
  ophaaladres: string;
  afleveradres: string;
  items: { id: string; naam: string; aantal: number }[];
  datum: string;       // ISO 8601
  tijdvak: "ochtend" | "middag" | "avond";
  naam: string;
  email: string;
  telefoon: string;
  opmerking?: string;
};
```

---

## Navigatieregels

- Elke stap is alleen toegankelijk als de vorige stap is voltooid.
- Directe URL-toegang tot een latere stap zonder store-data leidt terug naar stap 0.
- De gebruiker kan via een voortgangsbalk teruggaan naar een eerdere stap.
