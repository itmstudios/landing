"use client"
import { useState } from 'react';
import styles from "./styles.module.css";
import Project3 from "../../../../public/assets/images/Project3.jpg";
import Project3_2 from "../../../../public/assets/images/Project3_2.jpg";
import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/ui/button/component';
import classNames from 'classnames';
import { inter } from '@/app/fonts';
import { LinkWithArrow } from '@/components/ui/linkWithArrow/component';
import Modal from '@/components/modal/component';
import { ContactUsModal } from '@/components/modal/contactUs/component';

export const Coffeeshop: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className={styles.root}>
      <div>
        <h1 className={styles.hidden}>Creating unique designs that work for your brand</h1>
        <Image src={Project3} alt={"Coffeeshop"} className={styles.image}></Image>
        <div className={styles.container}>
          <div>
            <p className={styles.project_name}>Сonsept for sale</p>
            <h2 className={classNames(inter.className, styles.header)}>Design for Coffee shop</h2>
          </div>
          <Button className={styles.button} onClick={() => setModalOpen(true)} text={'I wan’t this one'} />
        </div>
      </div>

      <LinkWithArrow text={'Next Project'} href='/products/a-market' />

      <div className={classNames(styles.wrapper, styles.images)}>
        <Image src={Project3_2} alt={"Project ecommers"} className={styles.bottom_image}></Image>
      </div>

      <Modal>
        <ContactUsModal onClose={() => setModalOpen(false)} isOpen={isModalOpen} />
      </Modal>
    </div>
  );
};
