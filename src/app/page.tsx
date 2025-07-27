"use client";
import { PageLayout, NavigationFooter } from "@/components/ui";
import { UserDetails } from "@/features/home/components/UserDetails";
import { PageContent } from "@/features/transactions/components/PageContent";

export default function HomePage() {
  return (
    <PageLayout header={<UserDetails />} footer={<NavigationFooter />}>
      <PageContent />
    </PageLayout>
  );
}
