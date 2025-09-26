import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// import ukShared from "./locales/uk/shared.json";
import ukWidgets from "./locales/uk/widgets.json";

const resources = {
  uk: {
    // shared: ukShared,
    widgets: ukWidgets,
  },
} as const;

const customPathDetector = {
  name: "customPath",
  lookup() {
    const path = window.location.pathname;

    if (path.startsWith("/uk/")) return "uk";
    // if (path.startsWith("/en/")) return "en;"; // requires english locale

    return "uk";
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "uk",

    detection: {
      order: ["customPath", "localStorage", "navigator"],
      caches: ["localStorage"],
      lookupFromPathIndex: 0,
    },

    react: {
      useSuspense: false,
    },

    interpolation: {
      escapeValue: false,
    },
  });

i18n.services.languageDetector.addDetector(customPathDetector);

export default i18n;
