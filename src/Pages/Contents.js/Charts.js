import React from "react";
import Chart from "react-apexcharts";
import './Chart.css'
// import { useState } from "react";
const Charts = (props) => {
  const state = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: props.categories,
      },
    },
    series: [
      {
        name: "units",
        data: props.data,
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
