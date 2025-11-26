import globalSchemas from "app/config/seo";
import { SITE_URL } from "@shared/config";
/* @todo requires translation */
import { faqData } from "@widgets/faq-section";

const structuredData = {
  ...globalSchemas.en,

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

    mainEntity: faqData.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.answer.map((p) => `<p>${p}</p>`).join(""),
      },
    })),
  },
} as const;

export default structuredData;
