import { dbClient } from "@/lib/dbClient";
import { BALANCE_STORE } from "@/lib/contants";
import { Balance } from "../types";

export const balanceService = {
  getBalance: async (userId: string): Promise<Balance | null> => {
    return await dbClient.get<Balance>(BALANCE_STORE, userId);
  },

  updateBalance: async (balance: Balance): Promise<void> => {
    await dbClient.set<Balance>(BALANCE_STORE, balance);
  },
};
