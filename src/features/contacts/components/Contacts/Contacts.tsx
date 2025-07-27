"use client";
import { useFetchContacts } from "../../hooks/useFetchContacts";
import { UserSliders } from "@/components/ui";
import { useContactsStore } from "../../store";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

export function Contacts() {
  const { data, isLoading, error } = useFetchContacts();
  const { setSelectedContact } = useContactsStore();
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="p-4">
        <h2 className={styles.title}>Send Again</h2>
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
        <h2 className={styles.title}>Contactos Frecuentes</h2>
        <p className="text-red-500">Error al cargar contactos</p>
      </div>
    );
  }

  const contacts = data?.results || [];

  return (
    <div>
      <div className={styles.title}>Send Again</div>
      <UserSliders
        contacts={contacts}
        onSelect={(selectedContact) => {
          setSelectedContact(selectedContact);
          router.push(`/send-again/transfer/`);
        }}
      />
    </div>
  );
}
