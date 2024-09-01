"use client"
import Link from "next/link";
import styles from "./styles.module.css";
import { usePathname } from "next/navigation"; 

export const AppBar: React.FC = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className={styles.root}>
      <nav className={styles.navBar}>
        <ul className={styles.menu}>
          <li className={isActive('/projects') ? styles.active : ''}>
            <Link href="/projects">
              Our portfolio
            </Link>
          </li>
          <li className={isActive('/about') ? styles.active : ''}>
            <Link href="/about">
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
