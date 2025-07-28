import { Transaction } from "../../types";
import { buildTransactionDetails } from "../../utils";
import { ListDetails } from "@/components/ui";
import styles from "./styles.module.css";

type Props = {
  transaction?: Transaction | null;
};
function TransactionDetails({ transaction }: Props) {
  return (
    <div className="bg-green-50 border border-green-200 rounded-[24px] p-6 mb-6 text-center">
      <div className={styles.successTitle}>Transfer Success</div>
      <div className={styles.successDescription}>
        Your transfer has been completed successfully.
      </div>
      <div className={styles.amount}>${transaction?.amount}</div>
      <div className={styles.sendToWrapper}>
        <div className={styles.sendToTitle}>Send to</div>
        <div className={styles.sendToUser}>
          <img
            className={styles.sendToUserImage}
            src={transaction?.picture_path}
            alt={transaction?.user_name}
          />

          <div className={styles.sendToUserName}>
            {transaction?.user_name}
            <div>{transaction?.user_last_name}</div>
          </div>
        </div>
      </div>
      <div className={styles.transactionDetailsText}>Transaction Details</div>
      <ListDetails list={buildTransactionDetails(transaction)} />
    </div>
  );
}

export { TransactionDetails };
