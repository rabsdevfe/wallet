import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import {
  transactionFlowService,
  TransferData,
} from "../services/transactionFlowService";
import { useTransactionsStore } from "../store";
import { useBalanceStore } from "@/features/balance";

export const useProcessTransfer = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { addTransaction } = useTransactionsStore();
  const { setBalance } = useBalanceStore();

  return useMutation({
    mutationFn: async (transferData: TransferData) => {
      const result = await transactionFlowService.processTransfer(transferData);
      return result;
    },
    onSuccess: (result) => {
      addTransaction(result.transaction);
      setBalance(result.newBalance);

      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      queryClient.invalidateQueries({ queryKey: ["balance"] });

      router.push(`/send-again/details/${result.transaction.id}`);
    },
    onError: (error) => {
      console.error("Error Processing Transfer:", error);
    },
  });
};
