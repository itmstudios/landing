import styles from "./styles.module.css";
import Project5_1 from "../../../../public/assets/images/Project5_1.jpg";
import Project5_2 from "../../../../public/assets/images/Project5_1.jpg";
import Project5_3 from "../../../../public/assets/images/Project5_1.jpg";
import Image from "next/image";
import classNames from 'classnames';
import { inter } from '@/app/fonts';
import { LinkWithArrow } from '@/components/ui/linkWithArrow/component';
import Link from 'next/link';

export const RealEstate = () => {
  return (
    <div className={styles.root}>
      <div>
      <h1 className={styles.hidden}>Showcasing Real Estate with Stunning Visuals</h1>
        <div className={styles.images_container}>
          <Image src={Project5_1} alt={"project Real Estate"} className={styles.image1}></Image>
          <Image src={Project5_2} alt={"project Real Estate"} className={styles.image2}></Image>
          <Image src={Project5_3} alt={"project Real Estate"} className={styles.image3}></Image>
        </div>
        <div className={styles.container}>
          <div>
            <Link href={"https://morecapital.me/"} target="_blank" rel="noopener noreferrer" className={styles.project_name}>More Capital</Link>
            <h1 className={classNames(inter.className, styles.header)}>Real Estate</h1>
          </div>
          <div>
            <p className={styles.description}>Design and Developing</p>
            <p className={styles.year}>2024</p>
          </div>
        </div>
      </div>
      <LinkWithArrow text={'Next Project'} href='/production/360'/>
    </div>
  );
};
