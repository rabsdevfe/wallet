"use client";
import { useFetchTransactions } from "@/features/transactions/hooks/useFetchTransactions";
import { useTransactionsStore } from "@/features/transactions/store";
import type { Transaction } from "@/features/transactions/types";

export const TransactionsList = () => {
  const { isLoading, isError } = useFetchTransactions({ page: 1, limit: 3 });
  const transactions = useTransactionsStore((state) => state.transactions);

  if (isLoading) {
    return <div>Cargando transacciones...</div>;
  }

  if (isError) {
    return <div>Error al cargar transacciones</div>;
  }

  return (
    <div>
      <h2>Lista de Transacciones</h2>
      {transactions.map((transaction: Transaction, index: number) => (
        <div key={index} className="mb-4 p-4 border rounded">
          <h3 className="font-semibold">{transaction.description}</h3>
          <p className="text-lg">${transaction.amount.toLocaleString()}</p>
          <p className="text-sm text-gray-600">
            {new Date(transaction.createdAt).toLocaleDateString()}
          </p>
          <p className="text-xs text-blue-600">Tipo: {transaction.type}</p>
        </div>
      ))}
    </div>
  );
};
