
import React from 'react';
import styles from "./styles.module.css";
import Project4 from "../../../../public/assets/images/Project4.jpg";
import Image from "next/image";
import classNames from 'classnames';
import { inter } from '@/app/fonts';
import { LinkWithArrow } from '@/components/ui/linkWithArrow/component';

const ProjectPage: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Image src={Project4} alt={"project 4"} className={styles.image}></Image>
        <div className={styles.container}>
          <div>
            <p className={styles.project_name}>Name</p>
            <h1 className={classNames(inter.className, styles.header)}>Real Estate</h1>
          </div>
          <div>
            <p className={styles.description}>Production</p>
            <p className={styles.year}>2024</p>
          </div>
        </div>
      </div>
      <LinkWithArrow text={'Next Project'} href='/project/5' />
    </div>
  );
};

export default ProjectPage;
