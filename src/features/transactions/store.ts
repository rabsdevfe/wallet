// ✅ Store de Zustand para transacciones
import { create } from "zustand";
import { Transaction } from "./types";

interface TransactionsStore {
  transactions: Transaction[];
  transfers: Transaction[];
  isLoading: boolean;
  isLoadingTransfers: boolean;
  setTransactions: (transactions: Transaction[]) => void;
  setTransfers: (transfers: Transaction[]) => void;
  setLoading: (loading: boolean) => void;
  setLoadingTransfers: (loading: boolean) => void;
  addTransaction: (transaction: Transaction) => void;
}

export const useTransactionsStore = create<TransactionsStore>((set) => ({
  transactions: [],
  transfers: [],
  isLoading: false,
  isLoadingTransfers: false,
  setTransactions: (transactions: Transaction[]) => set({ transactions }),
  setTransfers: (transfers: Transaction[]) => set({ transfers }),
  setLoading: (isLoading: boolean) => set({ isLoading }),
  setLoadingTransfers: (isLoadingTransfers: boolean) =>
    set({ isLoadingTransfers }),
  addTransaction: (transaction: Transaction) =>
    set((state) => ({
      transactions: [transaction, ...state.transactions],
      transfers:
        transaction.type === "transfer"
          ? [transaction, ...state.transfers]
          : state.transfers,
    })),
}));
