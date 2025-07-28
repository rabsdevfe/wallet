"use client";
import {
  TransfersList,
  useTransactionsStore,
  useFetchTransfers,
} from "@/features/transactions";
import { Loader, PageLayout } from "@/components/ui";
import { Navbar } from "@/components/ui";

export default function TransfersPage() {
  const { isLoading } = useFetchTransfers();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <PageLayout header={<Navbar title="Transfers" />}>
      <TransfersList />
    </PageLayout>
  );
}
