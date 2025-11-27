import { useSearchParams, type MetaFunction } from "react-router";
import { useEffect } from "react";

import { HomePage } from "@pages/home-page";
import { useIsContactFormModalOpenStore } from "@shared/lib/store/isContactFormModalOpen";
import structuredData from "./structured-data";
import { SITE_URL } from "@shared/config";

export const meta: MetaFunction = () => {
  const siteUrl = "https://www.astercraft.com.ua";
  const pageUrl = `${siteUrl}/uk/`;
  const imageUrl = `${siteUrl}/img/logo/logo.png`;
  const description =
    "Створюємо веб-сайти для бізнесу на чистому коді без конструкторів. Швидкі, надійні, SEO-оптимізовані, продаючі. 50+ успішних проектів. Landing Page, корпоративні сайти, інтернет-магазини.";

  return [
    {
      title:
        "AsterCraft - Розробка сайтів в Україні | Від 4 днів, від 15 000 грн",
    },
    {
      name: "description",
      content: description,
    },
    {
      name: "keywords",
      content:
        "розробка сайтів україна, створення сайтів, веб розробка, react розробка, сайт під ключ, landing page україна, інтернет магазин, seo оптимізація, веб-сайти для бізнесу, продаючі веб-сайти",
    },

    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:url", content: pageUrl },
    {
      property: "og:title",
      content: "Отримайте сайт, який продає 24/7 | Aster Craft",
    },
    { property: "og:description", content: description },
    { property: "og:image", content: imageUrl },
    { property: "og:image:width", content: "1000" },
    { property: "og:image:height", content: "1000" },
    { property: "og:locale", content: "uk_UA" },
    { property: "og:site_name", content: "AsterCraft" },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: pageUrl },
    {
      name: "twitter:title",
      content: "Отримайте сайт, який продає 24/7 | Aster Craft",
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
    { name: "language", content: "uk" },
    { name: "geo.region", content: "UA" },

    { tagName: "link", rel: "canonical", href: pageUrl },
    { tagName: "link", rel: "alternate", hrefLang: "uk", href: pageUrl },
    {
      tagName: "link",
      rel: "alternate",
      hrefLang: "en",
      href: `${SITE_URL}/en/`,
    },
    { tagName: "link", rel: "alternate", hrefLang: "x-default", href: pageUrl },

    ...Object.values(structuredData).map((schema) => ({
      "script:ld+json": schema,
    })),
  ];
};

const UkIndex = () => {
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

export default UkIndex;
