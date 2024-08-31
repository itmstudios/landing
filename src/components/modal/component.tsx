import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }: React.PropsWithChildren) {
  const [mounted, setMounted] = useState(false);
  const modalContainer = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
    modalContainer.current = document.getElementById("modal-container");
  }, []);

  if (!mounted || !modalContainer.current) {
    return null;
  }

  return createPortal(<>{children}</>, modalContainer.current);
}