// store/useWriteUsModal.ts
import { create } from "zustand";

interface WriteUsModalStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useWriteUsModal = create<WriteUsModalStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
