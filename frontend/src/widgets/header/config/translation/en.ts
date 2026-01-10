import type { DeepString } from "@shared/lib/i18n/types";

const en = {
  appBar: {
    brandName: "AsterCraft",
    menuButton: {
      ariaLabel: "Toggle navigation",
    },
    startProjectBtn: "Leave a request",
  },

  navRail: {
    routingNav: {
      ariaLabel: "Main navigation",
      home: "Home",
    },
    pageIndex: {
      ariaLabel: "Page sections",
      development: "Website development",
      portfolio: "Portfolio",
      contacts: "Contacts",
    },
  },
} as const;

export type Translation = DeepString<typeof en>;

export default en;
