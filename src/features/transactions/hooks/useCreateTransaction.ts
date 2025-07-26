import { useMutation, useQueryClient } from "@tanstack/react-query";
import { transactionsService } from "../services/transactionsService";
import { useTransactionsStore } from "../store";
import type { Transaction } from "../types";

export const useCreateTransaction = () => {
  const queryClient = useQueryClient();
  const { addTransaction } = useTransactionsStore();

  return useMutation({
    mutationFn: async (transaction: Omit<Transaction, "id" | "createdAt">) => {
      await transactionsService.create(transaction);
      return transaction;
    },
    onSuccess: (transaction) => {
      addTransaction(transaction as Transaction);

      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      queryClient.invalidateQueries({ queryKey: ["balance"] });
    },
  });
};
