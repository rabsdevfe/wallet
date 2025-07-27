"use client";
import { useFetchTransfers } from "../hooks/useFetchTransfers";
import { useTransactionsStore } from "../store";
import type { Transaction } from "../types";
import { formatTransactionDate } from "@/utils/dateFormatter";

export const TransfersList = () => {
  const { isLoading, isError } = useFetchTransfers();
  const transfers = useTransactionsStore((state) => state.transfers);

  if (isLoading) {
    return <div>Cargando transfers...</div>;
  }

  if (isError) {
    return <div>Error al cargar transfers</div>;
  }

  return (
    <div>
      <h2>Lista de Transfers</h2>
      {transfers.map((transfer: Transaction, index: number) => (
        <div key={index} className="mb-4 p-4 border rounded">
          <h3 className="font-semibold">{transfer.description}</h3>
          <p className="text-lg">${transfer.amount.toLocaleString()}</p>
          <p className="text-sm text-gray-600">
            {formatTransactionDate(transfer.createdAt)}
          </p>
          <p className="text-xs text-blue-600">Tipo: {transfer.type}</p>
        </div>
      ))}
    </div>
  );
};
