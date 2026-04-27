import { FaqItem } from "@/components/ui/faq-item";

interface Faq {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: Faq[];
  /** Optional heading override. Defaults to "Veelgestelde vragen". */
  title?: string;
  /** Background variant. Defaults to "gray". */
  bg?: "white" | "gray";
}

export function FaqSection({
  faqs,
  title = "Veelgestelde vragen",
  bg = "gray",
}: FaqSectionProps) {
  const bgClass = bg === "white" ? "bg-white" : "bg-[#F5F6F7]";

  return (
    <section className={`${bgClass} py-14 sm:py-16`}>
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <h2 className="mb-8 text-[24px] font-extrabold tracking-tight text-[#111111] sm:text-[28px]">
          {title}
        </h2>
        <div className="mx-auto max-w-[800px] divide-y divide-zinc-100 rounded-2xl bg-white px-6 shadow-sm">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
