import { ReactNode } from "react";
import styles from "./layout.module.css";
import { Footer } from "@/components/footer/component";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.header}></div>
      <div className={styles.wrapper}>
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;