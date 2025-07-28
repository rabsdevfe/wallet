import { Contacts } from "@/features/contacts";
import { TransactionsList } from "../TransactionsList";
import styles from "./styles.module.css";

type Props = {
  className?: string;
};

function HomeContent({ className }: Props) {
  return (
    <div className={className || ""}>
      <Contacts />
      <TransactionsList className={styles.transactionsList} />
    </div>
  );
}

export { HomeContent };
