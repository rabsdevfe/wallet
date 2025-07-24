"use client";
import { useMemo } from "react";
import { useFetchContacts } from "../hooks/useFetchContacts";
import { UserSliders } from "@/components/ui/UsersSlider";

export function Contacts() {
  const { data, isLoading, error } = useFetchContacts();
  console.log(data);
  if (isLoading) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Send Again</h2>
        <div className="space-y-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center space-x-3 p-2 animate-pulse"
            >
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div className="h-4 bg-gray-300 rounded w-24"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Contactos Frecuentes</h2>
        <p className="text-red-500">Error al cargar contactos</p>
      </div>
    );
  }

  const contacts = useMemo(() => data?.results || [], [data]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Send Again</h2>
      <UserSliders contacts={contacts} />
    </div>
  );
}
