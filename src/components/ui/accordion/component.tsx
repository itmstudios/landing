import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles.module.css';
import { ibmPlexMono, inter } from '@/app/fonts';
import classNames from 'classnames';
import { LinkWithArrow } from '../linkWithArrow/component';

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
                            <LinkWithArrow text={buttonText} variant='left' href='/barber-shop' onClick={onLinkClick}/>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

interface AccordionProps {
    onClose: () => void;
}

export const Accordion: React.FC<AccordionProps> = ({ onClose }) => {
    const items = [
        {
            title: 'Brand Design',
            content: 'Enhance your existing brand or create a unique brand identity from scratch. Our team will develop a design concept, product packaging, logo, brand page, and creative solutions for social media and print materials. We’ll help you stand out in the market and strengthen your brand’s position.',
            listItems: [
                'Design concept from scratch',
                'Product packaging',
                'Brand website',
                'Logo',
                'Print materials'
            ],
            buttonText: 'Explore our portfolio'
        },
        {
            title: 'Marketing and Advertising',
            content: 'Unlock the potential of your business with our marketing strategies. We will conduct market research, develop, and implement a plan to promote your brand. SEO optimization, social media and messenger marketing, PR, and personalized special projects – all these will help you achieve your business promotion goals.',
            listItems: [
                'Market research',
                'Brand development',
                'SEO optimization',
                'Social media development',
                'Social media marketing',
                'Messenger advertising',
                'Community advertising',
                'PR and personalized projects'
            ],
            buttonText: 'Explore our portfolio'
        },
        {
            title: 'Business Development',
            content: 'Optimize your business processes using the latest technologies and business solutions. We develop and implement solutions to help your brand grow: creating websites and apps, automating processes, and providing support at all stages.',
            listItems: [
                'Brand website development',
                'Product and app development',
                'Process optimization',
                'Client request automation',
                'Business process automation systems',
                'Bots and neural networks',
                'Support'
            ],
            buttonText: 'Explore our portfolio'
        },
        {
            title: 'Production',
            content: 'Dive into the world of video content and showcase yourself to your audience. We create exclusive projects, including photo and video shoots, Reels, AR and VR, post-processing, motion design, and 3D models. Our advantages are a professional team, full production cycle, tight deadlines, quick edits, and high quality in details. We create content that touches the hearts of the audience.',
            listItems: [
                'Photo',
                'Video',
                'Reels',
                'Post-processing',
                'Post-production',
                'Motion design, graphics, and animation',
                'Drone photo/video',
                '3D model creation',
                '360 reviews'
            ],
            buttonText: 'Explore our portfolio'
        }
    ];
    return (
        <div className={styles.root}>
            {items.map((item, index) => (
                <AccordionItem key={index} {...item} onLinkClick={onClose} />
            ))}
        </div>
    );
};
