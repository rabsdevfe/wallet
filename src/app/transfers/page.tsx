"use client";
import { TransfersList } from "@/features/transactions";
import { PageLayout } from "@/components/ui";
import { Navbar } from "@/components/ui";

export default function TransfersPage() {
  return (
    <PageLayout header={<Navbar title="Transfers" />}>
      <TransfersList />
    </PageLayout>
  );
}
