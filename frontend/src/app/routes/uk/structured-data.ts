import globalSchemas from "app/config/seo";
import { SITE_URL } from "@shared/config";
/* @todo requires translation */
import { faqData } from "@widgets/faq-section";

const structuredData = {
  ...globalSchemas.uk,

  breadcrumbSchema: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Головна",
        item: `${SITE_URL}/uk/`,
      },
    ],
  },

  webPageSchema: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/uk/#webpage`,

    url: `${SITE_URL}/uk/`,
    name: "AsterCraft - Розробка сайтів в Україні",
    description:
      "Створюємо веб-сайти для бізнесу на чистому коді без конструкторів",
    inLanguage: "uk",

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
