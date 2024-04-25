import React from "react";
import { Dot, Line, LineChart, ResponsiveContainer } from "recharts";

export default function ChartView({ data, dataKey }) {
  return (
    <div style={{ width: "100%", height: "100px", marginBottom: "4px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={data}>
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#ffc743"
            strokeWidth={4}
            dot={<CustomDot isStart={true} length={data?.length} />}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

const CustomDot = ({ cx, cy, stroke, isStart, index, length }) => {
  if (index === length - 1) {
    return (
      <Dot
        cx={cx - 2}
        cy={cy}
        r={5}
        stroke={stroke}
        strokeWidth={2}
        fill="#ffc743"
      />
    );
  }
  return null;
};
