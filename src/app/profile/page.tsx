import { PageLayout } from "@/components/ui";
import { Navbar } from "@/components/ui";
import { ProfileView } from "@/features/user/components/ProfileView";

export default function ProfilePage() {
  return (
    <PageLayout header={<Navbar title="Profile" />}>
      <ProfileView />
    </PageLayout>
  );
}
