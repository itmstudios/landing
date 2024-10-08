import type { Metadata } from "next";
import "./globals.css";
import { AppBar } from "@/components/appBar/component";
import styles from "./layout.module.css";
import classNames from "classnames";
import { ibmPlexMono } from "./fonts";
import { PopupProvider } from "@/contexts/popupContexts";
import Popup from "@/components/popup/component";
import SubmitStatus from "@/components/popup/submitStatus/component";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(ibmPlexMono.className, styles.root)}>
        <PopupProvider>
          <AppBar />
          {children}
          <Popup >
            <SubmitStatus />
          </Popup>
          <div id="modal-container" />
          <div id="popup-container" />
        </PopupProvider>
      </body>
    </html>
  );
}
