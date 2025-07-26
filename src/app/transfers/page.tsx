"use client";
import { TransfersList } from "@/features/transactions";

export default function TransfersPage() {
  return (
    <div className="p-8">
      <div className="text-2xl font-bold mb-8">Transfers View</div>
      <TransfersList />
    </div>
  );
}
