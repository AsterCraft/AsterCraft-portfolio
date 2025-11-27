import type { Translation } from "./en";

const uk = {
  heading: ["Залиште заявку", "А ми зробимо решту!"],

  countries: {
    ariaLabel: "Виберіть країну",
    tabs: [
      { id: "ukraine", name: "Uraine" },
      { id: "poland", name: "Poland" },
    ],

    contacts: {
      ukraine: {
        phone: "+380 (98) 319 42 57",
        phoneHref: "tel:+380983194257",
        email: "astercraft.dev@gmail.com",
        location: "Львів, вул. Жовківська 28",
        /* @todo [27.11.2025]  all link to google maps*/
        locationLink: "",
      },
      poland: {
        phone: "+48 (790) 228 425",
        phoneHref: "tel:+48790228425",
        email: "astercraft.dev@gmail.com",
        location: "Łódź, ul Piotrkowska",
        /* @todo [27.11.2025]  all link to google maps*/
        locationLink: "",
      },
    },
  },

  ctaButton: "Залишити заявку",
} as const satisfies Translation;

export default uk;
