import { createContext, useEffect, useRef, useState } from "react";
import { chartData } from "../components/btc-stats/data";

export const ChartContext = createContext({
  dataKey: "price",
  selectedFilter: "week",
  handleChangeFilter: () => {},
  data: {
    highest: 0,
    lowest: 0,
    data: null,
  },
});

export const ChartProvider = ({ children }) => {
  const [selectedFilter, setSelectedFilter] = useState("week");
  const [data, setdata] = useState({
    highest: 0,
    lowest: 0,
    data: null,
  });

  let firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current && selectedFilter) {
      firstLoad.current = false;
      setdata(chartData[selectedFilter]);
    }
  }, [selectedFilter]);

  const handleChangeFilter = (value) => {
    setSelectedFilter(value);
    console.log(chartData[value]);
    setdata(chartData[value]);
  };

  const value = {
    dataKey: "price",
    selectedFilter,
    handleChangeFilter,
    data,
  };
  return (
    <ChartContext.Provider value={value}>{children}</ChartContext.Provider>
  );
};
