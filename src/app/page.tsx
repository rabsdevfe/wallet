"use client";
import { PageLayout } from "@/components/ui/PageLayout";
import { UserDetails } from "@/features/home/components/UserDetails";
import { Contacts } from "@/features/contacts";
import { TransactionsList } from "@/components/TransactionsList";
import { NavigationFooter } from "@/components/ui/NavigationFooter";

export default function HomePage() {
  return (
    <PageLayout header={<UserDetails />} footer={<NavigationFooter />}>
      <Contacts />
      <TransactionsList />
    </PageLayout>
  );
}
