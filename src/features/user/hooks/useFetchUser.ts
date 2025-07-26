import { useQuery } from "@tanstack/react-query";
import { userService } from "../services/userService";
import { useUserStore } from "../store";

export const useFetchUser = () => {
  const { setUser, setLoading } = useUserStore();

  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      setLoading(true);
      const user = await userService.getUser();
      setUser(user);
      setLoading(false);
      return user;
    },
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60 * 24,
  });
};
