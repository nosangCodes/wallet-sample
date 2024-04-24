import React from "react";
import "./custom-icon.scss";
import { Bitcoin, DollarSign } from "lucide-react";

export default function CustomIcon({ variant = "btc", style }) {
  const variants = {
    btc: {
      name: "btc",
      icon: <Bitcoin className="icon" />,
    },
    dollar: {
      name: "dollar",
      icon: <DollarSign className="icon" />,
    },
  };
  return (
    <div
      style={{ ...style }}
      className={`custom-icon ${variants[variant]?.name} `}
    >
      {variants[variant]?.icon}
    </div>
  );
}
