import { FaqSection as SharedFaqSection } from "@/components/ui/faq-section";

const FAQS = [
  {
    question: "Hoe snel kunnen jullie transport regelen?",
    answer: "In veel gevallen kunnen wij binnen 24–48 uur transport regelen. Vul je aanvraag in en we nemen snel contact met je op om een datum en tijdvak af te spreken.",
  },
  {
    question: "Is mijn transport verzekerd?",
    answer: "Ja, al onze transporten zijn verzekerd. Jouw spullen zijn in goede handen tijdens het hele traject van ophalen tot bezorgen.",
  },
  {
    question: "Wat kost transport?",
    answer: "De kosten zijn gebaseerd op de afstand en het aantal items. Via onze prijsberekening krijg je direct een indicatie, zonder verrassingen achteraf. Alle prijzen zijn excl. btw.",
  },
  {
    question: "Welke betaalmethoden accepteren jullie?",
    answer: "Wij accepteren iDEAL, creditcard en bankoverschrijving. Betaling vindt plaats na bevestiging van de aanvraag.",
  },
  {
    question: "Helpen jullie met tillen en dragen?",
    answer: "Wij werken drempel tot drempel: ophalen en afleveren bij de buitendeur op de begane grond. Wij lopen geen trappen en komen niet binnenshuis. Zorg dat de spullen klaarstaan bij de buitendeur op de begane grond.",
  },
  {
    question: "Rijden jullie ook in het weekend?",
    answer: "Ja, wij zijn ook in het weekend beschikbaar. Bij het plannen van je aanvraag kun je zelf een datum en tijdvak kiezen dat jou uitkomt.",
  },
];

export function DienstenFaq() {
  return <SharedFaqSection faqs={FAQS} bg="white" />;
}
