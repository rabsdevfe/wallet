import {
  BALANCE_STORE,
  DB_NAME,
  DB_VERSION,
  TRANSACTIONS_STORE,
} from "./contants";
import { preloadIndexedDBDefaultData } from "./preloadIndexedDBDefaultData";

async function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = async (event) => {
      const db = (event.target as IDBOpenDBRequest).result;

      if (!db.objectStoreNames.contains(TRANSACTIONS_STORE)) {
        const store = db.createObjectStore(TRANSACTIONS_STORE, {
          keyPath: "id",
          autoIncrement: true,
        });

        store.createIndex("type", "type", { unique: false });
        store.createIndex("createdAt", "createdAt", { unique: false });
        store.createIndex("amount", "amount", { unique: false });
      }

      if (!db.objectStoreNames.contains(BALANCE_STORE)) {
        db.createObjectStore(BALANCE_STORE, {
          keyPath: "user_id",
          autoIncrement: true,
        });
      }

      request.transaction?.addEventListener("complete", async () => {
        await preloadIndexedDBDefaultData(db);
      });
    };
  });
}

export const dbClient = {
  get: async <T>(storeName: string, id: string): Promise<T | null> => {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, "readonly");
      const store = transaction.objectStore(storeName);
      const request = store.get(id);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result || null);
    });
  },

  set: async <T>(storeName: string, data: T): Promise<void> => {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, "readwrite");
      const store = transaction.objectStore(storeName);
      const request = store.put(data);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  },

  getAll: async <T>(storeName: string): Promise<T[]> => {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, "readonly");
      const store = transaction.objectStore(storeName);
      const request = store.getAll();

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result || []);
    });
  },

  getPaginated: async <T>(
    storeName: string,
    page: number = 1,
    limit: number = 10
  ): Promise<{ data: T[]; total: number }> => {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, "readonly");
      const store = transaction.objectStore(storeName);

      const countRequest = store.count();
      countRequest.onsuccess = () => {
        const total = countRequest.result;

        const getAllRequest = store.getAll();
        getAllRequest.onsuccess = () => {
          const allResults = getAllRequest.result || [];
          const startIndex = (page - 1) * limit;
          const endIndex = startIndex + limit;
          const paginatedResults = allResults.slice(startIndex, endIndex);

          resolve({
            data: paginatedResults,
            total,
          });
        };
        getAllRequest.onerror = () => reject(getAllRequest.error);
      };
      countRequest.onerror = () => reject(countRequest.error);
    });
  },
};
