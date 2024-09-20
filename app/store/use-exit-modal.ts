import { create } from "zustand";
type ExitModalState = {
  isOpen: boolean;
  close: () => void;
  open: () => void;
};

export const useExitModal = create<ExitModalState>((set) => ({
  isOpen: true,
  close: () => set({ isOpen: false }),
  open: () => set({ isOpen: true }),
}));
