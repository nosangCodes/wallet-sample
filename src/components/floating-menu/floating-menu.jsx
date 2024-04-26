import { Edit, EllipsisVertical } from "lucide-react";
import styles from "./floating-menu.module.scss";
import { useRef, useState } from "react";

export default function FloatingMenu({
  trigger = <EllipsisVertical />,
  anchor = "bottom-left",
  children,
}) {
  // anchor = "bottom-left" | "bottom-right";
  const triggerRef = useRef(null);
  const [open, setOpen] = useState(false);

  const anchors = {
    "bottom-left": {
      top: 0,
      right: 14,
    },
    "bottom-right": {
      top: 0,
      left: 14,
    },
  };

  return (
    <div>
      <div
        onClick={() => setOpen(true)}
        ref={triggerRef}
        className={styles.trigger}
      >
        {trigger}
      </div>
      <div
        className={`${styles["menu-content"]} ${
          open ? styles.show : styles.hide
        }`}
      >
        <div onClick={() => setOpen(false)} className={styles.overlay} />
        <div className={styles.content}>
          <div style={anchors[anchor]} className={styles.menu}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
