import { useQuery } from "@tanstack/react-query";
import { contactsService } from "../services/contactsService";
import { useContactsStore } from "../store";

export function useFetchContacts() {
  const { setContacts, setLoading } = useContactsStore();

  return useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      setLoading(true);
      const response = await contactsService.getContacts();
      setContacts(response.results);
      setLoading(false);
      return response;
    },
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
  });
}
