import { dbClient } from "@/lib/dbClient";
import type {
  Transaction,
  TransactionQuery,
  PaginatedTransactions,
} from "@/types/transactions";

const STORE_NAME = "transactions";

export const transactionsService = {
  create: async (transaction: Omit<Transaction, "id">): Promise<void> => {
    const newTransaction: Transaction = {
      ...transaction,
      id: `txn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`, //TODO: modified, research id creation
      createdAt: new Date(),
    };

    await dbClient.set(STORE_NAME, newTransaction);
  },

  getById: async (id: string): Promise<Transaction | null> => {
    return dbClient.get<Transaction>(STORE_NAME, id);
  },

  getPaginated: async (
    query: TransactionQuery = {}
  ): Promise<PaginatedTransactions> => {
    const { page = 1, limit = 10 } = query;

    const { data, total } = await dbClient.getPaginated<Transaction>(
      STORE_NAME,
      page,
      limit
    );

    const sortedData = data.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return {
      data: sortedData,
      total,
      page,
      limit,
      hasMore: page * limit < total,
    };
  },

  getAll: async (): Promise<Transaction[]> => {
    const transactions = await dbClient.getAll<Transaction>(STORE_NAME);

    return transactions.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  },
};
