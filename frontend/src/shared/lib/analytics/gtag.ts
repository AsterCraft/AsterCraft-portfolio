import { GADS_CONVERSION_ID } from "@shared/config/";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    gtag_report_conversion: (url?: string) => boolean;
  }
}

/** Track form submission conversion for Google Ads */
export function trackFormSubmitConversion(): void {
  if (typeof window !== "undefined" && window.gtag_report_conversion) {
    window.gtag_report_conversion(undefined);

    console.log("Conversion tracked:", GADS_CONVERSION_ID);
  } else {
    console.warn("gtag not loaded yet");
  }
}
