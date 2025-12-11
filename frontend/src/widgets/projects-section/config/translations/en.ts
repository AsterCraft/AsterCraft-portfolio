import type { DeepString } from "@shared/lib/i18n/types";

const en = {
  title: "Our projects",

  projects: [
    {
      url: "https://www.roxy.com/",
      img: "/img/projects/roxy.png",
      name: "Roxy",
      description: "Величезний магазин для спортивних товарів",
    },
    // {
    //   url: "https://www.uniprint.lviv.ua/",
    //   img: "/img/projects/uni-print.png",
    //   name: "Uni Print",
    //   description:
    //     "Багатосторінковий сайт-галерея з конструктором товарів для візуальної зовнішньої реклами",
    // },
    // {
    //   url: "https://www.laura-lewandowski.com/",
    //   img: "/img/projects/smart-chiefs.png",
    //   name: "Smart Chiefs",
    //   description:
    //     "Сайт для Smart Chiefs яка інтегрує штучний інтелект в рекламу в Німеччині",
    // },
    {
      url: "https://www.odtahvozidel-24.cz/",
      img: "/img/projects/odtahvozidel-24.png",
      name: "Odtahvozidel-24",
      description: "Односторіноковий сайт для послуг евакуатора в Чехії",
    },
  ],
} as const;

export type Translation = DeepString<typeof en>;

export default en;
