import "i18next";
import i18n from "@shared/i18n";
import { startProjectFormTranslationsUk } from "../config/translation/uk";

i18n.addResourceBundle(
  "uk",
  "startProjectForm",
  startProjectFormTranslationsUk
);

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      startProjectForm: typeof startProjectFormTranslationsUk;
    };
  }
}
