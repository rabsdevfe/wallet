import { create } from "zustand";
import { Contact } from "@/types/contacts";

interface ContactsStore {
  contacts: Contact[];
  selectedContact: Contact | null;
  isLoading: boolean;
  setContacts: (contacts: Contact[]) => void;
  setSelectedContact: (contact: Contact | null) => void;
  setLoading: (loading: boolean) => void;
}

export const useContactsStore = create<ContactsStore>((set) => ({
  contacts: [],
  selectedContact: null,
  isLoading: false,
  setContacts: (contacts: Contact[]) => set({ contacts }),
  setSelectedContact: (selectedContact: Contact | null) =>
    set({ selectedContact }),
  setLoading: (isLoading: boolean) => set({ isLoading }),
}));
