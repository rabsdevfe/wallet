import { BALANCE_STORE, TRANSACTIONS_STORE } from "./contants";
import { DEFAULT_BALANCE, DEFAULT_TRANSACTIONS } from "./defaultDbData";

async function preloadIndexedDBDefaultData(db: IDBDatabase): Promise<void> {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(
      [TRANSACTIONS_STORE, BALANCE_STORE],
      "readwrite"
    );
    const transactionsStore = transaction.objectStore(TRANSACTIONS_STORE);
    const balanceStore = transaction.objectStore(BALANCE_STORE);

    DEFAULT_TRANSACTIONS.forEach((txn) => {
      transactionsStore.add(txn);
    });

    balanceStore.add(DEFAULT_BALANCE);

    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
}
export { preloadIndexedDBDefaultData };
