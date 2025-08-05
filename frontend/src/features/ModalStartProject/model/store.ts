import { create } from "zustand";

import type { ModalStartProjecStore } from "./types";

export const useModalStartProjectStore = create<ModalStartProjecStore>(
  (set) => ({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    // additionalMessage: "",

    setFirstName: (firstNameValue) =>
      set({
        firstName: firstNameValue,
      }),

    setLastName: (lastNameValue) =>
      set({
        lastName: lastNameValue,
      }),

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
        lastName: "",
        email: "",
        phone: "",
        message: "",
      }),
  })
);
