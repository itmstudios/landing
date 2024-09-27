import Link from "next/link";
import styles from "./styles.module.css";

interface MenuSectionProps {
  title: string;
  items: { label: string; href: string }[];
  onItemClick?: () => void; 
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items, onItemClick }) => {
  return (
    <ul className={styles.root}>
      <div className={styles.menuHeader}>{title}</div>
      {items.map((item, index) => (
        <li className={styles.menuItem} key={index}>
          <Link href={item.href} onClick={onItemClick}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuSection;
