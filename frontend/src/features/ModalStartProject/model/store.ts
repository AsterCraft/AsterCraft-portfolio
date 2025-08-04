import { create } from "zustand";

import type { ModalStartProjecStore } from "./types";

export const useModalStartProjectStore = create<ModalStartProjecStore>(
  (set) => ({
    firstName: "",
    // lastName: "",
    // email: "",
    // phone: "",
    // message: "",
    // additionalMessage: "",

    setFirstName: (firstNameValue) =>
      set({
        firstName: firstNameValue,
      }),
  })
);
