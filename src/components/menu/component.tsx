
import MenuSection from "../MenuSection/component";
import styles from "./styles.module.css";

const Menu: React.FC = () => {
  return (
    <div className={styles.root}>
      <MenuSection
        title="Production"
        items={[
          { label: "360", href: "/production/360" },
          { label: "3D", href: "/production/3d" },
        ]}
      />
      <MenuSection
        title="Products"
        items={[
          { label: "Beauty and Barber", href: "/products/beautybarber" },
          { label: "A-Market", href: "/products/a-market" },
          { label: "Coffee Shop", href: "/products/coffeeshop" },
          { label: "Evensy", href: "/products/evensy" },
          { label: "More Capital", href: "/products/more_capital" },
        ]}
      />
    </div>
  );
};

export default Menu;
