import React from "react";
import NavHeader from "../nav-header/nav-header";
import styles from "./btc-wallet.module.scss";
import BottomNav from "../bottom-nav/bottom-nav";
import WalletInfo from "../wallet-information/wallet-info";

export default function BtcWallet() {
  return (
    <section className={styles.container}>
      <NavHeader />
      <WalletInfo />
      <BottomNav />
    </section>
  );
}
