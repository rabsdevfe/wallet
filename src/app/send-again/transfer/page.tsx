"use client";
import { PageLayout } from "@/components/ui";
import { Navbar } from "@/components/ui";
import { UserBalance } from "@/features/balance/components/UserBalance";
import { SendAgainView } from "@/features/transactions/components/SendAgainView";

export default function SendAgainPage() {
  return (
    <PageLayout
      header={
        <>
          <Navbar title="Send Again" />
          <UserBalance />
        </>
      }
    >
      <SendAgainView />
    </PageLayout>
  );
}
