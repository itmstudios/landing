
import React from 'react';
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

const ProjectPage: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
          <Image src={Project1} alt={"project 1"} className={styles.image}></Image>
        <div className={styles.container}>
          <div>
            <Link href={'/'} className={classNames(inter.className, styles.link)}>Сonsept for sale</Link>
            <h1 className={classNames(inter.className, styles.header)}>Design for Beauty salon and Barber shop</h1>
          </div>
          <Button className={styles.button} text={'I wan’t this one'} />
        </div>
      </div>

      <LinkWithArrow text={'Next Project'} href='/project/2' />

      <div className={classNames(styles.wrapper, styles.images)}>
        <Image src={Layout_beauty} alt={"Layout beauty"} className={styles.layout_image}></Image>
        <Image src={Layout_barber} alt={"Layout barber"} className={styles.layout_image}></Image>
      </div>

    </div>
  );
};

export default ProjectPage;
