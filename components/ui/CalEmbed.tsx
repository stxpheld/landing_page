"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { CalendarClock } from "lucide-react";
import { site } from "@/lib/site";

/**
 * Widget Cal.com (PRD §4.11 option B). Si `NEXT_PUBLIC_CALCOM_LINK` n'est pas
 * défini, on affiche un placeholder propre au lieu de planter.
 */
export function CalEmbed() {
  useEffect(() => {
    if (!site.calLink) return;
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#3B3BFF" } },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  if (!site.calLink) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center gap-3 rounded-[var(--radius-card)] border border-dashed border-white/20 bg-white/[0.03] p-8 text-center">
        <CalendarClock className="text-signal" size={32} aria-hidden="true" />
        <p className="font-display text-lg font-semibold text-white">
          Widget de réservation
        </p>
        <p className="max-w-xs text-sm text-white/60">
          Configurez votre lien Cal.com via la variable{" "}
          <code className="font-mono text-signal">NEXT_PUBLIC_CALCOM_LINK</code>{" "}
          pour afficher le calendrier ici.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[var(--radius-card)] bg-surface">
      <Cal
        calLink={site.calLink}
        style={{ width: "100%", height: "100%", minHeight: "560px", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
}
