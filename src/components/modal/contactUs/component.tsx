import React from 'react';
import styles from './styles.module.css';
import Form from '../../ui/form/component';
import classNames from 'classnames';
import { ibmPlexMono } from '@/app/fonts';

interface ContactUsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ContactUsModal: React.FC<ContactUsModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose} aria-label="Close"></button>
                <h2 className={classNames(ibmPlexMono.className,styles.heading)}>Leave your contact</h2>
                <Form />
            </div>
        </div>
    );
};
