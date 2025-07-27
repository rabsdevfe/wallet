"use client";
import { useState } from "react";
import { useFetchTransactions } from "@/features/transactions/hooks/useFetchTransactions";
import { useTransactionsStore } from "@/features/transactions/store";
import type { Transaction } from "@/features/transactions/types";
import styles from "./styles.module.css";
import Item from "./Item";

type Props = {
  className?: string;
};
export const TransactionsList = ({ className }: Props) => {
  const [fetchParams, setFetchParams] = useState({ page: 1, limit: 3 }); // TODO: finish this
  const { isLoading, isError } = useFetchTransactions(fetchParams);
  const transactions = useTransactionsStore((state) => state.transactions);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setFetchParams({ page: 1, limit: 6 });
  //   }, 4000);
  //   return () => clearTimeout(timer);
  // }, []);

  if (isLoading) {
    return <div>Cargando transacciones...</div>;
  }

  if (isError) {
    return <div>Error al cargar transacciones</div>;
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
