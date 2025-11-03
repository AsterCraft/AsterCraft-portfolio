import { faqData } from "@widgets/faq-section";

const SITE_URL = "https://www.astercraft.com.ua";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,

  name: "AsterCraft",
  alternateName: "Aster Craft",
  url: SITE_URL,

  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/img/logo/logo.png`,
    width: "700",
    height: "700",
  },
  image: `${SITE_URL}/img/logo/logo.png`,

  description:
    "Створюємо веб-сайти для бізнесу на чистому коді без конструкторів. Швидкі, надійні, SEO-оптимізовані, продаючі. 50+ успішних проектів. Landing Page, корпоративні сайти, інтернет-магазини.",

  sameAs: [
    "https://github.com/AsterCraft/",
    "https://www.instagram.com/astercraft.web/",
  ],

  knowsAbout: [
    "React",
    "TypeScript",
    "JavaScript",
    "Web Development",
    "SEO",
    "Responsive Design",
    "Node.js",
    "Go",
    "E-commerce Development",
  ],

  email: "astercraft.dev@gmail.com",
  telephone: "+380632988698",

  areaServed: {
    "@type": "AdministrativeArea",
    name: "Ukraine",
  },

  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+380632988698",
    email: "astercraft.dev@gmail.com",
    contactType: "customer service",
    availableLanguage: ["uk", "ru", "en"],
    areaServed: "UA",
  },

  address: {
    "@type": "PostalAddress",
    addressCountry: "UA",
  },

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Послуги веб-розробки",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Розробка Landing Page",
          serviceType: "Створення посадкових сторінок",
          description: "Продаючі Landing Page на чистому коді",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "15000",
          priceCurrency: "UAH",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Створення корпоративних сайтів",
          serviceType: "Розробка сайтів для бізнесу",
          description: "Професійні веб-сайти для бізнесу",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "20000",
          priceCurrency: "UAH",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Розробка інтернет-магазину",
          serviceType: "E-commerce розробка",
          description: "E-commerce рішення на чистому коді",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "150000",
          priceCurrency: "UAH",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO-оптимізація",
          serviceType: "Пошукова оптимізація",
          description: "Підвищення видимості в пошукових системах",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Веб-дизайн",
          serviceType: "Веб-дизайн",
          description: "Сучасний UX/UI дизайн",
        },
      },
    ],
  },
} as const;

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,

  url: SITE_URL,
  name: "AsterCraft",
  description: "Професійна розробка веб-сайтів в Україні",
  inLanguage: "uk",

  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
} as const;

// probably need to move into page specific (lang specific?) file
export const webPageSchema = {
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
} as const;

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Головна",
      item: `${SITE_URL}/`,
    },
  ],
} as const;

export const faqSchema = {
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
} as const;
