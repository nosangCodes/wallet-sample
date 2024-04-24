import { ChevronDown } from "lucide-react";
import BtcIcon from "../../custom-icon/btc-icon";
import styles from "./balance-card.module.scss";

export default function BalanceCard() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.info}>
          <BtcIcon />
          <h5>Bitcoin</h5>
        </div>
        <h5>BTC</h5>
      </div>

      <div className={styles["btc-bal"]}>
        <h1>3.529020 BTC</h1>
      </div>

      <div className={styles["usd-bal"]}>
        <h3>$19.153 USD</h3>
        <div>-2.32%</div>
      </div>

      <div className={styles["toggle-action"]}>
        <ChevronDown className={styles.icon} />
      </div>
    </div>
  );
}
