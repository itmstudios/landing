import { inter } from "@/app/fonts";
import styles from "./styles.module.css";

export const Footer = () => {
    return (
        <div className={styles.root}>
            <span className={inter.className}>©️2024. ITMstudios</span>
            <span className={inter.className}>All rights reserved</span>
        </div>
    )
}