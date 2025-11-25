import { initReactI18next } from "react-i18next";
import { createCookie } from "react-router";
import { createI18nextMiddleware } from "remix-i18next/middleware";
import resources from "../locales/";

export const localeCookie = createCookie("lng", {
  path: "/",
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  httpOnly: true,
});

export const [i18nextMiddleware, getLocale, getInstance] =
  createI18nextMiddleware({
    detection: {
      supportedLanguages: ["uk", "en"],
      fallbackLanguage: "en",
      cookie: localeCookie,
      async findLocale(request) {
        const supportedLanguages = Object.keys(resources);

        let locale = new URL(request.url).pathname.split("/").at(1);

        if (locale === undefined) return null;
        else return supportedLanguages.includes(locale) ? locale : null;
      },
    },
    i18next: {
      resources,
    },
    plugins: [initReactI18next],
  });

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "shared";
    resources: typeof resources.en;
  }
}
