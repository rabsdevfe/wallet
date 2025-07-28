"use client";
import Link from "next/link";
import { ArrowDown, BanknoteArrowDown, CircleDollarSign } from "lucide-react";
import type { Transaction } from "@/features/transactions/types";
import { formatTransactionDate } from "@/utils/dateFormatter";
import {
  buildTransactionAmount,
  buildTransactionName,
} from "@/features/transactions/utils";
import styles from "./styles.module.css";
type Props = {
  transaction: Transaction;
};

function Item({ transaction }: Props) {
  function getIcon(transactionType: Transaction["type"]) {
    switch (transactionType) {
      case "payment":
        return <ArrowDown fill="#662ab2" size={18} color="#fff" />;
      case "deposit":
        return <CircleDollarSign fill="#662ab2" color="#fff" size={18} />;
      case "transfer":
        return <BanknoteArrowDown fill="#662ab2" size={18} color="#fff" />;
    }
  }
  return (
    <Link href={`/send-again/details/${transaction.id}`}>
      <div className={styles.itemContainer}>
        <div className={styles.itemIconContainer}>
          <div className={styles.itemIcon}>{getIcon(transaction.type)}</div>
        </div>
        <div>
          <div className={styles.itemTitle}>
            {buildTransactionName(transaction.type, transaction.service_name)}
          </div>
          <div className={styles.itemDate}>
            {formatTransactionDate(transaction.createdAt)}
          </div>
        </div>
        <div className={`${styles.itemAmount} ${styles[transaction.type]}`}>
          {buildTransactionAmount(transaction.type, transaction.amount)}
        </div>
      </div>
    </Link>
  );
}

export default Item;
