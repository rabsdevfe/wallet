import { dbClient } from "@/lib/dbClient";
import { TRANSACTIONS_STORE } from "@/lib/contants";
import type {
  Transaction,
  TransactionQuery,
  PaginatedTransactions,
} from "../types";

export const transactionsService = {
  getById: async (id: number): Promise<Transaction | null> => {
    return await dbClient.get<Transaction>(TRANSACTIONS_STORE, id);
  },

  getPaginated: async (
    query: TransactionQuery = {}
  ): Promise<PaginatedTransactions> => {
    const { page = 1, limit = 10 } = query;

    const allTransactions = await dbClient.getAll<Transaction>(
      TRANSACTIONS_STORE
    );

    const sortedTransactions = allTransactions.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    const total = sortedTransactions.length;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedTransactions = sortedTransactions.slice(
      startIndex,
      endIndex
    );

    return {
      data: paginatedTransactions,
      total,
      page,
      limit,
      hasMore: endIndex < total,
    };
  },

  getTransfers: async (
    query: TransactionQuery = {}
  ): Promise<PaginatedTransactions> => {
    const { page = 1, limit = 10 } = query;

    const allTransactions = await dbClient.getAll<Transaction>(
      TRANSACTIONS_STORE
    );

    const transfers = allTransactions
      .filter((transaction) => transaction.type === "transfer")
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

    const total = transfers.length;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedTransfers = transfers.slice(startIndex, endIndex);

    return {
      data: paginatedTransfers,
      total,
      page,
      limit,
      hasMore: endIndex < total,
    };
  },

  getAll: async (): Promise<Transaction[]> => {
    const transactions = await dbClient.getAll<Transaction>(TRANSACTIONS_STORE);

    return transactions.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  },
};
