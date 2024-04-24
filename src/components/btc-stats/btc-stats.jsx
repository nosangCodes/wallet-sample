import React from "react";
import Filters from "./filters";
import { filters } from "./data";
import BtcChart from "./btc-chart";

export default function BtcStats() {
  return (
    <div>
      <Filters filters={filters} value={"week"} />
      <BtcChart style={{marginTop: "12px"}} />
    </div>
  );
}
