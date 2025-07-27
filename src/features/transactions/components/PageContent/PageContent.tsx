import { Contacts } from "@/features/contacts";
import { TransactionsList } from "../TransactionsList";
import styles from "./styles.module.css";

type Props = {
  className?: string;
};

function PageContent({ className }: Props) {
  return (
    <div className={className || ""}>
      <Contacts />
      <TransactionsList className={styles.transactionsList} />
    </div>
  );
}

export { PageContent };
