"use client";
import Link from "next/link";
import styles from "./styles.module.css";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Modal from "../modal/component";
import { SideBar } from "../modal/sideBar/component";

export const AppBar: React.FC = () => {
  const pathname = usePathname();
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <header className={styles.root}>
      <nav className={styles.navBar}>
        <ul className={styles.menu}>
          <li className={pathname !== '/' ? styles.active : ''}>
            <Link href="/project/barber-shop">
              Our portfolio
            </Link>
          </li>

          <li>
            <div onClick={() => setModalOpen(true)}>
              About Us
            </div>
          </li>
        </ul>
      </nav>
      <Modal>
        <SideBar isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </Modal>
    </header>
  );
};
