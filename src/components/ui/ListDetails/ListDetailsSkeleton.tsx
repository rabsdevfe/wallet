import styles from "./styles.module.css";

interface ListDetailsSkeletonProps {
  itemsCount?: number;
}

function ListDetailsSkeleton({ itemsCount = 6 }: ListDetailsSkeletonProps) {
  return (
    <div className={styles.listContainer}>
      {Array.from({ length: itemsCount }).map((_, index) => (
        <div key={index} className={styles.listItem}>
          <div className={styles.listItemKey}>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
          </div>
          <div className={styles.listItemValue}>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-24 ml-auto"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export { ListDetailsSkeleton };
