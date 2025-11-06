import { create } from "zustand";

type useIsContactFormOpen = {
  isOpen: boolean;
  toggleIsOpen: () => void;
  open: () => void;
  close: () => void;
};

export const useIsContactFormModalOpenStore = create<useIsContactFormOpen>(
  (set) => ({
    isOpen: false,

    toggleIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
    open: () => set(() => ({ isOpen: true })),
    close: () => set(() => ({ isOpen: false })),
  })
);
