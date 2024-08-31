import styles from "./styles.module.css"

export const AppBar = () => {
    return (
        <header className={styles.root}>
        <nav className={styles.navBar}>
          <ul className={styles.menu}>
            <li>
              Our portfolio
            </li>
            <li>
              About Us
            </li>
          </ul>
        </nav>
      </header>
    )
}