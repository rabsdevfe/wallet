import { useQuery } from "@tanstack/react-query";
import { contactsService } from "../services/contactsService";

export function useFetchContacts() {
  const { getContacts } = contactsService;

  return useQuery({
    queryKey: ["contacts"],
    queryFn: getContacts,
  });
}
