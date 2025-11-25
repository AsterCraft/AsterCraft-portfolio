import type { DeepString } from "@shared/lib/i18n/types";

const en = {
  heading: "Order a website that brings clients",

  list: [
    "Unique website that can't be replicated. No templates or constructor limitations",
    "SEO optimization. Clean code = higher positions in Google. Your clients will find you without ads",
    "Get a fast landing page, business card site, or corporate website",
  ],
} as const;

export type Translation = DeepString<typeof en>;

export default en;
