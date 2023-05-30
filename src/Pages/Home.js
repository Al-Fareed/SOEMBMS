import React, { useState } from "react";
import Charts from "./Contents.js/Charts";
import "./Home.css";

const Home = () => {
  const [loggedIn] = useState(true);
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const year = [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012];

  const reversedYear = [...year].reverse();
  const unitsPerYear = [
    2051, 750, 3525, 5000, 2510, 6578, 4589, 3652, 4500, 2002, 5621, 3652,
  ];
  const years = [
    { year: 2001, values: [528, 531, 590, 500, 510, 600, 540, 500, 124, 560, 450, 530] },
    { year: 2002, values: [518, 521, 510, 560, 540, 667, 544, 520, 214, 590, 410, 580] },
    { year: 2003, values: [518, 521, 510, 560, 540, 667, 544, 520, 214, 590, 410, 580] },
    { year: 2004, values: [518, 521, 510, 560, 540, 667, 544, 520, 214, 590, 410, 580] },
    { year: 2005, values: [518, 521, 510, 560, 540, 667, 544, 520, 214, 590, 410, 580] },
    { year: 2006, values: [518, 521, 510, 560, 540, 667, 544, 520, 214, 590, 410, 580] },
    { year: 2007, values: [518, 521, 510, 560, 540, 667, 544, 520, 214, 590, 410, 580] },
    { year: 2008, values: [518, 521, 510, 560, 540, 667, 544, 520, 214, 590, 410, 580] },
    { year: 2009, values: [518, 521, 510, 560, 540, 667, 544, 520, 214, 590, 410, 580] },
    { year: 2010, values: [518, 521, 510, 560, 540, 667, 544, 520, 214, 590, 410, 580] },
    { year: 2011, values: [518, 521, 510, 560, 540, 667, 544, 520, 214, 590, 410, 580] },
    { year: 2012, values: [210, 255, 300, 180, 313, 275, 354, 320, 414, 290, 310, 280] },
  ];
  const lastYear = years[years.length - 1].year;

  const [selectedYear, setSelectedYear] = useState(lastYear);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const selectedYearValues = years.find((item) => item.year === parseInt(selectedYear))?.values || [];

  return (
    <div className="home">
      {!loggedIn && (
        <div className="applyLink">
          Request for Smart meter
          <button className="smart-meter-button">Apply</button>
        </div>
      )}
      <div className="yearly-chart">
        <Charts categories={year} data={unitsPerYear} />
      </div>
      <div className="monthly-chart">
        <div className="year-container">
          Select the year:&nbsp;
          <select name="" id="" onChange={handleYearChange}>
            {reversedYear.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <hr />
        <Charts categories={month} data={selectedYearValues} />
      </div>
    </div>
  );
};

export default Home;
