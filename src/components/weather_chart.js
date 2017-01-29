import React from "react";
import RC2 from "react-chartjs2"

const WeatherChart = ({ data, type, date }) => {
  const lineColor = type => {
    if (type === "Temperature") {
      return "#96ceb4";
    } else if (type === "Pressure") {
      return "#ff6f69";
    } else return "#ffcc5c";
  };

  const weatherData = {
    labels: date,
    datasets: [
      {
        label: type,
        fill: false,
        lineTension: 0.4,
        backgroundColor: lineColor(type),
        borderColor: lineColor(type),
        borderCapStyle: 'round',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        data
      }
    ]
  }

  return (
    <div>
      <RC2 data={weatherData} type="line"/>
    </div>
  );
};

export default WeatherChart;
