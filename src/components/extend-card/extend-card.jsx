import { useEffect, useRef, useState } from "react";
import styles from "./extend-card.module.scss";
import { ChevronDown } from "lucide-react";

export default function ExtendCard({
  children,
  actionBtn = <ChevronDown className={styles.icon} />,
}) {
  const ref = useRef(null);
  const [extended, setExtended] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const toggleExtend = () => {
    setExtended((prev) => !prev);
  };

  useEffect(() => {
    console.log("🚀 ~ useEffect ~ ref:", ref.current);
    if (ref.current) {
      setContentHeight(ref.current.clientHeight + 10);
      console.log(
        ref.current.clientHeight
      );
    }
  }, [children, ref]);

  return (
    <div
      className={`${styles.container} ${
        extended ? styles.extended : styles.closed
      }`}
    >
      <div
        style={{ height: extended ? contentHeight : 0 }}
        className={`${styles["content"]}`}
      >
        <div ref={ref}>{children}</div>
      </div>
      <button onClick={toggleExtend} className={styles["action-btn"]}>
        {actionBtn}
      </button>
    </div>
  );
}
