import type { Resource } from "i18next";

import { servicesSectionTranslations } from "@widgets/services-section";
import { headerTranslations } from "@widgets/header";
import { startProjectFormTranslations } from "@widgets/start-project-form";

export default {
  en: {
    shared: {},

    header: headerTranslations.en,
    servicesSection: servicesSectionTranslations.en,
    startProjectForm: startProjectFormTranslations.en,
  },
  uk: {
    shared: {},

    header: headerTranslations.uk,
    servicesSection: servicesSectionTranslations.uk,
    startProjectForm: startProjectFormTranslations.uk,
  },
} as const satisfies Resource;
