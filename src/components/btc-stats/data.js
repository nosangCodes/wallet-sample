export const filters = [
  {
    name: "Day",
    value: "day",
  },
  {
    name: "Week",
    value: "week",
  },
  {
    name: "Month",
    value: "month",
  },
  {
    name: "Year",
    value: "year",
  },
];

export const chartData = {
  day: {
    data: [
      { timestamp: "2024-04-23T00:00:00Z", price: 50000 },
      { timestamp: "2024-04-23T01:00:00Z", price: 50200 },
      { timestamp: "2024-04-23T02:00:00Z", price: 49800 },
      { timestamp: "2024-04-23T03:00:00Z", price: 50400 },
      { timestamp: "2024-04-23T04:00:00Z", price: 50600 },
      { timestamp: "2024-04-23T05:00:00Z", price: 51000 },
      { timestamp: "2024-04-23T06:00:00Z", price: 50500 },
    ],
    highest: 51000,
    lowest: 49800,
  },
  week: {
    data: [
      { timestamp: "2024-04-17T00:00:00Z", price: 48000 },
      { timestamp: "2024-04-18T00:00:00Z", price: 32000 },
      { timestamp: "2024-04-19T00:00:00Z", price: 22000 },
      { timestamp: "2024-04-20T00:00:00Z", price: 28000 },
      { timestamp: "2024-04-21T00:00:00Z", price: 30000 },
      { timestamp: "2024-04-22T00:00:00Z", price: 21000 },
      { timestamp: "2024-04-23T00:00:00Z", price: 27000 },
    ],
    highest: 54000,
    lowest: 48000,
  },
  month: {
    data: [
      { timestamp: "2024-03-24T00:00:00Z", price: 45000 },
      { timestamp: "2024-03-25T00:00:00Z", price: 46000 },
      { timestamp: "2024-03-26T00:00:00Z", price: 47000 },
      { timestamp: "2024-03-27T00:00:00Z", price: 48000 },
      { timestamp: "2024-03-28T00:00:00Z", price: 49000 },
      { timestamp: "2024-03-29T00:00:00Z", price: 50000 },
      { timestamp: "2024-03-30T00:00:00Z", price: 51000 },
    ],
    highest: 51000,
    lowest: 45000,
  },
  year: {
    data: [
      { timestamp: "2023-04-24T00:00:00Z", price: 100 },
      { timestamp: "2023-05-24T00:00:00Z", price: 36000 },
      { timestamp: "2023-06-24T00:00:00Z", price: 20000 },
      { timestamp: "2023-07-24T00:00:00Z", price: 38000 },
      { timestamp: "2023-08-24T00:00:00Z", price: 32000 },
      { timestamp: "2023-09-24T00:00:00Z", price: 48000 },
      { timestamp: "2023-10-24T00:00:00Z", price: 41000 },
    ],
    highest: 41000,
    lowest: 100,
  },
};
