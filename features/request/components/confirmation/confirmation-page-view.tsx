"use client";

import { useState } from "react";
import { useRequestStore } from "../../store/request-store";
import { isRequestComplete } from "../../store/request-selectors";
import { RequestSummary } from "@/components/summary/request-summary";
import { SummarySubmitCTA } from "@/components/summary/summary-cta";
import { MobileBottomBar } from "@/components/summary/mobile-bottom-bar";
import { ConfirmationView } from "./confirmation-view";

export function ConfirmationPageView() {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToExtraTime, setAgreedToExtraTime] = useState(false);
  const [loading, setLoading] = useState(false);

  const storeState = useRequestStore.getState();
  const dataComplete = isRequestComplete(storeState);
  const canSubmit = agreedToTerms && dataComplete;

  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:flex lg:gap-6 lg:items-start">
        <div className="flex-1">
          <ConfirmationView
            agreedToTerms={agreedToTerms}
            agreedToExtraTime={agreedToExtraTime}
            onTermsChange={setAgreedToTerms}
            onExtraTimeChange={setAgreedToExtraTime}
            onLoadingChange={setLoading}
          />
        </div>
        <div className="w-72 shrink-0 lg:sticky lg:top-6">
          <RequestSummary
            title="Samenvatting"
            cta={
              <SummarySubmitCTA
                disabled={!canSubmit}
                loading={loading}
                form="confirmation-form"
              />
            }
          />
        </div>
      </div>

      {/* Mobiel — geen inline submit-knop, alleen sticky bottom bar */}
      <div className="flex flex-col gap-5 pb-24 lg:hidden">
        <ConfirmationView
          agreedToTerms={agreedToTerms}
          agreedToExtraTime={agreedToExtraTime}
          onTermsChange={setAgreedToTerms}
          onExtraTimeChange={setAgreedToExtraTime}
          onLoadingChange={setLoading}
        />
      </div>

      {/* Mobile sticky bottom bar — enige primaire actie op mobiel */}
      <MobileBottomBar
        drawerTitle="Samenvatting"
        cta={
          <button
            type="submit"
            form="confirmation-form"
            disabled={!canSubmit || loading}
            className={[
              "rounded-lg px-5 py-2.5 text-sm font-semibold transition",
              canSubmit && !loading
                ? "bg-zinc-900 text-white hover:bg-zinc-700 active:scale-[0.98]"
                : "cursor-not-allowed bg-zinc-100 text-zinc-400",
            ].join(" ")}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-600" />
                Versturen…
              </span>
            ) : (
              "Bevestig aanvraag"
            )}
          </button>
        }
      />
    </>
  );
}
