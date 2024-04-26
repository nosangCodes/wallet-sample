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
      { timestamp: "2024-04-23T01:00:00Z", price: 52000 },
      { timestamp: "2024-04-23T02:00:00Z", price: 47000 },
      { timestamp: "2024-04-23T03:00:00Z", price: 54000 },
      { timestamp: "2024-04-23T04:00:00Z", price: 46000 },
      { timestamp: "2024-04-23T05:00:00Z", price: 55000 },
      { timestamp: "2024-04-23T06:00:00Z", price: 45000 },
    ],
    highest: 55000,
    lowest: 45000,
  },
  week: {
    data: [
      { timestamp: "2024-04-17T00:00:00Z", price: 48000 },
      { timestamp: "2024-04-18T00:00:00Z", price: 55000 },
      { timestamp: "2024-04-19T00:00:00Z", price: 42000 },
      { timestamp: "2024-04-20T00:00:00Z", price: 57000 },
      { timestamp: "2024-04-21T00:00:00Z", price: 40000 },
      { timestamp: "2024-04-22T00:00:00Z", price: 59000 },
      { timestamp: "2024-04-23T00:00:00Z", price: 38000 },
    ],
    highest: 59000,
    lowest: 38000,
  },
  month: {
    data: [
      { timestamp: "2024-03-24T00:00:00Z", price: 45000 },
      { timestamp: "2024-03-25T00:00:00Z", price: 60000 },
      { timestamp: "2024-03-26T00:00:00Z", price: 35000 },
      { timestamp: "2024-03-27T00:00:00Z", price: 61000 },
      { timestamp: "2024-03-28T00:00:00Z", price: 34000 },
      { timestamp: "2024-03-29T00:00:00Z", price: 62000 },
      { timestamp: "2024-03-30T00:00:00Z", price: 33000 },
    ],
    highest: 62000,
    lowest: 33000,
  },
  year: {
    data: [
      { timestamp: "2023-04-24T00:00:00Z", price: 100 },
      { timestamp: "2023-05-24T00:00:00Z", price: 70000 },
      { timestamp: "2023-06-24T00:00:00Z", price: 20000 },
      { timestamp: "2023-07-24T00:00:00Z", price: 72000 },
      { timestamp: "2023-08-24T00:00:00Z", price: 18000 },
      { timestamp: "2023-09-24T00:00:00Z", price: 74000 },
      { timestamp: "2023-10-24T00:00:00Z", price: 16000 },
    ],
    highest: 74000,
    lowest: 100,
  },
};
