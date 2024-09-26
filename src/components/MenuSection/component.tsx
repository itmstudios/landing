import Link from "next/link";
import styles from "./styles.module.css";

interface MenuSectionProps {
  title: string;
  items: { label: string; href: string }[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => {
  return (
    <ul className={styles.root}>
      <div className={styles.menuHeader}>{title}</div>
      {items.map((item, index) => (
        <li className={styles.menuItem} key={index}>
          <Link href={item.href}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuSection;
