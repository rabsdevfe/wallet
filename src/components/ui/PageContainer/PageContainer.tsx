"use client";
import React from "react";
import styles from "./styles.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const PageContainer = ({ children, className, style }: Props) => {
  return (
    <div className={`${styles.container} ${className || ""}`} style={style}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
