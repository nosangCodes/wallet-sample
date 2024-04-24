import React from "react";
import NavHeader from "../nav-header/nav-header";
import styles from "./btc-wallet.module.scss";
import BottomNav from "../bottom-nav/bottom-nav";

export default function BtcWallet() {
  return (
    <section className={styles.container}>
      <NavHeader />
      <BottomNav />
    </section>
  );
}
