"use client";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useFetchTransaction } from "@/features/transactions";
import { Button, Loader } from "@/components/ui";
import { TransactionDetails } from "@/features/transactions/components/TransactionDetails";

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
    return <Loader isLoading={isLoading} />;
  }

  if (isError || !transaction) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Error</h1>
        <p>Error loading transaction</p>
      </div>
    );
  }

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <div className="p-8 flex flex-col justify-between h-screen">
      <TransactionDetails transaction={transaction} />
      <div className="grid gap-4">
        <Button variant="outline">Share</Button>
        <Button variant="primary-reverse" onClick={handleBackToHome}>
          Back to home
        </Button>
      </div>
    </div>
  );
}
