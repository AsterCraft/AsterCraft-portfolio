import organizationSchema from "./organization-schema";
import webSiteSchema from "./website-schema";
import { SITE_URL } from "@shared/config";
import { faqSectionTranslations } from "@widgets/faq-section";

const globalEnSchemas = {
  organizationSchema,
  webSiteSchema,

  webPageSchema: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/en/#webpage`,

    url: `${SITE_URL}/en/`,
    name: "AsterCraft - Web Development in Ukraine",
    description:
      "We create business websites with clean code, no page builders",
    inLanguage: "en",

    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },

    about: {
      "@id": `${SITE_URL}/#organization`,
    },

    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE_URL}/img/logo/logo.png`,
    },
  },

  breadcrumbSchema: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Main Page",
        item: `${SITE_URL}/en/`,
      },
    ],
  },

  faqSchema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: faqSectionTranslations.en.items.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: `<p>${entry.answer}</p>`,
      },
    })),
  },
} as const;

export default globalEnSchemas;
