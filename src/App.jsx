import styles from "./App.module.scss";
import BtcWallet from "./components/btc-wallet/btc-wallet";

function App() {
  return (
    <div className={styles["app"]}>
      <BtcWallet />
    </div>
  );
}

export default App;
