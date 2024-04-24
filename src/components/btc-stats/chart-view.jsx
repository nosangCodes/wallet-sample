import React from "react";
import { Line, LineChart, ResponsiveContainer } from "recharts";

export default function ChartView({ data, dataKey }) {
  return (
    <div style={{ width: "100%", height: "100px", marginBottom: "4px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={data}>
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
