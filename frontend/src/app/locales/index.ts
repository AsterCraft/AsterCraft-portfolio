import type { Resource } from "i18next";

import { homePageTranslations } from "@pages/home-page";

import { headerTranslations } from "@widgets/header";
import { heroSectionTranslations } from "@widgets/hero-section";
import { servicesSectionTranslations } from "@widgets/services-section";
import { startProjectFormTranslations } from "@widgets/start-project-form";
import { seoSectionTranslations } from "@widgets/seo-section";
import { promiseSectionTranslations } from "@widgets/promise-section";
import { faqSectionTranslations } from "@widgets/faq-section";
import { projectsSectionTranslations } from "@widgets/projects-section";
import { developmentProcessSectionTranslations } from "@widgets/development-process-section";
import { footerTranslations } from "@widgets/footer";
import { consultationSectionTranslations } from "@widgets/consultation-section";
import { telegramContactSectionTranslations } from "@widgets/telegram-contact-section";

export default {
  en: {
    homePage: homePageTranslations.en,
    header: headerTranslations.en,
    heroSection: heroSectionTranslations.en,
    servicesSection: servicesSectionTranslations.en,
    startProjectForm: startProjectFormTranslations.en,
    developmentProcessSection: developmentProcessSectionTranslations.en,
    seoSection: seoSectionTranslations.en,
    promiseSection: promiseSectionTranslations.en,
    faqSection: faqSectionTranslations.en,
    projectsSection: projectsSectionTranslations.en,
    footer: footerTranslations.en,
    consultationSection: consultationSectionTranslations.en,
    telegramContactSection: telegramContactSectionTranslations.en,

    shared: {},
  },
  uk: {
    homePage: homePageTranslations.uk,
    header: headerTranslations.uk,
    heroSection: heroSectionTranslations.uk,
    servicesSection: servicesSectionTranslations.uk,
    startProjectForm: startProjectFormTranslations.uk,
    developmentProcessSection: developmentProcessSectionTranslations.uk,
    seoSection: seoSectionTranslations.uk,
    promiseSection: promiseSectionTranslations.uk,
    faqSection: faqSectionTranslations.uk,
    projectsSection: projectsSectionTranslations.uk,
    footer: footerTranslations.uk,
    consultationSection: consultationSectionTranslations.uk,
    telegramContactSection: telegramContactSectionTranslations.uk,

    shared: {},
  },
} as const satisfies Resource;
