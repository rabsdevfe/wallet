import { useBalanceStore, useFetchBalance } from "@/features/balance";
import { useUserStore, useFetchUser } from "@/features/user";

export const useUserDetails = () => {
  const { isError: isErrorUser, isLoading: isLoadingUser } = useFetchUser();
  const { isError: isErrorBalance, isLoading: isLoadingBalance } =
    useFetchBalance();

  const user = useUserStore((state) => state.user);
  const balance = useBalanceStore((state) => state.balance);

  return {
    user,
    balance,
    isLoading: isLoadingUser || isLoadingBalance,
    isError: isErrorUser || isErrorBalance,
    error: isErrorUser || isErrorBalance,
  };
};
