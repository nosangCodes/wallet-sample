import { ChevronLeft, EllipsisVertical } from "lucide-react";
import React from "react";
import styles from "./nav.module.scss";
import FloatingMenu from "../floating-menu/floating-menu";

export default function NavHeader() {
  return (
    <div className={styles.container}>
      <ChevronLeft className={styles["nav-icon"]} />
      <h1>Bitcoin Wallet</h1>
      <FloatingMenu
        trigger={<EllipsisVertical className={styles["nav-icon"]} />}
      />
    </div>
  );
}
