import React, { useState } from "react";
import Charts from "./Contents.js/Charts";
import "./Home.css";
const Home = () => {
  const [loggedIn,setLoggedIn]=useState(false);
  return (
    <React.Fragment>
      {!loggedIn && <div className="applyLInk">
        Request for Smart meter
        <button className="smart-meter-button">Apply</button>
      </div>}
      <div className="chart-container">
        <Charts />
      </div>
    </React.Fragment>
  );
};

export default Home;
