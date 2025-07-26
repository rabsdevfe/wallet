import { dbClient } from "@/lib/dbClient";
import { BALANCE_STORE } from "@/lib/contants";
import { Balance } from "../types";

export const balanceService = {
  getBalance: async (): Promise<Balance | null> => {
    const allBalances = await dbClient.getAll<Balance>(BALANCE_STORE);

    return allBalances[0] || null;
  },

  updateBalance: async (balance: Balance): Promise<void> => {
    await dbClient.set<Balance>(BALANCE_STORE, balance);
  },
};
