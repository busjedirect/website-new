# BusjeDirect — Component Inventory

Overzicht van geplande componenten, gegroepeerd per map. Dit document wordt bijgehouden naarmate de implementatie vordert.

| Status         | Betekenis                          |
| -------------- | ---------------------------------- |
| `gepland`      | Nog niet aangemaakt                |
| `in opbouw`    | Aangemaakt, nog niet volledig      |
| `gereed`       | Volledig geïmplementeerd           |

---

## `components/layout/`

Gedeelde structuurcomponenten die op meerdere pagina's worden gebruikt.

| Component       | Doel                                                        | Status   |
| --------------- | ----------------------------------------------------------- | -------- |
| `Header`        | Navigatiebalk met logo en links                             | gepland  |
| `Footer`        | Voettekst met links, contactinfo en juridische vermeldingen | gepland  |
| `PageWrapper`   | Consistente padding en max-breedte voor pagina-inhoud       | gepland  |

---

## `components/ui/`

Herbruikbare, generieke UI-elementen zonder businesslogica.

| Component       | Doel                                                        | Status   |
| --------------- | ----------------------------------------------------------- | -------- |
| `Button`        | Primaire, secundaire en ghost varianten                     | gepland  |
| `Input`         | Tekstveld met label, foutmelding en helptext                | gepland  |
| `Select`        | Dropdown met label en validatiestatus                       | gepland  |
| `Badge`         | Statuslabel (bijv. beschikbaar / vol)                       | gepland  |
| `Card`          | Containercomponent met optionele border en schaduw          | gepland  |
| `Spinner`       | Laad-indicator voor async acties                            | gepland  |
| `Alert`         | Fout-, waarschuwings- en succesberichten                    | gepland  |

---

## `components/flow/`

Componenten specifiek voor de meerstapswizard.

| Component         | Doel                                                          | Status   |
| ----------------- | ------------------------------------------------------------- | -------- |
| `ProgressBar`     | Toont huidige stap en voortgang in de aanvraagflow            | gepland  |
| `StepLayout`      | Wrapper voor elke stap: titel, inhoud, navigatieknoppen       | gepland  |
| `StepNavigation`  | Terug- en Verder-knoppen met validatiecontrole                | gepland  |

---

## `components/summary/`

Componenten voor het aanvraagoverzicht.

| Component          | Doel                                                         | Status     |
| ------------------ | ------------------------------------------------------------ | ---------- |
| `RequestSummary`   | Herbruikbaar overzicht van de volledige aanvraag             | in opbouw  |
| `SummaryBlock`     | Toont een sectie van de samenvatting (bijv. adres, items)    | gepland    |
| `SummaryRow`       | Enkelvoudige rij met label en waarde                         | gepland    |

---

## `components/marketing/`

Componenten voor de marketingpagina's.

| Component          | Doel                                                         | Status     |
| ------------------ | ------------------------------------------------------------ | ---------- |
| `HeroRequestCard`  | Hero-sectie op de homepage met headline en adresformulier    | in opbouw  |
| `ServiceCard`      | Kaart voor een dienst op de dienstenpagina                   | gepland    |
| `FaqItem`          | Uitklapbaar FAQ-item (accordion)                             | gepland    |
| `LocationCard`     | Kaart voor een locatie in het locatieoverzicht               | gepland    |

---

## `features/request/components/`

Flowspecifieke componenten, gegroepeerd per stap.

| Map / Component                    | Doel                                                    | Status     |
| ---------------------------------- | ------------------------------------------------------- | ---------- |
| `address/AddressHeroForm`          | Adresinvoer op de homepage (stap 0)                     | in opbouw  |
| `items/ItemTileGrid`               | Grid van klikbare itemtegels (stap 1)                   | in opbouw  |
| `items/ItemTile`                   | Enkele klikbare itemtegel                               | in opbouw  |
| `items/ItemDetailPanel`            | Detailpaneel voor itemtoevoeging (stap 1)               | in opbouw  |
| `schedule/DatePicker`              | Kalender voor datumselectie (stap 2)                    | gepland    |
| `schedule/TimeslotPicker`          | Keuze uit beschikbare tijdvakken (stap 2)               | gepland    |
| `customer/CustomerForm`            | Contactgegevensformulier (stap 3)                       | in opbouw  |
| `confirmation/ConfirmationForm`    | Volledig overzicht + akkoord + bevestigknop (stap 4)    | in opbouw  |
| `success/SuccessView`              | Bevestigingsbericht na succesvolle aanvraag (stap 5)    | in opbouw  |
