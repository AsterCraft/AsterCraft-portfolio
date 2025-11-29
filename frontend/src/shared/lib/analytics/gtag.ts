import { GADS_CONVERSION_ID } from "@shared/config/";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

/** Track form submission conversion for Google Ads */
export function trackFormSubmitConversion(): void {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: GADS_CONVERSION_ID,
    });

    console.log("Conversion tracked:", GADS_CONVERSION_ID);
  } else {
    console.warn("gtag not loaded yet");
  }
}
