import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { trackLead } from "./analytics";

/**
 * Real Cal.com inline embed. Rendered by BookingCalendar only when a calLink is
 * configured (env `VITE_CALCOM_LINK`, e.g. "djpartners/diagnostico"). Fires the
 * `generate_lead` conversion when a booking completes.
 *
 * Set up the event type in Cal.com first (20 min, video) with the 3
 * qualification questions, then set VITE_CALCOM_LINK and redeploy.
 */
export default function CalInlineEmbed({ calLink, landing }: { calLink: string; landing: string }) {
  useEffect(() => {
    let active = true;
    (async () => {
      const cal = await getCalApi();
      if (!active) return;
      // Match the Tinta look: ink accent, light theme, month view.
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: { light: { "cal-brand": "#161616" }, dark: {} },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      cal("on", { action: "bookingSuccessful", callback: () => trackLead(landing) });
    })();
    return () => {
      active = false;
    };
  }, [landing]);

  return (
    <Cal
      calLink={calLink}
      style={{ width: "100%", height: "100%", minHeight: 580, overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}
