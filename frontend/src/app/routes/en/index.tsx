import { useSearchParams, type MetaFunction } from "react-router";
import { useEffect } from "react";

import { HomePage } from "@pages/home-page";
import { useIsContactFormModalOpenStore } from "@shared/lib/store/isContactFormModalOpen";
import structuredData from "./structured-data";

export const meta: MetaFunction = () => {
  const siteUrl = "https://www.astercraft.com.ua";
  const pageUrl = `${siteUrl}/en/`;
  const imageUrl = `${siteUrl}/img/logo/logo.png`;
  const description =
    "We create business websites with clean code, no page builders. Fast, reliable, SEO-optimized, conversion-focused. 50+ successful projects. Landing pages, corporate websites, e-commerce.";

  return [
    {
      title: "AsterCraft - Web Development in Ukraine | From 4 days, from $350",
    },
    {
      name: "description",
      content: description,
    },
    {
      name: "keywords",
      content:
        "web development ukraine, website creation, web design, react development, turnkey website, landing page ukraine, e-commerce, seo optimization, business websites, conversion websites",
    },

    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:url", content: pageUrl },
    {
      property: "og:title",
      content: "Get a website that sells 24/7 | Aster Craft",
    },
    { property: "og:description", content: description },
    { property: "og:image", content: imageUrl },
    { property: "og:image:width", content: "1000" },
    { property: "og:image:height", content: "1000" },
    { property: "og:locale", content: "en_US" },
    { property: "og:locale:alternate", content: "uk_UA" },
    { property: "og:site_name", content: "AsterCraft" },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: pageUrl },
    {
      name: "twitter:title",
      content: "Get a website that sells 24/7 | Aster Craft",
    },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },

    {
      name: "robots",
      content:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    {
      name: "googlebot",
      content:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },

    { name: "author", content: "AsterCraft" },
    { name: "language", content: "en" },
    { name: "geo.region", content: "UA" },

    { tagName: "link", rel: "canonical", href: pageUrl },
    { tagName: "link", rel: "alternate", hrefLang: "en", href: pageUrl },
    {
      tagName: "link",
      rel: "alternate",
      hrefLang: "uk",
      href: `${siteUrl}/uk/`,
    },
    {
      tagName: "link",
      rel: "alternate",
      hrefLang: "x-default",
      href: `${siteUrl}/uk/`,
    },

    // Structured Data
    ...Object.values(structuredData).map((schema) => ({
      "script:ld+json": schema,
    })),
  ];
};

const EnIndex = () => {
  const [searchParams] = useSearchParams();
  const { isOpen, open } = useIsContactFormModalOpenStore();

  useEffect(() => {
    const shouldOpenModal = searchParams.get("contact") === "true";

    if (shouldOpenModal && !isOpen) {
      open();
    }
  }, []);

  return <HomePage />;
};

export default EnIndex;
