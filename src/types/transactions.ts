export type Transaction = {
  id?: string;
  type: "payment" | "transfer" | "deposit";
  createdAt: Date;
  amount: number;
  description?: string;
  user_name?: string;
  user_id?: string;
  picture_path?: string;
};

export interface TransactionQuery {
  page?: number;
  limit?: number;
  type?: Transaction["type"];
}

export interface PaginatedTransactions {
  data: Transaction[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}
