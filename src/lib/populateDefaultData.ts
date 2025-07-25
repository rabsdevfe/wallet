import { TRANSACTIONS_STORE } from "./contants";
import { DEFAULT_TRANSACTIONS } from "./defaultDbData";

async function populateDefaultData(db: IDBDatabase): Promise<void> {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(TRANSACTIONS_STORE, "readwrite");
    const store = transaction.objectStore(TRANSACTIONS_STORE);

    DEFAULT_TRANSACTIONS.forEach((txn) => {
      store.add(txn);
    });

    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
}
export { populateDefaultData };
