import React from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';
import { ibmPlexMono } from '@/app/fonts';
import { CloseButton } from '@/components/ui/closeButton/component';
import { motion, AnimatePresence } from 'framer-motion';

interface SideBarProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SideBar: React.FC<SideBarProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={styles.root}
                    initial={{ x: "100%" }}
                    animate={{ x: "0%" }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <CloseButton onClose={onClose} />
                    <h2 className={classNames(ibmPlexMono.className, styles.heading)}>About Us</h2>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

