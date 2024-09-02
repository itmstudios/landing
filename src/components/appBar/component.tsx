"use client";
import Link from "next/link";
import styles from "./styles.module.css";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Modal from "../modal/component";
import { SideBar } from "../modal/sideBar/component";
import { Logo } from "@/components/icons/components";
import { motion } from "framer-motion";

export const AppBar: React.FC = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <header className={styles.root}>
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: pathname !== '/' ? 0.8 : 1 }}
          transition={{ duration: 0.3 }}
          className={styles.logo_container}
        >
          <Link href={'/'}>
            <Logo className={styles.logo} />
          </Link>
        </motion.div>
        <nav className={styles.navBar}>
          <ul className={styles.menu}>
            <li className={isActive('/projects/1') ? styles.active : ''}>
              <Link href="/projects/1">
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
