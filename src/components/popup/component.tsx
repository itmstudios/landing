"use client"
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function Popup({ children }: React.PropsWithChildren) {
  const [mounted, setMounted] = useState(false);
  const popupContainer = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
    popupContainer.current = document.getElementById("popup-container");
  }, []);

  if (!mounted || !popupContainer.current) {
    return null;
  }

  return createPortal(<>{children}</>, popupContainer.current);
}