import Image from 'next/image';
import styles from './styles.module.css';
import Logo from '../../../public/assets/Logo.png';
import Block1 from '../../../public/assets/images/block1.png';
import Block1_min from '../../../public/assets/images/block1_min.png';
import Block2 from '../../../public/assets/images/block2.png';
import Block2_min from '../../../public/assets/images/block2_min.png';
import Block3 from '../../../public/assets/images/block3.png';
import Block3_min from '../../../public/assets/images/block3_min.png';
import Block4 from '../../../public/assets/images/block4.png';
import Block5 from '../../../public/assets/images/block5.png';
import Block5_min from '../../../public/assets/images/block5_min.png';
import { BottomMenu } from '../bottomMenu/component';

function Hero() {
    return (
        <div className={styles.root}>
            <picture className={styles.block1}>
                <source srcSet={Block1.src} media="(min-width: 900px)" />
                <Image src={Block1_min} className={styles.block1} alt="block1" layout="responsive" />
            </picture>

            <picture className={styles.block2}>
                <source srcSet={Block2.src} media="(min-width: 900px)" />
                <Image src={Block2_min}  alt="block2" layout="responsive" />
            </picture>

            <picture className={styles.block3}>
                <source srcSet={Block3.src} media="(min-width: 900px)" />
                <Image src={Block3_min} alt="block3" layout="responsive" />
            </picture>

            <picture className={styles.block4}>
            <Image src={Block4} alt="block4" layout="responsive" />
            </picture>

            <picture  className={styles.block5}>
                <source srcSet={Block5.src} media="(min-width: 900px)" />
                <Image src={Block5_min} alt="block5" layout="responsive" />
            </picture>

            <section className={styles.hero}>
                <div className={styles.logo_container}>
                    <Image src={Logo} className={styles.logo} alt="logo" />
                </div>
                <h1 className={styles.info}>
                    Pushing boundaries with every step: marketing, design, production and more
                </h1>

                <BottomMenu />
            </section>
        </div>
    );
}

export default Hero;
