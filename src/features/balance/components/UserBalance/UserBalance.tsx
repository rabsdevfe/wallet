import { useBalanceStore } from "@/features/balance/store";

export const UserBalance = () => {
  const { balance } = useBalanceStore();
  return (
    <div className="flex items-center justify-between flex-col">
      <div className="text-white text-sm font-medium">Your Balance</div>
      <div className="text-white text-2xl font-bold">${balance?.balance}</div>
    </div>
  );
};
