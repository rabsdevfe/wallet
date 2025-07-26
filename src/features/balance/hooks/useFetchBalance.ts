import { useQuery } from "@tanstack/react-query";
import { balanceService } from "../services/balanceService";
import { useBalanceStore } from "../store";

export const useFetchBalance = (userId: string) => {
  const { setBalance, setLoading } = useBalanceStore();
  const fetchBalance = async () => {
    setLoading(true);
    const balance = await balanceService.getBalance(userId);
    setBalance(balance);
    setLoading(false);
    return balance;
  };
  return useQuery({
    queryKey: ["balance", userId],
    queryFn: fetchBalance,
    staleTime: 1000 * 60 * 5,
  });
};
