"use client";
import { PageLayout, NavigationFooter, Loader } from "@/components/ui";
import { UserDetails } from "@/features/home/components/UserDetails";
import { PageContent } from "@/features/transactions/components/PageContent";
import { useUserDetails } from "@/features/home/hooks/useUserDetails";

export default function HomePage() {
  const { isLoading } = useUserDetails();
  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }
  return (
    <PageLayout header={<UserDetails />} footer={<NavigationFooter />}>
      <PageContent />
    </PageLayout>
  );
}
