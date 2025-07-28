"use client";
import { useState } from "react";
import { useFetchTransfers } from "../../hooks/useFetchTransfers";
import { useTransactionsStore } from "../../store";
import type { Transaction } from "../../types";
import Item from "./Item";
import styles from "./styles.module.css";
import { Button } from "@/components/ui";

const LIMIT = 5;

export const TransfersList = () => {
  const [fetchParams, setFetchParams] = useState({ page: 1, limit: LIMIT });
  const { isLoading, isError } = useFetchTransfers(fetchParams);
  const transfers = useTransactionsStore((state) => state.transfers);
  const hasMoreTransfers = useTransactionsStore(
    (state) => state.hasMoreTransfers
  );

  console.log("fetchParams", fetchParams);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading transfers</div>;
  }

  return (
    <div className={styles.container}>
      <div className="font-bold text-[20px] text-[#000]">Latest transfers</div>
      <div className={styles.list}>
        {transfers.map((transfer: Transaction, index: number) => (
          <Item key={index} transaction={transfer} />
        ))}
      </div>
      {hasMoreTransfers && (
        <Button
          onClick={() =>
            setFetchParams({
              ...fetchParams,
              limit: fetchParams.limit + LIMIT,
            })
          }
        >
          View more
        </Button>
      )}
    </div>
  );
};
