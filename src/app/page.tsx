// import Link from 'next/link'
"use client";
import { Contacts } from "@/features/home/components/Contacts";
import { useFetchTransactions } from "@/features/home/hooks/useFetchTransactions";

export default function HomePage() {
  const { data, isLoading, error } = useFetchTransactions();
  console.log(data);
  return (
    <div className="p-8">
      <div>
        <Contacts />
      </div>
      home
    </div>
  );
}
