import type { DeepString } from "@shared/lib/i18n/types";

const en = {
  heading: ["Leave us a request", "And we'll do the rest!"],

  countries: {
    ariaLabel: "Select country",
    tabs: [
      { id: "ukraine", name: "Ukraine" },
      { id: "poland", name: "Poland" },
    ],

    contacts: {
      ukraine: {
        phone: "+380 (98) 319 42 57",
        phoneHref: "tel:+380983194257",
        email: "astercraft.dev@gmail.com",
        location: "Lviv, 28 Zhovkivska Street",
        /* @todo [27.11.2025]  all link to google maps*/
        locationLink: "",
      },
      poland: {
        phone: "+48 (790) 228 425",
        phoneHref: "tel:+48790839872",
        email: "astercraft.dev@gmail.com",
        location: "Łódź, ul Piotrkowska",
        /* @todo [27.11.2025]  all link to google maps*/
        locationLink: "",
      },
    },
  },

  ctaButton: "Leave a request",
} as const;

export type Translation = DeepString<typeof en>;

export default en;
