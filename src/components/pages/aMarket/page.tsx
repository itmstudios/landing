import styles from "./styles.module.css";
import Project2 from "../../../../public/assets/images/Project2.jpg";
import Image from "next/image";
import classNames from 'classnames';
import { inter } from '@/app/fonts';
import { LinkWithArrow } from '@/components/ui/linkWithArrow/component';
import Link from 'next/link';

export const AMarket = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <h1 className={styles.hidden}>ITM Studios: Digital Product Development for Business</h1>
        <Image src={Project2} alt={"marketplace A-market"} className={styles.image}></Image>
        <div className={styles.container}>
          <div>
            <Link href={"https://a-market.me"} target="_blank" rel="noopener noreferrer" className={styles.project_name}>A-market</Link>
            <h2 className={classNames(inter.className, styles.header)}>Marketplace</h2>
          </div>
          <div>
            <p className={styles.description}>Design,Developing<br />and Marketing</p>
            <p className={styles.year}>2024</p>
          </div>
        </div>
      </div>
      <LinkWithArrow text={'Next Project'} href='/ecommers' />
    </div>
  );
};

