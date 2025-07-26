// import Link from 'next/link'
"use client";
import { Contacts } from "@/features/home/components/Contacts";
import { UserDetails } from "@/features/home/components/UserDetails";
import { useFetchTransactions } from "@/features/home/hooks/useFetchTransactions";
import { useUserDetails } from "@/features/home/hooks/useUserDetails";

export default function HomePage() {
  const { data, isLoading, error } = useFetchTransactions();

  const { user, balance, isLoading: isLoadingHomeData } = useUserDetails();

  if (isLoadingHomeData) {
    return (
      <div className="p-8">
        <div className="px-6 py-8">
          <p>Cargando datos del usuario...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div>
        <UserDetails />
        <Contacts />
      </div>
    </div>
  );
}
