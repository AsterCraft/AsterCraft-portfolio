import "i18next";

import { startProjectFormTranslationsUk } from "@widgets/start-project-form";
import { headerTranslationUk } from "@widgets/header";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      startProjectForm: typeof startProjectFormTranslationsUk;
      header: typeof headerTranslationUk;
    };
  }
}
