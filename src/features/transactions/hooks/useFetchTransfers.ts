import { useQuery } from "@tanstack/react-query";
import { transactionsService } from "../services/transactionsService";
import { useTransactionsStore } from "../store";
import type { TransactionQuery } from "../types";

export const useFetchTransfers = (
  query: TransactionQuery = { page: 1, limit: 10 }
) => {
  const { setTransfers, setLoadingTransfers } = useTransactionsStore();

  return useQuery({
    queryKey: ["transactions", "transfers", query],
    queryFn: async () => {
      setLoadingTransfers(true);
      const result = await transactionsService.getTransfers(query);
      setTransfers(result.data);
      setLoadingTransfers(false);
      return result;
    },
    staleTime: 2 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
};
