import Link from "next/link";
import styles from "./styles.module.css";
import classNames from "classnames";
import { inter } from "@/app/fonts";

export const Contacts = () => {
    return (
        <div className={styles.root}>

            <p className={styles.subheading}>Reach us</p>
            <div className={styles.link_container}>
                <Link href="tel:+38268303904" className={classNames(inter.className, styles.contact_link)}>+38268303904</Link>
                <Link href="mailto:info@itm-studios.com" className={classNames(inter.className, styles.contact_link)}>info@itm-studios.com</Link>
            </div>
            <p className={styles.subheading}>Social media</p>
            <div className={styles.link_container}>
                <Link href="https://www.linkedin.com/company/itmstudios/" className={classNames(inter.className, styles.contact_link)}>LinkedIn</Link>
                <Link href="https://t.me/itmstudios/" className={classNames(inter.className, styles.contact_link)}>Telegram</Link>
                <Link href="https://github.com/itmstudios/" className={classNames(inter.className, styles.contact_link)}>GitHub</Link>
                <Link href="https://www.youtube.com/@itm_studios" className={classNames(inter.className, styles.contact_link)}>YouTube</Link>
            </div>
            <p className={styles.subheading}>Our office</p>
            <div className={styles.link_container}>
                <Link href="/" className={classNames(inter.className, styles.contact_link)}>IT branch house<br />Budva 85310, bb Mediteranska, Hotel Tre Canne</Link>
            </div>

        </div>
    )
}