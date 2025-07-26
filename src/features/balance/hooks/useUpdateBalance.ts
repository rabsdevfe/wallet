import { useMutation, useQueryClient } from "@tanstack/react-query";
import { balanceService } from "../services/balanceService";
import { useBalanceStore } from "../store";
import { Balance } from "../types";

export const useUpdateBalance = () => {
  const queryClient = useQueryClient();
  const { setBalance } = useBalanceStore();

  return useMutation({
    mutationFn: async (balance: Balance) => {
      await balanceService.updateBalance(balance);
      return balance;
    },
    onSuccess: (balance) => {
      setBalance(balance);

      queryClient.invalidateQueries({ queryKey: ["balance"] });
    },
  });
};
