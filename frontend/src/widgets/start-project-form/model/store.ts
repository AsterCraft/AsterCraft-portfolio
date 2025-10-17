import { create } from "zustand";

import type { ModalStartProjecStore } from "./types";

export const useModalStartProjectStore = create<ModalStartProjecStore>(
  (set) => ({
    firstName: "",
    email: "",
    phone: "",
    message: "",
    telegram: "",

    errors: {},
    touchedFields: new Set(),

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

    setFieldError: (field, error) =>
      set((state) => ({
        errors: {
          ...state.errors,
          [field]: error,
        },
      })),

    setFieldTouched: (field) =>
      set((state) => ({
        touchedFields: new Set([...state.touchedFields]).add(field),
      })),

    clearErrors: () => set({ errors: {} }),

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
