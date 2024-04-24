import styles from "./App.module.scss";
import BtcWallet from "./components/btc-wallet/btc-wallet";
import { ChartProvider } from "./context/chart-context";

function App() {
  return (
    <div className={styles["app"]}>
      <ChartProvider>
        <BtcWallet />
      </ChartProvider>
    </div>
  );
}

export default App;
