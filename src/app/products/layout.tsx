import { ReactNode } from "react";
import styles from "./layout.module.css";
import { Footer } from "@/components/footer/component";
import Link from "next/link";
import { Logo } from "@/components/icons/components";
import Menu from "@/components/menu/component";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.logo_container}>
          <Link href={'/'}>
            <Logo className={styles.logo} />
          </Link>
        </div>
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
