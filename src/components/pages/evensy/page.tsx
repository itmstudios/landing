import styles from "./styles.module.css";
import Project4 from "../../../../public/assets/images/Project4.jpg";
import Image from "next/image";
import classNames from 'classnames';
import { inter } from '@/app/fonts';
import { LinkWithArrow } from '@/components/ui/linkWithArrow/component';

export const Evensy = () => {
  return (
    <div className={styles.root}>
      <div>
        <h1 className={styles.hidden}>High-quality production for your business</h1>
        <Image src={Project4} alt={"evensy"} className={styles.image}></Image>
        <div className={styles.container}>
          <div>
            <p className={styles.project_name}>Evensy</p>
            <h2 className={classNames(inter.className, styles.header)}>Events system with tickets</h2>
          </div>
          <div>
            <p className={styles.description}>Idea, Design, Developing and Marketing</p>
            <p className={styles.year}>2024</p>
          </div>
        </div>
      </div>
      <LinkWithArrow text={'Next Project'} href='/products/more_capital' />
    </div>
  );
};

