import React, { useState } from "react";
import Charts from "./Contents/Charts";
import Gauge from "./Contents/Gauge";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import "./Home.css";
import Ads from "./Ads";
const Home = (props) => {
  // const [props.loggedIn] = useState(false);
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
  const years = [
    {
      year: 2012,
      values: [457, 407, 446, 280, 399, 412, 290, 326, 226, 356, 453, 420],
    },
    {
      year: 2013,
      values: [152, 361, 462, 438, 434, 325, 478, 235, 189, 243, 174, 261],
    },
    {
      year: 2014,
      values: [170, 192, 247, 251, 220, 263, 307, 295, 188, 166, 292, 223],
    },
    {
      year: 2015,
      values: [239, 300, 183, 281, 215, 205, 288, 239, 288, 271, 234, 242],
    },
    {
      year: 2016,
      values: [175, 207, 156, 225, 174, 240, 176, 196, 309, 182, 288, 162],
    },
    {
      year: 2017,
      values: [190, 265, 241, 187, 194, 167, 211, 248, 300, 252, 278, 191],
    },
    {
      year: 2018,
      values: [235, 309, 221, 201, 212, 185, 162, 235, 293, 231, 228, 238],
    },
    {
      year: 2019,
      values: [212, 229, 187, 283, 170, 272, 184, 191, 283, 183, 224, 150],
    },
    {
      year: 2020,
      values: [232, 238, 160, 167, 189, 167, 226, 266, 245, 173, 260, 263],
    },
    {
      year: 2021,
      values: [230, 167, 157, 228, 307, 275, 151, 247, 261, 259, 259, 296],
    },
    {
      year: 2022,
      values: [166, 265, 294, 242, 212, 192, 199, 180, 298, 279, 305, 285],
    },
    { year: 2023, values: [416, 195, 308, 239, 350] },
  ];
  const [paymentStatus] = useState(true);
  const reversedYear = years.map((item) => item.year).reverse();
  const currentYear = years[years.length - 1].year;

  const [selectedYear, setSelectedYear] = useState(currentYear);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };
  // to the values of last arrays last values, representing previous month units consumed
  const thisYearValues =
    years.find((item) => item.year === currentYear)?.values || [];
  const unitsConsumedLastMon = thisYearValues[thisYearValues.length - 1];

  const nameOfMonth =
    thisYearValues.length === 1
      ? "Jan"
      : thisYearValues.length === 2
      ? "Feb"
      : thisYearValues.length === 3
      ? "Mar"
      : thisYearValues.length === 4
      ? "Apr"
      : thisYearValues.length === 5
      ? "May"
      : thisYearValues.length === 6
      ? "Jun"
      : thisYearValues.length === 7
      ? "Jul"
      : thisYearValues.length === 8
      ? "Aug"
      : thisYearValues.length === 9
      ? "Sep"
      : thisYearValues.length === 10
      ? "Oct"
      : thisYearValues.length === 11
      ? "Nov"
      : "Dec";

  const selectedYearValues =
    years.find((item) => item.year === parseInt(selectedYear))?.values || [];

  // to calculate total units in each year
  let sumForAvg = 0;
  const unitsPerYear = years.map((yearData) => {
    const sum = yearData.values.reduce(
      (accumulator, value) => accumulator + value,
      0
    );
    sumForAvg += sum;
    return sum;
  });
  const avgUnitsPerMonth = Math.round(sumForAvg / (years.length * 12));

  const paymentHandler = () => {
    alert("This option is no available right now");
  };
  return (
    <div className="home">
      <div className="applyLink">
        <div>
          <i className="fa-solid fa-circle-info fa-2xl"></i>
          &nbsp;{" "}
        </div>
        <div className="application-note">Application for new Smart Meter</div>
        <NavLink to="/New">
          <button className="smart-meter-button">Apply</button>{" "}
        </NavLink>
      </div>

      {props.loggedIn ? (
        <React.Fragment>
          <div className="yearly-chart">
            <Charts
              categories={years.map((item) => item.year)}
              data={unitsPerYear}
            />
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
            <Gauge value={avgUnitsPerMonth} />
            <h3>{avgUnitsPerMonth} units</h3>
            <hr />
            <h2>Average Units per Month </h2>
          </div>
          <div className="lastMonth">
            <h2>Units Consumed Last Month</h2>
            <hr />
            <h1>
              <i className="fa fa-calendar" aria-hidden="true"></i>{" "}
              {nameOfMonth}
            </h1>
            <h1>
              {unitsConsumedLastMon} units -{" "}
              {Math.round(unitsConsumedLastMon * 8.2)} INR
            </h1>
            <hr />
            <div className="paymentButton">
              <button className="view-bill">VIEW BILL</button>
              {!paymentStatus && (
                <button onClick={paymentHandler} className="Pay">
                  PAY BILL
                </button>
              )}
            </div>
          </div>
        </React.Fragment>
      ): //if the user is not logged in render ads page
      <Ads/>}
    </div>
  );
};

export default Home;
