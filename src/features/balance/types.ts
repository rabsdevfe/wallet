export interface Balance {
  user_id: string;
  balance: number;
  last_modification_date: Date;
  last_modification_transaction_id: string | null;
}
