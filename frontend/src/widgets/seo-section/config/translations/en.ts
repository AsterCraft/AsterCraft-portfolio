import type { DeepString } from "@shared/lib/i18n/types";

const en = {
  heading: ["Drop us a request", "And we'll do the rest!"],

  countries: {
    ariaLabel: "Select country",
    tabs: [
      { id: "ukraine", name: "Ukraine" },
      { id: "poland", name: "Poland" },
    ],

    contacts: {
      ukraine: {
        phone: "+48 (790) 8398 72",
        phoneHref: "tel:+48790839872",
        email: "astercraft.dev@gmail.com",
        location: "Lviv",
      },
      poland: {
        phone: "+48 (790) 8398 72",
        phoneHref: "tel:+48790839872",
        email: "astercraft.dev@gmail.com",
        location: "Lodz",
      },
    },
  },

  ctaButton: "Leave a request",
} as const;

export type Translation = DeepString<typeof en>;

export default en;
