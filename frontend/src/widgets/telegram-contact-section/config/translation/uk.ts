import type { Translation } from "./en";

const uk = {
  heading: {
    question: "Залишились питання?",
    cta: "Запитайте нас у Telegram:",
  },
  link: {
    ariaLabel: "Зв'яжіться з нами в Telegram (відкриється в новій вкладці)",
    handle: "@AsterCraft",
  },
} as const satisfies Translation;

export default uk;
