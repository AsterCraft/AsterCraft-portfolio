import type { DeepString } from "@shared/lib/i18n/types";

const en = {
  sitemap: {
    text: "Sitemap",
    ariaLabel: "View site map",
  },
  copyright: '©2023-2026 "AsterCraft" Rights protected',
  socialMedia: {
    ariaLabel: "Social media links",
    telegram: "Write us via Telegram",
    instagram: "Visit our Instagram page",
    facebook: "Visit our Facebook page",
  },
} as const;

export type Translation = DeepString<typeof en>;

export default en;
