"use client";

import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
  variant?: "primary" | "outline" | "primary-reverse";
};
function Button({
  children,
  onClick,
  disabled,
  className,
  variant = "primary",
  ...props
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className ?? ""} ${styles.baseStyles} ${styles[variant]} ${
        disabled ? "opacity-50" : ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };
