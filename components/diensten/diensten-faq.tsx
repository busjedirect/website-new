import { FaqSection as SharedFaqSection } from "@/components/ui/faq-section";

const FAQS = [
  {
    question: "Hoe snel kunnen jullie transport regelen?",
    answer: "In de meeste gevallen kunnen wij binnen 24–48 uur transport regelen. Is er beschikbaarheid? Dan kunnen wij vaak ook dezelfde dag nog rijden. Vul je aanvraag in en we nemen snel contact met je op om een datum en tijdvak af te spreken. Bij last-minute aanvragen kan een toeslag van toepassing zijn.",
  },
  {
    question: "Is mijn transport verzekerd?",
    answer: "Wij gaan zorgvuldig om met uw goederen. Tijdens transport geldt een beperkte aansprakelijkheid conform onze algemene voorwaarden. Wij adviseren om waardevolle goederen vooraf te melden en indien nodig aanvullend te verzekeren. Eventuele schade dient direct bij levering gemeld te worden.",
  },
  {
    question: "Wat kost transport?",
    answer: "De prijs start vanaf €65 excl. btw en wordt berekend op basis van de afstand tussen het ophaal- en afleveradres én de geselecteerde items. Via onze website zie je direct wat jouw transport kost.",
  },
  {
    question: "Welke betaalmethoden accepteren jullie?",
    answer: "Betaling vindt plaats bij aflevering. Je kunt betalen via pin, contant of betaalverzoek. Bij transporten over langere afstanden kunnen wij een aanbetaling vragen. Dit wordt altijd vooraf duidelijk gecommuniceerd.",
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
