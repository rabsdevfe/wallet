"use client";
import { PageLayout, NavigationFooter, Loader } from "@/components/ui";
import { UserDetails } from "@/features/home/components/UserDetails";
import { HomeContent } from "@/features/transactions/components/HomeContent";
import { useUserDetails } from "@/features/home/hooks/useUserDetails";

export default function HomePage() {
  const { isLoading } = useUserDetails();
  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }
  return (
    <PageLayout header={<UserDetails />} footer={<NavigationFooter />}>
      <HomeContent />
    </PageLayout>
  );
}
