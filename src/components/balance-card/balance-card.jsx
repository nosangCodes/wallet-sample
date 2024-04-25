import styles from "./balance-card.module.scss";
import CustomIcon from "../../custom-icon/custom-icon";
import ExtendCard from "../extend-card/extend-card";
import ActionCard from "../acrion-card/action-card";

export default function BalanceCard() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.info}>
          <CustomIcon variant="btc" />
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

      {/* <div className={styles["toggle-action"]}>
        <ChevronDown className={styles.icon} />
      </div> */}
      <ExtendCard>
        <div style={{ display: "flex", marginTop: "10px", columnGap: "10px" }}>
          <ActionCard variant="buy" />
          <ActionCard variant="sell" />
        </div>
      </ExtendCard>
    </div>
  );
}
