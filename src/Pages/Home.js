import React, { useState } from "react";
import Charts from "./Contents.js/Charts";
import "./Home.css";
const Home = () => {
  const [loggedIn] = useState(true);
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const unitsPerMonth = [350,320,410,450,580,420,463,515,415,440,410];

  return (
    <div className="home">
      {!loggedIn && (
        <div className="applyLInk">
          Request for Smart meter
          <button className="smart-meter-button">Apply</button>
        </div>
      )}
      <div className="monthly-chart">
        <Charts categories={month} data={unitsPerMonth} />
      </div>
    
      
    </div>
  );
};

export default Home;
