import React from "react";
import Chart from "react-apexcharts";
import './Chart.css'
// import { useState } from "react";
const Charts = () => {
  const state = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","Dec"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [2051,750,4525,5000,2510,6578,4589,3652,4500,2002,5621,3652],
      },
    ],
  }
  return (
    <div className="chart-container">
      <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="500"
            />
    </div>
  );
};

export default Charts;
