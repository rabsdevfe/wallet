"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavigationFooter.module.css";

const navLinks = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/transfers", label: "Transfers", icon: "transfers" },
  { href: "/profile", label: "Profile", icon: "profile" },
];

export const NavigationFooter = () => {
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        {navLinks.map(({ href, label, icon }, index) => {
          const isActive = pathname === href;
          return (
            <Link href={href} key={index} className={styles.link}>
              <div
                className={`${styles.iconWrapper} ${
                  isActive ? styles.activeIcon : ""
                }`}
              >
                <div className={styles.iconPlaceholder}>
                  {/* Aquí iría el ícono SVG basado en el 'icon' */}
                </div>
              </div>
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
