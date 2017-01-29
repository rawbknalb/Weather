import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const WeatherChart = ({ data, type }) => {
  const lineColor = type => {
    if (type === "Temperature") {
      return "#96ceb4";
    } else if (type === "Pressure") {
      return "#ff6f69";
    } else return "#ffcc5c";
  };

  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis tick={false} />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend verticalAlign="top" />
      <Line
        name={type}
        type="monotone"
        dataKey="value"
        stroke={lineColor(type)}
      />
    </LineChart>
  );
};

export default WeatherChart;
