import { dbClient } from "@/lib/dbClient";
import { TRANSACTIONS_STORE, BALANCE_STORE } from "@/lib/contants";
import { Transaction } from "../types";
import { Balance } from "@/features/balance/types";

export interface TransferData {
  amount: number;
  description: string;
  user_name?: string;
  user_id?: string;
  picture_path?: string;
}

export interface TransferResult {
  transaction: Transaction;
  newBalance: Balance;
}

export const transactionFlowService = {
  processTransfer: async (
    transferData: TransferData
  ): Promise<TransferResult> => {
    const db = await dbClient.getDB();

    return new Promise((resolve, reject) => {
      const tx = db.transaction(
        [TRANSACTIONS_STORE, BALANCE_STORE],
        "readwrite"
      );
      const transactionsStore = tx.objectStore(TRANSACTIONS_STORE);
      const balanceStore = tx.objectStore(BALANCE_STORE);

      let createdTransactionId: IDBValidKey;
      let updatedBalance: Balance;
      let newTransaction: Omit<Transaction, "id">;

      const getBalanceRequest = balanceStore.getAll();
      getBalanceRequest.onsuccess = () => {
        const allBalances = getBalanceRequest.result as Balance[];
        const currentBalance = allBalances[0];

        if (!currentBalance) {
          tx.abort();
          reject(new Error("No se encontró balance del usuario"));
          return;
        }

        if (currentBalance.balance < transferData.amount) {
          tx.abort();
          reject(new Error("Fondos insuficientes"));
          return;
        }

        newTransaction = {
          type: "transfer",
          amount: transferData.amount,
          description: transferData.description,
          user_name: transferData.user_name,
          user_id: transferData.user_id,
          picture_path: transferData.picture_path,
          createdAt: new Date(),
        };

        const addTransactionRequest = transactionsStore.add(newTransaction);
        addTransactionRequest.onsuccess = () => {
          createdTransactionId = addTransactionRequest.result;

          updatedBalance = {
            ...currentBalance,
            balance: currentBalance.balance - transferData.amount,
            last_modification_date: new Date(),
            last_modification_transaction_id: createdTransactionId.toString(),
          };

          const updateBalanceRequest = balanceStore.put(updatedBalance);
          updateBalanceRequest.onerror = () => {
            tx.abort();
            reject(updateBalanceRequest.error);
          };
        };

        addTransactionRequest.onerror = () => {
          tx.abort();
          reject(addTransactionRequest.error);
        };
      };

      getBalanceRequest.onerror = () => {
        tx.abort();
        reject(getBalanceRequest.error);
      };

      tx.oncomplete = () => {
        const createdTransaction: Transaction = {
          ...newTransaction,
          id: createdTransactionId.toString(),
        };

        resolve({
          transaction: createdTransaction,
          newBalance: updatedBalance,
        });
      };

      tx.onerror = () => {
        reject(tx.error);
      };

      tx.onabort = () => {
        reject(new Error("Transacción abortada"));
      };
    });
  },
};
