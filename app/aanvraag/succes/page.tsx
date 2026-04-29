import type { Metadata } from "next";
import { SuccessView } from "@/features/request/components/success/success-view";

export const metadata: Metadata = {
  title: "Aanvraag ontvangen",
  robots: { index: false },
};

export default function SuccesPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f4]">
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24">
        <SuccessView />
      </div>
    </div>
  );
}
