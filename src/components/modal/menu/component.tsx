import { useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuSection from "../menuSection/component";
import styles from "./styles.module.css";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void; 
  parentRef: React.RefObject<HTMLDivElement>;
}

export const Menu: React.FC<MenuProps> = ({ isOpen, onClose, parentRef }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      menuRef.current &&
      parentRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      !parentRef.current.contains(event.target as Node) 
    ) {
      onClose();
    }
  }, [onClose, parentRef]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  const updateMenuPosition = useCallback(() => {
    if (isOpen && parentRef.current && menuRef.current) {
      const parentRect = parentRef.current.getBoundingClientRect();
      menuRef.current.style.top = `${parentRect.bottom + 8}px`;
      menuRef.current.style.left = `${parentRect.left}px`;
    }
  }, [isOpen, parentRef]);

  useEffect(() => {
    updateMenuPosition();
    window.addEventListener("resize", updateMenuPosition);

    return () => {
      window.removeEventListener("resize", updateMenuPosition);
    };
  }, [isOpen, updateMenuPosition]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          className={styles.root}
          initial={{ y: "-50%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "50%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <MenuSection
            title="Production"
            items={[
              { label: "360", href: "/production/360" },
              { label: "3D", href: "/production/3d" },
            ]}
            onItemClick={onClose} 
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
            onItemClick={onClose} 
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

