"use client";
import Link from "next/link";
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
  return (
    <Link href={`/send-again/details/${transaction.id}`}>
      <div className={styles.itemContainer}>
        <img
          src={transaction.picture_path}
          alt={transaction.user_name}
          className={styles.itemIcon}
        />
        <div>
          <div className={styles.itemTitle}>
            {buildTransactionName(transaction.type, transaction.service_name)}
          </div>
          <div className={styles.itemDate}>
            {formatTransactionDate(transaction.createdAt)}
          </div>
        </div>
        <div className={`${styles.itemAmount} ${styles[transaction.type]}`}>
          ${transaction.amount}
        </div>
      </div>
    </Link>
  );
}

export default Item;
