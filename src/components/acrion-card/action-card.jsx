import styles from "./action-card.module.scss";
import CustomIcon from "../../custom-icon/custom-icon";

export default function ActionCard({ variant = "default" }) {
  const variants = {
    buy: {
      label: "Buy BTC",
      component: (
        <CustomIcon
          style={{
            backgroundImage: "linear-gradient(0deg, #1d71f1 0%, #17c7fb 100%)",
          }}
          variant="dollar"
        />
      ),
    },
    sell: {
      label: "Sell BTC",
      component: <CustomIcon variant="dollar" />,
    },
    default: {
      label: "Click here",
    },
  };
  return (
    <div className={styles.container}>
      {variants[variant]?.component}
      <h4>{variants[variant]?.label}</h4>
    </div>
  );
}
