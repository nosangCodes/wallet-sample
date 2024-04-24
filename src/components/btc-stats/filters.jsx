import React from "react";
import styles from "./btc-stats.module.scss";
export default function Filters({ filters = [], onChange, value }) {
  return (
    <div className={styles.filters}>
      {filters &&
        filters?.length > 0 &&
        filters?.map((filter) => (
          <FilterTab
            active={Boolean(value === filter.value)}
            key={filter?.value}
            label={filter?.name}
          />
        ))}
    </div>
  );
}

export function FilterTab({ label = "", active = false }) {
  return (
    <div className={`${styles["filter-tab"]} ${active && styles["active"]}`}>
      {label}
    </div>
  );
}
