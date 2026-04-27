import { FaqSection as SharedFaqSection } from "@/components/ui/faq-section";

const FAQS = [
  {
    question: "Wat kost transport van meubels of witgoed?",
    answer: "De kosten zijn gebaseerd op de afstand en het aantal items dat vervoerd moet worden. Via onze prijsberekening krijg je direct een duidelijke indicatie van de kosten, zonder verrassingen achteraf.",
  },
  {
    question: "Kunnen jullie een bank, kast of wasmachine vervoeren?",
    answer: "Ja, wij vervoeren dagelijks grote en zware items zoals banken, kasten, wasmachines en koelkasten. Onze chauffeurs zorgen voor veilig laden, transport en lossen zonder beschadigingen.",
  },
  {
    question: "Doen jullie ook kleine verhuizingen?",
    answer: "Ja, wij zijn gespecialiseerd in kleine verhuizingen. Of het nu gaat om een paar meubels of een complete studio, wij regelen het snel en efficiënt.",
  },
  {
    question: "Halen jullie spullen op van Marktplaats of IKEA?",
    answer: "Ja, wij bieden een ophaalservice voor aankopen via Marktplaats, IKEA of andere winkels. Wij halen het op en bezorgen het veilig bij jou thuis.",
  },
  {
    question: "Komen jullie ook binnenshuis of lopen jullie trappen?",
    answer: "Wij werken drempel tot drempel: ophalen en afleveren bij de buitendeur op de begane grond. Wij lopen geen trappen en komen niet binnenshuis. Zorg dat de spullen klaarstaan bij de buitendeur op de begane grond.",
  },
  {
    question: "In welke regio's of landen rijden jullie?",
    answer: "Wij rijden vanuit onze standplaats in Diemen en verzorgen transport in Amsterdam, door heel Nederland en ook internationaal binnen Europa. Neem gerust contact op voor de mogelijkheden van jouw rit.",
  },
];

export function FaqSection() {
  return <SharedFaqSection faqs={FAQS} bg="white" />;
}
