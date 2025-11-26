import { SITE_URL } from "@shared/config";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,

  name: "AsterCraft",
  alternateName: "Aster Craft",
  url: SITE_URL,

  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/img/logo/image.png`,
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

export default organizationSchema;
