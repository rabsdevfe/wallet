import { Contacts } from "@/features/contacts";
import { UserDetails } from "@/features/home/components/UserDetails";
import { NavigationFooter } from "@/components/ui/NavigationFooter";

export default function HomePage() {
  return (
    <div className="p-8">
      <UserDetails />
      <div>
        <Contacts />
      </div>
      <NavigationFooter />
    </div>
  );
}
