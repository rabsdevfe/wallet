"use client";
import { useQuery } from "@tanstack/react-query";
import { transactionsService } from "../services/transactionsService";
import type { TransactionQuery } from "@/types/transactions";

export function useFetchTransactions(
  query: TransactionQuery = { page: 1, limit: 3 }
) {
  return useQuery({
    queryKey: ["transactions", query],
    queryFn: () => transactionsService.getPaginated(query),
    staleTime: 2 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
}
