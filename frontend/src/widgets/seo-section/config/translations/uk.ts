import type { Translation } from "./en";

/* @todo Translate this */
const uk = {
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
} as const satisfies Translation;

export default uk;
