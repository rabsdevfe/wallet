import { PageLayout } from "@/components/ui";
import { Navbar } from "@/components/ui";

export default function ProfilePage() {
  return (
    <PageLayout header={<Navbar title="Profile" />}>
      <div>Profile</div>
    </PageLayout>
  );
}
