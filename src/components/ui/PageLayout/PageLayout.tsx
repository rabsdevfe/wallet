"use client";
import React from "react";
import styles from "./styles.module.css";
import { PageContainer } from "../PageContainer";

interface Props {
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const PageLayout = ({ header, children, footer, className }: Props) => {
  return (
    <div className={`${styles.layout} ${className || ""}`}>
      {header && <div className={styles.header}>{header}</div>}

      <PageContainer className={styles.content}>{children}</PageContainer>

      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};
