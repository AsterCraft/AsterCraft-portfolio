import { create } from "zustand";

import type { ModalStartProjecStore } from "./types";

export const useModalStartProjectStore = create<ModalStartProjecStore>(
  (set) => ({
    firstName: "",
    email: "",
    phone: "",
    message: "",
    telegram: "",

    setFirstName: (firstNameValue) =>
      set({
        firstName: firstNameValue,
      }),

    setTelegram: (telegramValue) => {
      set({
        telegram: telegramValue,
      });
    },

    setEmail: (emailValue) =>
      set({
        email: emailValue,
      }),

    setPhone: (phoneValue) =>
      set({
        phone: phoneValue,
      }),

    setMessage: (messageValue) =>
      set({
        message: messageValue,
      }),

    resetModalStartProject: () =>
      set({
        firstName: "",
        email: "",
        phone: "",
        message: "",
        telegram: "",
      }),
  })
);
