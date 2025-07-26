import { apiClient } from "@/lib/apiClient";
import type { ContactsResponse } from "@/types/contacts";

export const contactsService = {
  getContacts: async (): Promise<ContactsResponse> => {
    return apiClient.get(
      "?inc=name,picture,login,id&results=10&seed=foobar&nat=NL"
    );
  },
};
