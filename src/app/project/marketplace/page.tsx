
import React from 'react';
import styles from "./styles.module.css";
import Project2 from "../../../../public/assets/images/Project2.jpg";
import Image from "next/image";
import Link from 'next/link';
import classNames from 'classnames';
import { inter } from '@/app/fonts';
import { LinkWithArrow } from '@/components/ui/linkWithArrow/component';

const ProjectPage: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
          <Image src={Project2} alt={"project marketplace"} className={styles.image}></Image>
        <div className={styles.container}>
          <div>
            <p className={styles.project_name}>A-market</p>
            <h1 className={classNames(inter.className, styles.header)}>Marketplace</h1>
          </div>
{/* 
          <Link href={"https://a-market.me"} target="_blank" rel="noopener noreferrer" className={classNames(inter.className, styles.link)}>Explore here</Link> */}

          <div>
            <p className={styles.description}>Design,Developing<br/>and Marketing</p>
            <p className={styles.year}>2024</p>
          </div>
        </div>
      </div>
      <LinkWithArrow text={'Next Project'} href='/project/ecommers'/>
    </div>
  );
};

export default ProjectPage;
