"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";
import { Home, BanknoteArrowDown, UserCircle2 } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/transfers", label: "Transfers", icon: "transfers" },
  { href: "/profile", label: "Profile", icon: "profile" },
];

export const NavigationFooter = () => {
  const pathname = usePathname();

  function getIcon(icon: string, isActive: boolean) {
    const color = isActive ? "#662ab2" : "#6b7280";
    if (icon === "home") return <Home color={color} />;
    if (icon === "transfers") return <BanknoteArrowDown color={color} />;
    if (icon === "profile") return <UserCircle2 color={color} />;
  }
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        {navLinks.map(({ href, label, icon }, index) => {
          const isActive = pathname === href;
          return (
            <Link href={href} key={index} className={styles.link}>
              <div>{getIcon(icon, isActive)}</div>
              <span
                className={`${styles.label} ${
                  isActive ? styles.activeLabel : ""
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
};
