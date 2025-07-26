import { useQuery } from "@tanstack/react-query";
import { transactionsService } from "../services/transactionsService";

export const useFetchTransaction = (id: number) => {
  return useQuery({
    queryKey: ["transactions", "detail", id],
    queryFn: () => transactionsService.getById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};
