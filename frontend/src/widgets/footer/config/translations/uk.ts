import type { Translation } from "./en";

const uk = {
  sitemap: {
    text: "Карта сайту",
    ariaLabel: "Переглянути карту сайту",
  },
  copyright: '©2023-2026 "AsterCraft" Усі права захищені',
  socialMedia: {
    ariaLabel: "Посилання на соціальні мережі",
    telegram: "Напишіть нам у Telegram",
    instagram: "Відвідайте нашу сторінку в Instagram",
    facebook: "Відвідайте нашу сторінку у Facebook",
  },
} as const satisfies Translation;

export default uk;
