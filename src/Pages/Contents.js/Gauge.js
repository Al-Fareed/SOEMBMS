import React from "react";
import GaugeChart from "react-gauge-chart";
const Gauge = () => {
  return (
    <React.Fragment>
      <GaugeChart
        id="gauge-chart2"
        nrOfLevels={420}
        arcsLength={[0.33, 0.33, 0.33]}
        colors={["#5BE12C", "#F5CD19", "#EA4228"]}
        cornerRadius={0}
        percent={0.20}
        arcPadding={0}
        textColor={'black'}
        hideText='true'
      />
    </React.Fragment>
  );
};

export default Gauge;
