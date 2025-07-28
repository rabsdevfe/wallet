import styles from "./styles.module.css";

type Props = {
  message?: string;
  isLoading?: boolean;
};

function Loader({ message = "Loading...", isLoading = true }: Props) {
  if (!isLoading) return null;

  return (
    <div className={styles.loader}>
      <h1>{message}</h1>
    </div>
  );
}

export { Loader };
