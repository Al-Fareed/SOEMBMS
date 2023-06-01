import React, {useState } from "react";
import Charts from "./Contents/Charts";
import Gauge from "./Contents/Gauge";
import "./Home.css";
const Home = () => {
  const [loggedIn] = useState(true);
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

 
  const years = [
    { year: 2001, values: [457, 407, 446, 280, 399, 412, 290, 326, 226, 356, 453, 420] },
    { year: 2002, values: [152, 361, 462, 438, 434, 325, 478, 235, 189, 243, 174, 261] },
    { year: 2003, values: [170, 192, 247, 251, 220, 263, 307, 295, 188, 166, 292, 223] },
    { year: 2004, values: [239, 300, 183, 281, 215, 205, 288, 239, 288, 271, 234, 242] },
    { year: 2005, values: [175, 207, 156, 225, 174, 240, 176, 196, 309, 182, 288, 162] },
    { year: 2006, values: [190, 265, 241, 187, 194, 167, 211, 248, 300, 252, 278, 191] },
    { year: 2007, values: [235, 309, 221, 201, 212, 185, 162, 235, 293, 231, 228, 238] },
    { year: 2008, values: [212, 229, 187, 283, 170, 272, 184, 191, 283, 183, 224, 150] },
    { year: 2009, values: [232, 238, 160, 167, 189, 167, 226, 266, 245, 173, 260, 263] },
    { year: 2010, values: [230, 167, 157, 228, 307, 275, 151, 247, 261, 259, 259, 296] },
    { year: 2011, values: [166, 265, 294, 242, 212, 192, 199, 180, 298, 279, 305, 285] },
    { year: 2012, values: [416, 195, 308, 239, 182, 504, 187, 437, 382, 491, 317, 204] },
  ];
  const reversedYear = years.map((item) => item.year).reverse();
  const lastYear = years[years.length - 1].year;

  const [selectedYear, setSelectedYear] = useState(lastYear);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const selectedYearValues = years.find((item) => item.year === parseInt(selectedYear))?.values || [];

  // to calculate total units in each year
  let sumForAvg=0;
  const unitsPerYear = years.map((yearData) => {
    const sum = yearData.values.reduce((accumulator, value) => accumulator + value, 0);
     sumForAvg += sum;
     return sum;
    });
    const avgUnitsPerMonth = sumForAvg / (years.length * 12);
    
  return (
    <div className="home">
      {!loggedIn && (
        <div className="applyLink">
          Request for Smart meter
          <button className="smart-meter-button">Apply</button>
        </div>
      )}
      <div className="yearly-chart">
        <Charts categories={years.map((item) => item.year)} data={unitsPerYear} />
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
      <div className="avgUnitsPerMon">
        <Gauge />
        <h3>{Math.round(avgUnitsPerMonth)} units</h3>
        <h2>Average Units per Month </h2>
      </div>
    </div>
  );
};

export default Home;
