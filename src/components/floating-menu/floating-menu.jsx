import { useState, useEffect, useRef } from "react";
import { EllipsisVertical } from "lucide-react";
import styles from "./floating-menu.module.scss";

export default function FloatingMenu({
  trigger = <EllipsisVertical />,
  children,
}) {
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (triggerRef.current && menuRef.current) {
      const { top, left } = triggerRef.current.getBoundingClientRect();
      const triggerWidth = triggerRef.current.offsetWidth;
      const menuWidth = menuRef.current.offsetWidth;

      const newLeft = left + triggerWidth / 2 - menuWidth / 2;
      const newTop = top + triggerRef.current.offsetHeight;

      setMenuPosition({ top: newTop, left: newLeft });
    }
  }, [menuVisible]);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div ref={triggerRef} className={styles.trigger} onClick={toggleMenu}>
        {trigger}
      </div>
      {menuVisible && (
        <div
          ref={menuRef}
          className={styles.menu}
          style={{ top: menuPosition.top, left: menuPosition.left }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
