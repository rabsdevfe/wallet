"use client";
import { useState } from "react";
import { useProcessTransfer } from "@/features/transactions";
import { useContactsStore } from "@/features/contacts";
import { buildProcessTransferPayload } from "../utils";

export default function SendAgainPage() {
  const [amount, setAmount] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const selectedContact = useContactsStore((state) => state.selectedContact);

  const {
    mutate: processTransfer,
    isPending,
    isError,
    error,
  } = useProcessTransfer();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      alert("Por favor ingresa un monto válido");
      return;
    }
    const payload = buildProcessTransferPayload({
      contact: selectedContact,
      amount: numericAmount,
      description,
    });
    if (!payload) {
      alert("Por favor selecciona un contacto");
      return;
    }
    processTransfer(payload);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Send Again</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium mb-2">
            Monto
          </label>
          <input
            id="amount"
            type="number"
            step="0.01"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="0.00"
            disabled={isPending}
          />
        </div>

        <div>
          <label htmlFor="note" className="block text-sm font-medium mb-2">
            Nota
          </label>
          <textarea
            id="note"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="note"
            rows={3}
            disabled={isPending}
          />
        </div>

        {isError && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800">
              Error:{" "}
              {error?.message || "Ocurrió un error procesando la transferencia"}
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={isPending || !amount}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isPending ? "Procesando..." : "Proceed to Transfer"}
        </button>
      </form>
    </div>
  );
}
