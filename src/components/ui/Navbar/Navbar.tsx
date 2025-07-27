"use client";
import { ArrowLeft } from "lucide-react";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

type Props = {
  title?: string;
  onBack?: () => void;
};
export const Navbar = ({ title, onBack }: Props) => {
  const router = useRouter();
  const handleBack = () => {
    if (onBack) {
      onBack();
    }
    router.back();
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.back} onClick={handleBack}>
        <ArrowLeft />
      </div>
      <div className={styles.content}>{title}</div>
    </div>
  );
};
