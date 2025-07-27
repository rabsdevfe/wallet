"use client";
import React from "react";
import styles from "./styles.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const PageContainer = ({ children, className }: Props) => {
  return (
    <div className={`${styles.container} ${className || ""}`}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
