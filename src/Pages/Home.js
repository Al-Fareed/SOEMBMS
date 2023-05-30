import React, { useState } from "react";
import Charts from "./Contents.js/Charts";
import "./Home.css";
const Home = () => {
  const [loggedIn] = useState(true);
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const y2001 = [350, 320, 410, 450, 580, 420, 463, 515, 415, 440, 410];

  const years = [
    2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
  ];
  const reversedYear = [...years].reverse();
  const unitsPerYear = [
    2051, 750, 3525, 5000, 2510, 6578, 4589, 3652, 4500, 2002, 5621, 3652,
  ];

  return (
    <div className="home">
      {!loggedIn && (
        <div className="applyLink">
          Request for Smart meter
          <button className="smart-meter-button">Apply</button>
        </div>
      )}
      <div className="yearly-chart">
        <Charts categories={years} data={unitsPerYear} />
      </div>
      <div className="monthly-chart">
        <div className="year-container">
          Select the year:&nbsp;
          <select name="" id="">
            {reversedYear.map((year)=>(
              <option value={year}>{year}</option>
            ))}
          </select>
        </div>
        <hr />
        <Charts categories={month} data={y2001} />
      </div>
    </div>
  );
};

export default Home;
