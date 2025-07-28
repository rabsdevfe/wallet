import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import type { TransactionQuery } from "../types";
import { transactionsService } from "../services/transactionsService";
import { useTransactionsStore } from "../store";

export const useFetchTransfers = (
  query: TransactionQuery = { page: 1, limit: 10 }
) => {
  const { setTransfers, setLoadingTransfers, setHasMoreTransfers } =
    useTransactionsStore();

  const queryResult = useQuery({
    queryKey: ["transactions", "transfers", query.page, query.limit],
    queryFn: async () => {
      setLoadingTransfers(true);
      const result = await transactionsService.getTransfers(query);
      setLoadingTransfers(false);
      return result;
    },
    staleTime: 2 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });

  useEffect(
    function updateStore() {
      if (queryResult.data) {
        setTransfers(queryResult.data.data);
        setHasMoreTransfers(queryResult.data.hasMore);
      }
    },
    [queryResult.data, setTransfers]
  );

  return queryResult;
};
