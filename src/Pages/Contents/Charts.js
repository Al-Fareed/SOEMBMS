import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import './Chart.css';
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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update screen width on window resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const chartWidth = screenWidth > 768 ? 500 : "100%";

  return (
    <div className="chart-container">
      <Chart
              options={state.options}
              series={state.series}
              type="line"
              width={chartWidth}
            />
    </div>
  );
};

export default Charts;
