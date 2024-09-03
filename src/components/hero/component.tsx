import Image from 'next/image';
import styles from './styles.module.css';
import Block1 from '../../../public/assets/images/block1.png';
import Block2 from '../../../public/assets/images/block2.png';
import Block3 from '../../../public/assets/images/block3.png';
import Block4 from '../../../public/assets/images/block4.png';
import Block5 from '../../../public/assets/images/block5.png';
import { BottomMenu } from '../bottomMenu/component';
import Link from 'next/link';
import { Logo } from '../icons/components';

function Hero() {
    return (
        <div className={styles.root}>
            <Image src={Block1} className={styles.block1} alt="block1" />

            <Image src={Block2} className={styles.block2} alt="block2" />

            <Image src={Block3} className={styles.block3} alt="block3" />

            <Image src={Block4} className={styles.block4} alt="block4" />

            <Image src={Block5} className={styles.block5} alt="block5" />

            <div className={styles.logo_container}>
                <Link href={'/project/1'}>
                    <Logo className={styles.logo} />
                </Link>
            </div>

            <section className={styles.hero}>
                <h1 className={styles.heading}>
                    Pushing boundaries with every step: marketing, design, production and more
                </h1>

                <BottomMenu />
            </section>
        </div>
    );
}

export default Hero;
