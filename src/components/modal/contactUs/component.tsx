import React from 'react';
import styles from './styles.module.css';
import Form from '../../ui/form/component';
import classNames from 'classnames';
import { ibmPlexMono } from '@/app/fonts';
import { CloseButton } from '@/components/ui/closeButton/component';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactUsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ContactUsModal: React.FC<ContactUsModalProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={styles.modalOverlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className={styles.modalContent}
                        initial={{ y: "-50%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        exit={{ y: "50%", opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <CloseButton onClose={onClose} />
                        <h2 className={classNames(ibmPlexMono.className, styles.heading)}>
                            Leave your contact
                        </h2>
                        <Form />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
