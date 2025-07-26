import { useQuery } from '@tanstack/react-query';
import { balanceService } from '../services/balanceService';
import { useBalanceStore } from '../store';

export const useFetchBalance = (userId: string) => {
  const { setBalance, setLoading } = useBalanceStore();

  return useQuery({
    queryKey: ["balance", userId],
    queryFn: async () => {
      setLoading(true);
      const balance = await balanceService.getBalance(userId);
      setBalance(balance);
      setLoading(false);
      return balance;
    },
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
};
