import type { DeepString } from "@shared/lib/i18n/types";

const en = {
  heading: {
    question: "Have more questions?",
    cta: "Ask us in Telegram:",
  },
  link: {
    ariaLabel: "Contact us on Telegram (opens in new tab)",
    handle: "@AsterCraft",
  },
} as const;

export type Translation = DeepString<typeof en>;

export default en;
