import { Bell, Compass, Settings, WalletMinimal } from "lucide-react";
import styles from "./bottom-nav.module.scss";

export default function BottomNav() {
  return (
    <div className={styles.container}>
      <WalletMinimal
        className={`${styles["bottom-nav-icon"]} ${styles["active"]}`}
      />
      <Compass className={styles["bottom-nav-icon"]} />
      <Bell className={styles["bottom-nav-icon"]} />
      <Settings className={styles["bottom-nav-icon"]} />
    </div>
  );
}
