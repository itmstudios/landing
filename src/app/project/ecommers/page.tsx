
import React from 'react';
import styles from "./styles.module.css";
import Project3 from "../../../../public/assets/images/Project3.jpg";
import Project3_2 from "../../../../public/assets/images/Project3_2.jpg";
import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/ui/button/component';
import classNames from 'classnames';
import { inter } from '@/app/fonts';
import { LinkWithArrow } from '@/components/ui/linkWithArrow/component';

const ProjectPage: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
          <Image src={Project3} alt={"project ecommers"} className={styles.image}></Image>
        <div className={styles.container}>
          <div>
            <Link href={'/'} className={classNames(inter.className, styles.link)}>Сonsept for sale</Link>
            <h1 className={classNames(inter.className, styles.header)}>Design for Coffee shop</h1>
          </div>
          <Button className={styles.button} text={'I wan’t this one'} />
        </div>
      </div>

      <LinkWithArrow text={'Next Project'} href='/project/real-estate' />

      <div className={classNames(styles.wrapper, styles.images)}>
        <Image src={Project3_2} alt={"Project ecommers"} className={styles.bottom_image}></Image>
      </div>

    </div>
  );
};

export default ProjectPage;
