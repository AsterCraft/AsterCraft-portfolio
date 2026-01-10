import type { DeepString } from "@shared/lib/i18n/types";

const en = {
  brandName: "AsterCraft",
  startProjectBtn: "Leave a request",
  nav: {
    development: "Website development",
    portfolio: "Portfolio",
    contacts: "Contacts",
  },
} as const;

export type Translation = DeepString<typeof en>;

export default en;
