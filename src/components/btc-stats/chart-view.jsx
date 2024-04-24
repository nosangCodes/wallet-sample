import React from "react";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import { chartData } from "./data";

export default function ChartView() {
  return (
    <div style={{ width: "100%", height: "100px", marginBottom: "4px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={chartData.year.data}>
          <Line
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
