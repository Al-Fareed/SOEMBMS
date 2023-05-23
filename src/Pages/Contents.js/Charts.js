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
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
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
