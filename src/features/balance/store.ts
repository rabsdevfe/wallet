import { create } from "zustand";
import { Balance } from "./types";

interface BalanceStore {
  balance: Balance | null;
  isLoading: boolean;
  setBalance: (balance: Balance | null) => void;
  setLoading: (loading: boolean) => void;
}

export const useBalanceStore = create<BalanceStore>((set) => ({
  balance: null,
  isLoading: false,
  setBalance: (balance: Balance | null) => set({ balance }),
  setLoading: (isLoading: boolean) => set({ isLoading }),
}));
