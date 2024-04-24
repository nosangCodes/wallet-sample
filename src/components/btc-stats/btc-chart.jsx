import { useContext } from "react";
import styles from "./btc-stats.module.scss";
import ChartView from "./chart-view";
import Coinvalue from "./coin-value";
import { ChartContext } from "../../context/chart-context";
export default function BtcChart({ style }) {
  const { data, dataKey } = useContext(ChartContext);

  return (
    <div style={{ ...style }} className={styles["chart-container"]}>
      <div className={styles["high-low-container"]}>
        <HighLowValue value={data?.lowest} low={true} />
        <HighLowValue value={data?.highest} />
      </div>
      <ChartView dataKey={dataKey} data={data?.data} />
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
