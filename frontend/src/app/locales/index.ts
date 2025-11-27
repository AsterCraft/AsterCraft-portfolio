import type { Resource } from "i18next";

import { homePageTranslations } from "@pages/home-page";

import { headerTranslations } from "@widgets/header";
import { heroSectionTranslations } from "@widgets/hero-section";
import { servicesSectionTranslations } from "@widgets/services-section";
import { startProjectFormTranslations } from "@widgets/start-project-form";
import { seoSectionTranslations } from "@widgets/seo-section";
import { promiseSectionTranslations } from "@widgets/promise-section";

export default {
  en: {
    homePage: homePageTranslations.en,

    header: headerTranslations.en,
    heroSection: heroSectionTranslations.en,
    servicesSection: servicesSectionTranslations.en,
    startProjectForm: startProjectFormTranslations.en,
    seoSection: seoSectionTranslations.en,
    promiseSection: promiseSectionTranslations.en,

    shared: {},
  },
  uk: {
    homePage: homePageTranslations.uk,

    header: headerTranslations.uk,
    heroSection: heroSectionTranslations.uk,
    servicesSection: servicesSectionTranslations.uk,
    startProjectForm: startProjectFormTranslations.uk,
    seoSection: seoSectionTranslations.uk,
    promiseSection: promiseSectionTranslations.uk,

    shared: {},
  },
} as const satisfies Resource;
