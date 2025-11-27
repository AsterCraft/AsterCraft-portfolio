import { SITE_URL } from "@shared/config";

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,

  url: SITE_URL,
  name: "AsterCraft",
  description: "Professional web development in Ukraine",
  inLanguage: "en",

  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
} as const;

export default webSiteSchema;
