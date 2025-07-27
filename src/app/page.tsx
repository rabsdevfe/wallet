"use client";
import { Contacts } from "@/features/contacts";
import { UserDetails } from "@/features/home/components/UserDetails";
import { NavigationFooter } from "@/components/ui/NavigationFooter";
import { TransactionsList } from "@/components/TransactionsList";

export default function HomePage() {
  return (
    <div className="p-8">
      <UserDetails />
      <div>
        <Contacts />
      </div>
      <TransactionsList />
      <NavigationFooter />
    </div>
  );
}
