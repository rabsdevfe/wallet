"use client";
import { useParams, useRouter } from "next/navigation";
import { useFetchTransaction } from "@/features/transactions";
import { formatTransactionDate } from "@/utils/dateFormatter";
import { useEffect } from "react";

export default function TransactionDetailsPage() {
  const params = useParams<{ id: string }>();
  const transferId = params.id;
  const router = useRouter();

  useEffect(
    function redirectIfIdIsInvalid() {
      if (typeof transferId !== "string") {
        router.push(`/`);
        return;
      }
    },
    [transferId, router]
  );

  const {
    data: transaction,
    isLoading,
    isError,
  } = useFetchTransaction(Number(transferId));

  if (isLoading) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Detalles de Transferencia</h1>
        <p>Cargando detalles...</p>
      </div>
    );
  }

  if (isError || !transaction) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Error</h1>
        <p>No se pudo cargar la transacción</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">¡Transferencia Exitosa!</h1>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold text-green-800 mb-4">
          Detalles de la Transacción
        </h2>

        <div className="space-y-3">
          <div>
            <span className="font-medium">ID:</span> {transaction.id}
          </div>
          <div>
            <span className="font-medium">Monto:</span> $
            {transaction.amount.toLocaleString()}
          </div>
          <div>
            <span className="font-medium">Descripción:</span>{" "}
            {transaction.description}
          </div>
          <div>
            <span className="font-medium">Fecha:</span>{" "}
            {formatTransactionDate(transaction.createdAt)}
          </div>
          <div>
            <span className="font-medium">Tipo:</span> {transaction.type}
          </div>
          {transaction.user_name && (
            <div>
              <span className="font-medium">Destinatario:</span>{" "}
              {transaction.user_name}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
