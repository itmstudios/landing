"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './styles.module.css';
import { usePopup } from '@/contexts/popupContexts';

const SubmitStatus: React.FC = () => {
    const { message, isVisible } = usePopup();
    const controls = useAnimation();
    
    useEffect(() => {
        if (isVisible) {
            controls.start({ opacity: 1, x: 0 });
        } else {
            controls.start({ opacity: 0, x: 50 });
        }
    }, [isVisible, controls]);

    return (
        isVisible && (
            <motion.div
                className={styles.modal}
                initial={{ opacity: 0, x: 50 }}
                animate={controls}
                transition={{ duration: 0.5 }}
            >
                <p>{message}</p>
            </motion.div>
        )
    );
};

export default SubmitStatus;
