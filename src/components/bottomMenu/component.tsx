"use client"
import { useState } from "react";
import Modal from "../modal/component";
import { ContactUsModal } from "../modal/contactUs/component";
import { Button } from "../ui/button/component";
import styles from "./styles.module.css";

export const BottomMenu = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className={styles.root}>
            <div className={styles.bottom_menu_wrapper}>
                <span className={styles.location}>Location</span>
                <div className={styles.cities}>
                    <span>Budva</span>
                </div>
            </div>
            <Button onClick={() => setModalOpen(true)} text="Contact Us" />
                <Modal>
                    <ContactUsModal onClose={() => setModalOpen(false)} isOpen={isModalOpen} />
                </Modal>
        </div>
    );
};
