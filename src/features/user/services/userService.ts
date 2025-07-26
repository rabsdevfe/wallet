import { apiClient } from "@/lib/apiClient";
import type { UserResponse, User } from "@/types/User";

export const userService = {
  getUser: async (): Promise<User> => {
    const response = await apiClient.get<UserResponse>(
      "?seed=f54a370aa968442e"
    );

    return response.results[0];
  },
};
