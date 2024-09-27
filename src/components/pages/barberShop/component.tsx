"use client"
import { useState } from 'react';
import styles from "./styles.module.css";
import Project1 from "../../../../public/assets/images/Project1.jpg";
import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/ui/button/component';
import Layout_beauty from "../../../../public/assets/images/Layout_beauty.jpg";
import Layout_barber from "../../../../public/assets/images/Layout_barber.jpg";
import classNames from 'classnames';
import { inter } from '@/app/fonts';
import { LinkWithArrow } from '@/components/ui/linkWithArrow/component';
import Modal from '@/components/modal/component';
import { ContactUsModal } from '@/components/modal/contactUs/component';

export const BarberShop = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  
  return (
    <div className={styles.root}>
       <h1 className={styles.hidden}>Creating unique designs that work for your brand</h1>
        <Image src={Project1} alt={"project barder-shop"} className={styles.image}></Image>
        <div className={styles.container}>
          <div>
            <Link href={'/'} className={classNames(inter.className, styles.link)}>Сonsept for sale</Link>
            <h1 className={classNames(inter.className, styles.header)}>Design for Beauty salon and Barber shop</h1>
          </div>
          <Button className={styles.button} onClick={() => setModalOpen(true)} text={'I wan’t this one'} />
        </div>
      <LinkWithArrow text={'Next Project'} href='/products/coffeeshop' />

      <div className={classNames(styles.images)}>
        <Image src={Layout_beauty} alt={"Layout beauty"} className={styles.layout_image}></Image>
        <Image src={Layout_barber} alt={"Layout barber"} className={styles.layout_image}></Image>
      </div>

      <Modal>
        <ContactUsModal onClose={() => setModalOpen(false)} isOpen={isModalOpen} />
      </Modal>
    </div>
  );
};

