import Photo1 from '../../../public/assets/photo/Photo1.jpg';
import Photo2 from '../../../public/assets/photo/Photo2.jpg';
import Photo3 from '../../../public/assets/photo/Photo3.jpg';
import Image from 'next/image';
import styles from "./styles.module.css";

export const Team = () => {
    return (
        <div className={styles.root}>
            <div className={styles.person_card}>
                <div className={styles.photo_container}>
                    <Image src={Photo1} alt={'photo'} className={styles.person_photo}></Image>
                </div>
                <p className={styles.person_role}>CTO</p>
                <p className={styles.person_name}>Pavel Burns</p>
            </div>

            <div className={styles.person_cart}>
                <div className={styles.photo_container}>
                    <Image src={Photo2} alt={'photo'} className={styles.person_photo}></Image>
                </div>
                <p className={styles.person_role}>CTO</p>
                <p className={styles.person_role}>Dmitriy Korolev</p>
            </div>

            <div className={styles.person_cart}>
                <div className={styles.photo_container}>
                    <Image src={Photo3} alt={'photo'} className={styles.person_photo}></Image>
                </div>
                <p className={styles.person_role}>CTO</p>
                <p className={styles.person_role}>Giuzel Saberova</p>
            </div>
        </div>
    )
}