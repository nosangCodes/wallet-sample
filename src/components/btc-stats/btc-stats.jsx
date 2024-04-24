import React, { useContext } from "react";
import Filters from "./filters";
import { filters } from "./data";
import BtcChart from "./btc-chart";
import { ChartContext } from "../../context/chart-context";

export default function BtcStats() {
  const { handleChangeFilter, selectedFilter } = useContext(ChartContext);
  return (
    <div>
      <Filters
        onChange={handleChangeFilter}
        filters={filters}
        value={selectedFilter}
      />
      <BtcChart style={{ marginTop: "12px" }} />
    </div>
  );
}
