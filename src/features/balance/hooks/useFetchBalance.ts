import { useQuery } from "@tanstack/react-query";
import { balanceService } from "../services/balanceService";
import { useBalanceStore } from "../store";

export const useFetchBalance = () => {
  const { setBalance, setLoading } = useBalanceStore();

  return useQuery({
    queryKey: ["balance"],
    queryFn: async () => {
      setLoading(true);
      const balance = await balanceService.getBalance();
      setBalance(balance);
      setLoading(false);
      return balance;
    },
    staleTime: 1000 * 60 * 5,
  });
};
