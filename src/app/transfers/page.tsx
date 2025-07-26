"use client";
import { useFetchTransactions } from "@/features/home/hooks/useFetchTransactions";

export default function TransfersPage() {
  const { data, isLoading, isError } = useFetchTransactions();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <div className="p-8">
      <div className="text-2xl font-bold mb-8">Transfers View</div>
      {data?.data.map((transaction, index) => (
        <div key={index}>
          <h2>{transaction.description}</h2>
          <p>{transaction.amount}</p>
        </div>
      ))}
    </div>
  );
}
