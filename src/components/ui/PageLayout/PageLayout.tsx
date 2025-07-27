"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { PageContainer } from "../PageContainer";
import { useContentSize } from "./useContentSize";

interface Props {
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const PageLayout = ({ header, children, footer, className }: Props) => {
  const { containerHeight, layoutRef, headerRef, footerRef } = useContentSize();

  return (
    <div ref={layoutRef} className={`${styles.layout} ${className || ""}`}>
      {header && (
        <div ref={headerRef} className={styles.header}>
          {header}
        </div>
      )}

      <PageContainer style={{ height: containerHeight }}>
        {children}
      </PageContainer>

      {footer && (
        <div ref={footerRef} className={styles.footer}>
          {footer}
        </div>
      )}
    </div>
  );
};
