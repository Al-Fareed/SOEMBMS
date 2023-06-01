import React from "react";
import GaugeChart from "react-gauge-chart";
const Gauge = (props) => {
const  numOfLevels = 1000;
const per = props.value/numOfLevels;

  return (
    <React.Fragment>
      <GaugeChart
        id="gauge-chart2"
        nrOfLevels={numOfLevels}
        arcsLength={[0.25,0.25, 0.25, 0.25]}
        colors={["lightgreen", "yellow","orange", "red"]}
        cornerRadius={0}
        percent={per}
        arcPadding={0}
        textColor={'black'}
        hideText={true}
      />
    </React.Fragment>
  );
};

export default Gauge;
