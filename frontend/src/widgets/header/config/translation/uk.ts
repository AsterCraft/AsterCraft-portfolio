import type { Translation } from "./en";

const uk = {
  appBar: {
    brandName: "AsterCraft",
    menuButton: {
      ariaLabel: "Перемкнути навігацію",
    },
    startProjectBtn: "Замовити сайт",
  },
  navRail: {
    routingNav: {
      ariaLabel: "Основна навігація",
      home: "Головна",
    },
    pageIndex: {
      ariaLabel: "Розділи сторінки",
      development: "Розробка сайтів",
      portfolio: "Портфоліо",
      contacts: "Контакти",
    },
  },
} as const satisfies Translation;

export default uk;
