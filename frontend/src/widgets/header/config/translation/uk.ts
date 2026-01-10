import type { Translation } from "./en";

const uk = {
  brandName: "AsterCraft",
  startProjectBtn: "Замовити сайт",
  nav: {
    development: "Розробка сайтів",
    portfolio: "Портфоліо",
    contacts: "Контакти",
  },
} as const satisfies Translation;

export default uk;
