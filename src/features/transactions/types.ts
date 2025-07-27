export type TransactionType = "payment" | "transfer" | "deposit";

export interface Transaction {
  id?: string;
  type: TransactionType;
  createdAt: Date;
  amount: number;
  description?: string;
  user_name?: string;
  user_id?: string;
  picture_path?: string;
  service_name?: string;
}

export interface TransactionQuery {
  page?: number;
  limit?: number;
  type?: TransactionType;
}

export interface PaginatedTransactions {
  data: Transaction[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}
