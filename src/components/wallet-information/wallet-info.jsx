import React from "react";
import styles from "./wallet-info.module.scss";
import BalanceCard from "../balance-card/balance-card";
import BtcStats from "../btc-stats/btc-stats";
import ActionCard from "../acrion-card/action-card";

export default function WalletInfo() {
  return (
    <div className={styles["container"]}>
      <BalanceCard />
      <BtcStats />
      {/* <div className={styles.actions}>
        <ActionCard variant="buy" />
        <ActionCard variant="sell" />
      </div> */}
    </div>
  );
}
