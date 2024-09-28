"use client";
import { useState, useRef } from "react";
import styles from "./styles.module.css";
import Modal from "../modal/component";
import { SideBar } from "../modal/sideBar/component";
import { Menu } from "../modal/menu/component";

export const AppBar: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isContactUsOpen, setIsContactUsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const toggleContactUs = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsContactUsOpen(prev => !prev);
    if (isModalOpen) {
      setModalOpen(false);
    }
  };

  const openAboutUs = () => {
    if (isContactUsOpen) {
      setIsContactUsOpen(false);
    }
    setModalOpen(true);
  };

  return (
    <header className={styles.root}>
      <nav className={styles.navBar}>
        <ul className={styles.menu}>
          <li>
            <div onClick={toggleContactUs} ref={parentRef}>
              Our portfolio
            </div>
          </li>

          <li>
            <div onClick={openAboutUs}>
              About Us
            </div>
          </li>
        </ul>
      </nav>

      <Modal>
        <SideBar isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        <Menu
          isOpen={isContactUsOpen}
          onClose={() => setIsContactUsOpen(false)}
          parentRef={parentRef}
        />
      </Modal>
    </header>
  );
};

export default AppBar;
