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

interface SideBarProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SideBar: React.FC<SideBarProps> = ({ isOpen, onClose }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleCloseModal = () => {
        onClose(); 
    };

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
                        <div className={styles.image_container}>
                            <Image
                                src={Photo}
                                alt="Photo"
                                className={styles.image}
                            />
                        </div>
                        <Button className={styles.contact_us_button} onClick={() => setModalOpen(true)} text="Contact Us" />
                        <Modal>
                            <ContactUsModal onClose={() => setModalOpen(false)} isOpen={isModalOpen} />
                        </Modal>

                        <h2 className={classNames(ibmPlexMono.className, styles.heading)}>Services</h2>
                        <Accordion items={items} onClose={handleCloseModal}/>

                        <h2 className={classNames(ibmPlexMono.className, styles.heading)}>Team</h2>

                        <h2 className={classNames(ibmPlexMono.className, styles.heading)}>Contact</h2>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
