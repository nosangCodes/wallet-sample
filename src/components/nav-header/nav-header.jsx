import {
  ArrowUpFromLine,
  ChevronLeft,
  CircleX,
  EllipsisVertical,
  FilePenLine,
  Package2,
} from "lucide-react";
import React from "react";
import styles from "./nav.module.scss";
import FloatingMenu from "../floating-menu/floating-menu";

export default function NavHeader() {
  return (
    <div className={styles.container}>
      <ChevronLeft className={styles["nav-icon"]} />
      <h1>Bitcoin Wallet</h1>
      <FloatingMenu
        anchor="bottom-left"
        trigger={<EllipsisVertical className={styles["nav-icon"]} />}
      >
        <HeaderMenu />
      </FloatingMenu>
    </div>
  );
}

const options = [
  {
    name: "Edit",
    value: "edit",
    icon: <FilePenLine className={styles.icon} />,
  },
  {
    name: "Courier info",
    value: "courier-info",
    icon: <Package2 className={styles.icon} />,
  },
  {
    name: "Share",
    value: "share",
    icon: <ArrowUpFromLine className={styles.icon} />,
  },
  {
    name: "Remove",
    value: "Remove",
    icon: <CircleX className={styles.icon} />,
  },
];

export const HeaderMenu = () => {
  return (
    <div className={styles.menu}>
      {options?.map((option) => (
        <div key={option.value}>
          <p>{option.name}</p>
          {option.icon}
        </div>
      ))}
    </div>
  );
};
