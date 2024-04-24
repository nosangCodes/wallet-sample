import styles from "./btc-stats.module.scss";
import ChartView from "./chart-view";
import Coinvalue from "./coin-value";
export default function BtcChart({ style }) {
  return (
    <div style={{ ...style }} className={styles["chart-container"]}>
      <div className={styles["high-low-container"]}>
        <HighLowValue value={200} low={true} />
        <HighLowValue value={400} />
      </div>
      <ChartView />
      <Coinvalue label={"1BTC=$5.483"} />
    </div>
  );
}

export function HighLowValue({ value = 0, low = false }) {
  return (
    <div className={`${styles["hight-low-indicator"]} ${low && styles["low"]}`}>
      <span></span>
      <p>${value}</p>
    </div>
  );
}
