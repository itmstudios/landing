"use client";
import React, { useState } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';
import { ibmPlexMono, inter } from '@/app/fonts';
import { CloseButton } from '@/components/ui/closeButton/component';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Photo from '../../../../public/assets/images/Photo.jpg';
import { Button } from '@/components/ui/button/component';
import Modal from '../component';
import { ContactUsModal } from '../contactUs/component';
import { Accordion } from '@/components/ui/accordion/component';
import { Team } from '@/components/team/component';
import { Contacts } from '@/components/contacts/component';
import { Footer } from '@/components/footer/component';

interface SideBarProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SideBar: React.FC<SideBarProps> = ({ isOpen, onClose }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleCloseModal = () => {
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={styles.modalOverlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <motion.div
                        className={styles.root}
                        initial={{ x: "50%", opacity: 0 }}
                        animate={{ x: "0%", opacity: 1 }}
                        exit={{ x: "50%", opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <CloseButton onClose={onClose} />
                        <h2 className={classNames(ibmPlexMono.className, styles.heading)}>About Us</h2>
                        <p className={classNames(inter.className, styles.description)}>
                            We combine creative marketing with cutting-edge development technologies. We launch unique products, develop designs, and create marketing strategies that help grow your brand and attract new customers. No matter the complexity of the task, whether it’s creating a website or app, photo/video content, motion or graphic design, we are ready to provide you with a full range of services to achieve your goals.
                        </p>
                            <Image
                                src={Photo}
                                alt="Photo"
                                className={styles.image}
                            />
                        <Button className={styles.contact_us_button} onClick={() => setModalOpen(true)} text="Contact Us" />
                        <Modal>
                            <ContactUsModal onClose={() => setModalOpen(false)} isOpen={isModalOpen} />
                        </Modal>

                        <h2 className={classNames(ibmPlexMono.className, styles.heading)}>Services</h2>
                        <Accordion onClose={handleCloseModal} />

                        <h2 className={classNames(ibmPlexMono.className, styles.heading)}>Team</h2>
                        <Team />

                        <h2 className={classNames(ibmPlexMono.className, styles.heading)}>Contact</h2>
                        <Contacts />

                        <Footer />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
