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
    "We create business websites with clean code, no page builders. Fast, reliable, SEO-optimized, conversion-focused. 50+ successful projects. Landing pages, corporate websites, e-commerce.",

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
    name: "Web Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Landing Page Development",
          serviceType: "Landing Page Creation",
          description: "Conversion-focused landing pages with clean code",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "350",
          priceCurrency: "USD",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Corporate Website Development",
          serviceType: "Business Website Development",
          description: "Professional websites for business",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "500",
          priceCurrency: "USD",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-commerce Development",
          serviceType: "E-commerce Development",
          description: "E-commerce solutions with clean code",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "3500",
          priceCurrency: "USD",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO Optimization",
          serviceType: "Search Engine Optimization",
          description: "Improve visibility in search engines",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Design",
          serviceType: "Web Design",
          description: "Modern UX/UI design",
        },
      },
    ],
  },
} as const;

export default organizationSchema;
