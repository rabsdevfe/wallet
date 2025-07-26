import { Contacts } from "@/features/home/components/Contacts";
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
