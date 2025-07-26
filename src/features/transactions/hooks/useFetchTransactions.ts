import { useQuery } from "@tanstack/react-query";
import { transactionsService } from "../services/transactionsService";
import { useTransactionsStore } from "../store";
import type { TransactionQuery } from "../types";

export const useFetchTransactions = (
  query: TransactionQuery = { page: 1, limit: 10 }
) => {
  const { setTransactions, setLoading } = useTransactionsStore();

  return useQuery({
    queryKey: ["transactions", query],
    queryFn: async () => {
      setLoading(true);
      const result = await transactionsService.getPaginated(query);
      setTransactions(result.data);
      setLoading(false);
      return result;
    },
    staleTime: 2 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
};
