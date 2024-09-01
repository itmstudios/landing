import Link from "next/link"
import styles from "./styles.module.css"

export const AppBar = () => {
  return (
    <header className={styles.root}>
      <nav className={styles.navBar}>
        <ul className={styles.menu}>
          <li>
            <Link href='/projects'>
              Our portfolio
            </Link>
          </li>
          <li>
            <Link href='/about'>
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}