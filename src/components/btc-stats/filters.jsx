import React from "react";
import styles from "./btc-stats.module.scss";
export default function Filters({ filters = [], onChange, value = "week" }) {
  return (
    <div className={styles.filters}>
      {filters &&
        filters?.length > 0 &&
        filters?.map((filter) => (
          <FilterTab
            onClick={() => onChange(filter?.value)}
            active={Boolean(value === filter?.value)}
            key={filter?.value}
            label={filter?.name}
          />
        ))}
    </div>
  );
}

export function FilterTab({ label = "", active = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${styles["filter-tab"]} ${active && styles["active"]}`}
    >
      {label}
    </button>
  );
}
