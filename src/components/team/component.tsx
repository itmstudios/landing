import Photo1 from '../../../public/assets/photo/Photo1.jpg';
import Photo2 from '../../../public/assets/photo/Photo2.jpg';
import Photo3 from '../../../public/assets/photo/Photo3.jpg';
import Photo4 from '../../../public/assets/photo/Photo4.png';
import Photo5 from '../../../public/assets/photo/Photo5.png';
import Image from 'next/image';
import styles from "./styles.module.css";

export const Team = () => {
    return (
        <div className={styles.root}>

            <div className={styles.person_cart}>
                <div className={styles.photo_container}>
                    <Image src={Photo2} alt={'photo'} className={styles.person_photo}></Image>
                </div>
                <p className={styles.person_role}>Software Development</p>
                <p className={styles.person_role}>PAVEL BURNS</p>
            </div>

            <div className={styles.person_cart}>
                <div className={styles.photo_container}>
                    <Image src={Photo3} alt={'photo'} className={styles.person_photo}></Image>
                </div>
                <p className={styles.person_role}>Creative & Design</p>
                <p className={styles.person_role}>GIUZEL SABEROVA</p>
            </div>

            <div className={styles.person_cart}>
                <div className={styles.photo_container}>
                    <Image src={Photo4} alt={'photo'} className={styles.person_photo}></Image>
                </div>
                <p className={styles.person_role}>Management & Analytics</p>
                <p className={styles.person_role}>DMITRIY KOROLEV</p>
            </div>

            <div className={styles.person_cart}>
                <div className={styles.photo_container}>
                    <Image src={Photo5} alt={'photo'} className={styles.person_photo}></Image>
                </div>
                <p className={styles.person_role}>Marketing & Production</p>
                <p className={styles.person_role}>SHAMIL</p>
            </div>
        </div>
    )
}