import React, { useState } from "react";
import Charts from "./Contents.js/Charts";
import "./Home.css";

const Home = () => {
  const [loggedIn] = useState(true);
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const year = [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012];

  const reversedYear = [...year].reverse();
 
  const years = [
    { year: 2001, values: [528, 531, 590, 500, 510, 600, 540, 500, 124, 560, 450, 530] },
    { year: 2002, values: [518, 521, 510, 560, 540, 667, 544, 520, 214, 590, 410, 580] },
    { year: 2003, values: [170, 192, 247, 251, 220, 263, 307, 295, 188, 166, 292, 223] },
    { year: 2004, values: [239, 300, 183, 281, 215, 205, 288, 239, 288, 271, 234, 242] },
    { year: 2005, values: [175, 207, 156, 225, 174, 240, 176, 196, 309, 182, 288, 162] },
    { year: 2006, values: [190, 265, 241, 187, 194, 167, 211, 248, 300, 252, 278, 191] },
    { year: 2007, values: [235, 309, 221, 201, 212, 185, 162, 235, 293, 231, 228, 238] },
    { year: 2008, values: [212, 229, 187, 283, 170, 272, 184, 191, 283, 183, 224, 150] },
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

  // to calculate total units in each year
  const unitsPerYear = years.map((yearData) => {
    const sum = yearData.values.reduce((accumulator, value) => accumulator + value, 0);
    return sum;
  });
  
  

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
