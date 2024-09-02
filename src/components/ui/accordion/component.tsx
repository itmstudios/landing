import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles.module.css';
import { ibmPlexMono, inter } from '@/app/fonts';
import classNames from 'classnames';
import Link from 'next/link';
import { Arrow } from '@/components/icons/components';

interface AccordionItemProps {
    title: string;
    content: string;
    listItems?: string[];
    buttonText?: string;
    onLinkClick?: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, listItems, buttonText, onLinkClick = () => { } }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.accordionItem}>
            <button
                className={classNames(ibmPlexMono.className, styles.accordionButton)}
                onClick={toggleAccordion}
                aria-expanded={isOpen}
            >
                {title}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={classNames(inter.className, styles.accordionContent)}
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeIn' }}
                        style={{ originY: 0 }}
                    >
                        <p className={styles.content}>{content}</p>
                        {listItems && (
                            <ul className={styles.list}>
                                {listItems.map((item, index) => (
                                    <li key={index} className={styles.listItem}>{item}</li>
                                ))}
                            </ul>
                        )}
                        {buttonText && (
                            <div className={styles.link} onClick={() => onLinkClick()}>
                                <Link href="/projects">{buttonText}</Link>
                                <Arrow className={styles.arrow} />
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

interface AccordionProps {
    items: AccordionItemProps[];
    onClose: () => void;
}

export const Accordion: React.FC<AccordionProps> = ({ items, onClose }) => {
    return (
        <div className={styles.accordion}>
            {items.map((item, index) => (
                <AccordionItem key={index} {...item} onLinkClick={onClose} />
            ))}
        </div>
    );
};
