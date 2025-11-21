import Fetch from "i18next-fetch-backend";
import i18next from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";
import resources from "./locales/";

const supportedLngs = Object.keys(resources) as Array<keyof typeof resources>;
const ns = Object.keys(resources.en) as Array<keyof typeof resources.en>;

async function main() {
  await i18next
    .use(initReactI18next)
    .use(Fetch)
    .use(I18nextBrowserLanguageDetector)
    .init({
      supportedLngs: supportedLngs,
      fallbackLng: "uk",
      detection: { order: ["htmlTag"], caches: [] },
      backend: { loadPath: "/api/locales/{{lng}}/{{ns}}" },

      ns: ns,
      defaultNS: "shared",
    });

  startTransition(() => {
    hydrateRoot(
      document,
      <I18nextProvider i18n={i18next}>
        <StrictMode>
          <HydratedRouter />
        </StrictMode>
      </I18nextProvider>
    );
  });
}

main().catch((error) => console.error(error));
