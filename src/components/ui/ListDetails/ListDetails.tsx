"use client";
import { ListDetailsSkeleton } from "./ListDetailsSkeleton";
import styles from "./styles.module.css";

type Props = {
  list: Record<string, string>[];
  isLoading?: boolean;
};

function ListDetails({ list, isLoading = false }: Props) {
  if (isLoading) {
    return <ListDetailsSkeleton />;
  }
  return (
    <div className={styles.listContainer}>
      {list.map((item) => (
        <div className={styles.listItem} key={item.key}>
          <div className={styles.listItemKey}>
            <p>{item.key}</p>
          </div>
          <div className={styles.listItemValue}>{item.value}</div>
        </div>
      ))}
    </div>
  );
}

export { ListDetails };
