import type { Resource } from "i18next";

import { headerTranslations } from "@widgets/header";
import { heroSectionTranslations } from "@widgets/hero-section";
import { servicesSectionTranslations } from "@widgets/services-section";
import { startProjectFormTranslations } from "@widgets/start-project-form";
import { homePageTranslations } from "@pages/home-page";

export default {
  en: {
    shared: {},

    header: headerTranslations.en,
    heroSection: heroSectionTranslations.en,
    servicesSection: servicesSectionTranslations.en,
    startProjectForm: startProjectFormTranslations.en,
    homePage: homePageTranslations.en,
  },
  uk: {
    shared: {},

    header: headerTranslations.uk,
    heroSection: heroSectionTranslations.uk,
    servicesSection: servicesSectionTranslations.uk,
    startProjectForm: startProjectFormTranslations.uk,
    homePage: homePageTranslations.uk,
  },
} as const satisfies Resource;
