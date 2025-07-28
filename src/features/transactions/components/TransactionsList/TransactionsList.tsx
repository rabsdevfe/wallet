"use client";
import { useFetchTransactions } from "@/features/transactions/hooks/useFetchTransactions";
import { useTransactionsStore } from "@/features/transactions/store";
import type { Transaction } from "@/features/transactions/types";
import styles from "./styles.module.css";
import { Item } from "./Item";

type Props = {
  className?: string;
};
export const TransactionsList = ({ className }: Props) => {
  const { isLoading, isError } = useFetchTransactions({ page: 1, limit: 8 });
  const transactions = useTransactionsStore((state) => state.transactions);

  if (isLoading) {
    return <div>Loading transactions...</div>;
  }

  if (isError) {
    return <div>Error loading transactions</div>;
  }

  return (
    <div className={className || ""}>
      <div className={styles.title}>Latest transactions</div>
      <div className={styles.list}>
        {transactions.map((transaction: Transaction, index: number) => (
          <Item key={index} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};
