import React from "react";
import styles from "./btc-stats.module.scss";

export default function Coinvalue({ label }) {
  return (
    <div className={styles["coin-value"]}>
      <span></span>
      <h3>{label}</h3>
    </div>
  );
}
